import{I as k,E as m,_ as N,e as H,r as f,f as M,o as U,J as w,a as c,b as i,c as C,w as s,i as a,d as t,v as n,t as F,h as p,q as x,F as b,k as V,p as j,l as O}from"./index-C7Qv2pB2.js";async function P(o){try{const e=await k({},"/fhsms/getNoticeList",o);return e.status!==200&&m.error(e.message),e.data}catch(e){m.error(e.message)}}async function X(o){try{const e=await k({},"/share/getShareList",o);return e.status!==200&&m.error(e.message),e.data}catch(e){m.error(e.message)}}const g=o=>(j("data-v-a96b512f"),o=o(),O(),o),q={class:"flex items-center"},z={class:"flex flex-col text-[1rem] ml-4"},A={class:"mb-1"},J=g(()=>t("strong",{class:"tracking-widest"},"通知公告",-1)),R={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"},Z=["title"],G={class:"flex flex-col text-sm"},K={class:"truncate"},Q=g(()=>t("strong",{class:"tracking-widest"},"文件共享中心",-1)),W=g(()=>t("strong",{class:"tracking-widest"},"快捷导航",-1)),$={__name:"index",setup(o){const e=H(),I=f([{title:"借阅待办",count:0,type:"primary"},{title:"归档待办",count:0,type:"success"},{title:"鉴定待办",count:0,type:"warning"}]),h=f([]),L=f([]);function S(){return{p1:async()=>{const l=await P();h.value=l.varList.slice(0,12)},p2:async()=>{const l=await X();L.value=l.varList.slice(0,6)}}}const v=S();v.p1(),v.p2();const d=M({circleUrl:"https://unpkg.com/@vbenjs/static-source@0.1.5/source/avatar-v1.webp",formattedTime:""});return U(()=>{d.formattedTime=w().format("YYYY-MM-DD HH:mm:ss"),setInterval(()=>{d.formattedTime=w().format("YYYY-MM-DD HH:mm:ss")},1e3)}),(T,E)=>{const l=c("el-avatar"),Y=c("el-tag"),_=c("el-card"),y=c("el-col"),B=c("el-row"),D=c("el-main");return i(),C(D,null,{default:s(()=>[a(_,{shadow:"hover","body-class":"card-body"},{default:s(()=>{var r;return[t("div",q,[a(l,{size:50,src:d.circleUrl},null,8,["src"]),t("div",z,[t("strong",A,"你好,"+n((r=F(e).userInfo)==null?void 0:r.BZ)+" 开始您一天的工作吧！",1),t("span",null,n(d.formattedTime),1)])]),t("div",null,[(i(!0),p(b,null,x(I.value,u=>(i(),p("span",{key:u.title},[a(Y,{class:"mr-2",type:u.type,effect:"dark"},{default:s(()=>[V(n(u.title)+":"+n(u.count),1)]),_:2},1032,["type"])]))),128))])]}),_:1}),a(B,{gutter:20},{default:s(()=>[a(y,{span:16},{default:s(()=>[a(_,null,{header:s(()=>[J]),default:s(()=>[t("div",R,[(i(!0),p(b,null,x(h.value,r=>(i(),p("div",{key:r.ID,class:"flex flex-col p-4 rounded-lg border shadow-sm overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300"},[t("span",{class:"truncate text-lg font-semibold mb-2",title:r.CONTEXT},n(r.CONTEXT),9,Z),t("div",G,[t("span",K,n(r.PUBLISHER),1),t("span",null,n(r.PUBLISH_DATE),1)])]))),128))])]),_:1}),a(_,null,{header:s(()=>[Q]),_:1})]),_:1}),a(y,{span:8},{default:s(()=>[a(_,null,{header:s(()=>[W]),_:1})]),_:1})]),_:1})]),_:1})}}},te=N($,[["__scopeId","data-v-a96b512f"]]);export{te as default};
