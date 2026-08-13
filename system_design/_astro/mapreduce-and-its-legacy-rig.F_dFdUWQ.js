import{l as mt,r as bt,a as yt,c as J,e as G,d as ht,b as vt}from"./mapreduce-and-its-legacy.B9FBcwcc.js";const ut=720,n=150,$t=60,m=ut-n-$t,_t=14,S=36,_=26,K=18,wt=S+2*(_+K)+8,pt=wt+36,O=pt+14,X=120,V=O+X+20,xt=V+36,P=xt+14,Y=120,Z=P+Y+20,Ct=Z+22,z=[16e6,32e6,64e6,128e6,256e6,512e6,1e9],R=[5e7,1e8,2e8,5e8,1e9],q=[1e7,5e7,1e8,125e6,25e7,5e8,1e9],j=[1e9,1e10,1e11,1e12,1e13,1e14],U=[10,100,1e3,1e4,1e5],gt="http://www.w3.org/2000/svg",o=(e,a={},h)=>{const p=document.createElementNS(gt,e);for(const[c,d]of Object.entries(a))p.setAttribute(c,String(d));return h!==void 0&&(p.textContent=h),p},L=e=>Number.isFinite(e)?e>=1e9?`${(e/1e9).toFixed(1)}B`:e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:`${Math.round(e)}`:"—",b=e=>Number.isFinite(e)?e>=1e12?`${(e/1e12).toFixed(2)} TB`:e>=1e9?`${(e/1e9).toFixed(2)} GB`:e>=1e6?`${(e/1e6).toFixed(1)} MB`:e>=1e3?`${(e/1e3).toFixed(1)} KB`:`${Math.round(e)} B`:"—",i=e=>Number.isFinite(e)?e>=86400?`${L(e/86400)} d`:e>=3600?`${(e/3600).toFixed(1)} h`:e>=60?`${(e/60).toFixed(1)} min`:`${e.toFixed(1)} s`:"—",T=e=>`${Math.round(e*100)}%`;class Tt extends HTMLElement{connectedCallback(){const a=z.indexOf(128e6),h=R.indexOf(2e8),p=q.indexOf(125e6),c=j.indexOf(1e13),d=95,x=U.indexOf(1e3),k=60,y=20;this.blockIndex=a,this.diskIndex=h,this.networkIndex=p,this.datasetIndex=c,this.localityPct=d,this.tasksIndex=x,this.taskDuration=k,this.failurePct=y,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${ut} ${Ct}" role="img" width="100%"
             aria-label="Top: two bars, local-disk read time against network read time for one map task's input block. Middle: a line over locality fraction showing total cluster network time to fetch a job's input, with a dashed reference at zero locality and a marker at the current fraction. Bottom: a line over per-task failure probability showing expected job-wide re-execution overhead, with a marker at the current probability."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            map task's input block size
            <input type="range" data-s="block" min="0" max="${z.length-1}" step="1" value="${a}"
                   aria-label="Size of one map task's input split">
            <output class="num" data-o="block"></output>
          </label>
          <label>
            local disk read bandwidth
            <input type="range" data-s="disk" min="0" max="${R.length-1}" step="1" value="${h}"
                   aria-label="Bytes per second the node's local disk can sustain">
            <output class="num" data-o="disk"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            network bandwidth
            <input type="range" data-s="net" min="0" max="${q.length-1}" step="1" value="${p}"
                   aria-label="Bytes per second the shared cluster network link can sustain">
            <output class="num" data-o="net"></output>
          </label>
          <label>
            job's total input dataset size
            <input type="range" data-s="dataset" min="0" max="${j.length-1}" step="1" value="${c}"
                   aria-label="Total size of the job's map input across all tasks">
            <output class="num" data-o="dataset"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            locality achieved
            <input type="range" data-s="locality" min="0" max="100" step="1" value="${d}"
                   aria-label="Percent of map tasks the scheduler placed on a node holding their input">
            <output class="num" data-o="locality"></output>
          </label>
          <label>
            map tasks in the job
            <input type="range" data-s="tasks" min="0" max="${U.length-1}" step="1" value="${x}"
                   aria-label="Number of independent map tasks the job is split into">
            <output class="num" data-o="tasks"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            task duration
            <input type="range" data-s="dur" min="1" max="600" step="1" value="${k}"
                   aria-label="Seconds one map task takes to run once, start to finish">
            <output class="num" data-o="dur"></output>
          </label>
          <label>
            per-task failure probability
            <input type="range" data-s="fail" min="0" max="95" step="1" value="${y}"
                   aria-label="Probability any single task attempt fails and must be rerun from scratch">
            <output class="num" data-o="fail"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const v=this.querySelector(".readouts");this.ro={};for(const l of["local read","remote read","locality speedup","network time saved (job)","expected re-execution overhead","expected failed attempts"]){const u=document.createElement("div");u.className="ro",u.innerHTML=`<span class="k">${l}</span><span class="v">—</span>`,v.appendChild(u),this.ro[l]=u}this.verdict=this.querySelector(".verdict");const f=l=>this.querySelector(`[data-s="${l}"]`),r=(l,u)=>{f(l).addEventListener("input",()=>{this[u]=Number(f(l).value),this.labels()}),f(l).addEventListener("change",()=>{this[u]=Number(f(l).value),this.draw()})};r("block","blockIndex"),r("disk","diskIndex"),r("net","networkIndex"),r("dataset","datasetIndex"),r("locality","localityPct"),r("tasks","tasksIndex"),r("dur","taskDuration"),r("fail","failurePct"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="block"]').textContent=b(z[this.blockIndex]),this.querySelector('[data-o="disk"]').textContent=`${b(R[this.diskIndex])}/s`,this.querySelector('[data-o="net"]').textContent=`${b(q[this.networkIndex])}/s`,this.querySelector('[data-o="dataset"]').textContent=b(j[this.datasetIndex]),this.querySelector('[data-o="locality"]').textContent=`${this.localityPct}%`,this.querySelector('[data-o="tasks"]').textContent=L(U[this.tasksIndex]),this.querySelector('[data-o="dur"]').textContent=i(this.taskDuration),this.querySelector('[data-o="fail"]').textContent=`${this.failurePct}%`}draw(){const a=this.svg;for(;a.firstChild;)a.removeChild(a.firstChild);const h=z[this.blockIndex],p=R[this.diskIndex],c=q[this.networkIndex],d=j[this.datasetIndex],x=this.localityPct/100,k=U[this.tasksIndex],y=this.taskDuration,v=this.failurePct/100,f=mt({blockBytes:h,diskReadBytesPerSec:p}),r=bt({blockBytes:h,networkBytesPerSec:c}),l=yt({blockBytes:h,diskReadBytesPerSec:p,networkBytesPerSec:c});a.appendChild(o("text",{x:0,y:_t,fill:"var(--ink)","font-size":12,"font-weight":600},`reading one ${b(h)} map-task block: local disk vs. the network`));const u=Math.max(f,r)*1.15,B=t=>n+Math.min(t,u)/u*m;for(let t=0;t<=4;t++){const s=u/4*t;a.appendChild(o("line",{x1:B(s),y1:S-6,x2:B(s),y2:S+2*(_+K),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),a.appendChild(o("text",{x:B(s),y:S+2*(_+K)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},i(s)))}const Q=(t,s,F,ft)=>{const D=B(s)-n;a.appendChild(o("text",{x:n-8,y:t+_/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},ft)),a.appendChild(o("rect",{x:n,y:t,width:Math.max(.5,D),height:_,fill:F}));const dt=i(s),W=D>dt.length*6+12;a.appendChild(o("text",{x:W?n+D/2:n+D+6,y:t+_/2+4,fill:W?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":W?"middle":"start"},dt))};Q(S,f,"var(--teal)","local disk"),Q(S+_+K,r,"var(--crimson)","network"),a.appendChild(o("text",{x:0,y:pt,fill:"var(--ink)","font-size":12,"font-weight":600},`cluster network time to fetch ${b(d)} of job input, vs. locality achieved`));const I=t=>n+t*m,$=J({datasetBytes:d,localityFraction:0,networkBytesPerSec:c}),w=t=>O+X-Math.max(0,Math.min(t,$))/$*X;for(let t=0;t<=4;t++){const s=t/4;a.appendChild(o("line",{x1:I(s),y1:O,x2:I(s),y2:O+X,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),a.appendChild(o("text",{x:I(s),y:V,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},T(s)))}a.appendChild(o("text",{x:n+m/2,y:V+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},"locality fraction (share of tasks placed on their own data)")),a.appendChild(o("line",{x1:n,y1:w($),x2:n+m,y2:w($),stroke:"var(--crimson)","stroke-width":1,"stroke-dasharray":"4 3"})),a.appendChild(o("text",{x:n+m-4,y:w($)-6,fill:"var(--crimson)","font-size":10,"text-anchor":"end"},`0% locality: ${i($)}`));const tt=40;let et="";for(let t=0;t<=tt;t++){const s=t/tt,F=J({datasetBytes:d,localityFraction:s,networkBytesPerSec:c});et+=`${t===0?"M":"L"} ${I(s)} ${w(F)} `}a.appendChild(o("path",{d:et,fill:"none",stroke:"var(--teal)","stroke-width":2}));const at=J({datasetBytes:d,localityFraction:x,networkBytesPerSec:c}),C=I(x),H=w(at);a.appendChild(o("line",{x1:C,y1:H,x2:C,y2:w($),stroke:"var(--ink-soft)","stroke-width":1,"stroke-dasharray":"3 3"})),a.appendChild(o("circle",{cx:C,cy:H,r:4,fill:"var(--teal)"}));const st=C>n+m-130;a.appendChild(o("text",{x:st?C-8:C+8,y:Math.max(O+10,H-8),fill:"var(--ink)","font-size":10,"text-anchor":st?"end":"start"},`${T(x)}: ${i(at)}`)),a.appendChild(o("text",{x:0,y:xt,fill:"var(--ink)","font-size":12,"font-weight":600},`expected re-execution overhead across ${L(k)} map tasks, vs. per-task failure probability`));const E=.95,A=t=>n+t/E*m,ot=G({numMapTasks:k,taskDurationSeconds:y,taskFailureProbability:E}),nt=t=>P+Y-Math.max(0,Math.min(t,ot))/ot*Y;for(let t=0;t<=4;t++){const s=E/4*t;a.appendChild(o("line",{x1:A(s),y1:P,x2:A(s),y2:P+Y,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),a.appendChild(o("text",{x:A(s),y:Z,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},T(s)))}a.appendChild(o("text",{x:n+m/2,y:Z+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},"per-task failure probability — no interval knob bounds this curve"));const it=40;let rt="";for(let t=0;t<=it;t++){const s=E/it*t,F=G({numMapTasks:k,taskDurationSeconds:y,taskFailureProbability:s});rt+=`${t===0?"M":"L"} ${A(s)} ${nt(F)} `}a.appendChild(o("path",{d:rt,fill:"none",stroke:"var(--amber)","stroke-width":2}));const M=G({numMapTasks:k,taskDurationSeconds:y,taskFailureProbability:v}),N=A(v),lt=nt(M);a.appendChild(o("circle",{cx:N,cy:lt,r:4,fill:"var(--amber)"}));const ct=N>n+m-130;a.appendChild(o("text",{x:ct?N-8:N+8,y:Math.max(P+10,lt-8),fill:"var(--ink)","font-size":10,"text-anchor":ct?"end":"start"},`${T(v)}: ${i(M)}`));const g=(t,s)=>this.ro[t].querySelector(".v").textContent=s;g("local read",i(f)),g("remote read",i(r)),g("locality speedup",`${l.toFixed(1)}x`),g("network time saved (job)",i(ht({datasetBytes:d,localityFraction:x,networkBytesPerSec:c}))),g("expected re-execution overhead",i(M)),g("expected failed attempts",L(vt({numMapTasks:k,taskFailureProbability:v})));const kt=l>1;this.verdict.textContent=`Reading a ${b(h)} block locally takes ${i(f)}; pulling the same block over the network takes ${i(r)} — ${kt?`${l.toFixed(1)}x slower`:"actually faster here, an unusual bandwidth regime"}. At ${T(x)} locality across ${b(d)} of job input, that scheduling choice saves ${i(ht({datasetBytes:d,localityFraction:x,networkBytesPerSec:c}))} of shared network time versus scheduling every task remotely. Separately, rerunning failed tasks from scratch across ${L(k)} ${i(y)}-tasks at a ${T(v)} failure rate costs ${i(M)} of expected extra compute — no checkpoint interval bounds that number, only shrinking the task or the failure rate does.`}}customElements.define("mapreduce-and-its-legacy-rig",Tt);
