import{m as F,E as f,y as Q,_ as X,r as o,o as Y,a as l,b as P,c as S,w as n,d as s,v as V,i as a,k as N,h as Z,z as R,A as T,B as k}from"./index-CVI66faI.js";import{l as L}from"./lottie-C9NxQPd1.js";async function q(i){try{const t=await F({},"bsc/moduleTreeList",i);return t.status!==200&&f.error(t.message),t.data}catch(t){f.error(t.message)}}async function ee(i){try{const t=await F({},"bscDirFile/list",i);return t.status!==200&&f.error(t.message),t.data}catch(t){f.error(t.message)}}async function te(i,t){try{return await Q({},"bsc/getFile",i,t)}catch(u){f.error(u.message)}}var se={VITE_APP_TITLE:"档案管理系统",VITE_APP_STORAGE_PREFIX:"WL_ADMIN_",VITE_APP_HOME_PATH:"/home",VITE_USE_MOCK:"false",VITE_APP_BASE_PATH:"/sharkPeppers/",VITE_OFFICE_PATH:"http://192.168.3.203:8091/",VITE_API_BASE_URL:"http://192.168.3.201:9009",VITE_API_TIMEOUT:"10000",BASE_URL:"/sharkPeppers/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const oe={class:"sign-button mr-2"},ae={class:"fnc-button mb-2"},le={class:"button-items"},ne={class:"tree-content border-t border-b border-gray-300 mb-4"},re=["title"],ce={key:0,class:"truncate"},ie={class:"w-full h-full flex"},de={class:"flex justify-center items-center flex-1 border border-gray-300 rounded-lg bg-white dark:bg-[#1e1f22] mr-2",style:{height:"100%"}},ue=["src"],_e={id:"Docs",class:"w-full h-full"},pe={class:"flex justify-center items-center flex-1 border border-gray-300 rounded-lg bg-white dark:bg-[#1e1f22]"},me={__name:"index",setup(i){const t=o(null),u=o(null),O=o([]),M={children:"child",label:"name",disabled:e=>e.moduleName},U=o([]);async function B(e){if(!e.id)return;const _=new FormData;_.append("bscDirId",e.id),U.value=await ee(_)}async function j(){const e=await q({});O.value=e}function H(e){return["xls","xlsx"].includes(e)?"cell":["docx","doc"].includes(e)?"word":e==="pdf"?"pdf":null}const A={document:["docx","doc","xls","xlsx","pdf"],image:["png","jpeg","jpg"],video:["mp4"]},$=e=>A.document.includes(e),K=e=>A.image.includes(e),z=e=>A.video.includes(e),h=o(null),v=o(!1),b=o(!1),g=o(!1),w=o(),C=o([]);async function W(e){const{format:_,name:p,path:E}=e,d=JSON.parse(se.VITE_DEV_PROXY)["/api"],m=JSON.parse(sessionStorage.getItem("WL_ADMIN_USER")).token,r=_;v.value=$(r),g.value=K(r),b.value=z(r),h.value&&(h.value.destroyEditor(),h.value=null);const I=`${d}bsc/getFile?AUTH_TOKEN=${m}&path=${E}`,x=`${d}bscDirFile/onlyOfficeEditCallback?AUTH_TOKEN=${m}&path=${E}`,D={document:{type:r,title:p,url:I},documentType:H(r),editorConfig:{callbackUrl:x,lang:"zh",mode:"view"}},c={AUTH_TOKEN:m,path:e.path};switch(!0){case v.value:h.value=new DocsAPI.DocEditor("Docs",D);break;case g.value:case b.value:const J=await te(c,"blob");w.value=URL.createObjectURL(J),C.value=[w.value]}}const y=o(!0);function G(){y.value=!y.value}return Y(()=>{j(),L.loadAnimation({container:t.value,renderer:"svg",loop:!0,autoplay:!0,path:new URL("/sharkPeppers/assets/empty-doc-tWQCuGQA.json",import.meta.url).href}),L.loadAnimation({container:u.value,renderer:"svg",loop:!0,autoplay:!0,path:new URL("/sharkPeppers/assets/empty-edit-CplaZ8ze.json",import.meta.url).href})}),(e,_)=>{const p=l("el-button"),E=l("el-tree"),d=l("el-table-column"),m=l("el-table"),r=l("el-aside"),I=l("el-image"),x=l("el-main"),D=l("el-container");return P(),S(D,{id:"archives",class:"p-3"},{default:n(()=>[s("div",oe,[s("div",{onClick:G},V(y.value?"关闭目录":"打开目录"),1)]),y.value?(P(),S(r,{key:0,width:"350px",class:"aside-content border border-gray-300 rounded-lg p-4 pt-2 bg-white dark:bg-[#1e1f22] mr-2"},{default:n(()=>[s("div",ae,[s("div",le,[a(p,{type:"primary",link:""},{default:n(()=>[N(" 新增编研 ")]),_:1}),a(p,{type:"primary",link:""},{default:n(()=>[N(" 批量导出 ")]),_:1}),a(p,{type:"primary",link:""},{default:n(()=>[N(" 编研模块 ")]),_:1})])]),s("div",ne,[a(E,{data:O.value,props:M,style:{width:"100%"},"show-checkbox":"",class:"p-2",onNodeClick:B},{default:n(({data:c})=>[s("div",{class:"truncate w-full",title:c.moduleName||c.name},[c.moduleName?(P(),Z("span",ce,[s("span",null,V(c.moduleName),1)])):R("",!0),s("span",null,V(c.name),1)],8,re)]),_:1},8,["data"])]),a(m,{data:U.value,class:"shadow-md",style:{width:"100%"},border:"",onRowClick:W},{default:n(()=>[a(d,{type:"index",width:"50",label:"#"}),a(d,{prop:"name",label:"文件名称","min-width":"120","show-overflow-tooltip":""}),a(d,{prop:"format",label:"格式","min-width":"120","show-overflow-tooltip":""})]),_:1},8,["data"])]),_:1})):R("",!0),a(x,{class:"main-conten"},{default:n(()=>[s("section",ie,[s("div",de,[T(s("div",{ref_key:"lottieView",ref:t,class:"w-full h-full"},null,512),[[k,!b.value&&!g.value&&!v.value]]),T(s("video",{class:"w-full",src:w.value,muted:"",controls:"",title:"双击放大"},null,8,ue),[[k,b.value]]),T(a(I,{style:{width:"100%"},src:w.value,fit:"fill","preview-src-list":C.value},null,8,["src","preview-src-list"]),[[k,g.value]]),T(s("div",_e,null,512),[[k,v.value]])]),s("div",pe,[s("div",{ref_key:"lottieEdit",ref:u,class:"w-[50%] h-[50%]"},null,512)])])]),_:1})]),_:1})}}},ve=X(me,[["__scopeId","data-v-cbab28bf"]]);export{ve as default};
