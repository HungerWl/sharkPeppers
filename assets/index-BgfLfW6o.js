import{l as L}from"./lottie-CANgixC9.js";import{m as C,E as _,_ as N,r as p,o as T,C as V,a as l,b as u,c as h,w as i,i as f,d,k as g,h as k,q as D,F,z as w,v as M,p as j,l as P}from"./index-C37co4E6.js";import{a as R,g as U,b as q,c as z,d as A}from"./echart-DLrdO7Zs.js";async function K(s){try{const e=await C({},"statisticsConfiguration/list",s);return e.status!==200&&_.error(e.message),e.data}catch(e){_.error(e.message)}}async function Q(s){try{const e=await C({},"statisticsConfiguration/executeStatistics",s);return e.status!==200&&_.error(e.message),e.data}catch(e){_.error(e.message)}}const $=s=>(j("data-v-d733ae3d"),s=s(),P(),s),G=$(()=>d("div",{class:"flex items-center border-b-2 border-[#fff] pb-2 mb-2"},[d("span",{class:"bg-[#203d8d] mr-2"}," "),d("div",{class:"text-[20px]"}," 基本统计 ")],-1)),H={class:"fnc-btn mb-1"},J={class:"fnc-tags"},W={__name:"index",setup(s){const e=p([]),y=p(null);let m=null;async function x(){const t=await K({});e.value=t}x();const n=p(null),v=p(0);function O(t){const o=Object.keys(t)[0],a=t[o].info,r=a.mode,c=t[o].data;switch(r){case"bar":return A(a,c);case"line":return z(a,c);case"pie":return q(a,c);case"radar":return U(a,c);default:return console.warn("Unsupported chart type:",r),{}}}async function E(t){const o=new FormData;o.append("id",t.id);const a=await Q(o),r=O(a);n.value=null,v.value++,n.value=r}return T(()=>{m=L.loadAnimation({container:y.value,renderer:"svg",loop:!0,autoplay:!0,path:new URL("/sharkPeppers/assets/empty-echart-DQ48OM1o.json",import.meta.url).href})}),V(n,t=>{t&&m&&m.destroy()}),(t,o)=>{const a=l("el-button"),r=l("el-tag"),c=l("el-aside"),I=l("el-main"),S=l("el-container");return u(),h(S,{id:"basicStatistics",class:"p-3"},{default:i(()=>[f(c,{width:"300px",class:"p-3 bg-[#e6e6e6]"},{default:i(()=>[G,d("div",H,[f(a,{type:"info",plain:""},{default:i(()=>[g(" 新增 ")]),_:1}),f(a,{type:"info",plain:""},{default:i(()=>[g(" 下载 ")]),_:1})]),d("div",J,[(u(!0),k(F,null,D(e.value,(b,B)=>(u(),h(r,{key:B,type:"info",class:"mr-1 mb-2",effect:"dark",onClick:X=>E(b)},{default:i(()=>[g(M(b.name),1)]),_:2},1032,["onClick"]))),128))])]),_:1}),f(I,null,{default:i(()=>[n.value?w("",!0):(u(),k("div",{key:0,ref_key:"lottieContainer",ref:y,class:"w-full h-full"},null,512)),n.value?(u(),h(R,{key:v.value,options:n.value,style:{height:"100%",width:"100%"}},null,8,["options"])):w("",!0)]),_:1})]),_:1})}}},te=N(W,[["__scopeId","data-v-d733ae3d"]]);export{te as default};
