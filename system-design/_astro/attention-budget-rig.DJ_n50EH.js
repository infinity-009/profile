import{O as R,H as T,b as O,m as H,e as M}from"./context-rot.XoIS-gv1.js";import{readout as b,onThemeChange as _,palette as z,fitCanvas as Y,label as m,spreadLabels as D,stackLabels as K}from"./rig.CyiChFZe.js";const P=Object.keys(R),C=["literal","shuffled","related","coherent"],E=[400,800,1600],k=60,f=680,g=300,j=46,q=92,p=26,c=g-46,I=l=>l>=1e3?`${(l/1e3).toFixed(l>=1e5?0:1)}k`:Math.round(l).toString();class G extends HTMLElement{connectedCallback(){this.orderIdx=1,this.hayIdx=2,this.chunkIdx=1,this.innerHTML=`
      <div class="panel">
        <canvas role="img" aria-label="Probability the answer is present, probability the model finds it, and their product against the number of retrieved chunks."></canvas>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            chunk order in the prompt
            <select data-s="order" aria-label="Order the retrieved chunks are concatenated in">
              ${P.map((e,n)=>`<option value="${n}"${n===1?" selected":""}>${R[e]}</option>`).join("")}
            </select>
          </label>
          <label>
            what surrounds the answer
            <select data-s="hay" aria-label="How distinguishable the answer is from the rest of the context">
              ${C.map((e,n)=>`<option value="${n}"${n===2?" selected":""}>${T[e].label}</option>`).join("")}
            </select>
          </label>
          <label>
            tokens per chunk
            <select data-s="chunk" aria-label="Tokens per retrieved chunk">
              ${E.map((e,n)=>`<option value="${n}"${n===1?" selected":""}>${e}</option>`).join("")}
            </select>
          </label>
        </div>
      </div>`,this.canvas=this.querySelector("canvas");const o=this.querySelector(".readouts");this.ro={best:b(o,"chunks worth retrieving"),peak:b(o,"P(correct) at that count"),tokens:b(o,"context at that count"),all:b(o,`P(correct) retrieving all ${k}`)},this.verdict=this.querySelector(".verdict");for(const[e,n]of[["order","orderIdx"],["hay","hayIdx"],["chunk","chunkIdx"]])this.querySelector(`[data-s="${e}"]`).addEventListener("change",t=>{this[n]=Number(t.target.value),this.draw()});_(()=>this.draw()),this.obs=new ResizeObserver(()=>this.draw()),this.obs.observe(this),this.draw()}disconnectedCallback(){this.obs?.disconnect()}draw(){const o=z(this),e=Y(this.canvas,f,g);e.clearRect(0,0,f,g);const n={order:P[this.orderIdx],d:T[C[this.hayIdx]].d,chunkTokens:E[this.chunkIdx],kMax:k},t=O(n),v=t.sweep,a=v[v.length-1],$=H({k:t.k,...n}),r=j,u=f-q,i=s=>r+(s-1)/(k-1)*(u-r),d=s=>c-s*(c-p);e.strokeStyle=o.rule,e.lineWidth=1;for(let s=0;s<=1.0001;s+=.25){const h=d(s);e.globalAlpha=s===0?.9:.35,e.beginPath(),e.moveTo(r,h),e.lineTo(u,h),e.stroke(),e.globalAlpha=1,m(e,`${Math.round(s*100)}%`,r-6,h,o.slate,{size:8,align:"right"})}for(const s of[1,10,20,30,40,50,60])m(e,String(s),i(s),c+12,o.slate,{size:8,align:"center"});m(e,"chunks retrieved",r,p-12,o["ink-soft"],{size:8,align:"left"});const x=(s,h,F)=>{e.strokeStyle=h,e.lineWidth=F,e.beginPath(),v.forEach((y,L)=>{const w=i(y.k),S=d(s(y));L===0?e.moveTo(w,S):e.lineTo(w,S)}),e.stroke(),e.lineWidth=1};x(s=>s.presence,o.teal,1.5),x(s=>s.correct,o.amber,2.5),x(s=>s.found,o.slate,1.5),e.save(),e.strokeStyle=o.amber,e.setLineDash([2,3]),e.beginPath(),e.moveTo(i(t.k),p),e.lineTo(i(t.k),c),e.stroke(),e.restore(),e.fillStyle=o.amber,e.beginPath(),e.arc(i(t.k),d(t.correct),4,0,Math.PI*2),e.fill(),D(e,[{x:i(t.k),text:`P(correct) peaks at ${t.k}`,colour:o.amber}],{y:c+30,minGap:10,size:8,minX:r,maxX:u}),K(e,[{y:d(a.presence),text:"answer present",colour:o.teal},{y:d(a.found),text:"model finds it",colour:o.slate}],{x:u+6,align:"left",minGap:12,size:9,minY:p,maxY:c}),this.ro.best.set(String(t.k),"ok"),this.ro.peak.set(`${(t.correct*100).toFixed(1)}%`),this.ro.tokens.set(`${I(t.tokens)} tokens`),this.ro.all.set(`${(a.correct*100).toFixed(1)}%`,a.correct<t.correct?"bad":void 0);const A=M({k:t.k+1,...n});this.verdict.textContent=`Retrieve ${t.k} chunks (${I(t.tokens)} tokens) and expected accuracy peaks at ${(t.correct*100).toFixed(1)}%. Chunk ${t.k+1} raises the chance the answer is present by ${($.presenceGain*100).toFixed(2)} points and lowers the chance the model finds it by ${($.foundLoss*100).toFixed(2)} — net ${(A.correct*100-t.correct*100).toFixed(2)} points. Retrieving all ${k} costs ${((t.correct-a.correct)*100).toFixed(1)} points against the peak.`,this.canvas.setAttribute("aria-label",`Expected accuracy peaks at ${t.k} retrieved chunks, ${(t.correct*100).toFixed(1)} percent, and falls to ${(a.correct*100).toFixed(1)} percent at ${k} chunks.`)}}customElements.get("attention-budget-rig")||customElements.define("attention-budget-rig",G);
