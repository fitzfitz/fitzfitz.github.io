import{h,P as S}from"./chunks/preact.module.9df8e400.js";const v="modulepreload",y=function(e){return"/"+e},m={},k=function(l,r,i){if(!r||r.length===0)return l();const u=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=y(n),n in m)return;m[n]=!0;const s=n.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(!!i)for(let a=u.length-1;a>=0;a--){const f=u[a];if(f.href===n&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${o}`))return;const t=document.createElement("link");if(t.rel=s?"stylesheet":v,s||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),s)return new Promise((a,f)=>{t.addEventListener("load",a),t.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>l())},_=({value:e,name:l})=>e?h("astro-slot",{name:l,dangerouslySetInnerHTML:{__html:e}}):null;_.shouldComponentUpdate=()=>!1;var g=_;const d=new Map;var R=e=>async(l,r,{default:i,...u})=>{if(!e.hasAttribute("ssr"))return;for(const[s,o]of Object.entries(u))r[s]=h(g,{value:o,name:s});if(e.dataset.preactSignals){const{signal:s}=await k(()=>import("./chunks/signals.module.74bea0be.js").then(c=>c.s),["chunks/signals.module.74bea0be.js","chunks/preact.module.9df8e400.js"]);let o=JSON.parse(e.dataset.preactSignals);for(const[c,t]of Object.entries(o)){if(!d.has(t)){const a=s(r[c]);d.set(t,a)}r[c]=d.get(t)}}S(h(l,r,i!=null?h(g,{value:i}):i),e)};export{R as default};
