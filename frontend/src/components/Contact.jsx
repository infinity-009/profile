import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { profile } from '../data/projects';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = profile.contact.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          className="p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-white/[0.08] shadow-2xl space-y-8"
          data-gaze-target="Contact & Collaboration"
          data-gaze-label="hello@mallikarjunreddy.com"
        >
          
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let’s talk about production AI.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              Open to senior roles, consulting on high-scale generative AI architectures, and engineering collaborations.
            </p>
          </div>

          {/* Email Action Box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <div className="flex items-center gap-3 px-4 py-2 flex-1 min-w-0">
              <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span className="font-mono text-sm sm:text-base text-white truncate font-medium">
                {profile.contact.email}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-medium text-zinc-200 transition-all"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${profile.contact.email}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Write Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700" />
              </a>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Bengaluru, India</span>
              </span>
              <span>•</span>
              <a href={`tel:${profile.contact.phone}`} className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>+91 8688715349</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href={profile.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a 
                href={profile.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
