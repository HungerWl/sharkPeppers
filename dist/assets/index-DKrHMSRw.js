import{l as L}from"./lottie-DmtiReue.js";import{m as k,E as _,_ as N,r as p,o as T,C as V,a as l,b as d,c as h,w as i,i as f,d as u,k as g,h as w,q as D,F,z as C,v as j,p as M,l as P}from"./index-0MJCgTmw.js";import{a as R,g as U,b as q,c as z,d as A}from"./echart-BOOHX2zh.js";async function K(s){try{const e=await k({},"statisticsConfiguration/list",s);return e.status!==200&&_.error(e.message),e.data}catch(e){_.error(e.message)}}async function Z(s){try{const e=await k({},"statisticsConfiguration/executeStatistics",s);return e.status!==200&&_.error(e.message),e.data}catch(e){_.error(e.message)}}const $=s=>(M("data-v-d733ae3d"),s=s(),P(),s),G=$(()=>u("div",{class:"flex items-center border-b-2 border-[#fff] pb-2 mb-2"},[u("span",{class:"bg-[#203d8d] mr-2"}," "),u("div",{class:"text-[20px]"}," 基本统计 ")],-1)),H={class:"fnc-btn mb-1"},J={class:"fnc-tags"},Q={__name:"index",setup(s){const e=p([]),y=p(null);let m=null;async function x(){const t=await K({});e.value=t}x();const n=p(null),v=p(0);function O(t){const o=Object.keys(t)[0],a=t[o].info,r=a.mode,c=t[o].data;switch(r){case"bar":return A(a,c);case"line":return z(a,c);case"pie":return q(a,c);case"radar":return U(a,c);default:return console.warn("Unsupported chart type:",r),{}}}async function I(t){const o=new FormData;o.append("id",t.id);const a=await Z(o),r=O(a);n.value=null,v.value++,n.value=r}return T(()=>{m=L.loadAnimation({container:y.value,renderer:"svg",loop:!0,autoplay:!0,path:new URL("/sharkPeppers/assets/empty-echart-CIdgOZwD.json",import.meta.url).href})}),V(n,t=>{t&&m&&m.destroy()}),(t,o)=>{const a=l("el-button"),r=l("el-tag"),c=l("el-aside"),E=l("el-main"),S=l("el-container");return d(),h(S,{id:"basicStatistics",class:"p-3"},{default:i(()=>[f(c,{width:"300px",class:"p-3 bg-[#e6e6e6]"},{default:i(()=>[G,u("div",H,[f(a,{type:"info",plain:""},{default:i(()=>[g(" 新增 ")]),_:1}),f(a,{type:"info",plain:""},{default:i(()=>[g(" 下载 ")]),_:1})]),u("div",J,[(d(!0),w(F,null,D(e.value,(b,B)=>(d(),h(r,{key:B,type:"info",class:"mr-1 mb-2",effect:"dark",onClick:W=>I(b)},{default:i(()=>[g(j(b.name),1)]),_:2},1032,["onClick"]))),128))])]),_:1}),f(E,null,{default:i(()=>[n.value?C("",!0):(d(),w("div",{key:0,ref_key:"lottieContainer",ref:y,class:"w-full h-full"},null,512)),n.value?(d(),h(R,{key:v.value,options:n.value,style:{height:"100%",width:"100%"}},null,8,["options"])):C("",!0)]),_:1})]),_:1})}}},te=N(Q,[["__scopeId","data-v-d733ae3d"]]);export{te as default};
