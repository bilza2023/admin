import{s as H,e as u,a as y,c as f,b as v,l as $,g as w,f as p,m,i as A,h as c,n as k,o as G,t as S,d as I,p as M}from"../chunks/scheduler.B0J9AolO.js";import{e as q}from"../chunks/each.BHmVYiWL.js";import{S as T,i as z}from"../chunks/index.gEw5MGyf.js";function D(i,t,s){const r=i.slice();return r[1]=t[s],r}function V(i){let t,s,r,g,d,n,l=i[1].title+"",a,o,e,h=i[1].comments+"",E,j;return{c(){t=u("a"),s=u("div"),r=u("img"),d=y(),n=u("h2"),a=S(l),o=y(),e=u("p"),E=S(h),j=y(),this.h()},l(x){t=f(x,"A",{href:!0});var b=v(t);s=f(b,"DIV",{class:!0});var _=v(s);r=f(_,"IMG",{src:!0,alt:!0,class:!0}),d=w(_),n=f(_,"H2",{class:!0});var C=v(n);a=I(C,l),C.forEach(p),o=w(_),e=f(_,"P",{class:!0});var P=v(e);E=I(P,h),P.forEach(p),_.forEach(p),j=w(b),b.forEach(p),this.h()},h(){M(r.src,g="./app/"+i[1].image)||m(r,"src",g),m(r,"alt",i[1].title),m(r,"class","rounded-md mb-2 mx-auto"),m(n,"class","text-lg font-semibold text-center mb-1"),m(e,"class","text-sm text-gray-400 text-center"),m(s,"class","bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 w-64 shadow-red-600 hover:shadow-green-500 cursor-pointer"),m(t,"href",i[1].url)},m(x,b){A(x,t,b),c(t,s),c(s,r),c(s,d),c(s,n),c(n,a),c(s,o),c(s,e),c(e,E),c(t,j)},p:k,d(x){x&&p(t)}}}function B(i){let t,s,r="Taleem App",g,d,n=q(i[0]),l=[];for(let a=0;a<n.length;a+=1)l[a]=V(D(i,n,a));return{c(){t=u("div"),s=u("h1"),s.textContent=r,g=y(),d=u("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){t=f(a,"DIV",{class:!0});var o=v(t);s=f(o,"H1",{class:!0,"data-svelte-h":!0}),$(s)!=="svelte-p08jqs"&&(s.textContent=r),g=w(o),d=f(o,"DIV",{class:!0});var e=v(d);for(let h=0;h<l.length;h+=1)l[h].l(e);e.forEach(p),o.forEach(p),this.h()},h(){m(s,"class","text-4xl font-bold text-center py-4 shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 rounded-lg m-0 pt-4 mb-20"),m(d,"class","flex flex-wrap justify-center gap-4 p-4"),m(t,"class","bg-gray-800 text-white p-0 m-0 ")},m(a,o){A(a,t,o),c(t,s),c(t,g),c(t,d);for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(d,null)},p(a,[o]){if(o&1){n=q(a[0]);let e;for(e=0;e<n.length;e+=1){const h=D(a,n,e);l[e]?l[e].p(h,o):(l[e]=V(h),l[e].c(),l[e].m(d,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=n.length}},i:k,o:k,d(a){a&&p(t),G(l,a)}}}function F(i){return[[{title:"Presentation Syllabus",image:"presentation.jpeg",comments:"Syllabus",url:"syllabus"},{title:"Editor",image:"magic.jpeg",comments:"Editor",url:"editor?id=cm9fk5dh50asj70fmtpm9tmg2"},{title:"Player",image:"player.jpeg",comments:"Player",url:"player?id=cm9fk5dh50asj70fmtpm9tmg2"},{title:"Canvas Slides",image:"canvas.jpeg",comments:"Examples of canvas slides",url:"canvas_slides_index"}]]}class N extends T{constructor(t){super(),z(this,t,F,B,H,{})}}export{N as component};
