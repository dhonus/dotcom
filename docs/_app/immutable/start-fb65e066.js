import{S as rt,i as at,s as ot,a as it,e as j,c as st,b as F,g as Z,t as T,d as Q,f as D,h as C,j as lt,o as Oe,k as ct,l as ft,m as ut,n as Ee,p as z,q as dt,r as pt,u as ht,v as G,w as J,x as oe,y as K,z as M,A as de}from"./chunks/index-837ef9ab.js";import{S as tt,I as H,g as ze,f as He,a as ke,b as pe,s as X,i as We,c as he,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-1460ccb4.js";function wt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function yt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(r,e){const n=new URL(r);for(const o of vt){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return kt(n),n}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json";function Rt(r){return r.replace(/\/$/,"")+$t}function St(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete(Ne(r)),me(r,e));const re=new Map;function Lt(r,e){const n=Ne(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...d}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&re.set(n,{body:a,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,d))}return me(r,e)}function Ot(r,e,n){if(re.size>0){const o=Ne(r,n),a=re.get(o);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);re.delete(o)}}return me(e,n)}function Ne(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${St(e.body)}"]`),o}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Nt(r).map(o=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,p)=>{if(p%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(A=>parseInt(A,16))));const g=It.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,P,k,q]=g;return e.push({name:k,matcher:q,optional:!!y,rest:!!P,chained:P?p===1&&t[0]==="":!1}),P?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function Pt(r){return!/^\([^)]+\)$/.test(r)}function Nt(r){return r.slice(1).split("/").filter(Pt)}function Ut(r,e,n){const o={},a=r.slice(1);let d="";for(let t=0;t<e.length;t+=1){const c=e[t];let u=a[t];if(c.chained&&c.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)c.rest&&(o[c.name]="");else{if(c.matcher&&!n[c.matcher](u)){if(c.optional&&c.chained){let p=a.indexOf(void 0,t);if(p===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;p>=t;)a[p]=a[p-1],p-=1;continue}return}o[c.name]=u}}if(!d)return o}function $e(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([c,[u,p,g]])=>{const{pattern:y,params:P}=At(c),k={id:c,exec:q=>{const A=y.exec(q);if(A)return Ut(A,P,o)},errors:[1,...g||[]].map(q=>r[q]),layouts:[0,...p||[]].map(t),leaf:d(u)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function d(c){const u=c<0;return u&&(c=~c),[u,r[c]]}function t(c){return c===void 0?c:[a.has(c),r[c]]}}function Tt(r){let e,n,o;var a=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=G(a,d(r))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&4&&(u.data=t[2]),c&2&&(u.form=t[1]),a!==(a=t[0][0])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=G(a,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Dt(r){let e,n,o;var a=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Bt]},$$scope:{ctx:t}}}}return a&&(e=G(a,d(r))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&4&&(u.data=t[2]),c&1051&&(u.$$scope={dirty:c,ctx:t}),a!==(a=t[0][0])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=G(a,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Vt(r){let e,n,o;var a=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=G(a,d(r))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&8&&(u.data=t[3]),c&2&&(u.form=t[1]),a!==(a=t[0][1])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=G(a,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Ct(r){let e,n,o;var a=r[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return a&&(e=G(a,d(r))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&8&&(u.data=t[3]),c&1043&&(u.$$scope={dirty:c,ctx:t}),a!==(a=t[0][1])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=G(a,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function qt(r){let e,n,o;var a=r[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=G(a,d(r))),{c(){e&&J(e.$$.fragment),n=j()},l(t){e&&oe(e.$$.fragment,t),n=j()},m(t,c){e&&K(e,t,c),F(t,n,c),o=!0},p(t,c){const u={};if(c&16&&(u.data=t[4]),c&2&&(u.form=t[1]),a!==(a=t[0][2])){if(e){Z();const p=e;T(p.$$.fragment,1,0,()=>{M(p,1)}),Q()}a?(e=G(a,d(t)),J(e.$$.fragment),D(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&T(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Bt(r){let e,n,o,a;const d=[Ct,Vt],t=[];function c(u,p){return u[0][2]?0:1}return e=c(r),n=t[e]=d[e](r),{c(){n.c(),o=j()},l(u){n.l(u),o=j()},m(u,p){t[e].m(u,p),F(u,o,p),a=!0},p(u,p){let g=e;e=c(u),e===g?t[e].p(u,p):(Z(),T(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,p):(n=t[e]=d[e](u),n.c()),D(n,1),n.m(o.parentNode,o))},i(u){a||(D(n),a=!0)},o(u){T(n),a=!1},d(u){t[e].d(u),u&&C(o)}}}function Xe(r){let e,n=r[6]&&Ze(r);return{c(){e=ct("div"),n&&n.c(),this.h()},l(o){e=ft(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=ut(e);n&&n.l(a),a.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(o,a){F(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Ze(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Ze(r){let e;return{c(){e=dt(r[7])},l(n){e=pt(n,r[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ht(e,n[7])},d(n){n&&C(e)}}}function Ft(r){let e,n,o,a,d;const t=[Dt,Tt],c=[];function u(g,y){return g[0][1]?0:1}e=u(r),n=c[e]=t[e](r);let p=r[5]&&Xe(r);return{c(){n.c(),o=it(),p&&p.c(),a=j()},l(g){n.l(g),o=st(g),p&&p.l(g),a=j()},m(g,y){c[e].m(g,y),F(g,o,y),p&&p.m(g,y),F(g,a,y),d=!0},p(g,[y]){let P=e;e=u(g),e===P?c[e].p(g,y):(Z(),T(c[P],1,1,()=>{c[P]=null}),Q(),n=c[e],n?n.p(g,y):(n=c[e]=t[e](g),n.c()),D(n,1),n.m(o.parentNode,o)),g[5]?p?p.p(g,y):(p=Xe(g),p.c(),p.m(a.parentNode,a)):p&&(p.d(1),p=null)},i(g){d||(D(n),d=!0)},o(g){T(n),d=!1},d(g){c[e].d(g),g&&C(o),p&&p.d(g),g&&C(a)}}}function Gt(r,e,n){let{stores:o}=e,{page:a}=e,{components:d}=e,{form:t}=e,{data_0:c=null}=e,{data_1:u=null}=e,{data_2:p=null}=e;lt(o.page.notify);let g=!1,y=!1,P=null;return Oe(()=>{const k=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,P=document.title||"untitled page"))});return n(5,g=!0),k}),r.$$set=k=>{"stores"in k&&n(8,o=k.stores),"page"in k&&n(9,a=k.page),"components"in k&&n(0,d=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,c=k.data_0),"data_1"in k&&n(3,u=k.data_1),"data_2"in k&&n(4,p=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[d,t,c,u,p,g,y,P,o,a]}class Jt extends rt{constructor(e){super(),at(this,e,Gt,Ft,ot,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Kt="modulepreload",Mt=function(r,e){return new URL(r,e).href},Qe={},W=function(e,n,o){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Mt(d,o),d in Qe)return;Qe[d]=!0;const t=d.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!o)for(let g=a.length-1;g>=0;g--){const y=a[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${c}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Kt,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},zt={},_e=[()=>W(()=>import("./chunks/0-ce0b92c9.js"),["./chunks/0-ce0b92c9.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-f346bc7c.js","./chunks/index-837ef9ab.js","./chunks/stores-f65595c3.js","./chunks/singletons-1460ccb4.js","./assets/_layout-94d9fbd4.css"],import.meta.url),()=>W(()=>import("./chunks/1-98bf08e1.js"),["./chunks/1-98bf08e1.js","./components/error.svelte-8c525641.js","./chunks/index-837ef9ab.js","./chunks/stores-f65595c3.js","./chunks/singletons-1460ccb4.js"],import.meta.url),()=>W(()=>import("./chunks/2-01208579.js"),["./chunks/2-01208579.js","./components/pages/portfolio/_layout.svelte-9a2b12c0.js","./chunks/index-837ef9ab.js"],import.meta.url),()=>W(()=>import("./chunks/3-c506c8d9.js"),["./chunks/3-c506c8d9.js","./chunks/_page-36d1d2db.js","./components/pages/_page.svelte-ef9c7f82.js","./chunks/index-837ef9ab.js"],import.meta.url),()=>W(()=>import("./chunks/4-40a9da30.js"),["./chunks/4-40a9da30.js","./components/pages/about/_page.svelte-0419951e.js","./chunks/index-837ef9ab.js"],import.meta.url),()=>W(()=>import("./chunks/5-0b43a045.js"),["./chunks/5-0b43a045.js","./chunks/_page-3a58dbec.js","./components/pages/blog/_page.svelte-a7a5876c.js","./chunks/index-837ef9ab.js"],import.meta.url),()=>W(()=>import("./chunks/6-054d80f8.js"),["./chunks/6-054d80f8.js","./components/pages/blog/netbsd/_page.md-925b8a0a.js","./chunks/index-837ef9ab.js","./chunks/post-c53b2530.js"],import.meta.url),()=>W(()=>import("./chunks/7-14839165.js"),["./chunks/7-14839165.js","./components/pages/blog/new/_page.md-8716b609.js","./chunks/index-837ef9ab.js","./chunks/post-c53b2530.js"],import.meta.url),()=>W(()=>import("./chunks/8-fdea2e36.js"),["./chunks/8-fdea2e36.js","./components/pages/portfolio/_page.svelte-bb9c91e4.js","./chunks/index-837ef9ab.js"],import.meta.url)],Ht=[],Wt={"/":[3],"/about":[4],"/blog":[5],"/blog/netbsd":[6],"/blog/new":[7],"/portfolio":[8,[2]]},Yt={handleError:({error:r})=>{console.error(r)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,n){this.status=e,this.location=n}}async function Xt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Zt=-1,Qt=-2,xt=-3,en=-4,tn=-5,nn=-6;function rn(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,d=!1){if(a===Zt)return;if(a===xt)return NaN;if(a===en)return 1/0;if(a===tn)return-1/0;if(a===nn)return-0;if(d)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const u=new Set;n[a]=u;for(let y=1;y<t.length;y+=1)u.add(o(t[y]));break;case"Map":const p=new Map;n[a]=p;for(let y=1;y<t.length;y+=2)p.set(o(t[y]),o(t[y+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=o(t[y+1]);break}else{const c=new Array(t.length);n[a]=c;for(let u=0;u<t.length;u+=1){const p=t[u];p!==Qt&&(c[u]=o(p))}}else{const c={};n[a]=c;for(const u in t){const p=t[u];c[u]=o(p)}}return n[a]}return o(0)}const Re=jt(_e,Ht,Wt,zt),Ae=_e[0],Pe=_e[1];Ae();Pe();let ae={};try{ae=JSON.parse(sessionStorage[tt])}catch{}function Se(r){ae[r]=he()}function an({target:r,base:e}){var Je;const n=document.documentElement,o=[];let a=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,u=!1,p=!0,g=!1,y=!1,P=!1,k=!1,q,A=(Je=history.state)==null?void 0:Je[H];A||(A=Date.now(),history.replaceState({...history.state,[H]:A},"",location.href));const ge=ae[A];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let Y,Ue,ie;async function je(){ie=ie||Promise.resolve(),await ie,ie=null;const i=new URL(location.href),s=ce(i,!0);a=null,await De(s,i,[])}async function we(i,{noScroll:s=!1,replaceState:f=!1,keepFocus:l=!1,state:h={},invalidateAll:m=!1},_,v){return typeof i=="string"&&(i=new URL(i,ze(document))),fe({url:i,scroll:s?he():null,keepfocus:l,redirect_chain:_,details:{state:h,replaceState:f},nav_token:v,accepted:()=>{m&&(k=!0)},blocked:()=>{},type:"goto"})}async function Te(i){const s=ce(i,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);return a={id:s.id,promise:qe(s).then(f=>(f.type==="loaded"&&f.state.error&&(a=null),f))},a.promise}async function se(...i){const f=Re.filter(l=>i.some(h=>l.exec(h))).map(l=>Promise.all([...l.layouts,l.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(f)}async function De(i,s,f,l,h={},m){var v,b;Ue=h;let _=i&&await qe(i);if(_||(_=await Ge(s,{id:null},await ne(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(i==null?void 0:i.url)||s,Ue!==h)return!1;if(_.type==="redirect")if(f.length>10||f.includes(s.pathname))_=await le({status:500,error:await ne(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return we(new URL(_.location,s).href,{},[...f,s.pathname],h),!1;else((b=(v=_.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await X.updated.check()&&await ue(s);if(o.length=0,k=!1,g=!0,l&&l.details){const{details:w}=l,R=w.replaceState?0:1;w.state[H]=A+=R,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(a=null,u?(t=_.state,_.props.page&&(_.props.page.url=s),q.$set(_.props)):Ve(_),l){const{scroll:w,keepfocus:R}=l;if(R||Le(),await de(),p){const S=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await de();p=!0,_.props.page&&(Y=_.props.page),m&&m(),g=!1}function Ve(i){var l;t=i.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),Y=i.props.page,q=new Jt({target:r,props:{...i.props,stores:X},hydrate:!0});const f={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(h=>h(f)),u=!0}async function ee({url:i,params:s,branch:f,status:l,error:h,route:m,form:_}){const v=f.filter(Boolean);let b="never";for(const L of f)(L==null?void 0:L.slash)!==void 0&&(b=L.slash);i.pathname=wt(i.pathname,b),i.search=i.search;const w={type:"loaded",state:{url:i,params:s,branch:f,error:h,route:m},props:{components:v.map(L=>L.node.component)}};_!==void 0&&(w.props.form=_);let R={},S=!Y;for(let L=0;L<v.length;L+=1){const E=v[L];R={...R,...E.data},(S||!t.branch.some(U=>U===E))&&(w.props[`data_${L}`]=R,S=S||Object.keys(E.data??{}).length>0)}return S||(S=Object.keys(Y.data).length!==Object.keys(R).length),(!t.url||i.href!==t.url.href||t.error!==h||_!==void 0||S)&&(w.props.page={error:h,params:s,route:m,status:l,url:new URL(i),form:_??null,data:S?R:Y.data}),w}async function ye({loader:i,parent:s,url:f,params:l,route:h,server_data_node:m}){var w,R,S;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await i();if((w=b.universal)!=null&&w.load){let B=function(...E){for(const U of E){const{href:V}=new URL(U,f);v.dependencies.add(V)}};const L={route:{get id(){return v.route=!0,h.id}},params:new Proxy(l,{get:(E,U)=>(v.params.add(U),E[U])}),data:(m==null?void 0:m.data)??null,url:Et(f,()=>{v.url=!0}),async fetch(E,U){let V;E instanceof Request?(V=E.url,U={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...U}):V=E;const $=new URL(V,f).href;return B($),u?Ot(V,$,U):Lt(V,U)},setHeaders:()=>{},depends:B,parent(){return v.parent=!0,s()}};_=await b.universal.load.call(null,L)??null,_=_?await Xt(_):null}return{node:b,loader:i,server:m,universal:(R=b.universal)!=null&&R.load?{type:"data",data:_,uses:v}:null,data:_??(m==null?void 0:m.data)??null,slash:((S=b.universal)==null?void 0:S.trailingSlash)??(m==null?void 0:m.slash)}}function Ce(i,s,f,l,h){if(k)return!0;if(!l)return!1;if(l.parent&&i||l.route&&s||l.url&&f)return!0;for(const m of l.params)if(h[m]!==t.params[m])return!0;for(const m of l.dependencies)if(o.some(_=>_(new URL(m))))return!0;return!1}function be(i,s){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?s??null:null}async function qe({id:i,invalidating:s,url:f,params:l,route:h}){if((a==null?void 0:a.id)===i)return a.promise;const{errors:m,layouts:_,leaf:v}=h,b=[..._,v];m.forEach($=>$==null?void 0:$().catch(()=>{})),b.forEach($=>$==null?void 0:$[1]().catch(()=>{}));let w=null;const R=t.url?i!==t.url.pathname+t.url.search:!1,S=t.route?i!==t.route.id:!1,B=b.reduce(($,I,N)=>{var te;const O=t.branch[N],x=!!(I!=null&&I[0])&&((O==null?void 0:O.loader)!==I[1]||Ce($.some(Boolean),S,R,(te=O.server)==null?void 0:te.uses,l));return $.push(x),$},[]);if(B.some(Boolean)){try{w=await et(f,B)}catch($){return le({status:500,error:await ne($,{url:f,params:l,route:{id:h.id}}),url:f,route:h})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let E=!1;const U=b.map(async($,I)=>{var te;if(!$)return;const N=t.branch[I],O=L==null?void 0:L[I];if((!O||O.type==="skip")&&$[1]===(N==null?void 0:N.loader)&&!Ce(E,S,R,(te=N.universal)==null?void 0:te.uses,l))return N;if(E=!0,(O==null?void 0:O.type)==="error")throw O;return ye({loader:$[1],url:f,params:l,route:h,parent:async()=>{var Me;const Ke={};for(let ve=0;ve<I;ve+=1)Object.assign(Ke,(Me=await U[ve])==null?void 0:Me.data);return Ke},server_data_node:be(O===void 0&&$[0]?{type:"skip"}:O??null,N==null?void 0:N.server)})});for(const $ of U)$.catch(()=>{});const V=[];for(let $=0;$<b.length;$+=1)if(b[$])try{V.push(await U[$])}catch(I){if(I instanceof xe)return{type:"redirect",location:I.location};let N=500,O;L!=null&&L.includes(I)?(N=I.status??N,O=I.error):I instanceof Ie?(N=I.status,O=I.body):O=await ne(I,{params:l,url:f,route:{id:h.id}});const x=await Be($,V,m);return x?await ee({url:f,params:l,branch:V.slice(0,x.idx).concat(x.node),status:N,error:O,route:h}):await Ge(f,{id:h.id},O,N)}else V.push(void 0);return await ee({url:f,params:l,branch:V,status:200,error:null,route:h,form:s?void 0:null})}async function Be(i,s,f){for(;i--;)if(f[i]){let l=i;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await f[i](),loader:f[i],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:i,error:s,url:f,route:l}){const h={},m=await Ae();let _=null;if(m.server)try{const w=await et(f,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;_=w.nodes[0]??null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||c)&&await ue(f)}const v=await ye({loader:Ae,url:f,params:h,route:l,parent:()=>Promise.resolve({}),server_data_node:be(_)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await ee({url:f,params:h,branch:[v,b],status:i,error:s,route:null})}function ce(i,s){if(We(i,e))return;const f=yt(i.pathname.slice(e.length)||"/");for(const l of Re){const h=l.exec(f);if(h)return{id:i.pathname+i.search,invalidating:s,route:l,params:bt(h),url:i}}}function Fe({url:i,type:s,intent:f,delta:l}){var v,b;let h=!1;const m={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((b=f==null?void 0:f.route)==null?void 0:b.id)??null},url:i},willUnload:!f,type:s};l!==void 0&&(m.delta=l);const _={...m,cancel:()=>{h=!0}};return y||d.before_navigate.forEach(w=>w(_)),h?null:m}async function fe({url:i,scroll:s,keepfocus:f,redirect_chain:l,details:h,type:m,delta:_,nav_token:v,accepted:b,blocked:w}){const R=ce(i,!1),S=Fe({url:i,type:m,delta:_,intent:R});if(!S){w();return}Se(A),b(),y=!0,u&&X.navigating.set(S),await De(R,i,l,{scroll:s,keepfocus:f,details:h},v,()=>{y=!1,d.after_navigate.forEach(B=>B(S)),X.navigating.set(null)})}async function Ge(i,s,f,l){return i.origin===location.origin&&i.pathname===location.pathname&&!c?await le({status:l,error:f,url:i,route:s}):await ue(i)}function ue(i){return location.href=i.href,new Promise(()=>{})}function nt(){let i;n.addEventListener("mousemove",m=>{const _=m.target;clearTimeout(i),i=setTimeout(()=>{l(_,2)},20)});function s(m){l(m.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const f=new IntersectionObserver(m=>{for(const _ of m)_.isIntersecting&&(se(new URL(_.target.href).pathname),f.unobserve(_.target))},{threshold:0});function l(m,_){const v=He(m,n);if(!v)return;const{url:b,external:w}=ke(v,e);if(w)return;const R=pe(v);R.reload||(_<=R.preload_data?Te(b):_<=R.preload_code&&se(b.pathname))}function h(){f.disconnect();for(const m of n.querySelectorAll("a")){const{url:_,external:v}=ke(m,e);if(v)continue;const b=pe(m);b.reload||(b.preload_code===Ye.viewport&&f.observe(m),b.preload_code===Ye.eager&&se(_.pathname))}}d.after_navigate.push(h),h()}return{after_navigate:i=>{Oe(()=>(d.after_navigate.push(i),()=>{const s=d.after_navigate.indexOf(i);d.after_navigate.splice(s,1)}))},before_navigate:i=>{Oe(()=>(d.before_navigate.push(i),()=>{const s=d.before_navigate.indexOf(i);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!u)&&(p=!1)},goto:(i,s={})=>we(i,s,[]),invalidate:i=>{if(typeof i=="function")o.push(i);else{const{href:s}=new URL(i,location.href);o.push(f=>f.href===s)}return je()},invalidateAll:()=>(k=!0,je()),preload_data:async i=>{const s=new URL(i,ze(document));await Te(s)},preload_code:se,apply_action:async i=>{if(i.type==="error"){const s=new URL(location.href),{branch:f,route:l}=t;if(!l)return;const h=await Be(t.branch.length,f,l.errors);if(h){const m=await ee({url:s,params:t.params,branch:f.slice(0,h.idx).concat(h.node),status:i.status??500,error:i.error,route:l});t=m.state,q.$set(m.props),de().then(Le)}}else if(i.type==="redirect")we(i.location,{invalidateAll:!0},[]);else{const s={form:i.data,page:{...Y,form:i.data,status:i.status}};q.$set(s),i.type==="success"&&de().then(Le)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let f=!1;if(!y){const h={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};d.before_navigate.forEach(m=>m(h))}f?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(A);try{sessionStorage[tt]=JSON.stringify(ae)}catch{}}}),(i=navigator.connection)!=null&&i.saveData||nt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const f=He(s.composedPath()[0],n);if(!f)return;const{url:l,external:h,has:m}=ke(f,e),_=pe(f);if(!l||!(f instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||m.download)return;if(h||_.reload){Fe({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){P=!0,Se(A),t.url=l,X.page.set({...Y,url:l}),X.page.notify();return}fe({url:l,scroll:_.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{var b;if(s.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||f.method)!=="get")return;const m=new URL(((b=s.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||f.action);if(We(m,e))return;const{noscroll:_,reload:v}=pe(s.target);v||(s.preventDefault(),s.stopPropagation(),m.search=new URLSearchParams(new FormData(s.target)).toString(),fe({url:m,scroll:_?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",s=>{var f;if((f=s.state)!=null&&f[H]){if(s.state[H]===A)return;const l=s.state[H]-A;fe({url:new URL(location.href),scroll:ae[s.state[H]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=s.state[H]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{P&&(P=!1,history.replaceState({...history.state,[H]:++A},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&X.navigating.set(null)})},_hydrate:async({status:i=200,error:s,node_ids:f,params:l,route:h,data:m,form:_})=>{c=!0;const v=new URL(location.href);({params:l={},route:h={id:null}}=ce(v,!1)||{});let b;try{const w=f.map(async(R,S)=>{const B=m[S];return ye({loader:_e[R],url:v,params:l,route:h,parent:async()=>{const L={};for(let E=0;E<S;E+=1)Object.assign(L,(await w[E]).data);return L},server_data_node:be(B)})});b=await ee({url:v,params:l,branch:await Promise.all(w),status:i,error:s,form:_,route:Re.find(({id:R})=>R===h.id)??null})}catch(w){if(w instanceof xe){await ue(new URL(w.location,location.href));return}b=await le({status:w instanceof Ie?w.status:500,error:await ne(w,{url:v,params:l,route:h}),url:v,route:h})}Ve(b)}}}async function et(r,e){var d;const n=new URL(r);n.pathname=Rt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await me(n.href),a=await o.json();if(!o.ok)throw new Error(a);return(d=a.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=rn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function ne(r,e){return r instanceof Ie?r.body:Yt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function ln({env:r,hydrate:e,paths:n,target:o,version:a}){mt(n),gt(a);const d=an({target:o,base:n.base});_t({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{ln as start};
