import{K as u,at as $,J as a,d as _,Z as b,b as v,c as I,n as w,p as P,i as C,e as x,k as f,a2 as D,r as E,O as c}from"./entry.XQuXSSUz.js";import j from"./ComponentPlaygroundData.dhbYqmsj.js";import"./TabsHeader.v9gSZrqp.js";import"./ComponentPlaygroundProps.eovGCJBm.js";import"./ProseH4.klrqXi4B.js";import"./ProseCodeInline.5fGBZK8b.js";import"./Badge.BCy-oAx-.js";import"./slot.ya662F0_.js";import"./node.V6KjywBy.js";import"./ProseP.5v7kWcde.js";import"./index.di4uugNw.js";import"./ComponentPlaygroundSlots.vue.xtfjK9EC.js";import"./ComponentPlaygroundTokens.vue.UqTVPgdV.js";async function z(e){const o=u(e);{const{data:n}=await $(`nuxt-component-meta${o?`-${o}`:""}`,()=>$fetch(`/api/component-meta${o?`/${o}`:""}`));return a(()=>n.value)}}const B=e=>(P("data-v-7645a058"),e=e(),C(),e),k=B(()=>x("div",{class:"ellipsis-item"},null,-1)),N=[k],O=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=a(()=>((t=s)=>t.top)()),n=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),i=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),h=a(()=>((t=s)=>`blur(${t.blur})`)()),y=a(()=>((t=s)=>{var p,m,d;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(m=t==null?void 0:t.colors)==null?void 0:m[1]} 50.88%, ${(d=t==null?void 0:t.colors)==null?void 0:d[2]} 98.48%)`})()),s=e,{$pinceau:S}=b(s,void 0,{_cCN_top:o,_eih_insetInlineStart:n,_IfB_insetInlineEnd:r,_SsE_zIndex:i,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:h,_yUj_background:y});return(t,p)=>(v(),I("div",{class:w(["ellipsis",[u(S)]])},N,2))}}),V=f(O,[["__scopeId","data-v-7645a058"]]),q=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=a(()=>D(e.component)),n=E({...e.props}),r=await z(e.component);return{as:o,formProps:n,componentData:r}},render(e){const o=Object.entries(this.$slots).reduce((n,[r,i])=>{if(r.startsWith("component-")){const l=r.replace("component-","");n[l]=i}return n},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(V,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),c(j,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":n=>e.formProps=n})])}}),T=f(q,[["__scopeId","data-v-af8cd031"]]);export{T as default};
