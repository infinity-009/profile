import{readout as b,onThemeChange as x,palette as $,fitCanvas as y,label as w}from"./rig.COt8Za58.js";function S({contextWindow:d,chunkTokens:s,topK:t,systemPromptTokens:o=200,questionTokens:l=60,reservedOutputTokens:e=1e3}){if(!(d>0))throw new Error("contextWindow must be positive");if(!(s>0))throw new Error("chunkTokens must be positive");if(!(t>0))throw new Error("topK must be positive");if(!(e>=0))throw new Error("reservedOutputTokens must not be negative");const h=s*t,k=o+l+h,c=k+e,a=Math.max(0,c-d),n=Math.max(0,Math.floor((d-e-o-l)/s));return{retrievedTokens:h,promptTokens:k,totalNeeded:c,contextWindow:d,overflow:a,fits:a===0,chunksThatFit:Math.min(n,t),chunksDropped:Math.max(0,t-n),utilisation:c/d}}const m=[8e3,32e3,128e3,2e5],f=[200,400,600,800,1200,2e3],p=680,g=210,u=20,T=20,i=60,r=46,C=p-u-T;class I extends HTMLElement{connectedCallback(){this.windowIdx=1,this.chunkIdx=3,this.topK=10,this.reserved=1e3,this.innerHTML=`
      <div class="panel">
        <canvas role="img" aria-label="The assembled prompt's token budget against the model's context window."></canvas>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            context window
            <input type="range" data-s="win" min="0" max="${m.length-1}" step="1" value="${this.windowIdx}" aria-label="Model context window size">
            <output class="num" data-o="win"></output>
          </label>
          <label>
            chunk size (tokens)
            <input type="range" data-s="chunk" min="0" max="${f.length-1}" step="1" value="${this.chunkIdx}" aria-label="Tokens per retrieved chunk">
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
      </div>`,this.canvas=this.querySelector("canvas");const s=this.querySelector(".readouts");this.ro={total:b(s,"tokens needed / window"),dropped:b(s,"chunks that must be dropped")},this.verdict=this.querySelector(".verdict");for(const[t,o,l]of[["win","windowIdx",null],["chunk","chunkIdx",null],["topk","topK",null],["res","reserved",null]])this.querySelector(`[data-s="${t}"]`).addEventListener("input",e=>{this[o]=Number(e.target.value),this.draw()});x(()=>this.draw()),this.obs=new ResizeObserver(()=>this.draw()),this.obs.observe(this),this.draw()}disconnectedCallback(){this.obs?.disconnect()}draw(){const s=$(this),t=y(this.canvas,p,g);t.clearRect(0,0,p,g);const o=m[this.windowIdx],l=f[this.chunkIdx],e=S({contextWindow:o,chunkTokens:l,topK:this.topK,reservedOutputTokens:this.reserved});this.querySelector('[data-o="win"]').textContent=`${o/1e3}k`,this.querySelector('[data-o="chunk"]').textContent=`${l}`,this.querySelector('[data-o="topk"]').textContent=`${this.topK}`,this.querySelector('[data-o="res"]').textContent=`${this.reserved}`,w(t,`one query's assembled prompt against a ${o/1e3}k context window`,u,20,s["ink-soft"],{size:9,caps:!1});const h=C/Math.max(o,e.totalNeeded),k=[{label:"system",tokens:200,color:s.slate},{label:"question",tokens:60,color:s["ink-soft"]},{label:`${this.topK} chunks`,tokens:e.retrievedTokens,color:s.teal},{label:"answer room",tokens:this.reserved,color:s.amber}];let c=u;for(const n of k){const v=n.tokens*h;t.fillStyle=n.color,t.globalAlpha=.85,t.fillRect(c,i,v,r),t.globalAlpha=1,v>42&&w(t,n.label,c+v/2,i+r/2,s.paper,{size:8,align:"center",caps:!1}),c+=v}const a=u+o*h;if(t.strokeStyle=e.fits?s.teal:s.crimson,t.lineWidth=2,t.beginPath(),t.moveTo(a,i-10),t.lineTo(a,i+r+10),t.stroke(),w(t,`window (${o/1e3}k)`,a,i-18,e.fits?s.teal:s.crimson,{size:8,align:a>p-90?"right":"center",caps:!1}),!e.fits){t.save(),t.beginPath(),t.rect(a,i,u+e.totalNeeded*h-a,r),t.clip(),t.strokeStyle=s.crimson,t.globalAlpha=.9,t.lineWidth=1.5;for(let n=a-r;n<p;n+=7)t.beginPath(),t.moveTo(n,i+r),t.lineTo(n+r,i),t.stroke();t.restore(),w(t,`overflow: ${e.overflow.toLocaleString()} tokens`,u,i+r+26,s.crimson,{size:9,caps:!1})}this.ro.total.set(`${e.totalNeeded.toLocaleString()} / ${o.toLocaleString()}`,e.fits?"ok":"bad"),this.ro.dropped.set(e.chunksDropped===0?"none":`${e.chunksDropped} of ${this.topK}`,e.chunksDropped===0?"ok":"bad"),this.verdict.textContent=e.fits?`Fits, at ${(e.utilisation*100).toFixed(0)}% of the window. ${this.topK} chunks of ${l} tokens is ${e.retrievedTokens.toLocaleString()} retrieved tokens, plus ${this.reserved.toLocaleString()} reserved so the model can actually answer.`:`Overflows by ${e.overflow.toLocaleString()} tokens — ${e.chunksDropped} of the ${this.topK} retrieved chunks cannot be included at all. Retrieval already ranked them; the context window is what silently discards them.`,this.canvas.setAttribute("aria-label",`${e.totalNeeded} tokens needed against a ${o} token window. ${e.fits?"Fits.":`Overflows by ${e.overflow} tokens, dropping ${e.chunksDropped} chunks.`}`)}}customElements.get("context-budget-rig")||customElements.define("context-budget-rig",I);
