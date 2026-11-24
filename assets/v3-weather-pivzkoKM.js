import{k as ee,a as ge,a1 as We,_ as uo,$ as fo,a2 as mo,R as Vn,a3 as un,a0 as ho,V as $t,f as Kt,a4 as Zn,b as Wn,B as Dt,a5 as Ot,a6 as ti,n as hn,S as Bt,a7 as ni,a8 as oi,a9 as ii,aa as ai,P as ri,J as go,ab as po,ac as vo,g as dn,ad as Yt,A as yo,d as si,I as li,M as ci,F as Jt,Q as ui,ae as fi,af as wo,D as So}from"./three-B1FLUm5L.js";const It=Math.PI/180,yn=Math.PI*2,we=Object.freeze({ASTRONOMICAL_NIGHT:"astronomical_night",BLUE_HOUR:"blue_hour",DAWN:"dawn",GOLDEN_HOUR:"golden_hour",DAYLIGHT:"daylight",DUSK:"dusk",MOONLIT_NIGHT:"moonlit_night"}),xo=Object.freeze({[we.ASTRONOMICAL_NIGHT]:"Astronomical Night",[we.BLUE_HOUR]:"Blue Hour",[we.DAWN]:"Dawn",[we.GOLDEN_HOUR]:"Golden Hour",[we.DAYLIGHT]:"Daylight",[we.DUSK]:"Dusk",[we.MOONLIT_NIGHT]:"Moonlit Night"}),Ze=Object.freeze({initialHour:22.5,timeScale:0,latitude:46.5,moonPhase:.94,dayOfYear:138,solarDeclinationDeg:8}),he=Object.freeze({nightMoonLight:new ee(11123944),nightHemiSky:new ee(6717624),nightHemiGround:new ee(2760726),nightFog:new ee(1713463),nightZenith:new ee().setRGB(.016,.036,.078,We),nightHorizon:new ee(1713463).multiplyScalar(1.05),nightMoonGlow:new ee().setRGB(.45,.52,.68,We),astroHemiSky:new ee(3031406),astroHemiGround:new ee(1446414),astroFog:new ee(857380),astroZenith:new ee().setRGB(.006,.014,.036,We),astroHorizon:new ee().setRGB(.012,.022,.044,We),blueHemiSky:new ee(5010104),blueHemiGround:new ee(2433578),blueFog:new ee(2439258),blueZenith:new ee().setRGB(.028,.068,.175,We),blueHorizon:new ee().setRGB(.11,.17,.29,We),dawnSunLight:new ee(16755307),dawnHemiSky:new ee(8952264),dawnHemiGround:new ee(4863274),dawnFog:new ee(7298669),dawnZenith:new ee().setRGB(.065,.135,.3,We),dawnHorizon:new ee().setRGB(.62,.31,.21,We),dawnSunGlow:new ee().setRGB(1,.54,.28,We),duskSunLight:new ee(16749650),duskHemiSky:new ee(8160442),duskHemiGround:new ee(4468260),duskFog:new ee(6573148),duskZenith:new ee().setRGB(.055,.105,.26,We),duskHorizon:new ee().setRGB(.66,.25,.16,We),duskSunGlow:new ee().setRGB(1,.44,.2,We),goldenSunLight:new ee(16764808),goldenHemiSky:new ee(9286370),goldenHemiGround:new ee(5982774),goldenFog:new ee(9146276),goldenZenith:new ee().setRGB(.11,.25,.54,We),goldenHorizon:new ee().setRGB(.76,.52,.32,We),goldenSunGlow:new ee().setRGB(1,.76,.44,We),daySunLight:new ee(16774370),dayHemiSky:new ee(10406136),dayHemiGround:new ee(5394494),dayFog:new ee(10401492),dayZenith:new ee().setRGB(.12,.31,.72,We),dayHorizon:new ee().setRGB(.54,.68,.85,We),daySunGlow:new ee().setRGB(1,.94,.82,We)}),mi=Object.freeze([he.astroHemiSky,he.blueHemiSky,he.dawnHemiSky,he.goldenHemiSky,he.dayHemiSky,he.duskHemiSky,he.nightHemiSky]),hi=Object.freeze([he.astroHemiGround,he.blueHemiGround,he.dawnHemiGround,he.goldenHemiGround,he.dayHemiGround,he.duskHemiGround,he.nightHemiGround]),di=Object.freeze([he.astroFog,he.blueFog,he.dawnFog,he.goldenFog,he.dayFog,he.duskFog,he.nightFog]),gi=Object.freeze([he.astroZenith,he.blueZenith,he.dawnZenith,he.goldenZenith,he.dayZenith,he.duskZenith,he.nightZenith]),pi=Object.freeze([he.astroHorizon,he.blueHorizon,he.dawnHorizon,he.goldenHorizon,he.dayHorizon,he.duskHorizon,he.nightHorizon]),qn=new ge,Xn=new ge,$n=new ee,xe=new Float64Array(7);function xt(e,n,t){return e<n?n:e>t?t:e}function bt(e){return e<0?0:e>1?1:e}function Re(e,n,t){if(e===n)return t<e?0:1;const i=bt((t-e)/(n-e));return i*i*(3-2*i)}function Et(e){if(!Number.isFinite(e))return Ze.initialHour;const n=e%24;return n<0?n+24:n}function Zt(e,n,t){let i=0,a=0,o=0,c=0;for(let s=0;s<n.length;s++){const r=t[s];if(r<=0)continue;const h=n[s];i+=h.r*r,a+=h.g*r,o+=h.b*r,c+=r}if(c>1e-6){const s=1/c;e.setRGB(i*s,a*s,o*s,We)}return e}function Yn(e,n,t){if(e.y>=n)return t.copy(e).normalize();const i=e.x*e.x+e.z*e.z,a=Math.sqrt(Math.max(0,1-n*n));if(i>1e-8){const o=a/Math.sqrt(i);t.set(e.x*o,n,e.z*o)}else t.set(0,1,0);return t.normalize()}function vi(e,n,t,i){const a=bt(t);i.set(e.x+(n.x-e.x)*a,e.y+(n.y-e.y)*a,e.z+(n.z-e.z)*a);const o=e.x*n.x+e.y*n.y+e.z*n.z;if(o<-.5){const s=Math.sin(a*Math.PI)*(.35+.35*(-o-.5));i.y+=s}const c=i.length();return c<1e-6?i.set(0,1,0):i.multiplyScalar(1/c),i}function bo(){return{hour:Ze.initialHour,dayFraction:Ze.initialHour/24,latitude:Ze.latitude,mood:we.MOONLIT_NIGHT,moodLabel:xo[we.MOONLIT_NIGHT],moodWeights:{[we.ASTRONOMICAL_NIGHT]:0,[we.BLUE_HOUR]:0,[we.DAWN]:0,[we.GOLDEN_HOUR]:0,[we.DAYLIGHT]:0,[we.DUSK]:0,[we.MOONLIT_NIGHT]:1},sunDir:new ge(0,-1,0),sunAltitude:-.55,sunAzimuth:0,moonDir:new ge(.3,.23,-.93).normalize(),moonAltitude:.23,moonAzimuth:.31,moonPhase:Ze.moonPhase,moonIllumination:.94,siderealAngle:0,dayFactor:0,nightFactor:1,twilightFactor:0,primaryLight:{source:"moon",direction:new ge(.3,.28,-.91).normalize(),color:new ee(11123944),intensity:1.5,shadowStrength:1},hemisphereLight:{skyColor:new ee(6717624),groundColor:new ee(2760726),intensity:.75},fogColor:new ee(1713463),fogDensityScale:1,skyZenith:new ee().setRGB(.016,.036,.078,We),skyHorizon:new ee(1713463).multiplyScalar(1.05),sunGlowColor:new ee().setRGB(1,.76,.44,We),moonGlowColor:new ee().setRGB(.45,.52,.68,We),starIntensity:.94,milkyWayIntensity:.72,auroraEligibility:.88,lampsOn:1,exposure:1.12}}function yi(e,n=Ze.latitude,t={},i=null){const a=i??bo(),o=Et(e),c=xt(Number.isFinite(n)?n:Ze.latitude,-85,85),s=c*It,r=bt(Number.isFinite(t.moonPhase)?t.moonPhase:Ze.moonPhase),d=(Number.isFinite(t.solarDeclinationDeg)?xt(t.solarDeclinationDeg,-23.44,23.44):Ze.solarDeclinationDeg)*It,l=(o-12)/24*yn,u=Math.sin(s),f=Math.cos(s),F=Math.sin(d),p=Math.cos(d),L=Math.sin(l),C=Math.cos(l),m=-p*L,b=u*F+f*p*C,z=u*p*C-f*F;a.sunDir.set(m,b,z).normalize();const M=Math.asin(xt(a.sunDir.y,-1,1)),P=Math.atan2(a.sunDir.x,-a.sunDir.z),H=(r-Ze.moonPhase)*Math.PI,S=(o-23.45)/24*yn+H,R=(Math.abs(c)-Ze.latitude)*.18,A=xt(53.5+R,32,72)*It,O=-21*It,x=Math.sin(A),ne=Math.cos(A),w=Math.sin(O),v=Math.cos(O),V=Math.sin(S),y=Math.cos(S),$=-v*V,ie=x*w+ne*v*y,ce=-(x*v*y-ne*w);a.moonDir.set($,ie,ce).normalize();const X=Math.asin(xt(a.moonDir.y,-1,1)),_=Math.atan2(a.moonDir.x,-a.moonDir.z),I=.5*(1-Math.cos(r*Math.PI)),N=M/It,E=X/It,B=o<12,te=Re(14,22,N),G=Re(2.5,8.5,N)*(1-te),Z=Re(-5.5,-.5,N)*(1-Re(2.5,8.5,N)),q=B?Z:0,T=B?0:Z,U=Re(-13.5,-8.5,N)*(1-Re(-5.5,-.5,N)),se=1-Re(-13.5,-8.5,N),ue=Re(-1.5,4.5,E)*Re(.06,.28,I),Y=se*ue,j=se*(1-ue),Q=j+U+q+G+te+T+Y,fe=Q>1e-6?1/Q:1,le=a.moodWeights;le[we.ASTRONOMICAL_NIGHT]=j*fe,le[we.BLUE_HOUR]=U*fe,le[we.DAWN]=q*fe,le[we.GOLDEN_HOUR]=G*fe,le[we.DAYLIGHT]=te*fe,le[we.DUSK]=T*fe,le[we.MOONLIT_NIGHT]=Y*fe;let Se=we.MOONLIT_NIGHT,Me=-1;for(const K in le)le[K]>Me&&(Me=le[K],Se=K);const ve=Re(-4,14,N),_e=1-Re(-12,-1.5,N),Ge=bt(le[we.BLUE_HOUR]+le[we.DAWN]+le[we.DUSK]+le[we.GOLDEN_HOUR]*.45),Fe=Re(-1.5,12,N),Te=1-Re(-12.5,-5.5,N),Le=Re(-1,7.5,E),Ie=Te*Le*(.45+.55*I);Yn(a.sunDir,.28,qn),Yn(a.moonDir,.28,Xn);const ke=1-Re(-5.5,-1.5,N);if(vi(qn,Xn,ke,a.primaryLight.direction),Fe>0){a.primaryLight.source="sun";const K=1-Re(2,22,N),re=B?he.dawnSunLight:he.duskSunLight;$n.copy(he.daySunLight).lerp(he.goldenSunLight,Re(24,10,N)),a.primaryLight.color.copy($n).lerp(re,K*.85);const me=.65+.35*Re(10,48,N);a.primaryLight.intensity=2.85*Math.pow(Fe,1.15)*me,a.primaryLight.shadowStrength=Re(.02,.35,Fe)}else if(Ie>0){a.primaryLight.source="moon",a.primaryLight.color.copy(he.nightMoonLight);const re=(.45+.55*I)/(.45+.55*(.5*(1-Math.cos(Ze.moonPhase*Math.PI))));a.primaryLight.intensity=1.5*Te*Le*xt(re,.25,1.05),a.primaryLight.shadowStrength=Re(.05,.4,Ie)}else a.primaryLight.source="twilight",a.primaryLight.color.copy(he.blueHemiSky),a.primaryLight.intensity=0,a.primaryLight.shadowStrength=0;xe[0]=le[we.ASTRONOMICAL_NIGHT],xe[1]=le[we.BLUE_HOUR],xe[2]=le[we.DAWN],xe[3]=le[we.GOLDEN_HOUR],xe[4]=le[we.DAYLIGHT],xe[5]=le[we.DUSK],xe[6]=le[we.MOONLIT_NIGHT],Zt(a.hemisphereLight.skyColor,mi,xe),Zt(a.hemisphereLight.groundColor,hi,xe),a.hemisphereLight.intensity=xe[0]*.46+xe[1]*.8+xe[2]*.88+xe[3]*.96+xe[4]*1.05+xe[5]*.86+xe[6]*.75,Zt(a.fogColor,di,xe),a.fogDensityScale=xe[0]*.94+xe[1]*1.06+xe[2]*1.18+xe[3]*.88+xe[4]*.72+xe[5]*1.08+xe[6]*1,Zt(a.skyZenith,gi,xe),Zt(a.skyHorizon,pi,xe);const Ee=B?he.dawnSunGlow:he.duskSunGlow;a.sunGlowColor.copy(he.daySunGlow).lerp(he.goldenSunGlow,Re(26,8,N)).lerp(Ee,Re(6,-3,N)),a.moonGlowColor.copy(he.nightMoonGlow);const Ae=1-Re(-13,-2,N),g=.06*ue;a.starIntensity=Ae<=0?0:bt(Ae*(1-g));const oe=1-Re(-16,-6.5,N);a.milkyWayIntensity=oe<=0?0:bt(oe*(1-.34*ue));const D=1-Re(-14.5,-6,N),W=Math.abs(((o-23.75+12)%24+24)%24-12),ae=.72+.28*Re(6,.5,W);return a.auroraEligibility=D<=0?0:bt(D*ae*(1-.14*ue)),a.lampsOn=1-Re(-4,5,N),a.exposure=xe[0]*1.18+xe[1]*1.1+xe[2]*1.06+xe[3]*1.02+xe[4]*1+xe[5]*1.06+xe[6]*1.12,a.hour=o,a.dayFraction=o/24,a.latitude=c,a.mood=Se,a.moodLabel=xo[Se],a.sunAltitude=M,a.sunAzimuth=P,a.moonAltitude=X,a.moonAzimuth=_,a.moonPhase=r,a.moonIllumination=I,a.siderealAngle=o/24*yn,a.dayFactor=ve,a.nightFactor=_e,a.twilightFactor=Ge,a}function Kn(e,n,t){if(!e||typeof e.on!="function")return()=>{};const i=e.on(n,t);return typeof i=="function"?i:()=>{typeof e.off=="function"?e.off(n,t):typeof e.removeListener=="function"&&e.removeListener(n,t)}}function ra({initialHour:e=Ze.initialHour,timeScale:n=Ze.timeScale,latitude:t=Ze.latitude,moonPhase:i=Ze.moonPhase,solarDeclinationDeg:a=Ze.solarDeclinationDeg,bus:o=null}={}){let c=Et(e),s=Number.isFinite(n)?n:0,r=xt(Number.isFinite(t)?t:Ze.latitude,-85,85),h=bt(Number.isFinite(i)?i:Ze.moonPhase),d=Number.isFinite(a)?xt(a,-23.44,23.44):Ze.solarDeclinationDeg,l=!1;const u={moonPhase:h,solarDeclinationDeg:d},f=bo(),F={hour:c,dayFraction:c/24,mood:f.mood,lampsOn:f.lampsOn,starIntensity:f.starIntensity,state:f};function p(m=!1){return u.moonPhase=h,u.solarDeclinationDeg=d,yi(c,r,u,f),F.hour=f.hour,F.dayFraction=f.dayFraction,F.mood=f.mood,F.lampsOn=f.lampsOn,F.starIntensity=f.starIntensity,m&&o&&typeof o.emit=="function"&&o.emit("time:tick",F),f}p(!1);function L(m){if(!(l||m===void 0||m===null)){if(typeof m=="number"){Number.isFinite(m)&&(c=Et(m),p(!0));return}if(typeof m=="object"){let b=!1;const z=m.hour??m.time??m.timeOfDay;typeof z=="number"&&Number.isFinite(z)&&(c=Et(z),b=!0),typeof m.timeScale=="number"&&Number.isFinite(m.timeScale)&&(s=m.timeScale,b=!0),typeof m.latitude=="number"&&Number.isFinite(m.latitude)&&(r=xt(m.latitude,-85,85),b=!0),typeof m.moonPhase=="number"&&Number.isFinite(m.moonPhase)&&(h=bt(m.moonPhase),b=!0),b&&p(!0)}}}const C=[Kn(o,"dev:setTime",L),Kn(o,"time:set",L)];return{update(m=0){if(l)return f;const b=Number.isFinite(m)&&m>0?m:0;return b>0&&s!==0&&(c=Et(c+b*s/3600),p(!0)),f},setTime(m){return l||!Number.isFinite(m)?f:(c=Et(m),p(!0))},setHour(m){return this.setTime(m)},getHour(){return c},setTimeScale(m){return l||!Number.isFinite(m)||(s=m),s},getTimeScale(){return s},setLatitude(m){return l||!Number.isFinite(m)?f:(r=xt(m,-85,85),p(!0))},setMoonPhase(m){return l||!Number.isFinite(m)?f:(h=bt(m),p(!0))},getState(){return f},applyToLights({primaryLight:m=null,hemisphereLight:b=null,fog:z=null,renderer:M=null,lightDistance:P=70}={}){return m&&(m.color.copy(f.primaryLight.color),m.intensity=f.primaryLight.intensity,m.target?m.position.copy(m.target.position).addScaledVector(f.primaryLight.direction,P):m.position.copy(f.primaryLight.direction).multiplyScalar(P)),b&&(b.color.copy(f.hemisphereLight.skyColor),b.groundColor.copy(f.hemisphereLight.groundColor),b.intensity=f.hemisphereLight.intensity),z&&z.color&&z.color.copy(f.fogColor),M&&typeof M.toneMappingExposure=="number"&&(M.toneMappingExposure=f.exposure),f},dispose(){if(!l){l=!0;for(const m of C)m();C.length=0}}}}const Lt=Math.PI*2,An=128,wi=96,Ke=(e,n,t)=>e<n?n:e>t?t:e,Be=(e,n)=>Number.isFinite(e)?e:n,Rt=e=>e-Math.floor(e);function en(e,n,t,i){const a=(e%t+t)%t,o=(n%t+t)%t;let c=Math.imul(a,374761393)+Math.imul(o,668265263)+Math.imul(i,1442695041)|0;return c=Math.imul(c^c>>>13,1274126177),c=c^c>>>16,(c>>>0)/4294967296}function Si(e,n,t,i){const a=Rt(e)*t,o=Rt(n)*t,c=Math.floor(a),s=Math.floor(o),r=a-c,h=o-s,d=r*r*r*(r*(r*6-15)+10),l=h*h*h*(h*(h*6-15)+10),u=en(c,s,t,i),f=en(c+1,s,t,i),F=en(c,s+1,t,i),p=en(c+1,s+1,t,i),L=u+(f-u)*d,C=F+(p-F)*d;return L+(C-L)*l}function zn(e,n,t,i,a){let o=0,c=1,s=0,r=t;for(let h=0;h<i;h++)o+=Si(e,n,r,a+h*97)*c,s+=c,c*=.5,r*=2;return s>0?o/s:.5}function tn(e,n,t){const i=zn(e,n,3,3,t+71)-.5,a=.16*Math.sin(Lt*(e+n)+.7),o=.11*Math.cos(Lt*(2*e-n)+1.9),c=.06*Math.sin(Lt*(e-2*n)+.3);return i+a+o+c}function xi(e=An,n=1337){const t=Math.max(16,Math.floor(Be(e,An))),i=Math.floor(Be(n,1337)),a=new Uint8Array(t*t*4),o=new Float32Array(t*t),c=new Float32Array(t*t),s=new Float32Array(t*t),r=new Float32Array(t*t),h=1/t;let d=1e-4,l=1/0,u=-1/0,f=1/0,F=-1/0;for(let m=0;m<t;m++){const b=(m+.5)/t;for(let z=0;z<t;z++){const M=(z+.5)/t,P=m*t+z,H=(tn(M+h,b,i)-tn(M-h,b,i))/(2*h),S=(tn(M,b+h,i)-tn(M,b-h,i))/(2*h),R=-H;o[P]=S,c[P]=R;const A=Math.hypot(S,R);A>d&&(d=A);const O=.5+.5*Math.sin(Lt*M+.35*Math.sin(Lt*b)),x=.5+.5*Math.cos(Lt*(M+b)+1.1),ne=.5+.5*Math.sin(Lt*(2*M-b)+2.4),w=zn(M,b,2,3,i+193),v=.34*O+.22*x+.14*ne+.3*w;s[P]=v,v<l&&(l=v),v>u&&(u=v);const y=.55*zn(M,b,6,3,i+409)+.45*(A/(A+2.5));r[P]=y,y<f&&(f=y),y>F&&(F=y)}}const p=Math.max(u-l,1e-4),L=Math.max(F-f,1e-4),C=1/Math.max(d*.78,1e-4);for(let m=0;m<t*t;m++){const b=m*4,z=Math.tanh(o[m]*C),M=Math.tanh(c[m]*C),P=.04+.92*((s[m]-l)/p),H=.05+.9*((r[m]-f)/L);a[b]=Ke(127+Math.round(Ke(z,-1,1)*127),0,254),a[b+1]=Ke(127+Math.round(Ke(M,-1,1)*127),0,254),a[b+2]=Ke(Math.round(P*255),0,255),a[b+3]=Ke(Math.round(H*255),0,255)}return a}function sa(e={}){const n=Math.max(16,Math.floor(Be(e.size,An))),t=Math.max(8,Be(e.worldSpan,wi)),i=1/t,a=Math.floor(Be(e.seed,1337));let o=.8660254,c=.5;Number.isFinite(e.direction)?(o=Math.cos(e.direction),c=Math.sin(e.direction)):Array.isArray(e.baseDir)&&e.baseDir.length>=2?(o=Be(e.baseDir[0],o),c=Be(e.baseDir[1],c)):(o=Be(e.baseDirX,o),c=Be(e.baseDirZ,c));const s=Math.hypot(o,c);s>1e-5?(o/=s,c/=s):(o=1,c=0);const r=Math.max(.1,Be(e.baseSpeed,2.4)),h=Ke(Be(e.gustAmp??e.gustStrength,.95),0,3),d=Ke(Be(e.turbulence,.55),0,2.5),l=Math.max(.2,Be(e.advectSpeed,5.5)),u=Math.max(0,Be(e.responseRate,2.4)),f=xi(n,a),F=new Float32Array(n*n*4);for(let Y=0;Y<n*n;Y++){const j=Y*4;F[j]=Ke((f[j]-127)/127,-1,1),F[j+1]=Ke((f[j+1]-127)/127,-1,1),F[j+2]=f[j+2]/255,F[j+3]=f[j+3]/255}const p=new uo(f,n,n,fo,mo);p.wrapS=Vn,p.wrapT=Vn,p.magFilter=un,p.minFilter=un,p.generateMipmaps=!1,p.colorSpace=ho,p.flipY=!1,p.needsUpdate=!0;let L=0,C=Ke(Be(e.strength??e.windStrength,1),0,6),m=C,b=Ke(Be(e.storm??e.stormFactor,0),0,1),z=b,M=o,P=c,H=o,k=c,S=1,R=1,A=0,O=0,x=0,ne=0,w=h*(1+.85*b)*S,v=d*(1+.9*b),V=!1;const y={uWindMap:{value:p},uWindTime:{value:L},uWindDir:{value:new Kt(M,P)},uWindStrength:{value:C},uWindScroll:{value:new $t(0,0,0,0)},uWindMeta:{value:new $t(i,r,w,v)}};function $(){w=h*(1+.85*b)*S,v=d*(1+.9*b),y.uWindTime.value=L,y.uWindDir.value.set(M,P),y.uWindStrength.value=C,y.uWindScroll.value.set(A,O,x,ne),y.uWindMeta.value.set(i,r,w,v)}let ie=0,ce=0,X=0,_=0;function I(Y,j){const Q=Rt(Y)*n-.5,fe=Rt(j)*n-.5,le=Math.floor(Q),Se=Math.floor(fe),Me=Q-le,ve=fe-Se,_e=(le%n+n)%n,Ge=_e+1<n?_e+1:0,Fe=(Se%n+n)%n,Te=Fe+1<n?Fe+1:0,Le=(Fe*n+_e)*4,Ie=(Fe*n+Ge)*4,ke=(Te*n+_e)*4,Ee=(Te*n+Ge)*4,Ae=(1-Me)*(1-ve),g=Me*(1-ve),oe=(1-Me)*ve,D=Me*ve;ie=F[Le]*Ae+F[Ie]*g+F[ke]*oe+F[Ee]*D,ce=F[Le+1]*Ae+F[Ie+1]*g+F[ke+1]*oe+F[Ee+1]*D,X=F[Le+2]*Ae+F[Ie+2]*g+F[ke+2]*oe+F[Ee+2]*D,_=F[Le+3]*Ae+F[Ie+3]*g+F[ke+3]*oe+F[Ee+3]*D}function N(Y,j=!1){if(Y!=null){if(typeof Y=="number")Number.isFinite(Y)&&(m=Ke(Y,0,6));else if(typeof Y=="object"){const Q=Y.windStrength??Y.strength;Number.isFinite(Q)&&(m=Ke(Q,0,6));const fe=Y.storm??Y.stormFactor??Y.stormDarkening;if(Number.isFinite(fe)&&(z=Ke(fe,0,1)),Number.isFinite(Y.gustiness)&&(R=Ke(Y.gustiness,0,2.5)),Number.isFinite(Y.direction))H=Math.cos(Y.direction),k=Math.sin(Y.direction);else if(Number.isFinite(Y.dirX)||Number.isFinite(Y.dirZ)){const le=Be(Y.dirX,H),Se=Be(Y.dirZ,k),Me=Math.hypot(le,Se);Me>1e-5&&(H=le/Me,k=Se/Me)}}j&&(C=m,b=z,S=R,M=H,P=k,$())}}function E(Y,j){if(V)return;const Q=Ke(Be(Y,0),0,.1);if(j!==void 0&&N(j,!1),Q>0){L+=Q;const fe=u>0?1-Math.exp(-Q*u):1;C+=(m-C)*fe,b+=(z-b)*fe,S+=(R-S)*fe;const le=M+(H-M)*fe,Se=P+(k-P)*fe,Me=Math.hypot(le,Se);Me>1e-5&&(M=le/Me,P=Se/Me);const ve=(.45+.55*C)*(1+.45*b),_e=l*ve*Q*i;A=Rt(A+M*_e),O=Rt(O+P*_e);const Ge=.82903757,Fe=.5591929,Te=M*Ge-P*Fe,Le=M*Fe+P*Ge,Ie=_e*1.42;x=Rt(x+Te*Ie),ne=Rt(ne+Le*Ie)}$()}function B(Y,j,Q){const fe=Be(Y,0),le=Be(j,0),Se=fe*i-A,Me=le*i-O;I(Se,Me);const ve=ie,_e=ce,Ge=X,Fe=fe*(i*1.93)-x,Te=le*(i*1.93)-ne;I(Fe,Te);const Le=ie,Ie=ce,ke=X,Ee=(ve*.68+Le*.32)*v,Ae=(_e*.68+Ie*.32)*v,g=Ke(Ge*.72+ke*.28,0,1),oe=.45+g*w,D=C*r,W=(M*oe+Ee)*D,ae=(P*oe+Ae)*D,K=Math.hypot(W,ae);return Q?(Q.vx=W,Q.vz=ae,Q.gust=g,Q.strength=K,Q):{vx:W,vz:ae,gust:g,strength:K}}function te(Y,j,Q){return I(Be(Y,0),Be(j,0)),Q?(Q.r=ie,Q.g=ce,Q.b=X,Q.a=_,Q):{r:ie,g:ce,b:X,a:_}}function G(Y,j=!1){N(Y,j)}function Z(Y,j=!1){N({strength:Y},j)}function q(Y,j=!1){N({storm:Y},j)}function T(Y,j,Q=!1){typeof j=="number"&&Number.isFinite(j)?N({dirX:Y,dirZ:j},Q):N({direction:Y},!!j)}function U(Y){const j=Y||{};return j.time=L,j.strength=C,j.storm=b,j.dirX=M,j.dirZ=P,j.gustiness=S,j.scroll1U=A,j.scroll1V=O,j.scroll2U=x,j.scroll2V=ne,j}function se(){return y}function ue(){V||(V=!0,p.dispose())}return $(),{texture:p,data:f,size:n,worldSpan:t,uniforms:y,getUniforms:se,sampleWindAt:B,sampleTextureUV:te,update:E,setWind:G,setStrength:Z,setStorm:q,setDirection:T,getState:U,dispose:ue,get isDisposed(){return V}}}const Qn=64,Jn=32,eo=.9,zt=.002,qe=(e,n,t)=>e<n?n:e>t?t:e,rt=(e,n)=>Number.isFinite(e)?e:n;function la({size:e=Qn,worldSpan:n=Jn,recoveryTime:t=eo}={}){const i=Math.max(8,Math.floor(rt(e,Qn))),a=Math.max(4,rt(n,Jn)),o=1/a,c=a/i,s=i*.5,r=Math.max(.08,rt(t,eo)),h=3/r,d=i*i,l=new Float32Array(d*4),u=new Uint8Array(d*4);for(let w=0;w<d;w++){const v=w*4;u[v]=127,u[v+1]=127,u[v+2]=0,u[v+3]=0}const f=new uo(u,i,i,fo,mo);f.wrapS=Zn,f.wrapT=Zn,f.magFilter=un,f.minFilter=un,f.generateMipmaps=!1,f.colorSpace=ho,f.flipY=!1,f.needsUpdate=!0;let F=0,p=0,L=0,C=0,m=!1,b=!1;const z={uBendMap:{value:f},uBendOrigin:{value:new $t(L,C,o,a)}};function M(w){u[w]=qe(127+Math.round(qe(l[w],-1,1)*127),0,254),u[w+1]=qe(127+Math.round(qe(l[w+1],-1,1)*127),0,254),u[w+2]=qe(Math.round(qe(l[w+2],0,1)*255),0,255),u[w+3]=qe(Math.round(qe(l[w+3],0,1)*255),0,255)}function P(){if(!(i<3))for(let w=0;w<i;w++){let v=w*4;l[v]=0,l[v+1]=0,l[v+2]=0,l[v+3]=0,u[v]=127,u[v+1]=127,u[v+2]=0,u[v+3]=0,v=((i-1)*i+w)*4,l[v]=0,l[v+1]=0,l[v+2]=0,l[v+3]=0,u[v]=127,u[v+1]=127,u[v+2]=0,u[v+3]=0,v=w*i*4,l[v]=0,l[v+1]=0,l[v+2]=0,l[v+3]=0,u[v]=127,u[v+1]=127,u[v+2]=0,u[v+3]=0,v=(w*i+(i-1))*4,l[v]=0,l[v+1]=0,l[v+2]=0,l[v+3]=0,u[v]=127,u[v+1]=127,u[v+2]=0,u[v+3]=0}}function H(){l.fill(0);for(let w=0;w<d;w++){const v=w*4;u[v]=127,u[v+1]=127,u[v+2]=0,u[v+3]=0}m=!1,f.needsUpdate=!0}function k(w,v){if(b)return!1;const V=Math.round(rt(w,L)/c),y=Math.round(rt(v,C)/c),$=V-F,ie=y-p;if($===0&&ie===0)return!1;if(F=V,p=y,L=F*c,C=p*c,z.uBendOrigin.value.set(L,C,o,a),!m)return!0;if(Math.abs($)>=i||Math.abs(ie)>=i)return H(),!0;const ce=ie>=0?0:i-1,X=ie>=0?i:-1,_=ie>=0?1:-1,I=$>=0?0:i-1,N=$>=0?i:-1,E=$>=0?1:-1;let B=!1;for(let te=ce;te!==X;te+=_){const G=te+ie,Z=G>=0&&G<i;for(let q=I;q!==N;q+=E){const T=q+$,U=(te*i+q)*4;if(Z&&T>=0&&T<i){const se=(G*i+T)*4,ue=l[se],Y=l[se+1],j=l[se+2],Q=l[se+3];l[U]=ue,l[U+1]=Y,l[U+2]=j,l[U+3]=Q,(j>zt||Q>zt||Math.abs(ue)>zt||Math.abs(Y)>zt)&&(B=!0),M(U)}else l[U]=0,l[U+1]=0,l[U+2]=0,l[U+3]=0,u[U]=127,u[U+1]=127,u[U+2]=0,u[U+3]=0}}return P(),m=B,f.needsUpdate=!0,!0}function S(w,v,V=0,y=0,$=.75,ie=1){if(b)return 0;const ce=rt(w,0),X=rt(v,0),_=rt(V,0),I=rt(y,0),N=qe(rt($,.75),c*1.1,a*.45),E=qe(rt(ie,1),0,2);if(E<=1e-4)return 0;const B=i>=4?1:0,te=i>=4?i-2:i-1,G=Math.max(B,Math.floor((ce-N-L)/c+s-.5)),Z=Math.min(te,Math.ceil((ce+N-L)/c+s-.5)),q=Math.max(B,Math.floor((X-N-C)/c+s-.5)),T=Math.min(te,Math.ceil((X+N-C)/c+s-.5));if(G>Z||q>T)return 0;const U=Math.hypot(_,I),se=U>.05,ue=se?_/U:0,Y=se?I/U:0,j=qe(1+U*.06,1,1.35),Q=se?qe(U*.08,.08,.28):0;let fe=0;for(let le=q;le<=T;le++){const Me=C+(le+.5-s)*c-X;for(let ve=G;ve<=Z;ve++){const Ge=L+(ve+.5-s)*c-ce,Fe=Math.hypot(Ge,Me);if(Fe>=N)continue;const Te=Fe/N,Le=1-Te,Ie=Le*Le*(3-2*Le);let ke=0,Ee=0;Fe>1e-4?(ke=Ge/Fe,Ee=Me/Fe):se&&(ke=ue,Ee=Y);let Ae=ke,g=Ee;if(se){const Ve=Te<.35?(1-Te/.35)*.72:0,it=Math.max(Q,Ve);Ae=ke*(1-it)+ue*it,g=Ee*(1-it)+Y*it;const Ht=Math.hypot(Ae,g);Ht>1e-4&&(Ae/=Ht,g/=Ht)}const oe=qe(Ie*E*j,0,1),D=1-qe(Te*1.1,0,1),W=qe(D*D*(3-2*D)*E,0,1),ae=Ae*oe,K=g*oe,re=(le*i+ve)*4,me=l[re],pe=l[re+1],He=l[re+2],ze=l[re+3];let $e,ot;if(He<.01)$e=ae,ot=K;else{const Ve=qe(.35+.65*oe,0,1);$e=me*(1-Ve*.65)+ae*Ve,ot=pe*(1-Ve*.65)+K*Ve}const Ce=Math.hypot($e,ot);Ce>1&&($e/=Ce,ot/=Ce),l[re]=$e,l[re+1]=ot,l[re+2]=oe>He?oe:He,l[re+3]=W>ze?W:ze,M(re),fe++}}return fe>0&&(m=!0,f.needsUpdate=!0),fe}function R(w,v,V){if(b)return;typeof v=="number"&&typeof V=="number"?k(v,V):v&&typeof v=="object"&&Number.isFinite(v.x)&&Number.isFinite(v.z)&&k(v.x,v.z);const y=qe(rt(w,0),0,.25);if(!m||y<=0)return;const $=Math.exp(-y*h);let ie=!1;for(let ce=0;ce<d;ce++){const X=ce*4,_=l[X+2],I=l[X+3],N=l[X],E=l[X+1];if(_===0&&I===0&&N===0&&E===0)continue;const B=N*$,te=E*$,G=_*$,Z=I*$;G<zt&&Z<zt&&Math.abs(B)<zt&&Math.abs(te)<zt?(l[X]=0,l[X+1]=0,l[X+2]=0,l[X+3]=0,u[X]=127,u[X+1]=127,u[X+2]=0,u[X+3]=0):(l[X]=B,l[X+1]=te,l[X+2]=G,l[X+3]=Z,M(X),ie=!0)}m=ie,f.needsUpdate=!0}function A(w,v,V){const y=(rt(w,0)-L)*o+.5,$=(rt(v,0)-C)*o+.5;if(y<0||y>1||$<0||$>1)return V?(V.dx=0,V.dz=0,V.weight=0,V.crush=0,V):{dx:0,dz:0,weight:0,crush:0};const ie=qe(y*i-.5,0,i-1),ce=qe($*i-.5,0,i-1),X=Math.floor(ie),_=Math.floor(ce),I=Math.min(X+1,i-1),N=Math.min(_+1,i-1),E=ie-X,B=ce-_,te=(_*i+X)*4,G=(_*i+I)*4,Z=(N*i+X)*4,q=(N*i+I)*4,T=(1-E)*(1-B),U=E*(1-B),se=(1-E)*B,ue=E*B,Y=l[te]*T+l[G]*U+l[Z]*se+l[q]*ue,j=l[te+1]*T+l[G+1]*U+l[Z+1]*se+l[q+1]*ue,Q=l[te+2]*T+l[G+2]*U+l[Z+2]*se+l[q+2]*ue,fe=l[te+3]*T+l[G+3]*U+l[Z+3]*se+l[q+3]*ue;return V?(V.dx=Y,V.dz=j,V.weight=Q,V.crush=fe,V):{dx:Y,dz:j,weight:Q,crush:fe}}function O(w){const v=w||{};return v.x=L,v.z=C,v.gridX=F,v.gridZ=p,v.worldSpan=a,v.texelSize=c,v}function x(){return z}function ne(){b||(b=!0,m=!1,f.dispose())}return{texture:f,data:u,size:i,worldSpan:a,texelSize:c,recoveryTime:r,uniforms:z,getUniforms:x,stampActor:S,recenter:k,update:R,sampleBendAt:A,getOrigin:O,clear:H,dispose:ne,get hasActiveStamps(){return m},get isDisposed(){return b}}}const Mo=343,wn=Object.freeze(["rainRate","snowRate","fogDensity","cloudCover","windStrength","lightningFreq","wetnessTarget","stormDarkening","auroraSuppression"]),Xt=Object.freeze({clear:Object.freeze({id:"clear",label:"Clear Starlight",rainRate:0,snowRate:0,fogDensity:.023,cloudCover:.14,windStrength:.15,lightningFreq:0,wetnessTarget:.05,stormDarkening:0,auroraSuppression:0}),valley_mist:Object.freeze({id:"valley_mist",label:"Valley Mist",rainRate:0,snowRate:0,fogDensity:.048,cloudCover:.38,windStrength:.08,lightningFreq:0,wetnessTarget:.32,stormDarkening:.12,auroraSuppression:.35}),drizzle:Object.freeze({id:"drizzle",label:"Light Drizzle",rainRate:.36,snowRate:0,fogDensity:.034,cloudCover:.74,windStrength:.38,lightningFreq:0,wetnessTarget:.72,stormDarkening:.35,auroraSuppression:.85}),thunderstorm:Object.freeze({id:"thunderstorm",label:"Moonlit Storm",rainRate:.95,snowRate:0,fogDensity:.044,cloudCover:.96,windStrength:.92,lightningFreq:.78,wetnessTarget:1,stormDarkening:.78,auroraSuppression:1}),summit_flurries:Object.freeze({id:"summit_flurries",label:"Summit Flurries",rainRate:0,snowRate:.72,fogDensity:.036,cloudCover:.66,windStrength:.62,lightningFreq:0,wetnessTarget:.24,stormDarkening:.28,auroraSuppression:.45})});Object.freeze(Object.keys(Xt));const Sn=Object.freeze({veil_falls:Object.freeze({id:"veil_falls",x:-59.5,z:304.5,innerRadius:32,outerRadius:95,mistWeight:1,fogAdd:.015,fogScale:.36,wetnessBoost:.24,shelteredSnowlineOffset:16}),fern_hollow:Object.freeze({id:"fern_hollow",x:-247,z:148.5,innerRadius:28,outerRadius:85,mistWeight:.88,fogAdd:.012,fogScale:.3,wetnessBoost:.2,shelteredSnowlineOffset:18}),crown_ridge:Object.freeze({id:"crown_ridge",x:208,z:716.2,innerRadius:110,outerRadius:260,snowlineY:18,windBoost:.14})}),to=Object.freeze({clear:Object.freeze([["valley_mist",.44],["drizzle",.32],["summit_flurries",.14],["thunderstorm",.1]]),valley_mist:Object.freeze([["clear",.45],["drizzle",.38],["summit_flurries",.1],["thunderstorm",.07]]),drizzle:Object.freeze([["thunderstorm",.34],["valley_mist",.32],["clear",.24],["summit_flurries",.1]]),thunderstorm:Object.freeze([["drizzle",.56],["valley_mist",.28],["clear",.16]]),summit_flurries:Object.freeze([["clear",.44],["valley_mist",.34],["drizzle",.22]])});function nt(e,n,t){return e<n?n:e>t?t:e}function Nn(e,n,t){const i=n-e;if(i<=1e-6)return t>=n?1:0;const a=nt((t-e)/i,0,1);return a*a*(3-2*a)}function bi(e){let n=e>>>0;return()=>{n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Mi(e){return typeof e!="string"||!e?"":e.toLowerCase().replace(/[\s-]+/g,"_")}function xn(e,n,t){const i=e-t.x,a=n-t.z,o=Math.hypot(i,a);return o>=t.outerRadius?0:1-Nn(t.innerRadius,t.outerRadius,o)}function Fi(e,n,t,i="",a=null,o=18,c=16){const s=a||{snowShift:0,localMist:0,fogAdd:0,fogScale:0,wetnessBoost:0,windBoost:0,microClimate:"valley"},r=Mi(i),h=Number.isFinite(e)?e:0,d=Number.isFinite(n)?n:0,l=Number.isFinite(t)?t:0,u=Sn.veil_falls,f=Sn.fern_hollow,F=Sn.crown_ridge;let p=xn(h,l,u),L=xn(h,l,f);const C=xn(h,l,F);(r==="veil_falls"||r==="falls")&&(p=1),(r==="fern_hollow"||r==="fern")&&(L=1);const m=p*u.mistWeight,b=L*f.mistWeight,z=nt(Math.max(m,b),0,1),M=r==="crown_ridge"||r==="ridge"||r==="alpine",P=M?0:p*u.shelteredSnowlineOffset+L*f.shelteredSnowlineOffset,H=o+P;let k=0;return d>=H&&(k=Nn(H,H+c,d)),M&&d>=o&&(k=Math.max(k,Nn(o-2,o+c*.75,d))),s.snowShift=nt(k,0,1),s.localMist=z,s.fogAdd=Math.max(p*u.fogAdd,L*f.fogAdd),s.fogScale=Math.max(p*u.fogScale,L*f.fogScale),s.wetnessBoost=Math.max(p*u.wetnessBoost,L*f.wetnessBoost),s.windBoost=Math.max(C,s.snowShift)*F.windBoost,s.snowShift>.25||M?s.microClimate="alpine":p>=L&&p>.15?s.microClimate="veil_falls":L>.15?s.microClimate="fern_hollow":s.microClimate="valley",s}function Ci(e){return typeof e=="string"?e:e&&typeof e=="object"?e.weather??e.preset??e.state??e.id??null:null}function nn(e,n){return e?Array.isArray(e)?e.length<3?!1:(n.x=Number.isFinite(e[0])?e[0]:0,n.y=Number.isFinite(e[1])?e[1]:0,n.z=Number.isFinite(e[2])?e[2]:0,!0):typeof e=="object"?(n.x=Number.isFinite(e.x)?e.x:0,n.y=Number.isFinite(e.y)?e.y:0,n.z=Number.isFinite(e.z)?e.z:0,!0):!1:!1}function ca({initialState:e="clear",autoCycle:n=!1,bus:t=null,getPlayerPos:i=null,transitionTime:a=2,cycleInterval:o=[180,360],snowlineY:c=18,snowTransitionSpan:s=16,seed:r=1464156500}={}){const h=Object.prototype.hasOwnProperty.call(Xt,e)?e:"clear",d=Xt[h],l=bi(r),u=Array.isArray(o)?Math.max(1,o[0]):180,f=Array.isArray(o)?Math.max(u,o[1]):360;let F=h,p=h,L=d,C=Math.max(.05,Number.isFinite(a)?a:2),m=!!n,b=u+l()*(f-u),z=0,M=!1;const P=wn.length,H=new Float64Array(P),k=new Float64Array(P),S=new Float64Array(P);for(let _=0;_<P;_++){const I=d[wn[_]];H[_]=I,S[_]=I,k[_]=0}const R={x:0,y:0,z:0},A={snowShift:0,localMist:0,fogAdd:0,fogScale:0,wetnessBoost:0,windBoost:0,microClimate:"valley"},O={preset:F,previousPreset:p,label:L.label,rainRate:d.rainRate,snowRate:d.snowRate,fogDensity:d.fogDensity,cloudCover:d.cloudCover,windStrength:d.windStrength,lightningFreq:d.lightningFreq,wetnessTarget:d.wetnessTarget,stormDarkening:d.stormDarkening,auroraSuppression:d.auroraSuppression,snowShift:0,localMist:0,elevation:0,microClimate:"valley",transitionProgress:1,autoCycle:m};function x(_=""){Fi(R.x,R.y,R.z,_,A,c,s);const I=nt(H[0],0,1),N=nt(H[1],0,1),E=Math.max(0,H[2]),B=nt(H[3],0,1),te=nt(H[4],0,1),G=nt(H[5],0,1),Z=nt(H[6],0,1),q=nt(H[7],0,1),T=nt(H[8],0,1),U=A.snowShift,se=I*U,ue=nt(I-se,0,1),Y=nt(N+se,0,1),j=E*(1+A.fogScale)+A.fogAdd,Q=nt(Z+A.wetnessBoost,0,1),fe=nt(te+A.windBoost,0,1);O.preset=F,O.previousPreset=p,O.label=L.label,O.rainRate=ue,O.snowRate=Y,O.fogDensity=j,O.cloudCover=B,O.windStrength=fe,O.lightningFreq=G,O.wetnessTarget=Q,O.stormDarkening=q,O.auroraSuppression=T,O.snowShift=U,O.localMist=A.localMist,O.elevation=R.y,O.microClimate=A.microClimate,O.autoCycle=m;let le=0;for(let Se=0;Se<P;Se++){const Me=Se===2?.05:1,ve=Math.abs(H[Se]-S[Se])/Me;ve>le&&(le=ve)}O.transitionProgress=nt(1-le,0,1)}function ne(_){!t||typeof t.emit!="function"||t.emit("weather:change",{preset:F,previousPreset:p,from:p,to:F,immediate:!!_,state:{...O}})}function w(_,I=null){if(M)return!1;const N=Ci(_);if(!N||!Object.prototype.hasOwnProperty.call(Xt,N))return!1;const E=!!(I&&I.immediate||_&&typeof _=="object"&&_.immediate),B=I&&Number.isFinite(I.transitionTime)&&I.transitionTime||_&&typeof _=="object"&&Number.isFinite(_.transitionTime)&&_.transitionTime||null;B!==null&&B>0&&(C=Math.max(.05,B));const te=N!==F||E;p=F,F=N,L=Xt[N],z=0,b=u+l()*(f-u);for(let G=0;G<P;G++){const Z=L[wn[G]];S[G]=Z,E&&(H[G]=Z,k[G]=0)}return typeof i=="function"&&nn(i(),R),x(),te&&ne(E),!0}function v(){const _=to[F]||to.clear,I=l();let N=0;for(let E=0;E<_.length;E++)if(N+=_[E][1],I<=N)return _[E][0];return _[_.length-1][0]}function V(_,I=null){if(M)return O;const N=Number.isFinite(_)&&_>0?Math.min(_,10):0;I&&I.playerPos?nn(I.playerPos,R):typeof i=="function"&&nn(i(),R);const E=I&&typeof I.biome=="string"?I.biome:"";if(N>0){z+=N,m&&(b-=N,b<=0&&w(v()));const B=2/C,te=Math.exp(-B*N);for(let G=0;G<P;G++){const Z=H[G],q=k[G],T=S[G],U=Z-T,se=(q+B*U)*N;k[G]=(q-B*se)*te,H[G]=T+(U+se)*te,Math.abs(H[G]-T)<1e-7&&Math.abs(k[G])<1e-7&&(H[G]=T,k[G]=0)}}return x(E),O}function y(){return O}function $(_){m=!!_,O.autoCycle=m}const ie=[];function ce(_){w(_)}if(t&&typeof t.on=="function")for(const _ of["dev:setWeather","weather:set"]){const I=t.on(_,ce);typeof I=="function"?ie.push(I):typeof t.off=="function"&&ie.push(()=>t.off(_,ce))}function X(){if(!M){M=!0;for(let _=0;_<ie.length;_++)ie[_]();ie.length=0}}return typeof i=="function"&&nn(i(),R),x(),{getState:y,getPreset:()=>F,getElapsedInState:()=>z,setWeather:w,setAutoCycle:$,update:V,dispose:X}}const Ct=(e,n,t)=>Number.isFinite(e)?e<n?n:e>t?t:e:n,be=e=>!Number.isFinite(e)||e<=0?0:e>=1?1:e,de=(e,n,t)=>e+(n-e)*t,St=(e,n,t)=>{const i=be((t-e)/Math.max(n-e,1e-6));return i*i*(3-2*i)};function Fo(e){if(!e||typeof e!="object")return e;Object.freeze(e);for(const n of Object.values(e))Fo(n);return e}const bn=Object.freeze([.298945,.229191,-.926729]);function Co(e={}){const n=new ee(e.skyColor??2505827),t=new ee(e.lightColor??10138854),i=new ge(e.moonDir?.x??bn[0],e.moonDir?.y??bn[1],e.moonDir?.z??bn[2]).normalize();return{uWetness:{value:be(Number.isFinite(e.wetness)?e.wetness:0)},uPuddleLevel:{value:be(Number.isFinite(e.puddleLevel)?e.puddleLevel:0)},uRainRate:{value:be(Number.isFinite(e.rainRate)?e.rainRate:0)},uWetTime:{value:Number.isFinite(e.time)?e.time:0},uWetSkyColor:{value:n},uWetMoonDir:{value:i},uWetLightColor:{value:t}}}function no(e,n){n&&(n.isColor?e.copy(n):Array.isArray(n)&&n.length>=3?e.setRGB(n[0],n[1],n[2]):typeof n=="number"||typeof n=="string"?e.set(n):typeof n=="object"&&Number.isFinite(n.r)&&Number.isFinite(n.g)&&Number.isFinite(n.b)&&e.setRGB(n.r,n.g,n.b))}function Di(e,n){if(!n)return;let t,i,a;if(Array.isArray(n)&&n.length>=3)t=n[0],i=n[1],a=n[2];else if(typeof n=="object"&&Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z))t=n.x,i=n.y,a=n.z;else return;const o=Math.hypot(t,i,a);o>1e-6&&e.set(t/o,i/o,a/o)}function ua(e={}){const n=e.uniforms??Co(e),t=Ct(e.puddleThreshold??.35,.05,.85),i=Math.max(e.wetAccumRate??.22,1e-4),a=Math.max(e.puddleFillRate??.14,1e-4),o=Math.max(e.baseEvapRate??.024,1e-5),c=Math.max(e.sunEvapBonus??.06,0),s=Math.max(e.windEvapBonus??.032,0),r=Ct(e.puddleEvapScale??.42,.08,.95),h=Ct(e.humidityDampening??.55,0,.9),d=Ct(e.maxSubstep??.1,.005,.25);let l=be(e.initialWetness??n.uWetness.value??0),u=be(e.initialPuddleLevel??n.uPuddleLevel.value??0),f=be(e.initialRainRate??n.uRainRate.value??0),F=Number.isFinite(e.initialTime)?e.initialTime:n.uWetTime.value??0,p=0,L=!1;const C={wetness:l,puddleLevel:u,rainRate:f,dryingRate:p,time:F,puddleThreshold:t,isSaturated:l>t,hasPuddles:u>.005};function m(){n.uWetness.value=l,n.uPuddleLevel.value=u,n.uRainRate.value=f,n.uWetTime.value=F,C.wetness=l,C.puddleLevel=u,C.rainRate=f,C.dryingRate=p,C.time=F,C.isSaturated=l>t,C.hasPuddles=u>.005}function b(S,R){return Number.isFinite(S)&&(l=be(S)),Number.isFinite(R)&&(u=be(R)),m(),C}const z=e.bus??null,M=[];if(z&&typeof z.on=="function"){const S=O=>{L||!O||(typeof O=="number"?b(O):typeof O=="object"&&b(O.wetness,O.puddleLevel))},R=z.on("dev:setWetness",S),A=z.on("wetness:set",S);typeof R=="function"&&M.push(R),typeof A=="function"&&M.push(A)}function P(S,R=null){if(L)return C;const A=Number.isFinite(S)&&S>0?S:0,O=R?.weather,x=R?.ephemeris,ne=R?.wind,w=R?.rainRate??O?.rainRate??0,v=be(Number.isFinite(w)?w:0);f=v;const V=R?.windStrength??ne?.strength??O?.windStrength??0,y=Ct(Number.isFinite(V)?V:0,0,2.5),$=R?.cloudCover??O?.cloudCover??0,ie=be(Number.isFinite($)?$:0);let ce=0;if(Number.isFinite(R?.sunExposure))ce=be(R.sunExposure);else if(x){const Z=Number.isFinite(x.sunDir?.y)?x.sunDir.y:Number.isFinite(x.sunAltitude)?Math.sin(x.sunAltitude):-.2;ce=be(Z*1.65)*(1-.65*ie)}const X=R?.humidity??O?.humidity??O?.mist??0,_=be(Number.isFinite(X)?X:0),I=R?.biomeWetnessBias??0,N=be(Number.isFinite(I)?I:0);R&&(no(n.uWetSkyColor.value,R.skyColor??x?.skyColor??R.mood?.fogColor),Di(n.uWetMoonDir.value,R.moonDir??x?.primaryDir??x?.moonDir),no(n.uWetLightColor.value,R.lightColor??x?.primaryColor??x?.lightColor));const E=o+c*ce+s*y,B=1-h*_,te=1-be(v*2.5),G=E*B*te;if(p=G,A>0){F+=A;const Z=Math.max(1,Math.ceil(A/d)),q=A/Z,T=v>0?Math.pow(v,.85):0,U=1/Math.max(1-t,1e-4);for(let se=0;se<Z;se++){const ue=i*T*(1-l)+(N>l?.04*(N-l):0),Y=l>0?G*(.38+.62*l):0;l=be(l+(ue-Y)*q);let j=0;if(l>t&&v>0){const fe=(l-t)*U;j=a*v*(.28+.72*fe)*(1-u)}let Q=0;if(u>0&&G>0){const fe=1-.55*St(t*.75,.85,l);Q=G*r*fe*(.3+.7*u)}u=be(u+(j-Q)*q)}l<1e-6&&v===0&&N===0&&(l=0),u<1e-6&&v===0&&(u=0)}return m(),C}function H(){return l=0,u=0,f=0,p=0,F=0,m(),C}function k(){if(!L){L=!0;for(let S=0;S<M.length;S++)try{M[S]()}catch{}M.length=0}}return m(),{uniforms:n,update:P,getState:()=>C,getUniforms:()=>n,setWetness:b,reset:H,dispose:k}}const Ai=`
varying vec3 vWetWorldPos;
varying vec3 vWetWorldNormal;
`,zi=`
{
  vec4 wetWp = vec4( transformed, 1.0 );
  vec3 wetWn = objectNormal;
  #ifdef USE_BATCHING
    wetWp = batchingMatrix * wetWp;
    mat3 wetBm = mat3( batchingMatrix );
    wetWn /= max( vec3( dot( wetBm[ 0 ], wetBm[ 0 ] ), dot( wetBm[ 1 ], wetBm[ 1 ] ), dot( wetBm[ 2 ], wetBm[ 2 ] ) ), vec3( 1e-6 ) );
    wetWn = wetBm * wetWn;
  #endif
  #ifdef USE_INSTANCING
    wetWp = instanceMatrix * wetWp;
    mat3 wetIm = mat3( instanceMatrix );
    wetWn /= max( vec3( dot( wetIm[ 0 ], wetIm[ 0 ] ), dot( wetIm[ 1 ], wetIm[ 1 ] ), dot( wetIm[ 2 ], wetIm[ 2 ] ) ), vec3( 1e-6 ) );
    wetWn = wetIm * wetWn;
  #endif
  mat3 wetMm = mat3( modelMatrix );
  wetWn /= max( vec3( dot( wetMm[ 0 ], wetMm[ 0 ] ), dot( wetMm[ 1 ], wetMm[ 1 ] ), dot( wetMm[ 2 ], wetMm[ 2 ] ) ), vec3( 1e-6 ) );
  vWetWorldPos = ( modelMatrix * wetWp ).xyz;
  vWetWorldNormal = normalize( wetMm * wetWn );
}
`,Ni=`
uniform float uWetness;
uniform float uPuddleLevel;
uniform float uRainRate;
uniform float uWetTime;
uniform vec3 uWetSkyColor;
uniform vec3 uWetMoonDir;
uniform vec3 uWetLightColor;
uniform float uWetPorosity;
uniform float uWetPuddleStrength;
uniform float uWetPuddleScale;
uniform float uWetSlopeThreshold;
uniform float uWetRippleStrength;
uniform float uWetRippleScale;
uniform float uWetMaxRippleDist;
varying vec3 vWetWorldPos;
varying vec3 vWetWorldNormal;

float wetHash21( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.x + p3.y ) * p3.z );
}

vec2 wetHash22( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * vec3( 0.1031, 0.1030, 0.0973 ) );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.xx + p3.yz ) * p3.zy );
}

float wetNoise2( vec2 p ) {
  vec2 i = floor( p );
  vec2 f = fract( p );
  vec2 u = f * f * ( 3.0 - 2.0 * f );
  float a = wetHash21( i );
  float b = wetHash21( i + vec2( 1.0, 0.0 ) );
  float c = wetHash21( i + vec2( 0.0, 1.0 ) );
  float d = wetHash21( i + vec2( 1.0, 1.0 ) );
  return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y );
}

vec2 wetRippleLayer( vec2 p, float t, float seedOffset ) {
  vec2 cell = floor( p );
  vec2 f = fract( p );
  vec2 h = wetHash22( cell + seedOffset );
  float cycle = fract( t * ( 0.85 + 0.55 * h.x ) + h.y );
  vec2 center = vec2( 0.5 ) + ( h - 0.5 ) * 0.34;
  vec2 d = f - center;
  float dist = length( d );
  float radius = cycle * 0.30;
  float ringDist = dist - radius;
  float env = exp( -ringDist * ringDist * 140.0 )
            * ( 1.0 - cycle )
            * smoothstep( 0.0, 0.08, cycle )
            * ( 1.0 - smoothstep( 0.22, 0.32, dist ) );
  float waveSlope = cos( ringDist * 42.0 ) * env;
  return ( d / max( dist, 0.001 ) ) * waveSlope;
}

vec2 wetConcentricRipples( vec2 wp, float t ) {
  vec2 g1 = wetRippleLayer( wp * uWetRippleScale, t, 1.3 );
  vec2 rotWp = mat2( 0.8, -0.6, 0.6, 0.8 ) * wp;
  vec2 g2 = wetRippleLayer( rotWp * ( uWetRippleScale * 1.47 ) + vec2( 7.1, 3.9 ), t * 1.13, 19.7 );
  return g1 + g2 * 0.85;
}
`,Ri=`
float wetEffective = 0.0;
float wetPuddleMask = 0.0;
if ( uWetness > 0.001 || uPuddleLevel > 0.001 ) {
  float wetUpY = normalize( vWetWorldNormal ).y * faceDirection;
  float wetSlopeHi = max( uWetSlopeThreshold + 0.005, min( uWetSlopeThreshold + 0.05, 0.999 ) );
  float wetSlopeMask = smoothstep( uWetSlopeThreshold, wetSlopeHi, wetUpY );
  if ( uPuddleLevel > 0.001 && uWetPuddleStrength > 0.001 && wetSlopeMask > 0.001 ) {
    float wetCavity = 0.68 * wetNoise2( vWetWorldPos.xz * uWetPuddleScale )
                    + 0.32 * wetNoise2( vWetWorldPos.xz * ( uWetPuddleScale * 2.43 ) + vec2( 11.7, 5.3 ) );
    float wetFillHeight = mix( 0.14, 0.72, clamp( uPuddleLevel, 0.0, 1.0 ) );
    float wetPuddleRaw = 1.0 - smoothstep( wetFillHeight - 0.04, wetFillHeight + 0.06, wetCavity );
    wetPuddleMask = wetPuddleRaw * wetSlopeMask * smoothstep( 0.0, 0.08, uPuddleLevel ) * uWetPuddleStrength;
  }

  wetEffective = clamp( uWetness + wetPuddleMask * 0.45, 0.0, 1.0 );

  // Darken porous surfaces as water replaces trapped pore air, plus subtle depth absorption in puddles.
  float wetDarken = 1.0 - wetEffective * uWetPorosity * 0.48;
  vec3 wetDarkCol = diffuseColor.rgb * wetDarken;
  diffuseColor.rgb = mix( wetDarkCol, wetDarkCol * vec3( 0.68, 0.73, 0.80 ), wetPuddleMask * 0.55 );

  // Smooth roughness drop across damp film, converging to 0.04 mirror finish inside puddles.
  float wetDampRough = mix( roughnessFactor, max( roughnessFactor * 0.38, 0.14 ), wetEffective * ( 0.45 + 0.55 * uWetPorosity ) );
  roughnessFactor = mix( wetDampRough, 0.04, wetPuddleMask );

  // Standing puddle water self-levels horizontally and perturbs normals with concentric raindrop ripples.
  if ( wetPuddleMask > 0.01 ) {
    vec2 wetRippleGrad = vec2( 0.0 );
    if ( uRainRate > 0.02 && uWetRippleStrength > 0.001 ) {
      float wetCamDist = length( vWetWorldPos - cameraPosition );
      float wetRippleFade = 1.0 - smoothstep( uWetMaxRippleDist * 0.55, uWetMaxRippleDist, wetCamDist );
      if ( wetRippleFade > 0.01 ) {
        float wetRainGain = smoothstep( 0.02, 0.35, uRainRate ) * ( 0.45 + 0.55 * clamp( uRainRate, 0.0, 1.0 ) );
        wetRippleGrad = wetConcentricRipples( vWetWorldPos.xz, uWetTime ) * ( uWetRippleStrength * wetRainGain * wetRippleFade );
      }
    }
    vec3 wetPuddleWorldN = normalize( vec3( wetRippleGrad.x, 1.0, wetRippleGrad.y ) );
    vec3 wetPuddleViewN = normalize( ( viewMatrix * vec4( wetPuddleWorldN, 0.0 ) ).xyz );
    normal = normalize( mix( normal, wetPuddleViewN, wetPuddleMask ) );
    nonPerturbedNormal = normalize( mix( nonPerturbedNormal, wetPuddleViewN, wetPuddleMask ) );
  }
}
`,_i=`
if ( wetPuddleMask > 0.01 ) {
  material.roughness = mix( material.roughness, 0.04, wetPuddleMask );
}
`,Ti=`
if ( wetEffective > 0.001 || wetPuddleMask > 0.001 ) {
  vec3 wetV = normalize( cameraPosition - vWetWorldPos );
  vec3 wetNW = normalize( inverseTransformDirection( normal, viewMatrix ) );
  float wetNdotV = clamp( dot( wetNW, wetV ), 0.0, 1.0 );
  float wetOneMinus = 1.0 - wetNdotV;
  float wetOm2 = wetOneMinus * wetOneMinus;
  float wetFresnel = 0.02 + 0.98 * ( wetOm2 * wetOm2 * wetOneMinus );
  vec3 wetR = reflect( -wetV, wetNW );
  float wetSkyGrad = smoothstep( -0.05, 0.65, wetR.y );
  vec3 wetSkyRefl = mix( uWetSkyColor * 0.48, uWetSkyColor * 1.38, wetSkyGrad );
  float wetMoonAlign = max( dot( wetR, normalize( uWetMoonDir ) ), 0.0001 );
  float wetMoonSpec = pow( wetMoonAlign, mix( 18.0, 140.0, wetPuddleMask ) );
  vec3 wetEnvTint = wetSkyRefl * ( 0.35 + 0.95 * wetPuddleMask )
                  + uWetLightColor * wetMoonSpec * ( 0.20 + 1.15 * wetPuddleMask );
  float wetReflectWeight = clamp( wetEffective * 0.24 * ( 1.0 - roughnessFactor ) + wetPuddleMask * 0.92, 0.0, 1.0 );
  reflectedLight.indirectSpecular += wetEnvTint * wetFresnel * wetReflectWeight;
}
`,Mn=new WeakMap;function fa(e,n,t={}){if(!e||typeof e!="object")throw new Error("patchWetnessMaterial: expected a Three.js MeshStandardMaterial");const i=n??Co(),a=Mn.get(e);if(a&&a.patched)return a.setOptions(t),a.setSharedUniforms(i),e;const o={uWetPorosity:{value:be(t.porosity??.65)},uWetPuddleStrength:{value:be(t.puddleStrength??1)},uWetPuddleScale:{value:Math.max(t.puddleScale??.32,.01)},uWetSlopeThreshold:{value:Ct(t.slopeThreshold??.92,0,.99)},uWetRippleStrength:{value:Ct(t.rippleStrength??.18,0,1)},uWetRippleScale:{value:Math.max(t.rippleScale??1.8,.1)},uWetMaxRippleDist:{value:Math.max(t.maxRippleDist??36,2)}},c=typeof e.onBeforeCompile=="function"?e.onBeforeCompile:null,s=typeof e.customProgramCacheKey=="function"?e.customProgramCacheKey:null;let r=i,h=null;function d(u,f){u.uWetness=f.uWetness,u.uPuddleLevel=f.uPuddleLevel,u.uRainRate=f.uRainRate,u.uWetTime=f.uWetTime,u.uWetSkyColor=f.uWetSkyColor,u.uWetMoonDir=f.uWetMoonDir,u.uWetLightColor=f.uWetLightColor}const l={patched:!0,hooksMatched:{vertCommon:!1,vertProject:!1,fragCommon:!1,fragPhysical:!1,fragLightsEnd:!1},setSharedUniforms(u){u&&(r=u,h?.uniforms&&d(h.uniforms,u))},setOptions(u={}){u.porosity!==void 0&&(o.uWetPorosity.value=be(u.porosity)),u.puddleStrength!==void 0&&(o.uWetPuddleStrength.value=be(u.puddleStrength)),u.puddleScale!==void 0&&(o.uWetPuddleScale.value=Math.max(u.puddleScale,.01)),u.slopeThreshold!==void 0&&(o.uWetSlopeThreshold.value=Ct(u.slopeThreshold,0,.99)),u.rippleStrength!==void 0&&(o.uWetRippleStrength.value=Ct(u.rippleStrength,0,1)),u.rippleScale!==void 0&&(o.uWetRippleScale.value=Math.max(u.rippleScale,.1)),u.maxRippleDist!==void 0&&(o.uWetMaxRippleDist.value=Math.max(u.maxRippleDist,2))},unpatch(){l.patched&&(l.patched=!1,h=null,Mn.delete(e),e.onBeforeCompile=c??(()=>{}),s?e.customProgramCacheKey=s:delete e.customProgramCacheKey,e.userData&&delete e.userData.wetnessPatch,e.needsUpdate=!0)}};return e.onBeforeCompile=function(f,F){if(c&&c.call(this,f,F),h=f,d(f.uniforms,r),f.uniforms.uWetPorosity=o.uWetPorosity,f.uniforms.uWetPuddleStrength=o.uWetPuddleStrength,f.uniforms.uWetPuddleScale=o.uWetPuddleScale,f.uniforms.uWetSlopeThreshold=o.uWetSlopeThreshold,f.uniforms.uWetRippleStrength=o.uWetRippleStrength,f.uniforms.uWetRippleScale=o.uWetRippleScale,f.uniforms.uWetMaxRippleDist=o.uWetMaxRippleDist,!f.vertexShader.includes("vWetWorldPos")){const p=f.vertexShader.includes("#include <common>"),L=f.vertexShader.includes("#include <project_vertex>");l.hooksMatched.vertCommon=p,l.hooksMatched.vertProject=L,p&&(f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
${Ai}`)),L&&(f.vertexShader=f.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
${zi}`))}if(!f.fragmentShader.includes("wetConcentricRipples")){const p=f.fragmentShader.includes("#include <common>"),L=f.fragmentShader.includes("#include <lights_physical_fragment>"),C=f.fragmentShader.includes("#include <lights_fragment_end>");l.hooksMatched.fragCommon=p,l.hooksMatched.fragPhysical=L,l.hooksMatched.fragLightsEnd=C,p&&(f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
${Ni}`)),L&&(f.fragmentShader=f.fragmentShader.replace("#include <lights_physical_fragment>",`${Ri}
#include <lights_physical_fragment>
${_i}`)),C&&(f.fragmentShader=f.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
${Ti}`))}},e.customProgramCacheKey=function(){const f=s?s.call(this):"";return f?`${f}|wetness-puddles-v1`:"wetness-puddles-v1"},Mn.set(e,l),e.userData=e.userData||{},e.userData.wetnessPatch=l,e.needsUpdate=!0,e}const kt=Fo({elder_village:{id:"elder_village",label:"Elder Grove Treetop Village",exposure:1.14,contrast:1.06,saturation:1.08,shadowTint:[.86,.91,1.06],highlightTint:[1.09,.99,.88],fogColor:[.11,.149,.212],vignette:.26},silver_meadow:{id:"silver_meadow",label:"Silver Meadow & Stone Circle",exposure:1.16,contrast:1.04,saturation:.94,shadowTint:[.88,.94,1.08],highlightTint:[.97,1.02,1.1],fogColor:[.114,.169,.251],vignette:.18},fern_hollow:{id:"fern_hollow",label:"Fern Glowing Hollow",exposure:1.08,contrast:1.09,saturation:1.14,shadowTint:[.78,.96,1.02],highlightTint:[.86,1.08,1.06],fogColor:[.071,.161,.2],vignette:.34},veil_falls:{id:"veil_falls",label:"Veil Falls & Cave Ledge",exposure:1.11,contrast:1.08,saturation:1.02,shadowTint:[.82,.92,1.08],highlightTint:[.98,1.03,1.08],fogColor:[.102,.169,.243],vignette:.28},north_gorge:{id:"north_gorge",label:"North Gorge Arch Bridge",exposure:1.07,contrast:1.12,saturation:.96,shadowTint:[.8,.89,1.07],highlightTint:[.94,1,1.09],fogColor:[.082,.133,.212],vignette:.32},crown_ridge:{id:"crown_ridge",label:"Crown Ridge Alpine Beacon",exposure:1.18,contrast:1.1,saturation:1.04,shadowTint:[.84,.93,1.12],highlightTint:[1.06,1.01,.96],fogColor:[.106,.173,.278],vignette:.16},moon_door_sanctuary:{id:"moon_door_sanctuary",label:"Spring Grotto Moon Door Sanctuary",exposure:1.09,contrast:1.11,saturation:1.06,shadowTint:[.82,.88,1.12],highlightTint:[.94,1.01,1.13],fogColor:[.086,.137,.235],vignette:.35}}),oo=Object.freeze(Object.keys(kt)),Pi=Object.freeze({elder:"elder_village",elders:"elder_village","elder-village":"elder_village",silver:"silver_meadow",meadow:"silver_meadow","silver-meadow":"silver_meadow",fern:"fern_hollow","fern-hollow":"fern_hollow",veil:"veil_falls",falls:"veil_falls","veil-falls":"veil_falls",gorge:"north_gorge",north:"north_gorge","north-gorge":"north_gorge",crown:"crown_ridge",ridge:"crown_ridge","crown-ridge":"crown_ridge",moonDoor:"moon_door_sanctuary","moon-door":"moon_door_sanctuary",spring:"moon_door_sanctuary"});function Fn(e,n="elder_village"){if(typeof e!="string"||!e)return n;if(kt[e])return e;const t=Pi[e];return t&&kt[t]?t:n}function Wi(e,n){const t=e?.ephemeris;if(t&&Number.isFinite(t.sunAltitude)){const r=t.sunAltitude;n.daylight=St(.06,.38,r);const h=St(-.14,.08,r),d=1-St(.08,.34,r);n.twilight=be(h*d*1.45);return}if(t&&Number.isFinite(t.sunDir?.y)){const r=t.sunDir.y;n.daylight=St(.06,.36,r);const h=St(-.14,.08,r),d=1-St(.08,.34,r);n.twilight=be(h*d*1.45);return}const i=e?.hour??t?.hour;if(!Number.isFinite(i)){n.daylight=0,n.twilight=0;return}const a=(i%24+24)%24,o=Math.sin((a-6.5)/24*Math.PI*2);n.daylight=St(.06,.42,o);const c=St(-.18,.08,o),s=1-St(.08,.38,o);n.twilight=be(c*s*1.45)}function ma(e={}){const n=Math.max(e.blendTime??2.2,1e-4);let t=Fn(e.initialBiome??"elder_village","elder_village"),i=!1;const a=kt[t],o={biome:t,targetBiome:t,exposure:a.exposure,contrast:a.contrast,saturation:a.saturation,shadowTint:new ee(a.shadowTint[0],a.shadowTint[1],a.shadowTint[2]),highlightTint:new ee(a.highlightTint[0],a.highlightTint[1],a.highlightTint[2]),fogColor:new ee(a.fogColor[0],a.fogColor[1],a.fogColor[2]),vignette:a.vignette,stormDarkening:0,daylightFactor:0,twilightFactor:0},c={uMoodExposure:{value:o.exposure},uMoodContrast:{value:o.contrast},uMoodSaturation:{value:o.saturation},uMoodShadowTint:{value:o.shadowTint},uMoodHighlightTint:{value:o.highlightTint},uMoodFogColor:{value:o.fogColor},uMoodVignette:{value:o.vignette}},s={exposure:a.exposure,hiR:a.highlightTint[0],hiG:a.highlightTint[1],hiB:a.highlightTint[2]},r={exposure:a.exposure,contrast:a.contrast,saturation:a.saturation,vignette:a.vignette,shR:a.shadowTint[0],shG:a.shadowTint[1],shB:a.shadowTint[2],hiR:a.highlightTint[0],hiG:a.highlightTint[1],hiB:a.highlightTint[2],fgR:a.fogColor[0],fgG:a.fogColor[1],fgB:a.fogColor[2]},h={daylight:0,twilight:0};function d(){c.uMoodExposure.value=o.exposure,c.uMoodContrast.value=o.contrast,c.uMoodSaturation.value=o.saturation,c.uMoodVignette.value=o.vignette}function l(C,m=!1){if(i)return o;const b=Fn(C,t);if(t=b,o.targetBiome=b,m){const z=kt[b];o.biome=b,s.exposure=z.exposure,s.hiR=z.highlightTint[0],s.hiG=z.highlightTint[1],s.hiB=z.highlightTint[2],o.exposure=z.exposure,o.contrast=z.contrast,o.saturation=z.saturation,o.shadowTint.setRGB(z.shadowTint[0],z.shadowTint[1],z.shadowTint[2]),o.highlightTint.setRGB(z.highlightTint[0],z.highlightTint[1],z.highlightTint[2]),o.fogColor.setRGB(z.fogColor[0],z.fogColor[1],z.fogColor[2]),o.vignette=z.vignette,d()}return o}const u=e.bus??null,f=[];if(u&&typeof u.on=="function"){const C=z=>{i||!z||(typeof z=="string"?l(z):typeof z=="object"&&l(z.biome??z.id,!!z.immediate))},m=u.on("biome:change",C),b=u.on("dev:setBiome",C);typeof m=="function"&&f.push(m),typeof b=="function"&&f.push(b)}function F(C,m=null){if(i)return o;m&&typeof m.biome=="string"&&(t=Fn(m.biome,t),o.targetBiome=t);const b=m?.biomeWeights;let z=0;if(b&&typeof b=="object"){let w=0,v=0,V=0,y=0,$=0,ie=0,ce=0,X=0,_=0,I=0,N=0,E=0,B=0,te=t,G=-1;for(let Z=0;Z<oo.length;Z++){const q=oo[Z],T=b[q];if(!Number.isFinite(T)||T<=0)continue;const U=kt[q];z+=T,w+=U.exposure*T,v+=U.contrast*T,V+=U.saturation*T,y+=U.vignette*T,$+=U.shadowTint[0]*T,ie+=U.shadowTint[1]*T,ce+=U.shadowTint[2]*T,X+=U.highlightTint[0]*T,_+=U.highlightTint[1]*T,I+=U.highlightTint[2]*T,N+=U.fogColor[0]*T,E+=U.fogColor[1]*T,B+=U.fogColor[2]*T,T>G&&(G=T,te=q)}if(z>1e-6){const Z=1/z;r.exposure=w*Z,r.contrast=v*Z,r.saturation=V*Z,r.vignette=y*Z,r.shR=$*Z,r.shG=ie*Z,r.shB=ce*Z,r.hiR=X*Z,r.hiG=_*Z,r.hiB=I*Z,r.fgR=N*Z,r.fgG=E*Z,r.fgB=B*Z,t=te,o.targetBiome=te}}if(z<=1e-6){const w=kt[t];r.exposure=w.exposure,r.contrast=w.contrast,r.saturation=w.saturation,r.vignette=w.vignette,r.shR=w.shadowTint[0],r.shG=w.shadowTint[1],r.shB=w.shadowTint[2],r.hiR=w.highlightTint[0],r.hiG=w.highlightTint[1],r.hiB=w.highlightTint[2],r.fgR=w.fogColor[0],r.fgG=w.fogColor[1],r.fgB=w.fogColor[2]}Wi(m,h);const M=h.daylight,P=h.twilight;P>1e-4&&(r.exposure+=.05*P,r.saturation+=.08*P,r.shR=de(r.shR,.88,P*.45),r.shG=de(r.shG,.86,P*.45),r.shB=de(r.shB,1.04,P*.45),r.hiR=de(r.hiR,1.15,P*.65),r.hiG=de(r.hiG,.97,P*.65),r.hiB=de(r.hiB,.83,P*.65),r.fgR=de(r.fgR,.34,P*.55),r.fgG=de(r.fgG,.25,P*.55),r.fgB=de(r.fgB,.31,P*.55)),M>1e-4&&(r.exposure-=.07*M,r.vignette=be(r.vignette-.07*M),r.shR=de(r.shR,.95,M*.7),r.shG=de(r.shG,.98,M*.7),r.shB=de(r.shB,1.04,M*.7),r.hiR=de(r.hiR,1.04,M*.65),r.hiG=de(r.hiG,1.02,M*.65),r.hiB=de(r.hiB,.97,M*.65),r.fgR=de(r.fgR,.35,M*.75),r.fgG=de(r.fgG,.46,M*.75),r.fgB=de(r.fgB,.58,M*.75));const H=m?.weather,k=m?.rainRate??H?.rainRate??0,S=m?.cloudCover??H?.cloudCover??0,R=m?.stormDarkening??H?.stormDarkening,A=Number.isFinite(R)?be(R):be(Math.max(be(k)*.85,be(S)*.42)),O=be(m?.lightningFlash??H?.lightningFlash??0);if(A>1e-4){r.exposure*=1-.24*A,r.contrast+=.08*A,r.saturation=Math.max(.55,r.saturation*(1-.18*A)),r.vignette=be(r.vignette+.12*A),r.shR=de(r.shR,.75,A*.55),r.shG=de(r.shG,.82,A*.55),r.shB=de(r.shB,.96,A*.55),r.hiR=de(r.hiR,.83,A*.5),r.hiG=de(r.hiG,.9,A*.5),r.hiB=de(r.hiB,1.02,A*.5);const w=1-.38*A;r.fgR*=w,r.fgG*=w,r.fgB*=1-.28*A}const x=Number.isFinite(C)&&C>0?C:0,ne=x>0?1-Math.exp(-x/n):0;return s.exposure=de(s.exposure,r.exposure,ne),s.hiR=de(s.hiR,r.hiR,ne),s.hiG=de(s.hiG,r.hiG,ne),s.hiB=de(s.hiB,r.hiB,ne),o.contrast=de(o.contrast,r.contrast,ne),o.saturation=de(o.saturation,r.saturation,ne),o.vignette=be(de(o.vignette,r.vignette,ne)),o.shadowTint.setRGB(de(o.shadowTint.r,r.shR,ne),de(o.shadowTint.g,r.shG,ne),de(o.shadowTint.b,r.shB,ne)),o.fogColor.setRGB(de(o.fogColor.r,r.fgR,ne),de(o.fogColor.g,r.fgG,ne),de(o.fogColor.b,r.fgB,ne)),O>.001?(o.exposure=Math.min(2.2,s.exposure+O*.45),o.highlightTint.setRGB(de(s.hiR,1.25,O*.5),de(s.hiG,1.3,O*.5),de(s.hiB,1.45,O*.5))):(o.exposure=s.exposure,o.highlightTint.setRGB(s.hiR,s.hiG,s.hiB)),o.stormDarkening=de(o.stormDarkening,A,ne),o.daylightFactor=de(o.daylightFactor,M,ne),o.twilightFactor=de(o.twilightFactor,P,ne),o.biome=t,d(),o}function p(C=null){if(!C||i)return;C.renderer&&(C.renderer.toneMappingExposure=o.exposure);const m=C.fog??C.scene?.fog;m&&m.color&&m.color.isColor&&m.color.copy(o.fogColor),C.wetnessUniforms?.uWetSkyColor?.value?.isColor&&C.wetnessUniforms.uWetSkyColor.value.copy(o.fogColor).multiplyScalar(1.65)}function L(){if(!i){i=!0;for(let C=0;C<f.length;C++)try{f[C]()}catch{}f.length=0}}return{uniforms:c,update:F,setBiome:l,applyToScene:p,getState:()=>o,getUniforms:()=>c,dispose:L}}const on=Object.freeze({lantern_moth:Object.freeze({id:0,key:"lantern_moth",label:"Lantern Moth",ratio:.1875}),fern_spore:Object.freeze({id:1,key:"fern_spore",label:"Fern Spore",ratio:.25}),wind_leaf:Object.freeze({id:2,key:"wind_leaf",label:"Wind Leaf & Pine Needle",ratio:.28125}),alpine_snow:Object.freeze({id:3,key:"alpine_snow",label:"Alpine Snow Crystal",ratio:.28125})}),Rn=Object.freeze([on.lantern_moth,on.fern_spore,on.wind_leaf,on.alpine_snow]),tt=Math.PI*2,qt=16,io=38,Li=io*io,ki=18;function Ue(e,n,t){return e<n?n:e>t?t:e}function ut(e,n,t){const i=Ue((t-e)/(n-e),0,1);return i*i*(3-2*i)}function Oi(e){let n=e>>>0;return function(){n=n+1831565813|0;let i=Math.imul(n^n>>>15,1|n);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Bi(e){const n=Math.max(4,Math.floor(e)),t=[0,0,0,0];let i=0;for(let c=0;c<3;c++)t[c]=Math.max(1,Math.round(n*Rn[c].ratio)),i+=t[c];for(t[3]=Math.max(1,n-i);t[0]+t[1]+t[2]+t[3]>n;){let c=0;for(let s=1;s<4;s++)t[s]>t[c]&&(c=s);t[c]--}let a=0;const o={};for(let c=0;c<4;c++){const s=Rn[c].key;o[s]=Object.freeze({id:c,start:a,count:t[c],end:a+t[c]}),a+=t[c]}return{total:a,ranges:Object.freeze(o)}}function _n(e,n){let t=.1,i=.55,a=0;if(typeof e=="string"){const o=e.toLowerCase();o==="fern_hollow"||o==="fern"?(t=1,i=.65,a=0):o==="veil_falls"||o==="falls"||o==="spring_grotto"||o==="moon_door_sanctuary"||o==="moon_door"?(t=.92,i=.45,a=0):o==="elder_grove"||o==="elder_village"||o==="elders"||o==="elder_gorge"?(t=.22,i=1,a=0):o==="silver_meadow"||o==="meadow"?(t=.14,i=.92,a=0):o==="crown_ridge"||o==="ridge"||o==="crown_beacon"?(t=.04,i=.22,a=1):o==="north_gorge"||o==="gorge"?(t=.18,i=.35,a=.35):o==="spirit_tree"||o==="moonmere"||o==="reed_sanctuary"||o==="reeds"?(t=.36,i=.55,a=0):(o==="camp"||o==="hearth_camp"||o==="willow_hamlet")&&(t=.16,i=.72,a=0)}else if(e&&typeof e=="object")if(e.weights&&typeof e.weights=="object"){const o=e.weights,c=(o.fern_hollow||o.fern||0)+.92*(o.veil_falls||o.falls||0)+.85*(o.moon_door_sanctuary||o.spring_grotto||0)+.35*(o.spirit_tree||o.moonmere||o.reed_sanctuary||0),s=(o.elder_grove||o.elder_village||o.elders||0)+.92*(o.silver_meadow||o.meadow||0)+.7*(o.camp||o.hearth_camp||o.fern_hollow||0)+.25*(o.crown_ridge||o.north_gorge||0),r=(o.crown_ridge||o.ridge||0)+.35*(o.north_gorge||0);t=Ue(Math.max(.06,c),0,1),i=Ue(Math.max(.18,s),0,1),a=Ue(r,0,1)}else{const o=e.id??e.name??"";return _n(typeof o=="string"?o:"",n)}n.fern=t,n.leaf=i,n.alpine=a}const Gi=`
attribute vec4 aState; // x: alpha, y: worldSize, z: spin, w: energy
attribute vec4 aMeta;  // x: speciesId (0..3), y: seed1, z: seed2, w: seed3

uniform float uTime;
uniform float uPixelRatio;
uniform float uViewportScale;
uniform float uMaxDist;
uniform float uNightFactor;

varying float vSpecies;
varying float vAlpha;
varying float vSpin;
varying float vEnergy;
varying vec3 vSeeds;

void main() {
  float alpha = aState.x;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  float dist = -mvPosition.z;

  if (alpha <= 0.002 || dist <= 0.15 || dist > uMaxDist) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    vSpecies = aMeta.x;
    vAlpha = 0.0;
    vSpin = 0.0;
    vEnergy = 0.0;
    vSeeds = aMeta.yzw;
    return;
  }

  gl_Position = projectionMatrix * mvPosition;

  float distFade = 1.0 - smoothstep(uMaxDist * 0.72, uMaxDist, dist);
  float nearFade = smoothstep(0.25, 0.95, dist);
  float rawSize = (aState.y * uViewportScale) / max(dist, 0.45);
  float minPx = aMeta.x > 1.5 && aMeta.x < 2.5 ? 2.5 : 1.75;
  float shownPx = clamp(rawSize, minPx, 36.0);
  gl_PointSize = shownPx * uPixelRatio;

  // Sub-pixel energy conservation so distant fire-lit spores and snow sparkles stay soft instead of aliasing.
  float areaComp = min(1.0, (rawSize * rawSize) / max(shownPx * shownPx, 1.0));
  vSpecies = aMeta.x;
  vAlpha = alpha * distFade * nearFade * mix(0.45, 1.0, areaComp);
  vSpin = aState.z;
  vEnergy = aState.w;
  vSeeds = aMeta.yzw;
}
`,Ii=`
uniform float uTime;
uniform float uNightFactor;
uniform vec3 uLeafTintDay;
uniform vec3 uLeafTintNight;

varying float vSpecies;
varying float vAlpha;
varying float vSpin;
varying float vEnergy;
varying vec3 vSeeds;

void main() {
  if (vAlpha <= 0.002) discard;
  vec2 p = gl_PointCoord - 0.5;
  float r = length(p);
  if (r > 0.5) discard;

  vec3 premulRgb = vec3(0.0);
  float outAlpha = 0.0;

  if (vSpecies < 0.5) {
    // 0: lantern_moth — rapid fluttering twin-wing silhouette bathed in warm oil-lantern glow.
    float cs = cos(vSpin);
    float sn = sin(vSpin);
    vec2 rp = vec2(p.x * cs - p.y * sn, p.x * sn + p.y * cs);
    float wingBeat = 0.42 + 0.58 * abs(sin(uTime * (28.0 + vSeeds.x * 16.0) + vSeeds.y * 6.28318));
    vec2 lw = vec2((abs(rp.x) - 0.14 * wingBeat) / max(0.18 * wingBeat, 0.06), (rp.y - 0.02) / 0.24);
    float wingMask = smoothstep(1.05, 0.22, length(lw));
    float bodyMask = smoothstep(0.14, 0.03, length(vec2(rp.x * 2.4, rp.y * 0.9)));
    float halo = exp(-r * r * 14.0) * 0.48;
    float shape = clamp(max(wingMask * 0.85, bodyMask) + halo, 0.0, 1.0);
    vec3 warmGold = mix(vec3(1.15, 0.72, 0.32), vec3(1.45, 0.98, 0.55), vSeeds.z);
    float intensity = vAlpha * (0.75 + 0.55 * vEnergy);
    premulRgb = warmGold * shape * intensity * 1.45;
    outAlpha = clamp((wingMask * 0.55 + bodyMask * 0.65) * vAlpha, 0.0, 0.75);
  } else if (vSpecies < 1.5) {
    // 1: fern_spore — ethereal teal-gold bioluminescent bokeh drifting upward in mist.
    float core = exp(-r * r * 26.0);
    float bokeh = smoothstep(0.5, 0.04, r);
    float pulse = 0.5 + 0.5 * sin(uTime * (1.4 + vSeeds.x * 1.8) + vSeeds.y * 6.28318);
    vec3 teal = vec3(0.24, 1.18, 0.98);
    vec3 gold = vec3(1.22, 0.98, 0.38);
    vec3 col = mix(teal, gold, clamp(vSeeds.z * 0.65 + pulse * 0.35, 0.0, 1.0));
    float glow = (core * 1.55 + bokeh * 0.45) * vAlpha * (0.65 + 0.75 * vEnergy) * (0.75 + 0.35 * pulse);
    premulRgb = col * glow * mix(0.85, 1.45, uNightFactor);
    outAlpha = bokeh * 0.14 * vAlpha;
  } else if (vSpecies < 2.5) {
    // 2: wind_leaf — tumbling slender pine needles & forest leaves carried by live wind gusts.
    float cs = cos(vSpin);
    float sn = sin(vSpin);
    vec2 rp = vec2(p.x * cs - p.y * sn, p.x * sn + p.y * cs);
    bool isNeedle = vSeeds.x > 0.45;
    float shape;
    if (isNeedle) {
      vec2 np = vec2(rp.x / 0.42, rp.y / 0.065);
      shape = smoothstep(1.0, 0.25, length(np));
    } else {
      float taper = 1.0 - 0.45 * abs(rp.x / 0.38);
      vec2 lp = vec2(rp.x / 0.38, rp.y / max(0.18 * taper, 0.04));
      shape = smoothstep(1.0, 0.28, length(lp));
    }
    if (shape <= 0.01) discard;
    vec3 baseCol = mix(uLeafTintDay, uLeafTintNight, uNightFactor);
    vec3 varTint = isNeedle
      ? mix(vec3(0.75, 0.92, 0.78), vec3(0.95, 0.85, 0.62), vSeeds.y * 0.45)
      : mix(vec3(0.85, 0.96, 0.72), vec3(1.18, 0.78, 0.42), vSeeds.z);
    float topShade = 0.78 + 0.32 * smoothstep(-0.25, 0.25, rp.y);
    float a = shape * vAlpha * 0.88;
    premulRgb = baseCol * varTint * topShade * a;
    outAlpha = a;
  } else {
    // 3: alpine_snow — crisp faceted slow-drifting snow crystal with moonlit specular twinkle.
    float cs = cos(vSpin);
    float sn = sin(vSpin);
    vec2 rp = vec2(p.x * cs - p.y * sn, p.x * sn + p.y * cs);
    float softDisc = smoothstep(0.48, 0.05, r);
    float crossGlint = exp(-abs(rp.x) * 20.0) * exp(-abs(rp.y) * 5.0)
                     + exp(-abs(rp.y) * 20.0) * exp(-abs(rp.x) * 5.0);
    float twinkle = 0.65 + 0.75 * vEnergy;
    vec3 snowCol = mix(vec3(0.86, 0.93, 1.05), vec3(1.18, 1.24, 1.35), vSeeds.z);
    float mask = clamp(softDisc * 0.82 + crossGlint * 0.38 * vEnergy, 0.0, 1.0);
    premulRgb = snowCol * mask * vAlpha * twinkle;
    outAlpha = softDisc * 0.48 * vAlpha;
  }

  gl_FragColor = vec4(premulRgb, outAlpha);
}
`;function ha(e={}){const{count:n=1024,seed:t=1295135026,pixelRatio:i=1,viewportHeight:a=900,maxDistance:o=40,snowlineY:c=ki}=e,{total:s,ranges:r}=Bi(n),h=Oi(t),d=new Float32Array(s*3),l=new Float32Array(s*4),u=new Float32Array(s*4),f=new Float32Array(s),F=new Float32Array(s),p=new Float32Array(s),L=new Float32Array(s),C=new Float32Array(s),m=new Float32Array(s),b=new Float32Array(s),z=new Float32Array(s),M=new Int32Array(s);M.fill(-1);let P=128,H=new Float32Array(P),k=new Float32Array(P),S=new Float32Array(P),R=new Float32Array(P),A=0;const O=new Int32Array(qt),x=new Float32Array(qt);let ne=0;const w=new Float32Array(4),v=new Float32Array(4),V={vx:0,vz:0,gust:0,strength:0},y={fern:.1,leaf:.55,alpine:0},$={totalCount:s,drawCalls:1,activeCount:0,lanternCount:0,nearbyLanternCount:0,speciesActivity:{lantern_moth:0,fern_spore:0,wind_leaf:0,alpine_snow:0}};let ie=0,ce=!1,X=!1,_=0,I=0,N=0,E=null,B=.1,te=.55,G=0,Z=null,q="clear";function T(g,oe,D,W,ae){const K=h()*tt,re=1+Math.sqrt(h())*22,me=Math.cos(K)*re,pe=Math.sin(K)*re,He=-1.4+h()*6.5;d[g*3]=oe+me,d[g*3+1]=D+He,d[g*3+2]=W+pe,f[g]=0,F[g]=.14+h()*.24,p[g]=0,C[g]=4.5+h()*5,L[g]=ae?h()*C[g]:0,m[g]=h()*tt,b[g]=.35+h()*.55,z[g]=.7+h()*1.1,l[g*4+1]=.048+h()*.045,l[g*4+2]=h()*tt}function U(g,oe,D,W,ae,K,re){const me=h()*tt,pe=1.5+Math.sqrt(h())*24,He=Math.hypot(ae,K),ze=He>.3?Math.min(8,He*1.6):0,$e=He>.3?-(ae/He)*ze*h():0,ot=He>.3?-(K/He)*ze*h():0;d[g*3]=oe+Math.cos(me)*pe+$e,d[g*3+1]=D+(re?-1.5+h()*11.5:4+h()*9),d[g*3+2]=W+Math.sin(me)*pe+ot,f[g]=ae*(.65+h()*.55),F[g]=-(.32+h()*.52),p[g]=K*(.65+h()*.55),C[g]=5+h()*6,L[g]=re?h()*C[g]:0,m[g]=(h()<.5?-1:1)*(1.8+h()*3.8),b[g]=.72+h()*.48,z[g]=h()*tt,l[g*4+1]=.085+h()*.075,l[g*4+2]=h()*tt}function se(g,oe,D,W,ae,K,re){const me=h()*tt,pe=Math.sqrt(h())*25;d[g*3]=oe+Math.cos(me)*pe,d[g*3+1]=D+(re?-1.5+h()*14.5:8+h()*7.5),d[g*3+2]=W+Math.sin(me)*pe,f[g]=ae*.45,F[g]=-(.36+h()*.52),p[g]=K*.45,C[g]=7+h()*7,L[g]=re?h()*C[g]:0,m[g]=.36+h()*.52,b[g]=h()*tt,z[g]=2.4+h()*4.2,l[g*4+1]=.045+h()*.05,l[g*4+2]=h()*tt}for(let g=0;g<4;g++){const oe=r[Rn[g].key];for(let D=oe.start;D<oe.end;D++){const W=D*4;u[W]=g,u[W+1]=h(),u[W+2]=h(),u[W+3]=h(),l[W]=0,g===0?(m[D]=.18+h()*.48,b[D]=h()*tt,z[D]=(h()<.5?-1:1)*(1.7+h()*1.9),C[D]=1,L[D]=h(),l[W+1]=.068+h()*.042,l[W+2]=h()*tt,l[W+3]=.5+h()*.5):g===1?T(D,0,0,0,!0):g===2?U(D,0,0,0,.5,.2,!0):se(D,0,0,0,.2,.1,!0)}}const ue=new Wn,Y=new Dt(d,3);Y.setUsage(Ot);const j=new Dt(l,4);j.setUsage(Ot);const Q=new Dt(u,4);Q.setUsage(ti),ue.setAttribute("position",Y),ue.setAttribute("aState",j),ue.setAttribute("aMeta",Q),ue.boundingSphere=new hn(new ge(0,0,0),1e5);const fe={uTime:{value:0},uPixelRatio:{value:i},uViewportScale:{value:a*.5},uMaxDist:{value:o},uNightFactor:{value:1},uLeafTintDay:{value:new ee(.36,.48,.25)},uLeafTintNight:{value:new ee(.18,.28,.22)}},le=new Bt({name:"BiomeParticlesMaterial",uniforms:fe,vertexShader:Gi,fragmentShader:Ii,transparent:!0,depthWrite:!1,blending:ai,blendEquation:ii,blendSrc:oi,blendDst:ni}),Se=new ri(ue,le);Se.name="biome-particles",Se.frustumCulled=!1,Se.renderOrder=3;function Me(g){if(g<=P)return;let oe=P;for(;oe<g;)oe*=2;H=new Float32Array(oe),k=new Float32Array(oe),S=new Float32Array(oe),R=new Float32Array(oe),P=oe}function ve(g){if(A=0,!g)return 0;if(ArrayBuffer.isView(g)&&typeof g.length=="number"){const oe=Math.floor(g.length/3);Me(oe);for(let D=0;D<oe;D++){const W=g[D*3],ae=g[D*3+1],K=g[D*3+2];!Number.isFinite(W)||!Number.isFinite(ae)||!Number.isFinite(K)||(H[A]=W,k[A]=ae,S[A]=K,R[A]=1,A++)}return $.lanternCount=A,A}if(typeof g.length=="number"){Me(g.length);for(let oe=0;oe<g.length;oe++){const D=g[oe];if(!D)continue;let W,ae,K,re=1;if(Array.isArray(D)||ArrayBuffer.isView(D))W=D[0],ae=D[1],K=D[2],Number.isFinite(D[3])&&(re=D[3]);else if(typeof D=="object"){W=D.x,ae=D.y,K=D.z;const me=D.intensity??D.i;Number.isFinite(me)&&(re=me)}else continue;!Number.isFinite(W)||!Number.isFinite(ae)||!Number.isFinite(K)||re<=0||(H[A]=W,k[A]=ae,S[A]=K,R[A]=re,A++)}}return $.lanternCount=A,A}function _e(g,oe,D){ne=0;for(let W=0;W<A;W++){const ae=H[W]-g,K=k[W]-oe,re=S[W]-D,me=ae*ae+K*K+re*re;if(!(me>Li)){if(ne<qt){let pe=ne;for(;pe>0&&me<x[pe-1];)x[pe]=x[pe-1],O[pe]=O[pe-1],pe--;x[pe]=me,O[pe]=W,ne++}else if(me<x[qt-1]){let pe=qt-1;for(;pe>0&&me<x[pe-1];)x[pe]=x[pe-1],O[pe]=O[pe-1],pe--;x[pe]=me,O[pe]=W}}}$.nearbyLanternCount=ne}function Ge(g,oe,D,W){if(g){if(typeof g.sampleWindAt=="function"){const K=g.sampleWindAt(oe,D,W);K&&K!==W?(W.vx=Number.isFinite(K.vx)?K.vx:0,W.vz=Number.isFinite(K.vz)?K.vz:0,W.gust=Number.isFinite(K.gust)?K.gust:0,W.strength=Number.isFinite(K.strength)?K.strength:Math.hypot(W.vx,W.vz)):(Number.isFinite(W.vx)||(W.vx=0),Number.isFinite(W.vz)||(W.vz=0),Number.isFinite(W.gust)||(W.gust=0),Number.isFinite(W.strength)||(W.strength=Math.hypot(W.vx,W.vz)));return}if(typeof g=="function"){const K=g(oe,D,W);K&&K!==W&&(W.vx=Number.isFinite(K.vx)?K.vx:0,W.vz=Number.isFinite(K.vz)?K.vz:0,W.gust=Number.isFinite(K.gust)?K.gust:0,W.strength=Number.isFinite(K.strength)?K.strength:Math.hypot(W.vx,W.vz));return}if(typeof g=="object"){const K=Number.isFinite(g.vx)?g.vx:Number.isFinite(g.x)?g.x:.45,re=Number.isFinite(g.vz)?g.vz:Number.isFinite(g.z)?g.z:.15;W.vx=K,W.vz=re,W.gust=Number.isFinite(g.gust)?g.gust:.2,W.strength=Number.isFinite(g.strength)?g.strength:Math.hypot(K,re);return}}const ae=ie*.45+oe*.04+D*.03;W.vx=.55+.35*Math.sin(ae),W.vz=.2+.25*Math.cos(ae*.8),W.gust=.15+.15*Math.sin(ae*1.7),W.strength=Math.hypot(W.vx,W.vz)}function Fe(g){if(!g||typeof g!="object")return 1;if(Number.isFinite(g.lampsOn))return Ue(g.lampsOn,0,1);if(Number.isFinite(g.nightFactor))return Ue(g.nightFactor,0,1);if(Number.isFinite(g.starIntensity))return Ue(g.starIntensity,0,1);if(Number.isFinite(g.sunAltitude))return ut(.08,-.05,g.sunAltitude);if(Number.isFinite(g.hour)){const oe=(g.hour%24+24)%24;return oe>=20||oe<=4.5?1:oe>=7&&oe<=17.5?0:oe>4.5&&oe<7?1-ut(4.5,7,oe):ut(17.5,20,oe)}return 1}function Te(g,oe){if(ce)return;const D=Number.isFinite(g)?Ue(g,0,.1):0,W=oe||null;let ae=_,K=I,re=N;const me=W?W.playerPos:null;me&&(Array.isArray(me)||ArrayBuffer.isView(me)?(Number.isFinite(me[0])&&(ae=me[0]),Number.isFinite(me[1])&&(K=me[1]),Number.isFinite(me[2])&&(re=me[2])):typeof me=="object"&&(Number.isFinite(me.x)&&(ae=me.x),Number.isFinite(me.y)&&(K=me.y),Number.isFinite(me.z)&&(re=me.z)));const pe=W?W.windField:null,He=W?W.ephemeris:null,ze=W?W.weather:null,$e=W?W.biome:null,ot=(ae-_)**2+(K-I)**2+(re-N)**2,Ce=!X||ot>2025;_=ae,I=K,N=re,Ge(pe,ae,re,V);const Ve=V.vx,it=V.vz,Ht=Math.hypot(Ve,it);if(Ce){X=!0;const ye=r.fern_spore;for(let J=ye.start;J<ye.end;J++)T(J,ae,K,re,!0);const Ne=r.wind_leaf;for(let J=Ne.start;J<Ne.end;J++)U(J,ae,K,re,Ve,it,!0);const et=r.alpine_snow;for(let J=et.start;J<et.end;J++)se(J,ae,K,re,Ve,it,!0)}ie+=D,fe.uTime.value=ie;const gn=Fe(He);fe.uNightFactor.value=gn;let Je="clear",Ut=0,Qt=0,Tt=.15,Gt=.25;if(typeof ze=="string")ze!==Z&&(Z=ze,q=ze.toLowerCase()),Je=q,Je==="thunderstorm"||Je==="storm"||Je==="heavy_rain"?(Ut=.95,Tt=.55,Gt=1):Je==="drizzle"||Je==="rain"?(Ut=.4,Tt=.35,Gt=.45):Je==="valley_mist"||Je==="mist"?(Tt=.85,Gt=.18):(Je==="summit_flurries"||Je==="snow")&&(Qt=.9,Tt=.45,Gt=.6);else if(ze&&typeof ze=="object"){const ye=ze.state??ze.preset??ze.id??"clear";typeof ye=="string"&&(ye!==Z&&(Z=ye,q=ye.toLowerCase()),Je=q),Ut=Number.isFinite(ze.rainRate)?Ue(ze.rainRate,0,1):Je==="thunderstorm"?.95:Je==="drizzle"?.38:0,Qt=Number.isFinite(ze.snowRate)?Ue(ze.snowRate,0,1):Je==="summit_flurries"?.9:0,Tt=Number.isFinite(ze.fogDensity)?Ue(ze.fogDensity,0,1):Je==="valley_mist"?.85:.15,Gt=Number.isFinite(ze.windStrength)?Ue(ze.windStrength,0,2):Je==="thunderstorm"?1:.25}typeof $e=="string"?$e!==E?(E=$e,_n($e,y),B=y.fern,te=y.leaf,G=y.alpine):(y.fern=B,y.leaf=te,y.alpine=G):_n($e,y),_e(ae,K,re);const Ho=ut(.22,.72,gn),Uo=1-ut(.18,.55,Ut);v[0]=ne>0?Ho*Uo:0;const jo=1+.35*Tt,Vo=1-.45*Ut;v[1]=Ue(y.fern*jo*(.76+.24*gn)*Vo,0,1);const Zo=Ue(.26+.42*Gt+.16*Ht,.2,1);v[2]=Ue(y.leaf*Zo,0,1);const qo=Je==="summit_flurries",Xo=ut(c-2.5,c,K),$o=qo?Math.max(.92,Qt):Qt,Bn=Math.max(Xo,$o),Yo=Bn>.01?y.alpine*.15:0;v[3]=Ue(Bn+Yo,0,1);for(let ye=0;ye<4;ye++){const Ne=v[ye],et=w[ye];if(D<=0)et===0&&Ne>0&&(w[ye]=Ne);else{const J=ye===0&&Ne<et?6:2.6,Pe=1-Math.exp(-J*D),Oe=et+(Ne-et)*Pe;w[ye]=Ne===0&&Oe<.004?0:Oe}}let jt=0;{const ye=r.lantern_moth,Ne=w[0],et=v[0]<.05&&Ne>.002,J=ne>0?Math.min(ye.count,Math.max(ne*10,Math.round(ye.count*Ne))):0;for(let Pe=ye.start;Pe<ye.end;Pe++){const Oe=Pe-ye.start,De=Pe*4,at=Pe*3;if(Ne<=.003||ne===0||Oe>=J){l[De]=0;continue}const ct=O[Oe%ne],Pt=H[ct],dt=k[ct],gt=S[ct],pt=R[ct],st=m[Pe],ht=et?1+(1-Ne)*2.8:1,Ft=z[Pe]*(et?1.7:1),Ye=b[Pe]+Ft*D;b[Pe]=Ye>tt*16?Ye-tt*16:Ye<-tt*16?Ye+tt*16:Ye;const vt=u[De+1],yt=u[De+2],wt=st*ht*(.82+.24*Math.sin(Ye*2.3+vt*tt)),Vt=Math.cos(Ye)*wt+Ve*.035,Ko=.06+.16*Math.sin(Ye*2+yt*tt)+.05*Math.sin(Ye*5)-(et?(1-Ne)*.45:0),Qo=Math.sin(Ye)*wt*.78+it*.035,Gn=Pt+Vt,In=dt+Ko,En=gt+Qo;if(M[Pe]!==ct)d[at]=Gn,d[at+1]=In,d[at+2]=En,f[Pe]=0,F[Pe]=0,p[Pe]=0,M[Pe]=ct;else if(D>0){const pn=1-Math.exp(-9*D),Hn=(Gn-d[at])*pn,Un=(In-d[at+1])*pn,jn=(En-d[at+2])*pn;d[at]+=Hn,d[at+1]+=Un,d[at+2]+=jn;const vn=1/D;f[Pe]=Hn*vn,F[Pe]=Un*vn,p[Pe]=jn*vn}const Jo=Ue((J-Oe)*.25,0,1),ei=Ue(pt*.22,.55,1.35);l[De]=Ne*Jo,l[De+2]=Ye+1.5708,l[De+3]=ei*(.75+.25*Math.sin(ie*9+vt*17)),jt++}}{const ye=r.fern_spore,Ne=w[1],et=Math.round(ye.count*Ne);for(let J=ye.start;J<ye.end;J++){const Pe=J-ye.start,Oe=J*4,De=J*3;if(Ne<=.003||Pe>=et){l[Oe]=0;continue}L[J]+=D;const at=d[De],ct=d[De+1],Pt=d[De+2],dt=at-ae,gt=ct-K,pt=Pt-re;(L[J]>=C[J]||dt*dt+pt*pt>676||gt>11.5||gt<-4)&&T(J,ae,K,re,!1);const st=m[J]+ie*z[J],ht=b[J],Ft=Math.cos(st)*ht+Ve*.16,Ye=F[J]+.06*Math.sin(st*1.4),vt=Math.sin(st)*ht+it*.16;f[J]=Ft,p[J]=vt,d[De]+=Ft*D,d[De+1]+=Ye*D,d[De+2]+=vt*D;const yt=Ue(L[J]/Math.max(C[J],.1),0,1),wt=ut(0,.18,yt)*(1-ut(.75,1,yt));l[Oe]=Ne*wt,l[Oe+2]=st,l[Oe+3]=.6+.65*y.fern+.25*Tt,jt++}}{const ye=r.wind_leaf,Ne=w[2],et=Math.round(ye.count*Ne);for(let J=ye.start;J<ye.end;J++){const Pe=J-ye.start,Oe=J*4,De=J*3;if(Ne<=.003||Pe>=et){l[Oe]=0;continue}L[J]+=D;const at=d[De],ct=d[De+1],Pt=d[De+2],dt=at-ae,gt=ct-K,pt=Pt-re;(L[J]>=C[J]||dt*dt+pt*pt>784||gt<-3.5||gt>16)&&U(J,ae,K,re,Ve,it,!1),Ge(pe,d[De],d[De+2],V);const st=b[J],ht=z[J]+ie*3.1,Ft=V.vx*st+Math.sin(ht)*.32,Ye=V.vz*st+Math.cos(ht*.87)*.32,vt=-(.42+.35*u[Oe+1])+V.gust*.55+.18*Math.sin(ht*1.3),yt=D>0?1-Math.exp(-3.6*D):0;f[J]+=(Ft-f[J])*yt,F[J]+=(vt-F[J])*yt,p[J]+=(Ye-p[J])*yt,d[De]+=f[J]*D,d[De+1]+=F[J]*D,d[De+2]+=p[J]*D,l[Oe+2]+=m[J]*(1+V.gust*.9)*D;const wt=Ue(L[J]/Math.max(C[J],.1),0,1),Vt=ut(0,.12,wt)*(1-ut(.82,1,wt));l[Oe]=Ne*Vt,l[Oe+3]=Ue(V.strength*.4,.2,1),jt++}}{const ye=r.alpine_snow,Ne=w[3],et=Math.round(ye.count*Ne);for(let J=ye.start;J<ye.end;J++){const Pe=J-ye.start,Oe=J*4,De=J*3;if(Ne<=.003||Pe>=et){l[Oe]=0;continue}L[J]+=D;const at=d[De],ct=d[De+1],Pt=d[De+2],dt=at-ae,gt=ct-K,pt=Pt-re;(L[J]>=C[J]||dt*dt+pt*pt>784||gt<-3.2||gt>18)&&se(J,ae,K,re,Ve,it,!1);const st=b[J]+ie*1.45,ht=Ve*.48+Math.sin(st)*.34,Ft=-m[J]+.08*Math.sin(st*1.6),Ye=it*.48+Math.cos(st*.92)*.34;f[J]=ht,F[J]=Ft,p[J]=Ye,d[De]+=ht*D,d[De+1]+=Ft*D,d[De+2]+=Ye*D;const vt=Ue(L[J]/Math.max(C[J],.1),0,1),yt=ut(0,.14,vt)*(1-ut(.84,1,vt)),wt=Math.sin(ie*z[J]+u[Oe+2]*19),Vt=wt>.65?(wt-.65)/.35:.12;l[Oe]=Ne*yt,l[Oe+2]+=.45*D,l[Oe+3]=Vt,jt++}}Y.needsUpdate=!0,j.needsUpdate=!0,$.activeCount=jt,$.speciesActivity.lantern_moth=w[0],$.speciesActivity.fern_spore=w[1],$.speciesActivity.wind_leaf=w[2],$.speciesActivity.alpine_snow=w[3]}function Le(g){const oe=r[g];return oe?w[oe.id]:0}function Ie(g,oe=null){const D=oe||{activeCount:0,meanAlpha:0,meanX:0,meanY:0,meanZ:0,meanVx:0,meanVy:0,meanVz:0,meanSpeed:0},W=r[g];if(!W)return D.activeCount=0,D.meanAlpha=0,D.meanX=D.meanY=D.meanZ=0,D.meanVx=D.meanVy=D.meanVz=D.meanSpeed=0,D;let ae=0,K=0,re=0,me=0,pe=0,He=0,ze=0,$e=0,ot=0;for(let Ce=W.start;Ce<W.end;Ce++){const Ve=l[Ce*4];Ve>.002&&(ae++,K+=Ve,re+=d[Ce*3],me+=d[Ce*3+1],pe+=d[Ce*3+2],He+=f[Ce],ze+=F[Ce],$e+=p[Ce],ot+=Math.hypot(f[Ce],F[Ce],p[Ce]))}if(D.activeCount=ae,ae>0){const Ce=1/ae;D.meanAlpha=K*Ce,D.meanX=re*Ce,D.meanY=me*Ce,D.meanZ=pe*Ce,D.meanVx=He*Ce,D.meanVy=ze*Ce,D.meanVz=$e*Ce,D.meanSpeed=ot*Ce}else D.meanAlpha=0,D.meanX=D.meanY=D.meanZ=0,D.meanVx=D.meanVy=D.meanVz=D.meanSpeed=0;return D}function ke(g){Number.isFinite(g)&&g>0&&(fe.uPixelRatio.value=g)}function Ee(g){Number.isFinite(g)&&g>0&&(fe.uViewportScale.value=g*.5)}function Ae(){ce||(ce=!0,ue.dispose(),le.dispose(),A=0,ne=0,$.activeCount=0,$.lanternCount=0,$.nearbyLanternCount=0)}return{mesh:Se,points:Se,object:Se,geometry:ue,material:le,uniforms:fe,count:s,speciesRanges:r,setLanterns:ve,update:Te,setPixelRatio:ke,setViewportHeight:Ee,getSpeciesActivity:Le,getSpeciesMetrics:Ie,getStats:()=>$,get isDisposed(){return ce},dispose:Ae}}const ao=Math.PI*2,Ei=7/300,Do=`
varying vec3 vWorldDir;

void main() {
  vWorldDir = position;
  vec4 clipPos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = clipPos.xyww;
}
`,Ao=`
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uSunColor;
uniform vec3 uMoonColor;
uniform vec3 uZenithColor;
uniform vec3 uHorizonColor;
uniform float uSunAlt;
uniform float uMoonAlt;
uniform float uMoonPhase;
uniform float uMoonDiscRadius;
uniform float uDayFactor;
uniform float uTwilightFactor;
uniform float uStarIntensity;
uniform float uMilkyWayIntensity;
uniform float uSiderealAngle;
uniform float uCloudCover;
uniform float uStormDarkening;
uniform float uLightningFlash;
uniform float uAuroraStrength;
uniform vec3 uMeteor0Pos;
uniform vec3 uMeteor0Dir;
uniform vec4 uMeteor0Params;
uniform vec3 uMeteor1Pos;
uniform vec3 uMeteor1Dir;
uniform vec4 uMeteor1Params;

varying vec3 vWorldDir;

const float SKY_PI = 3.14159265359;

// Fast deterministic ALU hashes (zero texture fetches)
float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}

float hash12(vec2 p) {
  vec3 p3 = fract(p.xyx * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm2(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
  for (int i = 0; i < 4; i++) {
    sum += amp * noise2(p);
    p = rot * p * 2.04 + vec2(1.7, 9.2);
    amp *= 0.5;
  }
  return sum / 0.9375;
}

float noise3(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i);
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z
  );
}

float fbm3(vec3 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += amp * noise3(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    amp *= 0.5;
  }
  return sum / 0.9375;
}

// Henyey-Greenstein Mie phase function (safe against negative pow)
float hgPhase(float cosTheta, float g) {
  float g2 = g * g;
  float denom = max(1.0 + g2 - 2.0 * g * cosTheta, 0.0005);
  return (1.0 - g2) / (12.5663706 * denom * sqrt(denom));
}

// Rayleigh phase function
float rayleighPhase(float cosTheta) {
  return 0.0596831 * (1.0 + cosTheta * cosTheta);
}

// Rotate view direction into celestial sphere frame wheeling smoothly around North Celestial Pole (-Z, ~46.5 deg elev)
vec3 toCelestialFrame(vec3 d, float angle) {
  // Tilt into equatorial plane (latitude ~46.5 deg -> cos 0.688, sin 0.725)
  vec3 eq = vec3(
    d.x,
    d.y * 0.6884 + d.z * 0.7254,
    -d.y * 0.7254 + d.z * 0.6884
  );
  float c = cos(angle);
  float s = sin(angle);
  return vec3(
    eq.x * c - eq.y * s,
    eq.x * s + eq.y * c,
    eq.z
  );
}

// 3D isotropic star lattice layer (zero polar pinching or wrap seams)
vec3 starLayer(vec3 cd, float scale, float densityCut, float brightScale, float horizonScint) {
  vec3 p = cd * scale;
  vec3 cell = floor(p);
  vec3 f = fract(p);
  vec3 rnd = hash33(cell);
  if (rnd.z < densityCut) return vec3(0.0);

  vec3 starPos = 0.18 + 0.64 * rnd;
  float dist = length(f - starPos);
  float magNorm = (rnd.z - densityCut) / max(1.0 - densityCut, 0.001);
  float radius = mix(0.055, 0.125, magNorm);
  float core = 1.0 - smoothstep(0.0, radius, dist);
  if (core <= 0.001) return vec3(0.0);

  float mag = pow(max(magNorm, 1e-4), 3.2) * brightScale;
  float twSpeed = 1.6 + rnd.x * 3.8;
  float twPhase = rnd.y * 43.0 + rnd.x * 19.0;
  float twinkle = 1.0 - horizonScint * (0.22 + 0.24 * sin(uTime * twSpeed + twPhase));

  // Blackbody tint: blue-white (O/B), crisp white (A/F), warm gold (K/M)
  vec3 starCol = mix(
    vec3(0.72, 0.84, 1.0),
    mix(vec3(0.95, 0.97, 1.0), vec3(1.0, 0.82, 0.62), smoothstep(0.55, 0.96, rnd.x)),
    smoothstep(0.12, 0.65, rnd.x)
  );
  return starCol * (core * core) * mag * twinkle;
}

// Procedural Milky Way galactic band + Great Rift dark dust clouds
vec3 evalMilkyWay(vec3 cd) {
  // Galactic north pole & tangent axes in celestial coordinates
  vec3 galN = normalize(vec3(0.42, 0.64, -0.64));
  vec3 galU = normalize(cross(vec3(0.0, 1.0, 0.0), galN));
  vec3 galV = cross(galN, galU);

  float galLat = dot(cd, galN);
  float galLon = atan(dot(cd, galV), dot(cd, galU) + 1e-6);
  float band = exp(-galLat * galLat * 16.0);
  float broadVeil = exp(-galLat * galLat * 4.5);

  vec3 sampleP = cd * 3.4 + vec3(1.2, -0.8, 2.3);
  float clouds = fbm3(sampleP);
  float fineDust = fbm3(cd * 8.5 + vec3(4.1, 2.7, -1.9));
  // Dark Great Rift lane bisecting the brightest galactic ribbon
  float rift = smoothstep(0.36, 0.72, fbm3(cd * 5.2 + vec3(0.0, galLon * 0.25, 3.3)));
  float riftMask = 1.0 - 0.62 * exp(-galLat * galLat * 95.0) * rift;

  float coreLon = 0.55 + 0.45 * cos(galLon - 0.85);
  float lum = (band * (0.45 + 0.85 * clouds) * riftMask + broadVeil * 0.22 * fineDust) * coreLon;

  vec3 outerCol = vec3(0.11, 0.16, 0.28);
  vec3 coreCol = vec3(0.30, 0.32, 0.40);
  return mix(outerCol, coreCol, smoothstep(0.25, 0.78, clouds) * band) * lum * 0.34;
}

// Single shooting-star meteor streak evaluation
vec3 evalMeteor(vec3 d, vec3 headPos, vec3 moveDir, vec4 params) {
  float intensity = params.x;
  if (intensity <= 0.002 || d.y < 0.02) return vec3(0.0);

  float lenRad = max(params.y, 0.01);
  float widthRad = max(params.z, 0.0005);
  vec3 delta = d - headPos;
  float along = dot(delta, moveDir);
  if (along > widthRad * 3.0 || along < -lenRad) return vec3(0.0);

  float clampedAlong = clamp(along, -lenRad, 0.0);
  float tailT = clamp(-clampedAlong / lenRad, 0.0, 1.0);
  vec3 closest = headPos + moveDir * clampedAlong;
  float perpDist = length(d - closest);

  float halfW = widthRad * mix(1.0, 0.12, tailT);
  float crossProfile = 1.0 - smoothstep(0.0, halfW, perpDist);
  float headGlow = exp(-length(delta) / (widthRad * 2.4)) * 1.35;
  float tailInv = max(1.0 - tailT, 0.0);
  float tailFade = tailInv * tailInv;

  vec3 headCol = vec3(0.94, 0.98, 1.0);
  vec3 tailCol = vec3(0.58, 0.78, 1.0);
  vec3 col = mix(headCol, tailCol, tailT);
  return col * (crossProfile * tailFade + headGlow) * intensity;
}

// Shimmering 4-layer folded Northern Aurora curtains over North Gorge / Crown Ridge (-Z)
vec3 evalAurora(vec3 d) {
  if (uAuroraStrength <= 0.004 || d.y <= 0.015 || -d.z <= -0.15) return vec3(0.0);

  float northArc = smoothstep(-0.12, 0.58, -d.z);
  float elevMask = smoothstep(0.03, 0.18, d.y) * (1.0 - smoothstep(0.56, 0.88, d.y));
  float mask = northArc * elevMask;
  if (mask <= 0.001) return vec3(0.0);

  vec3 accum = vec3(0.0);
  float invY = 1.0 / max(d.y + 0.09, 0.09);

  for (int i = 0; i < 4; i++) {
    float fi = float(i);
    float h = 0.24 + fi * 0.11;
    vec2 p = d.xz * (h * invY);

    // Slow drifting folded geomagnetic ribbon running East-West along northern sky (-Z)
    float drift = uTime * (0.045 + fi * 0.008);
    float warp = fbm2(vec2(p.x * 0.42 + drift * 0.6, p.y * 0.28 - drift * 0.35 + fi * 1.3));
    float ribbonWave = sin(p.x * 1.15 + uTime * 0.14 + warp * 4.2 + fi * 0.45);
    float ridgeDist = abs(p.y + 0.78 + ribbonWave * 0.26 + fi * 0.05);
    float curtain = exp(-ridgeDist * 5.2);

    // Vertical magnetic field striations shimmering smoothly across the folded veil
    float rays = 0.48 + 0.52 * sin(p.x * 14.5 + warp * 9.0 - uTime * (0.75 + fi * 0.12));
    float shimmer = 0.65 + 0.35 * noise2(vec2(p.x * 3.8 - uTime * 0.22, fi * 2.7 + uTime * 0.18));

    // Physically grounded altitude spectrum: lower emerald-teal (O 557.7 nm) -> mid cyan -> upper violet (N2 / O 630 nm)
    float altT = fi / 3.0;
    vec3 lowCol = vec3(0.08, 0.86, 0.56);
    vec3 midCol = vec3(0.12, 0.64, 0.78);
    vec3 topCol = vec3(0.52, 0.20, 0.86);
    vec3 layerCol = altT < 0.5
      ? mix(lowCol, midCol, altT * 2.0)
      : mix(midCol, topCol, (altT - 0.5) * 2.0);

    float layerWeight = mix(1.0, 0.52, altT);
    accum += layerCol * curtain * rays * shimmer * layerWeight;
  }

  return accum * mask * uAuroraStrength * 0.28;
}

void main() {
  vec3 d = normalize(vWorldDir);
  float elev = max(d.y, 0.0);
  float clearSky = 1.0 - smoothstep(0.12, 0.92, uCloudCover);

  // 1. Physical Rayleigh + Mie atmospheric gradient anchored to Moonriver's calibrated palette
  // Optical depth grows smoothly toward the horizon without singularity.
  float airmass = 1.0 / (elev + 0.068);
  float horizonCurve = elev > 0.0 ? pow(elev, 0.58) : 0.0;
  vec3 baseGradient = mix(uHorizonColor, uZenithColor, horizonCurve);

  // Wavelength-selective Rayleigh sky scattering during daylight & twilight
  vec3 betaR = vec3(0.20, 0.47, 1.0);
  float sunCos = dot(d, uSunDir);
  float sunPath = 1.0 / (max(uSunDir.y, 0.0) + 0.09);
  vec3 sunTransmit = exp(-betaR * sunPath * 0.36);

  float scatterPath = clamp(airmass * 0.068, 0.0, 1.0);
  float rPhase = rayleighPhase(sunCos);
  vec3 physicalRayleigh = betaR * (0.42 + 1.35 * rPhase) * mix(0.26, 0.95, 1.0 - scatterPath * 0.45);
  vec3 sunInScatter = sunTransmit * (0.35 + 0.65 * scatterPath);
  vec3 dayPhysical = mix(physicalRayleigh * 0.48, uHorizonColor * 1.08 + sunInScatter * 0.24, pow(max(scatterPath, 1e-4), 1.35));

  vec3 col = mix(baseGradient, mix(baseGradient, dayPhysical, 0.52), uDayFactor);

  // Twilight directional horizon glow (warm rose-gold dawn / crimson-amber dusk toward sun azimuth)
  float sunHorizVis = smoothstep(-0.24, 0.16, uSunAlt);
  float sPos = max(sunCos, 0.0);
  float sunAzGlow = (sPos * sPos * sPos) * exp(-elev * 6.8) * sunHorizVis;
  col += uSunColor * sunAzGlow * (0.55 * uTwilightFactor + 0.16 * uDayFactor) * (1.0 - uStormDarkening * 0.65);

  // Mie solar forward scattering halo + limb-darkened solar disc
  if (uSunDir.y > -0.06) {
    float sunAbove = smoothstep(-0.04, 0.04, uSunDir.y) * smoothstep(-0.02, 0.02, d.y);
    float sunMie = hgPhase(sunCos, 0.78) * 0.42 + hgPhase(sunCos, 0.94) * 0.14;
    col += uSunColor * sunTransmit * sunMie * sunAbove * (1.0 - uCloudCover * 0.72) * 0.85;

    float sunAng = acos(clamp(sunCos, -1.0, 1.0));
    float sunDiscR = 0.015;
    float sunDisc = 1.0 - smoothstep(sunDiscR * 0.72, sunDiscR * 1.15, sunAng);
    float limb = sqrt(max(0.0, 1.0 - clamp((sunAng / sunDiscR) * (sunAng / sunDiscR), 0.0, 1.0)));
    vec3 discCol = mix(vec3(1.0, 0.72, 0.42), vec3(1.0, 0.96, 0.88), sqrt(limb)) * sunTransmit;
    col += discCol * sunDisc * sunAbove * (1.0 - uCloudCover * 0.88) * 2.4;
  }

  // 2. Moon Mie halo, corona & phase-lit procedural cratered Moon disc
  float moonCos = dot(d, uMoonDir);
  float moonGlare = 0.0;
  if (uMoonDir.y > -0.05) {
    float moonAbove = smoothstep(-0.04, 0.03, uMoonDir.y) * smoothstep(-0.02, 0.03, d.y);
    float moonIllum = 0.5 * (1.0 - cos(uMoonPhase * SKY_PI));
    float moonAng = acos(clamp(moonCos, -1.0, 1.0));
    float discR = max(uMoonDiscRadius, 0.008);

    // Subtle Rayleigh/Mie lunar sky veil + crisp warm-close / cool-outer corona matching forest.js
    float rim = smoothstep(discR * 0.95, discR * 1.22, moonAng);
    float mPos = max(moonCos, 0.0);
    float mPow24 = mPos > 0.001 ? pow(mPos, 24.0) : 0.0;
    float mPow650 = mPos > 0.5 ? pow(mPos, 650.0) : 0.0;
    float mPow48 = mPos > 0.05 ? pow(mPos, 48.0) : 0.0;
    float mieMoon = hgPhase(moonCos, 0.76) * 0.042;
    vec3 lunarGlow = uMoonColor * (mPow24 * 0.032 + mieMoon)
      + vec3(0.62, 0.58, 0.50) * mPow650 * 0.36 * rim;
    float moonCloudVis = 1.0 - uCloudCover * 0.58;
    col += lunarGlow * moonAbove * (0.25 + 0.75 * moonIllum) * moonCloudVis * (1.0 - uDayFactor * 0.82);

    moonGlare = clamp(mPow48 * 0.92 * moonAbove * moonIllum, 0.0, 0.95);

    // Phase-lit lunar disc with procedural maria & crater relief (skipped when external moon mesh owns the disc)
    if (uMoonDiscRadius > 0.0005 && moonAng < discR * 1.15) {
      vec3 refUp = abs(uMoonDir.y) > 0.96 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
      vec3 mRight = normalize(cross(refUp, uMoonDir));
      vec3 mUp = cross(uMoonDir, mRight);
      vec2 discUV = vec2(dot(d, mRight), dot(d, mUp)) / discR;
      float r2 = dot(discUV, discUV);
      float discEdge = 1.0 - smoothstep(0.94, 1.04, sqrt(r2));

      if (discEdge > 0.001) {
        vec3 sphereN = vec3(discUV, sqrt(max(0.0, 1.0 - min(r2, 1.0))));
        float maria = fbm3(sphereN * 2.4 + vec3(0.7, -0.4, 1.1));
        float craters = fbm3(sphereN * 11.0 + vec3(-2.1, 1.3, 0.5));
        float pits = smoothstep(0.64, 0.76, noise3(sphereN * 16.0)) * 0.22;

        // Warm cream lunar albedo matching forest.js lines 328-334
        vec3 moonAlbedo = vec3(1.0, 0.93, 0.80)
          * (0.44 + 0.60 * smoothstep(0.38, 0.62, maria))
          * (0.84 + 0.26 * craters)
          - vec3(pits);

        // Phase lighting terminator across spherical lunar normal
        float phaseAng = (1.0 - uMoonPhase) * SKY_PI;
        vec3 phaseLight = normalize(vec3(sin(phaseAng), 0.14 * sin(phaseAng), cos(phaseAng)));
        float phaseLit = smoothstep(-0.08, 0.22, dot(sphereN, phaseLight));
        float limbDark = 0.78 + 0.22 * sphereN.z;
        float earthshine = 0.045 * (1.0 - uDayFactor);
        vec3 litDisc = max(moonAlbedo, vec3(0.02)) * (earthshine + 1.02 * phaseLit) * limbDark;

        float discOpacity = discEdge * moonAbove * (1.0 - uCloudCover * 0.84) * (1.0 - uDayFactor * 0.65);
        col = mix(col, litDisc, clamp(discOpacity, 0.0, 1.0));
        moonGlare = max(moonGlare, discEdge);
      }
    }
  }

  // 3. Multi-magnitude twinkling starfield & Milky Way galactic band (rotated in celestial space)
  float horizonVis = smoothstep(0.015, 0.22, d.y);
  float nightSkyVis = clearSky * horizonVis * (1.0 - uStormDarkening * 0.85);
  if ((uStarIntensity > 0.004 || uMilkyWayIntensity > 0.004) && nightSkyVis > 0.002) {
    vec3 cd = toCelestialFrame(d, uSiderealAngle);

    if (uMilkyWayIntensity > 0.004) {
      vec3 mw = evalMilkyWay(cd);
      col += mw * uMilkyWayIntensity * nightSkyVis * (1.0 - moonGlare * 0.85);
    }

    if (uStarIntensity > 0.004) {
      float horizonScint = mix(0.95, 0.28, smoothstep(0.04, 0.55, d.y));
      vec3 fineStars = starLayer(cd, 155.0, 0.76, 1.45, horizonScint);
      vec3 heroStars = starLayer(cd + vec3(0.37, 0.19, 0.61), 72.0, 0.88, 2.35, horizonScint * 0.85);
      col += (fineStars + heroStars) * uStarIntensity * nightSkyVis * (1.0 - moonGlare * 0.92);
    }
  }

  // 4. Periodic shooting-star meteor streaks across the upper clear night sky
  if (nightSkyVis > 0.05 && uStarIntensity > 0.15) {
    vec3 meteors = evalMeteor(d, uMeteor0Pos, uMeteor0Dir, uMeteor0Params)
                 + evalMeteor(d, uMeteor1Pos, uMeteor1Dir, uMeteor1Params);
    col += meteors * nightSkyVis * uStarIntensity;
  }

  // 5. Shimmering Northern Aurora curtains above North Gorge / Crown Ridge (-Z)
  if (uAuroraStrength > 0.004) {
    col += evalAurora(d) * clearSky * (1.0 - uStormDarkening * 0.85);
  }

  // 6. Cloud overcast softening, storm darkening & sheet-lightning bounce
  vec3 overcastBase = mix(uHorizonColor, uZenithColor, 0.35) * 0.82;
  col = mix(col, overcastBase, uCloudCover * 0.32 * (0.45 + 0.55 * uDayFactor));

  vec3 stormSlate = mix(vec3(0.010, 0.014, 0.024), vec3(0.08, 0.10, 0.14), uDayFactor);
  col = mix(col, stormSlate, uStormDarkening * 0.66);

  if (uLightningFlash > 0.001) {
    float flashGlow = uLightningFlash * (0.28 + 0.58 * (1.0 - elev));
    col += vec3(0.54, 0.68, 0.95) * flashGlow;
  }

  // Below-horizon fade so planar water reflections stay seamless with zero equator pop
  float belowFade = 1.0 - smoothstep(-0.18, 0.0, d.y);
  col = mix(col, uHorizonColor * 0.52 * (1.0 - uStormDarkening * 0.55), belowFade);

  // Guard HDR range before bloom / ACES tone mapping
  col = clamp(col, vec3(0.0), vec3(12.0));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function ft(e){return e<0?0:e>1?1:e}function Hi(e){let n=e>>>0;return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const an=new ge,ro=new ge,rn=new ge,Nt=new ge;function so(e,n){return{active:!1,age:0,duration:.75,cooldown:n,speedRad:.34,lengthRad:.11,widthRad:.0024,peakIntensity:1.45,startPos:new ge(0,.7,-.7).normalize(),moveDir:new ge(.7,-.35,.1).normalize(),seedOffset:e}}function Ui({radius:e=1400,widthSegments:n=48,heightSegments:t=24,moonDiscRadius:i=Ei,auroraEnabled:a=!0,meteorsEnabled:o=!0,renderOrder:c=-10,seed:s=96935974}={}){const r=Number.isFinite(e)&&e>10?e:1400,h=Hi(s);let d=0,l=a?1:0,u=.85,f=!!o,F=!1;const p={uTime:{value:0},uSunDir:{value:new ge(0,-.55,-.83).normalize()},uMoonDir:{value:new ge(.3,.23,-.93).normalize()},uSunColor:{value:new ee().setRGB(1,.76,.44,We)},uMoonColor:{value:new ee().setRGB(.45,.52,.68,We)},uZenithColor:{value:new ee().setRGB(.016,.036,.078,We)},uHorizonColor:{value:new ee(1713463).multiplyScalar(1.05)},uSunAlt:{value:-.55},uMoonAlt:{value:.23},uMoonPhase:{value:.94},uMoonDiscRadius:{value:i},uDayFactor:{value:0},uTwilightFactor:{value:0},uStarIntensity:{value:.94},uMilkyWayIntensity:{value:.72},uSiderealAngle:{value:22.5/24*ao},uCloudCover:{value:0},uStormDarkening:{value:0},uLightningFlash:{value:0},uAuroraStrength:{value:a?.85:0},uMeteor0Pos:{value:new ge(0,1,0)},uMeteor0Dir:{value:new ge(1,0,0)},uMeteor0Params:{value:new $t(0,.11,.0024,0)},uMeteor1Pos:{value:new ge(0,1,0)},uMeteor1Dir:{value:new ge(1,0,0)},uMeteor1Params:{value:new $t(0,.11,.0024,0)}},L=new go(r,n,t),C=new Bt({name:"MoonriverSkyDomeMaterial",side:vo,depthWrite:!1,depthTest:!0,depthFunc:po,fog:!1,uniforms:p,vertexShader:Do,fragmentShader:Ao}),m=new dn(L,C);m.name="sky-dome",m.renderOrder=Number.isFinite(c)?c:-10,m.frustumCulled=!1;const b=[so(0,4.5+h()*6),so(1,11+h()*9)],z=[p.uMeteor0Pos,p.uMeteor1Pos],M=[p.uMeteor0Dir,p.uMeteor1Dir],P=[p.uMeteor0Params,p.uMeteor1Params];function H(S){const R=h()*ao,A=.42+h()*.84,O=Math.cos(A);an.set(Math.sin(R)*O,Math.sin(A),-Math.cos(R)*O).normalize(),ro.set(0,1,0),Nt.crossVectors(ro,an),Nt.lengthSq()<1e-5&&Nt.set(1,0,0),Nt.normalize(),rn.crossVectors(an,Nt).normalize();const x=(h()<.5?-1:1)*(.45+h()*.85),ne=.35+h()*.55;S.startPos.copy(an),S.moveDir.set(Nt.x*x+rn.x*ne,Nt.y*x+rn.y*ne,Nt.z*x+rn.z*ne).normalize(),S.active=!0,S.age=0,S.duration=.55+h()*.55,S.speedRad=.28+h()*.24,S.lengthRad=.075+h()*.085,S.widthRad=.0018+h()*.0014,S.peakIntensity=1.15+h()*.95}function k(S,R){const A=f&&R>.25;for(let O=0;O<b.length;O++){const x=b[O],ne=z[O].value,w=M[O].value,v=P[O].value;if(!x.active){v.set(0,x.lengthRad,x.widthRad,0),A&&S>0&&(x.cooldown-=S,x.cooldown<=0&&H(x));continue}if(x.age+=S,x.age>=x.duration){x.active=!1,x.age=0,x.cooldown=7.5+h()*14,v.set(0,x.lengthRad,x.widthRad,0);continue}const V=ft(x.age/x.duration),y=x.age*x.speedRad;ne.copy(x.startPos).addScaledVector(x.moveDir,y).normalize();const $=ne.dot(x.moveDir);w.copy(x.moveDir).addScaledVector(ne,-$).normalize();const ie=Math.sin(Math.pow(V,.72)*Math.PI),ce=x.peakIntensity*ie*R;v.set(ce,x.lengthRad,x.widthRad,V)}}return{mesh:m,geometry:L,material:C,uniforms:p,radius:r,update(S=null,R=null,A=0){if(F)return;const O=Number.isFinite(A)&&A>0?A:0;d+=O,p.uTime.value=d;let x=p.uStarIntensity.value,ne=u;S&&(S.sunDir&&p.uSunDir.value.copy(S.sunDir).normalize(),S.moonDir&&p.uMoonDir.value.copy(S.moonDir).normalize(),S.sunGlowColor&&p.uSunColor.value.copy(S.sunGlowColor),S.moonGlowColor&&p.uMoonColor.value.copy(S.moonGlowColor),S.skyZenith&&p.uZenithColor.value.copy(S.skyZenith),S.skyHorizon&&p.uHorizonColor.value.copy(S.skyHorizon),Number.isFinite(S.sunAltitude)&&(p.uSunAlt.value=S.sunAltitude),Number.isFinite(S.moonAltitude)&&(p.uMoonAlt.value=S.moonAltitude),Number.isFinite(S.moonPhase)&&(p.uMoonPhase.value=ft(S.moonPhase)),Number.isFinite(S.dayFactor)&&(p.uDayFactor.value=ft(S.dayFactor)),Number.isFinite(S.twilightFactor)&&(p.uTwilightFactor.value=ft(S.twilightFactor)),Number.isFinite(S.starIntensity)&&(x=ft(S.starIntensity),p.uStarIntensity.value=x),Number.isFinite(S.milkyWayIntensity)&&(p.uMilkyWayIntensity.value=ft(S.milkyWayIntensity)),Number.isFinite(S.siderealAngle)&&(p.uSiderealAngle.value=S.siderealAngle),Number.isFinite(S.auroraEligibility)&&(ne=ft(S.auroraEligibility),u=ne));let w=0,v=0,V=0,y=0;R&&(Number.isFinite(R.cloudCover)&&(w=ft(R.cloudCover)),Number.isFinite(R.stormDarkening)&&(v=ft(R.stormDarkening)),Number.isFinite(R.auroraSuppression)&&(V=ft(R.auroraSuppression)),Number.isFinite(R.lightningFlash)&&(y=ft(R.lightningFlash))),p.uCloudCover.value=w,p.uStormDarkening.value=v,p.uLightningFlash.value=y;const $=(1-w*.92)*(1-v*.95)*(1-V);p.uAuroraStrength.value=ft(ne*$*l),k(O,x*(1-w)*(1-v))},followCamera(S){F||!S?.position||m.position.copy(S.position)},setCenter(S,R,A){F||m.position.set(S,R,A)},setMoonDiscRadius(S){F||!Number.isFinite(S)||S<=0||(p.uMoonDiscRadius.value=S)},setAuroraBoost(S){F||!Number.isFinite(S)||(l=Math.max(0,Math.min(2,S)))},setMeteorsEnabled(S){if(f=!!S,!f)for(let R=0;R<b.length;R++)b[R].active=!1,P[R].value.set(0,b[R].lengthRad,b[R].widthRad,0)},triggerMeteor(S=0){return F?!1:(H(b[S===1?1:0]),k(.016,1),!0)},getMeteorStats(){return{slot0Active:b[0].active,slot1Active:b[1].active,slot0Intensity:p.uMeteor0Params.value.x,slot1Intensity:p.uMeteor1Params.value.x}},dispose(){F||(F=!0,L.dispose(),C.dispose())}}}const da=Object.freeze(Object.defineProperty({__proto__:null,SKY_DOME_FRAGMENT_SHADER:Ao,SKY_DOME_VERTEX_SHADER:Do,createSkyDome:Ui},Symbol.toStringTag,{value:"Module"})),Mt=(e,n,t)=>e<n?n:e>t?t:e,je=e=>e<0?0:e>1?1:e,mt=(e,n,t)=>e+(n-e)*t,At=(e,n,t)=>{const i=je((t-e)/Math.max(n-e,1e-6));return i*i*(3-2*i)},Qe=Object.freeze([.3/Math.hypot(.3,.23,-.93),.23/Math.hypot(.3,.23,-.93),-.93/Math.hypot(.3,.23,-.93)]),fn=1/220,mn=.25,ln=Object.freeze({high:Object.freeze({name:"high",steps:10,lightSteps:2,octaves:3,cirrus:!0}),medium:Object.freeze({name:"medium",steps:8,lightSteps:1,octaves:2,cirrus:!0}),low:Object.freeze({name:"low",steps:6,lightSteps:0,octaves:2,cirrus:!0})});function lo(e){if(typeof e=="string"){const n=e.toLowerCase();if(n in ln)return ln[n]}return ln.high}function Cn(e){return e-Math.floor(e)}function sn(e,n){let t=Cn(e*.1031),i=Cn(n*.1031),a=t;const o=t*(i+33.33)+i*(a+33.33)+a*(t+33.33);return t+=o,i+=o,a+=o,Cn((t+i)*a)}function ji(e,n){const t=Math.floor(e),i=Math.floor(n),a=e-t,o=n-i,c=a*a*a*(a*(a*6-15)+10),s=o*o*o*(o*(o*6-15)+10),r=sn(t,i),h=sn(t+1,i),d=sn(t,i+1),l=sn(t+1,i+1);return r+(h-r)*c+(d-r)*s+(r-h-d+l)*c*s}function Vi(e,n){let t=0,i=.54,a=e,o=n;for(let c=0;c<3;c++){t+=i*ji(a,o);const s=(.8*a-.6*o)*2.04+17.3,r=(.6*a+.8*o)*2.04-11.7;a=s,o=r,i*=.5}return je(t/.945)}function Ln(e){if(e==null)return[0,0];if(typeof e=="number"){const n=Number.isFinite(e)?e:0;return[n,n*.4]}if(Array.isArray(e))return[Number.isFinite(e[0])?e[0]:0,Number.isFinite(e[1])?e[1]:0];if(typeof e=="object"){const n=Number.isFinite(e.x)?e.x:0,t=Number.isFinite(e.z)?e.z:Number.isFinite(e.y)?e.y:0;return[n,t]}return[0,0]}function zo(e,n,t=null,i=.36){const a=Number.isFinite(e)?e:0,o=Number.isFinite(n)?n:0,c=je(Number.isFinite(i)?i:.36);if(c<=0)return 1;let s=0,r=0;t!=null&&(typeof t=="number"?Number.isFinite(t)&&(s=t,r=t*.4):Array.isArray(t)?(Number.isFinite(t[0])&&(s=t[0]),Number.isFinite(t[1])&&(r=t[1])):typeof t=="object"&&(Number.isFinite(t.x)&&(s=t.x),Number.isFinite(t.z)?r=t.z:Number.isFinite(t.y)&&(r=t.y)));const h=(a-s)*fn,d=(o-r)*fn,l=Vi(h,d),u=At(0,.06,c),f=At(0,.72,l*.75+c*1.06-.74)*u;return Mt(1-(1-mn)*f,mn,1)}function kn({windOffset:e=null,cloudCover:n=.36,strength:t=1,scale:i=fn,minShadow:a=mn}={}){const[o,c]=Ln(e);return{uCloudWindOffset:{value:new Kt(o,c)},uCloudCover:{value:je(Number.isFinite(n)?n:.36)},uCloudShadowStrength:{value:je(Number.isFinite(t)?t:1)},uCloudShadowScale:{value:Number.isFinite(i)&&i>0?i:fn},uCloudShadowMin:{value:Mt(Number.isFinite(a)?a:mn,.05,1)}}}const Tn=`
uniform vec2 uCloudWindOffset;
uniform float uCloudCover;
uniform float uCloudShadowStrength;
uniform float uCloudShadowScale;
uniform float uCloudShadowMin;

float csHash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float csNoise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = csHash21(i);
  float b = csHash21(i + vec2(1.0, 0.0));
  float c = csHash21(i + vec2(0.0, 1.0));
  float d = csHash21(i + vec2(1.0, 1.0));
  return a + (b - a) * u.x + (c - a) * u.y + (a - b - c + d) * u.x * u.y;
}

float csFbm2(vec2 p) {
  float sum = 0.0;
  float amp = 0.54;
  for (int i = 0; i < 3; i++) {
    sum += amp * csNoise2(p);
    p = vec2(0.8 * p.x - 0.6 * p.y, 0.6 * p.x + 0.8 * p.y) * 2.04 + vec2(17.3, -11.7);
    amp *= 0.5;
  }
  return clamp(sum / 0.945, 0.0, 1.0);
}

float sampleCloudShadow2D(vec2 worldXZ) {
  float cov = clamp(uCloudCover, 0.0, 1.0);
  if (cov <= 0.0001 || uCloudShadowStrength <= 0.0001) return 1.0;
  vec2 p = (worldXZ - uCloudWindOffset) * uCloudShadowScale;
  float n = csFbm2(p);
  float covRamp = smoothstep(0.0, 0.06, cov);
  float density = smoothstep(0.0, 0.72, n * 0.75 + cov * 1.06 - 0.74) * covRamp;
  float rawShadow = clamp(1.0 - (1.0 - uCloudShadowMin) * density, uCloudShadowMin, 1.0);
  return mix(1.0, rawShadow, clamp(uCloudShadowStrength, 0.0, 1.0));
}
`;function No(e){const n=e?.shadowUniforms??e??{},t=kn();return{uCloudWindOffset:n.uCloudWindOffset??n.uWindOffset??t.uCloudWindOffset,uCloudCover:n.uCloudCover??t.uCloudCover,uCloudShadowStrength:n.uCloudShadowStrength??t.uCloudShadowStrength,uCloudShadowScale:n.uCloudShadowScale??t.uCloudShadowScale,uCloudShadowMin:n.uCloudShadowMin??t.uCloudShadowMin}}function Zi(e,n=null,t={}){if(!e||typeof e!="object")throw new Error("patchCloudShadowUniforms: material is required");const i=No(n),a=Mt(Number.isFinite(t?.indirectWeight)?t.indirectWeight:.16,0,.5),o=typeof t?.cacheTag=="string"&&t.cacheTag?t.cacheTag:"v1";if(e.isShaderMaterial)return e.uniforms=e.uniforms??{},Object.assign(e.uniforms,i),typeof e.fragmentShader=="string"&&e.fragmentShader.includes("#include <lights_fragment_maps>")&&!e.fragmentShader.includes("sampleCloudShadow2D")&&(typeof e.vertexShader=="string"&&e.vertexShader.includes("#include <project_vertex>")&&!e.vertexShader.includes("varying vec3 vCloudShadowW;")&&(e.vertexShader=`varying vec3 vCloudShadowW;
`+e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vCloudShadowW = (vec4(mvPosition.xyz, 0.0) * viewMatrix).xyz + cameraPosition;`)),e.fragmentShader=`varying vec3 vCloudShadowW;
${Tn}
`+e.fragmentShader.replace("#include <lights_fragment_maps>",`{
  float _cloudShad = sampleCloudShadow2D(vCloudShadowW.xz);
  reflectedLight.directDiffuse *= _cloudShad;
  reflectedLight.directSpecular *= _cloudShad;
  #if defined( RE_IndirectDiffuse )
    irradiance *= mix(1.0, _cloudShad, ${a.toFixed(4)});
  #endif
}
#include <lights_fragment_maps>`)),e.userData=e.userData??{},e.userData.cloudShadowUniforms=i,e.needsUpdate=!0,e;const c=e.onBeforeCompile,s=e.customProgramCacheKey;return e.onBeforeCompile=(r,h)=>{if(typeof c=="function"&&c.call(e,r,h),r.uniforms.uCloudWindOffset=i.uCloudWindOffset,r.uniforms.uCloudCover=i.uCloudCover,r.uniforms.uCloudShadowStrength=i.uCloudShadowStrength,r.uniforms.uCloudShadowScale=i.uCloudShadowScale,r.uniforms.uCloudShadowMin=i.uCloudShadowMin,r.fragmentShader.includes("sampleCloudShadow2D"))return;const d="#include <project_vertex>",l="#include <lights_fragment_maps>";if(typeof r.vertexShader!="string"||!r.vertexShader.includes(d))throw new Error("patchCloudShadowUniforms: vertex anchor #include <project_vertex> not found");if(typeof r.fragmentShader!="string"||!r.fragmentShader.includes(l))throw new Error("patchCloudShadowUniforms: fragment anchor #include <lights_fragment_maps> not found");r.vertexShader.includes("varying vec3 vCloudShadowW;")||(r.vertexShader=`varying vec3 vCloudShadowW;
`+r.vertexShader.replace(d,`${d}
vCloudShadowW = (vec4(mvPosition.xyz, 0.0) * viewMatrix).xyz + cameraPosition;`)),r.fragmentShader=`varying vec3 vCloudShadowW;
${Tn}
`+r.fragmentShader.replace(l,`{
  float _cloudShad = sampleCloudShadow2D(vCloudShadowW.xz);
  reflectedLight.directDiffuse *= _cloudShad;
  reflectedLight.directSpecular *= _cloudShad;
  #if defined( RE_IndirectDiffuse )
    irradiance *= mix(1.0, _cloudShad, ${a.toFixed(4)});
  #endif
}
${l}`)},e.customProgramCacheKey=()=>`${typeof s=="function"?s.call(e):""}|cloudShadow:${o}:${a.toFixed(2)}`,e.userData=e.userData??{},e.userData.cloudShadowUniforms=i,e.needsUpdate=!0,e}function cn(e,n,t,i,a){return e?Array.isArray(e)&&e.length>=3?n.set(Number.isFinite(e[0])?e[0]:t,Number.isFinite(e[1])?e[1]:i,Number.isFinite(e[2])?e[2]:a):typeof e=="object"?n.set(Number.isFinite(e.x)?e.x:t,Number.isFinite(e.y)?e.y:i,Number.isFinite(e.z)?e.z:a):n.set(t,i,a):n.set(t,i,a)}function Dn(e,n,t,i,a){return e==null?n.setRGB(t,i,a):e.isColor?n.copy(e):typeof e=="number"&&Number.isFinite(e)?n.setHex(e):typeof e=="string"?n.set(e):Array.isArray(e)&&e.length>=3?n.setRGB(Number.isFinite(e[0])?e[0]:t,Number.isFinite(e[1])?e[1]:i,Number.isFinite(e[2])?e[2]:a):typeof e=="object"&&"r"in e&&"g"in e&&"b"in e?n.setRGB(Number.isFinite(e.r)?e.r:t,Number.isFinite(e.g)?e.g:i,Number.isFinite(e.b)?e.b:a):n.setRGB(t,i,a)}function Ro(e,n,t,i,a,o,c){const s=e&&typeof e=="object"?e:null,r=!!(s?.sunDir??s?.sunDirection),h=!!(s?.moonDir??s?.moonDirection);cn(s?.sunDir??s?.sunDirection,o,.25,-.45,.85),cn(s?.moonDir??s?.moonDirection,c,Qe[0],Qe[1],Qe[2]),o.lengthSq()>1e-6&&o.normalize(),c.lengthSq()>1e-6&&c.normalize();let d=0;s&&(Number.isFinite(s.dayFactor)?d=je(s.dayFactor):Number.isFinite(s.lampsOn)?d=je(1-s.lampsOn):Number.isFinite(s.nightFactor)?d=je(1-s.nightFactor):Number.isFinite(s.sunAltitude)?d=At(-.06,.18,s.sunAltitude):Number.isFinite(s.sunElevation)?d=At(-.06,.18,s.sunElevation):r&&(d=At(-.05,.18,o.y)));const l=s?.primaryDir??s?.lightDir??s?.activeLightDir??null;l?(cn(l,n,Qe[0],Qe[1],Qe[2]),n.lengthSq()>1e-6&&n.normalize()):d>=.5&&r&&o.y>-.05?n.copy(o):h&&c.y>-.05?n.copy(c):r?n.copy(o):n.set(Qe[0],Qe[1],Qe[2]);const u=Math.sin(je(d)*Math.PI),f=n.y,F=mt(.68,1,d)+u*.22,p=mt(.79,.96,d)+u*.04,L=mt(.96,.88,d)-u*.26,C=s?.primaryColor??s?.lightColor??(d>=.5?s?.sunColor:s?.moonColor)??null;Dn(C,t,Mt(F,0,1.4),Mt(p,0,1.4),Mt(L,0,1.4));const m=mt(.06,.34,d)+u*.12,b=mt(.11,.52,d)+u*.05,z=mt(.21,.78,d)-u*.06;Dn(s?.skyColor??s?.ambientColor??s?.hemiSkyColor??s?.zenithColor,i,m,b,z);const M=mt(.1,.58,d)+u*.22,P=mt(.15,.68,d)+u*.07,H=mt(.22,.82,d)-u*.08;return Dn(s?.horizonColor??s?.fogColor,a,M,P,H),{dayFactor:d,twilight:u,lightAltitude:f}}const qi=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 clipPos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = clipPos.xyww;
}
`;function co(e){return`
#define CLOUD_MAX_STEPS ${Math.max(4,Math.min(10,Math.floor(e)))}
#ifndef PI
#define PI 3.14159265
#endif

