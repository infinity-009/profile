import{s as M,a as R,e as N,b as z,c as B,P as $}from"./stateless-discipline.CCtEvRWI.js";import"./bulkhead.DGoNKOeA.js";import"./kernel.DrC0sNW-.js";import"./latency-table.Z10ZPnGR.js";import"./balancer.BLuIYucL.js";import"./cache.CRkrIYFg.js";const U=720,O=340,n=210,H=70,q=U-n-H,Y=14,g=34,c=26,C=16,A=2*c+C,D=g+A+44,_=D+20,W="http://www.w3.org/2000/svg",i=(s,t={},h)=>{const v=document.createElementNS(W,s);for(const[w,E]of Object.entries(t))v.setAttribute(w,String(E));return h!==void 0&&(v.textContent=h),v},u=s=>{if(!Number.isFinite(s))return"—";if(s===0)return"0";const t=Math.abs(s);return t>=1e6?s.toExponential(1).replace("e+","×10^"):t>=1e3?`${(s/1e3).toFixed(1)}k`:t>=100?String(Math.round(s)):s%1===0?String(s):s.toFixed(1)},F=s=>Math.round(s).toLocaleString("en-US"),I=(s,t)=>`${u(s)} ${t}${Math.round(s)===1?"":"s"}`,b=s=>`${s>=100?s.toFixed(0):s>=10?s.toFixed(1):s.toFixed(2)}×`;class K extends HTMLElement{connectedCallback(){this.instances=20,this.totalSessions=1e6,this.failuresPerInstancePerYear=12,this.rps=5e3,this.hopMs=.5,this.skew=1,this.hopsPerRequest=2,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${U} ${O}" role="img" width="100%"
             aria-label="Top: sessions lost the instant one instance disappears, sticky in-memory affinity versus an externalized store. Bottom: how unevenly session activity lands on a fleet, sticky hash-pinned routing versus the perfectly even split a stateless design gets by construction."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            instances
            <input type="range" data-s="instances" min="2" max="64" step="1" value="20"
                   aria-label="Number of instances in the fleet">
            <output class="num" data-o="instances"></output>
          </label>
          <label>
            total sessions
            <input type="range" data-s="sessions" min="1000" max="2000000" step="1000" value="1000000"
                   aria-label="Total active sessions across the fleet">
            <output class="num" data-o="sessions"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            instance churn
            <input type="range" data-s="failures" min="1" max="500" step="1" value="12"
                   aria-label="Times per year one instance loses its in-memory state: crashes, scale-ins, restarts">
            <output class="num" data-o="failures"></output>
          </label>
          <label>
            session-store hop
            <input type="range" data-s="hop" min="0.1" max="5" step="0.1" value="${.5}"
                   aria-label="Round-trip milliseconds to the external session store, one way">
            <output class="num" data-o="hop"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            requests/s
            <input type="range" data-s="rps" min="100" max="50000" step="100" value="5000"
                   aria-label="Requests per second that read or write session state">
            <output class="num" data-o="rps"></output>
          </label>
          <label>
            session-activity skew
            <input type="range" data-s="skew" min="0" max="2" step="0.1" value="1"
                   aria-label="Zipf skew of session activity: 0 is uniform, 2 is a few very hot sessions">
            <output class="num" data-o="skew"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const S=this.querySelector(".readouts");this.ro={};for(const a of["sessions lost / incident","annual loss events","externalization tax","extra concurrency","sticky imbalance","stateless balance"]){const r=document.createElement("div");r.className="ro",r.innerHTML=`<span class="k">${a}</span><span class="v">—</span>`,S.appendChild(r),this.ro[a]=r}this.verdict=this.querySelector(".verdict");const d=a=>this.querySelector(`[data-s="${a}"]`),o=(a,r,m=Number)=>{d(a).addEventListener("input",()=>{this[r]=m(d(a).value),this.labels()}),d(a).addEventListener("change",()=>{this[r]=m(d(a).value),this.draw()})};o("instances","instances"),o("sessions","totalSessions"),o("failures","failuresPerInstancePerYear"),o("hop","hopMs",Number),o("rps","rps"),o("skew","skew"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="instances"]').textContent=I(this.instances,"instance"),this.querySelector('[data-o="sessions"]').textContent=F(this.totalSessions),this.querySelector('[data-o="failures"]').textContent=`${F(this.failuresPerInstancePerYear)}/yr`,this.querySelector('[data-o="hop"]').textContent=`${this.hopMs.toFixed(1)} ms`,this.querySelector('[data-o="rps"]').textContent=`${F(this.rps)}/s`,this.querySelector('[data-o="skew"]').textContent=this.skew.toFixed(1)}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const h=M({totalSessions:this.totalSessions,instances:this.instances}),v=M({totalSessions:this.totalSessions,instances:this.instances,stateless:!0}),w=R({totalSessions:this.totalSessions,instances:this.instances,failuresPerInstancePerYear:this.failuresPerInstancePerYear}),E=N({hopsPerRequest:this.hopsPerRequest,hopMs:this.hopMs}),f=z({rps:this.rps,hopsPerRequest:this.hopsPerRequest,hopMs:this.hopMs}),{imbalance:S}=B({sessions:Math.min(this.totalSessions,2e5),instances:this.instances,skew:this.skew});t.appendChild(i("text",{x:0,y:Y,fill:"var(--ink)","font-size":12,"font-weight":600},"sessions lost the instant one instance disappears"));const d=Math.max(1,h)*1.12,o=e=>n+Math.max(0,e)/d*q;for(const e of[0,d/2,d*.98])t.appendChild(i("line",{x1:o(e),y1:g-6,x2:o(e),y2:g+A,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(i("text",{x:o(e),y:g+A+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},u(e)));const a=(e,p,L,T)=>{const l=Math.max(.5,o(p)-n);t.appendChild(i("text",{x:n-8,y:e+c/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},T)),t.appendChild(i("rect",{x:n,y:e,width:l,height:c,fill:L}));const k=p===0?"0 — nothing pinned to fail":`${u(p)} sessions`,x=l>k.length*5.6+12;t.appendChild(i("text",{x:x?n+l/2:n+l+6,y:e+c/2+4,fill:x?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":x?"middle":"start"},k))};a(g,h,"var(--crimson)","sticky, in-memory"),a(g+c+C,v,"var(--teal)","externalized"),t.appendChild(i("text",{x:0,y:D,fill:"var(--ink)","font-size":12,"font-weight":600},"busiest instance vs. an even split, at this session-activity skew"));const r=Math.max(2,S)*1.15,m=e=>n+Math.max(0,e)/r*q;for(const e of[0,1,Math.max(1,r*.98)])t.appendChild(i("line",{x1:m(e),y1:_-6,x2:m(e),y2:_+A,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(i("text",{x:m(e),y:_+A+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},b(e)));const P=(e,p,L,T)=>{const l=Math.max(.5,m(p)-n);t.appendChild(i("text",{x:n-8,y:e+c/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},T)),t.appendChild(i("rect",{x:n,y:e,width:l,height:c,fill:L}));const k=`${b(p)} the even share`,x=l>k.length*5.6+12;t.appendChild(i("text",{x:x?n+l/2:n+l+6,y:e+c/2+4,fill:x?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":x?"middle":"start"},k))};P(_,S,"var(--crimson)","sticky routing"),P(_+c+C,$,"var(--teal)","stateless routing");const y=(e,p)=>this.ro[e].querySelector(".v").textContent=p;y("sessions lost / incident",u(h)),y("annual loss events",u(w)),y("externalization tax",`${E.toFixed(2)} ms`),y("extra concurrency",`+${f<1?f.toFixed(2):f<10?f.toFixed(1):u(f)}`),y("sticky imbalance",b(S)),y("stateless balance",b($)),this.verdict.innerHTML=`With ${I(this.instances,"instance")} pinning sessions to memory, one instance dying takes <b>${u(h)}</b> sessions with it; externalized, it takes <b>0</b>. At ${F(this.failuresPerInstancePerYear)} restarts/yr per instance that is <b>${u(w)}</b> forced logouts a year fleet-wide — and that total does not fall if you add more instances, because each session still sits on one instance restarting at the same rate; more instances only shrink each incident and multiply how often one happens. Moving that state out costs <b>${E.toFixed(2)} ms</b> of tax per request (${this.hopsPerRequest} hops at ${this.hopMs.toFixed(1)} ms) and <b>+${f.toFixed(1)}</b> connections in flight at ${F(this.rps)} req/s — paid on every request, whether or not an instance ever fails. Sticky routing also can't split one session's traffic across instances, so at a skew of ${this.skew.toFixed(1)} its busiest instance carries <b>${b(S)}</b> an even share, against the <b>${b($)}</b> a stateless design gets by construction.`}}customElements.define("stateless-rig",K);
