import{t as E}from"./cache-invalidation.BgXajLtn.js";function O({dataChangeFrequency:t,clientTtlSeconds:a,cdnTtlSeconds:o,gatewayTtlSeconds:s,appInvalidationLatencySeconds:l=0,dbLatencySeconds:i=0}){return{client:E(a,t).staleSeconds,cdn:E(o,t).staleSeconds,gateway:E(s,t).staleSeconds,app:Math.max(0,l),db:Math.max(0,i)}}function W(t){const a=Array.isArray(t),o=a?t.map((i,p)=>[String(p),i]):Object.entries(t);if(o.length===0)return{staleSeconds:0,dominantLayer:null};let s=-1/0,l=null;for(const[i,p]of o)p>s&&(s=p,l=i);return{staleSeconds:s,dominantLayer:a?null:l}}function Y(t){let a=1;const o=[];for(const s of t){const l=Math.min(1,Math.max(0,s));a*=1-l,o.push(a)}return{fractionReachingSource:a,afterLayer:o}}const H=720,z=470,h=150,V=60,B=H-h-V,X=14,A=34,v=16,N=9,U=5,P=A+U*(v+N)+46,S=P+20,b=16,R=9,j=5,$=.01,q=1e5,D=1e-4,G=1,J="http://www.w3.org/2000/svg",c=(t,a={},o)=>{const s=document.createElementNS(J,t);for(const[l,i]of Object.entries(a))s.setAttribute(l,String(i));return o!==void 0&&(s.textContent=o),s},r=t=>Number.isFinite(t)?t<1?`${(t*1e3).toFixed(0)}ms`:t<60?`${t.toFixed(1)}s`:t<3600?`${(t/60).toFixed(1)}m`:t<86400?`${(t/3600).toFixed(1)}h`:`${(t/86400).toFixed(1)}d`:"—",m=t=>Number.isFinite(t)?t<=0?"0%":t<.001?`${(t*100).toFixed(3)}%`:t<.01?`${(t*100).toFixed(2)}%`:`${(t*100).toFixed(1)}%`:"—",F={client:"client",cdn:"CDN",gateway:"gateway",app:"app",db:"DB"};class K extends HTMLElement{connectedCallback(){const i={client:60,cdn:70,gateway:50,app:80};this.changeEverySec=600,this.clientTtl=86400,this.cdnTtl=3600,this.gatewayTtl=30,this.hit={...i},this.appLatencySec=.05,this.dbLatencySec=0,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${H} ${z}" role="img" width="100%"
             aria-label="Top: five bars on a log-seconds axis showing each layer's own staleness, with the layer that sets the end-to-end worst case in crimson. Bottom: five bars on a log-percentage axis showing what fraction of original traffic is still live after each successive layer, shrinking multiplicatively toward the database."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            data changes every
            <input type="range" data-s="change" min="1" max="86400" step="1" value="600"
                   aria-label="Seconds between changes to the underlying data, on average">
            <output class="num" data-o="change"></output>
          </label>
          <label>
            client TTL
            <input type="range" data-s="clientTtl" min="1" max="604800" step="1" value="86400"
                   aria-label="Browser/mobile-app cache TTL in seconds">
            <output class="num" data-o="clientTtl"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            CDN TTL
            <input type="range" data-s="cdnTtl" min="1" max="86400" step="1" value="3600"
                   aria-label="CDN edge cache TTL in seconds">
            <output class="num" data-o="cdnTtl"></output>
          </label>
          <label>
            gateway TTL
            <input type="range" data-s="gatewayTtl" min="1" max="3600" step="1" value="30"
                   aria-label="API gateway cache TTL in seconds">
            <output class="num" data-o="gatewayTtl"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            client hit rate
            <input type="range" data-s="hitClient" min="0" max="99" step="1" value="${i.client}"
                   aria-label="Percent of requests served from the client cache">
            <output class="num" data-o="hitClient"></output>
          </label>
          <label>
            CDN hit rate
            <input type="range" data-s="hitCdn" min="0" max="99" step="1" value="${i.cdn}"
                   aria-label="Percent of client-cache misses served from the CDN">
            <output class="num" data-o="hitCdn"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            gateway hit rate
            <input type="range" data-s="hitGateway" min="0" max="99" step="1" value="${i.gateway}"
                   aria-label="Percent of CDN misses served from the gateway cache">
            <output class="num" data-o="hitGateway"></output>
          </label>
          <label>
            app hit rate
            <input type="range" data-s="hitApp" min="0" max="99" step="1" value="${i.app}"
                   aria-label="Percent of gateway misses served from the app-level cache">
            <output class="num" data-o="hitApp"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const p=this.querySelector(".readouts");this.ro={};for(const e of["end-to-end staleness","dominated by","traffic reaching the DB","vs. weakest single layer"]){const d=document.createElement("div");d.className="ro",d.innerHTML=`<span class="k">${e}</span><span class="v">—</span>`,p.appendChild(d),this.ro[e]=d}this.verdict=this.querySelector(".verdict");const g=e=>this.querySelector(`[data-s="${e}"]`),u=(e,d,f)=>{g(e).addEventListener("input",()=>{f(Number(g(e).value)),this.labels()}),g(e).addEventListener("change",()=>{f(Number(g(e).value)),this.draw()})};u("change","changeEverySec",e=>{this.changeEverySec=e}),u("clientTtl","clientTtl",e=>{this.clientTtl=e}),u("cdnTtl","cdnTtl",e=>{this.cdnTtl=e}),u("gatewayTtl","gatewayTtl",e=>{this.gatewayTtl=e}),u("hitClient","hitClient",e=>{this.hit.client=e}),u("hitCdn","hitCdn",e=>{this.hit.cdn=e}),u("hitGateway","hitGateway",e=>{this.hit.gateway=e}),u("hitApp","hitApp",e=>{this.hit.app=e}),this.labels(),this.draw()}labels(){this.querySelector('[data-o="change"]').textContent=r(this.changeEverySec),this.querySelector('[data-o="clientTtl"]').textContent=r(this.clientTtl),this.querySelector('[data-o="cdnTtl"]').textContent=r(this.cdnTtl),this.querySelector('[data-o="gatewayTtl"]').textContent=r(this.gatewayTtl),this.querySelector('[data-o="hitClient"]').textContent=`${this.hit.client}%`,this.querySelector('[data-o="hitCdn"]').textContent=`${this.hit.cdn}%`,this.querySelector('[data-o="hitGateway"]').textContent=`${this.hit.gateway}%`,this.querySelector('[data-o="hitApp"]').textContent=`${this.hit.app}%`}draw(){const a=this.svg;for(;a.firstChild;)a.removeChild(a.firstChild);const o=O({dataChangeFrequency:1/this.changeEverySec,clientTtlSeconds:this.clientTtl,cdnTtlSeconds:this.cdnTtl,gatewayTtlSeconds:this.gatewayTtl,appInvalidationLatencySeconds:this.appLatencySec,dbLatencySeconds:this.dbLatencySec}),{staleSeconds:s,dominantLayer:l}=W(o),i=[this.hit.client/100,this.hit.cdn/100,this.hit.gateway/100,this.hit.app/100],{fractionReachingSource:p,afterLayer:g}=Y(i),e=1-Math.min(...i);a.appendChild(c("text",{x:0,y:X,fill:"var(--ink)","font-size":12,"font-weight":600},"each layer’s own staleness — the crimson bar sets the end-to-end worst case"));const d=n=>h+Math.log10(Math.max($,Math.min(q,n))/$)/Math.log10(q/$)*B,f=A+U*(v+N);for(const n of[.01,1,60,3600,86400])a.appendChild(c("line",{x1:d(n),y1:A-6,x2:d(n),y2:f,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),a.appendChild(c("text",{x:d(n),y:f+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},r(n)));["client","cdn","gateway","app","db"].forEach((n,y)=>{const T=A+y*(v+N),w=Math.max(0,o[n]),x=n===l,C=d(w)-h;a.appendChild(c("text",{x:h-8,y:T+v/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},F[n])),a.appendChild(c("rect",{x:h,y:T,width:Math.max(.5,C),height:v,fill:x?"var(--crimson)":"var(--slate)"})),a.appendChild(c("text",{x:h+C+6,y:T+v/2+4,fill:x?"var(--crimson)":"var(--ink-soft)","font-size":10},r(w)))}),a.appendChild(c("text",{x:0,y:P,fill:"var(--ink)","font-size":12,"font-weight":600},"traffic still live at each layer — a product of miss rates, not an average"));const L=n=>h+Math.log10(Math.max(D,Math.min(G,n))/D)/Math.log10(G/D)*B,M=S+j*(b+R);for(const n of[1e-4,.001,.01,.1,1])a.appendChild(c("line",{x1:L(n),y1:S-6,x2:L(n),y2:M,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),a.appendChild(c("text",{x:L(n),y:M+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},m(n)));const k=["arrives at client","reaches CDN","reaches gateway","reaches app","reaches DB"],I=[1,...g];k.forEach((n,y)=>{const T=S+y*(b+R),w=I[y],x=y===k.length-1,C=L(w)-h;a.appendChild(c("text",{x:h-8,y:T+b/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},n)),a.appendChild(c("rect",{x:h,y:T,width:Math.max(.5,C),height:b,fill:x?"var(--crimson)":"var(--teal)"})),a.appendChild(c("text",{x:h+C+6,y:T+b/2+4,fill:x?"var(--crimson)":"var(--ink-soft)","font-size":10},m(w)))});const _=(n,y)=>this.ro[n].querySelector(".v").textContent=y;_("end-to-end staleness",r(s)),_("dominated by",F[l]??"—"),_("traffic reaching the DB",m(p)),_("vs. weakest single layer",m(e)),this.verdict.textContent=`With data changing every ${r(this.changeEverySec)}, a ${r(this.clientTtl)} client TTL, a ${r(this.cdnTtl)} CDN TTL and a ${r(this.gatewayTtl)} gateway TTL, the end-to-end worst-case staleness a user can see is ${r(s)} — set entirely by the ${F[l]??"slowest"} tier, because that is the layer a miss-free request can still be served from. Making the app tier invalidate faster would not move this number at all. Below, hit rates of ${this.hit.client}%/${this.hit.cdn}%/${this.hit.gateway}%/${this.hit.app}% at client/CDN/gateway/app each look modest on their own, but only ${m(p)} of original traffic ever reaches the database — the product of every layer's miss rate, not its weakest layer's ${m(e)} alone.`}}customElements.define("multi-tier-caching-rig",K);
