import{Aa as c,Ba as b,L as n,O as e,_ as r,ga as l,ib as p,ra as a,rb as d,sa as g,ya as u}from"./chunk-3F6BZBUY.js";function h(...t){return t.filter(Boolean).join(" ")}var m=["*"],_=(()=>{class t{constructor(){this.impact=e("none"),this.size=e("medium"),this.shape=e("rounded"),this.tone=e("primary"),this.shadow=e("none"),this.full=e(!1,{transform:i=>typeof i=="string"?i==="":i}),this.buttonClick=new n,this.classes="",this.baseClasses="font-semibold focus-visible:outline-none flex items-center justify-center focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",this.impactClasses={primary:{bold:"bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary",light:"bg-primary/20 text-primary hover:bg-primary/30 focus-visible:ring-primary",none:"bg-transparent text-primary hover:bg-primary/10 focus-visible:ring-primary"},danger:{bold:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive",light:"bg-destructive/20 text-destructive hover:bg-destructive/30 focus-visible:ring-destructive",none:"bg-transparent text-destructive hover:bg-destructive/10 focus-visible:ring-destructive"},success:{bold:"bg-green-500 text-green-950 hover:bg-green-600 focus-visible:ring-green-500",light:"bg-green-500/20 text-green-600 hover:bg-green-500/30 focus-visible:ring-green-500",none:"bg-transparent text-green-600 hover:bg-green-500/10 focus-visible:ring-green-500"},warning:{bold:"bg-yellow-500 text-yellow-950 hover:bg-yellow-600 focus-visible:ring-yellow-500",light:"bg-yellow-500/20 text-yellow-600 hover:bg-yellow-500/30 focus-visible:ring-yellow-500",none:"bg-transparent text-yellow-600 hover:bg-yellow-500/10 focus-visible:ring-yellow-500"},info:{bold:"bg-violet-500 text-white hover:bg-violet-600 focus-visible:ring-violet-500",light:"bg-violet-500/20 text-violet-600 hover:bg-violet-500/30 focus-visible:ring-violet-500",none:"bg-transparent text-violet-600 hover:bg-violet-500/10 focus-visible:ring-violet-500"},light:{bold:"bg-muted text-muted-foreground hover:bg-muted/90 focus-visible:ring-muted",light:"bg-muted/20 text-muted-foreground hover:bg-muted focus-visible:ring-muted",none:"bg-transparent text-muted-foreground hover:bg-muted focus-visible:ring-muted"}},this.sizeClasses={small:"px-3 py-1 text-xs",medium:"px-5 py-2 text-sm",large:"px-7 py-2.5 text-lg"},this.shapeClasses={square:"rounded-none",rounded:"rounded-lg",pill:"rounded-full"},this.shadowClasses={none:"",small:"shadow-sm",medium:"shadow-md",large:"shadow-lg"}}ngOnInit(){this.classes=h(this.baseClasses,this.impactClasses[this.tone()][this.impact()],this.sizeClasses[this.size()],this.shapeClasses[this.shape()],this.shadowClasses[this.shadow()],this.full()?"w-full":"")}onButtonClick(){this.buttonClick.emit()}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=r({type:t,selectors:[["app-button"]],inputs:{impact:[1,"impact"],size:[1,"size"],shape:[1,"shape"],tone:[1,"tone"],shadow:[1,"shadow"],full:[1,"full"]},outputs:{buttonClick:"buttonClick"},ngContentSelectors:m,decls:2,vars:1,consts:[[3,"click","ngClass"]],template:function(s,o){s&1&&(c(),a(0,"button",0),u("click",function(){return o.onButtonClick()}),b(1),g()),s&2&&l("ngClass",o.classes)},dependencies:[d,p],encapsulation:2})}}return t})();export{_ as a};
