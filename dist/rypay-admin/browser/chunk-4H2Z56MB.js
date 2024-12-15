import{a as p}from"./chunk-R3JNT2JN.js";import{g as l,ob as h,s as u,v as s,y as c,yb as f}from"./chunk-3MIGUVNV.js";var n=class extends Error{};n.prototype.name="InvalidTokenError";function m(e){return decodeURIComponent(atob(e).replace(/(.)/g,(o,t)=>{let r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}function g(e){let o=e.replace(/-/g,"+").replace(/_/g,"/");switch(o.length%4){case 0:break;case 2:o+="==";break;case 3:o+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return m(o)}catch{return atob(o)}}function d(e,o){if(typeof e!="string")throw new n("Invalid token specified: must be a string");o||(o={});let t=o.header===!0?0:1,r=e.split(".")[t];if(typeof r!="string")throw new n(`Invalid token specified: missing part #${t+1}`);let i;try{i=g(r)}catch(a){throw new n(`Invalid token specified: invalid base64 for part #${t+1} (${a.message})`)}try{return JSON.parse(i)}catch(a){throw new n(`Invalid token specified: invalid json for part #${t+1} (${a.message})`)}}var x=(()=>{class e{constructor(t,r){this.http=t,this.router=r,this.tokenKey="authToken"}login(t,r){return this.http.post(`${p.baseUrl}/auth/validate-otp`,{phoneNumber:t,otp:r}).pipe(u(i=>{localStorage.setItem(this.tokenKey,i.tokens.accessToken)}))}getOTP(t){return this.http.post(`${p.baseUrl}/auth/request-otp`,{phone:t})}logout(){localStorage.removeItem(this.tokenKey)}getToken(){return localStorage.getItem(this.tokenKey)}isLoggedIn(){let t=this.getToken();return t&&!this.isTokenExpired(t)?!0:(this.logout(),!1)}isTokenExpired(t){try{let r=d(t),i=Math.floor(Date.now()/1e3);return r.exp?r.exp<i:!0}catch{return!0}}static{this.\u0275fac=function(r){return new(r||e)(c(h),c(f))}}static{this.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var T=(()=>{class e{constructor(){this.currentUser$=new l(null)}setProfile(t){this.currentUser$.next(t)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{x as a,T as b};
