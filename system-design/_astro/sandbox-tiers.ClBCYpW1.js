import{c as S,r as A}from"./sandbox.HPbW0a47.js";import{readout as h,onThemeChange as E,fitCanvas as z,palette as R,label as i,roundRect as y}from"./rig.COt8Za58.js";const g=720,v=292,T=46,O=44,u=16,d=172,k=322,M=506,p=716,x=[1,5,20,100,500,2e3],b=[10,50,200,1e3,5e3],$=[1,2,5,20,100],f=a=>a>=1e3?`${(a/1e3).toFixed(1)} s`:a>=10?`${Math.round(a)} ms`:`${a.toFixed(1)} ms`,c=a=>a>=1024?`${(a/1024).toFixed(1)} GB`:a>=1?`${Math.round(a)} MB`:`${a.toFixed(1)} MB`;class C extends HTMLElement{connectedCallback(){this.rateIdx=x.indexOf(Number(this.getAttribute("rate")||100)),this.rateIdx<0&&(this.rateIdx=3),this.execIdx=b.indexOf(Number(this.getAttribute("exec")||200)),this.execIdx<0&&(this.execIdx=2),this.reuseIdx=0,this.syscall=30,this.innerHTML=`
      <div class="panel">
        <canvas role="img"></canvas>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            executions
            <input type="range" data-k="rateIdx" min="0" max="${x.length-1}" step="1"
                   value="${this.rateIdx}" aria-label="Executions per second">
            <output class="num" data-k="rateIdx"></output>
          </label>
          <label>
            each runs for
            <input type="range" data-k="execIdx" min="0" max="${b.length-1}" step="1"
                   value="${this.execIdx}" aria-label="How long one execution runs">
            <output class="num" data-k="execIdx"></output>
          </label>
          <label>
            executions per sandbox
            <input type="range" data-k="reuseIdx" min="0" max="${$.length-1}" step="1"
                   value="${this.reuseIdx}" aria-label="How many executions share one sandbox">
            <output class="num" data-k="reuseIdx"></output>
          </label>
          <label>
            work that is syscalls
            <input type="range" data-k="syscall" min="0" max="100" step="10" value="${this.syscall}"
                   aria-label="Share of the work that is system calls, percent">
            <output class="num" data-k="syscall"></output>
          </label>
        </div>
      </div>`,this.canvas=this.querySelector("canvas"),this.verdict=this.querySelector(".verdict");const e=this.querySelector(".readouts");this.ro={container:h(e,"container fleet"),microvm:h(e,"microVM, cold boot"),snap:h(e,"microVM, snapshot"),share:h(e,"container spent booting"),best:h(e,"smallest fleet")};for(const t of this.querySelectorAll("input[type=range]"))t.addEventListener("input",()=>{this[t.dataset.k]=Number(t.value),this.draw()});this.resize(),new ResizeObserver(()=>this.resize()).observe(this),E(()=>this.draw())}get rate(){return x[this.rateIdx]}get exec(){return b[this.execIdx]}get reuse(){return $[this.reuseIdx]}rows(){return S({ratePerSec:this.rate,execMs:this.exec,reuse:this.reuse,syscallShare:this.syscall/100})}resize(){this.ctx=z(this.canvas,g,v),this.canvas.setAttribute("aria-label","One row per isolation tier: container, gVisor, microVM cold boot, microVM restored from a snapshot, and an isolate. Each bar splits one execution into startup and work, and the figure on the right is the concurrent fleet that occupancy implies, in memory. The container is the weakest boundary and the largest fleet; the snapshot-restored microVM has the same boundary as a cold-booted one and a third of the fleet."),this.draw()}draw(){const e=this.ctx;if(!e)return;const t=R(this);e.clearRect(0,0,g,v);for(const s of this.querySelectorAll("output")){const o=s.dataset.k;s.textContent=o==="rateIdx"?`${this.rate}/s`:o==="execIdx"?f(this.exec):o==="reuseIdx"?this.reuse===1?"one each":`${this.reuse}`:`${this.syscall}%`}const l=this.rows(),n=Math.max(...l.map(s=>s.latencyMs));i(e,"startup",d,22,t.crimson,{size:8.5,caps:!1}),i(e,"+ work = what one execution occupies",d+48,22,t.slate,{size:8.5,caps:!1}),i(e,"occupies",M,22,t.slate,{size:8}),i(e,"fleet memory",p,22,t.slate,{size:8,align:"right"}),l.forEach((s,o)=>{const r=T+o*O,m=s.startupMs/n*k,w=s.execMs/n*k;i(e,s.name,8,r+4,t.ink,{size:9,caps:!1}),i(e,`escape: ${s.surface}`,8,r+16,t["ink-soft"],{size:7.5,caps:!1});const I=s.startupShare>.3?t.crimson:t.amber;m>.4&&(y(e,d,r,Math.max(1.5,m),u,2),e.fillStyle=I,e.globalAlpha=.5,e.fill(),e.globalAlpha=1),y(e,d+m,r,Math.max(1.5,w),u,2),e.fillStyle=t.teal,e.globalAlpha=.3,e.fill(),e.globalAlpha=1,e.strokeStyle=t.teal,e.lineWidth=1,e.stroke(),i(e,f(s.latencyMs),M,r+u/2,t.slate,{size:8.5,caps:!1}),i(e,c(s.memoryMb),p,r+u/2,t.ink,{size:9,align:"right",caps:!1}),i(e,s.runsAnything?`${s.concurrent.toFixed(1)} concurrent`:`${s.concurrent.toFixed(1)} concurrent · restricted runtime`,p,r+u/2+12,s.runsAnything?t["ink-soft"]:t.amber,{size:7.5,align:"right",caps:!1})}),this.update(l)}update(e){const t=Object.fromEntries(e.map(o=>[o.id,o])),l=e.reduce((o,r)=>r.memoryMb<o.memoryMb?r:o),n=A({reuse:this.reuse}),s=Math.round(t.container.startupShare*100);this.ro.container.set(c(t.container.memoryMb),"bad"),this.ro.microvm.set(c(t.microvm.memoryMb),"warn"),this.ro.snap.set(c(t["microvm-snap"].memoryMb),"ok"),this.ro.share.set(`${s}%`,t.container.startupShare>.3?"bad":"ok"),this.ro.best.set(l.name,"ok"),this.verdict.innerHTML=`At ${this.rate} executions a second of ${f(this.exec)} work, a container fleet is <b>${c(t.container.memoryMb)}</b> with <b>${s}%</b> of it spent booting — and it is the <b>weakest</b> boundary here, because the guest shares your kernel. A snapshot-restored microVM is <b>${c(t["microvm-snap"].memoryMb)}</b> for the same work behind a much narrower surface. `+(n.isolatedPerExecution?'Every execution gets its own sandbox. <span class="muted">Raise executions per sandbox and watch every fleet shrink — that is startup being amortised across code you have not vetted.</span>':`<b>${n.executionsSharingASandbox}</b> executions now share one sandbox, so the boot cost is amortised and so is the blast radius: whatever one execution leaves behind is there for the other ${n.executionsSharingASandbox-1}. <span class="muted">That is the real trade, and it is not on the memory axis.</span>`)}}customElements.define("sandbox-tiers",C);
