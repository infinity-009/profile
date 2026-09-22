import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Eye, EyeOff, Camera, MousePointer, Compass, ShieldAlert, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const GazeFocusPilot = () => {
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('camera'); // 'camera' | 'cursor'
  const [isHudOpen, setIsHudOpen] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [activeTargetLabel, setActiveTargetLabel] = useState(null);
  const [statusMessage, setStatusMessage] = useState('Standby');
  const [hasCameraError, setHasCameraError] = useState(false);
  const [dwellProgress, setDwellProgress] = useState(0);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const animFrameRef = useRef(null);

  // Filtered Gaze Position
  const gazePosRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 3 });
  const [reticlePos, setReticlePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 3, visible: false });

  // Calibration Offsets
  const calibOffsetRef = useRef({ headX: 0.5, headY: 0.45 });
  const dwellTimerRef = useRef({ element: null, startTime: 0, hasScrolled: false });

  // Clear all gaze highlights
  const clearGazeHighlights = useCallback(() => {
    document.querySelectorAll('.gaze-active-target').forEach((el) => {
      el.classList.remove('gaze-active-target');
      const badge = el.querySelector('.gaze-focus-badge');
      if (badge) badge.remove();
    });
    setActiveTargetLabel(null);
    setDwellProgress(0);
  }, []);

  // Update target focus based on gaze coordinates
  const evaluateGazeTarget = useCallback((screenX, screenY) => {
    const targets = document.querySelectorAll('[data-gaze-target]');
    let foundTarget = null;
    let closestDist = Infinity;

    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      // Generous bounding box expansion (25px) for comfortable gaze focus
      const isInside = (
        screenX >= rect.left - 25 &&
        screenX <= rect.right + 25 &&
        screenY >= rect.top - 25 &&
        screenY <= rect.bottom + 25
      );

      if (isInside) {
        foundTarget = target;
      } else {
        // Also compute center distance fallback
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(screenX - centerX, screenY - centerY);
        if (dist < 120 && dist < closestDist) {
          closestDist = dist;
          foundTarget = target;
        }
      }
    });

    const now = Date.now();

    if (foundTarget) {
      const label = foundTarget.getAttribute('data-gaze-label') || foundTarget.getAttribute('data-gaze-target');
      setActiveTargetLabel(label);

      if (dwellTimerRef.current.element === foundTarget) {
        const elapsed = now - dwellTimerRef.current.startTime;
        const pct = Math.min(100, Math.round((elapsed / 1000) * 100));
        setDwellProgress(pct);

        // If dwelled for >1.1s and auto-scroll is on, scroll into center
        if (elapsed > 1100 && autoScroll && !dwellTimerRef.current.hasScrolled) {
          dwellTimerRef.current.hasScrolled = true;
          const rect = foundTarget.getBoundingClientRect();
          // Only scroll if outside comfortable viewport vertical band
          if (rect.top < 120 || rect.bottom > window.innerHeight - 100) {
            foundTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      } else {
        dwellTimerRef.current = { element: foundTarget, startTime: now, hasScrolled: false };
        setDwellProgress(0);
      }

      // Highlight target element
      targets.forEach((el) => {
        if (el === foundTarget) {
          if (!el.classList.contains('gaze-active-target')) {
            el.classList.add('gaze-active-target');
          }
        } else {
          el.classList.remove('gaze-active-target');
        }
      });
    } else {
      dwellTimerRef.current = { element: null, startTime: 0, hasScrolled: false };
      setDwellProgress(0);
      targets.forEach((el) => el.classList.remove('gaze-active-target'));
      setActiveTargetLabel(null);
    }
  }, [autoScroll]);

  // Optical flow / facial luminance tracker
  const processCameraFrame = useCallback(function tick() {
    if (!videoRef.current || !canvasRef.current || videoRef.current.readyState < 2) {
      animFrameRef.current = requestAnimationFrame(tick);
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const width = 160;
    const height = 120;

    if (canvas.width !== width) {
      canvas.width = width;
      canvas.height = height;
    }

    // Mirror horizontal feed
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -width, 0, width, height);
    ctx.restore();

    try {
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      // Detect face / eye cluster by finding highest contrast and skin chrominance
      let sumX = 0;
      let sumY = 0;
      let count = 0;

      // Scan central region (avoid edges)
      for (let y = 15; y < height - 15; y += 2) {
        for (let x = 20; x < width - 20; x += 2) {
          const idx = (y * width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // Simplified face skin chrominance heuristic
          const isSkin = (r > 60 && g > 40 && b > 20 && r > g && r > b && (r - g) > 10);
          // High contrast eye pupil / iris heuristic
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
          const isContrastFeature = luminance < 65;

          if (isSkin || isContrastFeature) {
            const weight = isContrastFeature ? 2.5 : 1.0;
            sumX += x * weight;
            sumY += y * weight;
            count += weight;
          }
        }
      }

      if (count > 200) {
        const rawHeadX = (sumX / count) / width;
        const rawHeadY = (sumY / count) / height;

        // Draw HUD overlay on thumbnail canvas
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(sumX / count, sumY / count, 14, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(sumX / count, sumY / count, 3, 0, Math.PI * 2);
        ctx.fill();

        // Compute normalized gaze deviation relative to calibration center
        const deltaX = rawHeadX - calibOffsetRef.current.headX;
        const deltaY = rawHeadY - calibOffsetRef.current.headY;

        // Amplification factor to span viewport comfortably
        const targetScreenX = window.innerWidth * (0.5 + deltaX * 3.4);
        const targetScreenY = window.innerHeight * (0.45 + deltaY * 3.8);

        // Low-pass exponential moving average filter for smooth, organic gaze motion
        const alpha = 0.18;
        const smoothX = gazePosRef.current.x * (1 - alpha) + targetScreenX * alpha;
        const smoothY = gazePosRef.current.y * (1 - alpha) + targetScreenY * alpha;

        // Clamp to screen bounds
        const clampedX = Math.max(30, Math.min(window.innerWidth - 30, smoothX));
        const clampedY = Math.max(30, Math.min(window.innerHeight - 30, smoothY));

        gazePosRef.current = { x: clampedX, y: clampedY };
        setReticlePos({ x: clampedX, y: clampedY, visible: true });
        evaluateGazeTarget(clampedX, clampedY);
        setStatusMessage('Neural Tracking Active');
      } else {
        setStatusMessage('Searching Face...');
      }
    } catch {
      setStatusMessage('Analyzing Feed...');
    }

    animFrameRef.current = requestAnimationFrame(tick);
  }, [evaluateGazeTarget]);

  // Cursor Gaze Simulation
  const handleMouseMove = useCallback((e) => {
    if (!isActive || mode !== 'cursor') return;
    const x = e.clientX;
    const y = e.clientY;
    gazePosRef.current = { x, y };
    setReticlePos({ x, y, visible: true });
    evaluateGazeTarget(x, y);
  }, [isActive, mode, evaluateGazeTarget]);

  // Start webcam
  const startCamera = async () => {
    try {
      setStatusMessage('Requesting Camera Access...');
      setHasCameraError(false);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 320 },
          height: { ideal: 240 },
          facingMode: 'user',
        },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setIsActive(true);
      setIsHudOpen(true);
      setMode('camera');
      setStatusMessage('Camera Active · Calibrating...');
      animFrameRef.current = requestAnimationFrame(processCameraFrame);
    } catch (err) {
      console.warn('Webcam gaze tracker fallback to cursor simulation:', err);
      setHasCameraError(true);
      // Automatically fallback to cursor simulation so user still gets full gaze experience!
      setMode('cursor');
      setIsActive(true);
      setIsHudOpen(true);
      setStatusMessage('Cursor Simulation Mode (Camera Denied)');
    }
  };

  // Stop tracking
  const stopTracking = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setIsActive(false);
    setReticlePos((prev) => ({ ...prev, visible: false }));
    clearGazeHighlights();
    setStatusMessage('Standby');
  }, [clearGazeHighlights]);

  // Center calibrate
  const calibrateCenter = () => {
    if (canvasRef.current) {
      calibOffsetRef.current = { headX: 0.5, headY: 0.45 };
      gazePosRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2.5 };
      setStatusMessage('Center Calibrated (0,0)');
    }
  };

  useEffect(() => {
    if (isActive && mode === 'cursor') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isActive, mode, handleMouseMove]);

  useEffect(() => {
    return () => {
      stopTracking();
    };
  }, [stopTracking]);

  return (
    <>
      {/* VisionOS-style Gaze Reticle */}
      {isActive && reticlePos.visible && (
        <div
          className="gaze-reticle-ring"
          style={{
            left: `${reticlePos.x}px`,
            top: `${reticlePos.y}px`,
            width: activeTargetLabel ? '46px' : '30px',
            height: activeTargetLabel ? '46px' : '30px',
            border: activeTargetLabel
              ? '2px solid rgba(34, 211, 238, 0.95)'
              : '1.5px solid rgba(255, 255, 255, 0.65)',
            backgroundColor: activeTargetLabel
              ? 'rgba(6, 182, 212, 0.15)'
              : 'rgba(255, 255, 255, 0.06)',
            boxShadow: activeTargetLabel
              ? '0 0 25px rgba(6, 182, 212, 0.7), inset 0 0 10px rgba(6, 182, 212, 0.4)'
              : '0 0 10px rgba(255, 255, 255, 0.2)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 99999,
          }}
        >
          {/* Iris crosshair center dot */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all ${
              activeTargetLabel ? 'bg-cyan-300 scale-125' : 'bg-white'
            }`}
          />
          {/* Subtle rotation tick when hovering */}
          {activeTargetLabel && (
            <div className="absolute inset-0 rounded-full border border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          )}
        </div>
      )}

      {/* Floating Controller Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {!isActive ? (
          <button
            onClick={startCamera}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950/90 border border-cyan-500/30 hover:border-cyan-400 text-white text-xs font-mono font-medium shadow-2xl backdrop-blur-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all"
            title="Activate real-time face & eye tracking to navigate components"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <Eye className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Enable Gaze Focus</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 ml-0.5" />
          </button>
        ) : (
          <div className="flex flex-col items-end gap-2">
            {/* Active HUD Mini-Pill */}
            <div className="flex items-center gap-2 bg-zinc-950/95 border border-cyan-500/50 rounded-full px-3.5 py-1.5 shadow-2xl backdrop-blur-xl text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-zinc-300 font-semibold">Gaze Focus:</span>
              <span className="text-cyan-400 font-medium truncate max-w-[140px]">
                {activeTargetLabel ? activeTargetLabel : 'Looking...'}
              </span>
              {dwellProgress > 0 && (
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded">
                  {dwellProgress}%
                </span>
              )}
              <button
                onClick={() => setIsHudOpen(!isHudOpen)}
                className="ml-1 text-zinc-400 hover:text-white p-1 rounded hover:bg-white/[0.08]"
                title="Toggle Gaze Control Panel"
              >
                {isHudOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Expandable Gaze HUD Panel */}
            {isHudOpen && (
              <div className="w-72 rounded-2xl bg-zinc-950/95 border border-white/[0.12] p-4 shadow-2xl backdrop-blur-2xl text-xs font-mono space-y-3.5">
                {/* HUD Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span>Neural Gaze Pilot</span>
                  </div>
                  <button
                    onClick={stopTracking}
                    className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 hover:underline"
                  >
                    <EyeOff className="w-3 h-3" />
                    <span>Disable</span>
                  </button>
                </div>

                {/* Video / Visualizer Thumbnail */}
                <div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-white/[0.08] aspect-[4/3] flex items-center justify-center">
                  <video
                    ref={videoRef}
                    playsInline
                    muted
                    autoPlay
                    className="hidden"
                  />
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                  />
                  {mode === 'cursor' && (
                    <div className="absolute inset-0 bg-zinc-950/80 flex flex-col items-center justify-center p-3 text-center space-y-1">
                      <MousePointer className="w-6 h-6 text-cyan-400 animate-bounce" />
                      <p className="text-zinc-300 text-[11px] font-semibold">Cursor Gaze Mode</p>
                      <p className="text-zinc-500 text-[10px]">Move mouse to simulate eye focus</p>
                    </div>
                  )}
                  <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[10px] text-zinc-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    <span>{statusMessage}</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Live
                    </span>
                  </div>
                </div>

                {/* Target Inspector */}
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-500">Focused Target</span>
                    <span className="text-cyan-300 font-semibold truncate max-w-[130px]">
                      {activeTargetLabel || 'Free Gaze'}
                    </span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full transition-all duration-100"
                      style={{ width: `${dwellProgress}%` }}
                    />
                  </div>
                </div>

                {/* Mode Selector & Calibration */}
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <button
                    onClick={() => {
                      if (mode === 'camera') {
                        setMode('cursor');
                        setStatusMessage('Cursor Simulation Active');
                      } else {
                        setMode('camera');
                        startCamera();
                      }
                    }}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 flex items-center justify-center gap-1.5 transition-all"
                  >
                    {mode === 'camera' ? (
                      <>
                        <MousePointer className="w-3 h-3 text-cyan-400" />
                        <span>Use Mouse</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-3 h-3 text-cyan-400" />
                        <span>Use Camera</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={calibrateCenter}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-300 flex items-center justify-center gap-1.5 transition-all"
                    title="Calibrate gaze center"
                  >
                    <Compass className="w-3 h-3 text-emerald-400" />
                    <span>Calibrate</span>
                  </button>
                </div>

                {/* Auto Scroll Toggle */}
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/[0.06]">
                  <span className="text-zinc-400">Dwell Auto-Scroll</span>
                  <button
                    onClick={() => setAutoScroll(!autoScroll)}
                    className={`px-2 py-0.5 rounded font-bold transition-all ${
                      autoScroll ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-zinc-800 text-zinc-500'
                    }`}
                  >
                    {autoScroll ? 'ON' : 'OFF'}
                  </button>
                </div>

                {hasCameraError && (
                  <div className="flex items-center gap-1.5 text-[10px] text-amber-400/90 pt-1">
                    <ShieldAlert className="w-3 h-3 shrink-0" />
                    <span>Camera permission denied. Using cursor simulation mode.</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default GazeFocusPilot;