uniform float uTime;
uniform float uCloudCover;
uniform float uStormDarkening;
uniform float uLightningFlash;
uniform vec3 uLightningDir;
uniform vec2 uWindOffset;
uniform float uCloudScale;
uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform vec3 uAmbientSky;
uniform vec3 uHorizonColor;
uniform float uCirrusWeight;
uniform float uDayFactor;
uniform float uStepCount;
uniform float uLightSteps;
uniform float uOctaves;

varying vec3 vDir;

// Interleaved Gradient Noise (Jimenez 2014) — hides step strata cleanly at 6-10 steps.
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float hash31(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}

float noise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return a + (b - a) * u.x + (c - a) * u.y + (a - b - c + d) * u.x * u.y;
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = p - i;
  vec3 u = f * f * (3.0 - 2.0 * f);
  float n000 = hash31(i);
  float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash31(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, u.x);
  float nx10 = mix(n010, n110, u.x);
  float nx01 = mix(n001, n101, u.x);
  float nx11 = mix(n011, n111, u.x);
  float nxy0 = mix(nx00, nx10, u.y);
  float nxy1 = mix(nx01, nx11, u.y);
  return mix(nxy0, nxy1, u.z);
}

// 2D base cumulus coverage synced with valley cloud shadows (csFbm2).
float baseCloudFbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.54;
  for (int i = 0; i < 3; i++) {
    sum += amp * noise2(p);
    p = vec2(0.8 * p.x - 0.6 * p.y, 0.6 * p.x + 0.8 * p.y) * 2.04 + vec2(17.3, -11.7);
    amp *= 0.5;
  }
  return clamp(sum / 0.945, 0.0, 1.0);
}

