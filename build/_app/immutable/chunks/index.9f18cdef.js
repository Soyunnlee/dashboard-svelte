import{w as O}from"./index.eb4e7526.js";import{U as M,am as k,an as P,ao as T}from"./index.62a8ee71.js";function $(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}function S(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function U(t){const r=t-1;return r*r*r+1}function w(t){return Object.prototype.toString.call(t)==="[object Date]"}function j(t,r,s,i){if(typeof s=="number"||w(s)){const n=i-s,e=(s-r)/(t.dt||1/60),o=t.opts.stiffness*n,f=t.opts.damping*e,c=(o-f)*t.inv_mass,a=(e+c)*t.dt;return Math.abs(a)<t.opts.precision&&Math.abs(n)<t.opts.precision?i:(t.settled=!1,w(s)?new Date(s.getTime()+a):s+a)}else{if(Array.isArray(s))return s.map((n,e)=>j(t,r[e],s[e],i[e]));if(typeof s=="object"){const n={};for(const e in s)n[e]=j(t,r[e],s[e],i[e]);return n}else throw new Error(`Cannot spring ${typeof s} values`)}}function z(t,r={}){const s=O(t),{stiffness:i=.15,damping:n=.8,precision:e=.01}=r;let o,f,c,a=t,u=t,p=1,h=0,y=!1;function b(d,l={}){u=d;const C=c={};return t==null||l.hard||m.stiffness>=1&&m.damping>=1?(y=!0,o=k(),a=d,s.set(t=u),Promise.resolve()):(l.soft&&(h=1/((l.soft===!0?.5:+l.soft)*60),p=0),f||(o=k(),y=!1,f=P(g=>{if(y)return y=!1,f=null,!1;p=Math.min(p+h,1);const A={inv_mass:p,opts:m,settled:!0,dt:(g-o)*60/1e3},D=j(A,a,t,u);return o=g,a=t,s.set(t=D),A.settled&&(f=null),!A.settled})),new Promise(g=>{f.promise.then(()=>{C===c&&g()})}))}const m={set:b,update:(d,l)=>b(d(u,t),l),subscribe:s.subscribe,stiffness:i,damping:n,precision:e};return m}function E(t,r){if(t===r||t!==t)return()=>t;const s=typeof t;if(s!==typeof r||Array.isArray(t)!==Array.isArray(r))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const i=r.map((n,e)=>E(t[e],n));return n=>i.map(e=>e(n))}if(s==="object"){if(!t||!r)throw new Error("Object cannot be null");if(w(t)&&w(r)){t=t.getTime(),r=r.getTime();const e=r-t;return o=>new Date(t+o*e)}const i=Object.keys(r),n={};return i.forEach(e=>{n[e]=E(t[e],r[e])}),e=>{const o={};return i.forEach(f=>{o[f]=n[f](e)}),o}}if(s==="number"){const i=r-t;return n=>t+n*i}throw new Error(`Cannot interpolate ${s} values`)}function B(t,r={}){const s=O(t);let i,n=t;function e(o,f){if(t==null)return s.set(t=o),Promise.resolve();n=o;let c=i,a=!1,{delay:u=0,duration:p=400,easing:h=T,interpolate:y=E}=M(M({},r),f);if(p===0)return c&&(c.abort(),c=null),s.set(t=n),Promise.resolve();const b=k()+u;let m;return i=P(d=>{if(d<b)return!0;a||(m=y(t,o),typeof p=="function"&&(p=p(t,o)),a=!0),c&&(c.abort(),c=null);const l=d-b;return l>p?(s.set(t=o),!1):(s.set(t=m(h(l/p))),!0)}),i.promise}return{set:e,update:(o,f)=>e(o(n,t),f),subscribe:s.subscribe}}export{U as a,S as b,$ as c,z as s,B as t};
