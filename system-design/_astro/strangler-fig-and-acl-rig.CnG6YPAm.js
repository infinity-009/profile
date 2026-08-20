import{t as V,p as J,e as Q,a as U,m as Z,f as tt}from"./strangler-fig-and-acl.DnfgQ2UF.js";import"./stateless-discipline.CCtEvRWI.js";import"./bulkhead.DGoNKOeA.js";import"./kernel.DrC0sNW-.js";import"./latency-table.Z10ZPnGR.js";import"./balancer.BLuIYucL.js";import"./cache.CRkrIYFg.js";const H=720,et=470,o=200,st=50,f=H-o-st,at="http://www.w3.org/2000/svg",a=(n,t={},i)=>{const l=document.createElementNS(at,n);for(const[c,T]of Object.entries(t))l.setAttribute(c,String(T));return i!==void 0&&(l.textContent=i),l},m=n=>{if(!Number.isFinite(n))return"—";const t=n<0?"-":"",i=Math.abs(n);return i===0?"0":i>=1e9?`${t}${(i/1e9).toFixed(2)}B`:i>=1e6?`${t}${(i/1e6).toFixed(2)}M`:i>=1e3?`${t}${(i/1e3).toFixed(1)}k`:`${t}${i.toFixed(0)}`},y=n=>`$${m(n)}`,D=n=>n>=365?`${(n/365).toFixed(1)} yr`:n>=30?`${(n/30).toFixed(1)} mo`:`${n.toFixed(0)} d`,_=(n,t,i,l)=>{const c=Math.max(t,Math.min(i,Math.max(n,t)));return Math.log10(c/t)/Math.log10(i/t)*l},B=100,K=2e7,ot=[100,1e4,1e6,2e7],Y=100,N=5e7,it=[100,1e4,1e6,5e7];class nt extends HTMLElement{connectedCallback(){this.entitiesM=2,this.totalSteps=10,this.bakeDays=14,this.dailyCostK=6,this.defectPct=10,this.costPerEntity=40,this.riskBudgetK=50,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${H} ${et}" role="img" width="100%"
             aria-label="Top: fraction of the legacy system migrated over days, a staircase that rescales to the total migration duration. Bottom: three bars — peak exposure of the worst single step on an entity-count log axis, and parallel-run cost against expected incident cost sharing a dollar log axis, with the incident-cost bar staying fixed as the step-count slider moves."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            entities to migrate (millions)
            <input type="range" data-s="entities" min="0.1" max="10" step="0.1" value="2"
                   aria-label="Total customer accounts or records the legacy system holds">
            <output class="num" data-o="entities"></output>
          </label>
          <label>
            migration steps
            <input type="range" data-s="steps" min="1" max="60" step="1" value="10"
                   aria-label="How many equal cutover steps the migration is cut into">
            <output class="num" data-o="steps"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            bake period per step (days)
            <input type="range" data-s="bake" min="1" max="60" step="1" value="14"
                   aria-label="Days each step is held and validated before the next one fires">
            <output class="num" data-o="bake"></output>
          </label>
          <label>
            dual-run cost ($k/day)
            <input type="range" data-s="cost" min="0.5" max="30" step="0.5" value="6"
                   aria-label="Cost per day of running both systems and the ACL in parallel, in thousands of dollars">
            <output class="num" data-o="cost"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            defect probability per step (%)
            <input type="range" data-s="defect" min="0" max="50" step="1" value="10"
                   aria-label="Probability any one step's cohort hides an undetected translation defect">
            <output class="num" data-o="defect"></output>
          </label>
          <label>
            remediation cost per entity ($)
            <input type="range" data-s="entcost" min="0" max="200" step="5" value="40"
                   aria-label="Dollar cost per entity caught by an undetected defect">
            <output class="num" data-o="entcost"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            worst-incident risk budget (k entities)
            <input type="range" data-s="budget" min="1" max="2000" step="1" value="50"
                   aria-label="The largest single-incident size the organisation says it can tolerate, in thousands of entities">
            <output class="num" data-o="budget"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const b=this.querySelector(".readouts");this.ro={};for(const h of["migration duration","peak step exposure","parallel-run cost","expected incident cost","steps for risk budget"]){const u=document.createElement("div");u.className="ro",u.innerHTML=`<span class="k">${h}</span><span class="v">—</span>`,b.appendChild(u),this.ro[h]=u}this.verdict=this.querySelector(".verdict");const p=h=>this.querySelector(`[data-s="${h}"]`),d=(h,u,v=I=>I)=>{p(h).addEventListener("input",()=>{this[u]=v(Number(p(h).value)),this.labels(),this.draw()})};d("entities","entitiesM"),d("steps","totalSteps"),d("bake","bakeDays"),d("cost","dailyCostK"),d("defect","defectPct"),d("entcost","costPerEntity"),d("budget","riskBudgetK"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="entities"]').textContent=`${this.entitiesM.toFixed(1)}M`,this.querySelector('[data-o="steps"]').textContent=String(this.totalSteps),this.querySelector('[data-o="bake"]').textContent=`${this.bakeDays} d`,this.querySelector('[data-o="cost"]').textContent=`$${this.dailyCostK.toFixed(1)}k/day`,this.querySelector('[data-o="defect"]').textContent=`${this.defectPct}%`,this.querySelector('[data-o="entcost"]').textContent=`$${this.costPerEntity}`,this.querySelector('[data-o="budget"]').textContent=`${this.riskBudgetK}k`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const i=this.entitiesM*1e6,l=this.totalSteps,c=this.bakeDays,T=this.dailyCostK*1e3,O=this.defectPct/100,z=this.costPerEntity,b=this.riskBudgetK*1e3,p=V({totalSteps:l,stepBakeDays:c}),d=J({totalEntities:i,totalSteps:l}),h=Q({totalEntities:i,totalSteps:l,defectProbabilityPerStep:O,costPerEntityIncident:z}),u=U({totalSteps:l,stepBakeDays:c,dailyDualRunCost:T}),v=Z({totalEntities:i,maxTolerableIncidentSize:b}),I=14,w=32,C=w+140,E=Math.max(30,p*1.08),g=e=>o+e/E*f,k=e=>C-e*(C-w);t.appendChild(a("text",{x:0,y:I,fill:"var(--ink)","font-size":12,"font-weight":600},`${l} steps of ${c}d each — migration takes ${D(p)}`));for(const e of[0,.5,1])t.appendChild(a("line",{x1:o,y1:k(e),x2:o+f,y2:k(e),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(a("text",{x:o-10,y:k(e)+3.5,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},`${(e*100).toFixed(0)}%`));const q=5;for(let e=0;e<=q;e++){const s=E/q*e;t.appendChild(a("text",{x:g(s),y:C+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},D(s)))}const P=[],G=Math.max(.5,E/400);for(let e=0;e<=E;e+=G)P.push(`${g(e).toFixed(1)},${k(tt({day:e,totalSteps:l,stepBakeDays:c})).toFixed(1)}`);P.push(`${g(E).toFixed(1)},${k(1).toFixed(1)}`),t.appendChild(a("polyline",{points:P.join(" "),fill:"none",stroke:"var(--teal)","stroke-width":2.2})),t.appendChild(a("line",{x1:g(p),y1:w-4,x2:g(p),y2:C,stroke:"var(--slate)","stroke-width":1.5,"stroke-dasharray":"3 3"})),t.appendChild(a("text",{x:g(p),y:w-8,fill:"var(--slate)","font-size":10,"font-weight":600,"text-anchor":g(p)>o+f-70?"end":"middle"},`old system retired: ${D(p)}`));const R=C+46,W=R+18,r=22,X=20;t.appendChild(a("text",{x:0,y:R,fill:"var(--ink)","font-size":12,"font-weight":600},"worst case shrinks, expected cost does not, parallel-run cost climbs"));const x=W;for(const e of ot){const s=o+_(e,B,K,f);t.appendChild(a("line",{x1:s,y1:x-6,x2:s,y2:x+r,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(a("text",{x:s,y:x+r+14,fill:"var(--ink-soft)","font-size":9,"text-anchor":"middle"},m(e)))}t.appendChild(a("text",{x:o-10,y:x+r/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},"peak step exposure"));const F=Math.max(1,_(d,B,K,f));t.appendChild(a("rect",{x:o,y:x,width:F,height:r,fill:"var(--crimson)"}));{const e=`${m(d)} entities`,s=F>e.length*6+10;t.appendChild(a("text",{x:s?o+F/2:o+F+6,y:x+r/2+4,fill:s?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":s?"middle":"start"},e))}{const e=o+_(b,B,K,f);t.appendChild(a("line",{x1:e,y1:x-8,x2:e,y2:x+r+8,stroke:"var(--amber)","stroke-width":2,"stroke-dasharray":"3 3"})),t.appendChild(a("text",{x:e,y:x-12,fill:"var(--amber)","font-size":9,"text-anchor":e>o+f-60?"end":"middle"},"risk budget"))}const $=x+r+X+24,S=$+r+12;for(const e of it){const s=o+_(e,Y,N,f);t.appendChild(a("line",{x1:s,y1:$-6,x2:s,y2:S+r,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(a("text",{x:s,y:S+r+14,fill:"var(--ink-soft)","font-size":9,"text-anchor":"middle"},y(e)))}t.appendChild(a("text",{x:o-10,y:$+r/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},"parallel-run cost"));const L=Math.max(1,_(u.totalCost,Y,N,f));t.appendChild(a("rect",{x:o,y:$,width:L,height:r,fill:"var(--amber)"}));{const e=y(u.totalCost),s=L>e.length*6+10;t.appendChild(a("text",{x:s?o+L/2:o+L+6,y:$+r/2+4,fill:s?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":s?"middle":"start"},e))}t.appendChild(a("text",{x:o-10,y:S+r/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},"expected incident cost"));const M=Math.max(1,_(h.expectedCost,Y,N,f));t.appendChild(a("rect",{x:o,y:S,width:M,height:r,fill:"var(--slate)"}));{const e=`${y(h.expectedCost)} — same at every step count`,s=M>e.length*6+10;t.appendChild(a("text",{x:s?o+M/2:o+M+6,y:S+r/2+4,fill:s?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":s?"middle":"start"},e))}const A=(e,s)=>this.ro[e].querySelector(".v").textContent=s;A("migration duration",D(p)),A("peak step exposure",`${m(d)} entities`),A("parallel-run cost",y(u.totalCost)),A("expected incident cost",y(h.expectedCost)),A("steps for risk budget",`${v} steps`);const j=u.totalCost*d;this.verdict.textContent=`At ${l} steps of ${c} days each, the old system is retired after ${D(p)}, and the worst any ONE bad step can expose is ${m(d)} of ${m(i)} entities. Cutting it into more steps trades that peak down: going to ${l*4} steps would quarter it to ${m(d/4)} while roughly quadrupling parallel-run cost to ${y(u.totalCost*4)} — the product of the two, ${y(j)}, stays the same at every step count, because it is fixed by the bake period and the daily dual-run cost alone. The expected cost of an undetected defect, ${y(h.expectedCost)}, does not move at all as the slider changes — going slower only shrinks the size of the worst SINGLE incident, never the expected total. Bounding that worst case to the ${m(b)}-entity risk budget needs at least ${v} steps, which costs ${y(U({totalSteps:v,stepBakeDays:c,dailyDualRunCost:T}).totalCost)} in parallel-run time against ${y(U({totalSteps:1,stepBakeDays:c,dailyDualRunCost:T}).totalCost)} for a single big-bang cutover.`}}customElements.define("strangler-fig-and-acl-rig",nt);