// Fast Henyey-Greenstein phase (zero pow() calls).
float hgPhase(float cosTheta, float g) {
  float g2 = g * g;
  float denom = max(1.0 + g2 - 2.0 * g * cosTheta, 0.0025);
  return (1.0 - g2) / (4.0 * PI * denom * sqrt(denom));
}

// Curved planetary atmosphere shell hit distance from eye at (0, R, 0).
float shellHit(float dy, float alt) {
  const float R = 48000.0;
  float b = R * dy;
  float c = -alt * (2.0 * R + alt);
  return sqrt(max(b * b - c, 0.0)) - b;
}

// Evaluate billowing low cumulus deck density at 3D cloud-space point.
float sampleCumulusDensity(vec3 pos, float hNorm, float cov) {
  // Soft flat base + billowing rounded cumulus crowns.
  float hProfile = smoothstep(0.0, 0.22, hNorm) * (1.0 - smoothstep(0.46, 1.0, hNorm));
  if (hProfile <= 0.002) return 0.0;

  vec2 uv = (pos.xz - uWindOffset) * uCloudScale;
  float macro = baseCloudFbm(uv);
  float shape = smoothstep(0.0, 0.68, macro * 0.78 + cov * 1.06 - 0.72) * hProfile;
  if (shape <= 0.005) return 0.0;

  // Volumetric 3D billow erosion (tier-adaptive octave count).
  vec3 q = vec3(uv * 2.15, hNorm * 1.9 + uTime * 0.008);
  float billow = noise3(q);
  if (uOctaves >= 2.5) {
    billow = billow * 0.68 + noise3(q * 2.25 + vec3(5.2, -3.1, 2.7)) * 0.32;
  }
  float erode = mix(0.36, 0.14, cov) * (0.45 + 0.55 * hNorm);
  return clamp((shape - erode * (1.0 - billow)) * 1.45, 0.0, 1.0);
}

