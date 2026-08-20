import{T as M,R as d,b as T,d as A,r as E,a as L,w as _}from"./hybrid-fusion.D1KNveQD.js";import{readout as k,onThemeChange as q,palette as C,fitCanvas as D,label as h}from"./rig.COt8Za58.js";import{r as m}from"./ann.DABzQULC.js";import"./kernel.DrC0sNW-.js";const R=[{id:"rrf",name:"RRF (rank-based)",run:b=>E({k:b})},{id:"rsf",name:"Relative-score (calibrated)",run:()=>L()},{id:"wl",name:"Weighted-linear (raw, uncalibrated)",run:()=>_()}],i=6,u=680,a=34,w=i*a+40,n=40,H=90,F=u-n-H;class O extends HTMLElement{connectedCallback(){this.methodIdx=0,this.k=60,this.innerHTML=`
      <div class="panel">
        <canvas role="img" aria-label="Fused ranking of the toy corpus under the selected method, top six documents."></canvas>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            fusion method
            <select data-s="method" aria-label="Fusion method">
              ${R.map((e,s)=>`<option value="${s}">${e.name}</option>`).join("")}
            </select>
          </label>
          <label>
            RRF constant k (affects RRF only)
            <input type="range" data-s="k" min="1" max="200" step="1" value="${this.k}" aria-label="RRF's k constant">
            <output class="num" data-o="k"></output>
          </label>
        </div>
      </div>`,this.canvas=this.querySelector("canvas");const t=this.querySelector(".readouts");this.ro={recall:k(t,"recall@3 vs. 3 labelled relevant docs"),bm25recall:k(t,"BM25 alone / dense alone, recall@3")},this.verdict=this.querySelector(".verdict"),this.querySelector('[data-s="method"]').addEventListener("change",e=>{this.methodIdx=Number(e.target.value),this.draw()}),this.querySelector('[data-s="k"]').addEventListener("input",e=>{this.k=Number(e.target.value),this.draw()}),q(()=>this.draw()),this.obs=new ResizeObserver(()=>this.draw()),this.obs.observe(this),this.draw()}disconnectedCallback(){this.obs?.disconnect()}draw(){const t=C(this),e=D(this.canvas,u,w);e.clearRect(0,0,u,w);const s=R[this.methodIdx];this.querySelector('[data-o="k"]').textContent=`${this.k}`,this.querySelector('[data-s="k"]').disabled=s.id!=="rrf";const p=s.run(this.k),$=p.slice(0,i),x=new Map(M.map(r=>[r.id,r]));h(e,`${s.name} — top ${i} of 10, ranked desc`,n,14,t["ink-soft"],{size:9,caps:!1}),$.forEach((r,c)=>{const l=28+c*a,f=x.get(r).relevant,S=c<3,g=F*((i-c)/i);e.fillStyle=f?t.teal:t.slate,e.globalAlpha=S?1:.45,e.fillRect(n,l,g,a-10),e.globalAlpha=1,h(e,r,n+6,l+(a-10)/2,t.paper,{size:10,align:"left",caps:!1}),f&&h(e,"relevant",n+g+8,l+(a-10)/2,t.teal,{size:9,align:"left",caps:!1}),c===2&&(e.strokeStyle=t.amber,e.setLineDash([3,2]),e.beginPath(),e.moveTo(n,l+a-6),e.lineTo(n+F,l+a-6),e.stroke(),e.setLineDash([]))});const o=m(p,d,3),v=m(T(),d,3),y=m(A(),d,3);this.ro.recall.set(`${(o*100).toFixed(0)}%`,o===1?"ok":"warn"),this.ro.bm25recall.set(`${(v*100).toFixed(0)}% / ${(y*100).toFixed(0)}%`),this.verdict.textContent=s.id==="wl"?`Raw, uncalibrated fusion collapses toward BM25's own ranking — recall@3 is ${(o*100).toFixed(0)}%, identical to BM25 alone, because BM25's larger numeric range dominates regardless of the weighting.`:`${s.name} reaches ${(o*100).toFixed(0)}% recall@3 — better than either single retriever's ${(v*100).toFixed(0)}%, by combining the two lists' complementary hits.`,this.canvas.setAttribute("aria-label",`${s.name}: top ${i} documents, recall at 3 is ${(o*100).toFixed(0)} percent.`)}}customElements.get("fusion-mechanics-rig")||customElements.define("fusion-mechanics-rig",O);
