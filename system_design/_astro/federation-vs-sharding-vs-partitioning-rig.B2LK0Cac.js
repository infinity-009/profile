import{t as E}from"./why-you-shard.Bdnpp6UH.js";import"./scatter-gather.BtdU45yZ.js";import"./fanout.DU4-IRuI.js";import"./kernel.DrC0sNW-.js";import"./percentiles.C3ngedBT.js";function q({splitsByDomain:s=!1,splitsByKey:e=!1,independentInstances:d=!1}={}){const a=[];return s&&a.push("federation"),e&&(a.push("partitioning"),d&&a.push("sharding")),a.length===0&&a.push("none"),{techniques:a,combinable:s&&e}}function F(s,e=1){return E(s,e)}function U(s,e=1){return E(s,e)}function P(s,e,d,a=1){if(!Array.isArray(e)||e.length!==s)throw new RangeError("domainSizes must have exactly domainCount entries");const n=e.reduce((t,v,b)=>v>e[t]?b:t,0),c=s-1,m=c*a,y=E(d,a);return{largestDomainIndex:n,otherCapacity:m,largestDomainCapacity:y,totalCapacity:m+y,totalNodes:c+d}}const D=720,R=400,h=190,M=60,I=D-h-M,H=14,T=34,$=34,O=T+$+56,w=O+20,g=34,N=22,z="http://www.w3.org/2000/svg",p=(s,e={},d)=>{const a=document.createElementNS(z,s);for(const[n,c]of Object.entries(e))a.setAttribute(n,String(c));return d!==void 0&&(a.textContent=d),a},i=s=>Math.round(s).toLocaleString("en-US"),B=s=>Number.isFinite(s)?s>=1e3?`${(s/1e3).toFixed(1)}k`:String(Math.round(s)):"—",A=["users","orders","inventory"];class j extends HTMLElement{connectedCallback(){const e=[25,60,15],d=8,a=100,n=!0,c=!0,m=!0;this.weights=[...e],this.shardCountForLargestDomain=d,this.perNodeThroughput=a,this.splitsByDomain=n,this.splitsByKey=c,this.independentInstances=m,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${D} ${R}" role="img" width="100%"
             aria-label="Top: three checkboxes for how a system splits its data, lighting up pills for federation, partitioning and sharding as the decision table resolves them. Bottom: three bars comparing total system capacity under federation-only, sharding-only, and a combined federate-then-shard strategy at the same total node budget."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            <input type="checkbox" data-s="domain" checked
                   aria-label="Data is split by function into different schemas (a users DB, an orders DB, an inventory DB)">
            splits by domain/function (different schemas)
          </label>
          <label>
            <input type="checkbox" data-s="key" checked
                   aria-label="Rows of one schema are split by a key across machines">
            splits one schema's rows by a key
          </label>
          <label>
            <input type="checkbox" data-s="independent" checked
                   aria-label="The key-split pieces run as independent database instances, not partitions inside one engine">
            key-split pieces are independent DB instances
          </label>
        </div>
        <div class="controls">
          <label>
            users domain weight
            <input type="range" data-s="wUsers" min="1" max="100" step="1" value="${e[0]}"
                   aria-label="Relative share of demand the users domain carries">
            <output class="num" data-o="wUsers"></output>
          </label>
          <label>
            orders domain weight
            <input type="range" data-s="wOrders" min="1" max="100" step="1" value="${e[1]}"
                   aria-label="Relative share of demand the orders domain carries">
            <output class="num" data-o="wOrders"></output>
          </label>
          <label>
            inventory domain weight
            <input type="range" data-s="wInventory" min="1" max="100" step="1" value="${e[2]}"
                   aria-label="Relative share of demand the inventory domain carries">
            <output class="num" data-o="wInventory"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            shards on the largest domain
            <input type="range" data-s="shards" min="1" max="128" step="1" value="${d}"
                   aria-label="How many nodes the busiest domain is sharded across in the combined strategy">
            <output class="num" data-o="shards"></output>
          </label>
          <label>
            per-node throughput
            <input type="range" data-s="perNode" min="10" max="1000" step="10" value="${a}"
                   aria-label="Queries per second one node sustains">
            <output class="num" data-o="perNode"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const y=this.querySelector(".readouts");this.ro={};for(const o of["techniques","federation-only capacity","sharding-only capacity","combined capacity","total nodes (combined)"]){const r=document.createElement("div");r.className="ro",r.innerHTML=`<span class="k">${o}</span><span class="v">—</span>`,y.appendChild(r),this.ro[o]=r}this.verdict=this.querySelector(".verdict");const t=o=>this.querySelector(`[data-s="${o}"]`),v=(o,r,_={})=>{t(o).addEventListener("input",()=>{this[r]=Number(t(o).value),this.labels()}),t(o).addEventListener("change",()=>{this[r]=Number(t(o).value),this.draw()})},b=(o,r)=>{t(o).addEventListener("change",()=>{this[r]=t(o).checked,this.draw()})};t("wUsers").addEventListener("input",()=>{this.weights[0]=Number(t("wUsers").value),this.labels()}),t("wUsers").addEventListener("change",()=>{this.weights[0]=Number(t("wUsers").value),this.draw()}),t("wOrders").addEventListener("input",()=>{this.weights[1]=Number(t("wOrders").value),this.labels()}),t("wOrders").addEventListener("change",()=>{this.weights[1]=Number(t("wOrders").value),this.draw()}),t("wInventory").addEventListener("input",()=>{this.weights[2]=Number(t("wInventory").value),this.labels()}),t("wInventory").addEventListener("change",()=>{this.weights[2]=Number(t("wInventory").value),this.draw()}),v("shards","shardCountForLargestDomain"),v("perNode","perNodeThroughput"),b("domain","splitsByDomain"),b("key","splitsByKey"),b("independent","independentInstances"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="wUsers"]').textContent=i(this.weights[0]),this.querySelector('[data-o="wOrders"]').textContent=i(this.weights[1]),this.querySelector('[data-o="wInventory"]').textContent=i(this.weights[2]),this.querySelector('[data-o="shards"]').textContent=i(this.shardCountForLargestDomain),this.querySelector('[data-o="perNode"]').textContent=`${i(this.perNodeThroughput)}/s`}draw(){const e=this.svg;for(;e.firstChild;)e.removeChild(e.firstChild);const d=3,{techniques:a}=q({splitsByDomain:this.splitsByDomain,splitsByKey:this.splitsByKey,independentInstances:this.independentInstances}),n=P(d,this.weights,this.shardCountForLargestDomain,this.perNodeThroughput),c=F(d,this.perNodeThroughput),m=U(n.totalNodes,this.perNodeThroughput);e.appendChild(p("text",{x:0,y:H,fill:"var(--ink)","font-size":12,"font-weight":600},"which terms apply, resolved by decisionTable — not chosen by hand"));const y=["federation","partitioning","sharding"],t=(D-h)/y.length-12;y.forEach((l,u)=>{const f=a.includes(l),x=h+u*(t+12);e.appendChild(p("rect",{x,y:T,width:t,height:$,rx:4,fill:f?"var(--amber-wash)":"var(--paper)",stroke:f?"var(--amber)":"var(--rule)","stroke-width":f?2:1})),e.appendChild(p("text",{x:x+t/2,y:T+$/2+4,"text-anchor":"middle",fill:f?"var(--amber)":"var(--slate)","font-size":12,"font-weight":f?700:400},l))}),e.appendChild(p("text",{x:h,y:T+$+20,fill:"var(--ink-soft)","font-size":10},a.includes("none")?"no split at all — a single monolithic database":`applies: ${a.join(", ")}`)),e.appendChild(p("text",{x:0,y:O,fill:"var(--ink)","font-size":12,"font-weight":600},`total system capacity, all at ${n.totalNodes} nodes total`));const v=Math.max(c,m,n.totalCapacity,1),b=l=>h+l/v*I;for(const l of[0,.25,.5,.75,1]){const u=h+l*I;e.appendChild(p("line",{x1:u,y1:w-6,x2:u,y2:w+3*(g+N),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),e.appendChild(p("text",{x:u,y:w+3*(g+N)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},B(l*v)))}const o=(l,u,f,x,k)=>{const C=b(u)-h;e.appendChild(p("text",{x:h-8,y:l+g/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},x)),e.appendChild(p("rect",{x:h,y:l,width:Math.max(.5,C),height:g,fill:f}));const S=`${B(u)}/s`,L=C>S.length*6+12;e.appendChild(p("text",{x:L?h+C/2:h+C+6,y:l+g/2+4,fill:L?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":L?"middle":"start"},S)),k&&e.appendChild(p("text",{x:h-8,y:l+g/2+16,fill:"var(--slate)","font-size":9,"text-anchor":"end"},k))};o(w,c,"var(--slate)","federation-only",`capped at ${d} domains`),o(w+(g+N),m,"var(--teal)","sharding-only","one undifferentiated schema"),o(w+2*(g+N),n.totalCapacity,"var(--amber)","combined",`${A[n.largestDomainIndex]} sharded ×${i(this.shardCountForLargestDomain)}`);const r=(l,u)=>this.ro[l].querySelector(".v").textContent=u;r("techniques",a.join(" + ")),r("federation-only capacity",`${i(c)}/s`),r("sharding-only capacity",`${i(m)}/s`),r("combined capacity",`${i(n.totalCapacity)}/s`),r("total nodes (combined)",i(n.totalNodes));const _=`${i(m)}/s — always identical to the combined total, because both are ${i(n.totalNodes)} nodes at the same per-node throughput; raw capacity alone never tells the two strategies apart`;this.verdict.textContent=`The checkboxes resolve to ${a.join(", ")} via decisionTable — a pill lights up only if the model itself returned that term. With 3 real domains (users, orders, inventory) weighted ${this.weights.join(":")}, federation alone tops out at ${i(c)}/s no matter how many machines you buy, because there is no 4th real domain to federate into. Sharding the ${A[n.largestDomainIndex]} domain (the largest, by weight) across ${i(this.shardCountForLargestDomain)} nodes while leaving the other two domains on one node each reaches ${i(n.totalCapacity)}/s using ${i(n.totalNodes)} nodes total — a plain sharding-only setup at that same ${i(n.totalNodes)}-node budget reaches ${_}. The combined strategy's actual win isn't a bigger number here — it's keeping the other two domains isolated in their own schemas while the busiest one alone keeps scaling.`}}customElements.define("federation-vs-sharding-vs-partitioning-rig",j);
