import{a as V,D as X,s as J,b as S}from"./structured-logging-and-sampling.BPYhP3Lf.js";import"./metrics-logs-traces.d7E1fMSS.js";import"./distributed-tracing.Qp6gen-2.js";import"./fanout.BiPwdCPX.js";import"./kernel.DrC0sNW-.js";import"./percentiles.C3ngedBT.js";const G=720,j=620,i=170,K=60,F=G-i-K,Q=14,_=34,g=26,O=18,z=_+2*(g+O)+40,k=z+20,x=22,w=14,b=["ERROR","WARN","INFO","DEBUG"],W=k+b.length*(x+w)+40,C=W+20,B=26,T=18,I=1e3,Z=500,D=1e6,U=1e11,M=1,q=1e4,tt="http://www.w3.org/2000/svg",r=(s,t={},p)=>{const l=document.createElementNS(tt,s);for(const[v,E]of Object.entries(t))l.setAttribute(v,String(E));return p!==void 0&&(l.textContent=p),l},d=s=>Math.round(s).toLocaleString("en-US"),N=s=>`${(s*100).toFixed(1)}%`,$=s=>Number.isFinite(s)?s>=1e12?`${(s/1e12).toFixed(2)} TB`:s>=1e9?`${(s/1e9).toFixed(2)} GB`:s>=1e6?`${(s/1e6).toFixed(2)} MB`:s>=1e3?`${(s/1e3).toFixed(1)} kB`:`${Math.round(s)} B`:"—",P=s=>Number.isFinite(s)?s>=1e9?`${(s/1e9).toFixed(2)}B`:s>=1e6?`${(s/1e6).toFixed(2)}M`:s>=1e3?`${(s/1e3).toFixed(1)}k`:String(Math.round(s)):"—";class et extends HTMLElement{connectedCallback(){const t={ERROR:100,WARN:10,INFO:1,DEBUG:0},p=5,l=8,v=10;this.rates={...t},this.relevantLines=p,this.fieldCount=l,this.keyBytes=v,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${G} ${j}" role="img" width="100%"
             aria-label="Top: two log-scale bars, full-capture log storage cost versus an asymmetric sampling policy's cost. Middle: four bars, one per severity, showing the probability at least one relevant incident log line survives that severity's sampling rate. Bottom: two bars comparing structured JSON per-line overhead against a terse unstructured line."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            ERROR sampling rate
            <input type="range" data-s="ERROR" min="0" max="100" step="1" value="${t.ERROR}"
                   aria-label="Percent of ERROR-level log lines kept">
            <output class="num" data-o="ERROR"></output>
          </label>
          <label>
            WARN sampling rate
            <input type="range" data-s="WARN" min="0" max="100" step="1" value="${t.WARN}"
                   aria-label="Percent of WARN-level log lines kept">
            <output class="num" data-o="WARN"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            INFO sampling rate
            <input type="range" data-s="INFO" min="0" max="100" step="1" value="${t.INFO}"
                   aria-label="Percent of INFO-level log lines kept">
            <output class="num" data-o="INFO"></output>
          </label>
          <label>
            DEBUG sampling rate
            <input type="range" data-s="DEBUG" min="0" max="100" step="1" value="${t.DEBUG}"
                   aria-label="Percent of DEBUG-level log lines kept">
            <output class="num" data-o="DEBUG"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            incident's relevant log lines
            <input type="range" data-s="lines" min="1" max="300" step="1" value="${p}"
                   aria-label="How many log lines the incident actually needed, shared across all four severities">
            <output class="num" data-o="lines"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            structured field count
            <input type="range" data-s="fields" min="0" max="20" step="1" value="${l}"
                   aria-label="Number of key/value fields in a structured log line">
            <output class="num" data-o="fields"></output>
          </label>
          <label>
            avg key name length
            <input type="range" data-s="keybytes" min="1" max="30" step="1" value="${v}"
                   aria-label="Average key name length in bytes">
            <output class="num" data-o="keybytes"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const E=this.querySelector(".readouts");this.ro={};for(const n of["full-capture cost/day","sampled cost/day","reduction factor","structured overhead/line","unstructured overhead/line"]){const c=document.createElement("div");c.className="ro",c.innerHTML=`<span class="k">${n}</span><span class="v">—</span>`,E.appendChild(c),this.ro[n]=c}this.verdict=this.querySelector(".verdict");const u=n=>this.querySelector(`[data-s="${n}"]`),A=n=>{u(n).addEventListener("input",()=>{this.rates[n]=Number(u(n).value),this.labels()}),u(n).addEventListener("change",()=>{this.rates[n]=Number(u(n).value),this.draw()})};b.forEach(A);const R=(n,c)=>{u(n).addEventListener("input",()=>{this[c]=Number(u(n).value),this.labels()}),u(n).addEventListener("change",()=>{this[c]=Number(u(n).value),this.draw()})};R("lines","relevantLines"),R("fields","fieldCount"),R("keybytes","keyBytes"),this.labels(),this.draw()}labels(){for(const t of b)this.querySelector(`[data-o="${t}"]`).textContent=`${this.rates[t]}%`;this.querySelector('[data-o="lines"]').textContent=d(this.relevantLines),this.querySelector('[data-o="fields"]').textContent=d(this.fieldCount),this.querySelector('[data-o="keybytes"]').textContent=`${d(this.keyBytes)} B`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const p={};for(const e of b)p[e]=this.rates[e]/100;const l=V({requestsPerSec:I,severityMix:X,samplingRates:p,avgLineBytes:Z}),v=J({fieldCount:this.fieldCount,avgKeyNameBytes:this.keyBytes});t.appendChild(r("text",{x:0,y:Q,fill:"var(--ink)","font-size":12,"font-weight":600},`full capture vs. asymmetric sampling, at ${d(I)} req/s`));const E=e=>i+Math.log10(Math.max(D,Math.min(U,e))/D)/Math.log10(U/D)*F;for(const e of[1e6,1e7,1e8,1e9,1e10,1e11]){const a=E(e);t.appendChild(r("line",{x1:a,y1:_-6,x2:a,y2:_+2*(g+O),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(r("text",{x:a,y:_+2*(g+O)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},$(e)))}const u=(e,a,y,m)=>{const o=E(a)-i;t.appendChild(r("text",{x:i-8,y:e+g/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},m)),t.appendChild(r("rect",{x:i,y:e,width:Math.max(.5,o),height:g,fill:y}));const f=`${$(a)}/day`,h=o>f.length*5.8+12;t.appendChild(r("text",{x:h?i+o/2:i+o+6,y:e+g/2+4,fill:h?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":h?"middle":"start"},f))};u(_,l.fullBytesPerDay,"var(--slate)","full capture"),u(_+g+O,l.sampledBytesPerDay,"var(--teal)","asymmetric sampling"),t.appendChild(r("text",{x:0,y:z,fill:"var(--ink)","font-size":12,"font-weight":600},`P(at least one of ${d(this.relevantLines)} relevant lines survives), by severity`));const A=e=>i+e*F;for(const e of[0,.25,.5,.75,1]){const a=A(e);t.appendChild(r("line",{x1:a,y1:k-6,x2:a,y2:k+b.length*(x+w),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(r("text",{x:a,y:k+b.length*(x+w)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},N(e)))}b.forEach((e,a)=>{const y=k+a*(x+w),m=S(this.relevantLines,this.rates[e]/100),o=A(m)-i,f=m<.5;t.appendChild(r("text",{x:i-8,y:y+x/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},`${e} (${this.rates[e]}%)`)),t.appendChild(r("rect",{x:i,y,width:Math.max(.5,o),height:x,fill:f?"var(--crimson)":"var(--teal)"}));const h=N(m),L=o>h.length*5.8+12;t.appendChild(r("text",{x:L?i+o/2:i+o+6,y:y+x/2+4,fill:L?"var(--paper)":f?"var(--crimson)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":L?"middle":"start"},h))}),t.appendChild(r("text",{x:0,y:W,fill:"var(--ink)","font-size":12,"font-weight":600},"per-line byte overhead: structured JSON vs. terse unstructured"));const R=e=>i+Math.log10(Math.max(M,Math.min(q,e))/M)/Math.log10(q/M)*F;for(const e of[1,10,100,1e3,1e4]){const a=R(e);t.appendChild(r("line",{x1:a,y1:C-6,x2:a,y2:C+2*(B+T),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(r("text",{x:a,y:C+2*(B+T)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},`${P(e)} B`))}const n=(e,a,y,m)=>{const o=a>0?R(a)-i:0;t.appendChild(r("text",{x:i-8,y:e+B/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},m)),t.appendChild(r("rect",{x:i,y:e,width:Math.max(.5,o),height:B,fill:y}));const f=`${d(a)} B/line`,h=o>f.length*5.8+12;t.appendChild(r("text",{x:h?i+o/2:i+o+6,y:e+B/2+4,fill:h?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":h?"middle":"start"},f))};n(C,v,"var(--amber)","structured (JSON keys)"),n(C+B+T,0,"var(--slate)","unstructured (terse)");const c=(e,a)=>this.ro[e].querySelector(".v").textContent=a;c("full-capture cost/day",$(l.fullBytesPerDay)),c("sampled cost/day",$(l.sampledBytesPerDay)),c("reduction factor",`${P(l.reductionFactor)}×`),c("structured overhead/line",`${d(v)} B`),c("unstructured overhead/line","0 B");const H=S(this.relevantLines,this.rates.ERROR/100),Y=S(this.relevantLines,this.rates.INFO/100);this.verdict.textContent=`At ${d(I)} req/s, full capture costs ${$(l.fullBytesPerDay)}/day; sampling ERROR at ${this.rates.ERROR}%, WARN at ${this.rates.WARN}%, INFO at ${this.rates.INFO}%, and DEBUG at ${this.rates.DEBUG}% cuts that to ${$(l.sampledBytesPerDay)}/day — a ${P(l.reductionFactor)}× reduction. For an incident that needed ${d(this.relevantLines)} relevant lines, ERROR's ${this.rates.ERROR}% sampling rate leaves a ${N(H)} chance at least one survives, while INFO's ${this.rates.INFO}% rate leaves only ${N(Y)} — the same storage-saving lever, priced in whether the incident is reconstructable at all, not just in bytes. A structured line with ${d(this.fieldCount)} fields at ${d(this.keyBytes)}-byte key names pays ${d(v)} bytes of pure key/syntax overhead per line that an equivalent terse unstructured line pays none of — the price of being queryable by field.`}}customElements.define("structured-logging-and-sampling-rig",et);
