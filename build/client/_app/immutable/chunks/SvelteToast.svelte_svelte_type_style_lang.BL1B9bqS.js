import{w as b}from"./index.bG28uF7U.js";const h={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}};function x(){const{subscribe:f,update:o}=b(new Array),i={};let c=0;function u(t){return t instanceof Object}function l(t="default",r={}){return i[t]=r,i}function p(t,r){const n={target:"default",...u(t)?t:{...r,msg:t}},e=i[n.target]||{},s={...h,...e,...n,theme:{...e.theme,...n.theme},classes:[...e.classes||[],...n.classes||[]],id:++c};return o(a=>s.reversed?[...a,s]:[s,...a]),c}function d(t){o(r=>{if(!r.length||t===0)return[];if(typeof t=="function")return r.filter(e=>t(e));if(u(t))return r.filter(e=>e.target!==t.target);const n=t||Math.max(...r.map(e=>e.id));return r.filter(e=>e.id!==n)})}function m(t,r){const n=u(t)?t:{...r,id:t};o(e=>{const s=e.findIndex(a=>a.id===n.id);return s>-1&&(e[s]={...e[s],...n}),e})}return{subscribe:f,push:p,pop:d,set:m,_init:l}}const w=x();export{w as t};
