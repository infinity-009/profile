import{m as O,a as k,s as R}from"./mtls.BmPg_LzX.js";import"./tlswire.BJtISdZq.js";import"./congestion.01bs7TQx.js";import"./kernel.DrC0sNW-.js";import"./handshake.B8nGpk8Y.js";import"./latency-table.Z10ZPnGR.js";import"./little.BKsFjkjL.js";const _=720,q=400,r=130,N=60,D=_-r-N,I=14,M=34,y=32,U=20,K=M+2*y+U+46,C=K+20,m=30,w=20,S=.01,A=1e5,P="http://www.w3.org/2000/svg",o=(i,a={},s)=>{const d=document.createElementNS(P,i);for(const[t,u]of Object.entries(a))d.setAttribute(t,String(u));return s!==void 0&&(d.textContent=s),d},c=i=>i>=1e3?`${(i/1e3).toFixed(2)} ms`:`${i.toFixed(1)} µs`,B=i=>i>=1e6?`${(i/1e6).toFixed(1)} MB`:i>=1e3?`${(i/1e3).toFixed(2)} kB`:`${Math.round(i)} B`,x=i=>Math.round(i).toLocaleString("en-US"),f=i=>i<1?i.toFixed(2):x(i);class F extends HTMLElement{connectedCallback(){this.intOf=e=>Math.round(e/4),this.serverCountOf=e=>Math.round(1*Math.pow(5e3,e/40)),this.clientCountOf=e=>Math.round(1*Math.pow(5e5,e/40));const a=18,s=30;this.serverKeyType="ecdsa-p256",this.clientKeyType="ecdsa-p256",this.intermediates=2,this.serverCount=this.serverCountOf(a),this.clientCount=this.clientCountOf(s),this.certLifetimeDays=90,this.innerHTML=`
      <div class="panel">
        <svg viewBox="0 0 ${_} ${q}" role="img" width="100%"
             aria-label="Top: two bars, server and client, each split into its normal one-way-TLS CPU cost and what mutual TLS adds. Bottom: two bars on a log axis comparing certificate issuance rate for a server-only fleet against a server-plus-client mTLS fleet."></svg>
        <div class="readouts"></div>
        <p class="verdict"></p>
        <div class="controls">
          <label>
            server key
            <select data-s="serverKey">
              ${["ecdsa-p256","rsa-2048","rsa-4096"].map(e=>`<option value="${e}" ${e==="ecdsa-p256"?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
          <label>
            client key
            <select data-s="clientKey">
              ${["ecdsa-p256","rsa-2048","rsa-4096"].map(e=>`<option value="${e}" ${e==="ecdsa-p256"?"selected":""}>${e}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="controls">
          <label>
            chain depth (intermediates)
            <input type="range" data-s="int" min="0" max="36" step="4" value="8"
                   aria-label="Number of intermediate certificates in each chain, applied to both server and client">
            <output class="num" data-o="int"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            server fleet
            <input type="range" data-s="servers" min="0" max="40" step="1" value="18"
                   aria-label="Number of servers needing a certificate, on a log scale from 1 to 5,000">
            <output class="num" data-o="servers"></output>
          </label>
          <label>
            client fleet
            <input type="range" data-s="clients" min="0" max="40" step="1" value="30"
                   aria-label="Number of clients needing a certificate under mTLS, on a log scale from 1 to 500,000">
            <output class="num" data-o="clients"></output>
          </label>
        </div>
        <div class="controls">
          <label>
            certificate lifetime
            <input type="range" data-s="life" min="1" max="365" step="1" value="90"
                   aria-label="Certificate lifetime in days">
            <output class="num" data-o="life"></output>
          </label>
        </div>
      </div>`,this.svg=this.querySelector("svg");const d=this.querySelector(".readouts");this.ro={};for(const e of["server: normal + added","client: normal + added","client cert added to wire","server-only issuance","mTLS issuance","issuance multiple"]){const l=document.createElement("div");l.className="ro",l.innerHTML=`<span class="k">${e}</span><span class="v">—</span>`,d.appendChild(l),this.ro[e]=l}this.verdict=this.querySelector(".verdict");const t=e=>this.querySelector(`[data-s="${e}"]`);this.querySelector('[data-s="serverKey"]').addEventListener("change",()=>{this.serverKeyType=t("serverKey").value,this.draw()}),this.querySelector('[data-s="clientKey"]').addEventListener("change",()=>{this.clientKeyType=t("clientKey").value,this.draw()});const u=(e,l)=>{t(e).addEventListener("input",()=>{l(Number(t(e).value)),this.labels()}),t(e).addEventListener("change",()=>{l(Number(t(e).value)),this.draw()})};u("int",e=>this.intermediates=this.intOf(e)),u("servers",e=>this.serverCount=this.serverCountOf(e)),u("clients",e=>this.clientCount=this.clientCountOf(e)),t("life").addEventListener("input",()=>{this.certLifetimeDays=Number(t("life").value),this.labels()}),t("life").addEventListener("change",()=>{this.certLifetimeDays=Number(t("life").value),this.draw()}),this.labels(),this.draw()}labels(){this.querySelector('[data-o="int"]').textContent=this.intermediates,this.querySelector('[data-o="servers"]').textContent=x(this.serverCount),this.querySelector('[data-o="clients"]').textContent=x(this.clientCount),this.querySelector('[data-o="life"]').textContent=`${this.certLifetimeDays} d`}draw(){const a=this.svg;for(;a.firstChild;)a.removeChild(a.firstChild);const s=O({serverKeyType:this.serverKeyType,clientKeyType:this.clientKeyType,intermediates:this.intermediates,clientIntermediates:this.intermediates}),d=k({clientKeyType:this.clientKeyType,clientIntermediates:this.intermediates}),t=R({serverCount:this.serverCount,clientCount:this.clientCount,certLifetimeDays:this.certLifetimeDays});a.appendChild(o("text",{x:0,y:I,fill:"var(--ink)","font-size":12,"font-weight":600},"asymmetric CPU per handshake — normal TLS cost, plus what mTLS adds"));const u=Math.max(s.server.totalUs,s.client.totalUs)*1.15,e=D/u,l=(n,p,T,L)=>{const h=p*e,b=T*e;a.appendChild(o("rect",{x:r,y:n,width:Math.max(.5,h),height:y,fill:"var(--slate)"})),a.appendChild(o("rect",{x:r+h,y:n,width:Math.max(.5,b),height:y,fill:"var(--crimson)"})),a.appendChild(o("text",{x:r-8,y:n+y/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},L)),a.appendChild(o("text",{x:r+h+b+6,y:n+y/2+4,fill:"var(--ink-soft)","font-size":10},c(p+T)))};l(M,s.server.baseUs,s.server.addedUs,"server"),l(M+y+U,s.client.baseUs,s.client.addedUs,"client"),a.appendChild(o("text",{x:0,y:K,fill:"var(--ink)","font-size":12,"font-weight":600},`certificate issuance rate a PKI must sustain, ${this.certLifetimeDays}-day lifetime`));const g=n=>r+Math.log10(Math.max(S,Math.min(A,n))/S)/Math.log10(A/S)*D;for(const n of[.01,1,100,1e4])a.appendChild(o("line",{x1:g(n),y1:C-6,x2:g(n),y2:C+2*m+w,stroke:"var(--rule)","stroke-width":1,"stroke-dasharray":"2 4"})),a.appendChild(o("text",{x:g(n),y:C+2*m+w+16,fill:"var(--ink-soft)","font-size":10,"text-anchor":"middle"},`${f(n)}/day`));const E=(n,p,T,L)=>{const h=g(p)-r;a.appendChild(o("rect",{x:r,y:n,width:Math.max(.5,h),height:m,fill:T})),a.appendChild(o("text",{x:r-8,y:n+m/2+4,fill:"var(--ink-soft)","font-size":10,"text-anchor":"end"},L));const b=`${f(p)}/day`,$=r+h+6+b.length*5.6<_-4;a.appendChild(o("text",{x:$?r+h+6:r+h-6,y:n+m/2+4,fill:$?"var(--ink-soft)":"var(--paper)","font-size":10,"text-anchor":$?"start":"end"},b))};E(C,t.serverOnly.perDay,"var(--teal)","server-only TLS"),E(C+m+w,t.mtls.perDay,"var(--crimson)","mutual TLS");const v=(n,p)=>this.ro[n].querySelector(".v").textContent=p;v("server: normal + added",`${c(s.server.baseUs)} + ${c(s.server.addedUs)}`),v("client: normal + added",`${c(s.client.baseUs)} + ${c(s.client.addedUs)}`),v("client cert added to wire",B(d.totalBytes)),v("server-only issuance",`${f(t.serverOnly.perDay)}/day`),v("mTLS issuance",`${f(t.mtls.perDay)}/day`),v("issuance multiple",`${t.times.toFixed(0)}×`),this.verdict.textContent=`Asking the client to prove itself too does not double the handshake's crypto — it moves cost that already exists to the other side. The server's normal ${c(s.server.baseUs)} (signing once) grows by ${c(s.server.addedUs)} to verify the client's chain; the client's normal ${c(s.client.baseUs)} (verifying the server) grows by only ${c(s.client.addedUs)} to sign its own CertificateVerify — plus ${B(d.totalBytes)} of certificate and signature the client now has to send. The fleet math is the sharper cost: at ${x(this.serverCount)} servers a CA issues ${f(t.serverOnly.perDay)} certificates a day; adding ${x(this.clientCount)} clients under mTLS pushes that to ${f(t.mtls.perDay)} a day — ${t.times.toFixed(0)}× more, because now every client population, not just the server population, needs a certificate before its lifetime runs out.`}}customElements.define("mtls-rig",F);
