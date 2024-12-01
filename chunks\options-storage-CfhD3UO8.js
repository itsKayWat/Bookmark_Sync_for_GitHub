var Y=Object.defineProperty;var V=(n,e,t)=>e in n?Y(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var k=(n,e,t)=>(V(n,typeof e!="symbol"?e+"":e,t),t),H=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var E=(n,e,t)=>(H(n,e,"read from private field"),t?t.call(n):e.get(n)),R=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},J=(n,e,t,r)=>(H(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t);import{g as ee}from"./bookmarksync-BBedGguP.js";function te(n,e,t){var r=t||{},o=r.noTrailing,l=o===void 0?!1:o,p=r.noLeading,y=p===void 0?!1:p,s=r.debounceMode,a=s===void 0?void 0:s,f,u=!1,c=0;function w(){f&&clearTimeout(f)}function b(S){var v=S||{},_=v.upcomingOnly,x=_===void 0?!1:_;w(),u=!x}function A(){for(var S=arguments.length,v=new Array(S),_=0;_<S;_++)v[_]=arguments[_];var x=this,g=Date.now()-c;if(u)return;function m(){c=Date.now(),e.apply(x,v)}function i(){f=void 0}!y&&a&&!f&&m(),w(),a===void 0&&g>n?y?(c=Date.now(),l||(f=setTimeout(a?i:m,n))):m():l!==!0&&(f=setTimeout(a?i:m,a===void 0?n-g:n))}return A.cancel=b,A}function ne(n,e,t){var r=t||{},o=r.atBegin,l=o===void 0?!1:o;return te(n,e,{debounceMode:l!==!1})}function $(n){return new Proxy(n,{get(e,t){if(e[t])return typeof e[t]!="function"?new $(e[t]):(...r)=>new Promise((o,l)=>{e[t](...r,p=>{chrome.runtime.lastError?l(new Error(chrome.runtime.lastError.message)):o(p)})})}})}const q=globalThis.chrome&&new $(globalThis.chrome);function D(n){if(!n)return!1;try{const{pathname:e}=new URL(n,location.origin);return e===location.pathname}catch{return!1}}function z(n){var e,t,r;return(r=(t=(e=globalThis.chrome)==null?void 0:e.runtime)==null?void 0:t.getManifest)==null?void 0:r.call(t)}function K(n){let e;return()=>(e===void 0&&(e=n()),e)}const re=()=>ie()||oe(),ie=K(()=>{var e,t;const n=z();return n&&D(n.background_page??((e=n.background)==null?void 0:e.page))?!0:!!((t=n==null?void 0:n.background)!=null&&t.scripts&&D("/_generated_background_page.html"))}),oe=K(()=>{var n,e;return D((e=(n=z())==null?void 0:n.background)==null?void 0:e.service_worker)});var se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},L=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},ae=function(){function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),j=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},M=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},I=function(){function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};L(this,n),this.registeredTypes=e}return ae(n,[{key:"get",value:function(t){return typeof this.registeredTypes[t]<"u"?this.registeredTypes[t]:this.registeredTypes.default}},{key:"register",value:function(t,r){typeof this.registeredTypes[t]>"u"&&(this.registeredTypes[t]=r)}},{key:"registerDefault",value:function(t){this.register("default",t)}}]),n}(),N=function(n){j(e,n);function e(t){L(this,e);var r=M(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.registerDefault(function(o){return o.getAttribute("name")||""}),r}return e}(I),ue=function(n){j(e,n);function e(t){L(this,e);var r=M(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.registerDefault(function(o){return o.value}),r.register("checkbox",function(o){return o.getAttribute("value")!==null?o.checked?o.getAttribute("value"):null:o.checked}),r.register("select",function(o){return ce(o)}),r}return e}(I);function ce(n){var e,t,r,o=n.options,l=n.selectedIndex,p=n.type==="select-one",y=p?null:[],s=p?l+1:o.length;for(l<0?r=s:r=p?l:0;r<s;r++)if(t=o[r],(t.selected||r===l)&&!t.disabled&&!(t.parentNode.disabled&&t.parentNode.tagName.toLowerCase()==="optgroup")){if(e=t.value,p)return e;y.push(e)}return y}var le=function(n){j(e,n);function e(t){L(this,e);var r=M(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.registerDefault(function(){return!0}),r.register("radio",function(o){return o.checked}),r}return e}(I);function fe(n){var e=n.match(/[^[\]]+/g),t=void 0;return n.length>1&&n.indexOf("[]")===n.length-2&&(t=e.pop(),e.push([t])),e}function P(n){var e=void 0,t=n.tagName,r=t;return t.toLowerCase()==="input"&&(e=n.getAttribute("type"),e?r=e:r="text"),r.toLowerCase()}function Z(n,e){return Array.prototype.filter.call(n.querySelectorAll("input,select,textarea"),function(t){if(t.tagName.toLowerCase()==="input"&&(t.type==="submit"||t.type==="reset"))return!1;var r=P(t),o=e.keyExtractors.get(r),l=o(t),p=(e.include||[]).indexOf(l)!==-1,y=(e.exclude||[]).indexOf(l)!==-1,s=!1,a=!1;if(e.ignoredTypes){var f=!0,u=!1,c=void 0;try{for(var w=e.ignoredTypes[Symbol.iterator](),b;!(f=(b=w.next()).done);f=!0){var A=b.value;t.matches(A)&&(s=!0)}}catch(S){u=!0,c=S}finally{try{!f&&w.return&&w.return()}finally{if(u)throw c}}}return p?a=!1:e.include?a=!0:a=y||s,!a})}function C(n,e,t){if(!e)return n;var r=e.shift();return n[r]||(n[r]=Array.isArray(r)?[]:{}),e.length===0&&(Array.isArray(n[r])?t!==null&&n[r].push(t):n[r]=t),e.length>0&&C(n[r],e,t),n}function de(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t={};return e.keySplitter=e.keySplitter||fe,e.keyExtractors=new N(e.keyExtractors||{}),e.inputReaders=new ue(e.inputReaders||{}),e.keyAssignmentValidators=new le(e.keyAssignmentValidators||{}),Array.prototype.forEach.call(Z(n,e),function(r){var o=P(r),l=e.keyExtractors.get(o),p=l(r),y=e.inputReaders.get(o),s=y(r),a=e.keyAssignmentValidators.get(o);if(a(r,p,s)){var f=e.keySplitter(p);t=C(t,f,s)}}),t}var he=function(n){j(e,n);function e(t){L(this,e);var r=M(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.registerDefault(function(o,l){o.value=l}),r.register("checkbox",function(o,l){l===null?o.indeterminate=!0:o.checked=Array.isArray(l)?l.indexOf(o.value)!==-1:l}),r.register("radio",function(o,l){l!==void 0&&(o.checked=o.value===l.toString())}),r.register("select",ge),r}return e}(I);function pe(n){var e=[];return n!==null&&(Array.isArray(n)?e.push.apply(e,n):e.push(n)),e}function ge(n,e){for(var t,r,o=n.options,l=pe(e),p=o.length;p--;)r=o[p],l.indexOf(r.value)>-1&&(r.setAttribute("selected",!0),t=!0);t||(n.selectedIndex=-1)}function me(n,e){return n+"["+e+"]"}function G(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r={},o=t.keyJoiner||me;for(var l in n)if(n.hasOwnProperty(l)){var p=n[l],y={};e&&(l=o(e,l)),Array.isArray(p)?(y[l+"[]"]=p,y[l]=p):(typeof p>"u"?"undefined":se(p))==="object"?y=G(p,l,t):y[l]=p,Object.assign(r,y)}return r}function ye(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=G(e,null,t);t.keyExtractors=new N(t.keyExtractors||{}),t.inputWriters=new he(t.inputWriters||{}),Array.prototype.forEach.call(Z(n,t),function(o){var l=P(o),p=t.keyExtractors.get(l),y=p(o),s=t.inputWriters.get(l),a=r[y];s(o,a)})}var B={exports:{}};B.exports;(function(n){var e=function(){var t=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",l={};function p(s,a){if(!l[s]){l[s]={};for(var f=0;f<s.length;f++)l[s][s.charAt(f)]=f}return l[s][a]}var y={compressToBase64:function(s){if(s==null)return"";var a=y._compress(s,6,function(f){return r.charAt(f)});switch(a.length%4){default:case 0:return a;case 1:return a+"===";case 2:return a+"==";case 3:return a+"="}},decompressFromBase64:function(s){return s==null?"":s==""?null:y._decompress(s.length,32,function(a){return p(r,s.charAt(a))})},compressToUTF16:function(s){return s==null?"":y._compress(s,15,function(a){return t(a+32)})+" "},decompressFromUTF16:function(s){return s==null?"":s==""?null:y._decompress(s.length,16384,function(a){return s.charCodeAt(a)-32})},compressToUint8Array:function(s){for(var a=y.compress(s),f=new Uint8Array(a.length*2),u=0,c=a.length;u<c;u++){var w=a.charCodeAt(u);f[u*2]=w>>>8,f[u*2+1]=w%256}return f},decompressFromUint8Array:function(s){if(s==null)return y.decompress(s);for(var a=new Array(s.length/2),f=0,u=a.length;f<u;f++)a[f]=s[f*2]*256+s[f*2+1];var c=[];return a.forEach(function(w){c.push(t(w))}),y.decompress(c.join(""))},compressToEncodedURIComponent:function(s){return s==null?"":y._compress(s,6,function(a){return o.charAt(a)})},decompressFromEncodedURIComponent:function(s){return s==null?"":s==""?null:(s=s.replace(/ /g,"+"),y._decompress(s.length,32,function(a){return p(o,s.charAt(a))}))},compress:function(s){return y._compress(s,16,function(a){return t(a)})},_compress:function(s,a,f){if(s==null)return"";var u,c,w={},b={},A="",S="",v="",_=2,x=3,g=2,m=[],i=0,h=0,d;for(d=0;d<s.length;d+=1)if(A=s.charAt(d),Object.prototype.hasOwnProperty.call(w,A)||(w[A]=x++,b[A]=!0),S=v+A,Object.prototype.hasOwnProperty.call(w,S))v=S;else{if(Object.prototype.hasOwnProperty.call(b,v)){if(v.charCodeAt(0)<256){for(u=0;u<g;u++)i=i<<1,h==a-1?(h=0,m.push(f(i)),i=0):h++;for(c=v.charCodeAt(0),u=0;u<8;u++)i=i<<1|c&1,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=c>>1}else{for(c=1,u=0;u<g;u++)i=i<<1|c,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=0;for(c=v.charCodeAt(0),u=0;u<16;u++)i=i<<1|c&1,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=c>>1}_--,_==0&&(_=Math.pow(2,g),g++),delete b[v]}else for(c=w[v],u=0;u<g;u++)i=i<<1|c&1,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=c>>1;_--,_==0&&(_=Math.pow(2,g),g++),w[S]=x++,v=String(A)}if(v!==""){if(Object.prototype.hasOwnProperty.call(b,v)){if(v.charCodeAt(0)<256){for(u=0;u<g;u++)i=i<<1,h==a-1?(h=0,m.push(f(i)),i=0):h++;for(c=v.charCodeAt(0),u=0;u<8;u++)i=i<<1|c&1,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=c>>1}else{for(c=1,u=0;u<g;u++)i=i<<1|c,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=0;for(c=v.charCodeAt(0),u=0;u<16;u++)i=i<<1|c&1,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=c>>1}_--,_==0&&(_=Math.pow(2,g),g++),delete b[v]}else for(c=w[v],u=0;u<g;u++)i=i<<1|c&1,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=c>>1;_--,_==0&&(_=Math.pow(2,g),g++)}for(c=2,u=0;u<g;u++)i=i<<1|c&1,h==a-1?(h=0,m.push(f(i)),i=0):h++,c=c>>1;for(;;)if(i=i<<1,h==a-1){m.push(f(i));break}else h++;return m.join("")},decompress:function(s){return s==null?"":s==""?null:y._decompress(s.length,32768,function(a){return s.charCodeAt(a)})},_decompress:function(s,a,f){var u=[],c=4,w=4,b=3,A="",S=[],v,_,x,g,m,i,h,d={val:f(0),position:a,index:1};for(v=0;v<3;v+=1)u[v]=v;for(x=0,m=Math.pow(2,2),i=1;i!=m;)g=d.val&d.position,d.position>>=1,d.position==0&&(d.position=a,d.val=f(d.index++)),x|=(g>0?1:0)*i,i<<=1;switch(x){case 0:for(x=0,m=Math.pow(2,8),i=1;i!=m;)g=d.val&d.position,d.position>>=1,d.position==0&&(d.position=a,d.val=f(d.index++)),x|=(g>0?1:0)*i,i<<=1;h=t(x);break;case 1:for(x=0,m=Math.pow(2,16),i=1;i!=m;)g=d.val&d.position,d.position>>=1,d.position==0&&(d.position=a,d.val=f(d.index++)),x|=(g>0?1:0)*i,i<<=1;h=t(x);break;case 2:return""}for(u[3]=h,_=h,S.push(h);;){if(d.index>s)return"";for(x=0,m=Math.pow(2,b),i=1;i!=m;)g=d.val&d.position,d.position>>=1,d.position==0&&(d.position=a,d.val=f(d.index++)),x|=(g>0?1:0)*i,i<<=1;switch(h=x){case 0:for(x=0,m=Math.pow(2,8),i=1;i!=m;)g=d.val&d.position,d.position>>=1,d.position==0&&(d.position=a,d.val=f(d.index++)),x|=(g>0?1:0)*i,i<<=1;u[w++]=t(x),h=w-1,c--;break;case 1:for(x=0,m=Math.pow(2,16),i=1;i!=m;)g=d.val&d.position,d.position>>=1,d.position==0&&(d.position=a,d.val=f(d.index++)),x|=(g>0?1:0)*i,i<<=1;u[w++]=t(x),h=w-1,c--;break;case 2:return S.join("")}if(c==0&&(c=Math.pow(2,b),b++),u[h])A=u[h];else if(h===w)A=_+_.charAt(0);else return null;S.push(A),u[w++]=_+A.charAt(0),c--,_=A,c==0&&(c=Math.pow(2,b),b++)}}};return y}();n!=null?n.exports=e:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return e})})(B);var ve=B.exports;const _e=ee(ve);var O,F;class we{constructor(){R(this,O,void 0);R(this,F,new AbortController)}get signal(){return E(this,O)?E(this,F).signal:(J(this,O,setInterval(()=>{Ae()&&(E(this,F).abort(),clearInterval(E(this,O)))},200)),E(this,F).signal)}get promise(){return new Promise(e=>{this.addListener(e)})}addListener(e){if(this.signal.aborted){setTimeout(e,0);return}this.signal.addEventListener("abort",e)}}O=new WeakMap,F=new WeakMap;const xe=new we,Ae=()=>{var n;return!((n=chrome.runtime)!=null&&n.id)};new EventTarget;async function be(){}setTimeout(be,100);const Q={types:[{accept:{"application/json":".json"}}]},X=typeof showOpenFilePicker=="function";async function Se(){const n=document.createElement("input");n.type="file",n.accept=".json";const e=new Promise(o=>{n.addEventListener("change",o,{once:!0})});n.click();const r=(await e).target.files[0];if(!r)throw new Error("No file selected");return r.text()}async function ke(n,e){const t=`data:application/json;base64,${btoa(n)}`,r=document.createElement("a");r.download=e,r.href=t,r.click()}async function Te(){const[n]=await showOpenFilePicker(Q);return(await n.getFile()).text()}async function Ee(n,e){const r=await(await showSaveFilePicker({...Q,suggestedName:e})).createWritable();await r.write(n),await r.close()}const Oe=X?Te:Se,Fe=X?Ee:ke,{compressToEncodedURIComponent:Le,decompressFromEncodedURIComponent:je}=_e;function W(n){throw alert(n),new Error(n)}async function Me(){var e;console.log("shouldRunMigrations");const n=await((e=q.management)==null?void 0:e.getSelf());return(n==null?void 0:n.installType)==="development"?!0:new Promise(t=>{chrome.runtime.onInstalled.addListener(()=>{t(!0)}),setTimeout(t,500,!1)})}class U{constructor({defaults:e={},storageName:t="options",migrations:r=[],logging:o=!0,storageType:l="sync"}={}){k(this,"storageName");k(this,"storageType");k(this,"defaults");k(this,"_form");k(this,"_migrations");k(this,"importFromFile",async()=>{const e=await Oe();let t;try{t=JSON.parse(e)}catch{W("The file is not a valid JSON file.")}this._jsonIdentityHelper in t||W("The file selected is not a valid recognized options file."),delete t[this._jsonIdentityHelper],await this.set(t),this._form&&this._updateForm(this._form,t)});k(this,"exportToFile",async()=>{const e=chrome.runtime.getManifest(),t=JSON.stringify({[this._jsonIdentityHelper]:e.name,...await this.getAll()},null,"	");await Fe(t,e.name+" options.json")});k(this,"_handleFormInput",ne(300,async({target:e})=>{const t=e;t.name&&(await this.set(this._parseForm(t.form)),t.form.dispatchEvent(new CustomEvent("options-sync:form-synced",{bubbles:!0})))}));k(this,"_handleStorageChangeOnForm",(e,t)=>{t===this.storageType&&this.storageName in e&&(!document.hasFocus()||!this._form.contains(document.activeElement))&&this._updateForm(this._form,this._decode(e[this.storageName].newValue))});console.log("constructor"),this.storageName=t,this.defaults=e,this.storageType=l,o||(this._log=()=>{}),console.log(r),this._migrations=this._runMigrations(r)}get storage(){return q.storage[this.storageType]}async getAll(){return await this._migrations,this._getAll()}async setAll(e){return await this._migrations,this._setAll(e)}async set(e){return this.setAll({...await this.getAll(),...e})}async syncForm(e){var t,r;this._form=e instanceof HTMLFormElement?e:document.querySelector(e),this._form.addEventListener("input",this._handleFormInput),this._form.addEventListener("submit",this._handleFormSubmit),chrome.storage.onChanged.addListener(this._handleStorageChangeOnForm),this._updateForm(this._form,await this.getAll()),(t=this._form.querySelector(".js-export"))==null||t.addEventListener("click",this.exportToFile),(r=this._form.querySelector(".js-import"))==null||r.addEventListener("click",this.importFromFile),xe.addListener(()=>{location.reload()})}async stopSyncForm(){var e,t;this._form&&(this._form.removeEventListener("input",this._handleFormInput),this._form.removeEventListener("submit",this._handleFormSubmit),(e=this._form.querySelector(".js-export"))==null||e.addEventListener("click",this.exportToFile),(t=this._form.querySelector(".js-import"))==null||t.addEventListener("click",this.importFromFile),chrome.storage.onChanged.removeListener(this._handleStorageChangeOnForm),delete this._form)}get _jsonIdentityHelper(){return"__webextOptionsSync"}_log(e,...t){console[e](...t)}async _getAll(){const e=await this.storage.get(this.storageName);return this._decode(e[this.storageName])}async _setAll(e){this._log("log","Saving options",e),await this.storage.set({[this.storageName]:this._encode(e)})}_encode(e){const t={...e};for(const[r,o]of Object.entries(t))this.defaults[r]===o&&delete t[r];return this._log("log","Without the default values",t),Le(JSON.stringify(t))}_decode(e){let t=e;return typeof e=="string"&&(t=JSON.parse(je(e))),{...this.defaults,...t}}async _runMigrations(e){if(e.length===0||!re()||!await Me())return;const t=await this._getAll(),r=JSON.stringify(t);this._log("log","Found these stored options",{...t}),this._log("info","Will run",e.length,e.length===1?"migration":" migrations");for(const o of e)await o(t,this.defaults);r!==JSON.stringify(t)&&await this._setAll(t)}_handleFormSubmit(e){e.preventDefault()}_updateForm(e,t){const r=this._parseForm(e);for(const[l,p]of Object.entries(t))r[l]===p&&delete t[l];const o=Object.keys(t);o.length>0&&ye(e,t,{include:o})}_parseForm(e){const t=[];for(const r of e.querySelectorAll("[name]"))r.validity.valid&&!r.disabled&&t.push(r.name.replace(/\[.*]/,""));return de(e,{include:t})}}k(U,"migrations",{removeUnused(e,t){for(const r of Object.keys(e))r in t||delete e[r]}});const De=new U({defaults:{source1_useCustomHost:!1,source1_githubApiUrl:"",source1_pat:"",source1_owner:"",source1_repo:"",source1_sourcePath:"",source1_etag:"",source2_active:!1,source2_useCustomHost:!1,source2_githubApiUrl:"",source2_pat:"",source2_owner:"",source2_repo:"",source2_sourcePath:"",source2_etag:""},migrations:[(n,e)=>{T(n,"useCustomHost"),T(n,"githubApiUrl"),T(n,"pat"),T(n,"owner"),T(n,"repo"),T(n,"sourcePath"),T(n,"etag")},U.migrations.removeUnused],logging:!0,storageType:"local"});function T(n,e){if(!n[e])return;const t=`source1_${e}`;n[t]||(n[t]=n[e],delete n[e])}export{De as o};
