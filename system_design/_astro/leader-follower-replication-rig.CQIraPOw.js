import{w as it,d as ot,s as st}from"./leader-follower-replication.Cn5i0EGs.js";import"./quorum.Xv1VdxxC.js";import"./replication.WilbT5Zg.js";const J=720,lt=744,S=150,nt=40,rt=J-S-nt,c=[{id:"sync",label:"sync"},{id:"semiSync",label:"semi-sync"},{id:"async",label:"async"}],M={sync:"var(--crimson)",semiSync:"var(--amber)",async:"var(--teal)"},dt="http://www.w3.org/2000/svg",o=(s,e={},i)=>{const w=document.createElementNS(dt,s);for(const[v,k]of Object.entries(e))w.setAttribute(v,String(k));return i!==void 0&&(w.textContent=i),w},ct=s=>Math.round(s).toLocaleString("en-US"),T=s=>Number.isFinite(s)?Math.abs(s)>=1e6?`${(s/1e6).toFixed(1)}M`:Math.abs(s)>=1e3?`${(s/1e3).toFixed(1)}k`:String(Math.round(s)):"—",I=s=>s>=1e3?`${(s/1e3).toFixed(2)} s`:`${s.toFixed(1)} ms`,K=s=>`${(s*100).toFixed(1)}%`;class ht extends HTMLElement{connectedCallback(){const e="async";this.mode=e,this.followerCount=3,this.followerRttMs=50,this.failPct=5,this.writeRate=8e3,this.lagSeconds=9.5,this.innerHTML=`
      <div class="panel">
        <div class="controls" data-modes>
          ${c.map(a=>`<button type="button" data-mode="${a.id}" aria-pressed="${a.id===e}">${a.label}</button>`).join("")}
        </div>
        <svg viewBox="0 0 ${J} ${lt}" role="img" width="100%"
             aria-label="Top: a leader sending a write to several followers, with the client acknowledgment firing at a point in time that depends on the selected replication mode. Bottom: bar comparisons of ack latency, write availability, and writes at risk across all three modes at the current slider settings."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            follower count
            <input type="range" data-s="count" min="1" max="8" step="1" value="3"
                   aria-label="Number of follower replicas">
            <output class="num" data-o="count"></output>
          </label>
          <label>
            follower RTT
            <input type="range" data-s="rtt" min="5" max="400" step="5" value="50"
                   aria-label="Round-trip time in milliseconds to a follower">
            <output class="num" data-o="rtt"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            follower failure probability
            <input type="range" data-s="fail" min="0" max="50" step="1" value="5"
                   aria-label="Probability, in percent, that any one follower is unreachable right now">
            <output class="num" data-o="fail"></output>
          </label>
          <label>
            write rate
            <input type="range" data-s="rate" min="100" max="20000" step="100" value="8000"
                   aria-label="Writes per second arriving at the leader">
            <output class="num" data-o="rate"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            replication lag at crash
            <input type="range" data-s="lag" min="0" max="30" step="0.5" value="${9.5}"
                   aria-label="Seconds of replication lag on the async follower at the instant the leader crashes">
            <output class="num" data-o="lag"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const n=this.querySelector(".readouts");this.ro={};for(const a of["ack latency","required acks","write availability","writes at risk","bytes at risk"]){const l=document.createElement("div");l.className="ro",l.innerHTML=`<span class="k">${a}</span><span class="v">—</span>`,n.appendChild(l),this.ro[a]=l}this.verdict=this.querySelector(".verdict");for(const a of this.querySelectorAll("[data-mode]"))a.addEventListener("click",()=>{this.mode=a.dataset.mode;for(const l of this.querySelectorAll("[data-mode]"))l.setAttribute("aria-pressed",String(l===a));this.draw()});const h=a=>this.querySelector(`[data-s="${a}"]`),r=(a,l,p=Number)=>{h(a).addEventListener("input",()=>{this[l]=p(h(a).value),this.labels()}),h(a).addEventListener("change",()=>{this[l]=p(h(a).value),this.draw()})};r("count","followerCount"),r("rtt","followerRttMs"),r("fail","failPct"),r("rate","writeRate"),r("lag","lagSeconds"),this.labels(),this.draw()}labels(){this.querySelector('[data-o="count"]').textContent=this.followerCount,this.querySelector('[data-o="rtt"]').textContent=`${this.followerRttMs} ms`,this.querySelector('[data-o="fail"]').textContent=`${this.failPct}%`,this.querySelector('[data-o="rate"]').textContent=`${ct(this.writeRate)}/s`,this.querySelector('[data-o="lag"]').textContent=`${this.lagSeconds.toFixed(1)} s`}draw(){const e=this.svg;for(;e.firstChild;)e.removeChild(e.firstChild);const i=this.followerCount,w=this.failPct/100,v=this.followerRttMs/1e3,k={lagSeconds:this.lagSeconds,writeRate:this.writeRate,followerRttSeconds:v},b=Object.fromEntries(c.map(t=>[t.id,{latency:st(this.followerRttMs,i,t.id),loss:ot(k,t.id),avail:it(w,t.id,i)}])),n=b[this.mode],h=this.mode==="sync"?i:this.mode==="semiSync"?Math.min(1,i):0,r=34,a=300,l=60,p=r+14,R=96,D=30,y=60,g=r+a/2-22,C=116,U=46,O=560,B=130,q=34,Q=i>1?(a-q)/(i-1):0;e.appendChild(o("text",{x:0,y:14,fill:"var(--ink)","font-size":12,"font-weight":600},`${c.find(t=>t.id===this.mode).label} — waits for ${h} of ${i} follower${i===1?"":"s"} to ack`)),e.appendChild(o("rect",{x:l,y:p,width:R,height:D,fill:"none",stroke:"var(--rule)",rx:3})),e.appendChild(o("text",{x:l+R/2,y:p+D/2+4,"text-anchor":"middle","font-size":10,fill:"var(--ink-soft)"},"client")),e.appendChild(o("rect",{x:y,y:g,width:C,height:U,fill:"var(--slate)",rx:3})),e.appendChild(o("text",{x:y+C/2,y:g+U/2+4,"text-anchor":"middle","font-size":11,fill:"var(--paper)","font-weight":600},"leader"));const G=[];for(let t=0;t<i;t++){const d=r+t*Q,L=d+q/2,W=i>1?.55+t/(i-1)*.9:1,E=v*W;G.push(E);const H=g+U/2,_=`M ${y+C} ${H} L ${O} ${L}`;e.appendChild(o("path",{d:_,stroke:"var(--rule)","stroke-width":1.5,fill:"none"})),e.appendChild(o("rect",{x:O,y:d,width:B,height:q,fill:"none",stroke:"var(--ink-soft)",rx:3})),e.appendChild(o("text",{x:O+B/2,y:L+4,"text-anchor":"middle","font-size":10,fill:"var(--ink-soft)"},`follower ${t+1}`));const A=Math.max(.4,Math.min(2.6,E*8+.3)),m=o("circle",{r:4,fill:"var(--slate)"});m.appendChild(o("animateMotion",{path:_,dur:`${A.toFixed(2)}s`,repeatCount:"indefinite"})),e.appendChild(m)}const N=[...G].sort((t,d)=>t-d),Z=this.mode==="async"?.05:this.mode==="semiSync"?N[0]??0:N[i-1]??0,tt=Math.max(.15,Math.min(2.6,Z*8+.3)),X=`M ${y+C/2} ${g} L ${l+R/2} ${p+D}`;e.appendChild(o("path",{d:X,stroke:M[this.mode],"stroke-width":1.5,"stroke-dasharray":"3 3",fill:"none"}));const Y=o("circle",{r:5,fill:M[this.mode]});Y.appendChild(o("animateMotion",{path:X,dur:"0.5s",begin:`${tt.toFixed(2)}s`,repeatCount:"indefinite"})),e.appendChild(Y),e.appendChild(o("text",{x:(y+l)/2-60,y:(g+p)/2-6,fill:M[this.mode],"font-size":9},"ack"));const et=r+a+34,x=26,j=10,P=(t,d,L,W,E)=>{e.appendChild(o("text",{x:0,y:d-8,fill:"var(--ink)","font-size":11,"font-weight":600},t));const H=Math.max(...L.map(u=>u.value),1e-9);return c.forEach((u,_)=>{const A=L.find(at=>at.id===u.id).value,m=d+_*(x+j),F=Math.max(.5,A/H*rt);e.appendChild(o("text",{x:S-8,y:m+x/2+4,"text-anchor":"end","font-size":10,fill:"var(--ink-soft)"},u.label)),e.appendChild(o("rect",{x:S,y:m,width:F,height:x,fill:M[u.id],opacity:u.id===this.mode?1:.45}));const V=`${W(A)}${E??""}`,z=F>V.length*6+12;e.appendChild(o("text",{x:z?S+F/2:S+F+6,y:m+x/2+4,"text-anchor":z?"middle":"start",fill:z?"var(--paper)":"var(--ink-soft)","font-size":10,"font-weight":600},V))}),d+c.length*(x+j)};let f=et;f=P("ack latency added",f,c.map(t=>({id:t.id,value:b[t.id].latency})),t=>I(t).replace(" ","")),f+=14,f=P("writes at risk on a leader crash",f,c.map(t=>({id:t.id,value:b[t.id].loss})),T," wr"),f+=14,P("write availability",f,c.map(t=>({id:t.id,value:b[t.id].avail})),t=>(t*100).toFixed(1),"%");const $=(t,d)=>this.ro[t].querySelector(".v").textContent=d;$("ack latency",I(n.latency)),$("required acks",`${h} of ${i}`),$("write availability",K(n.avail)),$("writes at risk",T(n.loss)),$("bytes at risk",`${T(n.loss*1024)} B`),this.verdict.innerHTML=`<b>${c.find(t=>t.id===this.mode).label}</b> at ${i} follower${i===1?"":"s"}, ${this.followerRttMs} ms RTT adds <b>${I(n.latency)}</b> of ack latency and is writable <b>${K(n.avail)}</b> of the time at a ${this.failPct}% per-follower failure rate. ${this.mode==="async"?`If the leader crashes with ${this.lagSeconds.toFixed(1)} s of lag on the follower, <b>${T(n.loss)} acknowledged writes</b> are gone — that lag is exactly what <code>replication-lag.mdx</code> measures, run through <code>writesLostOnFailover</code> unchanged.`:this.mode==="sync"?"A crash loses <b>zero</b> acknowledged writes, because none was ever acknowledged without the follower already holding it.":`A crash risks at most <b>${T(n.loss)} writes</b> — whatever arrived in the single in-flight round trip to the fastest follower, not the full replication lag async carries.`}`}}customElements.define("leader-follower-replication-rig",ht);
