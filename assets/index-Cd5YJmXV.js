var M=Object.defineProperty;var j=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var g=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function a(){}function L(e){return e()}function P(){return Object.create(null)}function _(e){e.forEach(L)}function N(e){return typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function T(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e){return document.createElement(e)}function q(e){return Array.from(e.childNodes)}let b;function h(e){b=e}const u=[],E=[];let d=[];const k=[],F=Promise.resolve();let y=!1;function H(){y||(y=!0,F.then(C))}function $(e){d.push(e)}const m=new Set;let f=0;function C(){if(f!==0)return;const e=b;do{try{for(;f<u.length;){const t=u[f];f++,h(t),K(t.$$)}}catch(t){throw u.length=0,f=0,t}for(h(null),u.length=0,f=0;E.length;)E.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];m.has(n)||(m.add(n),n())}d.length=0}while(u.length);for(;k.length;)k.pop()();y=!1,m.clear(),h(e)}function K(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}function R(e){const t=[],n=[];d.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),d=t}const U=new Set;function W(e,t){e&&e.i&&(U.delete(e),e.i(t))}function X(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),$(()=>{const i=e.$$.on_mount.map(L).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...i):_(i),e.$$.on_mount=[]}),r.forEach($)}function z(e,t){const n=e.$$;n.fragment!==null&&(R(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){e.$$.dirty[0]===-1&&(u.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,o,r,i,l=null,I=[-1]){const p=b;h(e);const s=e.$$={fragment:null,ctx:[],props:i,update:a,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:P(),dirty:I,skip_bound:!1,root:t.target||p.$$.root};l&&l(s.root);let w=!1;if(s.ctx=n?n(e,t.props||{},(c,v,...x)=>{const O=x.length?x[0]:v;return s.ctx&&r(s.ctx[c],s.ctx[c]=O)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](O),w&&D(e,c)),v}):[],s.update(),w=!0,_(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const c=q(t.target);s.fragment&&s.fragment.l(c),c.forEach(S)}else s.fragment&&s.fragment.c();t.intro&&W(e.$$.fragment),X(e,t.target,t.anchor),C()}h(p)}class J{constructor(){g(this,"$$");g(this,"$$set")}$destroy(){z(this,1),this.$destroy=a}$on(t,n){if(!N(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Q);const Y="/portfolio/assets/PhotoCV_circle_rogne-r8XC68Sr.png";function Z(e){let t;return{c(){t=V("main"),t.innerHTML=`<div><img class="logo svelte-1h45hm4" src="${Y}" alt="photo"/></div> <h1>Margot Pellegrin Portfolio</h1> <p>Welcome to my portfolio ! I&#39;m Margot Pellegrin a student in IT development.</p> <p class="read-the-docs svelte-1h45hm4">This site is in building process, please visit it in few days.</p>`},m(n,o){T(n,t,o)},p:a,i:a,o:a,d(n){n&&S(t)}}}class ee extends J{constructor(t){super(),G(this,t,null,Z,A,{})}}new ee({target:document.getElementById("app")});