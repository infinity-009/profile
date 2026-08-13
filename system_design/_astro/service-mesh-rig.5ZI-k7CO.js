import{c as I}from"./coupling.CPdsKbd2.js";import{s as z}from"./composition.qQrzwdz5.js";import{m as Q,w as X}from"./dns.CufwgeT6.js";import{b as j}from"./mtls.DwPnYkEU.js";import"./quorum.Xv1VdxxC.js";import"./decomposition.Cej3BzSm.js";import"./kernel.DrC0sNW-.js";import"./latency-table.Z10ZPnGR.js";import"./correlation.DUwF8sXb.js";import"./tlswire.DUODUWBl.js";import"./congestion.01bs7TQx.js";import"./handshake.C9Kv9N2Y.js";import"./little.BKsFjkjL.js";function G(e){if(!(e>=0))throw new Error("serviceCount must be non-negative");return 2*I(e)}function V({perHopMs:e,sidecarHopsPerCall:t=2}){if(!(e>=0))throw new Error("perHopMs must be non-negative");if(!Number.isInteger(t)||t<0)throw new Error("sidecarHopsPerCall must be a non-negative integer");return e*t}function W({perHopUnavailability:e,sidecarHopsPerCall:t=2}){return z(e,t)}function Y({handshakesPerSecondPerService:e,serviceCount:t}){if(!(t>=0))throw new Error("serviceCount must be non-negative");return t===0?0:j({handshakesPerSecond:e*t}).addedCores}function J(e){return{worstMs:X(e),meanMs:Q(e)}}const R=720,K=340,o=170,Z=60,q=R-o-Z,ee=14,y=34,m=30,P=22,O=y+2*(m+P)+30,A=O+20,b=30,F=22,U=1,B=1e4,D=1e-5,N=.1,L=2,te="http://www.w3.org/2000/svg",i=(e,t={},d)=>{const l=document.createElementNS(te,e);for(const[_,v]of Object.entries(t))l.setAttribute(_,String(v));return d!==void 0&&(l.textContent=d),l},S=e=>Math.round(e).toLocaleString("en-US"),T=e=>e<1e-4?`${(e*1e6).toFixed(1)} ppm`:`${(e*100).toFixed(3)}%`,x=e=>e>=1e3?`${(e/1e3).toFixed(1)} s`:`${e.toFixed(1)} ms`,$=e=>Number.isFinite(e)?e>=1e6?e.toExponential(1).replace("e+","×10^"):e>=1e3?`${(e/1e3).toFixed(1)}k`:String(Math.round(e)):"—";class se extends HTMLElement{connectedCallback(){this.n=20,this.handshakesPerSecondPerService=50,this.perHopMs=.5,this.qTicks=10,this.pushSeconds=30,this.distSeconds=7,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${R} ${K}" role="img" width="100%"
             aria-label="Top: two log-scale bars, unordered trust pairs versus directed call paths in a mesh of N services, directed always exactly double. Bottom: two log-scale bars, a single sidecar hop's unavailability versus that same probability compounded across the two sidecar hops every call now makes."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            services in the mesh (N)
            <input type="range" data-s="n" min="2" max="100" step="1" value="20"
                   aria-label="Number of services in the mesh, each with its own sidecar">
            <output class="num" data-o="n"></output>
          </label>
          <label>
            handshakes/s per service
            <input type="range" data-s="hs" min="10" max="500" step="10" value="50"
                   aria-label="mTLS handshakes per second each service's sidecar originates or terminates">
            <output class="num" data-o="hs"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            latency per sidecar hop
            <input type="range" data-s="hop" min="1" max="50" step="1" value="${.5*10}"
                   aria-label="Milliseconds added by one sidecar hop, on a scale of 0.1 to 5 ms">
            <output class="num" data-o="hop"></output>
          </label>
          <label>
            unavailability per sidecar hop
            <input type="range" data-s="q" min="1" max="100" step="1" value="10"
                   aria-label="Probability a single sidecar hop fails, on a scale of 0.0001 to 0.01">
            <output class="num" data-o="q"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            control-plane push interval
            <input type="range" data-s="push" min="1" max="120" step="1" value="30"
                   aria-label="Seconds between the control plane pushing config to every sidecar">
            <output class="num" data-o="push"></output>
          </label>
          <label>
            xDS distribution + apply delay
            <input type="range" data-s="dist" min="1" max="300" step="1" value="70"
                   aria-label="Combined seconds for config to reach a sidecar and for it to apply, on a scale of 0.1 to 30 seconds">
            <output class="num" data-o="dist"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const M=this.querySelector(".readouts");this.ro={};for(const a of["trust pairs","call paths","hop latency added","mesh mTLS tax","config lag (worst)","config lag (mean)"]){const n=document.createElement("div");n.className="ro",n.innerHTML=`<span class="k">${a}</span><span class="v">—</span>`,M.appendChild(n),this.ro[a]=n}this.verdict=this.querySelector(".verdict");const c=a=>this.querySelector(`[data-s="${a}"]`),r=(a,n,w=Number)=>{c(a).addEventListener("input",()=>{this[n]=w(c(a).value),this.labels()}),c(a).addEventListener("change",()=>{this[n]=w(c(a).value),this.draw()})};r("n","n"),r("hs","handshakesPerSecondPerService"),r("hop","perHopMs",a=>Number(a)/10),r("q","qTicks"),r("push","pushSeconds"),r("dist","distSeconds",a=>Number(a)/10),this.labels(),this.draw()}get perHopUnavailability(){return this.qTicks*1e-4}labels(){this.querySelector('[data-o="n"]').textContent=`${S(this.n)}`,this.querySelector('[data-o="hs"]').textContent=`${S(this.handshakesPerSecondPerService)}/s`,this.querySelector('[data-o="hop"]').textContent=`${this.perHopMs.toFixed(1)} ms`,this.querySelector('[data-o="q"]').textContent=T(this.perHopUnavailability),this.querySelector('[data-o="push"]').textContent=`${this.pushSeconds} s`,this.querySelector('[data-o="dist"]').textContent=`${this.distSeconds.toFixed(1)} s`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const d=I(this.n),l=G(this.n),_=V({perHopMs:this.perHopMs,sidecarHopsPerCall:L}),v=this.perHopUnavailability,C=W({perHopUnavailability:v,sidecarHopsPerCall:L}),M=Y({handshakesPerSecondPerService:this.handshakesPerSecondPerService,serviceCount:this.n}),c=J([this.pushSeconds*1e3,this.distSeconds*1e3]);t.appendChild(i("text",{x:0,y:ee,fill:"var(--ink)","font-size":12,"font-weight":600},`trust relationships in a mesh of ${S(this.n)} services`));const r=s=>o+Math.log10(Math.max(U,Math.min(B,s))/U)/Math.log10(B/U)*q;for(const s of[1,10,100,1e3,1e4])t.appendChild(i("line",{x1:r(s),y1:y-6,x2:r(s),y2:y+2*(m+P),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(i("text",{x:r(s),y:y+2*(m+P)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},$(s)));const a=(s,h,k,E,p)=>{const u=r(h)-o;t.appendChild(i("text",{x:o-8,y:s+m/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},E)),t.appendChild(i("rect",{x:o,y:s,width:Math.max(.5,u),height:m,fill:k}));const g=`${S(h)} ${Math.round(h)===1?p.replace(/s$/,""):p}`,H=u>g.length*6+12;t.appendChild(i("text",{x:H?o+u/2:o+u+6,y:s+m/2+4,fill:H?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":H?"middle":"start"},g))};a(y,d,"var(--slate)","unordered trust pairs","pairs"),a(y+m+P,l,"var(--teal)","directed call paths","paths"),t.appendChild(i("text",{x:0,y:O,fill:"var(--ink)","font-size":12,"font-weight":600},`one sidecar hop's unavailability, vs. ${L} of them compounded`));const n=s=>o+Math.log10(Math.max(D,Math.min(N,s))/D)/Math.log10(N/D)*q;for(const s of[1e-5,1e-4,.001,.01,.1])t.appendChild(i("line",{x1:n(s),y1:A-6,x2:n(s),y2:A+2*(b+F),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(i("text",{x:n(s),y:A+2*(b+F)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},T(s)));const w=(s,h,k,E)=>{const p=n(h)-o;t.appendChild(i("text",{x:o-8,y:s+b/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},E)),t.appendChild(i("rect",{x:o,y:s,width:Math.max(.5,p),height:b,fill:k}));const u=T(h),g=p>u.length*6+12;t.appendChild(i("text",{x:g?o+p/2:o+p+6,y:s+b/2+4,fill:g?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":g?"middle":"start"},u))};w(A,v,"var(--slate)","1 hop"),w(A+b+F,C,"var(--crimson)",`${L} hops`);const f=(s,h)=>this.ro[s].querySelector(".v").textContent=h;f("trust pairs",$(d)),f("call paths",$(l)),f("hop latency added",x(_)),f("mesh mTLS tax",`${M.toFixed(3)} cores`),f("config lag (worst)",x(c.worstMs)),f("config lag (mean)",x(c.meanMs)),this.verdict.textContent=`A mesh of ${S(this.n)} services needs ${$(d)} unordered trust relationship${d===1?"":"s"} to let every service talk to every other one — and because a call from A to B is a different path than B to A, that's ${$(l)} directed call path${l===1?"":"s"} the mesh's config actually has to hold, exactly double. Every call now makes ${L} extra sidecar hops at ${this.perHopMs.toFixed(1)} ms each — ${x(_)} added latency — and a single hop's ${T(v)} unavailability compounds to ${T(C)} across both. Running mTLS at every sidecar costs ${M.toFixed(3)} added cores mesh-wide at ${S(this.handshakesPerSecondPerService)} handshakes/s per service. And because the control plane pushes config rather than serving it live, a sidecar's view can be stale by up to ${x(c.worstMs)} (worst case, delays stacking) or ${x(c.meanMs)} on average — the same TTL-stacking arithmetic DNS caching already uses, just relabeled: push interval and distribution delay instead of browser and resolver caches.`}}customElements.define("service-mesh-rig",se);
