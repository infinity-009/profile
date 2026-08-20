import{n as w}from"./join-algorithms.CIiwDTzX.js";import{e as R}from"./graph-query-languages.D5WvBA6A.js";import"./what-is-an-index.C1niIJMb.js";import"./storage.COEjocsp.js";const k=["joinComplexity","consistencyNeed","writeHeavy","queryFlexibility","schemaVariability"],V=[{id:"relational",name:"Relational / SQL",ideal:{joinComplexity:.9,consistencyNeed:.9,writeHeavy:.4,queryFlexibility:.8,schemaVariability:.1},bestPatterns:["multi-entity-join"]},{id:"document",name:"Document store",ideal:{joinComplexity:.2,consistencyNeed:.45,writeHeavy:.5,queryFlexibility:.35,schemaVariability:.85},bestPatterns:["aggregate-by-id"]},{id:"key-value",name:"Key-value store",ideal:{joinComplexity:0,consistencyNeed:.2,writeHeavy:.6,queryFlexibility:.05,schemaVariability:.35},bestPatterns:["point-lookup"]},{id:"wide-column",name:"Wide-column store",ideal:{joinComplexity:0,consistencyNeed:.15,writeHeavy:.95,queryFlexibility:.15,schemaVariability:.75},bestPatterns:["wide-sparse-write"]},{id:"graph",name:"Graph database",ideal:{joinComplexity:.5,consistencyNeed:.35,writeHeavy:.3,queryFlexibility:.5,schemaVariability:.3},bestPatterns:["traversal"]},{id:"time-series",name:"Time-series database",ideal:{joinComplexity:.05,consistencyNeed:.2,writeHeavy:.95,queryFlexibility:.2,schemaVariability:.15},bestPatterns:["time-window"]},{id:"search-index",name:"Search index",ideal:{joinComplexity:.2,consistencyNeed:.15,writeHeavy:.3,queryFlexibility:.9,schemaVariability:.5},bestPatterns:["full-text"]},{id:"vector",name:"Vector / embedding store",ideal:{joinComplexity:.1,consistencyNeed:.15,writeHeavy:.4,queryFlexibility:.4,schemaVariability:.4},bestPatterns:["similarity"]}];function _(a,t){return 1-k.reduce((s,e)=>s+Math.abs((a[e]??.5)-t[e]),0)/k.length}function L(a,t){return t.bestPatterns.includes(a.accessPattern)?.35:0}function N({entityCount:a=3,avgRowsPerEntity:t=1e4}={}){const o=w(a,t,!0);return w(a,t,!1)/o}function E({hops:a=3,avgNodesPerHop:t=50,totalEdges:o=1e7}={}){let s=1,e=0,i=1,n=0,y=0;for(let c=0;c<a;c++)e+=R(s,o,!0),s*=t,n+=w(i,o,!0)+w(i,y,!1),y+=i,i*=t;return{graphCost:e,relCost:n,ratio:n/Math.max(1,e)}}const A={joinComplexity:.5,consistencyNeed:.5,writeHeavy:.5,queryFlexibility:.5,schemaVariability:.5,accessPattern:"point-lookup",entityCount:3,avgRowsPerEntity:1e4,hops:3,avgNodesPerHop:50};function T(a={}){const t={...A,...a},o=N({entityCount:t.entityCount,avgRowsPerEntity:t.avgRowsPerEntity}),s=E({hops:t.hops,avgNodesPerHop:t.avgNodesPerHop});return V.map(e=>{let i=_(t,e.ideal)+L(t,e);if(t.accessPattern==="multi-entity-join"){const n=Math.min(.3,Math.log10(Math.max(1,o))/15);e.id==="relational"?i+=n:i-=n*.5}if(t.accessPattern==="traversal"){const n=Math.min(.35,Math.log10(Math.max(1,s.ratio))/15);e.id==="graph"?i+=n:e.id==="relational"&&(i-=n)}return{id:e.id,name:e.name,score:Math.max(0,Math.round(i*1e3)/1e3)}}).sort((e,i)=>i.score-e.score)}const F=720,D=420,d=190,I=50,q=F-d-I,O=16,C=38,m=28,S=12,z=8,B=0,$=2,W="http://www.w3.org/2000/svg",h=(a,t={},o)=>{const s=document.createElementNS(W,a);for(const[e,i]of Object.entries(t))s.setAttribute(e,String(i));return o!==void 0&&(s.textContent=o),s},H=a=>Math.round(a).toLocaleString("en-US"),l=a=>Number.isFinite(a)?a>=1e9?a.toExponential(1).replace("e+","×10^"):a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e3?`${(a/1e3).toFixed(1)}k`:`${Math.round(a*10)/10}`:"—",j=[{id:"point-lookup",label:"point lookup by key"},{id:"aggregate-by-id",label:"fetch one aggregate by id"},{id:"multi-entity-join",label:"ad-hoc multi-entity join"},{id:"traversal",label:"relationship traversal"},{id:"time-window",label:"time-windowed aggregation"},{id:"wide-sparse-write",label:"sparse wide write-heavy"},{id:"full-text",label:"full-text / ranked search"},{id:"similarity",label:"nearest-neighbour similarity"}];class G extends HTMLElement{connectedCallback(){this.joinComplexity=90,this.consistencyNeed=90,this.writeHeavy=40,this.queryFlexibility=80,this.schemaVariability=10,this.accessPattern="multi-entity-join",this.avgRowsPerEntity=5e4,this.hops=3,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${F} ${D}" role="img" width="100%"
             aria-label="Ranked horizontal bar chart of all 8 database families' fit scores for the current workload, re-sorted live as the sliders move."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            access pattern shape
            <select data-s="pattern" aria-label="The shape of the workload's dominant access pattern">
              ${j.map(e=>`<option value="${e.id}">${e.label}</option>`).join("")}
            </select>
          </label>
          <label>
            join complexity
            <input type="range" data-s="join" min="0" max="100" step="1" value="90"
                   aria-label="How much ad-hoc multi-entity joining this workload needs">
            <output class="num" data-o="join"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            consistency need
            <input type="range" data-s="consistency" min="0" max="100" step="1" value="90"
                   aria-label="How strongly this workload needs strong/ACID consistency">
            <output class="num" data-o="consistency"></output>
          </label>
          <label>
            write-heaviness
            <input type="range" data-s="write" min="0" max="100" step="1" value="40"
                   aria-label="Write intensity relative to read intensity">
            <output class="num" data-o="write"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            query flexibility needed
            <input type="range" data-s="flex" min="0" max="100" step="1" value="80"
                   aria-label="How much ad-hoc, not-known-in-advance querying this workload needs">
            <output class="num" data-o="flex"></output>
          </label>
          <label>
            schema variability
            <input type="range" data-s="schema" min="0" max="100" step="1" value="10"
                   aria-label="How much the shape of one record varies from the next">
            <output class="num" data-o="schema"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            joined table size (join workloads)
            <input type="range" data-s="rows" min="10" max="5000000" step="10" value="50000"
                   aria-label="Rows in the table being joined against, for a multi-entity-join workload">
            <output class="num" data-o="rows"></output>
          </label>
          <label>
            traversal hops (traversal workloads)
            <input type="range" data-s="hops" min="1" max="8" step="1" value="3"
                   aria-label="How many hops deep the traversal goes, for a relationship-traversal workload">
            <output class="num" data-o="hops"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const t=this.querySelector(".readouts");this.ro={};for(const e of["top family","top score","runner-up","margin","join-cost ratio","traversal-cost ratio"]){const i=document.createElement("div");i.className="ro",i.innerHTML=`<span class="k">${e}</span><span class="v">—</span>`,t.appendChild(i),this.ro[e]=i}this.verdict=this.querySelector(".verdict");const o=e=>this.querySelector(`[data-s="${e}"]`),s=(e,i,n=Number)=>{o(e).addEventListener("input",()=>{this[i]=n(o(e).value),this.labels()}),o(e).addEventListener("change",()=>{this[i]=n(o(e).value),this.draw()})};s("join","joinComplexity"),s("consistency","consistencyNeed"),s("write","writeHeavy"),s("flex","queryFlexibility"),s("schema","schemaVariability"),s("rows","avgRowsPerEntity"),s("hops","hops"),o("pattern").value=this.accessPattern,o("pattern").addEventListener("change",()=>{this.accessPattern=o("pattern").value,this.draw()}),this.labels(),this.draw()}labels(){this.querySelector('[data-o="join"]').textContent=`${this.joinComplexity}%`,this.querySelector('[data-o="consistency"]').textContent=`${this.consistencyNeed}%`,this.querySelector('[data-o="write"]').textContent=`${this.writeHeavy}%`,this.querySelector('[data-o="flex"]').textContent=`${this.queryFlexibility}%`,this.querySelector('[data-o="schema"]').textContent=`${this.schemaVariability}%`,this.querySelector('[data-o="rows"]').textContent=H(this.avgRowsPerEntity),this.querySelector('[data-o="hops"]').textContent=`${this.hops}`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const o={joinComplexity:this.joinComplexity/100,consistencyNeed:this.consistencyNeed/100,writeHeavy:this.writeHeavy/100,queryFlexibility:this.queryFlexibility/100,schemaVariability:this.schemaVariability/100,accessPattern:this.accessPattern,avgRowsPerEntity:this.avgRowsPerEntity,hops:this.hops},s=T(o),e=N({avgRowsPerEntity:this.avgRowsPerEntity}),i=E({hops:this.hops});t.appendChild(h("text",{x:0,y:O,fill:"var(--ink)","font-size":12,"font-weight":600},`family fit for a ${j.find(r=>r.id===this.accessPattern).label} workload`));const n=r=>d+Math.max(B,Math.min($,r))/$*q,y=C+z*(m+S);for(const r of[0,.5,1,1.5,2])t.appendChild(h("line",{x1:n(r),y1:C-6,x2:n(r),y2:y,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(h("text",{x:n(r),y:y+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},r.toFixed(1)));t.appendChild(h("text",{x:d+q/2,y:y+32,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},"fit score")),s.forEach((r,v)=>{const x=C+v*(m+S),b=n(r.score)-d,f=v===0,M=f?"var(--teal)":"var(--slate)";t.appendChild(h("text",{x:d-10,y:x+m/2+4,fill:f?"var(--ink)":"var(--ink-soft)","font-size":11,"font-weight":f?700:400,"text-anchor":"end"},r.name)),t.appendChild(h("rect",{x:d,y:x,width:Math.max(.5,b),height:m,fill:M}));const P=l(r.score),g=b>P.length*7+12;t.appendChild(h("text",{x:g?d+b/2:d+b+6,y:x+m/2+4,fill:g?"var(--paper)":"var(--ink-soft)","font-size":11,"font-weight":600,"text-anchor":g?"middle":"start"},P))});const c=s[0],p=s[1],u=(r,v)=>this.ro[r].querySelector(".v").textContent=v;u("top family",c.name),u("top score",l(c.score)),u("runner-up",p.name),u("margin",l(c.score-p.score)),u("join-cost ratio",`${l(e)}×`),u("traversal-cost ratio",`${l(i.ratio)}×`),this.verdict.textContent=`For a ${j.find(r=>r.id===this.accessPattern).label} workload at these settings, ${c.name} scores highest at ${l(c.score)}, ahead of ${p.name} at ${l(p.score)} — a margin of ${l(c.score-p.score)}. At a ${H(this.avgRowsPerEntity)}-row joined table, a store with no join operator pays ${l(e)}× the cost of an indexed relational join for the same lookup; at ${this.hops} hops, a relational self-join pays ${l(i.ratio)}× what a graph engine's index-free adjacency pays for the same traversal. Drag the access-pattern selector through all 8 shapes and watch which family reaches the top of the chart for each one — that mapping IS the decision framework.`}}customElements.define("sql-vs-nosql-rig",G);
