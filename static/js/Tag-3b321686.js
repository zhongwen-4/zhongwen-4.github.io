import{B as h}from"./Breadcrumbs-c6de0f1e.js";import{d as k,T,q as b,s as v,h as y,u as x,v as B,j as I,k as S,x as w,l as C,_ as L,e as s,o,c as a,g as r,f as c,t as m,w as $,F as D,m as N,y as u,z as V}from"./index_prod-296a9076.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const j=k({name:"Tag",components:{Breadcrumbs:h,TagList:T,TagItem:b,SvgIcon:v},setup(){const e=y(),{t:l}=x(),t=B();return I(async()=>{t.fetchAllTags(),e.setHeaderImage(C)}),S(()=>{e.resetHeaderImage()}),{tags:w(()=>t.isLoaded&&t.tags.length===0?null:t.tags),t:l}}}),z={class:"flex flex-col"},F={class:"post-header"},H={class:"post-title text-white uppercase"},q={class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block"},A={key:2,class:"flex flex-row justify-center items-center"};function E(e,l,t,g,M,U){const i=s("Breadcrumbs"),d=s("TagItem"),p=s("ob-skeleton"),_=s("SvgIcon"),f=s("TagList");return o(),a("div",z,[r("div",F,[c(i,{current:e.t("menu.tags")},null,8,["current"]),r("h1",H,m(e.t("menu.tags")),1)]),r("div",q,[c(f,null,{default:$(()=>[e.tags&&e.tags.length>0?(o(!0),a(D,{key:0},N(e.tags,n=>(o(),u(d,{key:n.slug,name:n.name,slug:n.slug,count:n.count,size:"xl"},null,8,["name","slug","count"]))),128)):e.tags?(o(),u(p,{key:1,tag:"li",count:10,height:"20px",width:"3rem"})):(o(),a("div",A,[c(_,{class:"stroke-ob-bright mr-2","icon-class":"warning"}),V(" "+m(e.t("settings.empty-tag")),1)]))]),_:1})])])}const O=L(j,[["render",E]]);export{O as default};
