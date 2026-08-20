import{o as N}from"./quorum.Xv1VdxxC.js";function _(e,t){if(!Number.isInteger(t)||t<1)throw new RangeError(`${e} must be a positive integer, got ${t}`)}function A(e,t){if(!Number.isFinite(t)||t<0)throw new RangeError(`${e} must be non-negative, got ${t}`)}function x(e,t){if(!Number.isFinite(t)||t<=0)throw new RangeError(`${e} must be positive, got ${t}`)}function U(e,t){return _("K",e),A("M",t),(e+t)/e}function k(e){return A("faultsTolerated",e),e+1}function O({K:e,M:t,fragmentSizeBytes:r,perFragmentFetchMs:s}){_("K",e),_("M",t),x("fragmentSizeBytes",r),x("perFragmentFetchMs",s);const i={fragmentsFetched:e,bytesMoved:e*r,timeMs:e*s},a={fragmentsFetched:1,bytesMoved:r,timeMs:s};return{erasure:i,replication:a,bytesAmplification:i.bytesMoved/a.bytesMoved,timeAmplification:i.timeMs/a.timeMs}}function H({K:e,meanFragmentFetchMs:t,decodeMs:r,replicaFetchMs:s}){_("K",e),x("meanFragmentFetchMs",t),A("decodeMs",r),x("replicaFetchMs",s);const i=N(e,e,t),a={fetchMs:i,decodeMs:r,totalMs:i+r},o={fetchMs:s,decodeMs:0,totalMs:s};return{erasure:a,replication:o,addedLatencyMs:a.totalMs-o.totalMs,slowdown:a.totalMs/o.totalMs}}const L=720,g=190,R=70,q=L-g-R,m=20,b=10,D=34,w=30,z=2*(m+b),y=w+z+D,P=2*(m+b),E=y+P+D,G=2*(m+b),I=E+G+16,V="http://www.w3.org/2000/svg",M=(e,t={},r)=>{const s=document.createElementNS(V,e);for(const[i,a]of Object.entries(t))s.setAttribute(i,String(a));return r!==void 0&&(s.textContent=r),s},d=e=>`${e%1===0?e:e.toFixed(2)}x`,$=e=>Number.isFinite(e)?e>=1024**3?`${(e/1024**3).toFixed(2)} GiB`:e>=1024**2?`${(e/1024**2).toFixed(0)} MiB`:e>=1024?`${(e/1024).toFixed(0)} KiB`:`${Math.round(e)} B`:"—",u=e=>Number.isFinite(e)?e>=1e3?`${(e/1e3).toFixed(2)} s`:`${e.toFixed(1)} ms`:"—";class W extends HTMLElement{connectedCallback(){this.K=10,this.M=4,this.fragmentMB=256,this.fetchMs=15,this.decodeMs=8,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${L} ${I}" role="img" width="100%"
             aria-label="Three bands. Top: storage overhead bars comparing a (K,M) erasure code against N-way replication built for the same fault tolerance. Middle: bytes moved and time to rebuild one lost fragment versus one lost replica. Bottom: added latency for a read served while a fragment or replica is missing."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            data fragments K
            <input type="range" data-s="k" min="2" max="20" step="1" value="10"
                   aria-label="Number of data fragments the original is split into">
            <output class="num" data-o="k"></output>
          </label>
          <label>
            parity fragments M
            <input type="range" data-s="m" min="1" max="8" step="1" value="4"
                   aria-label="Number of parity fragments, and the number of failures tolerated">
            <output class="num" data-o="m"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            fragment size
            <input type="range" data-s="fragment" min="16" max="1024" step="16" value="256"
                   aria-label="Size of one fragment or replica, in mebibytes">
            <output class="num" data-o="fragment"></output>
          </label>
          <label>
            per-fragment fetch
            <input type="range" data-s="fetch" min="5" max="100" step="5" value="15"
                   aria-label="Time to fetch one fragment-sized unit from one node, over the network">
            <output class="num" data-o="fetch"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            decode time
            <input type="range" data-s="decode" min="1" max="50" step="1" value="8"
                   aria-label="CPU time to decode the original fragment from K surviving fragments">
            <output class="num" data-o="decode"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const o=this.querySelector(".readouts");this.ro={};for(const n of["erasure overhead","replication overhead","storage savings","rebuild amplification","degraded read added latency","degraded read slowdown"]){const c=document.createElement("div");c.className="ro",c.innerHTML=`<span class="k">${n}</span><span class="v">—</span>`,o.appendChild(c),this.ro[n]=c}this.verdict=this.querySelector(".verdict");const l=n=>this.querySelector(`[data-s="${n}"]`),f=(n,c,h=p=>p)=>{l(n).addEventListener("input",()=>{this[c]=h(Number(l(n).value)),this.labels()}),l(n).addEventListener("change",()=>{this[c]=h(Number(l(n).value)),this.draw()})};f("k","K"),f("m","M"),f("fragment","fragmentMB"),f("fetch","fetchMs"),f("decode","decodeMs"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="k"]').textContent=this.K,this.querySelector('[data-o="m"]').textContent=this.M,this.querySelector('[data-o="fragment"]').textContent=`${this.fragmentMB} MiB`,this.querySelector('[data-o="fetch"]').textContent=`${this.fetchMs} ms`,this.querySelector('[data-o="decode"]').textContent=`${this.decodeMs} ms`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const r=this.fragmentMB*1024*1024,s=U(this.K,this.M),i=k(this.M),a=O({K:this.K,M:this.M,fragmentSizeBytes:r,perFragmentFetchMs:this.fetchMs}),o=H({K:this.K,meanFragmentFetchMs:this.fetchMs,decodeMs:this.decodeMs,replicaFetchMs:this.fetchMs}),l=(p,F,B,S,K,C)=>{const v=Math.max(.5,F/B*q);t.appendChild(M("text",{x:g-8,y:p+m/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},K)),t.appendChild(M("rect",{x:g,y:p,width:v,height:m,fill:`var(${S})`}));const T=v>C.length*5.6+12;t.appendChild(M("text",{x:T?g+v/2:g+v+6,y:p+m/2+4,fill:T?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":T?"middle":"start"},C))};t.appendChild(M("text",{x:0,y:w-12,fill:"var(--ink)","font-size":12,"font-weight":600},`storage overhead to tolerate ${this.M} failure${this.M===1?"":"s"}`));const f=Math.max(i,s)*1.12;l(w,s,f,"--teal",`erasure K=${this.K} M=${this.M}`,d(s)),l(w+m+b,i,f,"--crimson","replication",d(i)),t.appendChild(M("text",{x:0,y:y-12,fill:"var(--ink)","font-size":12,"font-weight":600},"network bytes to rebuild ONE lost fragment / replica"));const n=a.erasure.bytesMoved*1.12;l(y,a.erasure.bytesMoved,n,"--crimson",`erasure (${this.K} fragments)`,`${$(a.erasure.bytesMoved)} (${u(a.erasure.timeMs)})`),l(y+m+b,a.replication.bytesMoved,n,"--teal","replication (1 replica)",`${$(a.replication.bytesMoved)} (${u(a.replication.timeMs)})`),t.appendChild(M("text",{x:0,y:E-12,fill:"var(--ink)","font-size":12,"font-weight":600},"added latency for a read while a fragment / replica is down"));const c=o.erasure.totalMs*1.12;l(E,o.erasure.totalMs,c,"--crimson","erasure (wait + decode)",u(o.erasure.totalMs)),l(E+m+b,o.replication.totalMs,c,"--teal","replication (1 fetch)",u(o.replication.totalMs));const h=(p,F)=>this.ro[p].querySelector(".v").textContent=F;h("erasure overhead",d(s)),h("replication overhead",d(i)),h("storage savings",d(i/s)),h("rebuild amplification",d(a.bytesAmplification)),h("degraded read added latency",u(o.addedLatencyMs)),h("degraded read slowdown",d(o.slowdown)),this.verdict.innerHTML=`To tolerate <b>${this.M}</b> failures, a <b>(${this.K}, ${this.M})</b> erasure code costs <b>${d(s)}</b> the original data size against replication's <b>${d(i)}</b> — a <b>${d(i/s)}</b> storage saving. That K is exactly what it costs to rebuild: replacing one lost fragment reads <b>${this.K} survivors</b> — <b>${$(a.erasure.bytesMoved)}</b> over the network in <b>${u(a.erasure.timeMs)}</b> — against replication's single <b>${$(a.replication.bytesMoved)}</b> copy in <b>${u(a.replication.timeMs)}</b>, a <b>${d(a.bytesAmplification)}</b> amplification in both bytes and time. A read served while a fragment is down waits for the slowest of those ${this.K} fetches and then decodes — <b>${u(o.erasure.totalMs)}</b> against replication's plain <b>${u(o.replication.totalMs)}</b> fetch from an intact replica, <b>${d(o.slowdown)}</b> slower.`}}customElements.define("erasure-coding-rig",W);
