import{t as V,m as H,v as j}from"./cache-invalidation.BgXajLtn.js";import{t as D}from"./cache.C1T8CEj7.js";import"./kernel.DrC0sNW-.js";const W=720,Y=620,i=190,G=40,l=W-i-G,K="http://www.w3.org/2000/svg",e=(c,t={},n)=>{const o=document.createElementNS(K,c);for(const[g,d]of Object.entries(t))o.setAttribute(g,String(d));return n!==void 0&&(o.textContent=n),o},h=c=>`${(c*100).toFixed(1)}%`,f=c=>c>=3600?`${(c/3600).toFixed(1)} h`:c>=60?`${(c/60).toFixed(1)} min`:`${Math.round(c)} s`;class X extends HTMLElement{connectedCallback(){this.ttlSec=300,this.changeIntervalSec=600,this.requestIntervalSec=120,this.pathCount=40,this.perPathMissPct=2,this.writeFreq=5,this.evictAgg=5,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${W} ${Y}" role="img" width="100%"
             aria-label="Three panels: TTL staleness versus miss rate, missed-invalidation probability climbing with code-path count, and versioned-key wasted cache capacity."></svg>
        <div class="controls">
          <label>
            TTL
            <input type="range" data-s="ttl" min="10" max="3600" step="10" value="${this.ttlSec}"
                   aria-label="Cache TTL in seconds">
            <output class="num" data-o="ttl"></output>
          </label>
          <label>
            avg. time between data changes
            <input type="range" data-s="change" min="10" max="3600" step="10" value="${this.changeIntervalSec}"
                   aria-label="Average seconds between real changes to the underlying data">
            <output class="num" data-o="change"></output>
          </label>
          <label>
            avg. time between requests
            <input type="range" data-s="reqint" min="10" max="600" step="10" value="${this.requestIntervalSec}"
                   aria-label="Average seconds between requests for this key">
            <output class="num" data-o="reqint"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            code paths that can write this data
            <input type="range" data-s="paths" min="1" max="200" step="1" value="${this.pathCount}"
                   aria-label="Number of distinct code paths that can modify the underlying data">
            <output class="num" data-o="paths"></output>
          </label>
          <label>
            chance one path forgets to invalidate
            <input type="range" data-s="miss" min="1" max="50" step="1" value="${this.perPathMissPct}"
                   aria-label="Percent chance any single write path forgets to invalidate the cache">
            <output class="num" data-o="miss"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            write frequency
            <input type="range" data-s="wfreq" min="1" max="200" step="1" value="${this.writeFreq*10}"
                   aria-label="Writes per second to this logical key, in tenths">
            <output class="num" data-o="wfreq"></output>
          </label>
          <label>
            eviction aggressiveness
            <input type="range" data-s="evict" min="1" max="200" step="1" value="${this.evictAgg*10}"
                   aria-label="How quickly eviction reclaims a superseded version, in tenths">
            <output class="num" data-o="evict"></output>
          </label>
        </div>
        <p class="verdict"></p>
      </div>`,this.svg=this.querySelector("svg"),this.verdict=this.querySelector(".verdict");const t=o=>this.querySelector(`[data-s="${o}"]`),n=(o,g,d=1)=>{t(o).addEventListener("input",()=>{this[g]=Number(t(o).value)/d,this.labels()}),t(o).addEventListener("change",()=>{this[g]=Number(t(o).value)/d,this.draw()})};n("ttl","ttlSec"),n("change","changeIntervalSec"),n("reqint","requestIntervalSec"),n("paths","pathCount"),n("miss","perPathMissPct"),n("wfreq","writeFreq",10),n("evict","evictAgg",10),this.labels(),this.draw()}labels(){this.querySelector('[data-o="ttl"]').textContent=f(this.ttlSec),this.querySelector('[data-o="change"]').textContent=f(this.changeIntervalSec),this.querySelector('[data-o="reqint"]').textContent=f(this.requestIntervalSec),this.querySelector('[data-o="paths"]').textContent=`${this.pathCount}`,this.querySelector('[data-o="miss"]').textContent=`${this.perPathMissPct}%`,this.querySelector('[data-o="wfreq"]').textContent=`${this.writeFreq.toFixed(1)}/s`,this.querySelector('[data-o="evict"]').textContent=`${this.evictAgg.toFixed(1)}/s`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const n=1/this.requestIntervalSec,o=1/this.changeIntervalSec,d=1-D(n,this.ttlSec),b=V(this.ttlSec,o),A=this.perPathMissPct/100,$=H(this.pathCount,A),x=j(this.writeFreq,this.evictAgg),y=30,w=26,q=46;t.appendChild(e("text",{x:0,y:14,fill:"var(--ink)","font-size":13,"font-weight":600},"TTL: freshness cost vs. staleness cost, same knob"));const _=(s,u,B,O)=>{t.appendChild(e("text",{x:i-10,y:s+w/2+4,fill:"var(--ink-soft)","font-size":11,"text-anchor":"end"},u)),t.appendChild(e("rect",{x:i,y:s,width:l,height:w,fill:"var(--paper-sunk)"}));const C=Math.max(1,B*l);t.appendChild(e("rect",{x:i,y:s,width:C,height:w,fill:O}));const E=h(B),T=C>E.length*7+10;t.appendChild(e("text",{x:T?i+C/2:i+C+6,y:s+w/2+4,fill:T?"var(--paper)":"var(--ink-soft)","font-size":11,"font-weight":600,"text-anchor":T?"middle":"start"},E))};_(y,"origin miss rate",d,"var(--teal)"),_(y+q,"time spent stale",b.staleFraction,"var(--crimson)"),t.appendChild(e("text",{x:i,y:y+2*q+14,fill:"var(--ink-soft)","font-size":10},`TTL ${f(this.ttlSec)} · changes every ${f(this.changeIntervalSec)} · requests every ${f(this.requestIntervalSec)} · stale ${b.staleSeconds.toFixed(1)}s/cycle`));const L=y+2*q+50,r=L+20,a=140;t.appendChild(e("text",{x:0,y:L,fill:"var(--ink)","font-size":13,"font-weight":600},"Explicit invalidation: one missed write path is enough")),t.appendChild(e("line",{x1:i,y1:r,x2:i,y2:r+a,stroke:"var(--rule)","stroke-width":1})),t.appendChild(e("line",{x1:i,y1:r+a,x2:i+l,y2:r+a,stroke:"var(--rule)","stroke-width":1}));for(const s of[0,.25,.5,.75,1]){const u=r+a-s*a;t.appendChild(e("line",{x1:i,y1:u,x2:i+l,y2:u,stroke:"var(--rule)","stroke-width":.5,"stroke-dasharray":"2 4"})),t.appendChild(e("text",{x:i-10,y:u+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},h(s)))}const I=200,S=s=>i+s/I*l;let z="";for(let s=1;s<=I;s++){const u=r+a-H(s,A)*a;z+=`${s===1?"M":"L"}${S(s).toFixed(1)},${u.toFixed(1)} `}t.appendChild(e("path",{d:z,fill:"none",stroke:"var(--slate)","stroke-width":2}));const k=S(this.pathCount),N=r+a-$*a;t.appendChild(e("line",{x1:k,y1:r,x2:k,y2:r+a,stroke:"var(--crimson)","stroke-width":1,"stroke-dasharray":"2 3"})),t.appendChild(e("circle",{cx:k,cy:N,r:4.5,fill:"var(--crimson)"}));for(const s of[1,50,100,150,200])t.appendChild(e("text",{x:S(s),y:r+a+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},s));t.appendChild(e("text",{x:i,y:r+a+34,fill:"var(--ink-soft)","font-size":10},`at ${this.pathCount} write paths, each with a ${this.perPathMissPct}% chance of forgetting: P(at least one missed) = ${h($)}`));const M=r+a+60,p=M+20,v=34;t.appendChild(e("text",{x:0,y:M,fill:"var(--ink)","font-size":13,"font-weight":600},"Versioned keys: nothing is invalidated, so stale copies just wait")),t.appendChild(e("text",{x:i-10,y:p+v/2+4,fill:"var(--ink-soft)","font-size":11,"text-anchor":"end"},"this key's footprint")),t.appendChild(e("rect",{x:i,y:p,width:l,height:v,fill:"var(--teal)"}));const m=Math.max(0,x*l);t.appendChild(e("rect",{x:i+l-m,y:p,width:m,height:v,fill:"var(--crimson)"}));const P=1-x,R=h(P);P*l>R.length*7+10&&t.appendChild(e("text",{x:i+P*l/2,y:p+v/2+4,fill:"var(--paper)","font-size":11,"font-weight":600,"text-anchor":"middle"},`current: ${R}`));const F=h(x);m>F.length*7+10?t.appendChild(e("text",{x:i+l-m/2,y:p+v/2+4,fill:"var(--paper)","font-size":11,"font-weight":600,"text-anchor":"middle"},`stale: ${F}`)):m>.5&&t.appendChild(e("text",{x:i+l+6,y:p+v/2+4,fill:"var(--crimson)","font-size":10,"text-anchor":"start"},`stale: ${F}`)),t.appendChild(e("text",{x:i,y:p+v+20,fill:"var(--ink-soft)","font-size":10},`writes ${this.writeFreq.toFixed(1)}/s · evicts old versions at ${this.evictAgg.toFixed(1)}/s → ${h(x)} of footprint is stale`)),this.verdict.textContent=`At a ${f(this.ttlSec)} TTL, ${h(d)} of requests miss the origin, and ${h(b.staleFraction)} of every cache cycle is spent serving a value the cache cannot tell is wrong — the same slider, opposite currencies. With ${this.pathCount} write paths at a ${this.perPathMissPct}% chance each of forgetting to invalidate, the odds that at least one was missed are ${h($)}. And a versioned-key cache writing at ${this.writeFreq.toFixed(1)}/s against eviction reclaiming at ${this.evictAgg.toFixed(1)}/s is spending ${h(x)} of that key's own footprint on versions nobody will ever read again.`}}customElements.define("cache-invalidation-rig",X);
