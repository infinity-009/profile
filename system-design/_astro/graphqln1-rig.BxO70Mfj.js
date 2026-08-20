import{n as _,b as U,e as Y,a as H,c as Q,d as G}from"./graphqln1.BJdIpbIx.js";import"./authz.Dw02HSLL.js";import"./kernel.DrC0sNW-.js";const k=720,V=420,l=150,W=100,m=k-l-W,X=14,B=34,x=B+160,v=1,S=100,F=x+56,A=F+20,$=34,j=20,J="http://www.w3.org/2000/svg",r=(a,s={},d)=>{const o=document.createElementNS(J,a);for(const[f,w]of Object.entries(s))o.setAttribute(f,String(w));return d!==void 0&&(o.textContent=d),o},c=a=>Math.round(a).toLocaleString("en-US"),u=a=>a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e3?`${(a/1e3).toFixed(1)}k`:String(Math.round(a)),C=a=>a>=1e9?`${(a/1e9).toFixed(2)} GB`:a>=1e6?`${(a/1e6).toFixed(1)} MB`:a>=1e3?`${(a/1e3).toFixed(1)} kB`:`${Math.round(a)} B`;class K extends HTMLElement{connectedCallback(){this.fanoutOf=t=>Math.round(v*Math.pow(S/v,t/40)),this.arrivalsOf=t=>Math.round(1*Math.pow(1e4,t/40)),this.windowOf=t=>Math.round(1*Math.pow(200,t/40)),this.queryBytesOf=t=>Math.round(100*Math.pow(50,t/40));const s=20,d=27,o=20,f=25;this.depth=2,this.fanout=this.fanoutOf(s),this.arrivalsPerSecond=this.arrivalsOf(d),this.windowMs=this.windowOf(o),this.queryTextBytes=this.queryBytesOf(f),this.missRate=.02,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${k} ${V}" role="img" width="100%"
             aria-label="Top: two curves over fanout — naive query count grows sharply, batched query count stays flat at depth plus one. Bottom: two bars comparing individual queries per second against batched queries per second under a coalescing window."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            nesting depth
            <input type="range" data-s="depth" min="1" max="4" step="1" value="2"
                   aria-label="How many levels deep the nested query goes">
            <output class="num" data-o="depth"></output>
          </label>
          <label>
            fanout
            <input type="range" data-s="fanout" min="0" max="40" step="1" value="20"
                   aria-label="Children per node at each level, on a log scale from 1 to 100">
            <output class="num" data-o="fanout"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            lookups/s (same entity type)
            <input type="range" data-s="arrivals" min="0" max="40" step="1" value="27"
                   aria-label="Lookups per second for the same entity type across all concurrent requests, on a log scale from 1 to 10,000">
            <output class="num" data-o="arrivals"></output>
          </label>
          <label>
            coalescing window
            <input type="range" data-s="window" min="0" max="40" step="1" value="20"
                   aria-label="Batch coalescing window in milliseconds, on a log scale from 1 to 200">
            <output class="num" data-o="window"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            query text size
            <input type="range" data-s="qbytes" min="0" max="40" step="1" value="25"
                   aria-label="Bytes of query text a persisted query replaces with a hash, on a log scale from 100 to 5,000">
            <output class="num" data-o="qbytes"></output>
          </label>
          <label>
            persisted-query miss rate
            <input type="range" data-s="miss" min="0" max="20" step="1" value="2"
                   aria-label="Fraction of requests that miss the persisted-query hash cache, in percent">
            <output class="num" data-o="miss"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const w=this.querySelector(".readouts");this.ro={};for(const t of["naive queries","batched queries","reduction","individual q/s","batched q/s","APQ bytes saved/day"]){const h=document.createElement("div");h.className="ro",h.innerHTML=`<span class="k">${t}</span><span class="v">—</span>`,w.appendChild(h),this.ro[t]=h}this.verdict=this.querySelector(".verdict");const i=t=>this.querySelector(`[data-s="${t}"]`),n=(t,h)=>{i(t).addEventListener("input",()=>{h(Number(i(t).value)),this.labels()}),i(t).addEventListener("change",()=>{h(Number(i(t).value)),this.draw()})};i("depth").addEventListener("input",()=>{this.depth=Number(i("depth").value),this.labels()}),i("depth").addEventListener("change",()=>{this.depth=Number(i("depth").value),this.draw()}),n("fanout",t=>this.fanout=this.fanoutOf(t)),n("arrivals",t=>this.arrivalsPerSecond=this.arrivalsOf(t)),n("window",t=>this.windowMs=this.windowOf(t)),n("qbytes",t=>this.queryTextBytes=this.queryBytesOf(t)),i("miss").addEventListener("input",()=>{this.missRate=Number(i("miss").value)/100,this.labels()}),i("miss").addEventListener("change",()=>{this.missRate=Number(i("miss").value)/100,this.draw()}),this.labels(),this.draw()}labels(){this.querySelector('[data-o="depth"]').textContent=this.depth,this.querySelector('[data-o="fanout"]').textContent=c(this.fanout),this.querySelector('[data-o="arrivals"]').textContent=`${c(this.arrivalsPerSecond)}/s`,this.querySelector('[data-o="window"]').textContent=`${this.windowMs} ms`,this.querySelector('[data-o="qbytes"]').textContent=C(this.queryTextBytes),this.querySelector('[data-o="miss"]').textContent=`${(this.missRate*100).toFixed(0)}%`}draw(){const s=this.svg;for(;s.firstChild;)s.removeChild(s.firstChild);const d=_({depth:this.depth,fanout:this.fanout}),o=U({depth:this.depth,fanout:this.fanout});s.appendChild(r("text",{x:0,y:X,fill:"var(--ink)","font-size":12,"font-weight":600},`total queries vs fanout, depth ${this.depth} — naive grows with fanout, batched never does`));const f=_({depth:this.depth,fanout:S}),w=Math.log10(f),i=e=>l+Math.log10(Math.max(v,e)/v)/Math.log10(S/v)*m,n=e=>x-Math.log10(Math.max(1,e))/w*(x-B);for(const e of[1,10,100])s.appendChild(r("text",{x:i(e),y:x+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},e));for(const e of[1,10,100,1e3,Math.round(f)])s.appendChild(r("line",{x1:l,y1:n(e),x2:l+m,y2:n(e),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),s.appendChild(r("text",{x:l-6,y:n(e)+3.5,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},c(e)));const t=[];for(let e=0;e<=60;e++){const p=v*Math.pow(S/v,e/60);t.push(`${i(p).toFixed(1)},${n(_({depth:this.depth,fanout:p})).toFixed(1)}`)}s.appendChild(r("polyline",{points:t.join(" "),fill:"none",stroke:"var(--crimson)","stroke-width":2.2})),s.appendChild(r("line",{x1:l,y1:n(o),x2:l+m,y2:n(o),stroke:"var(--teal)","stroke-width":2.2}));const h=11;let b=n(d)+4,q=n(o)+4;if(Math.abs(b-q)<h){const e=(b+q)/2;b=e-h/2,q=e+h/2}s.appendChild(r("text",{x:l+m+6,y:b,fill:"var(--crimson)","font-size":10,"font-weight":600},`naive ${c(d)}`)),s.appendChild(r("text",{x:l+m+6,y:q,fill:"var(--teal)","font-size":10,"font-weight":600},`batched ${c(o)}`));const g=i(this.fanout);s.appendChild(r("line",{x1:g,y1:B-4,x2:g,y2:x,stroke:"var(--slate)","stroke-width":1.5,"stroke-dasharray":"4 3"})),s.appendChild(r("circle",{cx:g,cy:n(d),r:4,fill:"var(--crimson)"})),s.appendChild(r("circle",{cx:g,cy:n(o),r:4,fill:"var(--teal)"})),s.appendChild(r("text",{x:0,y:F,fill:"var(--ink)","font-size":12,"font-weight":600},`downstream queries/second — individual vs a ${this.windowMs}ms coalescing window`));const O=Y({arrivalsPerSecond:this.arrivalsPerSecond,windowMs:this.windowMs}),M=H({arrivalsPerSecond:this.arrivalsPerSecond,windowMs:this.windowMs}),R=Math.max(this.arrivalsPerSecond,M,1)*1.15,D=m/R,T=(e,p,z,I)=>{const P=p*D;s.appendChild(r("rect",{x:l,y:e,width:Math.max(.5,P),height:$,fill:z})),s.appendChild(r("text",{x:l-8,y:e+$/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},I)),s.appendChild(r("text",{x:l+P+6,y:e+$/2+4,fill:"var(--ink-soft)","font-size":10},`${u(p)}/s`))};T(A,this.arrivalsPerSecond,"var(--crimson)","individual (naive)"),T(A+$+j,M,"var(--teal)","batched (windowed)");const E=Q({queryTextBytes:this.queryTextBytes,requestsPerDay:1e6,missRate:this.missRate}),N=G({requestsPerDay:1e6,missRate:this.missRate}),y=(e,p)=>this.ro[e].querySelector(".v").textContent=p;y("naive queries",u(d)),y("batched queries",u(o));const L=d/o;y("reduction",L>=1e3?`${u(L)}×`:`${L.toFixed(1)}×`),y("individual q/s",`${u(this.arrivalsPerSecond)}/s`),y("batched q/s",`${u(M)}/s`),y("APQ bytes saved/day",C(E)),this.verdict.textContent=`A depth-${this.depth} nested query with fanout ${c(this.fanout)} issues ${c(d)} queries naively — one per node in the tree — against ${c(o)} with per-level batching, a ${(d/o).toFixed(1)}× reduction that comes entirely from collapsing each LEVEL into one round trip; fanout never appears in the batched number at all. Separately, at ${c(this.arrivalsPerSecond)} lookups/s for one entity type, a ${this.windowMs}ms coalescing window groups an expected ${O.toFixed(1)} lookups per batch (Little's Law), cutting downstream query rate from ${u(this.arrivalsPerSecond)}/s to ${u(M)}/s. And sending a hash instead of a ${C(this.queryTextBytes)} query body saves ${C(E)}/day at 1M requests/day and a ${(this.missRate*100).toFixed(0)}% miss rate — costing exactly ${c(N)} extra round trips/day for the misses that have to resend the full query to register it.`}}customElements.define("graphqln1-rig",K);
