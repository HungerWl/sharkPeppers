import{_ as j,u as L,r as d,a,b as _,c as h,w as t,i as e,d as c,k as l,h as q,q as E,F as O,p as R,l as T}from"./index-CQqg5hKF.js";import{u as A,g as G}from"./useDialog-CHmrQSDA.js";const H=p=>(R("data-v-a5bc06c7"),p=p(),T(),p),J=H(()=>c("div",{class:"title pb-2 text-[20px] font-bold border-b-[1px] border-[#ccc]"},[c("span",null,"档案目录")],-1)),K={class:"directory-btns mb-1"},Q={__name:"index",setup(p){L();const{showModal:g}=A();function w(){g(null,{title:"示例弹框",width:"600px",onClose:()=>{console.log("弹框已关闭，执行一些逻辑")}})}function U(){}const m=d([]);for(let n=0;n<10;n++)m.value.push({date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"});const u=d({currentPage:1,showCount:50,total:0});function v(){}function y(){}const b=d([]),k={children:"children",label:"name"};function x(n){console.log(n)}async function C(){const n=new FormData;n.append("type",1);const o=await G(n);b.value=o}C();const z=d([{name:"待入口"},{name:"已入口"},{name:"已退回"}]);function P(){window.open("/sharkPeppers/#/attachePreview")}return(n,o)=>{const s=a("el-button"),N=a("el-tree"),B=a("el-aside"),D=a("el-header"),F=a("el-tab-pane"),I=a("el-tabs"),r=a("el-table-column"),M=a("el-table"),S=a("el-pagination"),$=a("el-main"),f=a("el-container");return _(),h(f,{id:"collectionLibrary",class:"p-2"},{default:t(()=>[e(B,{width:"300px",class:"left p-2 bg-[#f2e6d8]"},{default:t(()=>[J,c("div",K,[e(s,{type:"primary",link:"",onClick:o[0]||(o[0]=i=>void 0)},{default:t(()=>[l(" 档案分类 ")]),_:1}),e(s,{type:"primary",link:"",onClick:o[1]||(o[1]=i=>void 0)},{default:t(()=>[l(" 权限下发 ")]),_:1}),e(s,{type:"primary",link:"",onClick:o[2]||(o[2]=i=>void 0)},{default:t(()=>[l(" 授权 ")]),_:1}),e(s,{type:"primary",link:"",onClick:o[3]||(o[3]=i=>void 0)},{default:t(()=>[l(" 目录设置 ")]),_:1})]),e(N,{style:{width:"100%",overflow:"auto","max-height":"80%"},data:b.value,props:k,onNodeClick:x},null,8,["data"])]),_:1}),e(f,{class:"right"},{default:t(()=>[e(D,null,{default:t(()=>[c("div",{class:"h-[60px] bg-[#91b7ba] flex items-center"},[l(" 功能键 "),c("button",{onClick:w}," 打开弹框 ")])]),_:1}),e($,{class:"right-main"},{default:t(()=>[e(I,{"tab-position":"top"},{default:t(()=>[(_(!0),q(O,null,E(z.value,(i,V)=>(_(),h(F,{key:V,label:i.name},null,8,["label"]))),128))]),_:1}),e(M,{data:m.value,style:{width:"100%",height:"85%"},border:""},{default:t(()=>[e(r,{type:"index",width:"50",label:"#"}),e(r,{prop:"date",label:"文件名称","min-width":"120","show-overflow-tooltip":""}),e(r,{prop:"date",label:"档号","min-width":"120","show-overflow-tooltip":""}),e(r,{prop:"date",label:"题名","min-width":"120","show-overflow-tooltip":""}),e(r,{fixed:"right",label:"操作",width:"300"},{default:t(()=>[e(s,{type:"primary",onClick:P},{default:t(()=>[l(" 附件预览 ")]),_:1}),e(s,{type:"primary"},{default:t(()=>[l(" 修改 ")]),_:1}),e(s,{type:"primary"},{default:t(()=>[l(" 删除 ")]),_:1})]),_:1})]),_:1},8,["data"]),e(S,{"current-page":u.value.currentPage,"page-sizes":[10,20,30,50],"page-size":u.value.showCount,layout:" ->, total, sizes, prev, pager, next, jumper",total:u.value.total,class:"p-2",onSizeChange:v,onCurrentChange:y},null,8,["current-page","page-size","total"])]),_:1})]),_:1})]),_:1})}}},Y=j(Q,[["__scopeId","data-v-a5bc06c7"]]);export{Y as default};
