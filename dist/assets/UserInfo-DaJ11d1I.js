import{_ as C,e as S,a2 as b,r as I,a as t,b as m,h as k,i as e,w as o,t as a,a9 as x,d as r,v as _,aa as B,k as N,a5 as U,c as V,a6 as E,ab as R,ac as y,L as A,p as D,l as M}from"./index-CQqg5hKF.js";const T="/sharkPeppers/assets/man-CMpYRfFR.svg",$=n=>(D("data-v-3c1aaf62"),n=n(),M(),n),F={class:"pl-5 pr-5 flex items-center"},L={class:"el-dropdown-link text-[16px]"},P=$(()=>r("img",{src:T,alt:""},null,-1)),Y={__name:"UserInfo",setup(n){const c=S(),{appConfig:f}=b(),p=I(!1);function g(s){s==="logout"?c.logout():s==="userinfo"&&A.push("/home")}return(s,u)=>{const w=t("el-avatar"),d=t("el-icon"),i=t("el-dropdown-item"),v=t("el-dropdown-menu"),h=t("el-dropdown");return m(),k("div",F,[e(h,{trigger:a(f).trigger,onVisibleChange:u[0]||(u[0]=l=>p.value=l),onCommand:g},{dropdown:o(()=>[e(v,null,{default:o(()=>[e(i,{command:"userinfo"},{default:o(()=>[e(d,null,{default:o(()=>[e(a(x))]),_:1}),r("span",null,_(s.$t("user.personalCenter")),1)]),_:1}),e(i,{divided:"",command:"logout"},{default:o(()=>[e(d,null,{default:o(()=>[e(a(B))]),_:1}),r("span",null,_(s.$t("user.logout")),1)]),_:1})]),_:1})]),default:o(()=>{var l;return[r("span",L,[e(w,{class:"mr-3"},{default:o(()=>[P]),_:1}),N(" "+_((l=a(c).userInfo)==null?void 0:l.USERNAME)+" ",1),e(d,{class:"el-icon--right"},{default:o(()=>[e(U,{name:"scale",mode:"out-in"},{default:o(()=>[(m(),V(E(p.value?a(R):a(y))))]),_:1})]),_:1})])]}),_:1},8,["trigger"])])}}},q=C(Y,[["__scopeId","data-v-3c1aaf62"]]);export{q as default};