const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dark-BcNcqjAg.js","assets/index-D674j5vy.js","assets/index-DCxFXmzs.css","assets/Dark-pn0mfvsB.css","assets/Locale-DcCvghHI.js","assets/Locale-BD0ga98Y.css","assets/ElSize-Cll6Gn_u.js","assets/ElSize-YMn9Cw_-.css","assets/FullScreen-BuLzHKFH.js","assets/FullScreen-CPRMYvL6.css","assets/Refresh-Ch6NJ9U5.js","assets/Refresh-Df7vmm9k.css","assets/NavSearch-Dpy4IDz4.js","assets/NavSearch-hMwJZglB.css"])))=>i.map(i=>d[i]);
import{H as V,I as j,m as f,C as W,_ as N,J as B,e as S,g as P,K as z,L as $,r as F,o as O,h as I,i as G,j as d,M as q,w as L,T as H,c as J,N as K,O as T,k as Q,P as w,Q as h}from"./index-D674j5vy.js";function U(t){return V()?(j(t),!0):!1}function C(t){return typeof t=="function"?t():f(t)}const b=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const X=Object.prototype.toString,Y=t=>X.call(t)==="[object Object]",A=()=>{},Z=ee();function ee(){var t,n;return b&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((n=window==null?void 0:window.navigator)==null?void 0:n.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function g(t){var n;const s=C(t);return(n=s==null?void 0:s.$el)!=null?n:s}const D=b?window:void 0;function k(...t){let n,s,r,p;if(typeof t[0]=="string"||Array.isArray(t[0])?([s,r,p]=t,n=D):[n,s,r,p]=t,!n)return A;Array.isArray(s)||(s=[s]),Array.isArray(r)||(r=[r]);const m=[],_=()=>{m.forEach(l=>l()),m.length=0},u=(l,c,e,o)=>(l.addEventListener(c,e,o),()=>l.removeEventListener(c,e,o)),v=W(()=>[g(n),C(p)],([l,c])=>{if(_(),!l)return;const e=Y(c)?{...c}:c;m.push(...s.flatMap(o=>r.map(i=>u(l,o,i,e))))},{immediate:!0,flush:"post"}),a=()=>{v(),_()};return U(a),a}let x=!1;function te(t,n,s={}){const{window:r=D,ignore:p=[],capture:m=!0,detectIframe:_=!1}=s;if(!r)return A;Z&&!x&&(x=!0,Array.from(r.document.body.children).forEach(e=>e.addEventListener("click",A)),r.document.documentElement.addEventListener("click",A));let u=!0;const v=e=>p.some(o=>{if(typeof o=="string")return Array.from(r.document.querySelectorAll(o)).some(i=>i===e.target||e.composedPath().includes(i));{const i=g(o);return i&&(e.target===i||e.composedPath().includes(i))}}),l=[k(r,"click",e=>{const o=g(t);if(!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(u=!v(e)),!u){u=!0;return}n(e)}},{passive:!0,capture:m}),k(r,"pointerdown",e=>{const o=g(t);u=!v(e)&&!!(o&&!e.composedPath().includes(o))},{passive:!0}),_&&k(r,"blur",e=>{setTimeout(()=>{var o;const i=g(t);((o=r.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(i!=null&&i.contains(r.document.activeElement))&&n(e)},0)})].filter(Boolean);return()=>l.forEach(e=>e())}const oe={class:"h-full flex items-center"},E="18",ne=Object.assign({name:"Tools"},{__name:"index",setup(t){const{appConfig:n}=B(),s=S(),r=w(()=>h(()=>import("./Dark-BcNcqjAg.js"),__vite__mapDeps([0,1,2,3]))),p=w(()=>h(()=>import("./Locale-DcCvghHI.js"),__vite__mapDeps([4,1,2,5]))),m=w(()=>h(()=>import("./ElSize-Cll6Gn_u.js"),__vite__mapDeps([6,1,2,7]))),_=w(()=>h(()=>import("./FullScreen-BuLzHKFH.js"),__vite__mapDeps([8,1,2,9]))),u=w(()=>h(()=>import("./Refresh-Ch6NJ9U5.js"),__vite__mapDeps([10,1,2,11]))),v=w(()=>h(()=>import("./NavSearch-Dpy4IDz4.js"),__vite__mapDeps([12,1,2,13]))),a=S(!1);te(s,()=>{n.trigger==="click"&&a.value&&(a.value=!1)});function l(){n.trigger==="click"&&(a.value=!a.value)}function c(i){n.trigger==="hover"&&(a.value=i)}const e=P(()=>a.value?z:$),o=P(()=>n.headerToolsOmit?a.value?"300px":"32px":"initial");return(i,y)=>{const M=F("el-icon");return O(),I("div",oe,[G("div",{ref_key:"moreRef",ref:s,class:"h-full flex items-center tools justify-end",style:Q({maxWidth:o.value}),onMouseleave:y[1]||(y[1]=R=>c(!1))},[d(f(v),{size:E}),d(f(p),{size:E}),d(f(r),{size:E}),d(f(_),{size:E}),d(f(m),{size:E}),f(n).headerToolsOmit?(O(),I("div",{key:0,class:"tools-item",title:"展开",onClick:q(l,["stop"]),onMouseenter:y[0]||(y[0]=R=>c(!0))},[d(M,null,{default:L(()=>[d(H,{mode:"out-in",name:"scale"},{default:L(()=>[(O(),J(K(e.value)))]),_:1})]),_:1})],32)):T("",!0)],36),T("",!0),d(f(u),{size:E})])}}}),se=N(ne,[["__scopeId","data-v-54ea13cd"]]);export{se as default};
