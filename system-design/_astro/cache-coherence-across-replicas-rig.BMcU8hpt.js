function k(a,t,s=20){const e=Math.max(1,a),r=Math.max(0,t),h=Math.max(1,s);return Math.ceil(e/h)*r}function R({fanoutLatencyMs:a,fanoutCapacity:t=20,ttlMs:s,maxReplicas:e=1e6}){if(k(e,a,t)<=s)return null;let r=1,h=e;for(;r<h;){const u=Math.floor((r+h)/2);k(u,a,t)>s?h=u:r=u+1}return r}function O(a,t){const s=Math.max(0,a),e=Math.max(0,t);return Math.min(s,e)}const D=720,q=430,c=190,z=60,B=D-c-z,Y=14,L=34,x=26,I=20,P=L+2*(x+I)+44,y=P+20,_=24,E=16,C=1,N=1e8,A=10,U=1e8,H="http://www.w3.org/2000/svg",d=(a,t={},s)=>{const e=document.createElementNS(H,a);for(const[r,h]of Object.entries(t))e.setAttribute(r,String(h));return s!==void 0&&(e.textContent=s),e},m=a=>Number.isFinite(a)?a>=1e9?`${(a/1e9).toFixed(1)}B`:a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e3?`${(a/1e3).toFixed(1)}k`:String(Math.round(a)):"—",o=a=>{if(!Number.isFinite(a))return"—";if(a<1e3)return`${Math.round(a)} ms`;const t=a/1e3;if(t<60)return`${t.toFixed(1)} s`;const s=t/60;if(s<60)return`${s.toFixed(1)} min`;const e=s/60;return e<48?`${e.toFixed(1)} h`:`${(e/24).toFixed(1)} d`};class X extends HTMLElement{connectedCallback(){this.replicaCount=5e3,this.fanoutLatencyMs=10,this.fanoutCapacity=20,this.ttlMs=5e3,this.partitionMs=2e4,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${D} ${q}" role="img" width="100%"
             aria-label="Top: two bars on a shared log-millisecond axis, broadcast invalidation delay against a flat TTL-bounded disagreement window, crossing over as replica count grows. Bottom: partition duration and TTL as two bars, with their minimum drawn as a third, highlighted bar."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            replica count
            <input type="range" data-s="replicas" min="1" max="100000" step="1" value="5000"
                   aria-label="Number of cache replicas the broadcast invalidation must reach">
            <output class="num" data-o="replicas"></output>
          </label>
          <label>
            TTL
            <input type="range" data-s="ttl" min="100" max="86400000" step="100" value="5000"
                   aria-label="TTL in milliseconds bounding TTL-based staleness and the negative-caching-style disagreement window">
            <output class="num" data-o="ttl"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            fan-out latency per batch
            <input type="range" data-s="latency" min="1" max="200" step="1" value="10"
                   aria-label="Milliseconds per dispatch round of the broadcast invalidation">
            <output class="num" data-o="latency"></output>
          </label>
          <label>
            fan-out capacity
            <input type="range" data-s="capacity" min="1" max="500" step="1" value="20"
                   aria-label="Replicas the publisher can dispatch to concurrently per round">
            <output class="num" data-o="capacity"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            partition duration
            <input type="range" data-s="partition" min="0" max="86400000" step="100" value="20000"
                   aria-label="Milliseconds a replica stays cut off from the invalidation broadcast">
            <output class="num" data-o="partition"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const u=this.querySelector(".readouts");this.ro={};for(const l of["broadcast delay now","TTL disagreement window","crossover replica count","partition-resilient staleness"]){const p=document.createElement("div");p.className="ro",p.innerHTML=`<span class="k">${l}</span><span class="v">—</span>`,u.appendChild(p),this.ro[l]=p}this.verdict=this.querySelector(".verdict");const b=l=>this.querySelector(`[data-s="${l}"]`),f=(l,p)=>{b(l).addEventListener("input",()=>{this[p]=Number(b(l).value),this.labels()}),b(l).addEventListener("change",()=>{this[p]=Number(b(l).value),this.draw()})};f("replicas","replicaCount"),f("ttl","ttlMs"),f("latency","fanoutLatencyMs"),f("capacity","fanoutCapacity"),f("partition","partitionMs"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="replicas"]').textContent=m(this.replicaCount),this.querySelector('[data-o="ttl"]').textContent=o(this.ttlMs),this.querySelector('[data-o="latency"]').textContent=`${this.fanoutLatencyMs} ms`,this.querySelector('[data-o="capacity"]').textContent=m(this.fanoutCapacity),this.querySelector('[data-o="partition"]').textContent=o(this.partitionMs)}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const s=k(this.replicaCount,this.fanoutLatencyMs,this.fanoutCapacity),e=R({fanoutLatencyMs:this.fanoutLatencyMs,fanoutCapacity:this.fanoutCapacity,ttlMs:this.ttlMs}),r=O(this.partitionMs,this.ttlMs),h=s>this.ttlMs;t.appendChild(d("text",{x:0,y:Y,fill:"var(--ink)","font-size":12,"font-weight":600},`broadcast delay at ${m(this.replicaCount)} replicas vs. a ${o(this.ttlMs)} TTL window`));const u=i=>{const n=Math.max(C,Math.min(N,Math.max(i,C)));return c+Math.log10(n/C)/Math.log10(N/C)*B},b=L+2*(x+I);for(const i of[1,1e3,1e6,N]){const n=u(i);t.appendChild(d("line",{x1:n,y1:L-6,x2:n,y2:b,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(d("text",{x:n,y:b+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},o(i)))}const f=(i,n,F,S)=>{const T=Math.max(1,u(n)-c);t.appendChild(d("text",{x:c-8,y:i+x/2+4,fill:"var(--ink-soft)","font-size":10.5,"text-anchor":"end"},S)),t.appendChild(d("rect",{x:c,y:i,width:T,height:x,fill:F}));const v=o(n),M=T>v.length*6.4+12;t.appendChild(d("text",{x:M?c+T/2:c+T+6,y:i+x/2+4,fill:M?"var(--paper)":"var(--ink-soft)","font-size":10.5,"font-weight":700,"text-anchor":M?"middle":"start"},v))};f(L,s,h?"var(--crimson)":"var(--teal)","broadcast invalidation"),f(L+x+I,this.ttlMs,"var(--slate)","TTL-bounded staleness"),t.appendChild(d("text",{x:0,y:P,fill:"var(--ink)","font-size":12,"font-weight":600},"a partitioned replica: min(partition duration, TTL)"));const l=i=>{const n=Math.max(A,Math.min(U,Math.max(i,A)));return c+Math.log10(n/A)/Math.log10(U/A)*B},p=y+3*(_+E);for(const i of[10,1e4,1e7,U]){const n=l(i);t.appendChild(d("line",{x1:n,y1:y-6,x2:n,y2:p,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(d("text",{x:n,y:p+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},o(i)))}const g=(i,n,F,S,T)=>{const v=Math.max(1,l(Math.max(n,A))-c);t.appendChild(d("text",{x:c-8,y:i+_/2+4,fill:T?"var(--amber)":"var(--ink-soft)","font-size":10.5,"font-weight":T?700:400,"text-anchor":"end"},S)),t.appendChild(d("rect",{x:c,y:i,width:v,height:_,fill:F}));const M=o(n),$=v>M.length*6.4+12;t.appendChild(d("text",{x:$?c+v/2:c+v+6,y:i+_/2+4,fill:$?"var(--paper)":T?"var(--amber)":"var(--ink-soft)","font-size":10.5,"font-weight":700,"text-anchor":$?"middle":"start"},M))};g(y,this.partitionMs,"var(--slate)","partition duration",!1),g(y+_+E,this.ttlMs,"var(--slate)","TTL backstop",!1),g(y+2*(_+E),r,"var(--amber)","actual staleness bound",!0);const w=(i,n)=>this.ro[i].querySelector(".v").textContent=n;w("broadcast delay now",o(s)),w("TTL disagreement window",o(this.ttlMs)),w("crossover replica count",e===null?"never, within 1M replicas":m(e)),w("partition-resilient staleness",o(r)),this.verdict.innerHTML=`At <b>${m(this.replicaCount)}</b> replicas, ${o(this.fanoutLatencyMs)}/round fan-out latency and a capacity of <b>${m(this.fanoutCapacity)}</b> replicas per round, broadcast invalidation takes <b>${o(s)}</b> to reach everyone — `+(h?`already <b>slower</b> than the ${o(this.ttlMs)} TTL window, the point past which accepting TTL-bounded staleness beats paying for coordination.`:`still <b>faster</b> than the ${o(this.ttlMs)} TTL window, so active broadcast still wins here.`)+` The crossover, at this latency and capacity, sits at <b>${e===null?"no reachable replica count":`${m(e)} replicas`}</b>. A replica cut off from the broadcast for <b>${o(this.partitionMs)}</b> stays stale for <b>${o(r)}</b> — bounded by whichever of the partition or the TTL backstop resolves first, never by the other.`}}customElements.define("cache-coherence-across-replicas-rig",X);
