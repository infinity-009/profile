import{s as I,a as Q,b as P,c as J,p as Z,m as tt,F as W,d as S}from"./health-checks.D5rb3Okn.js";import"./kernel.DrC0sNW-.js";import"./decomposition.Cej3BzSm.js";import"./latency-table.Z10ZPnGR.js";const R=760,et=560,v=190,V=60,st=R-v-V,it=14,T=34,A=22,X=6,at=W.length,O=400,z=540,G=T+at*(A+X)+36,E=G+20,M=15,B=5,L=1,D=1e6,ot=3,H=14,j=5,nt="http://www.w3.org/2000/svg",a=(t,e={},h)=>{const o=document.createElementNS(nt,t);for(const[m,k]of Object.entries(e))o.setAttribute(m,String(k));return h!==void 0&&(o.textContent=h),o},u=(t,e)=>`${t} ${e}${t===1?"":"s"}`,y=t=>Math.round(t).toLocaleString("en-US"),_=t=>t*100>=10?`${(t*100).toFixed(1)}%`:`${(t*100).toPrecision(2)}%`,Y=t=>Number.isFinite(t)?t>=1e6?t.toExponential(1).replace("e+","×10^"):t>=1e3?`${(t/1e3).toFixed(1)}k`:t>=1?t.toFixed(t>=100?0:1):t.toPrecision(2):"∞",p=t=>Number.isFinite(t)?t<1e3?`${Y(t)} ms`:t<6e4?`${(t/1e3).toFixed(1)} s`:`${(t/6e4).toFixed(1)} min`:"∞ (unstable)";class rt extends HTMLElement{connectedCallback(){this.n=10,this.failing=2,this.totalRps=350,this.serviceMs=20,this.timeoutMs=1e3,this.deepMs=10,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${R} ${et}" role="img" width="100%"
             aria-label="Top: a fixed table of five failure modes against whether a shallow or a deep health check catches each. Bottom: one bar per possible count of backends pulled from rotation, showing how long a request now waits on the survivors, against a dashed health-check-timeout threshold — bars past it turn crimson and read all down."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            total backends
            <input type="range" data-s="n" min="${ot}" max="${H}" step="1" value="10"
                   aria-label="Total backends in the pool">
            <output class="num" data-o="n"></output>
          </label>
          <label>
            backends down
            <input type="range" data-s="failing" min="0" max="${H-1}" step="1" value="2"
                   aria-label="How many backends are currently pulled from rotation by a correct shallow-check failure">
            <output class="num" data-o="failing"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            offered load
            <input type="range" data-s="rps" min="10" max="2000" step="10" value="350"
                   aria-label="Total requests per second offered to the whole pool">
            <output class="num" data-o="rps"></output>
          </label>
          <label>
            mean service time
            <input type="range" data-s="service" min="1" max="100" step="1" value="20"
                   aria-label="Mean time in milliseconds for one backend to serve one request">
            <output class="num" data-o="service"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            health-check timeout
            <input type="range" data-s="timeout" min="50" max="5000" step="50" value="1000"
                   aria-label="Milliseconds the health check waits before deciding a backend is unhealthy">
            <output class="num" data-o="timeout"></output>
          </label>
          <label>
            deep check cost
            <input type="range" data-s="deep" min="0" max="50" step="1" value="10"
                   aria-label="Milliseconds a deep health check spends exercising the real dependency, once every 5 seconds">
            <output class="num" data-o="deep"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const C=this.querySelector(".readouts");this.ro={};for(const n of["survivors","per-survivor utilization","sojourn time","queue depth","pile-on","max tolerable failures","shallow catch rate","deep catch rate"]){const l=document.createElement("div");l.className="ro",l.innerHTML=`<span class="k">${n}</span><span class="v">—</span>`,C.appendChild(l),this.ro[n]=l}this.verdict=this.querySelector(".verdict");const d=n=>this.querySelector(`[data-s="${n}"]`),r=(n,l)=>{d(n).addEventListener("input",()=>{this[l]=Number(d(n).value),n==="n"&&(d("failing").max=String(this.n-1)),this.failing>this.n-1&&(this.failing=this.n-1,d("failing").value=String(this.failing)),this.draw()})};d("failing").max=String(this.n-1),r("n","n"),r("failing","failing"),r("rps","totalRps"),r("service","serviceMs"),r("timeout","timeoutMs"),r("deep","deepMs"),this.draw()}baseOpts(){return{n:this.n,totalRps:this.totalRps,meanServiceSec:this.serviceMs/1e3,healthCheckTimeoutSec:this.timeoutMs/1e3,checkRps:1/j,deepCheckServiceSec:this.deepMs/1e3}}opts(e=this.failing){return{...this.baseOpts(),failing:e}}draw(){const e=this.svg;for(;e.firstChild;)e.removeChild(e.firstChild);this.querySelector('[data-o="n"]').textContent=u(this.n,"backend"),this.querySelector('[data-o="failing"]').textContent=`${this.failing} down`,this.querySelector('[data-o="rps"]').textContent=`${y(this.totalRps)}/s`,this.querySelector('[data-o="service"]').textContent=`${this.serviceMs} ms`,this.querySelector('[data-o="timeout"]').textContent=`${y(this.timeoutMs)} ms`,this.querySelector('[data-o="deep"]').textContent=`${this.deepMs} ms`;const h=this.opts(),o=I(this.n,this.failing),m=Q(h),k=P(h),$=k*1e3,C=J(h),d=o>0&&Z({sojournSec:k,healthCheckTimeoutSec:h.healthCheckTimeoutSec}),r=tt(h);e.appendChild(a("text",{x:0,y:it,fill:"var(--ink)","font-size":12,"font-weight":600},"what each check actually catches")),e.appendChild(a("text",{x:O,y:T-10,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},"shallow")),e.appendChild(a("text",{x:z,y:T-10,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},"deep")),W.forEach((s,b)=>{const i=T+b*(A+X);e.appendChild(a("text",{x:0,y:i+A/2+4,fill:"var(--ink-soft)","font-size":11},s.name));const c=(x,g)=>e.appendChild(a("text",{x,y:i+A/2+5,"text-anchor":"middle","font-size":13,"font-weight":700,fill:g?"var(--teal)":"var(--crimson)"},g?"✓":"✗"));c(O,s.shallowCaught),c(z,s.deepCaught)}),e.appendChild(a("text",{x:0,y:G,fill:"var(--ink)","font-size":12,"font-weight":600},`request wait on the survivors vs. a ${p(this.timeoutMs)} health-check timeout`));const n=this.n,l=E+n*(M+B),w=s=>v+Math.log10(Math.max(L,Math.min(D,s))/L)/Math.log10(D/L)*st;for(const s of[1,10,1e3,1e6])e.appendChild(a("line",{x1:w(s),y1:E-6,x2:w(s),y2:l,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),e.appendChild(a("text",{x:w(s),y:l+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},p(s)));const q=w(this.timeoutMs);e.appendChild(a("line",{x1:q,y1:E-6,x2:q,y2:l,stroke:"var(--amber)","stroke-width":1.5}));for(let s=0;s<n;s++){const b=E+s*(M+B),i=P(this.opts(s))*1e3,c=I(this.n,s)>0&&i>this.timeoutMs,x=w(Number.isFinite(i)?i:D)-v,g=s===this.failing;e.appendChild(a("text",{x:v-8,y:b+M/2+4,fill:g?"var(--ink)":"var(--ink-soft)","font-size":10,"text-anchor":"end","font-weight":g?700:400},`${s} down`)),e.appendChild(a("rect",{x:v,y:b,width:Math.max(.5,x),height:M,fill:c?"var(--crimson)":"var(--slate)",stroke:g?"var(--amber)":"none","stroke-width":g?2:0}));const N=Number.isFinite(i)?c?`${p(i)} — down`:p(i):"∞ — all down",F=v+x+6+N.length*5.6<R-V;e.appendChild(a("text",{x:F?v+x+6:v+x-6,y:b+M/2+4,"font-size":10,"text-anchor":F?"start":"end",fill:F?c?"var(--crimson)":"var(--ink-soft)":"var(--paper)"},N))}const f=(s,b,i)=>{const c=this.ro[s];c.querySelector(".v").textContent=b,i?c.dataset.level=i:delete c.dataset.level};f("survivors",u(o,"backend")),f("per-survivor utilization",o>0?_(m):"—",m>=1?"bad":m>=.8?"warn":"ok"),f("sojourn time",p($)),f("queue depth",Y(C)),f("pile-on",d?"yes — all survivors trip too":"no",d?"bad":"ok"),f("max tolerable failures",u(r,"backend")),f("shallow catch rate",_(S("shallow"))),f("deep catch rate",_(S("deep")));const U=o===1?"carries":"carry",K=Number.isFinite(k)?`still only ${p($)} per request, but that alone is past the timeout`:"at or past saturation, so their own request latency runs unbounded";this.verdict.innerHTML=d?`With ${u(this.failing,"backend")} correctly pulled, the remaining <b>${u(o,"backend")}</b> ${U} ${y(this.totalRps)} req/s at ${_(m)} utilization — ${K}. Past the ${p(this.timeoutMs)} health-check timeout, <b>every one of those survivors now fails its shallow check too</b> — not from the original bug, but from the load the balancer's own remediation concentrated onto them. The fleet tolerates at most <b>${u(r,"failure")}</b> before this happens.`:`With ${u(this.failing,"backend")} correctly pulled, the remaining <b>${u(o,"backend")}</b> ${U} ${y(this.totalRps)} req/s at ${_(m)} utilization, waiting <b>${p($)}</b> per request against a ${p(this.timeoutMs)} timeout — still under it. The fleet tolerates up to <b>${u(r,"failure")}</b> before the survivors overload and all fail together; a shallow check only ever catches ${_(S("shallow"))} of the failure modes on the left, a deep check ${_(S("deep"))} of them, at a running cost of ${this.deepMs} ms every ${j}s per backend.`}}customElements.define("health-checks-rig",rt);