// High-altitude wispy ice-crystal cirrus layer (anisotropic wind-sheared filaments).
float sampleCirrus(vec2 worldXZ, float cov) {
  vec2 drift = uWindOffset * 1.35 + vec2(uTime * 1.8, -uTime * 0.6);
  vec2 p = (worldXZ - drift) * (uCloudScale * 0.52);
  // Stretch along wind shear axis and domain-warp for mares'-tail wisps.
  vec2 warp = vec2(noise2(p * 1.3 + vec2(3.1, 7.4)), noise2(p * 1.3 + vec2(-5.2, 2.8))) - 0.5;
  vec2 q = vec2(p.x * 0.55 + p.y * 0.85, -p.x * 0.85 + p.y * 0.55);
  q = q * vec2(0.45, 1.85) + warp * 0.85;
  float c1 = noise2(q * 2.1);
  float c2 = noise2(q * 4.7 + vec2(9.1, -4.3));
  float wisps = smoothstep(0.44, 0.84, c1 * 0.65 + c2 * 0.35);
  float ridge = smoothstep(0.35, 0.92, 1.0 - abs(c1 * 2.0 - 1.0));
  float amount = mix(0.25, 0.88, smoothstep(0.04, 0.65, cov)) * (1.0 - 0.55 * uStormDarkening);
  return clamp(wisps * (0.55 + 0.45 * ridge) * amount, 0.0, 1.0);
}

