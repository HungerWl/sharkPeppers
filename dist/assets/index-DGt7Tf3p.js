import{_ as h,u as v,e as x,f as k,r as c,o as V,s as S,g as B,a as p,b as E,h as I,d as n,i as d,w as i,n as z,j as C,k as U,p as A,l as D}from"./index-CQqg5hKF.js";const L="/sharkPeppers/assets/springBg-2EZEWVcZ.svg",u=s=>(A("data-v-0c04e114"),s=s(),D(),s),N=u(()=>n("div",{class:"login_logo"},null,-1)),P=u(()=>n("i",{class:"el-icon-user text-gray-500"},null,-1)),R=u(()=>n("i",{class:"el-icon-lock text-gray-500"},null,-1)),T={__name:"index",setup(s){const m=v(),g=x(),a=k({username:"",password:""}),_=c(""),b=c(""),r=c(!1);V(async()=>{try{const e=await S(),{background_img:o,icon_img:t}=e;_.value=o,b.value=t,r.value=!0}catch(e){console.error("Error fetching system info:",e)}});const f=B(()=>({background:`url(${L})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"multiply",backgroundAttachment:"fixed",backgroundOrigin:"border-box"}));async function y(){const e=new URLSearchParams;e.append("KEYDATA",`qq623987861${a.username},ad,${a.password}`),e.append("tm",new Date().getTime()),await g.login(e),m.replace("/home")}return(e,o)=>{const t=p("el-input"),w=p("el-button");return E(),I("div",{id:"app",class:"flex items-center justify-center min-h-screen bg-gray-100",style:C(f.value)},[n("div",{class:z(["w-full max-w-sm p-8 bg-white shadow-lg rounded-lg transition-opacity duration-500 ease-in-out z-10",{"opacity-100":r.value,"opacity-0":!r.value}])},[N,d(t,{modelValue:a.username,"onUpdate:modelValue":o[0]||(o[0]=l=>a.username=l),placeholder:"请输入账号",clearable:"",class:"mb-4 input-styled"},{prefix:i(()=>[P]),_:1},8,["modelValue"]),d(t,{modelValue:a.password,"onUpdate:modelValue":o[1]||(o[1]=l=>a.password=l),type:"password",clearable:"",placeholder:"请输入密码",class:"mb-4 input-styled"},{prefix:i(()=>[R]),_:1},8,["modelValue"]),d(w,{type:"primary",class:"w-full",onClick:y},{default:i(()=>[U(" 登录系统 ")]),_:1})],2)],4)}}},j=h(T,[["__scopeId","data-v-0c04e114"]]);export{j as default};
