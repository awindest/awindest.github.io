import{n as c,s as h}from"./scheduler.DTNPbBVm.js";const t=[];function d(n,a=c){let i;const o=new Set;function r(e){if(h(n,e)&&(n=e,i)){const b=!t.length;for(const s of o)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(n))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(i=a(r,f)||c),e(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_7b5el6)==null?void 0:u.base)??"";var l;const q=((l=globalThis.__sveltekit_7b5el6)==null?void 0:l.assets)??p;export{q as a,p as b,d as w};
