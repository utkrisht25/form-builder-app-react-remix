import{u as f,d as p,r as n,j as e,O as x}from"./index-CpqSmuqB.js";import{c as j,f as y,P as S}from"./formSlice-rzx5E_LX.js";import{T as w}from"./ThemeContext-CTV3qdSC.js";import{h as g,j as k,_ as v,M,L as N,S as R,k as L}from"./components-CeugLcM5.js";/**
 * @remix-run/react v2.16.7
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function O({getKey:r,...l}){let{isSpaMode:c}=g(),o=f(),u=p();k({getKey:r,storageKey:a});let d=n.useMemo(()=>{if(!r)return null;let t=r(o,u);return t!==o.key?t:null},[]);if(c)return null;let m=((t,h)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[h||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return n.createElement("script",v({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}const _=j({reducer:{form:y}});function J(){return[]}function P(){return e.jsxs("html",{lang:"en",className:"h-full",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),e.jsx(M,{}),e.jsx(N,{})]}),e.jsx("body",{className:"h-full",children:e.jsx(w,{children:e.jsx(S,{store:_,children:e.jsxs("div",{className:"min-h-screen bg-white dark:bg-gray-900 transition-colors",children:[e.jsx(x,{}),e.jsx(O,{}),e.jsx(R,{}),e.jsx(L,{})]})})})})]})}export{P as default,J as links};
