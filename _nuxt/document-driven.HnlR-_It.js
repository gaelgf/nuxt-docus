import h from"./DocumentDrivenEmpty.bXx23CKO.js";import L from"./ContentRenderer.M8iYGh0L.js";import b from"./DocumentDrivenNotFound.LpeRJitM.js";import{j as g,d as p,H as k,P as R,s as x,I as C,J as S,K as u,L as c,r as j,M as B,N,O as m,T,Q as A,R as O,S as w,U as D,V as E,l as H,W as $,X as q,b as f,c as I,g as y,w as _,Y as v}from"./entry.XQuXSSUz.js";import"./ContentRendererMarkdown.vue.tS5pBcr9.js";import"./ButtonLink.HrjSXXZX.js";import"./slot.ya662F0_.js";import"./node.V6KjywBy.js";const M=p({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,n){const t=await c[e.name]().then(o=>o.default||o);return()=>m(t,e.layoutProps,n.slots)}}),V=p({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,n){const t=g(),o=k(R),s=o===x()?C():o,r=S(()=>{let a=u(e.name)??s.meta.layout??"default";return a&&!(a in c)&&e.fallback&&(a=u(e.fallback)),a}),l=j();n.expose({layoutRef:l});const d=t.deferHydration();return()=>{const a=r.value&&r.value in c,i=s.meta.layoutTransition??B;return N(T,a&&i,{default:()=>m(w,{suspensible:!0,onResolve:()=>{O(d)}},{default:()=>m(F,{layoutProps:A(n.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!e.name,hasTransition:!!i},n.slots)})}).default()}}}),F=p({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,n){const t=e.name;return e.shouldProvide&&D(E,{isCurrent:o=>t===(o.meta.layout??"default")}),()=>{var o,s;return!t||typeof t=="string"&&!(t in c)?(s=(o=n.slots).default)==null?void 0:s.call(o):m(M,{key:t,layoutProps:e.layoutProps,name:t},n.slots)}}}),J={class:"document-driven-page"},Z=p({__name:"document-driven",setup(e){const{contentHead:n}=H().public.content,{page:t,layout:o}=$();return t.value,n&&q(t),(s,r)=>{const l=h,d=L,a=b,i=V;return f(),I("div",J,[y(i,{name:u(o)||"default"},{default:_(()=>[u(t)?(f(),v(d,{key:u(t)._id,value:u(t)},{empty:_(({value:P})=>[y(l,{value:P},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Z as default};
