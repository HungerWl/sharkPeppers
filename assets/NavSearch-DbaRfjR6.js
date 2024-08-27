import{a3 as ye,_ as ve,a4 as xe,e as D,f as we,a5 as Ie,a1 as Se,C as Ae,g as Le,r as K,o as B,h as V,j as R,w as F,i as T,M as be,m as U,a6 as ne,a as ke,G as Re,a7 as Ne,a8 as Ce,F as re,A as Oe,n as Te,a9 as ie,v as $e}from"./index-iGN2zHqi.js";function A(t){return Array.isArray?Array.isArray(t):de(t)==="[object Array]"}const Fe=1/0;function je(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Fe?"-0":e}function Pe(t){return t==null?"":je(t)}function S(t){return typeof t=="string"}function ue(t){return typeof t=="number"}function De(t){return t===!0||t===!1||Ke(t)&&de(t)=="[object Boolean]"}function fe(t){return typeof t=="object"}function Ke(t){return fe(t)&&t!==null}function v(t){return t!=null}function G(t){return!t.trim().length}function de(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Be="Incorrect 'index' type",Ve=t=>`Invalid value for key ${t}`,ze=t=>`Pattern length exceeds max of ${t}.`,We=t=>`Missing ${t} property in key`,He=t=>`Property 'weight' in key '${t}' must be a positive integer`,ce=Object.prototype.hasOwnProperty;class Ue{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let i=pe(n);this._keys.push(i),this._keyMap[i.id]=i,s+=i.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function pe(t){let e=null,s=null,n=null,i=1,r=null;if(S(t)||A(t))n=t,e=oe(t),s=Y(t);else{if(!ce.call(t,"name"))throw new Error(We("name"));const c=t.name;if(n=c,ce.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(He(c));e=oe(c),s=Y(c),r=t.getFn}return{path:e,id:s,weight:i,src:n,getFn:r}}function oe(t){return A(t)?t:t.split(".")}function Y(t){return A(t)?t.join("."):t}function Ge(t,e){let s=[],n=!1;const i=(r,c,o)=>{if(v(r))if(!c[o])s.push(r);else{let a=c[o];const l=r[a];if(!v(l))return;if(o===c.length-1&&(S(l)||ue(l)||De(l)))s.push(Pe(l));else if(A(l)){n=!0;for(let h=0,f=l.length;h<f;h+=1)i(l[h],c,o+1)}else c.length&&i(l,c,o+1)}};return i(t,S(e)?e.split("."):e,0),n?s:s[0]}const Ye={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Qe={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Xe={location:0,threshold:.6,distance:100},Je={useExtendedSearch:!1,getFn:Ge,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...Qe,...Ye,...Xe,...Je};const Ze=/[^ ]+/g;function qe(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(i){const r=i.match(Ze).length;if(s.has(r))return s.get(r);const c=1/Math.pow(r,.5*t),o=parseFloat(Math.round(c*n)/n);return s.set(r,o),o},clear(){s.clear()}}}class ee{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=qe(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,S(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();S(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!v(e)||G(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((i,r)=>{let c=i.getFn?i.getFn(e):this.getFn(e,i.path);if(v(c)){if(A(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(v(h))if(S(h)&&!G(h)){let f={v:h,i:l,n:this.norm.get(h)};o.push(f)}else A(h)&&h.forEach((f,p)=>{a.push({nestedArrIndex:p,value:f})})}n.$[r]=o}else if(S(c)&&!G(c)){let o={v:c,n:this.norm.get(c)};n.$[r]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function ge(t,e,{getFn:s=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const i=new ee({getFn:s,fieldNormWeight:n});return i.setKeys(t.map(pe)),i.setSources(e),i.create(),i}function et(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:n,records:i}=t,r=new ee({getFn:e,fieldNormWeight:s});return r.setKeys(n),r.setIndexRecords(i),r}function z(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:i=u.distance,ignoreLocation:r=u.ignoreLocation}={}){const c=e/t.length;if(r)return c;const o=Math.abs(n-s);return i?c+o/i:o?1:c}function tt(t=[],e=u.minMatchCharLength){let s=[],n=-1,i=-1,r=0;for(let c=t.length;r<c;r+=1){let o=t[r];o&&n===-1?n=r:!o&&n!==-1&&(i=r-1,i-n+1>=e&&s.push([n,i]),n=-1)}return t[r-1]&&r-n>=e&&s.push([n,r-1]),s}const N=32;function st(t,e,s,{location:n=u.location,distance:i=u.distance,threshold:r=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>N)throw new Error(ze(N));const h=e.length,f=t.length,p=Math.max(0,Math.min(n,f));let m=r,M=p;const d=o>1||a,g=d?Array(f):[];let _;for(;(_=t.indexOf(e,M))>-1;){let x=z(e,{currentLocation:_,expectedLocation:p,distance:i,ignoreLocation:l});if(m=Math.min(x,m),M=_+h,d){let L=0;for(;L<h;)g[_+L]=1,L+=1}}M=-1;let E=[],y=1,C=h+f;const w=1<<h-1;for(let x=0;x<h;x+=1){let L=0,b=C;for(;L<b;)z(e,{errors:x,currentLocation:p+b,expectedLocation:p,distance:i,ignoreLocation:l})<=m?L=b:C=b,b=Math.floor((C-L)/2+L);C=b;let te=Math.max(1,p-b+1),H=c?f:Math.min(p+b,f)+h,O=Array(H+2);O[H+1]=(1<<x)-1;for(let I=H;I>=te;I-=1){let P=I-1,se=s[t.charAt(P)];if(d&&(g[P]=+!!se),O[I]=(O[I+1]<<1|1)&se,x&&(O[I]|=(E[I+1]|E[I])<<1|1|E[I+1]),O[I]&w&&(y=z(e,{errors:x,currentLocation:P,expectedLocation:p,distance:i,ignoreLocation:l}),y<=m)){if(m=y,M=P,M<=p)break;te=Math.max(1,2*p-M)}}if(z(e,{errors:x+1,currentLocation:p,expectedLocation:p,distance:i,ignoreLocation:l})>m)break;E=O}const j={isMatch:M>=0,score:Math.max(.001,y)};if(d){const x=tt(g,o);x.length?a&&(j.indices=x):j.isMatch=!1}return j}function nt(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const i=t.charAt(s);e[i]=(e[i]||0)|1<<n-s-1}return e}class me{constructor(e,{location:s=u.location,threshold:n=u.threshold,distance:i=u.distance,includeMatches:r=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:i,includeMatches:r,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(p,m)=>{this.chunks.push({pattern:p,alphabet:nt(p),startIndex:m})},f=this.pattern.length;if(f>N){let p=0;const m=f%N,M=f-m;for(;p<M;)h(this.pattern.substr(p,N),p),p+=N;if(m){const d=f-N;h(this.pattern.substr(d),d)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let M={isMatch:!0,score:0};return n&&(M.indices=[[0,e.length-1]]),M}const{location:i,distance:r,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],f=0,p=!1;this.chunks.forEach(({pattern:M,alphabet:d,startIndex:g})=>{const{isMatch:_,score:E,indices:y}=st(e,M,d,{location:i+g,distance:r,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:n,ignoreLocation:l});_&&(p=!0),f+=E,_&&y&&(h=[...h,...y])});let m={isMatch:p,score:p?f/this.chunks.length:1};return p&&n&&(m.indices=h),m}}class k{constructor(e){this.pattern=e}static isMultiMatch(e){return ae(e,this.multiRegex)}static isSingleMatch(e){return ae(e,this.singleRegex)}search(){}}function ae(t,e){const s=t.match(e);return s?s[1]:null}class rt extends k{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class it extends k{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ct extends k{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class ot extends k{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class at extends k{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class lt extends k{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class _e extends k{constructor(e,{location:s=u.location,threshold:n=u.threshold,distance:i=u.distance,includeMatches:r=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new me(e,{location:s,threshold:n,distance:i,includeMatches:r,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Me extends k{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const i=[],r=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+r,i.push([n,s-1]);const c=!!i.length;return{isMatch:c,score:c?0:1,indices:i}}}const Q=[rt,Me,ct,ot,lt,at,it,_e],le=Q.length,ht=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ut="|";function ft(t,e={}){return t.split(ut).map(s=>{let n=s.trim().split(ht).filter(r=>r&&!!r.trim()),i=[];for(let r=0,c=n.length;r<c;r+=1){const o=n[r];let a=!1,l=-1;for(;!a&&++l<le;){const h=Q[l];let f=h.isMultiMatch(o);f&&(i.push(new h(f,e)),a=!0)}if(!a)for(l=-1;++l<le;){const h=Q[l];let f=h.isSingleMatch(o);if(f){i.push(new h(f,e));break}}}return i})}const dt=new Set([_e.type,Me.type]);class pt{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:i=u.minMatchCharLength,ignoreLocation:r=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:i,findAllMatches:c,ignoreLocation:r,location:o,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=ft(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let r=0,c=[],o=0;for(let a=0,l=s.length;a<l;a+=1){const h=s[a];c.length=0,r=0;for(let f=0,p=h.length;f<p;f+=1){const m=h[f],{isMatch:M,indices:d,score:g}=m.search(e);if(M){if(r+=1,o+=g,n){const _=m.constructor.type;dt.has(_)?c=[...c,...d]:c.push(d)}}else{o=0,r=0,c.length=0;break}}if(r){let f={isMatch:!0,score:o/r};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const X=[];function gt(...t){X.push(...t)}function J(t,e){for(let s=0,n=X.length;s<n;s+=1){let i=X[s];if(i.condition(t,e))return new i(t,e)}return new me(t,e)}const W={AND:"$and",OR:"$or"},Z={PATH:"$path",PATTERN:"$val"},q=t=>!!(t[W.AND]||t[W.OR]),mt=t=>!!t[Z.PATH],_t=t=>!A(t)&&fe(t)&&!q(t),he=t=>({[W.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Ee(t,e,{auto:s=!0}={}){const n=i=>{let r=Object.keys(i);const c=mt(i);if(!c&&r.length>1&&!q(i))return n(he(i));if(_t(i)){const a=c?i[Z.PATH]:r[0],l=c?i[Z.PATTERN]:i[a];if(!S(l))throw new Error(Ve(a));const h={keyId:Y(a),pattern:l};return s&&(h.searcher=J(l,e)),h}let o={children:[],operator:r[0]};return r.forEach(a=>{const l=i[a];A(l)&&l.forEach(h=>{o.children.push(n(h))})}),o};return q(t)||(t=he(t)),n(t)}function Mt(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:i,norm:r,score:c})=>{const o=i?i.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(e?1:r))}),s.score=n})}function Et(t,e){const s=t.matches;e.matches=[],v(s)&&s.forEach(n=>{if(!v(n.indices)||!n.indices.length)return;const{indices:i,value:r}=n;let c={indices:i,value:r};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),e.matches.push(c)})}function yt(t,e){e.score=t.score}function vt(t,e,{includeMatches:s=u.includeMatches,includeScore:n=u.includeScore}={}){const i=[];return s&&i.push(Et),n&&i.push(yt),t.map(r=>{const{idx:c}=r,o={item:e[c],refIndex:c};return i.length&&i.forEach(a=>{a(r,o)}),o})}class ${constructor(e,s={},n){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new Ue(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof ee))throw new Error(Be);this._myIndex=s||ge(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){v(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,i=this._docs.length;n<i;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,i-=1,s.push(r))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:r,sortFn:c,ignoreFieldNorm:o}=this.options;let a=S(e)?S(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Mt(a,{ignoreFieldNorm:o}),r&&a.sort(c),ue(s)&&s>-1&&(a=a.slice(0,s)),vt(a,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(e){const s=J(e,this.options),{records:n}=this._myIndex,i=[];return n.forEach(({v:r,i:c,n:o})=>{if(!v(r))return;const{isMatch:a,score:l,indices:h}=s.searchIn(r);a&&i.push({item:r,idx:c,matches:[{score:l,value:r,norm:o,indices:h}]})}),i}_searchLogical(e){const s=Ee(e,this.options),n=(o,a,l)=>{if(!o.children){const{keyId:f,searcher:p}=o,m=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:p});return m&&m.length?[{idx:l,item:a,matches:m}]:[]}const h=[];for(let f=0,p=o.children.length;f<p;f+=1){const m=o.children[f],M=n(m,a,l);if(M.length)h.push(...M);else if(o.operator===W.AND)return[]}return h},i=this._myIndex.records,r={},c=[];return i.forEach(({$:o,i:a})=>{if(v(o)){let l=n(s,o,a);l.length&&(r[a]||(r[a]={idx:a,item:o,matches:[]},c.push(r[a])),l.forEach(({matches:h})=>{r[a].matches.push(...h)}))}}),c}_searchObjectList(e){const s=J(e,this.options),{keys:n,records:i}=this._myIndex,r=[];return i.forEach(({$:c,i:o})=>{if(!v(c))return;let a=[];n.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:c[h],searcher:s}))}),a.length&&r.push({idx:o,item:c,matches:a})}),r}_findMatches({key:e,value:s,searcher:n}){if(!v(s))return[];let i=[];if(A(s))s.forEach(({v:r,i:c,n:o})=>{if(!v(r))return;const{isMatch:a,score:l,indices:h}=n.searchIn(r);a&&i.push({score:l,key:e,value:r,idx:c,norm:o,indices:h})});else{const{v:r,n:c}=s,{isMatch:o,score:a,indices:l}=n.searchIn(r);o&&i.push({score:a,key:e,value:r,norm:c,indices:l})}return i}}$.version="7.0.0";$.createIndex=ge;$.parseIndex=et;$.config=u;$.parseQuery=Ee;gt(pt);function xt(t,e=200){let s;return ye((n,i)=>({get(){return n(),t},set(r){clearTimeout(s),s=setTimeout(()=>{t=r,i()},e)}}))}const wt={class:"flex flex-col items-center"},It={class:"group"},St={id:"result_list",class:"result_list"},At={key:0,class:"empty"},Lt=["title","onClick"],bt=["innerHTML"],kt={__name:"NavSearch",props:{size:{type:String||Number}},setup(t){const e=xt(""),{menus:s}=xe(),n=D(""),i=D(!1),r=D([]),c=D();function o(){i.value=!0,ie(()=>{setTimeout(()=>c.value&&c.value.focus(),0)})}function a(d){if(i.value=!1,d.startsWith("http:")||d.startsWith("https:")){const g=d.split(",");g.length>1?window.open(g[0],g[1]):window.open(g[0])}else $e.push(d)}function l(){const d=document.getElementById("result_list");ie(()=>{const g=document.getElementsByClassName("activate")[0];g&&d.scrollTo({top:g.offsetTop-200,behavior:"smooth"})})}function h(d){if(!["ArrowUp","ArrowDown","Enter"].includes(d.code))return;const g=r.value.find(E=>E.item.path===n.value),_=r.value.indexOf(g);d.code==="ArrowUp"?(_<=0?n.value=r.value[r.value.length-1].item.path:n.value=r.value[_-1].item.path,l()):d.code==="ArrowDown"?(_===-1||_===r.value.length-1?n.value=r.value[0].item.path:n.value=r.value[_+1].item.path,l()):d.code==="Enter"&&_!==-1&&(a(g.item.path),i.value=!1)}let f;function p(d){d?r.value=f.search(d):(r.value=[],f._docs.forEach(g=>{r.value.push({item:g})}))}function m(d){f=new $(d,{shouldSort:!0,threshold:.4,minMatchCharLength:1,keys:[{name:"title",weight:.7},{name:"path",weight:.3}]})}we(()=>{r.value=[];const d=[],g=Ie(s,{id:"path",children:"children"});Object.keys(g).forEach(_=>{d.push({path:_,title:g[_].map(E=>Se(E.meta.title)).join(" > ")})}),d.forEach(_=>{r.value.push({item:_})}),m(d)}),Ae(()=>e.value,d=>{l(),p(d)});const M=Le(()=>d=>{if(e.value.trim()){const g=d.split("");e.value.trim().replace(/\s*/g,"").split("").forEach(E=>{for(let y=0;y<g.length;y++)g[y]===E&&(g[y]=`<span style="color: var(--el-color-warning); font-weight: bolder;">${E}</span>`);d=g.join("")})}return d});return(d,g)=>{const _=K("el-icon"),E=K("el-tooltip"),y=K("el-empty"),C=K("el-dialog");return B(),V(re,null,[R(E,{content:d.$t("tools.navSearch"),placement:"bottom"},{default:F(()=>[T("div",{class:"tools-item",onClick:be(o,["stop"])},[R(_,{size:t.size},{default:F(()=>[R(U(ne))]),_:1},8,["size"])])]),_:1},8,["content"]),R(C,{modelValue:i.value,"onUpdate:modelValue":g[1]||(g[1]=w=>i.value=w),title:"模糊查询",width:"50%","append-to-body":"",onKeydown:h},{footer:F(()=>[ke(" Enter 选择 ↑ ↓ 切换 Esc 退出 ")]),default:F(()=>[T("div",wt,[T("div",It,[R(_,{class:"icon"},{default:F(()=>[R(U(ne))]),_:1}),Re(T("input",{ref_key:"searchInputRef",ref:c,"onUpdate:modelValue":g[0]||(g[0]=w=>Ne(e)?e.value=w:null),class:"input",placeholder:"名称、路径"},null,512),[[Ce,U(e)]])]),T("ul",St,[r.value.length?(B(!0),V(re,{key:1},Oe(r.value,w=>(B(),V("li",{key:w.item.path,class:Te(["result_list_item",w.item.path===n.value?"activate":""]),title:w.item.path,onClick:j=>a(w.item.path)},[T("h3",{innerHTML:M.value(w.item.title)},null,8,bt)],10,Lt))),128)):(B(),V("li",At,[R(y,{description:"description"})]))])])]),_:1},8,["modelValue"])],64)}}},Ct=ve(kt,[["__scopeId","data-v-3323b4af"]]);export{Ct as default};