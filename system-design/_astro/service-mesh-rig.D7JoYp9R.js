import{d as O,m as z,a as Q,b as X,c as j}from"./servicemesh.myRJ3K3C.js";import{c as G}from"./coupling.CPdsKbd2.js";import"./composition.CcahLPCL.js";import"./quorum.Xv1VdxxC.js";import"./decomposition.sQ2H813K.js";import"./kernel.DrC0sNW-.js";import"./latency-table.Z10ZPnGR.js";import"./correlation.BtCGzsy1.js";import"./dns.CufwgeT6.js";import"./mtls.BmPg_LzX.js";import"./tlswire.BJtISdZq.js";import"./congestion.01bs7TQx.js";import"./handshake.B8nGpk8Y.js";import"./little.BKsFjkjL.js";const R=720,V=340,o=170,W=60,q=R-o-W,Y=14,y=34,m=30,M=22,I=y+2*(m+M)+30,T=I+20,x=30,F=22,U=1,B=1e4,D=1e-5,N=.1,$=2,J="http://www.w3.org/2000/svg",n=(t,s={},d)=>{const l=document.createElementNS(J,t);for(const[_,v]of Object.entries(s))l.setAttribute(_,String(v));return d!==void 0&&(l.textContent=d),l},b=t=>Math.round(t).toLocaleString("en-US"),L=t=>t<1e-4?`${(t*1e6).toFixed(1)} ppm`:`${(t*100).toFixed(3)}%`,S=t=>t>=1e3?`${(t/1e3).toFixed(1)} s`:`${t.toFixed(1)} ms`,w=t=>Number.isFinite(t)?t>=1e6?t.toExponential(1).replace("e+","×10^"):t>=1e3?`${(t/1e3).toFixed(1)}k`:String(Math.round(t)):"—";class K extends HTMLElement{connectedCallback(){this.n=20,this.handshakesPerSecondPerService=50,this.perHopMs=.5,this.qTicks=10,this.pushSeconds=30,this.distSeconds=7,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${R} ${V}" role="img" width="100%"
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
      </div>`,this.svg=this.querySelector("svg");const P=this.querySelector(".readouts");this.ro={};for(const a of["trust pairs","call paths","hop latency added","mesh mTLS tax","config lag (worst)","config lag (mean)"]){const i=document.createElement("div");i.className="ro",i.innerHTML=`<span class="k">${a}</span><span class="v">—</span>`,P.appendChild(i),this.ro[a]=i}this.verdict=this.querySelector(".verdict");const c=a=>this.querySelector(`[data-s="${a}"]`),r=(a,i,A=Number)=>{c(a).addEventListener("input",()=>{this[i]=A(c(a).value),this.labels()}),c(a).addEventListener("change",()=>{this[i]=A(c(a).value),this.draw()})};r("n","n"),r("hs","handshakesPerSecondPerService"),r("hop","perHopMs",a=>Number(a)/10),r("q","qTicks"),r("push","pushSeconds"),r("dist","distSeconds",a=>Number(a)/10),this.labels(),this.draw()}get perHopUnavailability(){return this.qTicks*1e-4}labels(){this.querySelector('[data-o="n"]').textContent=`${b(this.n)}`,this.querySelector('[data-o="hs"]').textContent=`${b(this.handshakesPerSecondPerService)}/s`,this.querySelector('[data-o="hop"]').textContent=`${this.perHopMs.toFixed(1)} ms`,this.querySelector('[data-o="q"]').textContent=L(this.perHopUnavailability),this.querySelector('[data-o="push"]').textContent=`${this.pushSeconds} s`,this.querySelector('[data-o="dist"]').textContent=`${this.distSeconds.toFixed(1)} s`}draw(){const s=this.svg;for(;s.firstChild;)s.removeChild(s.firstChild);const d=G(this.n),l=O(this.n),_=z({perHopMs:this.perHopMs,sidecarHopsPerCall:$}),v=this.perHopUnavailability,C=Q({perHopUnavailability:v,sidecarHopsPerCall:$}),P=X({handshakesPerSecondPerService:this.handshakesPerSecondPerService,serviceCount:this.n}),c=j([this.pushSeconds*1e3,this.distSeconds*1e3]);s.appendChild(n("text",{x:0,y:Y,fill:"var(--ink)","font-size":12,"font-weight":600},`trust relationships in a mesh of ${b(this.n)} services`));const r=e=>o+Math.log10(Math.max(U,Math.min(B,e))/U)/Math.log10(B/U)*q;for(const e of[1,10,100,1e3,1e4])s.appendChild(n("line",{x1:r(e),y1:y-6,x2:r(e),y2:y+2*(m+M),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),s.appendChild(n("text",{x:r(e),y:y+2*(m+M)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},w(e)));const a=(e,h,k,H,p)=>{const u=r(h)-o;s.appendChild(n("text",{x:o-8,y:e+m/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},H)),s.appendChild(n("rect",{x:o,y:e,width:Math.max(.5,u),height:m,fill:k}));const g=`${b(h)} ${Math.round(h)===1?p.replace(/s$/,""):p}`,E=u>g.length*6+12;s.appendChild(n("text",{x:E?o+u/2:o+u+6,y:e+m/2+4,fill:E?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":E?"middle":"start"},g))};a(y,d,"var(--slate)","unordered trust pairs","pairs"),a(y+m+M,l,"var(--teal)","directed call paths","paths"),s.appendChild(n("text",{x:0,y:I,fill:"var(--ink)","font-size":12,"font-weight":600},`one sidecar hop's unavailability, vs. ${$} of them compounded`));const i=e=>o+Math.log10(Math.max(D,Math.min(N,e))/D)/Math.log10(N/D)*q;for(const e of[1e-5,1e-4,.001,.01,.1])s.appendChild(n("line",{x1:i(e),y1:T-6,x2:i(e),y2:T+2*(x+F),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),s.appendChild(n("text",{x:i(e),y:T+2*(x+F)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},L(e)));const A=(e,h,k,H)=>{const p=i(h)-o;s.appendChild(n("text",{x:o-8,y:e+x/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},H)),s.appendChild(n("rect",{x:o,y:e,width:Math.max(.5,p),height:x,fill:k}));const u=L(h),g=p>u.length*6+12;s.appendChild(n("text",{x:g?o+p/2:o+p+6,y:e+x/2+4,fill:g?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":g?"middle":"start"},u))};A(T,v,"var(--slate)","1 hop"),A(T+x+F,C,"var(--crimson)",`${$} hops`);const f=(e,h)=>this.ro[e].querySelector(".v").textContent=h;f("trust pairs",w(d)),f("call paths",w(l)),f("hop latency added",S(_)),f("mesh mTLS tax",`${P.toFixed(3)} cores`),f("config lag (worst)",S(c.worstMs)),f("config lag (mean)",S(c.meanMs)),this.verdict.textContent=`A mesh of ${b(this.n)} services needs ${w(d)} unordered trust relationship${d===1?"":"s"} to let every service talk to every other one — and because a call from A to B is a different path than B to A, that's ${w(l)} directed call path${l===1?"":"s"} the mesh's config actually has to hold, exactly double. Every call now makes ${$} extra sidecar hops at ${this.perHopMs.toFixed(1)} ms each — ${S(_)} added latency — and a single hop's ${L(v)} unavailability compounds to ${L(C)} across both. Running mTLS at every sidecar costs ${P.toFixed(3)} added cores mesh-wide at ${b(this.handshakesPerSecondPerService)} handshakes/s per service. And because the control plane pushes config rather than serving it live, a sidecar's view can be stale by up to ${S(c.worstMs)} (worst case, delays stacking) or ${S(c.meanMs)} on average — the same TTL-stacking arithmetic DNS caching already uses, just relabeled: push interval and distribution delay instead of browser and resolver caches.`}}customElements.define("service-mesh-rig",K);
