import{y as z,E as f,_ as S,r as u,o as E,a as n,b as L,c as T,w as r,i as e,t as c,k as h,H as w,x as B}from"./index-0MJCgTmw.js";async function I(d){try{const a=await z({},"/fhsms/getNoticeList",d);return a.status!==200&&f.error(a.msg||a.Msg),a.data}catch(a){f.error(a.message)}}const P={__name:"index",setup(d){const a=u({search:""}),m=u([]),o=u({total:0,pageSize:10,pageNum:1});async function p(){const s={search:a.value.search,showCount:o.value.pageSize,currentPage:o.value.pageNum},t=await I(s);m.value=t==null?void 0:t.varList,o.value.total=t==null?void 0:t.page.totalResult}p();function v(s){o.value.pageNum=s,p()}function b(s){o.value.pageNum=s,p()}return E(()=>{}),(s,t)=>{const N=n("el-input"),_=n("el-button"),g=n("el-card"),l=n("el-table-column"),x=n("el-table"),y=n("el-pagination"),C=n("el-main");return L(),T(C,{id:"defaultButtonManagement"},{default:r(()=>[e(g,{style:{width:"100%"},class:"mb-2"},{default:r(()=>[e(N,{modelValue:a.value.search,"onUpdate:modelValue":t[0]||(t[0]=i=>a.value.search=i),style:{width:"240px"},placeholder:"请输入摘要内容","prefix-icon":c(w),class:"mr-3",clearable:""},null,8,["modelValue","prefix-icon"]),e(_,{type:"primary",icon:c(w),onClick:p},{default:r(()=>[h(" 查询 ")]),_:1},8,["icon"]),e(_,{type:"primary",icon:c(B)},{default:r(()=>[h(" 新增 ")]),_:1},8,["icon"])]),_:1}),e(g,null,{default:r(()=>[e(x,{data:m.value,border:"",style:{width:"100%"},height:"480"},{default:r(()=>[e(l,{prop:"CATEGORY",label:"类型","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"TITLE",label:"标题","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"CONTEXT",label:"摘要内容","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"PUBLISHER",label:"发布者","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"PUBLISH",label:"发布情况","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"TYPEINDEX",label:"首页是否显示","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"PUBLISH_DATE",label:"创建时间","min-width":"180","show-overflow-tooltip":""})]),_:1},8,["data"]),e(y,{"current-page":o.value.pageNum,"onUpdate:currentPage":t[1]||(t[1]=i=>o.value.pageNum=i),"page-size":o.value.pageSize,"onUpdate:pageSize":t[2]||(t[2]=i=>o.value.pageSize=i),"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:o.value.total,class:"mt-2",onSizeChange:v,onCurrentChange:b},null,8,["current-page","page-size","total"])]),_:1})]),_:1})}}},V=S(P,[["__scopeId","data-v-fd0e0a61"]]);export{V as default};
