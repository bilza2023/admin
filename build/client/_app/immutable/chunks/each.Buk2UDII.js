import{t as q,a as z}from"./index.BredBVVQ.js";import{u as B}from"./scheduler.DnLb9Fkb.js";function G(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function H(e,c){e.d(1),c.delete(e.key)}function C(e,c){z(e,1,1,()=>{c.delete(e.key)})}function I(e,c){e.f(),C(e,c)}function J(e,c,x,D,S,g,o,k,p,A,u,j){let i=e.length,f=g.length,d=i;const a={};for(;d--;)a[e[d].key]=d;const h=[],w=new Map,y=new Map,_=[];for(d=f;d--;){const n=j(S,g,d),s=x(n);let t=o.get(s);t?_.push(()=>t.p(n,c)):(t=A(s,n),t.c()),w.set(s,h[d]=t),s in a&&y.set(s,Math.abs(d-a[s]))}const M=new Set,v=new Set;function m(n){q(n,1),n.m(k,u),o.set(n.key,n),u=n.first,f--}for(;i&&f;){const n=h[f-1],s=e[i-1],t=n.key,l=s.key;n===s?(u=n.first,i--,f--):w.has(l)?!o.has(t)||M.has(t)?m(n):v.has(l)?i--:y.get(t)>y.get(l)?(v.add(t),m(n)):(M.add(l),i--):(p(s,o),i--)}for(;i--;){const n=e[i];w.has(n.key)||p(n,o)}for(;f;)m(h[f-1]);return B(_),h}export{H as d,G as e,I as f,J as u};
