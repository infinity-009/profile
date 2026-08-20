import{l as j,p as Y,m as Q,a as V,b as N,t as G,w as J,c as K}from"./cdc-and-log-tailing.DhEa8M62.js";import{l as Z}from"./consumer-lag-death-spiral.CLvKUb4I.js";import"./append-only-log-mechanics.B6YKRkVy.js";const F=720,ee="http://www.w3.org/2000/svg",i=(n,e={},t)=>{const c=document.createElementNS(ee,n);for(const[o,s]of Object.entries(e))c.setAttribute(o,String(s));return t!==void 0&&(c.textContent=t),c},C=n=>Math.round(n).toLocaleString("en-US"),p=n=>{if(!Number.isFinite(n))return"0";const e=n<0?"-":"",t=Math.abs(n);return t===0?"0":t>=1e9?`${e}${(t/1e9).toFixed(1)}B`:t>=1e6?`${e}${(t/1e6).toFixed(1)}M`:t>=1e3?`${e}${(t/1e3).toFixed(1)}k`:`${e}${t.toFixed(t>=100||Number.isInteger(t)?0:1)}`},_=n=>Number.isFinite(n)?n<60?`${n.toFixed(0)} s`:n<3600?`${(n/60).toFixed(1)} min`:n<86400?`${(n/3600).toFixed(1)} h`:`${(n/86400).toFixed(1)} d`:"never";function z(n,{x0:e,y0:t,w:c,barH:o,gap:s,title:l,bars:u,maxOverride:g}){n.appendChild(i("text",{x:e,y:t-8,fill:"var(--ink)","font-size":12,"font-weight":600},l));const L=g??Math.max(1,...u.map(h=>h.value));return u.forEach((h,P)=>{const b=t+P*(o+s),w=Math.max(.5,h.value/L*c);n.appendChild(i("text",{x:e,y:b-3,fill:"var(--ink-soft)","font-size":9},h.label)),n.appendChild(i("rect",{x:e,y:b,width:w,height:o,fill:h.color}));const R=p(h.value)+(h.unit??""),f=w>R.length*6+8;n.appendChild(i("text",{x:f?e+w/2:e+w+5,y:b+o/2+4,fill:f?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600,"text-anchor":f?"middle":"start"},R))}),t+u.length*(o+s)}class te extends HTMLElement{connectedCallback(){const e={updatesInWindow:6,hasTombstoneColumn:!1,tableRows:2e6,changedRowsPerPoll:300,pollIntervalS:5,indexedOnUpdatedAt:!0,writeRatePerSec:200,tailerThroughputPerSec:180,walRetentionHours:2,avgChangeBytes:250,windowHours:6};Object.assign(this,e),this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${F} 560" role="img" width="100%"
             aria-label="Top left: events captured for one row that changes several times between polls, log-based against polling. Top right: rows per second scanned on the source database, indexed polling, unindexed polling, and log-based CDC's own zero. Bottom: a log-tailer's replication lag over time against the database's write-ahead-log retention window, with a marker where the lag first exceeds retention and the tailer must re-snapshot."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <button data-act="tombstone" aria-pressed="false">delete tombstone column: OFF</button>
          <label>
            updates per row between polls
            <input type="range" data-s="updates" min="0" max="20" step="1" value="${e.updatesInWindow}"
                   aria-label="How many times one row changes between two poll instants">
            <output class="num" data-o="updates"></output>
          </label>
        </div>
        <div class="controls">
          <button data-act="indexed" aria-pressed="true">updated_at indexed: ON</button>
          <label>
            poll interval
            <input type="range" data-s="poll" min="1" max="60" step="1" value="${e.pollIntervalS}"
                   aria-label="Seconds between polls">
            <output class="num" data-o="poll"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            table rows
            <input type="range" data-s="rows" min="10000" max="20000000" step="10000" value="${e.tableRows}"
                   aria-label="Total rows in the polled table">
            <output class="num" data-o="rows"></output>
          </label>
          <label>
            rows changed per poll
            <input type="range" data-s="changed" min="1" max="50000" step="1" value="${e.changedRowsPerPoll}"
                   aria-label="Rows that actually changed since the previous poll">
            <output class="num" data-o="changed"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            database write rate
            <input type="range" data-s="writerate" min="1" max="2000" step="1" value="${e.writeRatePerSec}"
                   aria-label="Row changes per second written to the database">
            <output class="num" data-o="writerate"></output>
          </label>
          <label>
            tailer throughput
            <input type="range" data-s="tailer" min="1" max="2000" step="1" value="${e.tailerThroughputPerSec}"
                   aria-label="Row changes per second the log-tailer can process">
            <output class="num" data-o="tailer"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            WAL/binlog retention
            <input type="range" data-s="retention" min="1" max="48" step="1" value="${e.walRetentionHours}"
                   aria-label="Hours of write-ahead-log history the database keeps before recycling it">
            <output class="num" data-o="retention"></output>
          </label>
          <label>
            chart window
            <input type="range" data-s="window" min="1" max="48" step="1" value="${e.windowHours}"
                   aria-label="Hours of elapsed time shown on the lag chart">
            <output class="num" data-o="window"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const t=this.querySelector(".readouts");this.ro={};for(const s of["missed updates/row","delete visible to poller","rows/sec scanned (indexed)","rows/sec scanned (unindexed)","time to re-snapshot","WAL bytes pinned by lag"]){const l=document.createElement("div");l.className="ro",l.innerHTML=`<span class="k">${s}</span><span class="v">—</span>`,t.appendChild(l),this.ro[s]=l}this.verdict=this.querySelector(".verdict"),this.querySelector('[data-act="tombstone"]').addEventListener("click",s=>{this.hasTombstoneColumn=!this.hasTombstoneColumn,s.target.textContent=`delete tombstone column: ${this.hasTombstoneColumn?"ON":"OFF"}`,s.target.setAttribute("aria-pressed",String(this.hasTombstoneColumn)),this.draw()}),this.querySelector('[data-act="indexed"]').addEventListener("click",s=>{this.indexedOnUpdatedAt=!this.indexedOnUpdatedAt,s.target.textContent=`updated_at indexed: ${this.indexedOnUpdatedAt?"ON":"OFF"}`,s.target.setAttribute("aria-pressed",String(this.indexedOnUpdatedAt)),this.draw()});const c=s=>this.querySelector(`[data-s="${s}"]`),o=(s,l)=>{c(s).addEventListener("input",()=>{this[l]=Number(c(s).value),this.labels(),this.draw()})};o("updates","updatesInWindow"),o("poll","pollIntervalS"),o("rows","tableRows"),o("changed","changedRowsPerPoll"),o("writerate","writeRatePerSec"),o("tailer","tailerThroughputPerSec"),o("retention","walRetentionHours"),o("window","windowHours"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="updates"]').textContent=`${this.updatesInWindow}`,this.querySelector('[data-o="poll"]').textContent=`${this.pollIntervalS} s`,this.querySelector('[data-o="rows"]').textContent=p(this.tableRows),this.querySelector('[data-o="changed"]').textContent=p(this.changedRowsPerPoll),this.querySelector('[data-o="writerate"]').textContent=`${C(this.writeRatePerSec)}/s`,this.querySelector('[data-o="tailer"]').textContent=`${C(this.tailerThroughputPerSec)}/s`,this.querySelector('[data-o="retention"]').textContent=`${this.walRetentionHours} h`,this.querySelector('[data-o="window"]').textContent=`${this.windowHours} h`}draw(){const e=this.svg;for(;e.firstChild;)e.removeChild(e.firstChild);const t=j({updatesInWindow:this.updatesInWindow}),c=!this.hasTombstoneColumn,o=Y({updatesInWindow:this.updatesInWindow}),s=Q({updatesInWindow:this.updatesInWindow}),l=V({hasTombstoneColumn:this.hasTombstoneColumn}),u=N({pollIntervalS:this.pollIntervalS,tableRows:this.tableRows,changedRowsPerPoll:this.changedRowsPerPoll,indexedOnUpdatedAt:!0}),g=N({pollIntervalS:this.pollIntervalS,tableRows:this.tableRows,changedRowsPerPoll:this.changedRowsPerPoll,indexedOnUpdatedAt:!1}),L=this.indexedOnUpdatedAt?u:g,h=K(),P=26,b=280;z(e,{x0:P,y0:40,w:b,barH:26,gap:14,title:`1 row, ${this.updatesInWindow} changes between polls — events captured`,bars:[{label:"log-based CDC (every write)",value:t,color:"var(--teal)"},{label:"polling CDC (latest state only)",value:o,color:"var(--crimson)"}],maxOverride:Math.max(1,t)});const w=P+b+44,R=F-w-26,f=Math.max(1,g.rowsScannedPerSec,u.rowsScannedPerSec);z(e,{x0:w,y0:40,w:R,barH:22,gap:10,title:"rows/sec scanned on the source database",bars:[{label:"polling, unindexed updated_at",value:g.rowsScannedPerSec,color:"var(--crimson)",unit:"/s"},{label:"polling, indexed updated_at",value:u.rowsScannedPerSec,color:"var(--amber)",unit:"/s"},{label:"log-based CDC (tails the WAL)",value:h.rowsScannedPerSec,color:"var(--teal)",unit:"/s"}],maxOverride:f});const d=92,m=F-d-40,E=210,M=E+20,k=190,y=M+k,v=this.windowHours*3600,O=this.walRetentionHours*3600,B=Z({producerRate:this.writeRatePerSec,consumerRate:this.tailerThroughputPerSec}),x=G({writeRatePerSec:this.writeRatePerSec,tailerThroughputPerSec:this.tailerThroughputPerSec,walRetentionSeconds:O}),q=B(v),U=J({lagSeconds:Math.min(q,O),writeRatePerSec:this.writeRatePerSec,avgChangeBytes:this.avgChangeBytes});e.appendChild(i("text",{x:0,y:E,fill:"var(--ink)","font-size":12,"font-weight":600},`log-tailer replication lag over ${this.windowHours}h — ${this.writeRatePerSec>=this.tailerThroughputPerSec?`falling behind at ${C(this.writeRatePerSec-this.tailerThroughputPerSec)} changes/s`:"keeping pace"}`));const T=Math.max(this.walRetentionHours*1.2,q/3600,.1),A=a=>d+a/v*m,I=a=>M+k-Math.min(a,T)/T*k,D=4;for(let a=0;a<=D;a++){const r=T/D*a,H=I(r);e.appendChild(i("line",{x1:d,y1:H,x2:d+m,y2:H,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),e.appendChild(i("text",{x:d-8,y:H+3,fill:"var(--ink-soft)","font-size":9,"text-anchor":"end"},`${r.toFixed(1)}h`))}for(const a of[0,.25,.5,.75,1]){const r=a*v;e.appendChild(i("text",{x:A(r),y:y+14,fill:"var(--ink-soft)","font-size":9,"text-anchor":"middle"},`${(r/3600).toFixed(1)}h`))}const $=I(this.walRetentionHours);e.appendChild(i("line",{x1:d,y1:$,x2:d+m,y2:$,stroke:"var(--crimson)","stroke-width":1.5,"stroke-dasharray":"5 3"})),e.appendChild(i("text",{x:d+m-4,y:$-5,fill:"var(--crimson)","font-size":9,"text-anchor":"end"},`${this.walRetentionHours}h WAL retention`));const X=Math.max(1,Math.floor(v/240));let W="";for(let a=0;a<=v;a+=X){const r=Math.min(B(a),T*3600)/3600;W+=`${W?"L":"M"} ${A(a)} ${I(r)} `}if(e.appendChild(i("path",{d:W.trim(),fill:"none",stroke:"var(--teal)","stroke-width":2.4})),Number.isFinite(x)&&x<=v){const a=A(x);e.appendChild(i("circle",{cx:a,cy:$,r:5,fill:"var(--crimson)"})),e.appendChild(i("line",{x1:a,y1:$,x2:a,y2:y,stroke:"var(--crimson)","stroke-width":1,"stroke-dasharray":"2 3"}));const r=Math.min(d+m-4,a+6);e.appendChild(i("text",{x:r,y:y-6,fill:"var(--crimson)","font-size":9,"text-anchor":r===a+6?"start":"end"},`re-snapshot at ${_(x)}`))}e.appendChild(i("line",{x1:d,y1:y,x2:d+m,y2:y,stroke:"var(--rule)","stroke-width":1}));const S=(a,r)=>{this.ro[a]&&(this.ro[a].querySelector(".v").textContent=r)};S("missed updates/row",`${s}`),S("delete visible to poller",l?"yes (tombstone column)":"no (row just vanishes)"),S("rows/sec scanned (indexed)",`${p(u.rowsScannedPerSec)}/s`),S("rows/sec scanned (unindexed)",`${p(g.rowsScannedPerSec)}/s`),S("time to re-snapshot",_(x)),S("WAL bytes pinned by lag",`${p(U)}B`),this.verdict.innerHTML=`A row that changes <b>${this.updatesInWindow}</b> times between two polls produces <b>${t}</b> events for a log-based tailer and <b>${o}</b> for a poller — <b>${s}</b> intermediate states the poller can never recover, no matter how it's queried. ${c?"A plain <code>DELETE</code> is worse: without a tombstone column the row just stops appearing in the next SELECT — ":"With a tombstone column the poller at least "}${l?"sees the delete as an ordinary row change.":"no error, no signal, nothing to alert on."} At a ${this.pollIntervalS}s poll interval ${this.indexedOnUpdatedAt?"indexed on <code>updated_at</code>":"with no usable index"}, polling scans <b>${p(L.rowsScannedPerSec)}/s</b> against the source table — log-based CDC adds <b>0</b>, because it reads the replication log the database already writes for its own standby replicas. Below, a tailer processing <b>${C(this.tailerThroughputPerSec)}</b> changes/s against <b>${C(this.writeRatePerSec)}</b> written/s ${this.tailerThroughputPerSec>=this.writeRatePerSec?"keeps pace indefinitely":`falls behind until it needs a full re-snapshot in <b>${_(x)}</b>, once its lag exceeds the ${this.walRetentionHours}h WAL retention window`} — and until then, that lag pins <b>${p(U)}B</b> of WAL on the source database's own disk, growing for as long as the tailer stays behind.`}}customElements.get("cdc-and-log-tailing-rig")||customElements.define("cdc-and-log-tailing-rig",te);
