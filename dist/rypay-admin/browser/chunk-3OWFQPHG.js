import{L as r,P as u,V as c,aa as o,hb as m,m as s,n}from"./chunk-3F6BZBUY.js";var O=(()=>{class i{constructor(t,e){this.element=t,this.document=e,this.clickOutside=new r}ngAfterViewInit(){this.documentClickSubscription=s(this.document,"click").pipe(n(t=>!this.isInside(t.target))).subscribe(()=>{this.clickOutside.emit()})}ngOnDestroy(){this.documentClickSubscription?.unsubscribe()}isInside(t){return t===this.element.nativeElement||this.element.nativeElement.contains(t)}static{this.\u0275fac=function(e){return new(e||i)(c(u),c(m))}}static{this.\u0275dir=o({type:i,selectors:[["","clickOutside",""]],outputs:{clickOutside:"clickOutside"}})}}return i})();export{O as a};