void main() {
  vec3 d = normalize(vDir);
  if (d.y <= 0.008) discard;

  float cov = clamp(uCloudCover, 0.0, 1.0);
  if (cov <= 0.001 && uCirrusWeight <= 0.001) discard;

  float horizonFade = smoothstep(0.008, 0.16, d.y);
  vec3 lightDir = normalize(uLightDir);
  float cosTheta = dot(d, lightDir);

  // Dual-lobe Henyey-Greenstein silver-lining forward scatter + soft back scatter.
  float hgFwd = hgPhase(cosTheta, 0.72);
  float hgRim = hgPhase(cosTheta, 0.86);
  float hgBack = hgPhase(cosTheta, -0.22);
  float phase = mix(hgBack, hgFwd, 0.68) * 1.65 + hgRim * 0.52;

  // Dual-altitude slab geometry: low cumulus [380 m .. 760 m], high cirrus [1850 m].
  const float CUMULUS_BOT = 380.0;
  const float CUMULUS_TOP = 760.0;
  const float CIRRUS_ALT = 1850.0;

  float t0 = shellHit(d.y, CUMULUS_BOT);
  float t1 = shellHit(d.y, CUMULUS_TOP);
  // Cap grazing slab thickness near horizon to maintain crisp sampling density.
  float marchDist = min(t1 - t0, 2600.0);
  float fSteps = clamp(uStepCount, 4.0, float(CLOUD_MAX_STEPS));
  float stepLen = marchDist / fSteps;

  float dither = ign(gl_FragCoord.xy + vec2(fract(uTime * 0.13) * 17.0, fract(uTime * 0.07) * 31.0));
  float t = t0 + stepLen * dither;

  // Storm darkening deepens optical absorption and shifts base scatter toward moody indigo-slate.
  float storm = clamp(uStormDarkening, 0.0, 1.0);
  float sigmaT = mix(0.0052, 0.0095, storm);
  float flash = max(uLightningFlash, 0.0);
  float flashAlign = 0.55 + 0.45 * max(dot(d, normalize(uLightningDir)), 0.0);
  vec3 lightningCol = vec3(0.72, 0.84, 1.0) * flash * flashAlign;

  // Calibrated base colors for Moonlit Night (silver-rimmed indigo) through Daylight (warm sunlit cumulus).
  vec3 shadowTint = mix(uAmbientSky * 0.72, vec3(0.025, 0.036, 0.062), storm);
  vec3 directScatterCol = uLightColor * mix(1.0, 0.36, storm);

  vec3 accum = vec3(0.0);
  float transmittance = 1.0;

  if (cov > 0.002) {
    for (int i = 0; i < CLOUD_MAX_STEPS; i++) {
      if (float(i) >= fSteps || transmittance < 0.03) break;

      vec3 pos = d * t;
      float hNorm = clamp((t - t0) / max(t1 - t0, 1.0), 0.0, 1.0);
      float dens = sampleCumulusDensity(pos, hNorm, cov);

      if (dens > 0.004) {
        // Optical depth toward active moon/sun (tier-scaled 0..2 light taps).
        float lightTau = 0.0;
        if (uLightSteps >= 0.5) {
          float s1 = sampleCumulusDensity(pos + lightDir * 95.0, clamp(hNorm + 0.24, 0.0, 1.0), cov);
          lightTau += s1 * 0.65;
        }
        if (uLightSteps >= 1.5) {
          float s2 = sampleCumulusDensity(pos + lightDir * 215.0, clamp(hNorm + 0.52, 0.0, 1.0), cov);
          lightTau += s2 * 0.95;
        }
        if (uLightSteps < 0.5) {
          // Analytic height-based transmittance for low quality tier.
          lightTau = (1.0 - hNorm) * dens * 0.95;
        }

        float beer = exp(-lightTau * (1.35 + 0.9 * storm));
        float powder = 1.0 - 0.58 * exp(-dens * 2.4);
        float silverLining = beer * (0.45 + 0.55 * powder) * phase;

        // Multi-scatter ambient fill (brighter cloud tops, deeper brooding cloud undersides).
        float topGrad = mix(0.32, 1.05, hNorm);
        vec3 ambLight = mix(shadowTint, uAmbientSky * 1.15, topGrad);
        vec3 directLight = directScatterCol * silverLining;
        // Internal sheet-lightning glow bursts brightest inside thick cumulus cores.
        vec3 boltGlow = lightningCol * (0.28 + 0.92 * dens) * (0.55 + 0.45 * (1.0 - hNorm));

        vec3 sampleColor = ambLight + directLight + boltGlow;
        float stepOptical = dens * stepLen * sigmaT;
        float stepTrans = exp(-stepOptical);
        accum += transmittance * sampleColor * (1.0 - stepTrans);
        transmittance *= stepTrans;
      }
      t += stepLen;
    }
  }

  // High-altitude wispy cirrus layer (composited cleanly behind cumulus using remaining transmittance).
  if (uCirrusWeight > 0.002 && transmittance > 0.04) {
    float tCirrus = shellHit(d.y, CIRRUS_ALT);
    vec2 cirrusXZ = d.xz * tCirrus;
    float cirrusDens = sampleCirrus(cirrusXZ, cov) * uCirrusWeight;
    if (cirrusDens > 0.003) {
      float cirrusPhase = 0.42 + 0.95 * hgPhase(cosTheta, 0.62);
      vec3 cirrusCol = uAmbientSky * 0.95 + uLightColor * cirrusPhase * mix(0.62, 0.95, uDayFactor);
      cirrusCol += lightningCol * 0.16;
      float cirrusAlpha = clamp(cirrusDens * 0.58, 0.0, 0.72);
      accum += transmittance * cirrusCol * cirrusAlpha;
      transmittance *= (1.0 - cirrusAlpha);
    }
  }

  float alpha = clamp((1.0 - transmittance) * horizonFade, 0.0, 1.0);
  if (alpha <= 0.001) discard;

  // Blend far horizon clouds softly into atmospheric horizon color (premultiplied alpha).
  float distMix = 1.0 - smoothstep(0.03, 0.24, d.y);
  vec3 finalColor = mix(accum, uHorizonColor * alpha, distMix * 0.72);

  gl_FragColor = vec4(finalColor, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`}function Xi(e={}){const{radius:n=2800,widthSegments:t=32,heightSegments:i=16,quality:a="high",cloudCover:o=.36,stormDarkening:c=0,lightningFlash:s=0,cirrusWeight:r=.65,windSpeed:h=7.5,windDir:d=[.86,.51],shadowUniforms:l=null,renderOrder:u=-.5}=e??{};let f=lo(a),F=f.steps,p=!1,L=0;const C=Math.hypot(d[0]??.86,d[1]??.51)||1,m=new Kt((d[0]??.86)/C,(d[1]??.51)/C),b=Number.isFinite(h)?h:7.5,z=l?No(l):kn({cloudCover:o}),M={uTime:{value:0},uCloudCover:z.uCloudCover,uStormDarkening:{value:je(c)},uLightningFlash:{value:Math.max(0,Number.isFinite(s)?s:0)},uLightningDir:{value:new ge(-.35,.32,-.88).normalize()},uWindOffset:z.uCloudWindOffset,uCloudScale:z.uCloudShadowScale,uLightDir:{value:new ge(Qe[0],Qe[1],Qe[2])},uLightColor:{value:new ee(.68,.79,.96)},uAmbientSky:{value:new ee(.06,.11,.21)},uHorizonColor:{value:new ee(.1,.15,.22)},uCirrusWeight:{value:je(r)},uDayFactor:{value:0},uStepCount:{value:f.steps},uLightSteps:{value:f.lightSteps},uOctaves:{value:f.octaves}},P=new go(n,t,i),H=new Bt({uniforms:M,vertexShader:qi,fragmentShader:co(F),side:vo,transparent:!0,depthWrite:!1,depthTest:!0,depthFunc:po,premultipliedAlpha:!0}),k=new dn(P,H);k.name="volumetric-clouds",k.renderOrder=u,k.frustumCulled=!1,k.matrixAutoUpdate=!0;const S=new ge,R=new ge;function A(w){const v=lo(w);return f=v,M.uStepCount.value=v.steps,M.uLightSteps.value=v.lightSteps,M.uOctaves.value=v.octaves,v.steps>F&&(F=v.steps,H.fragmentShader=co(F),H.needsUpdate=!0),v}function O(w,v=null,V=null,y=null){if(p)return;const $=Number.isFinite(w)&&w>0?Math.min(w,.25):0;L+=$,M.uTime.value=L;const{dayFactor:ie,lightAltitude:ce}=Ro(v,M.uLightDir.value,M.uLightColor.value,M.uAmbientSky.value,M.uHorizonColor.value,S,R);M.uDayFactor.value=ie;const X=V&&typeof V=="object"?V:null;if(X){Number.isFinite(X.cloudCover)&&(M.uCloudCover.value=je(X.cloudCover)),Number.isFinite(X.stormDarkening)&&(M.uStormDarkening.value=je(X.stormDarkening));const N=X.lightningFlash??X.lightningIntensity??X.flash;Number.isFinite(N)&&(M.uLightningFlash.value=Math.max(0,N)),X.lightningDir&&(cn(X.lightningDir,M.uLightningDir.value,-.35,.32,-.88),M.uLightningDir.value.lengthSq()>1e-6&&M.uLightningDir.value.normalize()),Number.isFinite(X.cirrusWeight)&&(M.uCirrusWeight.value=je(X.cirrusWeight))}if(X?.windOffset!=null){const[N,E]=Ln(X.windOffset);M.uWindOffset.value.set(N,E)}else if($>0){let N=m.x,E=m.y;const B=Number.isFinite(X?.windStrength)?Math.max(0,X.windStrength):Number.isFinite(X?.windSpeed)?Math.max(0,X.windSpeed):.45,te=b*(.35+1.45*B),G=X?.windDir??X?.windVelocity??null;if(G){const Z=Array.isArray(G)?G[0]:G.vx??G.x??N,q=Array.isArray(G)?G[1]:G.vz??G.z??G.y??E,T=Math.hypot(Z,q);T>1e-4&&(N=Z/T,E=q/T)}M.uWindOffset.value.x+=N*te*$,M.uWindOffset.value.y+=E*te*$}const _=At(.03,.16,ce),I=Number.isFinite(X?.cloudShadowStrength)?je(X.cloudShadowStrength):1;z.uCloudShadowStrength.value=_*I,y&&y.position&&k.position.set(y.position.x,y.position.y,y.position.z),k.visible=M.uCloudCover.value>=.02}function x(w=null){return w&&typeof w.set=="function"?w.set(M.uWindOffset.value.x,M.uWindOffset.value.y):M.uWindOffset.value}function ne(){p||(p=!0,P.dispose(),H.dispose())}return{mesh:k,material:H,geometry:P,uniforms:M,shadowUniforms:z,get quality(){return f.name},get compiledMaxSteps(){return F},get disposed(){return p},getQualityConfig:()=>f,setQuality:A,getWindOffset:x,update:O,dispose:ne}}const _o=Object.freeze([Object.freeze({id:"elder-hero-clearing",biome:"elder_village",position:[-421,29.5,-186],length:30,radius:5.2,intensity:.92,mistBoost:1.12,tint:[.96,.98,1],phase:.4}),Object.freeze({id:"elder-pavilion-break",biome:"elder_village",position:[-414.5,31,-210],length:32,radius:4.6,intensity:.85,mistBoost:1.15,tint:[.95,.98,1],phase:1.9}),Object.freeze({id:"elder-moss-glade",biome:"elder_village",position:[-434,28.5,-195],length:28,radius:4.8,intensity:.8,mistBoost:1.1,tint:[.94,.99,1],phase:3.3}),Object.freeze({id:"veil-plunge-main",biome:"veil_falls",position:[-55.5,31.5,304.5],length:24,radius:5.6,intensity:1,mistBoost:1.48,tint:[.9,.97,1],phase:.9}),Object.freeze({id:"veil-spray-south",biome:"veil_falls",position:[-51.5,29,309.5],length:22,radius:4.8,intensity:.88,mistBoost:1.42,tint:[.9,.96,1],phase:2.5}),Object.freeze({id:"veil-overhang-north",biome:"veil_falls",position:[-57,28.5,298.5],length:21,radius:4.2,intensity:.82,mistBoost:1.38,tint:[.92,.97,1],phase:4.1}),Object.freeze({id:"fern-hollow-center",biome:"fern_hollow",position:[-247,27.5,148.5],length:24,radius:4.5,intensity:.9,mistBoost:1.36,tint:[.82,.98,1],phase:1.2}),Object.freeze({id:"fern-hollow-upper",biome:"fern_hollow",position:[-255,28.5,140],length:25,radius:4,intensity:.8,mistBoost:1.32,tint:[.84,.98,1],phase:2.8}),Object.freeze({id:"fern-hollow-creek",biome:"fern_hollow",position:[-239,26,157],length:22,radius:4.2,intensity:.84,mistBoost:1.34,tint:[.83,.97,1],phase:4.7}),Object.freeze({id:"north-gorge-arch-core",biome:"north_gorge",position:[-89.6,7,-864.5],length:39,radius:6.4,intensity:.98,mistBoost:1.28,tint:[.92,.96,1],phase:.6}),Object.freeze({id:"north-gorge-east-span",biome:"north_gorge",position:[-81,4.5,-856],length:35,radius:5.2,intensity:.86,mistBoost:1.24,tint:[.92,.96,1],phase:2.2}),Object.freeze({id:"north-gorge-west-rapids",biome:"north_gorge",position:[-97.5,5,-873],length:36,radius:5.4,intensity:.88,mistBoost:1.26,tint:[.9,.95,1],phase:3.8})]);function $i(e=16){const n=Math.max(8,Math.floor(e)),t=[[.54,1,.58,n],[.24,.48,1,Math.max(8,Math.floor(n*.75))]],i=[],a=[],o=[],c=[],s=[];let r=0;for(let d=0;d<t.length;d++){const[l,u,f,F]=t[d],p=2,L=u-l,C=Math.hypot(1,L)||1,m=L/C,b=1/C;for(let M=0;M<=p;M++){const P=M/p,H=-1+P,k=mt(u,l,P);for(let S=0;S<=F;S++){const R=S/F,A=R*Math.PI*2,O=Math.cos(A),x=Math.sin(A);i.push(O*k,H,x*k),a.push(O*b,m,x*b),o.push(R,P),c.push(f)}}const z=F+1;for(let M=0;M<p;M++)for(let P=0;P<F;P++){const H=r+M*z+P,k=H+1,S=H+z,R=S+1;s.push(H,k,R,H,R,S)}r+=(p+1)*z}const h=new Wn;return h.setAttribute("position",new Jt(i,3)),h.setAttribute("normal",new Jt(a,3)),h.setAttribute("uv",new Jt(o,2)),h.setAttribute("aShellWeight",new Jt(c,1)),h.setIndex(s),h.computeBoundingSphere(),h}const Yi=`
attribute float aShellWeight;
attribute vec4 aShaftMeta; // x = liveIntensity, y = phase, z = radius, w = nearFadeScale
attribute vec3 aShaftTint;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vShaftOrigin;
varying vec3 vShaftAxis;
varying float vShellWeight;
varying vec4 vShaftMeta;
varying vec3 vShaftTint;

void main() {
  vUv = uv;
  vShellWeight = aShellWeight;
  vShaftMeta = aShaftMeta;
  vShaftTint = aShaftTint;

  // Compute exact analytical inverse-transpose normal for non-uniformly scaled instanceMatrix (R * S).
  #ifdef USE_INSTANCING
    float sx2 = max(dot(instanceMatrix[0].xyz, instanceMatrix[0].xyz), 1e-4);
    float sy2 = max(dot(instanceMatrix[1].xyz, instanceMatrix[1].xyz), 1e-4);
    float sz2 = max(dot(instanceMatrix[2].xyz, instanceMatrix[2].xyz), 1e-4);
    vec3 invScaledN = vec3(normal.x / sx2, normal.y / sy2, normal.z / sz2);
    vWorldNormal = normalize(mat3(modelMatrix) * (mat3(instanceMatrix) * invScaledN));
    vec4 localWorld = instanceMatrix * vec4(position, 1.0);
    vShaftOrigin = (modelMatrix * vec4(instanceMatrix[3].xyz, 1.0)).xyz;
    vShaftAxis = normalize(mat3(modelMatrix) * (-instanceMatrix[1].xyz));
  #else
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 localWorld = vec4(position, 1.0);
    vShaftOrigin = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    vShaftAxis = normalize(mat3(modelMatrix) * vec3(0.0, -1.0, 0.0));
  #endif

  vec4 worldPos = modelMatrix * localWorld;
  vWorldPos = worldPos.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,Ki=`
uniform float uTime;
uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform float uGlobalIntensity;
uniform float uEdgePower;
uniform float uNearFadeStart;
uniform float uNearFadeEnd;
uniform float uFarFadeStart;
uniform float uFarFadeEnd;
uniform float uMistDensity;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
varying vec3 vShaftOrigin;
varying vec3 vShaftAxis;
varying float vShellWeight;
varying vec4 vShaftMeta;
varying vec3 vShaftTint;

float grHash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float grNoise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(grHash21(i), grHash21(i + vec2(1.0, 0.0)), u.x),
    mix(grHash21(i + vec2(0.0, 1.0)), grHash21(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

void main() {
  float liveI = vShaftMeta.x * uGlobalIntensity;
  if (liveI <= 0.001) discard;

  vec3 toCam = cameraPosition - vWorldPos;
  float camDist = length(toCam);
  vec3 viewDir = toCam / max(camDist, 1e-4);

  // Smooth Fresnel silhouette edge falloff: grazing shell boundaries dissolve cleanly to 0.0.
  float ndv = abs(dot(normalize(vWorldNormal), viewDir));
  float fresnel = pow(max(ndv, 1e-4), uEdgePower) * smoothstep(0.08, 0.58, ndv);

  // Dual near-camera soft-fade (fragment distance AND radial distance to shaft centerline)
  // guarantees zero hard intersecting geometry planes even when walking directly through a beam!
  float nearScale = max(vShaftMeta.w, 0.5);
  float distNearFade = smoothstep(uNearFadeStart * nearScale, uNearFadeEnd * nearScale, camDist);

  vec3 camFromOrigin = cameraPosition - vShaftOrigin;
  float along = dot(camFromOrigin, vShaftAxis);
  vec3 radialVec = camFromOrigin - vShaftAxis * along;
  float radialDist = length(radialVec);
  float radialNearFade = smoothstep(vShaftMeta.z * 0.75, vShaftMeta.z * 1.85, radialDist);
  float nearFade = distNearFade * (0.25 + 0.75 * radialNearFade);

  // Smooth horizon distance fade so distant beams melt cleanly into valley haze.
  float farFade = 1.0 - smoothstep(uFarFadeStart, uFarFadeEnd, camDist);

  // Smooth longitudinal fade at canopy entry (top) and above forest floor/water (bottom).
  float topFade = 1.0 - smoothstep(0.58, 1.0, vUv.y);
  float botFade = smoothstep(0.0, 0.38, vUv.y);
  float lengthFade = topFade * botFade;

  // Attenuate overhead shafts when gazing steeply into bright open zenith sky.
  float zenithLookFade = 1.0 - smoothstep(0.52, 0.90, max(-viewDir.y, 0.0)) * 0.72;

  // Subtle dappled canopy-streak & drifting mist noise along the shaft.
  float phase = vShaftMeta.y;
  float angleCoord = sin(vUv.x * 6.2831853 + phase) * 1.8 + cos(vUv.x * 12.5663706 - phase * 0.7) * 0.8;
  float wispA = grNoise2(vec2(angleCoord * 1.35 + phase, vUv.y * 2.4 - uTime * 0.08));
  float wispB = grNoise2(vec2(vWorldPos.x * 0.07 + uTime * 0.03, vWorldPos.z * 0.07 - uTime * 0.02));
  float wisp = mix(0.68, 1.18, wispA * 0.65 + wispB * 0.35);

  // Tyndall forward scattering boost when gazing toward the active moon/sun, soft glow from sides.
  float cosViewLight = dot(-viewDir, normalize(uLightDir));
  float scatter = 0.56 + 0.64 * smoothstep(-0.35, 0.92, cosViewLight);
  float mistGain = 0.82 + 0.38 * clamp(uMistDensity, 0.0, 1.0);

  float alpha = clamp(
    fresnel * nearFade * farFade * lengthFade * zenithLookFade * wisp * scatter * mistGain * vShellWeight * liveI,
    0.0,
    0.72
  );
  if (alpha <= 0.001) discard;

  vec3 col = uLightColor * vShaftTint;
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Qi(e,n){const t=e?.position??e?.pos??[0,25,0],i=Array.isArray(t)?Number.isFinite(t[0])?t[0]:0:Number.isFinite(t?.x)?t.x:0,a=Array.isArray(t)?Number.isFinite(t[1])?t[1]:25:Number.isFinite(t?.y)?t.y:25,o=Array.isArray(t)?Number.isFinite(t[2])?t[2]:0:Number.isFinite(t?.z)?t.z:0,c=Number.isFinite(e?.length)&&e.length>0?e.length:28,s=Number.isFinite(e?.radius)&&e.radius>0?e.radius:Number.isFinite(e?.radiusBottom)&&e.radiusBottom>0?e.radiusBottom:4.8,r=Number.isFinite(e?.intensity)?Mt(e.intensity,0,2):.88,h=Number.isFinite(e?.mistBoost)?Mt(e.mistBoost,.5,2.5):1.15,d=Number.isFinite(e?.phase)?e.phase:n*1.6180339%6.2831853,l=e?.tint??e?.colorTint??[.95,.98,1],u=[Number.isFinite(l[0])?l[0]:.95,Number.isFinite(l[1])?l[1]:.98,Number.isFinite(l[2])?l[2]:1];return{id:typeof e?.id=="string"&&e.id?e.id:`shaft-${n}`,biome:typeof e?.biome=="string"?e.biome:"valley",x:i,y:a,z:o,length:c,radius:s,intensity:r,mistBoost:h,phase:d,tint:u,nearFadeScale:Mt(s/4.5,.65,2.2)}}function Ji(e=null,n={}){const i=(Array.isArray(e)&&e.length>0?e:_o).map((q,T)=>Qi(q,T)),a=i.length,{radialSegments:o=16,baseOpacity:c=.16,edgePower:s=2.8,nearFadeStart:r=4.5,nearFadeEnd:h=15,farFadeStart:d=240,farFadeEnd:l=480,minBeamAltitude:u=.16,renderOrder:f=3,cloudShadowModulation:F=!0,shadowUniforms:p=null,clouds:L=null}=n??{},C=L?.shadowUniforms??p??null;let m=!1,b=0,z=c,M=!0;const P=$i(o),H=new Float32Array(a*4),k=new Float32Array(a*3);for(let q=0;q<a;q++){const T=i[q];H[q*4]=T.intensity,H[q*4+1]=T.phase,H[q*4+2]=T.radius,H[q*4+3]=T.nearFadeScale,k[q*3]=T.tint[0],k[q*3+1]=T.tint[1],k[q*3+2]=T.tint[2]}const S=new Yt(H,4);S.setUsage(Ot);const R=new Yt(k,3);P.setAttribute("aShaftMeta",S),P.setAttribute("aShaftTint",R);const A={uTime:{value:0},uLightDir:{value:new ge(Qe[0],Qe[1],Qe[2])},uLightColor:{value:new ee(.68,.79,.96)},uGlobalIntensity:{value:c},uEdgePower:{value:Mt(s,.8,5)},uNearFadeStart:{value:Math.max(.5,r)},uNearFadeEnd:{value:Math.max(r+1,h)},uFarFadeStart:{value:Math.max(20,d)},uFarFadeEnd:{value:Math.max(d+20,l)},uMistDensity:{value:.35}},O=new Bt({uniforms:A,vertexShader:Yi,fragmentShader:Ki,transparent:!0,depthWrite:!1,depthTest:!0,side:si,blending:yo}),x=new li(P,O,a);x.name="crepuscular-god-rays",x.renderOrder=f,x.frustumCulled=!1,x.castShadow=!1,x.receiveShadow=!1;const ne=new ge(0,1,0),w=new ge(Qe[0],Qe[1],Qe[2]).normalize(),v=new ge(NaN,NaN,NaN),V=new ui,y=new ge,$=new ge,ie=new ci,ce=new ge,X=new ge,_=new ee,I=new ee,N=new Kt(0,0);function E(q){if(w.copy(q),w.y<u){const U=w.x*w.x+w.z*w.z,se=Math.sqrt(Math.max(1-u*u,.01));if(U>1e-6){const ue=se/Math.sqrt(U);w.x*=ue,w.z*=ue}else w.x=se,w.z=0;w.y=u}w.normalize();const T=w.distanceToSquared(v);if(!(!M&&T<1e-8)){M=!1,v.copy(w),V.setFromUnitVectors(ne,w);for(let U=0;U<a;U++){const se=i[U];y.set(se.x,se.y,se.z),$.set(se.radius,se.length,se.radius),ie.compose(y,V,$),x.setMatrixAt(U,ie)}x.instanceMatrix.needsUpdate=!0}}E(A.uLightDir.value);function B(q,T=null,U=null,se=null){if(m)return;const ue=Number.isFinite(q)&&q>0?Math.min(q,.25):0;b+=ue,A.uTime.value=b;const{dayFactor:Y,lightAltitude:j}=Ro(T,A.uLightDir.value,A.uLightColor.value,_,I,ce,X);E(A.uLightDir.value);const Q=U&&typeof U=="object"?U:null,fe=Number.isFinite(Q?.cloudCover)?je(Q.cloudCover):.36,le=Number.isFinite(Q?.stormDarkening)?je(Q.stormDarkening):0,Se=Number.isFinite(Q?.rainRate)?je(Q.rainRate):0,Me=Number.isFinite(Q?.lightningFlash)?Math.max(0,Q.lightningFlash):0;let ve=.35;Number.isFinite(Q?.mistDensity)?ve=je(Q.mistDensity):Number.isFinite(Q?.mist)?ve=je(Q.mist):Number.isFinite(Q?.fogDensity)&&(ve=Q.fogDensity<=.1?je((Q.fogDensity-.0015)/.015):je(Q.fogDensity)),Q?.state==="valley_mist"&&(ve=Math.max(ve,.85)),A.uMistDensity.value=ve;const _e=At(.03,.18,j),Ge=1-At(.24,.48,j)*Y,Fe=.65+1.05*ve,Te=(1-.78*le)*(1-.55*Se)*(1-.5*At(.72,1,fe)),Le=mt(1,1.15,Y),Ie=1+Math.min(Me,1)*.25,ke=c*_e*Ge*Fe*Te*Le*Ie;if(z=ke,A.uGlobalIntensity.value=ke,x.visible=ke>.01,Q?.windOffset!=null){const[Ae,g]=Ln(Q.windOffset);N.set(Ae,g)}else if(C?.uCloudWindOffset?.value)N.copy(C.uCloudWindOffset.value);else if(ue>0){const g=(.35+1.45*(Number.isFinite(Q?.windStrength)?Math.max(0,Q.windStrength):.45))*7.5*ue;N.x+=.86*g,N.y+=.51*g}let Ee=!1;for(let Ae=0;Ae<a;Ae++){const g=i[Ae],oe=F?zo(g.x,g.z,N,fe):1,D=mt(1,g.mistBoost,ve),W=g.intensity*D*oe,ae=Ae*4;Math.abs(H[ae]-W)>1e-4&&(H[ae]=W,Ee=!0)}Ee&&(S.needsUpdate=!0)}function te(q=null){return q&&typeof q.copy=="function"?q.copy(w):w.clone()}function G(){return z}function Z(){m||(m=!0,P.dispose(),O.dispose(),typeof x.dispose=="function"&&x.dispose())}return{mesh:x,material:O,geometry:P,uniforms:A,anchors:i,count:a,get disposed(){return m},getAlignedDirection:te,getEffectiveIntensity:G,update:B,dispose:Z}}const ga=Object.freeze(Object.defineProperty({__proto__:null,CLOUD_QUALITY_TIERS:ln,CLOUD_SHADOW_GLSL:Tn,DEFAULT_GODRAY_ANCHORS:_o,createCloudShadowUniforms:kn,createGodRaySystem:Ji,createVolumetricClouds:Xi,patchCloudShadowUniforms:Zi,sampleCloudShadow:zo},Symbol.toStringTag,{value:"Module"})),_t=16,To=Object.freeze([Object.freeze({id:"camp_river",minX:-16,maxX:-2,minZ:-55,maxZ:30,y:-.35}),Object.freeze({id:"camp_pool",x:2,z:-72,radius:22,y:-.35}),Object.freeze({id:"moonmere",x:133.4,z:-336.5,radius:145,y:-1.2}),Object.freeze({id:"reed_marsh",x:-315,z:-600,radius:95,y:.25})]);function Xe(e,n,t){return e<n?n:e>t?t:e}function ea(e,n,t){const i=n-e;if(i<=1e-6)return t>=n?1:0;const a=Xe((t-e)/i,0,1);return a*a*(3-2*a)}function On(e){let n=e>>>0;return()=>{n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function lt(e,n){return e?Array.isArray(e)?e.length<3?!1:(n.set(Number.isFinite(e[0])?e[0]:0,Number.isFinite(e[1])?e[1]:0,Number.isFinite(e[2])?e[2]:0),!0):typeof e=="object"&&Number.isFinite(e.x)&&Number.isFinite(e.y)&&Number.isFinite(e.z)?(n.set(e.x,e.y,e.z),!0):!1:!1}function Po(e,n){if(!e)return!1;let t,i,a,o,c,s;if(Array.isArray(e)&&e.length>=6)t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],s=e[5];else if(e.min&&e.max)Array.isArray(e.min)?(t=e.min[0],i=e.min[1],a=e.min[2]):(t=e.min.x,i=e.min.y,a=e.min.z),Array.isArray(e.max)?(o=e.max[0],c=e.max[1],s=e.max[2]):(o=e.max.x,c=e.max.y,s=e.max.z);else if(Number.isFinite(e.xMin)&&Number.isFinite(e.xMax)&&Number.isFinite(e.yMin)&&Number.isFinite(e.yMax)&&Number.isFinite(e.zMin)&&Number.isFinite(e.zMax))t=e.xMin,o=e.xMax,i=e.yMin,c=e.yMax,a=e.zMin,s=e.zMax;else return!1;return!Number.isFinite(t)||!Number.isFinite(i)||!Number.isFinite(a)||!Number.isFinite(o)||!Number.isFinite(c)||!Number.isFinite(s)?!1:(n.minX=t<o?t:o,n.maxX=t<o?o:t,n.minY=i<c?i:c,n.maxY=i<c?c:i,n.minZ=a<s?a:s,n.maxZ=a<s?s:a,!0)}const Wt={minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0};function Wo(e,n,t,i){if(!i||!i.length||!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(t))return!1;for(let a=0;a<i.length;a++){const o=i[a];if(o){if(Number.isFinite(o.minX)&&Number.isFinite(o.maxX)){if(e>=o.minX&&e<=o.maxX&&n>=o.minY&&n<=o.maxY&&t>=o.minZ&&t<=o.maxZ)return!0;continue}if(Po(o,Wt)&&e>=Wt.minX&&e<=Wt.maxX&&n>=Wt.minY&&n<=Wt.maxY&&t>=Wt.minZ&&t<=Wt.maxZ)return!0}}return!1}const Lo=`
uniform float uTime;
uniform float uRainRate;
uniform vec3 uCameraPos;
uniform vec3 uVolumeSize;
uniform vec2 uWind;
uniform float uFallSpeed;
uniform float uStreakLength;
uniform float uStreakWidth;
uniform vec3 uMoonDir;
uniform vec3 uMoonColor;
uniform vec3 uLanternPos;
uniform vec3 uLanternColor;
uniform float uLanternIntensity;
uniform float uLanternRadius;
uniform float uLightningFlash;
uniform float uStormDarkening;
uniform int uShelterCount;
uniform vec3 uShelterMin[${_t}];
uniform vec3 uShelterMax[${_t}];

attribute vec4 aSeed;

varying vec2 vUv;
varying float vAlpha;
varying vec3 vTint;

void main() {
  vUv = uv;

  // Deterministic activation gate so rain density scales smoothly with uRainRate
  // while keeping terminal velocity variation uniform across light drizzle and heavy storm.
  float gate = fract(aSeed.w * 7.31 + aSeed.x * 3.17 + aSeed.z * 5.23);
  float rainActive = smoothstep(gate - 0.06, gate + 0.04, uRainRate);
  if (rainActive <= 0.001 || uRainRate <= 0.001) {
    vAlpha = 0.0;
    vTint = vec3(0.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  float speedScale = 0.80 + 0.40 * aSeed.w;
  float fallSpd = uFallSpeed * speedScale * (0.85 + 0.30 * uRainRate);
  vec3 vel = vec3(uWind.x * 4.5, -fallSpd, uWind.y * 4.5);

  // Camera-wrapped toroidal volume: raindrops fall continuously in world coordinates
  // and seamlessly re-enter the far boundary when camera translates.
  vec3 basePos = aSeed.xyz * uVolumeSize;
  vec3 drifted = basePos + vel * uTime;
  vec3 rel = mod(drifted - uCameraPos, uVolumeSize) - 0.5 * uVolumeSize;
  vec3 dropOrigin = uCameraPos + rel;

  vec3 streakAxis = normalize(-vel);
  float len = uStreakLength * (0.72 + 0.56 * aSeed.w) * (0.85 + 0.35 * uRainRate);
  vec3 dropTop = dropOrigin + streakAxis * len;

  // Shelter AABB exclusion: clip both tip and tail against up to 16 cabin/cave/porch boxes.
  bool sheltered = false;
  for (int i = 0; i < ${_t}; i++) {
    if (i >= uShelterCount) break;
    vec3 bMin = uShelterMin[i];
    vec3 bMax = uShelterMax[i];
    bool inOrigin =
      dropOrigin.x >= bMin.x && dropOrigin.x <= bMax.x &&
      dropOrigin.y >= bMin.y && dropOrigin.y <= bMax.y &&
      dropOrigin.z >= bMin.z && dropOrigin.z <= bMax.z;
    bool inTop =
      dropTop.x >= bMin.x && dropTop.x <= bMax.x &&
      dropTop.y >= bMin.y && dropTop.y <= bMax.y &&
      dropTop.z >= bMin.z && dropTop.z <= bMax.z;
    if (inOrigin || inTop) {
      sheltered = true;
      break;
    }
  }

  if (sheltered) {
    vAlpha = 0.0;
    vTint = vec3(0.0);
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  vec3 toCam = cameraPosition - dropOrigin;
  float camDist = length(toCam);
  vec3 viewDir = toCam / max(camDist, 1e-4);

  // Camera-facing velocity-aligned ribbon.
  vec3 side = cross(streakAxis, viewDir);
  float sideLen = length(side);
  side = sideLen > 1e-4 ? (side / sideLen) : vec3(1.0, 0.0, 0.0);

  float width = uStreakWidth * (0.90 + 0.40 * aSeed.w) * (1.0 + 0.038 * camDist);
  vec3 worldPos = dropOrigin + side * (position.x * width) + streakAxis * (position.y * len);

  // Soft near-camera and outer-box fades prevent popping at lens or volume edge.
  float nearFade = smoothstep(0.55, 1.9, camDist);
  vec3 edgeNorm = abs(rel) / max(0.5 * uVolumeSize, vec3(0.1));
  float maxEdge = max(edgeNorm.x, max(edgeNorm.y, edgeNorm.z));
  float edgeFade = 1.0 - smoothstep(0.72, 1.0, maxEdge);

  // Subtle moonlight forward-scatter rim glint + warm lantern halo + storm lightning flash.
  float moonScatter = max(dot(-viewDir, normalize(uMoonDir)), 0.0);
  float moonGlint = (0.34 + 0.66 * moonScatter * moonScatter) * (1.0 - 0.35 * uStormDarkening);
  vec3 toLantern = dropOrigin - uLanternPos;
  float lanternDist = length(toLantern);
  float lanternNorm = clamp(1.0 - lanternDist / max(uLanternRadius, 0.5), 0.0, 1.0);
  float lanternGlint = lanternNorm * lanternNorm * uLanternIntensity;

  vec3 baseSilver = uMoonColor * (0.68 + 0.78 * moonGlint);
  vec3 warmLantern = uLanternColor * lanternGlint * 1.65;
  vec3 flashBoost = vec3(0.88, 0.94, 1.0) * (uLightningFlash * 1.6);

  vTint = baseSilver + warmLantern + flashBoost;
  vAlpha = clamp(rainActive * nearFade * edgeFade * (0.34 + 0.44 * uRainRate + 0.24 * lanternGlint + 0.28 * uLightningFlash), 0.0, 0.92);

  gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
}
`,ko=`
varying vec2 vUv;
varying float vAlpha;
varying vec3 vTint;

void main() {
  // Crisp tapered raindrop streak: brightest near leading tip (vUv.y ~ 0.14), feathered tail.
  float across = clamp(1.0 - abs(vUv.x * 2.0 - 1.0), 0.0, 1.0);
  float coreX = pow(across, 1.35);
  float along = smoothstep(0.0, 0.14, vUv.y) * (1.0 - smoothstep(0.48, 1.0, vUv.y));
  float alpha = coreX * along * vAlpha;
  gl_FragColor = vec4(vTint, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function ta({count:e=1600,volumeSize:n=[44,24,44],fallSpeed:t=16.5,streakLength:i=.72,streakWidth:a=.018,shelterBoxes:o=[],moonDir:c=null,moonColor:s=10139868,lanternPos:r=null,lanternColor:h=16757860,lanternIntensity:d=.75,lanternRadius:l=14,seed:u=1380010318}={}){const f=Math.max(1,Math.floor(e)),F=On(u),p=new wo;p.instanceCount=f;const L=new Float32Array([-.5,0,0,.5,0,0,-.5,1,0,.5,1,0]),C=new Float32Array([0,0,1,0,0,1,1,1]);p.setAttribute("position",new Dt(L,3)),p.setAttribute("uv",new Dt(C,2)),p.setIndex([0,1,2,2,1,3]);const m=new Float32Array(f*4);for(let V=0;V<f;V++){const y=V*4;m[y]=F(),m[y+1]=F(),m[y+2]=F(),m[y+3]=F()}p.setAttribute("aSeed",new Yt(m,4)),p.boundingSphere=new hn(new ge,60);const b=new ge(44,24,44);Array.isArray(n)&&n.length>=3?b.set(n[0],n[1],n[2]):n&&typeof n=="object"&&b.set(n.x??44,n.y??24,n.z??44);const z=new ge(.3,.23,-.93).normalize();c&&(lt(c,z),z.lengthSq()>1e-6&&z.normalize());const M=new ge(3.4,1.2,3.5);r&&lt(r,M);const P=Array.from({length:_t},()=>new ge),H=Array.from({length:_t},()=>new ge),k={uTime:{value:0},uRainRate:{value:0},uCameraPos:{value:new ge},uVolumeSize:{value:b},uWind:{value:new Kt(0,0)},uFallSpeed:{value:t},uStreakLength:{value:i},uStreakWidth:{value:a},uMoonDir:{value:z},uMoonColor:{value:new ee(s)},uLanternPos:{value:M},uLanternColor:{value:new ee(h)},uLanternIntensity:{value:d},uLanternRadius:{value:l},uLightningFlash:{value:0},uStormDarkening:{value:0},uShelterCount:{value:0},uShelterMin:{value:P},uShelterMax:{value:H}},S=new Bt({uniforms:k,vertexShader:Lo,fragmentShader:ko,transparent:!0,depthWrite:!1,side:So}),R=new dn(p,S);R.name="rain-curtain",R.frustumCulled=!1,R.renderOrder=6,R.visible=!1;const A=[];let O=!1;function x(V){A.length=0;let y=0;if(Array.isArray(V))for(let $=0;$<V.length&&y<_t;$++){const ie={minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0};Po(V[$],ie)&&(P[y].set(ie.minX,ie.minY,ie.minZ),H[y].set(ie.maxX,ie.maxY,ie.maxZ),A.push(ie),y++)}for(let $=y;$<_t;$++)P[$].set(0,0,0),H[$].set(0,0,0);return k.uShelterCount.value=y,y}x(o);function ne(V,y=null,$=null,ie=null){V&&lt(V,k.uLanternPos.value),y!=null&&k.uLanternColor.value.set(y),Number.isFinite($)&&(k.uLanternIntensity.value=$),Number.isFinite(ie)&&(k.uLanternRadius.value=ie)}function w(V,y=null){if(O)return;const $=Number.isFinite(V)&&V>0?Math.min(V,.5):0;if(k.uTime.value+=$,y){y.cameraPos?lt(y.cameraPos,k.uCameraPos.value):y.camera&&y.camera.position?k.uCameraPos.value.copy(y.camera.position):y.playerPos&&lt(y.playerPos,k.uCameraPos.value);const ie=Number.isFinite(y.rainRate)?Xe(y.rainRate,0,1):y.weather&&Number.isFinite(y.weather.rainRate)?Xe(y.weather.rainRate,0,1):k.uRainRate.value;if(k.uRainRate.value=ie,Number.isFinite(y.windX)||Number.isFinite(y.windZ))k.uWind.value.set(Number.isFinite(y.windX)?y.windX:k.uWind.value.x,Number.isFinite(y.windZ)?y.windZ:k.uWind.value.y);else if(y.wind)if(Array.isArray(y.wind))k.uWind.value.set(y.wind[0]||0,y.wind[1]||0);else{const ce=y.wind.vx??y.wind.x??0,X=y.wind.vz??y.wind.z??y.wind.y??0;k.uWind.value.set(Number.isFinite(ce)?ce:0,Number.isFinite(X)?X:0)}else if(Number.isFinite(y.windStrength)||y.weather&&Number.isFinite(y.weather.windStrength)){const ce=Number.isFinite(y.windStrength)?y.windStrength:y.weather.windStrength;k.uWind.value.set(ce*.82,ce*.57)}y.moonDir&&(lt(y.moonDir,k.uMoonDir.value),k.uMoonDir.value.lengthSq()>1e-6&&k.uMoonDir.value.normalize()),y.lanternPos&&lt(y.lanternPos,k.uLanternPos.value),Number.isFinite(y.lightningFlash)&&(k.uLightningFlash.value=Xe(y.lightningFlash,0,1)),Number.isFinite(y.stormDarkening)?k.uStormDarkening.value=Xe(y.stormDarkening,0,1):y.weather&&Number.isFinite(y.weather.stormDarkening)&&(k.uStormDarkening.value=Xe(y.weather.stormDarkening,0,1))}R.visible=k.uRainRate.value>.002}function v(){O||(O=!0,R.visible=!1,p.dispose(),S.dispose(),A.length=0)}return{mesh:R,geometry:p,material:S,uniforms:k,count:f,setShelterBoxes:x,getShelterBoxes:()=>A,setLantern:ne,update:w,dispose:v}}const Oo=`
attribute vec4 aRipple;
attribute vec2 aParams;

varying vec2 vUv;
varying float vAge;
varying float vIntensity;

void main() {
  float age = aRipple.w;
  if (age < 0.0 || age >= 1.0) {
    vUv = vec2(0.0);
    vAge = 1.0;
    vIntensity = 0.0;
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }

  vUv = uv;
  vAge = age;
  vIntensity = aParams.y;

  float radius = aParams.x * (0.18 + 0.82 * age);
  vec3 worldPos = aRipple.xyz + vec3(position.x * radius * 2.0, 0.0, position.z * radius * 2.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
}
`,Bo=`
uniform vec3 uMoonColor;
uniform float uLightningFlash;
uniform float uOpacity;

varying vec2 vUv;
varying float vAge;
varying float vIntensity;

void main() {
  vec2 centered = vUv * 2.0 - 1.0;
  float r = length(centered);

  // Dual concentric expanding water ripples: sharp leading crest + softer harmonic trailing ring.
  float leadFront = mix(0.10, 0.90, vAge);
  float d1 = (r - leadFront) * 14.0;
  float ring1 = exp(-d1 * d1);

  float trailFront = max(0.04, leadFront - 0.20);
  float d2 = (r - trailFront) * 16.0;
  float ring2 = exp(-d2 * d2) * 0.55 * smoothstep(0.14, 0.34, vAge);

  // Subtle central splash pinpoint right at impact.
  float impact = exp(-r * r * 36.0) * (1.0 - smoothstep(0.0, 0.18, vAge)) * 0.85;

  float invAge = clamp(1.0 - vAge, 0.0, 1.0);
  float lifeFade = smoothstep(0.0, 0.06, vAge) * invAge * invAge;
  float edgeMask = 1.0 - smoothstep(0.84, 1.0, r);
  float alpha = clamp((ring1 + ring2 + impact) * lifeFade * edgeMask * vIntensity * uOpacity, 0.0, 1.0);

  vec3 col = uMoonColor * (0.85 + 0.45 * ring1) + vec3(0.75, 0.86, 1.0) * (uLightningFlash * 0.9);
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function na(e,n,t,i){if(typeof i=="function"){const a=i(e,n);return Number.isFinite(a)?a:NaN}if(!t||!t.length)return NaN;for(let a=0;a<t.length;a++){const o=t[a];if(!(!o||!Number.isFinite(o.y))){if(Number.isFinite(o.radius)){const c=e-o.x,s=n-o.z;if(c*c+s*s<=o.radius*o.radius)return o.y}else if(Number.isFinite(o.minX)&&Number.isFinite(o.maxX)&&Number.isFinite(o.minZ)&&Number.isFinite(o.maxZ)&&e>=o.minX&&e<=o.maxX&&n>=o.minZ&&n<=o.maxZ)return o.y}}return NaN}function oa({count:e=320,spawnRadius:n=22,maxSpawnRate:t=210,minLifetime:i=.48,maxLifetime:a=.85,minRadius:o=.34,maxRadius:c=.72,surfaceOffset:s=.015,waterZones:r=To,getWaterHeight:h=null,shelterBoxes:d=[],moonColor:l=11060968,opacity:u=.55,seed:f=1380536400}={}){const F=Math.max(1,Math.floor(e)),p=On(f),L=new wo;L.instanceCount=F;const C=new Float32Array([-.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,.5]),m=new Float32Array([0,0,1,0,0,1,1,1]);L.setAttribute("position",new Dt(C,3)),L.setAttribute("uv",new Dt(m,2)),L.setIndex([0,2,1,1,2,3]);const b=new Float32Array(F*4),z=new Float32Array(F*2),M=new Float32Array(F),P=new Float32Array(F);for(let E=0;E<F;E++)b[E*4+3]=-1,M[E]=-1,P[E]=1;const H=new Yt(b,4);H.setUsage(Ot);const k=new Yt(z,2);k.setUsage(Ot),L.setAttribute("aRipple",H),L.setAttribute("aParams",k),L.boundingSphere=new hn(new ge,60);const S={uMoonColor:{value:new ee(l)},uLightningFlash:{value:0},uOpacity:{value:u}},R=new Bt({uniforms:S,vertexShader:Oo,fragmentShader:Bo,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:So}),A=new dn(L,R);A.name="rain-splash-ripples",A.frustumCulled=!1,A.renderOrder=5,A.visible=!1;let O=Array.isArray(r)?r.slice():null,x=typeof h=="function"?h:null,ne=Array.isArray(d)?d.slice():[],w=0,v=0,V=0,y=!1;const $=new ge;function ie(E,B,te,G=.52,Z=.85,q=.65){if(y)return!1;const T=w;w=(w+1)%F;const U=M[T]<0,se=T*4,ue=T*2;return b[se]=E,b[se+1]=B+s,b[se+2]=te,b[se+3]=0,z[ue]=G,z[ue+1]=Z,M[T]=0,P[T]=Math.max(.15,q),U&&V++,H.needsUpdate=!0,k.needsUpdate=!0,A.visible=!0,!0}function ce(E,B=null){if(y)return;const te=Number.isFinite(E)&&E>0?Math.min(E,.25):0;let G=0;B&&(B.playerPos?lt(B.playerPos,$):B.cameraPos?lt(B.cameraPos,$):B.camera&&B.camera.position&&$.copy(B.camera.position),Number.isFinite(B.rainRate)?G=Xe(B.rainRate,0,1):B.weather&&Number.isFinite(B.weather.rainRate)&&(G=Xe(B.weather.rainRate,0,1)),Number.isFinite(B.lightningFlash)&&(S.uLightningFlash.value=Xe(B.lightningFlash,0,1)),B.shelterBoxes&&(ne=B.shelterBoxes));let Z=0,q=!1;for(let T=0;T<F;T++){if(M[T]<0)continue;M[T]+=te;const U=M[T]/P[T];U>=1?(M[T]=-1,b[T*4+3]=-1):(b[T*4+3]=U,Z++),q=!0}if(G>.005&&te>0){v+=t*G*te;const T=Math.min(Math.floor(v),24);if(T>0){v-=T;const U=ne;for(let se=0;se<T;se++)for(let ue=0;ue<4;ue++){const Y=p()*Math.PI*2,j=Math.sqrt(p())*n,Q=$.x+Math.cos(Y)*j,fe=$.z+Math.sin(Y)*j,le=na(Q,fe,O,x);if(!Number.isFinite(le)||U.length>0&&Wo(Q,le+.1,fe,U))continue;const Se=o+p()*(c-o),Me=i+p()*(a-i),ve=(.55+.45*p())*(.5+.5*G),_e=w;w=(w+1)%F;const Ge=M[_e]>=0,Fe=_e*4,Te=_e*2;b[Fe]=Q,b[Fe+1]=le+s,b[Fe+2]=fe,b[Fe+3]=0,z[Te]=Se,z[Te+1]=ve,M[_e]=0,P[_e]=Me,Ge||Z++,q=!0,k.needsUpdate=!0;break}}}else G<=.005&&(v=0);V=Z,q&&(H.needsUpdate=!0),A.visible=V>0}function X(E){O=Array.isArray(E)?E.slice():null}function _(E){x=typeof E=="function"?E:null}function I(E){ne=Array.isArray(E)?E.slice():[]}function N(){y||(y=!0,A.visible=!1,V=0,L.dispose(),R.dispose())}return{mesh:A,geometry:L,material:R,uniforms:S,count:F,spawnRipple:ie,getActiveCount:()=>V,setWaterZones:X,setWaterHeightFn:_,setShelterBoxes:I,update:ce,dispose:N}}function Pn(e,n=.56){if(!Number.isFinite(e)||e<0||e>=n)return 0;const t=Math.exp(-e/.048),i=e-.21,a=i>=-.05?.76*Math.exp(-(i*i)/(i<0?42e-5:.004)):0,o=.22*Math.exp(-e/.18),c=1-ea(n*.78,n,e);return Xe((Math.max(t,a)*.88+o*.55)*c,0,1)}const Go=`
attribute float aIntensity;
varying float vIntensity;

void main() {
  vIntensity = aIntensity;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Io=`
uniform float uFlash;
uniform vec3 uCoreColor;
uniform vec3 uBranchColor;

varying float vIntensity;

void main() {
  float alpha = clamp(uFlash * vIntensity, 0.0, 1.0);
  vec3 col = mix(uBranchColor, uCoreColor, smoothstep(0.45, 0.95, vIntensity));
  gl_FragColor = vec4(col * (1.2 + 0.8 * uFlash), alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Eo(e,n=1){const t=Math.max(0,Number.isFinite(e)?e:0),i=Xe(Number.isFinite(n)?n:1,.1,1),a=t/Mo,o=Xe(1/(1+Math.pow(t/420,1.35))*(.7+.3*i),.06,1),c=Xe(3200*Math.exp(-t/620)+180,180,3400);return{distance:t,delay:a,gain:o,lowpassHz:c}}function ia({bus:e=null,maxSegments:n=160,maxPendingThunder:t=16,flashDuration:i=.56,minDistance:a=220,maxDistance:o=1100,seed:c=1279870792}={}){const s=On(c),r=Math.max(24,Math.floor(n)),h=r*2,d=new Float32Array(h*3),l=new Float32Array(h),u=new Wn,f=new Dt(d,3);f.setUsage(Ot);const F=new Dt(l,1);F.setUsage(Ot),u.setAttribute("position",f),u.setAttribute("aIntensity",F),u.setDrawRange(0,0),u.boundingSphere=new hn(new ge,1600);const p={uFlash:{value:0},uCoreColor:{value:new ee(15660799)},uBranchColor:{value:new ee(7183359)}},L=new Bt({uniforms:p,vertexShader:Go,fragmentShader:Io,transparent:!0,depthWrite:!1,blending:yo}),C=new fi(u,L);C.name="lightning-forked-bolt",C.frustumCulled=!1,C.renderOrder=8,C.visible=!1;const m=Math.max(4,Math.floor(t)),b=Array.from({length:m},()=>({active:!1,id:0,strikeTime:0,fireAt:0,distance:0,delay:0,gain:0,lowpassHz:0,azimuth:0,intensity:0}));let z=0,M=0,P=-1,H=0,k=!1,S=3.5+s()*5,R=!1;const A=new ge,O=new ge(.2,.85,-.45).normalize(),x={flashIntensity:0,skyFlash:0,boltAlpha:0,lightIntensity:0,lightDirection:O,lastDistance:0,lastDelay:0,lastSegmentCount:0,pendingThunderCount:0,strikeCount:0};function ne(_,I,N,E,B,te,G,Z,q){if(_>=r)return _;const T=_*2,U=T*3;return d[U]=I,d[U+1]=N,d[U+2]=E,d[U+3]=B,d[U+4]=te,d[U+5]=G,l[T]=Z,l[T+1]=q,_+1}function w(_,I,N,E,B,te){const G=Math.cos(E),Z=Math.sin(E),q=-Z,T=G,U=_+G*N,se=I+Z*N,ue=18,Y=Xe(N*.032,6,28);let j=0,Q=U,fe=B,le=se;const Se=3+Math.floor(s()*4);let Me=0;for(let ve=1;ve<=ue;ve++){const _e=ve/ue,Ge=(s()-.5)*2*Y*(1-.35*_e),Fe=(s()-.5)*Y*.55,Te=Q+q*Ge*.45+G*Fe*.35,Le=B+(te-B)*_e+(ve<ue?(s()-.5)*4.5:0),Ie=le+T*Ge*.45+Z*Fe*.35;if(j=ne(j,Q,fe,le,Te,Le,Ie,1,.96),Me<Se&&ve>=3&&ve<=ue-3&&s()<.48){Me++;const ke=s()<.5?-1:1,Ee=4+Math.floor(s()*4);let Ae=Te,g=Le,oe=Ie,D=q*ke*(.55+.5*s())+G*(s()-.5)*.4,W=T*ke*(.55+.5*s())+Z*(s()-.5)*.4;for(let ae=1;ae<=Ee&&j<r;ae++){const K=ae/Ee,re=Y*.42*(1-.25*K),me=Ae+D*re+q*(s()-.5)*re*.65,pe=g-(B-te)*(.045+.025*s()),He=oe+W*re+T*(s()-.5)*re*.65,ze=.72*(1-.45*((ae-1)/Ee)),$e=.72*(1-.55*K);if(j=ne(j,Ae,g,oe,me,pe,He,ze,$e),ae===2&&s()<.5&&j+2<r){const ot=-ke,Ce=me+(q*ot*.6+(s()-.5)*.3)*re*.85,Ve=pe-(B-te)*.038,it=He+(T*ot*.6+(s()-.5)*.3)*re*.85;j=ne(j,me,pe,He,Ce,Ve,it,.46,.24)}Ae=me,g=pe,oe=He,D*=.94,W*=.94}}Q=Te,fe=Le,le=Ie}return u.setDrawRange(0,j*2),f.needsUpdate=!0,F.needsUpdate=!0,j}function v(_,I,N,E){const B=Eo(I,E);let te=null,G=0;for(let Z=0;Z<m;Z++){if(!b[Z].active){te=b[Z];break}b[Z].fireAt<b[G].fireAt&&(G=Z)}return te||(te=b[G]),te.active=!0,te.id=_,te.strikeTime=z,te.fireAt=z+B.delay,te.distance=B.distance,te.delay=B.delay,te.gain=B.gain,te.lowpassHz=B.lowpassHz,te.azimuth=N,te.intensity=E,B}function V(){let _=0;for(let I=0;I<m;I++)b[I].active&&_++;return _}function y({distance:_=null,azimuth:I=null,origin:N=null,intensity:E=null,hasBolt:B=!0,skyHeight:te=220,groundY:G=18}={}){if(R)return null;N&&lt(N,A);const Z=Number.isFinite(_)&&_>=0?_:a+s()*(o-a),q=Number.isFinite(I)?I:s()*Math.PI*2,T=Xe(Number.isFinite(E)?E:.65+.35*s(),.2,1);M++,P=0,H=T,k=!!B;const U=A.x+Math.cos(q)*Z,se=A.z+Math.sin(q)*Z;O.set(Math.cos(q)*.72,.68,Math.sin(q)*.72).normalize();let ue=0;k?(ue=w(A.x,A.z,Math.max(Z,40),q,te,G),C.visible=!0):(u.setDrawRange(0,0),C.visible=!1);const Y=v(M,Z,q,T),j=Pn(0,i)*T;x.flashIntensity=j,x.skyFlash=j,x.lightIntensity=j*3.2,x.boltAlpha=k?Xe(j*1.15,0,1):0,p.uFlash.value=x.boltAlpha,C.visible=k&&x.boltAlpha>.005,x.lastDistance=Y.distance,x.lastDelay=Y.delay,x.lastSegmentCount=ue,x.strikeCount=M,x.pendingThunderCount=V();const Q={id:M,distance:Y.distance,delay:Y.delay,azimuth:q,intensity:T,hasBolt:k,segments:ue,position:{x:U,y:te,z:se},time:z};return e&&typeof e.emit=="function"&&e.emit("weather:lightning",Q),Y.delay<=0&&$(0),Q}function $(_){const I=z+_*.5;let N=0;for(let E=0;E<m;E++){const B=b[E];B.active&&(B.fireAt<=I?(B.active=!1,e&&typeof e.emit=="function"&&e.emit("weather:thunder",{id:B.id,distance:B.distance,delay:B.delay,gain:B.gain,lowpassHz:B.lowpassHz,azimuth:B.azimuth,intensity:B.intensity,elapsed:z-B.strikeTime,time:z})):N++)}x.pendingThunderCount=N}function ie(_,I=null){if(R)return x;const N=Number.isFinite(_)&&_>0?Math.min(_,.5):0;z+=N,I&&(I.playerPos?lt(I.playerPos,A):I.cameraPos?lt(I.cameraPos,A):I.origin&&lt(I.origin,A));const E=I?Number.isFinite(I.lightningFreq)?Xe(I.lightningFreq,0,1):I.weather&&Number.isFinite(I.weather.lightningFreq)?Xe(I.weather.lightningFreq,0,1):0:0;let B=!1;if(E>.01&&N>0&&(S-=N*(.45+1.25*E),S<=0&&(y({hasBolt:s()<.72}),B=!0,S=5.5+s()*8.5)),P>=0&&!B)if(P+=N,P>=i)P=-1,x.flashIntensity=0,x.skyFlash=0,x.lightIntensity=0,x.boltAlpha=0,p.uFlash.value=0,C.visible=!1;else{const G=Pn(P,i)*H;x.flashIntensity=G,x.skyFlash=G,x.lightIntensity=G*3.2,x.boltAlpha=k?Xe(G*1.15,0,1):0,p.uFlash.value=x.boltAlpha,C.visible=k&&x.boltAlpha>.005}else x.flashIntensity=0,x.skyFlash=0,x.lightIntensity=0,x.boltAlpha=0,p.uFlash.value=0,C.visible=!1;return $(N),x}function ce(){for(let _=0;_<m;_++)b[_].active=!1;x.pendingThunderCount=0}function X(){R||(R=!0,ce(),P=-1,C.visible=!1,u.dispose(),L.dispose())}return{mesh:C,geometry:u,material:L,uniforms:p,triggerStrike:y,update:ie,getState:()=>x,getClock:()=>z,clearPending:ce,dispose:X}}const pa=Object.freeze(Object.defineProperty({__proto__:null,BOLT_FRAGMENT_SHADER:Io,BOLT_VERTEX_SHADER:Go,DEFAULT_WATER_ZONES:To,MAX_SHELTER_BOXES:_t,RAIN_FRAGMENT_SHADER:ko,RAIN_VERTEX_SHADER:Lo,RIPPLE_FRAGMENT_SHADER:Bo,RIPPLE_VERTEX_SHADER:Oo,SPEED_OF_SOUND:Mo,computeThunderAcoustics:Eo,createLightningSystem:ia,createRainSystem:ta,createSplashRipples:oa,evaluateLightningFlash:Pn,isInsideShelter:Wo},Symbol.toStringTag,{value:"Module"}));export{Xt as W,sa as a,la as b,ra as c,ca as d,ua as e,ma as f,ha as g,ga as h,Wo as i,fa as p,pa as r,da as s};
