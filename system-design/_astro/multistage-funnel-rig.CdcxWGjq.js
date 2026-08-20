import{f as g,r as P}from"./multi-stage-retrieval.CZzdJOsZ.js";import{readout as v,onThemeChange as T,palette as C,fitCanvas as q,label as b}from"./rig.COt8Za58.js";import"./kernel.DrC0sNW-.js";import"./ann.DABzQULC.js";const c=[10,15,20,30,50,75,100,150,200,300,500],y={n:600,d:16,nq:15},h=680,w=300,i=44,L=24,I=28,f=190,R=I+f,x=h-i-L;class O extends HTMLElement{connectedCallback(){this.k1Idx=6,this.k2=10,this.perDocMs=8,this.innerHTML=`
      <div class="panel">
        <canvas role="img" aria-label="Recall at 10 versus reranker candidate width, and the added latency that width costs."></canvas>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            stage-1 width (k1)
            <input type="range" data-s="k1" min="0" max="${c.length-1}" step="1" value="${this.k1Idx}" aria-label="Candidate generation width">
            <output class="num" data-o="k1"></output>
          </label>
          <label>
            stage-2 / rerank width (k2, ≤ k1)
            <input type="range" data-s="k2" min="1" max="${c[this.k1Idx]}" step="1" value="${this.k2}" aria-label="Coarse-scoring and rerank width">
            <output class="num" data-o="k2"></output>
          </label>
          <label>
            reranker cost per doc (ms)
            <input type="range" data-s="cost" min="1" max="20" step="1" value="${this.perDocMs}" aria-label="Per-document reranker cost in milliseconds">
            <output class="num" data-o="cost"></output>
          </label>
        </div>
      </div>`,this.canvas=this.querySelector("canvas");const n=this.querySelector(".readouts");this.ro={recall:v(n,"recall@10"),latency:v(n,"added latency (k2 × per-doc cost)")},this.verdict=this.querySelector(".verdict"),this.querySelector('[data-s="k1"]').addEventListener("input",t=>{this.k1Idx=Number(t.target.value);const e=c[this.k1Idx],a=this.querySelector('[data-s="k2"]');a.max=e,this.k2>e&&(this.k2=e),a.value=this.k2,this.draw()}),this.querySelector('[data-s="k2"]').addEventListener("input",t=>{this.k2=Number(t.target.value),this.draw()}),this.querySelector('[data-s="cost"]').addEventListener("input",t=>{this.perDocMs=Number(t.target.value),this.draw()}),T(()=>this.draw()),this.obs=new ResizeObserver(()=>this.draw()),this.obs.observe(this),this.draw()}disconnectedCallback(){this.obs?.disconnect()}draw(){const n=C(this),t=q(this.canvas,h,w);t.clearRect(0,0,h,w);const e=c[this.k1Idx],a=Math.min(this.k2,e);this.querySelector('[data-o="k1"]').textContent=`${e}`,this.querySelector('[data-o="k2"]').textContent=`${a}`,this.querySelector('[data-o="cost"]').textContent=`${this.perDocMs} ms`,b(t,`recall@10 as k2 sweeps from 1 to k1=${e}, current k1/k2 marked`,i,14,n["ink-soft"],{size:9,caps:!1});const u=Math.min(e,24),$=Array.from({length:u},(s,r)=>Math.max(1,Math.round((r+1)/u*e))).map(s=>({k2:s,recall:g({...y,k1:e,k2:s})})),k=s=>i+s/e*x,d=s=>R-s*f;for(const s of[0,.25,.5,.75,1]){const r=Math.round(d(s))+.5;t.strokeStyle=n.rule,t.globalAlpha=.25,t.beginPath(),t.moveTo(i,r),t.lineTo(i+x,r),t.stroke(),t.globalAlpha=1,b(t,`${Math.round(s*100)}%`,i-6,r,n.slate,{size:8,align:"right"})}t.strokeStyle=n.teal,t.lineWidth=2,t.beginPath(),$.forEach((s,r)=>{const[m,p]=[k(s.k2),d(s.recall)];r===0?t.moveTo(m,p):t.lineTo(m,p)}),t.stroke();const o=g({...y,k1:e,k2:a}),S=k(a),M=d(o);t.beginPath(),t.fillStyle=n.crimson,t.arc(S,M,5,0,Math.PI*2),t.fill();const l=P(a,this.perDocMs);this.ro.recall.set(`${(o*100).toFixed(0)}%`,o>.9?"ok":"warn"),this.ro.latency.set(`${l.toFixed(0)} ms`,l>500?"warn":void 0),this.verdict.textContent=`At k1=${e}, k2=${a}: recall@10 is ${(o*100).toFixed(0)}%, costing ${l.toFixed(0)} ms of reranking. `+(e<=15?"k1 itself is too narrow here — no k2 or reranker choice below can recover what stage 1 already dropped.":a<15?"k1 is generous, but k2 is the bottleneck now — widening it recovers recall fast, at a roughly linear latency cost.":"both stages are generous — recall is near its ceiling; widening further mostly just spends latency."),this.canvas.setAttribute("aria-label",`k1 is ${e}, k2 is ${a}. Recall at 10 is ${(o*100).toFixed(0)} percent, added latency is ${l.toFixed(0)} milliseconds.`)}}customElements.get("multistage-funnel-rig")||customElements.define("multistage-funnel-rig",O);
