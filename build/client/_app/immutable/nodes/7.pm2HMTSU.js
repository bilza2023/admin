import{s as X,e as g,c as b,b as w,l as A,f as _,D as z,m as p,i as y,h as u,E as R,A as Y,n as U,o as Z,t as D,d as I,j as M,a as T,g as L,q as te}from"../chunks/scheduler.B0J9AolO.js";import{S as $,i as ee,c as le,b as se,m as ae,t as ne,a as ie,d as oe}from"../chunks/index.gEw5MGyf.js";import{e as O}from"../chunks/each.BHmVYiWL.js";import{A as re}from"../chunks/index.3rfbx_ts.js";import{t as ce}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.C6xe-9lS.js";import{a as fe}from"../chunks/ajaxPost.COIWJ6Bt.js";function B(c,e,l){const a=c.slice();return a[4]=e[l],a}function G(c){let e,l=c[4]+"",a,t;return{c(){e=g("option"),a=D(l),this.h()},l(i){e=b(i,"OPTION",{});var s=w(e);a=I(s,l),s.forEach(_),this.h()},h(){e.__value=t=c[4],z(e,e.__value)},m(i,s){y(i,e,s),u(e,a)},p(i,s){s&2&&l!==(l=i[4]+"")&&M(a,l),s&2&&t!==(t=i[4])&&(e.__value=t,z(e,e.__value))},d(i){i&&_(e)}}}function ue(c){let e,l,a="Select an item",t,i,s=O(c[1]),n=[];for(let o=0;o<s.length;o+=1)n[o]=G(B(c,s,o));return{c(){e=g("select"),l=g("option"),l.textContent=a;for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=b(o,"SELECT",{class:!0});var v=w(e);l=b(v,"OPTION",{"data-svelte-h":!0}),A(l)!=="svelte-1nmfvxr"&&(l.textContent=a);for(let r=0;r<n.length;r+=1)n[r].l(v);v.forEach(_),this.h()},h(){l.__value=null,z(l,l.__value),p(e,"class","dropdown svelte-1wiajq0")},m(o,v){y(o,e,v),u(e,l);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);R(e,c[0]),t||(i=Y(e,"change",c[2]),t=!0)},p(o,[v]){if(v&2){s=O(o[1]);let r;for(r=0;r<s.length;r+=1){const V=B(o,s,r);n[r]?n[r].p(V,v):(n[r]=G(V),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}v&3&&R(e,o[0])},i:U,o:U,d(o){o&&_(e),Z(n,o),t=!1,i()}}}function de(c,e,l){let{items:a}=e,{selectedValue:t=null}=e,{onSelect:i=n=>{}}=e;function s(n){l(0,t=n.target.value),i(t)}return c.$$set=n=>{"items"in n&&l(1,a=n.items),"selectedValue"in n&&l(0,t=n.selectedValue),"onSelect"in n&&l(3,i=n.onSelect)},[t,a,s,i]}class he extends ${constructor(e){super(),ee(this,e,de,ue,X,{items:1,selectedValue:0,onSelect:3})}}const _e=["1.1","1.2","1.3","2.1","2.2","2.3","2.4","2.5","2.6","3.1","3.2","3.3","3.4","4.1","4.2","4.3","4.4","4.5","4.6","4.7","4.8","5.1","5.2","5.3","5.4","6.1","6.2","6.3","6.4","6.5","6.6","7.1","7.2","8.1","8.2","8.3","8.4","9.1","9.2","9.3","9.4","9.5","9.6","9.7"];function J(c,e,l){const a=c.slice();return a[5]=e[l],a}function K(c){let e,l=O(c[0]),a=[];for(let t=0;t<l.length;t+=1)a[t]=W(J(c,l,t));return{c(){e=g("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=b(t,"DIV",{class:!0});var i=w(e);for(let s=0;s<a.length;s+=1)a[s].l(i);i.forEach(_),this.h()},h(){p(e,"class","card-container svelte-1qn49f5")},m(t,i){y(t,e,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null)},p(t,i){if(i&1){l=O(t[0]);let s;for(s=0;s<l.length;s+=1){const n=J(t,l,s);a[s]?a[s].p(n,i):(a[s]=W(n),a[s].c(),a[s].m(e,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=l.length}},d(t){t&&_(e),Z(a,t)}}}function W(c){let e,l,a,t=c[5].exercise+"",i,s,n=c[5].questionNo+"",o,v,r=c[5].part+"",V,S,m,x,k,P,d,f,h,q,H;return{c(){e=g("div"),l=g("div"),a=D("Ex#"),i=D(t),s=D(" Q#"),o=D(n),v=D("-"),V=D(r),S=T(),m=g("div"),x=g("a"),k=D("Edit"),d=T(),f=g("a"),h=D("Play"),H=T(),this.h()},l(C){e=b(C,"DIV",{class:!0});var E=w(e);l=b(E,"DIV",{class:!0});var j=w(l);a=I(j,"Ex#"),i=I(j,t),s=I(j," Q#"),o=I(j,n),v=I(j,"-"),V=I(j,r),j.forEach(_),S=L(E),m=b(E,"DIV",{class:!0});var N=w(m);x=b(N,"A",{class:!0,href:!0});var F=w(x);k=I(F,"Edit"),F.forEach(_),d=L(N),f=b(N,"A",{class:!0,href:!0});var Q=w(f);h=I(Q,"Play"),Q.forEach(_),N.forEach(_),H=L(E),E.forEach(_),this.h()},h(){p(l,"class","card-header svelte-1qn49f5"),p(x,"class","text-white rounded-md px-4"),p(x,"href",P="/editor?id="+c[5].id),p(f,"class","text-white rounded-md px-4"),p(f,"href",q="/player?id="+c[5].id),p(m,"class","flex justify-around gap-2 "),p(e,"class","card svelte-1qn49f5")},m(C,E){y(C,e,E),u(e,l),u(l,a),u(l,i),u(l,s),u(l,o),u(l,v),u(l,V),u(e,S),u(e,m),u(m,x),u(x,k),u(m,d),u(m,f),u(f,h),u(e,H)},p(C,E){E&1&&t!==(t=C[5].exercise+"")&&M(i,t),E&1&&n!==(n=C[5].questionNo+"")&&M(o,n),E&1&&r!==(r=C[5].part+"")&&M(V,r),E&1&&P!==(P="/editor?id="+C[5].id)&&p(x,"href",P),E&1&&q!==(q="/player?id="+C[5].id)&&p(f,"href",q)},d(C){C&&_(e)}}}function ve(c){let e,l='<h1 class="text-3xl border-2 border-white py-1 px-8 rounded-md  svelte-1qn49f5">Syllabus</h1>',a,t,i,s="Exercise",n,o,v,r,V="Load",S,m,x,k,P;o=new he({props:{items:c[2],selectedValue:c[1],onSelect:c[4]}});let d=c[0]&&K(c);return{c(){e=g("div"),e.innerHTML=l,a=T(),t=g("div"),i=g("h1"),i.textContent=s,n=T(),le(o.$$.fragment),v=T(),r=g("button"),r.textContent=V,S=T(),m=g("div"),d&&d.c(),this.h()},l(f){e=b(f,"DIV",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-1mr8du9"&&(e.innerHTML=l),a=L(f),t=b(f,"DIV",{class:!0});var h=w(t);i=b(h,"H1",{class:!0,"data-svelte-h":!0}),A(i)!=="svelte-1p3d5z2"&&(i.textContent=s),n=L(h),se(o.$$.fragment,h),v=L(h),r=b(h,"BUTTON",{class:!0,"data-svelte-h":!0}),A(r)!=="svelte-1ecc9ze"&&(r.textContent=V),h.forEach(_),S=L(f),m=b(f,"DIV",{class:!0});var q=w(m);d&&d.l(q),q.forEach(_),this.h()},h(){p(e,"class","flex justify-center text-white pt-4 pb-4"),p(i,"class","text-white svelte-1qn49f5"),p(r,"class","load-button svelte-1qn49f5"),p(t,"class","flex gap-2 justify-center pt-5 pb-5 bg-slate-700"),p(m,"class","p-4 bg-gray-800")},m(f,h){y(f,e,h),y(f,a,h),y(f,t,h),u(t,i),u(t,n),ae(o,t,null),u(t,v),u(t,r),y(f,S,h),y(f,m,h),d&&d.m(m,null),x=!0,k||(P=Y(r,"click",c[3]),k=!0)},p(f,[h]){const q={};h&2&&(q.selectedValue=f[1]),o.$set(q),f[0]?d?d.p(f,h):(d=K(f),d.c(),d.m(m,null)):d&&(d.d(1),d=null)},i(f){x||(ne(o.$$.fragment,f),x=!0)},o(f){ie(o.$$.fragment,f),x=!1},d(f){f&&(_(e),_(a),_(t),_(S),_(m)),oe(o),d&&d.d(),k=!1,P()}}}function me(c,e,l){let a,t=_e,i="1.1";te(async()=>{await s()});async function s(){try{const o=await fe(`${re}/presentation/readMany`,{tcode:"fbise9math",exercise:i});o.ok?l(0,a=await o.json()):(console.error("Failed to fetch presentation"),ce.push("Failed to load presentation."))}catch(o){console.error("Error during onMount:",o)}}function n(o){l(1,i=o),console.log("exercise",i)}return[a,i,t,s,n]}class Ve extends ${constructor(e){super(),ee(this,e,me,ve,X,{})}}export{Ve as component};
