import{c as U,r as L,e as T}from"./certrevoke.BReN1M2y.js";import"./tlswire.BJtISdZq.js";import"./congestion.01bs7TQx.js";import"./kernel.DrC0sNW-.js";import"./handshake.B8nGpk8Y.js";import"./latency-table.Z10ZPnGR.js";import"./little.BKsFjkjL.js";const q=720,z=380,l=150,N=60,H=q-l-N,F=14,f=34,g=34,B=f+g+56,w=B+20,h=28,$=18,R=100,k=1e8,I="http://www.w3.org/2000/svg",n=(t,a={},i)=>{const d=document.createElementNS(I,t);for(const[e,p]of Object.entries(a))d.setAttribute(e,String(p));return i!==void 0&&(d.textContent=i),d},C=t=>t>=1e6?`${(t/1e6).toFixed(1)} MB`:t>=1e3?`${(t/1e3).toFixed(1)} kB`:`${Math.round(t)} B`,v=t=>t>=48?`${(t/24).toFixed(1)} d`:`${t.toFixed(0)} h`,c=t=>Math.round(t).toLocaleString("en-US"),O=t=>t>=1e6?`${(t/1e6).toFixed(1)}M`:t>=1e3?`${(t/1e3).toFixed(1)}k`:String(Math.round(t));class Y extends HTMLElement{connectedCallback(){this.revOf=s=>Math.round(1*Math.pow(5e4,s/40)),this.rpsOf=s=>Math.round(1*Math.pow(1e4,s/40));const a=15,i=15;this.revocationsPerDay=this.revOf(a),this.avgRemainingLifetimeDays=45,this.crlUpdateHours=24,this.staplingRefreshHours=96,this.requestsPerSecond=this.rpsOf(i),this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${q} ${z}" role="img" width="100%"
             aria-label="Top: a log-scale bar showing the CRL's steady-state wire size. Bottom: three bars on an hour axis showing how long a revoked certificate stays trusted under CRL, live OCSP, and stapled OCSP."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            revocations/day
            <input type="range" data-s="rev" min="0" max="40" step="1" value="15"
                   aria-label="Certificates revoked per day, on a log scale from 1 to 50,000">
            <output class="num" data-o="rev"></output>
          </label>
          <label>
            avg remaining lifetime
            <input type="range" data-s="life" min="1" max="180" step="1" value="45"
                   aria-label="Average days of validity a revoked certificate had left when it was revoked">
            <output class="num" data-o="life"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            CRL update interval
            <input type="range" data-s="crl" min="1" max="168" step="1" value="24"
                   aria-label="Hours between CRL nextUpdate refreshes">
            <output class="num" data-o="crl"></output>
          </label>
          <label>
            OCSP staple refresh
            <input type="range" data-s="staple" min="1" max="168" step="1" value="96"
                   aria-label="Hours between the server refreshing its stapled OCSP response">
            <output class="num" data-o="staple"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            requests/s to this cert
            <input type="range" data-s="rps" min="0" max="40" step="1" value="15"
                   aria-label="Requests per second served under this certificate, on a log scale from 1 to 10,000">
            <output class="num" data-o="rps"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const d=this.querySelector(".readouts");this.ro={};for(const s of["CRL size","CRL entries","CRL gap","OCSP stapled gap","OCSP live gap","requests exposed (CRL gap)"]){const r=document.createElement("div");r.className="ro",r.innerHTML=`<span class="k">${s}</span><span class="v">—</span>`,d.appendChild(r),this.ro[s]=r}this.verdict=this.querySelector(".verdict");const e=s=>this.querySelector(`[data-s="${s}"]`),p=(s,r)=>{e(s).addEventListener("input",()=>{r(Number(e(s).value)),this.labels()}),e(s).addEventListener("change",()=>{r(Number(e(s).value)),this.draw()})};p("rev",s=>this.revocationsPerDay=this.revOf(s)),e("life").addEventListener("input",()=>{this.avgRemainingLifetimeDays=Number(e("life").value),this.labels()}),e("life").addEventListener("change",()=>{this.avgRemainingLifetimeDays=Number(e("life").value),this.draw()}),e("crl").addEventListener("input",()=>{this.crlUpdateHours=Number(e("crl").value),this.labels()}),e("crl").addEventListener("change",()=>{this.crlUpdateHours=Number(e("crl").value),this.draw()}),e("staple").addEventListener("input",()=>{this.staplingRefreshHours=Number(e("staple").value),this.labels()}),e("staple").addEventListener("change",()=>{this.staplingRefreshHours=Number(e("staple").value),this.draw()}),p("rps",s=>this.requestsPerSecond=this.rpsOf(s)),this.labels(),this.draw()}labels(){this.querySelector('[data-o="rev"]').textContent=`${c(this.revocationsPerDay)}/day`,this.querySelector('[data-o="life"]').textContent=`${this.avgRemainingLifetimeDays} d`,this.querySelector('[data-o="crl"]').textContent=`${this.crlUpdateHours} h`,this.querySelector('[data-o="staple"]').textContent=`${this.staplingRefreshHours} h`,this.querySelector('[data-o="rps"]').textContent=`${c(this.requestsPerSecond)}/s`}draw(){const a=this.svg;for(;a.firstChild;)a.removeChild(a.firstChild);const i=U({revocationsPerDay:this.revocationsPerDay,avgRemainingLifetimeDays:this.avgRemainingLifetimeDays}),d=L({method:"crl",crlUpdateHours:this.crlUpdateHours,staplingRefreshHours:this.staplingRefreshHours}),e=L({method:"ocspStapled",crlUpdateHours:this.crlUpdateHours,staplingRefreshHours:this.staplingRefreshHours}),p=L({method:"ocspLive",crlUpdateHours:this.crlUpdateHours,staplingRefreshHours:this.staplingRefreshHours}),s=T({requestsPerSecond:this.requestsPerSecond,gapHours:d});a.appendChild(n("text",{x:0,y:F,fill:"var(--ink)","font-size":12,"font-weight":600},`CRL steady-state size — ${c(i.population)} entries on the list at once`));const r=o=>l+Math.log10(Math.max(R,Math.min(k,o))/R)/Math.log10(k/R)*H;for(const o of[100,1e4,1e6,1e8])a.appendChild(n("line",{x1:r(o),y1:f-6,x2:r(o),y2:f+g,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),a.appendChild(n("text",{x:r(o),y:f+g+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},C(o)));const m=r(i.totalBytes)-l;a.appendChild(n("rect",{x:l,y:f,width:Math.max(.5,m),height:g,fill:"var(--slate)"}));const S=C(i.totalBytes),x=m>S.length*6.2+12;a.appendChild(n("text",{x:x?l+m/2:l+m+6,y:f+g/2+4,fill:x?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":x?"middle":"start"},S)),a.appendChild(n("text",{x:0,y:B,fill:"var(--ink)","font-size":12,"font-weight":600},"how long a revoked certificate can still be trusted"));const E=Math.max(d,e,4)*1.15,D=H/E,_=(o,y,M,A)=>{const P=y*D;a.appendChild(n("rect",{x:l,y:o,width:Math.max(.5,P),height:h,fill:M})),a.appendChild(n("text",{x:l-8,y:o+h/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},A)),a.appendChild(n("text",{x:l+P+6,y:o+h/2+4,fill:"var(--ink-soft)","font-size":10},v(y)))};_(w,d,"var(--slate)","CRL"),_(w+h+$,e,"var(--teal)","OCSP stapled");const b=w+2*(h+$);a.appendChild(n("rect",{x:l,y:b,width:3,height:h,fill:"var(--crimson)"})),a.appendChild(n("text",{x:l-8,y:b+h/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},"OCSP live")),a.appendChild(n("text",{x:l+10,y:b+h/2+4,fill:"var(--crimson)","font-size":10,"font-weight":600},"0h while reachable — UNBOUNDED if an attacker blocks it (fails open)"));const u=(o,y)=>this.ro[o].querySelector(".v").textContent=y;u("CRL size",C(i.totalBytes)),u("CRL entries",O(i.population)),u("CRL gap",v(d)),u("OCSP stapled gap",v(e)),u("OCSP live gap",`${v(p)} (fails open)`),u("requests exposed (CRL gap)",O(s)),this.verdict.textContent=`At ${c(this.revocationsPerDay)} revocations/day and ${this.avgRemainingLifetimeDays} days of average remaining life, the CRL settles at ${c(i.population)} entries and ${C(i.totalBytes)} — Little's Law, not a guess: population is revocation rate times how long an entry needs to stay listed. A revoked certificate stays trusted for up to ${v(d)} under the CRL's own update interval, or ${v(e)} under a stapled OCSP response's refresh interval — during which ${c(s)} requests at ${c(this.requestsPerSecond)}/s land on a certificate that should already be untrusted. Live OCSP beats both while the responder is reachable, at zero gap — but it is the only one of the three where an unreachable responder doesn't just widen the gap, it removes the check entirely, silently, because the deployed norm is to fail open.`}}customElements.define("revoke-rig",Y);
