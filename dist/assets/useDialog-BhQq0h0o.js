import{m as f,E as d,_ as y,r as m,b as u,c as h,h as v,d as o,v as g,T as b,j as _,U as M,z as k,V as w,W as x,X as c,Y as C}from"./index-CVI66faI.js";async function A(t){try{const e=await f({},"rolePermission/classTreeAuthorized",t);return e.status!==200&&d.error(e.Msg||e.msg),e.data}catch(e){d.error(e.message)}}const S={class:"modal-header"},E={class:"modal-body"},V={__name:"index",props:{title:{type:String,required:!0},width:{type:String,default:"500px"}},emits:["close"],setup(t,{emit:e}){const l=e,a=m(!0);function n(){a.value=!1,l("close")}return(r,s)=>(u(),h(w,{to:"body"},[a.value?(u(),v("div",{key:0,class:"modal-overlay",onClick:n},[o("div",{class:"modal-container",style:_({width:t.width}),onClick:s[0]||(s[0]=M(()=>{},["stop"]))},[o("header",S,[o("h3",null,g(t.title),1),o("button",{class:"close-button",onClick:n}," X ")]),o("section",E,[b(r.$slots,"default",{},void 0,!0)])],4)])):k("",!0)]))}},B=y(V,[["__scopeId","data-v-d3978772"]]);function T(){const t=m(!1);return{showModal:(l,{title:a="默认标题",width:n="500px",onClose:r}={})=>{const s=document.createElement("div");document.body.appendChild(s);const p={render(){return c("div",{style:{padding:"20px",textAlign:"center"}},"没有内容")}},i=x({render(){return c(B,{title:a,width:n,onClose:()=>{t.value=!1,i.unmount(),document.body.contains(s)&&document.body.removeChild(s),typeof r=="function"&&r()}},{default:()=>c(l||p)})}});t.value=!0,i.use(C),i.mount(s)}}}export{A as g,T as u};
