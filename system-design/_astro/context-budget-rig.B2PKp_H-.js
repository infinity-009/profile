import{c as g}from"./rag-pipeline.CkifGwXq.js";import{readout as v,onThemeChange as x,palette as $,fitCanvas as y,label as u}from"./rig.CyiChFZe.js";const w=[8e3,32e3,128e3,2e5],b=[200,400,600,800,1200,2e3],d=680,m=210,l=20,S=20,n=60,i=46,T=d-l-S;class K extends HTMLElement{connectedCallback(){this.windowIdx=1,this.chunkIdx=3,this.topK=10,this.reserved=1e3,this.innerHTML=`
      <div class="panel">
        <canvas role="img" aria-label="The assembled prompt's token budget against the model's context window."></canvas>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            context window
            <input type="range" data-s="win" min="0" max="${w.length-1}" step="1" value="${this.windowIdx}" aria-label="Model context window size">
            <output class="num" data-o="win"></output>
          </label>
          <label>
            chunk size (tokens)
            <input type="range" data-s="chunk" min="0" max="${b.length-1}" step="1" value="${this.chunkIdx}" aria-label="Tokens per retrieved chunk">
            <output class="num" data-o="chunk"></output>
          </label>
          <label>
            top-K chunks retrieved
            <input type="range" data-s="topk" min="1" max="40" step="1" value="${this.topK}" aria-label="Number of chunks retrieved">
            <output class="num" data-o="topk"></output>
          </label>
          <label>
            reserved for the answer
            <input type="range" data-s="res" min="0" max="8000" step="250" value="${this.reserved}" aria-label="Output tokens reserved for the generated answer">
            <output class="num" data-o="res"></output>
          </label>
        </div>
      </div>`,this.canvas=this.querySelector("canvas");const s=this.querySelector(".readouts");this.ro={total:v(s,"tokens needed / window"),dropped:v(s,"chunks that must be dropped")},this.verdict=this.querySelector(".verdict");for(const[e,o,c]of[["win","windowIdx",null],["chunk","chunkIdx",null],["topk","topK",null],["res","reserved",null]])this.querySelector(`[data-s="${e}"]`).addEventListener("input",t=>{this[o]=Number(t.target.value),this.draw()});x(()=>this.draw()),this.obs=new ResizeObserver(()=>this.draw()),this.obs.observe(this),this.draw()}disconnectedCallback(){this.obs?.disconnect()}draw(){const s=$(this),e=y(this.canvas,d,m);e.clearRect(0,0,d,m);const o=w[this.windowIdx],c=b[this.chunkIdx],t=g({contextWindow:o,chunkTokens:c,topK:this.topK,reservedOutputTokens:this.reserved});this.querySelector('[data-o="win"]').textContent=`${o/1e3}k`,this.querySelector('[data-o="chunk"]').textContent=`${c}`,this.querySelector('[data-o="topk"]').textContent=`${this.topK}`,this.querySelector('[data-o="res"]').textContent=`${this.reserved}`,u(e,`one query's assembled prompt against a ${o/1e3}k context window`,l,20,s["ink-soft"],{size:9,caps:!1});const p=T/Math.max(o,t.totalNeeded),f=[{label:"system",tokens:200,color:s.slate},{label:"question",tokens:60,color:s["ink-soft"]},{label:`${this.topK} chunks`,tokens:t.retrievedTokens,color:s.teal},{label:"answer room",tokens:this.reserved,color:s.amber}];let k=l;for(const a of f){const h=a.tokens*p;e.fillStyle=a.color,e.globalAlpha=.85,e.fillRect(k,n,h,i),e.globalAlpha=1,h>42&&u(e,a.label,k+h/2,n+i/2,s.paper,{size:8,align:"center",caps:!1}),k+=h}const r=l+o*p;if(e.strokeStyle=t.fits?s.teal:s.crimson,e.lineWidth=2,e.beginPath(),e.moveTo(r,n-10),e.lineTo(r,n+i+10),e.stroke(),u(e,`window (${o/1e3}k)`,r,n-18,t.fits?s.teal:s.crimson,{size:8,align:r>d-90?"right":"center",caps:!1}),!t.fits){e.save(),e.beginPath(),e.rect(r,n,l+t.totalNeeded*p-r,i),e.clip(),e.strokeStyle=s.crimson,e.globalAlpha=.9,e.lineWidth=1.5;for(let a=r-i;a<d;a+=7)e.beginPath(),e.moveTo(a,n+i),e.lineTo(a+i,n),e.stroke();e.restore(),u(e,`overflow: ${t.overflow.toLocaleString()} tokens`,l,n+i+26,s.crimson,{size:9,caps:!1})}this.ro.total.set(`${t.totalNeeded.toLocaleString()} / ${o.toLocaleString()}`,t.fits?"ok":"bad"),this.ro.dropped.set(t.chunksDropped===0?"none":`${t.chunksDropped} of ${this.topK}`,t.chunksDropped===0?"ok":"bad"),this.verdict.textContent=t.fits?`Fits, at ${(t.utilisation*100).toFixed(0)}% of the window. ${this.topK} chunks of ${c} tokens is ${t.retrievedTokens.toLocaleString()} retrieved tokens, plus ${this.reserved.toLocaleString()} reserved so the model can actually answer.`:`Overflows by ${t.overflow.toLocaleString()} tokens — ${t.chunksDropped} of the ${this.topK} retrieved chunks cannot be included at all. Retrieval already ranked them; the context window is what silently discards them.`,this.canvas.setAttribute("aria-label",`${t.totalNeeded} tokens needed against a ${o} token window. ${t.fits?"Fits.":`Overflows by ${t.overflow} tokens, dropping ${t.chunksDropped} chunks.`}`)}}customElements.get("context-budget-rig")||customElements.define("context-budget-rig",K);
