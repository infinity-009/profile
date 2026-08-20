import{C as G,V as D,a as H,b as q,d as I,s as z,H as V}from"./containers-vs-vms.RSWR5cxh.js";import{M as P}from"./machine.y05KvVr3.js";import"./sandbox.HPbW0a47.js";import"./kernel.DrC0sNW-.js";import"./usl.ZROnk312.js";const L=720,U=320,o=175,X=60,E=L-o-X,W=14,B=34,_=28,N=16,F=B+2*(_+N)+38,$=F+20,g=28,w=18,T=10,k=2e5,Y=[10,100,1e3,1e4,1e5],j="http://www.w3.org/2000/svg",r=(a,s={},e)=>{const h=document.createElementNS(j,a);for(const[v,u]of Object.entries(s))h.setAttribute(v,String(u));return e!==void 0&&(h.textContent=e),h},l=a=>Math.round(a).toLocaleString("en-US"),R=a=>a>=1e3?l(a):a.toFixed(1).replace(/\.0$/,""),f=a=>`${(a*100).toFixed(1)}%`,c=a=>a>=1024?`${(a/1024).toFixed(1)} GiB`:`${Math.round(a)} MB`,S=a=>a>=1e3?`${(a/1e3).toFixed(1)} s`:a>=10?`${Math.round(a)} ms`:`${a.toFixed(1)} ms`;class K extends HTMLElement{connectedCallback(){const s=P.ramGiB,e=256,h=G,v=D,u=H,y=q;this.hostGb=s,this.appMb=e,this.containerOverheadMb=h,this.vmOverheadMb=v,this.containerStartMs=u,this.vmBootS=y,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${L} ${U}" role="img" width="100%"
             aria-label="Top: two bars showing how many containers versus how many VMs fit in the same host memory budget. Bottom: two log-scale bars comparing container start time to VM boot time."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            host RAM
            <input type="range" data-s="host" min="4" max="256" step="4" value="${s}"
                   aria-label="Total host RAM in gibibytes">
            <output class="num" data-o="host"></output>
          </label>
          <label>
            app memory per guest
            <input type="range" data-s="app" min="32" max="4096" step="32" value="${e}"
                   aria-label="The workload's own memory footprint per guest, in megabytes">
            <output class="num" data-o="app"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            container overhead
            <input type="range" data-s="coh" min="2" max="64" step="1" value="${h}"
                   aria-label="A container's own existence cost: namespace and cgroup bookkeeping plus a runtime shim, in megabytes">
            <output class="num" data-o="coh"></output>
          </label>
          <label>
            VM overhead
            <input type="range" data-s="voh" min="64" max="1024" step="4" value="${v}"
                   aria-label="A VM's own existence cost: a second kernel, init system and base OS image, in megabytes">
            <output class="num" data-o="voh"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            container start
            <input type="range" data-s="cstart" min="20" max="2000" step="10" value="${u}"
                   aria-label="Time to exec a process into an already-running kernel, in milliseconds">
            <output class="num" data-o="cstart"></output>
          </label>
          <label>
            VM boot (cold)
            <input type="range" data-s="vboot" min="5" max="120" step="1" value="${y}"
                   aria-label="Time to boot a VM's own kernel and init system from cold, in seconds">
            <output class="num" data-o="vboot"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const b=this.querySelector(".readouts");this.ro={};for(const i of["containers per host","VMs per host","density ratio","container overhead share","VM overhead share","startup ratio"]){const t=document.createElement("div");t.className="ro",t.innerHTML=`<span class="k">${i}</span><span class="v">—</span>`,b.appendChild(t),this.ro[i]=t}this.verdict=this.querySelector(".verdict");const d=i=>this.querySelector(`[data-s="${i}"]`),n=(i,t)=>{d(i).addEventListener("input",()=>{this[t]=Number(d(i).value),this.labels()}),d(i).addEventListener("change",()=>{this[t]=Number(d(i).value),this.draw()})};n("host","hostGb"),n("app","appMb"),n("coh","containerOverheadMb"),n("voh","vmOverheadMb"),n("cstart","containerStartMs"),n("vboot","vmBootS"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="host"]').textContent=`${l(this.hostGb)} GiB`,this.querySelector('[data-o="app"]').textContent=c(this.appMb),this.querySelector('[data-o="coh"]').textContent=c(this.containerOverheadMb),this.querySelector('[data-o="voh"]').textContent=c(this.vmOverheadMb),this.querySelector('[data-o="cstart"]').textContent=S(this.containerStartMs),this.querySelector('[data-o="vboot"]').textContent=S(this.vmBootS*1e3)}draw(){const s=this.svg;for(;s.firstChild;)s.removeChild(s.firstChild);const e=I({hostRamMb:this.hostGb*1024,hostReservedMb:V,appMb:this.appMb,containerOverheadMb:this.containerOverheadMb,vmOverheadMb:this.vmOverheadMb}),h=z({containerStartMs:this.containerStartMs,vmBootSeconds:this.vmBootS});s.appendChild(r("text",{x:0,y:W,fill:"var(--ink)","font-size":12,"font-weight":600},`guests that fit in a ${l(this.hostGb)} GiB host, ${c(this.appMb)} app each`));const v=Math.max(e.containers,e.vms,1)*1.15,u=t=>o+t/v*E,y=(t,p,O,A,M)=>{const m=u(p)-o;s.appendChild(r("text",{x:o-8,y:t+_/2-3,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},A)),s.appendChild(r("text",{x:o-8,y:t+_/2+10,fill:"var(--slate)","font-size":8.5,"text-anchor":"end"},M)),s.appendChild(r("rect",{x:o,y:t,width:Math.max(.5,m),height:_,fill:O}));const x=`${l(p)}`,C=m>x.length*7+14;s.appendChild(r("text",{x:C?o+m/2:o+m+6,y:t+_/2+4,fill:C?"var(--paper)":"var(--ink)","font-size":12,"font-weight":600,"text-anchor":C?"middle":"start"},x))};y(B,e.containers,"var(--slate)","containers",`${f(e.containerOverheadShare)} overhead`),y(B+_+N,e.vms,"var(--amber)","VMs",`${f(e.vmOverheadShare)} overhead`),s.appendChild(r("text",{x:0,y:F,fill:"var(--ink)","font-size":12,"font-weight":600},"time to become one more running guest — exec vs. boot a kernel"));const b=t=>o+Math.log10(Math.max(T,Math.min(k,t))/T)/Math.log10(k/T)*E;for(const t of Y)s.appendChild(r("line",{x1:b(t),y1:$-6,x2:b(t),y2:$+2*(g+w),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),s.appendChild(r("text",{x:b(t),y:$+2*(g+w)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},S(t)));const d=(t,p,O,A)=>{const M=b(p)-o;s.appendChild(r("text",{x:o-8,y:t+g/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},A)),s.appendChild(r("rect",{x:o,y:t,width:Math.max(.5,M),height:g,fill:O}));const m=S(p),x=M>m.length*6.5+12;s.appendChild(r("text",{x:x?o+M/2:o+M+6,y:t+g/2+4,fill:x?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":x?"middle":"start"},m))};d($,this.containerStartMs,"var(--slate)","container"),d($+g+w,this.vmBootS*1e3,"var(--amber)","VM, cold boot");const n=(t,p)=>this.ro[t].querySelector(".v").textContent=p;n("containers per host",l(e.containers)),n("VMs per host",l(e.vms)),n("density ratio",Number.isFinite(e.ratio)?`${e.ratio.toFixed(1)}×`:"∞"),n("container overhead share",f(e.containerOverheadShare)),n("VM overhead share",f(e.vmOverheadShare)),n("startup ratio",`${R(h)}×`);const i=e.containers===0&&e.vms===0?`fits neither a container nor a VM at all — a ${c(this.appMb)} app alone exceeds the host's usable memory`:`fits ${l(e.containers)} containers running a ${c(this.appMb)} app each, against only ${l(e.vms)} VMs at the same app size — ${Number.isFinite(e.ratio)?`${e.ratio.toFixed(1)}×`:"infinitely"} as many containers as VMs`;this.verdict.textContent=`A ${l(this.hostGb)} GiB host with ${c(V)} reserved for its own OS ${i}, because a container's own existence costs ${c(this.containerOverheadMb)} (${f(e.containerOverheadShare)} of its footprint) versus a VM's ${c(this.vmOverheadMb)} (${f(e.vmOverheadShare)}) for a second kernel and OS image nobody's app ever touches. The same shared-kernel-vs-hypervisor split sets startup too: a container execs into a running kernel in ${S(this.containerStartMs)}, a VM boots its own kernel from cold in ${S(this.vmBootS*1e3)} — ${R(h)}× longer. Neither gap is free: the container's density and speed come from sharing the one boundary — the host kernel — that a kernel bug turns into every tenant's problem at once.`}}customElements.define("containers-vs-vms-rig",K);
