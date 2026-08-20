import{s as Pe,a as Ae,b as Ne,c as Fe,d as Le,e as ie,f as De,g as Re,h as le,i as Me}from"./shuffle-the-batch-primitive.Cf4aYMES.js";const Ce=720,i=150,Ue=60,y=Ce-i-Ue,ze=14,C=36,g=26,ee=18,Xe=C+2*(g+ee)+8,Ie=Xe+36,k=Ie+14,B=120,ce=k+B+20,Ee=ce+36,T=Ee+14,te=120,he=T+te+20,qe=he+22,H=[10,100,1e3,2e3,1e4],Y=[10,100,500,1e3,5e3],W=[1e9,1e10,1e11,1e12,1e13],K=[1e8,5e8,1e9,5e9,1e10],V=[0,.5,1,2,5,10],G=[64e6,128e6,256e6,512e6,1e9,2e9,4e9,8e9],j=[5e7,1e8,2e8,5e8,1e9],J=[5e7,1e8,2e8,5e8,1e9],Q=1e7,de=16e9,He="http://www.w3.org/2000/svg",n=(t,s={},u)=>{const a=document.createElementNS(He,t);for(const[r,w]of Object.entries(s))a.setAttribute(r,String(w));return u!==void 0&&(a.textContent=u),a},p=t=>Number.isFinite(t)?t>=1e9?`${(t/1e9).toFixed(1)}B`:t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}k`:`${Math.round(t)}`:"—",h=t=>Number.isFinite(t)?t>=1e12?`${(t/1e12).toFixed(2)} TB`:t>=1e9?`${(t/1e9).toFixed(2)} GB`:t>=1e6?`${(t/1e6).toFixed(1)} MB`:t>=1e3?`${(t/1e3).toFixed(1)} KB`:`${Math.round(t)} B`:"—",c=t=>Number.isFinite(t)?t>=3600?`${(t/3600).toFixed(1)} h`:t>=60?`${(t/60).toFixed(1)} min`:t>=1?`${t.toFixed(1)} s`:`${(t*1e3).toFixed(0)} ms`:"—",Z=t=>`${Math.round(t*100)}%`;class Ye extends HTMLElement{connectedCallback(){const s=H.indexOf(2e3),u=Y.indexOf(500),a=W.indexOf(1e12),r=K.indexOf(1e9),w=V.indexOf(2),I=G.indexOf(512e6),m=j.indexOf(2e8),S=30,f=J.indexOf(2e8);this.mappersIndex=s,this.reducersIndex=u,this.bytesIndex=a,this.networkIndex=r,this.overheadMsIndex=w,this.memoryIndex=I,this.diskIndex=m,this.hotPct=S,this.reducerBwIndex=f,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${Ce} ${qe}" role="img" width="100%"
             aria-label="Top: two bars, total data-volume time against total connection-setup overhead for a shuffle's M-by-R mapper-to-reducer transfers. Middle: a line over reducer memory size showing extra disk seconds paid to spill, with a dashed line at the memory size where spilling stops. Bottom: a line over the hottest key's share of shuffle bytes showing shuffle completion time as a max over reducers, with a dashed reference at the uniform no-skew baseline."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            mappers (M)
            <input type="range" data-s="mappers" min="0" max="${H.length-1}" step="1" value="${s}"
                   aria-label="Number of map tasks writing shuffle output">
            <output class="num" data-o="mappers"></output>
          </label>
          <label>
            reducers (R)
            <input type="range" data-s="reducers" min="0" max="${Y.length-1}" step="1" value="${u}"
                   aria-label="Number of reduce tasks receiving shuffle output">
            <output class="num" data-o="reducers"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            total shuffle bytes
            <input type="range" data-s="bytes" min="0" max="${W.length-1}" step="1" value="${a}"
                   aria-label="Total bytes of mapper output the shuffle moves">
            <output class="num" data-o="bytes"></output>
          </label>
          <label>
            network bandwidth
            <input type="range" data-s="net" min="0" max="${K.length-1}" step="1" value="${r}"
                   aria-label="Aggregate bytes per second the shuffle's network capacity sustains">
            <output class="num" data-o="net"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            per-connection overhead
            <input type="range" data-s="ov" min="0" max="${V.length-1}" step="1" value="${w}"
                   aria-label="Fixed setup cost paid by each mapper-to-reducer transfer, in milliseconds">
            <output class="num" data-o="ov"></output>
          </label>
          <label>
            reducer memory
            <input type="range" data-s="mem" min="0" max="${G.length-1}" step="1" value="${I}"
                   aria-label="Memory available to one reducer to hold its partition before spilling">
            <output class="num" data-o="mem"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            disk bandwidth (spill)
            <input type="range" data-s="disk" min="0" max="${j.length-1}" step="1" value="${m}"
                   aria-label="Bytes per second a reducer's local disk sustains while spilling">
            <output class="num" data-o="disk"></output>
          </label>
          <label>
            hottest key's share
            <input type="range" data-s="hot" min="1" max="99" step="1" value="${S}"
                   aria-label="Percent of total shuffle bytes hashing to the single hottest reducer partition">
            <output class="num" data-o="hot"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            reducer throughput
            <input type="range" data-s="rbw" min="0" max="${J.length-1}" step="1" value="${f}"
                   aria-label="Bytes per second one reducer can copy and merge its partition at">
            <output class="num" data-o="rbw"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const b=this.querySelector(".readouts");this.ro={};for(const d of["connections (M×R)","data-volume time","connection overhead time","overhead share of total","spill runs","spill time","skewed completion","uniform completion","skew slowdown"]){const x=document.createElement("div");x.className="ro",x.innerHTML=`<span class="k">${d}</span><span class="v">—</span>`,b.appendChild(x),this.ro[d]=x}this.verdict=this.querySelector(".verdict");const $=d=>this.querySelector(`[data-s="${d}"]`),l=(d,x)=>{$(d).addEventListener("input",()=>{this[x]=Number($(d).value),this.labels()}),$(d).addEventListener("change",()=>{this[x]=Number($(d).value),this.draw()})};l("mappers","mappersIndex"),l("reducers","reducersIndex"),l("bytes","bytesIndex"),l("net","networkIndex"),l("ov","overheadMsIndex"),l("mem","memoryIndex"),l("disk","diskIndex"),l("hot","hotPct"),l("rbw","reducerBwIndex"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="mappers"]').textContent=p(H[this.mappersIndex]),this.querySelector('[data-o="reducers"]').textContent=p(Y[this.reducersIndex]),this.querySelector('[data-o="bytes"]').textContent=h(W[this.bytesIndex]),this.querySelector('[data-o="net"]').textContent=`${h(K[this.networkIndex])}/s`,this.querySelector('[data-o="ov"]').textContent=`${V[this.overheadMsIndex]} ms`,this.querySelector('[data-o="mem"]').textContent=h(G[this.memoryIndex]),this.querySelector('[data-o="disk"]').textContent=`${h(j[this.diskIndex])}/s`,this.querySelector('[data-o="hot"]').textContent=`${this.hotPct}%`,this.querySelector('[data-o="rbw"]').textContent=`${h(J[this.reducerBwIndex])}/s`}draw(){const s=this.svg;for(;s.firstChild;)s.removeChild(s.firstChild);const u=H[this.mappersIndex],a=Y[this.reducersIndex],r=W[this.bytesIndex],w=K[this.networkIndex],I=V[this.overheadMsIndex]/1e3,m=G[this.memoryIndex],S=j[this.diskIndex],f=this.hotPct/100,b=J[this.reducerBwIndex],$=Pe({numMappers:u,numReducers:a}),l=Ae({mapOutputBytes:r,networkBytesPerSec:w}),d=Ne({numMappers:u,numReducers:a,perConnectionOverheadSeconds:I}),x=Fe({mapOutputBytes:r,networkBytesPerSec:w,numMappers:u,numReducers:a,perConnectionOverheadSeconds:I});s.appendChild(n("text",{x:0,y:ze,fill:"var(--ink)","font-size":12,"font-weight":600},`${p(u)} mappers × ${p(a)} reducers = ${p($)} transfers`));const se=Math.max(l,d)*1.15||1,P=e=>i+Math.min(e,se)/se*y;for(let e=0;e<=4;e++){const o=se/4*e;s.appendChild(n("line",{x1:P(o),y1:C-6,x2:P(o),y2:C+2*(g+ee),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),s.appendChild(n("text",{x:P(o),y:C+2*(g+ee)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},c(o)))}const ue=(e,o,O,Te)=>{const q=P(o)-i;s.appendChild(n("text",{x:i-8,y:e+g/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},Te)),s.appendChild(n("rect",{x:i,y:e,width:Math.max(.5,q),height:g,fill:O}));const Se=c(o),re=q>Se.length*6+12;s.appendChild(n("text",{x:re?i+q/2:i+q+6,y:e+g/2+4,fill:re?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":re?"middle":"start"},Se))};ue(C,l,"var(--teal)","data volume"),ue(C+g+ee,d,"var(--crimson)","connection overhead");const _=Le({totalShuffleBytes:r,numReducers:a});s.appendChild(n("text",{x:0,y:Ie,fill:"var(--ink)","font-size":12,"font-weight":600},`spilling a ${h(_)} reducer partition, vs. reducer memory`));const A=Math.log10(Q),pe=Math.log10(de),N=e=>i+(Math.log10(e)-A)/(pe-A)*y,me=ie({partitionBytes:_,reducerMemoryBytes:Q,diskBytesPerSec:S})||1,fe=e=>k+B-Math.max(0,Math.min(e,me))/me*B,Oe=[1e7,1e8,1e9,1e10];for(const e of Oe){const o=N(e);s.appendChild(n("line",{x1:o,y1:k,x2:o,y2:k+B,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),s.appendChild(n("text",{x:o,y:ce,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},h(e)))}s.appendChild(n("text",{x:i+y/2,y:ce+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},"reducer memory available (log scale)"));const oe=N(Math.min(Math.max(_,Q),de));s.appendChild(n("line",{x1:oe,y1:k,x2:oe,y2:k+B,stroke:"var(--crimson)","stroke-width":1,"stroke-dasharray":"4 3"})),s.appendChild(n("text",{x:oe+4,y:k+10,fill:"var(--crimson)","font-size":10},`fits at ${h(_)}`));const xe=40;let ve="";for(let e=0;e<=xe;e++){const o=10**(A+(pe-A)*e/xe),O=ie({partitionBytes:_,reducerMemoryBytes:o,diskBytesPerSec:S});ve+=`${e===0?"M":"L"} ${N(o)} ${fe(O)} `}s.appendChild(n("path",{d:ve,fill:"none",stroke:"var(--teal)","stroke-width":2}));const F=ie({partitionBytes:_,reducerMemoryBytes:m,diskBytesPerSec:S}),L=De({partitionBytes:_,reducerMemoryBytes:m}),D=N(Math.min(Math.max(m,Q),de)),ye=fe(F);s.appendChild(n("circle",{cx:D,cy:ye,r:4,fill:"var(--teal)"}));const be=D>i+y-130;s.appendChild(n("text",{x:be?D-8:D+8,y:Math.max(k+10,ye-8),fill:"var(--ink)","font-size":10,"text-anchor":be?"end":"start"},`${h(m)}: ${c(F)}, ${L} runs`)),s.appendChild(n("text",{x:0,y:Ee,fill:"var(--ink)","font-size":12,"font-weight":600},`${p(a)}-reducer shuffle completion, vs. hottest key's share of ${h(r)}`));const R=.99,M=.01,E=e=>i+(e-M)/(R-M)*y,U=Re({totalShuffleBytes:r,numReducers:a,reducerBytesPerSec:b}),$e=le({totalShuffleBytes:r,numReducers:a,hotShare:R,reducerBytesPerSec:b})||1,ne=e=>T+te-Math.max(0,Math.min(e,$e))/$e*te;for(let e=0;e<=4;e++){const o=M+(R-M)/4*e;s.appendChild(n("line",{x1:E(o),y1:T,x2:E(o),y2:T+te,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),s.appendChild(n("text",{x:E(o),y:he,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},Z(o)))}s.appendChild(n("text",{x:i+y/2,y:he+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},"hottest key's share of total shuffle bytes"));const ae=ne(U);s.appendChild(n("line",{x1:i,y1:ae,x2:i+y,y2:ae,stroke:"var(--crimson)","stroke-width":1,"stroke-dasharray":"4 3"})),s.appendChild(n("text",{x:i+y-4,y:ae-6,fill:"var(--crimson)","font-size":10,"text-anchor":"end"},`uniform: ${c(U)}`));const _e=40;let ke="";for(let e=0;e<=_e;e++){const o=M+(R-M)*e/_e,O=le({totalShuffleBytes:r,numReducers:a,hotShare:o,reducerBytesPerSec:b});ke+=`${e===0?"M":"L"} ${E(o)} ${ne(O)} `}s.appendChild(n("path",{d:ke,fill:"none",stroke:"var(--amber)","stroke-width":2}));const z=le({totalShuffleBytes:r,numReducers:a,hotShare:f,reducerBytesPerSec:b}),X=E(f),we=ne(z);s.appendChild(n("circle",{cx:X,cy:we,r:4,fill:"var(--amber)"}));const ge=X>i+y-130;s.appendChild(n("text",{x:ge?X-8:X+8,y:Math.max(T+10,we-8),fill:"var(--ink)","font-size":10,"text-anchor":ge?"end":"start"},`${Z(f)}: ${c(z)}`));const v=(e,o)=>this.ro[e].querySelector(".v").textContent=o;v("connections (M×R)",p($)),v("data-volume time",c(l)),v("connection overhead time",c(d)),v("overhead share of total",Z(x)),v("spill runs",`${L}`),v("spill time",c(F)),v("skewed completion",c(z)),v("uniform completion",c(U)),v("skew slowdown",`${Me({totalShuffleBytes:r,numReducers:a,hotShare:f,reducerBytesPerSec:b}).toFixed(1)}x`);const Be=d>l;this.verdict.textContent=`${p(u)} mappers and ${p(a)} reducers open ${p($)} transfers to move ${h(r)}: ${c(l)} of that is data actually crossing the network, ${c(d)} is pure per-connection overhead${Be?" — MORE than the data-volume time, from shape alone":""}. Each reducer's ${h(_)} partition ${L>0?`spills ${L} sorted run(s) to disk against a ${h(m)} memory budget, costing ${c(F)}`:`fits in its ${h(m)} memory budget with no spill`}. And with ${Z(f)} of all bytes hashing to one hot partition, the shuffle stage waits ${c(z)} for that one reducer — ${Me({totalShuffleBytes:r,numReducers:a,hotShare:f,reducerBytesPerSec:b}).toFixed(1)}x slower than the ${c(U)} every reducer would take if keys hashed evenly, a MAX over reducers, not their mean.`}}customElements.define("shuffle-the-batch-primitive-rig",Ye);
