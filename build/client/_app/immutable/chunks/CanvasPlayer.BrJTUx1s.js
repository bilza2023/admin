import{s as b,e as w,c as _,b as k,f as d,i as v,n as u,q as C,r as y}from"./scheduler.DnLb9Fkb.js";import{S as E,i as S}from"./index.BredBVVQ.js";import{g as L,I as x,D as q,E as A}from"./getCanvasSlideImages.D4FM3-19.js";function B(i){let e;return{c(){e=w("canvas")},l(t){e=_(t,"CANVAS",{}),k(e).forEach(d)},m(t,c){v(t,e,c),i[4](e)},p:u,i:u,o:u,d(t){t&&d(e),i[4](null)}}}function D(i,e,t){let{itemLiterals:c}=e,{assets:o}=e,{background:r=null}=e,a,l,s=null,f=null,m=null;function I(){a.getSelectedItem(),s&&(a.getItems(),s.draw(a.getItems(),r))}function g(){if(l){m&&clearInterval(m),r||t(1,r=L());const n=l.getContext("2d");a=new x(c),s=new q(l,n,o),s.resize(1e3),f=new A(a,I),s.connect(f),a.getItems(),s.draw(a.getItems(),r),m=setInterval(()=>{s&&(a.getItems(),s.draw(a.getItems(),r))},20)}}C(async()=>{l&&g()});function h(n){y[n?"unshift":"push"](()=>{l=n,t(0,l)})}return i.$$set=n=>{"itemLiterals"in n&&t(2,c=n.itemLiterals),"assets"in n&&t(3,o=n.assets),"background"in n&&t(1,r=n.background)},i.$$.update=()=>{i.$$.dirty&4&&g()},[l,r,c,o,h]}class P extends E{constructor(e){super(),S(this,e,D,B,b,{itemLiterals:2,assets:3,background:1})}}export{P as C};
