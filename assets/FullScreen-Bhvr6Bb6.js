import{_ as h,r as E,g as p,ah as i,a,b as S,c as _,w as f,d as w,i as m,S as x}from"./index-CQqg5hKF.js";const d=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=(()=>{if(typeof document>"u")return!1;const e=d[0],l={};for(const n of d)if((n==null?void 0:n[1])in document){for(const[s,u]of n.entries())l[e[s]]=u;return l}return!1})(),F={change:r.fullscreenchange,error:r.fullscreenerror};let t={request(e=document.documentElement,l){return new Promise((n,c)=>{const s=()=>{t.off("change",s),n()};t.on("change",s);const u=e[r.requestFullscreen](l);u instanceof Promise&&u.then(s).catch(c)})},exit(){return new Promise((e,l)=>{if(!t.isFullscreen){e();return}const n=()=>{t.off("change",n),e()};t.on("change",n);const c=document[r.exitFullscreen]();c instanceof Promise&&c.then(n).catch(l)})},toggle(e,l){return t.isFullscreen?t.exit():t.request(e,l)},onchange(e){t.on("change",e)},onerror(e){t.on("error",e)},on(e,l){const n=F[e];n&&document.addEventListener(n,l,!1)},off(e,l){const n=F[e];n&&document.removeEventListener(n,l,!1)},raw:r};Object.defineProperties(t,{isFullscreen:{get:()=>!!document[r.fullscreenElement]},element:{enumerable:!0,get:()=>document[r.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[r.fullscreenEnabled]}});r||(t={isEnabled:!1});const o=t,k={__name:"FullScreen",props:{size:{type:String||Number}},setup(e){const l=E(o.isFullscreen),n=p(()=>l.value?i("tools.exitFullScreen"):i("tools.fullScreen"));function c(){o.isEnabled&&o.toggle()}return o.isEnabled&&o.on("change",()=>{l.value=o.isFullscreen}),(s,u)=>{const b=a("el-icon"),g=a("el-tooltip");return S(),_(g,{content:n.value,placement:"bottom"},{default:f(()=>[w("div",{class:"tools-item",onClick:c},[m(b,{size:e.size},{default:f(()=>[m(x,{name:l.value?"AntDesignFullscreenExitOutlined":"AntDesignFullscreenOutlined"},null,8,["name"])]),_:1},8,["size"])])]),_:1},8,["content"])}}},z=h(k,[["__scopeId","data-v-0dc59a51"]]);export{z as default};
