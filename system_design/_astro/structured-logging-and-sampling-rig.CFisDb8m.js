import{l as J}from"./metrics-logs-traces.DN2YrArn.js";import"./distributed-tracing.CHYQ5kGh.js";import"./fanout.DU4-IRuI.js";import"./kernel.DrC0sNW-.js";import"./percentiles.C3ngedBT.js";const W={ERROR:.001,WARN:.02,INFO:.879,DEBUG:.1},j={ERROR:1,WARN:.1,INFO:.01,DEBUG:0},Y=["ERROR","WARN","INFO","DEBUG"];function K(e){const t=Y.reduce((c,r)=>c+(e[r]??0),0);if(Math.abs(t-1)>1e-9)throw new RangeError(`severityMix fractions must sum to 1, got ${t}`)}function Q({requestsPerSec:e,severityMix:t=W,samplingRates:c=j,avgLineBytes:r}){K(t);let h=0,f=0;const d={};for(const y of Y){const m=t[y]??0,n=e*m,l=J({requestsPerSec:n,avgLogLineBytes:r}),C=l*(c[y]??0);h+=l,f+=C,d[y]={fullBytesPerDay:l,sampledBytesPerDay:C,samplingRate:c[y]??0}}return{fullBytesPerDay:h,sampledBytesPerDay:f,reductionFactor:f>0?h/f:1/0,bySeverity:d}}function F(e,t){if(e<0)throw new RangeError("relevantLineCount must be non-negative");if(t<0||t>1)throw new RangeError("samplingRate must be in [0, 1]");return 1-(1-t)**e}function Z({fieldCount:e,avgKeyNameBytes:t}){if(e<0)throw new RangeError("fieldCount must be non-negative");if(t<0)throw new RangeError("avgKeyNameBytes must be non-negative");return e*(t+4)}const z=720,tt=620,i=170,et=60,D=z-i-et,st=14,N=34,x=26,k=18,H=N+2*(x+k)+40,w=H+20,b=22,O=14,B=["ERROR","WARN","INFO","DEBUG"],X=w+B.length*(b+O)+40,$=X+20,_=26,I=18,T=1e3,at=500,P=1e6,G=1e11,M=1,q=1e4,nt="http://www.w3.org/2000/svg",o=(e,t={},c)=>{const r=document.createElementNS(nt,e);for(const[h,f]of Object.entries(t))r.setAttribute(h,String(f));return c!==void 0&&(r.textContent=c),r},p=e=>Math.round(e).toLocaleString("en-US"),S=e=>`${(e*100).toFixed(1)}%`,A=e=>Number.isFinite(e)?e>=1e12?`${(e/1e12).toFixed(2)} TB`:e>=1e9?`${(e/1e9).toFixed(2)} GB`:e>=1e6?`${(e/1e6).toFixed(2)} MB`:e>=1e3?`${(e/1e3).toFixed(1)} kB`:`${Math.round(e)} B`:"—",U=e=>Number.isFinite(e)?e>=1e9?`${(e/1e9).toFixed(2)}B`:e>=1e6?`${(e/1e6).toFixed(2)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(Math.round(e)):"—";class rt extends HTMLElement{connectedCallback(){const t={ERROR:100,WARN:10,INFO:1,DEBUG:0},c=5,r=8,h=10;this.rates={...t},this.relevantLines=c,this.fieldCount=r,this.keyBytes=h,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${z} ${tt}" role="img" width="100%"
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
            <input type="range" data-s="lines" min="1" max="300" step="1" value="${c}"
                   aria-label="How many log lines the incident actually needed, shared across all four severities">
            <output class="num" data-o="lines"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            structured field count
            <input type="range" data-s="fields" min="0" max="20" step="1" value="${r}"
                   aria-label="Number of key/value fields in a structured log line">
            <output class="num" data-o="fields"></output>
          </label>
          <label>
            avg key name length
            <input type="range" data-s="keybytes" min="1" max="30" step="1" value="${h}"
                   aria-label="Average key name length in bytes">
            <output class="num" data-o="keybytes"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const f=this.querySelector(".readouts");this.ro={};for(const n of["full-capture cost/day","sampled cost/day","reduction factor","structured overhead/line","unstructured overhead/line"]){const l=document.createElement("div");l.className="ro",l.innerHTML=`<span class="k">${n}</span><span class="v">—</span>`,f.appendChild(l),this.ro[n]=l}this.verdict=this.querySelector(".verdict");const d=n=>this.querySelector(`[data-s="${n}"]`),y=n=>{d(n).addEventListener("input",()=>{this.rates[n]=Number(d(n).value),this.labels()}),d(n).addEventListener("change",()=>{this.rates[n]=Number(d(n).value),this.draw()})};B.forEach(y);const m=(n,l)=>{d(n).addEventListener("input",()=>{this[l]=Number(d(n).value),this.labels()}),d(n).addEventListener("change",()=>{this[l]=Number(d(n).value),this.draw()})};m("lines","relevantLines"),m("fields","fieldCount"),m("keybytes","keyBytes"),this.labels(),this.draw()}labels(){for(const t of B)this.querySelector(`[data-o="${t}"]`).textContent=`${this.rates[t]}%`;this.querySelector('[data-o="lines"]').textContent=p(this.relevantLines),this.querySelector('[data-o="fields"]').textContent=p(this.fieldCount),this.querySelector('[data-o="keybytes"]').textContent=`${p(this.keyBytes)} B`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const c={};for(const s of B)c[s]=this.rates[s]/100;const r=Q({requestsPerSec:T,severityMix:W,samplingRates:c,avgLineBytes:at}),h=Z({fieldCount:this.fieldCount,avgKeyNameBytes:this.keyBytes});t.appendChild(o("text",{x:0,y:st,fill:"var(--ink)","font-size":12,"font-weight":600},`full capture vs. asymmetric sampling, at ${p(T)} req/s`));const f=s=>i+Math.log10(Math.max(P,Math.min(G,s))/P)/Math.log10(G/P)*D;for(const s of[1e6,1e7,1e8,1e9,1e10,1e11]){const a=f(s);t.appendChild(o("line",{x1:a,y1:N-6,x2:a,y2:N+2*(x+k),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(o("text",{x:a,y:N+2*(x+k)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},A(s)))}const d=(s,a,E,R)=>{const u=f(a)-i;t.appendChild(o("text",{x:i-8,y:s+x/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},R)),t.appendChild(o("rect",{x:i,y:s,width:Math.max(.5,u),height:x,fill:E}));const g=`${A(a)}/day`,v=u>g.length*5.8+12;t.appendChild(o("text",{x:v?i+u/2:i+u+6,y:s+x/2+4,fill:v?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":v?"middle":"start"},g))};d(N,r.fullBytesPerDay,"var(--slate)","full capture"),d(N+x+k,r.sampledBytesPerDay,"var(--teal)","asymmetric sampling"),t.appendChild(o("text",{x:0,y:H,fill:"var(--ink)","font-size":12,"font-weight":600},`P(at least one of ${p(this.relevantLines)} relevant lines survives), by severity`));const y=s=>i+s*D;for(const s of[0,.25,.5,.75,1]){const a=y(s);t.appendChild(o("line",{x1:a,y1:w-6,x2:a,y2:w+B.length*(b+O),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(o("text",{x:a,y:w+B.length*(b+O)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},S(s)))}B.forEach((s,a)=>{const E=w+a*(b+O),R=F(this.relevantLines,this.rates[s]/100),u=y(R)-i,g=R<.5;t.appendChild(o("text",{x:i-8,y:E+b/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},`${s} (${this.rates[s]}%)`)),t.appendChild(o("rect",{x:i,y:E,width:Math.max(.5,u),height:b,fill:g?"var(--crimson)":"var(--teal)"}));const v=S(R),L=u>v.length*5.8+12;t.appendChild(o("text",{x:L?i+u/2:i+u+6,y:E+b/2+4,fill:L?"var(--paper)":g?"var(--crimson)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":L?"middle":"start"},v))}),t.appendChild(o("text",{x:0,y:X,fill:"var(--ink)","font-size":12,"font-weight":600},"per-line byte overhead: structured JSON vs. terse unstructured"));const m=s=>i+Math.log10(Math.max(M,Math.min(q,s))/M)/Math.log10(q/M)*D;for(const s of[1,10,100,1e3,1e4]){const a=m(s);t.appendChild(o("line",{x1:a,y1:$-6,x2:a,y2:$+2*(_+I),stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(o("text",{x:a,y:$+2*(_+I)+14,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},`${U(s)} B`))}const n=(s,a,E,R)=>{const u=a>0?m(a)-i:0;t.appendChild(o("text",{x:i-8,y:s+_/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},R)),t.appendChild(o("rect",{x:i,y:s,width:Math.max(.5,u),height:_,fill:E}));const g=`${p(a)} B/line`,v=u>g.length*5.8+12;t.appendChild(o("text",{x:v?i+u/2:i+u+6,y:s+_/2+4,fill:v?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":v?"middle":"start"},g))};n($,h,"var(--amber)","structured (JSON keys)"),n($+_+I,0,"var(--slate)","unstructured (terse)");const l=(s,a)=>this.ro[s].querySelector(".v").textContent=a;l("full-capture cost/day",A(r.fullBytesPerDay)),l("sampled cost/day",A(r.sampledBytesPerDay)),l("reduction factor",`${U(r.reductionFactor)}×`),l("structured overhead/line",`${p(h)} B`),l("unstructured overhead/line","0 B");const C=F(this.relevantLines,this.rates.ERROR/100),V=F(this.relevantLines,this.rates.INFO/100);this.verdict.textContent=`At ${p(T)} req/s, full capture costs ${A(r.fullBytesPerDay)}/day; sampling ERROR at ${this.rates.ERROR}%, WARN at ${this.rates.WARN}%, INFO at ${this.rates.INFO}%, and DEBUG at ${this.rates.DEBUG}% cuts that to ${A(r.sampledBytesPerDay)}/day — a ${U(r.reductionFactor)}× reduction. For an incident that needed ${p(this.relevantLines)} relevant lines, ERROR's ${this.rates.ERROR}% sampling rate leaves a ${S(C)} chance at least one survives, while INFO's ${this.rates.INFO}% rate leaves only ${S(V)} — the same storage-saving lever, priced in whether the incident is reconstructable at all, not just in bytes. A structured line with ${p(this.fieldCount)} fields at ${p(this.keyBytes)}-byte key names pays ${p(h)} bytes of pure key/syntax overhead per line that an equivalent terse unstructured line pays none of — the price of being queryable by field.`}}customElements.define("structured-logging-and-sampling-rig",rt);
