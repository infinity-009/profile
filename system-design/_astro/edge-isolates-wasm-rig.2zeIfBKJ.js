import{g as C,H as D,C as F,V as H,o as V,a as G,s as X,b as q}from"./containers-vs-vms.RSWR5cxh.js";import{t as j}from"./sandbox.HPbW0a47.js";import{M as K}from"./machine.y05KvVr3.js";import"./kernel.DrC0sNW-.js";import"./usl.ZROnk312.js";const P=1,U=.5;j("isolate").hostSyscalls;function B(t,a){if(!(a>0))throw new RangeError(`${t} must be positive, got ${a}`)}function w(t,a){return a>0?t/a:t>0?1/0:1}function Y({hostRamMb:t,hostReservedMb:a=D,appMb:e,containerOverheadMb:o=F,vmOverheadMb:u=H,isolateOverheadMb:b=P}={}){const d=C({hostRamMb:t,hostReservedMb:a,appMb:e,overheadMb:o}),l=C({hostRamMb:t,hostReservedMb:a,appMb:e,overheadMb:u}),p=C({hostRamMb:t,hostReservedMb:a,appMb:e,overheadMb:b});return{containers:d,vms:l,isolates:p,isolateToContainerRatio:w(p,d),isolateToVmRatio:w(p,l),containerToVmRatio:w(d,l),containerOverheadShare:V({appMb:e,overheadMb:o}),vmOverheadShare:V({appMb:e,overheadMb:u}),isolateOverheadShare:V({appMb:e,overheadMb:b})}}function J({isolateStartMs:t=U,containerStartMs:a=G,vmBootSeconds:e=q}={}){B("isolateStartMs",t),B("containerStartMs",a),B("vmBootSeconds",e);const o=e*1e3;return{isolateStartMs:t,containerStartMs:a,vmBootMs:o,containerToIsolateRatio:a/t,vmToContainerRatio:X({containerStartMs:a,vmBootSeconds:e}),vmToIsolateRatio:o/t}}const z=720,Q=400,i=185,Z=60,k=z-i-Z,tt=14,E=34,x=26,I=14,W=E+3*(x+I)+40,y=W+20,T=26,O=16,L=.1,N=2e5,et=[.1,10,1e3,1e5],at="http://www.w3.org/2000/svg",h=(t,a={},e)=>{const o=document.createElementNS(at,t);for(const[u,b]of Object.entries(a))o.setAttribute(u,String(b));return e!==void 0&&(o.textContent=e),o},m=t=>Math.round(t).toLocaleString("en-US"),A=t=>`${(t*100).toFixed(1)}%`,M=t=>t>=1024?`${(t/1024).toFixed(1)} GiB`:t>=1?`${Math.round(t*10)/10} MB`:`${Math.round(t*1e3)} KB`,f=t=>t>=1e3?`${(t/1e3).toFixed(1)} s`:t>=10?`${Math.round(t)} ms`:`${t.toFixed(2)} ms`,g=t=>Number.isFinite(t)?t>=1e6?t.toExponential(1).replace("e+","×10^"):t>=1e3?`${(t/1e3).toFixed(1)}k`:t>=100?String(Math.round(t)):t.toFixed(1).replace(/\.0$/,""):"—";class ot extends HTMLElement{connectedCallback(){const a=K.ramGiB,e=1,o=F,u=H,b=P,d=G,l=q,p=U;this.hostGb=a,this.appMb=e,this.containerOverheadMb=o,this.vmOverheadMb=u,this.isolateOverheadMb=b,this.containerStartMs=d,this.vmBootS=l,this.isolateStartMs=p,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${z} ${Q}" role="img" width="100%"
             aria-label="Top: three bars showing how many VMs, containers and isolates fit in the same host memory budget. Bottom: three log-scale bars comparing VM cold boot time, container start time and isolate start time."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            host RAM
            <input type="range" data-s="host" min="4" max="256" step="4" value="${a}"
                   aria-label="Total host RAM in gibibytes">
            <output class="num" data-o="host"></output>
          </label>
          <label>
            app memory per guest
            <input type="range" data-s="app" min="0.5" max="256" step="0.5" value="${e}"
                   aria-label="The workload's own memory footprint per guest, in megabytes">
            <output class="num" data-o="app"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            container overhead
            <input type="range" data-s="coh" min="2" max="64" step="1" value="${o}"
                   aria-label="A container's own existence cost: namespace and cgroup bookkeeping plus a runtime shim, in megabytes">
            <output class="num" data-o="coh"></output>
          </label>
          <label>
            VM overhead
            <input type="range" data-s="voh" min="64" max="1024" step="4" value="${u}"
                   aria-label="A VM's own existence cost: a second kernel, init system and base OS image, in megabytes">
            <output class="num" data-o="voh"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            isolate overhead
            <input type="range" data-s="ioh" min="0.25" max="8" step="0.25" value="${b}"
                   aria-label="An isolate's own existence cost: a fresh heap in an already-running engine, in megabytes">
            <output class="num" data-o="ioh"></output>
          </label>
          <label>
            isolate start
            <input type="range" data-s="istart" min="0.1" max="10" step="0.1" value="${p}"
                   aria-label="Time to spin up a fresh isolate heap inside an already-running engine, in milliseconds">
            <output class="num" data-o="istart"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            container start
            <input type="range" data-s="cstart" min="20" max="2000" step="10" value="${d}"
                   aria-label="Time to exec a process into an already-running kernel, in milliseconds">
            <output class="num" data-o="cstart"></output>
          </label>
          <label>
            VM boot (cold)
            <input type="range" data-s="vboot" min="5" max="120" step="1" value="${l}"
                   aria-label="Time to boot a VM's own kernel and init system from cold, in seconds">
            <output class="num" data-o="vboot"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const v=this.querySelector(".readouts");this.ro={};for(const r of["isolates per host","containers per host","VMs per host","isolate vs container","container vs VM","isolate start","container vs isolate","VM vs isolate"]){const c=document.createElement("div");c.className="ro",c.innerHTML=`<span class="k">${r}</span><span class="v">—</span>`,v.appendChild(c),this.ro[r]=c}this.verdict=this.querySelector(".verdict");const s=r=>this.querySelector(`[data-s="${r}"]`),n=(r,c)=>{s(r).addEventListener("input",()=>{this[c]=Number(s(r).value),this.labels()}),s(r).addEventListener("change",()=>{this[c]=Number(s(r).value),this.draw()})};n("host","hostGb"),n("app","appMb"),n("coh","containerOverheadMb"),n("voh","vmOverheadMb"),n("ioh","isolateOverheadMb"),n("istart","isolateStartMs"),n("cstart","containerStartMs"),n("vboot","vmBootS"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="host"]').textContent=`${m(this.hostGb)} GiB`,this.querySelector('[data-o="app"]').textContent=M(this.appMb),this.querySelector('[data-o="coh"]').textContent=M(this.containerOverheadMb),this.querySelector('[data-o="voh"]').textContent=M(this.vmOverheadMb),this.querySelector('[data-o="ioh"]').textContent=M(this.isolateOverheadMb),this.querySelector('[data-o="istart"]').textContent=f(this.isolateStartMs),this.querySelector('[data-o="cstart"]').textContent=f(this.containerStartMs),this.querySelector('[data-o="vboot"]').textContent=f(this.vmBootS*1e3)}draw(){const a=this.svg;for(;a.firstChild;)a.removeChild(a.firstChild);const e=Y({hostRamMb:this.hostGb*1024,hostReservedMb:D,appMb:this.appMb,containerOverheadMb:this.containerOverheadMb,vmOverheadMb:this.vmOverheadMb,isolateOverheadMb:this.isolateOverheadMb}),o=J({isolateStartMs:this.isolateStartMs,containerStartMs:this.containerStartMs,vmBootSeconds:this.vmBootS});a.appendChild(h("text",{x:0,y:tt,fill:"var(--ink)","font-size":12,"font-weight":600},`guests that fit in a ${m(this.hostGb)} GiB host, ${M(this.appMb)} app each`));const u=Math.max(e.containers,e.vms,e.isolates,1)*1.15,b=s=>i+s/u*k,d=(s,n,r,c,_)=>{const S=b(n)-i;a.appendChild(h("text",{x:i-8,y:s+x/2-3,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},c)),a.appendChild(h("text",{x:i-8,y:s+x/2+10,fill:"var(--slate)","font-size":8.5,"text-anchor":"end"},_)),a.appendChild(h("rect",{x:i,y:s,width:Math.max(.5,S),height:x,fill:r}));const $=`${m(n)}`,R=S>$.length*7+14;a.appendChild(h("text",{x:R?i+S/2:i+S+6,y:s+x/2+4,fill:R?"var(--paper)":"var(--ink)","font-size":12,"font-weight":600,"text-anchor":R?"middle":"start"},$))};d(E,e.vms,"var(--amber)","VMs",`${A(e.vmOverheadShare)} overhead`),d(E+(x+I),e.containers,"var(--slate)","containers",`${A(e.containerOverheadShare)} overhead`),d(E+2*(x+I),e.isolates,"var(--teal)","isolates",`${A(e.isolateOverheadShare)} overhead`),a.appendChild(h("text",{x:0,y:W,fill:"var(--ink)","font-size":12,"font-weight":600},"time to become one more running guest — boot vs. exec vs. a fresh heap"));const l=s=>i+Math.log10(Math.max(L,Math.min(N,s))/L)/Math.log10(N/L)*k;for(const s of et)a.appendChild(h("line",{x1:l(s),y1:y-6,x2:l(s),y2:y+3*(T+O),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),a.appendChild(h("text",{x:l(s),y:y+3*(T+O)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},f(s)));const p=(s,n,r,c)=>{const _=l(n)-i;a.appendChild(h("text",{x:i-8,y:s+T/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},c)),a.appendChild(h("rect",{x:i,y:s,width:Math.max(.5,_),height:T,fill:r}));const S=f(n),$=_>S.length*6.5+12;a.appendChild(h("text",{x:$?i+_/2:i+_+6,y:s+T/2+4,fill:$?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":$?"middle":"start"},S))};p(y,o.vmBootMs,"var(--amber)","VM, cold boot"),p(y+(T+O),o.containerStartMs,"var(--slate)","container"),p(y+2*(T+O),o.isolateStartMs,"var(--teal)","isolate");const v=(s,n)=>this.ro[s].querySelector(".v").textContent=n;v("isolates per host",m(e.isolates)),v("containers per host",m(e.containers)),v("VMs per host",m(e.vms)),v("isolate vs container",Number.isFinite(e.isolateToContainerRatio)?`${g(e.isolateToContainerRatio)}×`:"∞"),v("container vs VM",Number.isFinite(e.containerToVmRatio)?`${g(e.containerToVmRatio)}×`:"∞"),v("isolate start",f(o.isolateStartMs)),v("container vs isolate",`${g(o.containerToIsolateRatio)}×`),v("VM vs isolate",`${g(o.vmToIsolateRatio)}×`),this.verdict.textContent=`The same ${m(this.hostGb)} GiB host fits ${m(e.isolates)} isolates against ${m(e.containers)} containers against only ${m(e.vms)} VMs at a ${M(this.appMb)} app each — a two-step density curve, not a smooth one: ${Number.isFinite(e.isolateToContainerRatio)?`${g(e.isolateToContainerRatio)}×`:"∞"} from container to isolate, ${Number.isFinite(e.containerToVmRatio)?`${g(e.containerToVmRatio)}×`:"∞"} from VM to container. An isolate's own existence costs ${M(this.isolateOverheadMb)} (${A(e.isolateOverheadShare)} of its footprint) against a container's ${M(this.containerOverheadMb)} and a VM's ${M(this.vmOverheadMb)} — no process to fork, no namespace to allocate, just a fresh heap in an engine that is already running. Startup follows the same split at a far larger multiple: ${f(o.isolateStartMs)} for an isolate versus ${f(o.containerStartMs)} for a container (${g(o.containerToIsolateRatio)}×) versus ${f(o.vmBootMs)} for a VM cold boot (${g(o.vmToIsolateRatio)}× the isolate). None of that speed is free: the isolate's boundary is the runtime's own bookkeeping, enforced in the same process as every other tenant, not a separate kernel or a separate process at all.`}}customElements.define("edge-isolates-wasm-rig",ot);
