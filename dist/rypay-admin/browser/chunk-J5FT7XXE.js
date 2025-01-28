import{a as h}from"./chunk-FNYIDXIN.js";import{a as g,c as p}from"./chunk-CEYNZ4QU.js";import{$ as u,Eb as b,Fb as f,Ib as v,Ka as i,V as l,_ as m,ra as n,sa as o,ta as s,w as c,xb as C,ya as d,yb as E}from"./chunk-3F6BZBUY.js";var y=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["app-error"]],decls:3,vars:0,consts:[[1,"flex","h-screen","w-screen"],[1,"flex","flex-1","items-center","justify-center","bg-card","bg-cover"]],template:function(t,a){t&1&&(n(0,"div",0)(1,"div",1),s(2,"router-outlet"),o()())},dependencies:[b],encapsulation:2})}}return e})();var M=(()=>{class e{constructor(r){this.router=r}goToHomePage(){this.router.navigate(["/"])}static{this.\u0275fac=function(t){return new(t||e)(l(f))}}static{this.\u0275cmp=m({type:e,selectors:[["app-error404"]],decls:8,vars:0,consts:[[1,"flex","max-w-lg","flex-col","items-center","justify-center","gap-2","rounded-lg","bg-background","p-8","text-center","shadow-sm"],[1,"text-4xl","font-bold","text-foreground"],[1,"text-base","text-muted-foreground"],["impact","bold","tone","primary","shape","rounded","size","medium",3,"buttonClick"],["src","assets/illustrations/404.svg","svgClass","w-[300px] h-[300px] text-muted-foreground  "]],template:function(t,a){t&1&&(n(0,"div",0)(1,"h1",1),i(2,"Oops!"),o(),n(3,"p",2),i(4," We can't find that page. You can go back to the previous page or go to the homepage. "),o(),n(5,"app-button",3),d("buttonClick",function(){return a.goToHomePage()}),i(6," Homepage "),o(),s(7,"svg-icon",4),o())},dependencies:[p,g,h],encapsulation:2})}}return e})();var w=(()=>{class e{constructor(r){this.router=r}goToHomePage(){this.router.navigate(["/"])}static{this.\u0275fac=function(t){return new(t||e)(l(f))}}static{this.\u0275cmp=m({type:e,selectors:[["app-error500"]],decls:8,vars:0,consts:[[1,"flex","max-w-lg","flex-col","items-center","justify-center","gap-2","rounded-lg","bg-background","p-8","text-center","shadow-sm"],[1,"text-4xl","font-bold","text-foreground"],[1,"text-base","text-muted-foreground"],["impact","bold","tone","primary","shape","rounded","size","medium",3,"buttonClick"],["src","assets/illustrations/500.svg","svgClass","w-[300px] h-[300px] text-muted-foreground "]],template:function(t,a){t&1&&(n(0,"div",0)(1,"h1",1),i(2,"Oops! Server Error"),o(),n(3,"p",2),i(4," Please try again later. If the issue persists, feel free to contact us for assistance. "),o(),n(5,"app-button",3),d("buttonClick",function(){return a.goToHomePage()}),i(6," Homepage "),o(),s(7,"svg-icon",4),o())},dependencies:[p,g,h],encapsulation:2})}}return e})();var j=[{path:"",component:y,children:[{path:"",redirectTo:"404",pathMatch:"full"},{path:"404",component:M},{path:"500",component:w},{path:"**",redirectTo:"errors/404"}]}],S=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=c({imports:[v.forChild(j),v]})}}return e})();var K=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=u({type:e})}static{this.\u0275inj=c({providers:[C(E())],imports:[S,p.forRoot()]})}}return e})();export{K as ErrorModule};
