import{a as Y,p as F,h as G}from"./pub-sub-vs-point-to-point.CkQbDBfU.js";const z=720,V=460,a=130,j=40,J=z-a-j,Q=14,d=34,U=170,$=d+U,W=$+46,K=W+22,A=30,Z=14,w=92,y=1,I=20,B=[1,2,4,8],E=[1,4,16],tt="http://www.w3.org/2000/svg",s=(l,t={},o)=>{const r=document.createElementNS(tt,l);for(const[h,v]of Object.entries(t))r.setAttribute(h,String(v));return o!==void 0&&(r.textContent=o),r},u=l=>{if(!Number.isFinite(l))return"—";const t=[[1e12,"TB"],[1e9,"GB"],[1e6,"MB"],[1e3,"kB"]];for(const[o,r]of t)if(l>=o)return`${(l/o).toFixed(l/o>=100?0:1)} ${r}`;return`${Math.round(l)} B`},f=l=>Math.round(l).toLocaleString("en-US");class et extends HTMLElement{connectedCallback(){this.messageCount=1e5,this.avgBytes=2e3,this.subscribers=4,this.groupRowIdx=2,this.memberColIdx=1,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${z} ${V}" role="img" width="100%"
             aria-label="Top: two lines over subscriber count, point-to-point delivery cost flat and pub/sub delivery cost climbing linearly. Bottom: a grid of hybrid delivery cost by consumer-group count and members per group, showing cost depends only on group count."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            messages
            <input type="range" data-s="messages" min="1000" max="1000000" step="1000" value="100000"
                   aria-label="Number of messages delivered">
            <output class="num" data-o="messages"></output>
          </label>
          <label>
            avg message size
            <input type="range" data-s="avgBytes" min="100" max="20000" step="100" value="2000"
                   aria-label="Average message size in bytes">
            <output class="num" data-o="avgBytes"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            subscriber count (pub/sub)
            <input type="range" data-s="subscribers" min="${y}" max="${I}" step="1" value="4"
                   aria-label="Number of independent pub/sub subscribers">
            <output class="num" data-o="subscribers"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            consumer groups (K, hybrid row)
            <input type="range" data-s="groupRow" min="0" max="${B.length-1}" step="1" value="2"
                   aria-label="Which row of the hybrid grid to highlight, by number of independent consumer groups">
            <output class="num" data-o="groupRow"></output>
          </label>
          <label>
            members per group (G, hybrid column)
            <input type="range" data-s="memberCol" min="0" max="${E.length-1}" step="1" value="1"
                   aria-label="Which column of the hybrid grid to highlight, by members within one consumer group">
            <output class="num" data-o="memberCol"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const x=this.querySelector(".readouts");this.ro={};for(const i of["point-to-point cost","pub/sub cost @ N","fan-out multiplier","hybrid cost @ K,G","hybrid cost if G were 1"]){const n=document.createElement("div");n.className="ro",n.innerHTML=`<span class="k">${i}</span><span class="v">—</span>`,x.appendChild(n),this.ro[i]=n}this.verdict=this.querySelector(".verdict");const m=i=>this.querySelector(`[data-s="${i}"]`),p=(i,n)=>{m(i).addEventListener("input",()=>{this[n]=Number(m(i).value),this.labels()}),m(i).addEventListener("change",()=>{this[n]=Number(m(i).value),this.draw()})};p("messages","messageCount"),p("avgBytes","avgBytes"),p("subscribers","subscribers"),p("groupRow","groupRowIdx"),p("memberCol","memberColIdx"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="messages"]').textContent=`${f(this.messageCount)}`,this.querySelector('[data-o="avgBytes"]').textContent=`${f(this.avgBytes)} B`,this.querySelector('[data-o="subscribers"]').textContent=`${this.subscribers}`,this.querySelector('[data-o="groupRow"]').textContent=`K=${B[this.groupRowIdx]}`,this.querySelector('[data-o="memberCol"]').textContent=`G=${E[this.memberColIdx]}`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const{messageCount:o,avgBytes:r}=this,h=Y({messageCount:o,avgBytes:r}),v=Array.from({length:I-y+1},(e,c)=>y+c),x=v.map(e=>F({messageCount:o,avgBytes:r,subscriberCount:e})),m=v.map(()=>h),p=F({messageCount:o,avgBytes:r,subscriberCount:this.subscribers}),i=B[this.groupRowIdx],n=E[this.memberColIdx],T=G({messageCount:o,avgBytes:r,groupCount:i,membersPerGroup:n}),R=G({messageCount:o,avgBytes:r,groupCount:i,membersPerGroup:1});t.appendChild(s("text",{x:0,y:Q,fill:"var(--ink)","font-size":12,"font-weight":600},`delivery cost at ${f(o)} messages, ${f(r)} B avg — point-to-point flat, pub/sub linear in N`));const k=Math.max(...x,h),L=e=>d+U-e/k*U,b=e=>a+(e-y)/(I-y)*J;for(const e of[1,5,10,15,20])t.appendChild(s("line",{x1:b(e),y1:d,x2:b(e),y2:$,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(s("text",{x:b(e),y:$+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},`N=${e}`));t.appendChild(s("text",{x:a-8,y:d+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},u(k))),t.appendChild(s("text",{x:a-8,y:$+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},"0"));const D=(e,c)=>{const g=v.map((_,S)=>`${S===0?"M":"L"} ${b(_)} ${L(e[S])}`).join(" ");t.appendChild(s("path",{d:g,fill:"none",stroke:c,"stroke-width":2.5}))};D(m,"var(--teal)"),D(x,"var(--amber)");const O=this.subscribers-y;t.appendChild(s("circle",{cx:b(this.subscribers),cy:L(m[O]),r:4.5,fill:"var(--teal)"})),t.appendChild(s("circle",{cx:b(this.subscribers),cy:L(x[O]),r:4.5,fill:"var(--amber)"})),t.appendChild(s("line",{x1:b(this.subscribers),y1:d,x2:b(this.subscribers),y2:$,stroke:"var(--crimson)","stroke-width":1,"stroke-dasharray":"3 3"})),t.appendChild(s("rect",{x:a,y:d-18,width:10,height:10,fill:"var(--teal)"})),t.appendChild(s("text",{x:a+16,y:d-9,fill:"var(--ink-soft)","font-size":10},"point-to-point (delivered once)")),t.appendChild(s("rect",{x:a+220,y:d-18,width:10,height:10,fill:"var(--amber)"})),t.appendChild(s("text",{x:a+236,y:d-9,fill:"var(--ink-soft)","font-size":10},"pub/sub (N full copies)")),t.appendChild(s("text",{x:0,y:W,fill:"var(--ink)","font-size":12,"font-weight":600},"hybrid cost by consumer-group count (K, rows) x members per group (G, columns) — cost depends only on K")),E.forEach((e,c)=>{const g=a+70+c*w+w/2;t.appendChild(s("text",{x:g,y:K-8,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},`G=${e}`))}),B.forEach((e,c)=>{const g=K+c*(A+Z),_=c===this.groupRowIdx;t.appendChild(s("text",{x:a-8,y:g+A/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},`K=${e}`)),E.forEach((S,M)=>{const N=a+70+M*w,X=G({messageCount:o,avgBytes:r,groupCount:e,membersPerGroup:S}),P=_&&M===this.memberColIdx;t.appendChild(s("rect",{x:N,y:g,width:w-10,height:A,fill:_?"var(--amber)":"var(--paper-sunk)",stroke:P?"var(--crimson)":"var(--rule)","stroke-width":P?2.5:1}));const H=u(X);t.appendChild(s("text",{x:N+(w-10)/2,y:g+A/2+4,fill:_?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":"middle"},H))})});const C=(e,c)=>{this.ro[e]&&(this.ro[e].querySelector(".v").textContent=c)};C("point-to-point cost",u(h)),C("pub/sub cost @ N",`${u(p)} (N=${this.subscribers})`),C("fan-out multiplier",`${this.subscribers}×`),C("hybrid cost @ K,G",`${u(T)} (K=${i}, G=${n})`),C("hybrid cost if G were 1",u(R));const q=T===R;this.verdict.textContent=`At ${f(o)} messages of ${f(r)} B, point-to-point delivery costs ${u(h)} no matter how many consumers compete for that work -- each message is still delivered exactly once. Pub/sub with ${this.subscribers} independent subscribers costs ${u(p)}, exactly ${this.subscribers}x the point-to-point figure, because each subscriber gets its own full, independent copy. The hybrid grid at K=${i} groups and G=${n} members per group costs ${u(T)} -- ${q?"identical to":"the same as"} G=1 (${u(R)}), because members WITHIN a group only split already-delivered work; only the number of independent GROUPS (K) adds delivery cost, which is exactly why Kafka's consumer-group model gives pub/sub's "many independent interested parties" property without paying pub/sub's full per-consumer cost.`}}customElements.define("pub-sub-vs-point-to-point-rig",et);
