import{h as I,a as H,c as N,b as z,p as K,e as Q}from"./sidecar-ambassador-adapter.DrENoOPI.js";import"./decomposition.sQ2H813K.js";import"./kernel.DrC0sNW-.js";import"./latency-table.Z10ZPnGR.js";import"./composition.CcahLPCL.js";import"./quorum.Xv1VdxxC.js";import"./correlation.BtCGzsy1.js";import"./handshake.B8nGpk8Y.js";const B=720,W=360,o=190,X=60,F=B-o-X,V=14,w=34,m=30,S=22,O=w+2*(m+S)+30,A=O+20,b=30,q=22,$=.005,U=100,E=.001,D=1,Y=4096,G=1e4,j=.02,J="http://www.w3.org/2000/svg",n=(s,e={},h)=>{const l=document.createElementNS(J,s);for(const[y,_]of Object.entries(e))l.setAttribute(y,String(_));return h!==void 0&&(l.textContent=h),l},C=s=>Math.round(s).toLocaleString("en-US"),i=s=>s<1e-4?`${(s*1e6).toFixed(1)} ppm`:`${(s*100).toFixed(3)}%`,v=s=>s>=1e3?`${(s/1e3).toFixed(2)} s`:s<.1?`${s.toFixed(4)} ms`:`${s.toFixed(2)} ms`;class Z extends HTMLElement{connectedCallback(){this.workMs=18,this.existingStages=5,this.qTicks=10,this.interfaces=5,this.pPct=15,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${B} ${W}" role="img" width="100%"
             aria-label="Top: two log-scale bars, the co-process hop's own time versus the request's total work budget. Bottom: two log-scale bars, redeploy exposure calling N external interfaces directly versus behind their own adapters."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            request work budget
            <input type="range" data-s="work" min="2" max="500" step="1" value="180"
                   aria-label="Milliseconds of the request's own work, on a scale of 0.2 to 50 ms">
            <output class="num" data-o="work"></output>
          </label>
          <label>
            existing required stages (k)
            <input type="range" data-s="k" min="0" max="20" step="1" value="5"
                   aria-label="How many required stages the request's chain already has, before the co-process">
            <output class="num" data-o="k"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            unavailability per stage
            <input type="range" data-s="q" min="1" max="100" step="1" value="10"
                   aria-label="Probability a single required stage fails, on a scale of 0.0001 to 0.01">
            <output class="num" data-o="q"></output>
          </label>
          <label>
            external interfaces (N)
            <input type="range" data-s="n" min="1" max="20" step="1" value="5"
                   aria-label="How many external or legacy interfaces the main container talks to">
            <output class="num" data-o="n"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            chance one interface breaks this year
            <input type="range" data-s="p" min="1" max="100" step="1" value="15"
                   aria-label="Probability a single external interface has a breaking change in one year, from 1 to 100 percent">
            <output class="num" data-o="p"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const k=this.querySelector(".readouts");this.ro={};for(const a of["hop time","hop overhead","chain unavailability (without)","chain unavailability (required)","exposure (direct)","exposure (per adapter)","exposure reduction"]){const r=document.createElement("div");r.className="ro",r.innerHTML=`<span class="k">${a}</span><span class="v">—</span>`,k.appendChild(r),this.ro[a]=r}this.verdict=this.querySelector(".verdict");const d=a=>this.querySelector(`[data-s="${a}"]`),p=(a,r,u=Number)=>{d(a).addEventListener("input",()=>{this[r]=u(d(a).value),this.labels()}),d(a).addEventListener("change",()=>{this[r]=u(d(a).value),this.draw()})};p("work","workMs",a=>Number(a)/10),p("k","existingStages"),p("q","qTicks"),p("n","interfaces"),p("p","pPct"),this.labels(),this.draw()}get perStageUnavailability(){return this.qTicks*1e-4}get pChangePerInterface(){return this.pPct/100}labels(){this.querySelector('[data-o="work"]').textContent=v(this.workMs),this.querySelector('[data-o="k"]').textContent=`${C(this.existingStages)}`,this.querySelector('[data-o="q"]').textContent=i(this.perStageUnavailability),this.querySelector('[data-o="n"]').textContent=`${C(this.interfaces)}`,this.querySelector('[data-o="p"]').textContent=`${this.pPct}%`}draw(){const e=this.svg;for(;e.firstChild;)e.removeChild(e.firstChild);const h=I({bytes:Y,loopbackMbps:G,fixedOverheadMs:j}),l=H({hopMsValue:h,workMs:this.workMs}),y=Math.pow(1-this.perStageUnavailability,this.existingStages),_=N({perStageAvailability:1-this.perStageUnavailability,existingStages:this.existingStages,onPath:!0}),k=z({pChangePerInterface:this.pChangePerInterface,interfaces:this.interfaces}),d=K(this.pChangePerInterface),p=Q({pChangePerInterface:this.pChangePerInterface,interfaces:this.interfaces});e.appendChild(n("text",{x:0,y:V,fill:"var(--ink)","font-size":12,"font-weight":600},`the hop's own time, against the request's ${v(this.workMs)} of work`));const a=t=>o+Math.log10(Math.max($,Math.min(U,t))/$)/Math.log10(U/$)*F;for(const t of[.01,.1,1,10,100])e.appendChild(n("line",{x1:a(t),y1:w-6,x2:a(t),y2:w+2*(m+S),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),e.appendChild(n("text",{x:a(t),y:w+2*(m+S)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},v(t)));const r=(t,f,P,T)=>{const c=a(f)-o;e.appendChild(n("text",{x:o-8,y:t+m/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},T)),e.appendChild(n("rect",{x:o,y:t,width:Math.max(.5,c),height:m,fill:P}));const M=v(f),x=c>M.length*6+12;e.appendChild(n("text",{x:x?o+c/2:o+c+6,y:t+m/2+4,fill:x?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":x?"middle":"start"},M))};r(w,h,"var(--teal)","hop time"),r(w+m+S,this.workMs,"var(--slate)","request work"),e.appendChild(n("text",{x:0,y:O,fill:"var(--ink)","font-size":12,"font-weight":600},`redeploy exposure: ${C(this.interfaces)} interfaces direct vs. behind adapters`));const u=t=>o+Math.log10(Math.max(E,Math.min(D,t))/E)/Math.log10(D/E)*F;for(const t of[.001,.01,.1,1])e.appendChild(n("line",{x1:u(t),y1:A-6,x2:u(t),y2:A+2*(b+q),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),e.appendChild(n("text",{x:u(t),y:A+2*(b+q)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},i(t)));const L=(t,f,P,T)=>{const c=u(f)-o;e.appendChild(n("text",{x:o-8,y:t+b/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},T)),e.appendChild(n("rect",{x:o,y:t,width:Math.max(.5,c),height:b,fill:P}));const M=i(f),x=c>M.length*6+12;e.appendChild(n("text",{x:x?o+c/2:o+c+6,y:t+b/2+4,fill:x?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":x?"middle":"start"},M))};L(A,k,"var(--crimson)","direct"),L(A+b+q,d,"var(--teal)","per adapter");const g=(t,f)=>this.ro[t].querySelector(".v").textContent=f;g("hop time",v(h)),g("hop overhead",i(l)),g("chain unavailability (without)",i(1-y)),g("chain unavailability (required)",i(1-_)),g("exposure (direct)",i(k)),g("exposure (per adapter)",i(d)),g("exposure reduction",`${p.toFixed(2)}x`);const R=l>.2?"a hot path — the hop is a real chunk of the budget":l>.05?"noticeable, worth checking against the SLO":"negligible — the hop disappears into rounding";this.verdict.textContent=`At ${v(this.workMs)} of request work, a ${v(h)} co-process hop is ${i(l)} of the budget — ${R}. Making that hop REQUIRED (in-path, an ambassador or adapter) instead of optional (out-of-path, a sidecar the request can proceed without) moves the chain's unavailability from ${i(1-y)} to ${i(1-_)}. Meanwhile, calling ${C(this.interfaces)} external interfaces directly leaves the main container exposed to a forced redeploy ${i(k)} of the time this year, against ${i(d)} for any one interface hidden behind its own adapter — a ${p.toFixed(2)}x reduction in exposure, bought for exactly that hop's cost above.`}}customElements.define("sidecar-ambassador-adapter-rig",Z);
