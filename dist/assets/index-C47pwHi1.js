import{y as k,E as m,_ as C,r as p,o as M,a as n,b as V,c as T,w as a,i as e,t as r,k as i,H as w,x as B,Q as z,R as A}from"./index-0MJCgTmw.js";async function D(d){try{const t=await k({},"/organizationManagement/getListTree",d);return t.status!==200&&m.error(t.msg||t.Msg),t.data}catch(t){m.error(t.message)}}const E={__name:"index",setup(d){const t=p({name:""}),u=p([]);function _(c){return c.map(o=>((!o.child||!Array.isArray(o.child))&&(o.child=[]),o.hasChild=o.child.length>0,o.child.length>0&&(o.child=_(o.child)),o))}async function h(){const o=await D({});u.value=_(o)}const b=p({children:"child"});return M(()=>{h()}),(c,o)=>{const y=n("el-input"),s=n("el-button"),f=n("el-card"),l=n("el-table-column"),g=n("el-table"),v=n("el-main");return V(),T(v,{id:"defaultButtonManagement"},{default:a(()=>[e(f,{style:{width:"100%"},class:"mb-2"},{default:a(()=>[e(y,{modelValue:t.value.search,"onUpdate:modelValue":o[0]||(o[0]=x=>t.value.search=x),style:{width:"240px"},placeholder:"请输入机构名称","prefix-icon":r(w),class:"mr-3",clearable:""},null,8,["modelValue","prefix-icon"]),e(s,{type:"primary",icon:r(w),onClick:h},{default:a(()=>[i(" 查询 ")]),_:1},8,["icon"]),e(s,{type:"primary",icon:r(B)},{default:a(()=>[i(" 新增 ")]),_:1},8,["icon"]),e(s,{type:"primary",icon:r(z)},{default:a(()=>[i(" 导入模板下载 ")]),_:1},8,["icon"]),e(s,{type:"primary",icon:r(A)},{default:a(()=>[i(" 导入 ")]),_:1},8,["icon"])]),_:1}),e(f,null,{default:a(()=>[e(g,{data:u.value,border:"",style:{width:"100%"},height:"480","row-key":"id","tree-props":b.value},{default:a(()=>[e(l,{prop:"name",label:"机构名称","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"forShort",label:"机构简称","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"phone",label:"联系电话","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"orgCode",label:"机构代码","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"status",label:"机构状态","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"email",label:"邮箱","min-width":"180","show-overflow-tooltip":""}),e(l,{prop:"sortOrder",label:"排序","min-width":"180","show-overflow-tooltip":""})]),_:1},8,["data","tree-props"])]),_:1})]),_:1})}}},N=C(E,[["__scopeId","data-v-fd9ee245"]]);export{N as default};
