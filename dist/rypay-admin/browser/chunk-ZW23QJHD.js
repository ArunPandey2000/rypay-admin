import{a as N}from"./chunk-NFCSKKTA.js";import{a as M}from"./chunk-3OWFQPHG.js";import{b as V,d as O,g as H,t as I}from"./chunk-537PRCH2.js";import{c as R}from"./chunk-CEYNZ4QU.js";import{E as T,F as d,G as p,Ka as l,L as f,La as k,Ma as F,Oa as C,Pa as D,Qa as S,U as c,_,da as h,ga as u,ia as y,kb as b,lb as P,ra as a,rb as E,sa as s,xa as w,ya as g,za as m}from"./chunk-3F6BZBUY.js";function Y(o,x){if(o&1){let t=w();a(0,"li")(1,"a",6),g("click",function(){let e=d(t).$implicit,i=m();return p(i.goToPage(e))}),l(2),s()()}if(o&2){let t=x.$implicit,n=m();c(),y("text-blue-600",n.currentPage===t)("bg-blue-50",n.currentPage===t)("hover:bg-blue-100",n.currentPage!==t)("text-gray-500",n.currentPage!==t),c(),F(" ",t," ")}}var U=(()=>{class o{constructor(){this.currentPage=1,this.totalPages=1,this.visiblePages=[],this.pageChange=new f}ngOnInit(){this.updateVisiblePages()}ngOnChanges(){this.updateVisiblePages()}updateVisiblePages(){let t=[1,2],n=[this.totalPages-1,this.totalPages],e=[];if(this.totalPages<=5)e=Array.from({length:this.totalPages},(i,r)=>r+1);else{e=[...t],this.currentPage>4&&e.push("...");let i=Math.max(3,this.currentPage-1),r=Math.min(this.totalPages-2,this.currentPage+1);for(let v=i;v<=r;v++)e.push(v);this.currentPage<this.totalPages-3&&e.push("..."),e=[...e,...n]}this.visiblePages=Array.from(new Set(e)).sort((i,r)=>typeof i=="number"&&typeof r=="number"?i-r:0)}get disablePrevious(){return this.currentPage===1}get disableNext(){return this.currentPage===this.totalPages}goToPrevious(){this.currentPage>1&&(this.currentPage--,this.updateVisiblePages(),this.pageChange.emit(this.currentPage))}goToNext(){this.currentPage<this.totalPages&&(this.currentPage++,this.updateVisiblePages(),this.pageChange.emit(this.currentPage))}goToPage(t){typeof t=="number"&&t>=1&&t<=this.totalPages&&(this.currentPage=t,this.updateVisiblePages(),this.pageChange.emit(this.currentPage))}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=_({type:o,selectors:[["app-pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},features:[T],decls:10,vars:5,consts:[[1,"sticky","bottom-0","z-10","bg-white","shadow-md"],[1,"overflow-x-auto"],[1,"inline-flex","text-sm"],[1,"flex","items-center","justify-center","px-3","h-8","ms-0","leading-tight","text-gray-500","bg-white","border","border-e-0","border-gray-300","rounded-s-lg","hover:bg-gray-100","hover:text-gray-700","dark:bg-gray-800","dark:border-gray-700","dark:text-gray-400","dark:hover:bg-gray-700","dark:hover:text-white",3,"click"],[4,"ngFor","ngForOf"],[1,"flex","items-center","justify-center","px-3","h-8","leading-tight","text-gray-500","bg-white","border","border-gray-300","rounded-e-lg","hover:bg-gray-100","hover:text-gray-700","dark:bg-gray-800","dark:border-gray-700","dark:text-gray-400","dark:hover:bg-gray-700","dark:hover:text-white",3,"click"],[1,"flex","items-center","justify-center","px-3","h-8","leading-tight","border","border-gray-300","dark:border-gray-700","dark:bg-gray-700","dark:text-white",3,"click"]],template:function(n,e){n&1&&(a(0,"nav",0)(1,"div",1)(2,"ul",2)(3,"li")(4,"a",3),g("click",function(){return e.goToPrevious()}),l(5,"Previous"),s()(),h(6,Y,3,9,"li",4),a(7,"li")(8,"a",5),g("click",function(){return e.goToNext()}),l(9,"Next"),s()()()()()),n&2&&(c(4),y("disabled",e.disablePrevious),c(2),u("ngForOf",e.visiblePages),c(2),y("disabled",e.disableNext))},dependencies:[E,b],encapsulation:2})}}return o})();function j(o,x){if(o&1){let t=w();a(0,"div",3)(1,"div",4)(2,"button",5),g("click",function(){d(t);let e=m();return p(e.selectOption("today"))}),l(3," Today "),s(),a(4,"button",5),g("click",function(){d(t);let e=m();return p(e.selectOption("yesterday"))}),l(5," Yesterday "),s(),a(6,"button",5),g("click",function(){d(t);let e=m();return p(e.selectOption("lastWeek"))}),l(7," Last Week "),s(),a(8,"button",5),g("click",function(){d(t);let e=m();return p(e.selectOption("lastMonth"))}),l(9," Last Month "),s(),a(10,"button",5),g("click",function(){d(t);let e=m();return p(e.selectOption("year"))}),l(11," Year "),s()(),a(12,"div",6)(13,"h3",7),l(14,"Custom Date Range"),s(),a(15,"div",8)(16,"label",9),l(17,"From:"),s(),a(18,"input",10),S("ngModelChange",function(e){d(t);let i=m();return D(i.customFrom,e)||(i.customFrom=e),p(e)}),s(),a(19,"label",9),l(20,"To:"),s(),a(21,"input",10),S("ngModelChange",function(e){d(t);let i=m();return D(i.customTo,e)||(i.customTo=e),p(e)}),s(),a(22,"button",11),g("click",function(){d(t);let e=m();return p(e.applyCustomRange())}),l(23," Apply "),s()()()()}if(o&2){let t=m();c(18),C("ngModel",t.customFrom),c(3),C("ngModel",t.customTo)}}var A=(()=>{class o{constructor(){this.showPicker=!1,this.customFrom=new Date,this.customTo=new Date,this.selectedRange={from:new Date,to:new Date},this.rangeSelected=new f}togglePicker(){this.showPicker=!this.showPicker}selectOption(t){let n=new Date;new Date(n).setDate(n.getDate()-1);let i=new Date,r=new Date;debugger;switch(t){case"today":i=new Date,i.setHours(0,0,0,0),r=new Date,r.setHours(23,59,59,999);break;case"yesterday":i=new Date,i.setDate(i.getDate()-1),i.setHours(0,0,0,0),r=new Date,r.setDate(r.getDate()-1),r.setHours(23,59,59,999);break;case"lastWeek":i=new Date,i.setDate(i.getDate()-7),i.setHours(0,0,0,0),r=new Date,r.setHours(23,59,59,999);break;case"lastMonth":i=new Date,i.setMonth(i.getMonth()-1),i.setDate(1),i.setHours(0,0,0,0),r=new Date,r.setMonth(r.getMonth()-1),r.setDate(new Date(r.getFullYear(),r.getMonth()+1,0).getDate()),r.setHours(23,59,59,999);break;case"year":i=new Date(n.getFullYear(),0,1),i.setHours(0,0,0,0),r=new Date(n.getFullYear(),11,31),r.setHours(23,59,59,999);break}this.selectedRange={from:i,to:r},console.log("Selected Range:",this.selectedRange),this.rangeSelected.emit(this.selectedRange),this.showPicker=!1}applyCustomRange(){this.customFrom&&this.customTo?(this.selectedRange={from:this.customFrom,to:this.customTo},console.log("Custom Range:",this.selectedRange),this.rangeSelected.emit(this.selectedRange),this.showPicker=!1):alert("Please select valid dates.")}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=_({type:o,selectors:[["app-date-range-picker"]],outputs:{rangeSelected:"rangeSelected"},decls:4,vars:1,consts:[["clickOutside","",1,"relative",3,"clickOutside"],[1,"px-4","py-2","bg-blue-600","text-white","rounded-md","hover:bg-blue-700",3,"click"],["class","absolute top-12 left-0 z-10 p-4 bg-white shadow-lg rounded-md max-w-lg flex",4,"ngIf"],[1,"absolute","top-12","left-0","z-10","p-4","bg-white","shadow-lg","rounded-md","max-w-lg","flex"],[1,"flex-none","w-48","space-y-2"],[1,"w-full","px-4","py-2","text-sm","bg-blue-500","text-white","rounded-md","hover:bg-blue-600",3,"click"],[1,"flex-grow","pl-4"],[1,"text-lg","font-semibold","mb-4"],[1,"space-y-2"],[1,"block","text-sm","font-medium","text-gray-700"],["type","date",1,"w-full","px-3","py-2","border","rounded-md","focus:ring","focus:ring-blue-300",3,"ngModelChange","ngModel"],[1,"w-full","mt-4","px-4","py-2","bg-green-500","text-white","rounded-md","hover:bg-green-600",3,"click"]],template:function(n,e){n&1&&(a(0,"div",0),g("clickOutside",function(){return e.showPicker=!1}),a(1,"button",1),g("click",function(){return e.togglePicker()}),l(2," Date Range "),s(),h(3,j,24,2,"div",2),s()),n&2&&(c(3),u("ngIf",e.showPicker))},dependencies:[I,V,O,H,P,M],encapsulation:2})}}return o})();function L(o,x){if(o&1&&(a(0,"h3",11),l(1),s()),o&2){let t=m();c(),k(t.title)}}function z(o,x){if(o&1&&(a(0,"option",12),l(1),s()),o&2){let t=x.$implicit;u("value",t.value),c(),k(t.label)}}var ue=(()=>{class o{constructor(){this.title="",this.types=[],this.headerFilter=new f,this.filter={search:"",from:new Date("01-01-1990"),to:new Date,sort:"DESC",type:""}}onSearchChange(t){this.filter.search=t,this.headerFilter.emit(this.filter)}onTypeChange(t){this.filter.type=t.target?.value,this.headerFilter.emit(this.filter)}onSortChange(t){this.filter.sort=t.target?.value,this.headerFilter.emit(this.filter)}selectRange(t){this.filter.to=t.to,this.filter.from=t.from,this.headerFilter.emit(this.filter)}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=_({type:o,selectors:[["app-header-filter"]],inputs:{title:"title",types:"types"},outputs:{headerFilter:"headerFilter"},decls:13,vars:5,consts:[[1,"flex","flex-wrap","items-center","justify-between","gap-2","py-3","px-5"],["class","text-sm font-medium text-muted-foreground",4,"ngIf"],[1,"flex","flex-wrap","gap-2"],[3,"search","searchQuery"],[1,"gap-2",3,"rangeSelected"],[1,"flex","flex-wrap","gap-2.5"],["name","status",1,"w-28","p-2","text-muted-foreground",3,"change","value"],[3,"value",4,"ngFor","ngForOf"],["name","order",1,"w-28","p-2","text-muted-foreground",3,"change","value"],["value","DESC"],["value","ASC"],[1,"text-sm","font-medium","text-muted-foreground"],[3,"value"]],template:function(n,e){n&1&&(a(0,"div",0),h(1,L,2,1,"h3",1),a(2,"div",2)(3,"app-search-bar",3),g("search",function(r){return e.onSearchChange(r)}),s(),a(4,"app-date-range-picker",4),g("rangeSelected",function(r){return e.selectRange(r)}),s(),a(5,"div",5)(6,"select",6),g("change",function(r){return e.onTypeChange(r)}),h(7,z,2,2,"option",7),s(),a(8,"select",8),g("change",function(r){return e.onSortChange(r)}),a(9,"option",9),l(10,"Newest"),s(),a(11,"option",10),l(12,"Oldest"),s()()()()()),n&2&&(c(),u("ngIf",e.title),c(2),u("searchQuery",e.filter.search),c(3),u("value",e.filter.type),c(),u("ngForOf",e.types),c(),u("value",e.filter.sort))},dependencies:[A,P,b,R,N],encapsulation:2})}}return o})();export{ue as a,U as b};
