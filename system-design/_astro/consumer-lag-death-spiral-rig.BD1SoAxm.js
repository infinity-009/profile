import{s as P,b as j,a as J,l as K,c as I,t as Z,e as ee,w as te,n as se}from"./consumer-lag-death-spiral.CLvKUb4I.js";const z=720,o=92,ne=40,b=z-o-ne,oe=14,L=30,W=44,H=170,w=W+H,G=w+60,k=G+22,C=22,q=6,B=12,re=k+2*(C+q)+34,ae="http://www.w3.org/2000/svg",s=(c,t={},h)=>{const i=document.createElementNS(ae,c);for(const[T,m]of Object.entries(t))i.setAttribute(T,String(m));return h!==void 0&&(i.textContent=h),i},l=c=>Math.round(c).toLocaleString("en-US"),F=c=>Number.isFinite(c)?c<1?`${Math.round(c*60)} min`:`${c.toFixed(1)} h`:"never";class ie extends HTMLElement{connectedCallback(){this.producerRate=100,this.consumerRate=90,this.thresholdMessages=300,this.degradePerThousand=60,this.retentionHours=3,this.windowHours=12,this.partitionCount=6,this.requestedConsumers=9,this.selfReinforcing=!0,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${z} ${re}" role="img" width="100%"
             aria-label="Top: lag in hours behind the log head over time, a dashed linear baseline against a toggleable self-reinforcing line, and a dashed retention-window threshold with a marker where the line first crosses it. Bottom: a grid of requested consumers, coloured teal up to the partition ceiling and crimson for the wasted remainder."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <button data-act="toggle" aria-pressed="true">self-reinforcing: ON</button>
          <label>
            chart window
            <input type="range" data-s="window" min="3" max="48" step="1" value="12"
                   aria-label="Hours of elapsed time shown on the chart">
            <output class="num" data-o="window"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            producer rate
            <input type="range" data-s="producer" min="10" max="500" step="10" value="100"
                   aria-label="Messages produced per second">
            <output class="num" data-o="producer"></output>
          </label>
          <label>
            base consumer rate
            <input type="range" data-s="consumer" min="10" max="500" step="10" value="90"
                   aria-label="Messages the consumer processes per second before any backlog degradation">
            <output class="num" data-o="consumer"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            degradation threshold
            <input type="range" data-s="threshold" min="50" max="5000" step="50" value="300"
                   aria-label="Backlog size, in messages, above which the consumer's own throughput starts falling">
            <output class="num" data-o="threshold"></output>
          </label>
          <label>
            degradation rate
            <input type="range" data-s="degrade" min="0" max="200" step="5" value="60"
                   aria-label="Messages per second the consumer loses for every extra 1,000 messages of backlog past the threshold">
            <output class="num" data-o="degrade"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            retention window
            <input type="range" data-s="retention" min="1" max="24" step="1" value="3"
                   aria-label="Hours of history the topic retains">
            <output class="num" data-o="retention"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            partitions
            <input type="range" data-s="partitions" min="1" max="16" step="1" value="6"
                   aria-label="Number of partitions in the topic">
            <output class="num" data-o="partitions"></output>
          </label>
          <label>
            requested consumers
            <input type="range" data-s="requested" min="1" max="24" step="1" value="9"
                   aria-label="Number of consumer instances requested in the consumer group">
            <output class="num" data-o="requested"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const u=this.querySelector(".readouts");this.ro={};for(const n of["lag growth rate","time to data loss","effective consumers","wasted consumers"]){const a=document.createElement("div");a.className="ro",a.innerHTML=`<span class="k">${n}</span><span class="v">—</span>`,u.appendChild(a),this.ro[n]=a}this.verdict=this.querySelector(".verdict"),this.querySelector('[data-act="toggle"]').addEventListener("click",n=>{this.selfReinforcing=!this.selfReinforcing,n.target.textContent=`self-reinforcing: ${this.selfReinforcing?"ON":"OFF"}`,n.target.setAttribute("aria-pressed",String(this.selfReinforcing)),this.draw()});const g=n=>this.querySelector(`[data-s="${n}"]`),d=(n,a)=>{g(n).addEventListener("input",()=>{this[a]=Number(g(n).value),this.labels()}),g(n).addEventListener("change",()=>{this[a]=Number(g(n).value),this.draw()})};d("window","windowHours"),d("producer","producerRate"),d("consumer","consumerRate"),d("threshold","thresholdMessages"),d("degrade","degradePerThousand"),d("retention","retentionHours"),d("partitions","partitionCount"),d("requested","requestedConsumers"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="window"]').textContent=`${this.windowHours} h`,this.querySelector('[data-o="producer"]').textContent=`${l(this.producerRate)}/s`,this.querySelector('[data-o="consumer"]').textContent=`${l(this.consumerRate)}/s`,this.querySelector('[data-o="threshold"]').textContent=`${l(this.thresholdMessages)} msgs`,this.querySelector('[data-o="degrade"]').textContent=`${l(this.degradePerThousand)}/s per 1k`,this.querySelector('[data-o="retention"]').textContent=`${this.retentionHours} h`,this.querySelector('[data-o="partitions"]').textContent=`${this.partitionCount}`,this.querySelector('[data-o="requested"]').textContent=`${this.requestedConsumers}`}draw(){const t=this.svg;for(;t.firstChild;)t.removeChild(t.firstChild);const h=this.producerRate,i=this.windowHours*3600,T=this.retentionHours*3600,m=P({producerRate:h,baseConsumerRate:this.consumerRate,degradationFn:se,durationSeconds:i}),U=j({thresholdMessages:this.thresholdMessages,ratePerExtraThousand:this.degradePerThousand}),R=P({producerRate:h,baseConsumerRate:this.consumerRate,degradationFn:U,durationSeconds:i}),M=this.selfReinforcing?R:m,u=J({producerRate:h,consumerRate:this.consumerRate}),g=K({producerRate:h,consumerRate:this.consumerRate}),d=this.selfReinforcing?e=>I(R,e):g,n=Z(d,T),a=n/3600,$=ee({partitionCount:this.partitionCount,requestedConsumerCount:this.requestedConsumers}),D=te({partitionCount:this.partitionCount,requestedConsumerCount:this.requestedConsumers});t.appendChild(s("text",{x:0,y:oe,fill:"var(--ink)","font-size":12,"font-weight":600},`hours behind the log head, over ${this.windowHours}h — ${u>0?`falling behind at ${l(u)} msgs/s`:"keeping pace or catching up"}`)),t.appendChild(s("rect",{x:o,y:L-9,width:20,height:3,fill:"var(--ink-soft)"})),t.appendChild(s("text",{x:o+26,y:L-5,fill:"var(--ink-soft)","font-size":10},"linear baseline")),t.appendChild(s("rect",{x:o+160,y:L-9,width:20,height:3,fill:this.selfReinforcing?"var(--crimson)":"var(--amber)"})),t.appendChild(s("text",{x:o+186,y:L-5,fill:"var(--ink-soft)","font-size":10},this.selfReinforcing?"self-reinforcing (active)":"linear (active, same line)"));const Y=m.at(-1).secondsBehind/3600,Q=R.at(-1).secondsBehind/3600,_=Math.max(this.retentionHours*1.2,Y,Q,1),A=e=>o+e/i*b,S=e=>W+H-Math.min(e,_)/_*H,N=4;for(let e=0;e<=N;e++){const r=_/N*e,p=S(r);t.appendChild(s("line",{x1:o,y1:p,x2:o+b,y2:p,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),t.appendChild(s("text",{x:o-8,y:p+3,fill:"var(--ink-soft)","font-size":9,"text-anchor":"end"},`${r.toFixed(1)}h`))}for(const e of[0,.25,.5,.75,1]){const r=e*i;t.appendChild(s("text",{x:A(r),y:w+14,fill:"var(--ink-soft)","font-size":9,"text-anchor":"middle"},`${(r/3600).toFixed(1)}h`))}const E=S(this.retentionHours);t.appendChild(s("line",{x1:o,y1:E,x2:o+b,y2:E,stroke:"var(--crimson)","stroke-width":1.5,"stroke-dasharray":"5 3"})),t.appendChild(s("text",{x:o+b-4,y:E-5,fill:"var(--crimson)","font-size":9,"text-anchor":"end"},`${this.retentionHours}h retention`));const X=Math.max(1,Math.floor(i/240)),O=(e,r,p)=>{let x="";for(let f=0;f<=i;f+=X){const v=I(e,f)/3600;x+=`${x?"L":"M"} ${A(f)} ${S(v)} `}t.appendChild(s("path",{d:x.trim(),fill:"none",stroke:r,"stroke-width":p}))};if(O(m,"var(--ink-soft)",1.6),O(M,this.selfReinforcing?"var(--crimson)":"var(--amber)",2.4),Number.isFinite(n)&&n<=i){const e=A(n);t.appendChild(s("circle",{cx:e,cy:E,r:5,fill:"var(--crimson)"})),t.appendChild(s("line",{x1:e,y1:E,x2:e,y2:w,stroke:"var(--crimson)","stroke-width":1,"stroke-dasharray":"2 3"}));const r=Math.min(o+b-4,e+6);t.appendChild(s("text",{x:r,y:w-6,fill:"var(--crimson)","font-size":9,"text-anchor":r===e+6?"start":"end"},`data loss at ${F(a)}`))}t.appendChild(s("line",{x1:o,y1:w,x2:o+b,y2:w,stroke:"var(--rule)","stroke-width":1})),t.appendChild(s("text",{x:0,y:G,fill:"var(--ink)","font-size":12,"font-weight":600},`${this.requestedConsumers} requested consumers against ${this.partitionCount} partitions — ${$} active, ${D} idle`));for(let e=0;e<this.requestedConsumers;e++){const r=e%B,p=Math.floor(e/B),x=o+r*(C+q),f=k+p*(C+q),v=e<$;t.appendChild(s("rect",{x,y:f,width:C,height:C,rx:3,fill:v?"var(--teal)":"var(--paper-sunk)",stroke:v?"none":"var(--crimson)","stroke-width":v?0:1.5,"stroke-dasharray":v?"none":"2 2"}))}t.appendChild(s("text",{x:o-8,y:k+C/2+4,fill:"var(--ink-soft)","font-size":9,"text-anchor":"end"},"consumers"));const y=(e,r)=>{this.ro[e]&&(this.ro[e].querySelector(".v").textContent=r)};y("lag growth rate",u>0?`+${l(u)} msgs/s`:`${l(u)} msgs/s`),y("time to data loss",Number.isFinite(a)?F(a):"never (within retention)"),y("effective consumers",`${$} of ${this.requestedConsumers} requested`),y("wasted consumers",`${D}`);const V=this.selfReinforcing?"self-reinforcing":"linear";this.verdict.innerHTML=`At ${l(h)} msgs/s produced against ${l(this.consumerRate)} msgs/s consumed, lag grows at <b>${l(u)} msgs/s</b> to start. In <b>${V}</b> mode, against a <b>${this.retentionHours}h</b> retention window, the consumer's own offset falls further behind the log's retained history than that window reaches at <b>${Number.isFinite(a)?F(a):"no point in this window"}</b> — every message older than that has already been deleted by the time the consumer would read it. Meanwhile, requesting <b>${this.requestedConsumers}</b> consumers against <b>${this.partitionCount}</b> partitions leaves <b>${D}</b> of them with no partition to consume at all: the ceiling on parallel consumption is the partition count, not the consumer count, and adding consumers past it changes nothing.`}}customElements.get("consumer-lag-death-spiral-rig")||customElements.define("consumer-lag-death-spiral-rig",ie);
