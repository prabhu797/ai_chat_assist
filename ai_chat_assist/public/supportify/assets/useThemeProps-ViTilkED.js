import{a as W,i as A,_ as u,A as $,B as g,C as B,D as q}from"./index-Bf9l0LPL.js";import{i as z,j as G}from"./Button-B-vxSuKm.js";const H=["ownerState"],I=["variants"],J=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function K(e){return Object.keys(e).length===0}function Q(e){return typeof e=="string"&&e.charCodeAt(0)>96}function O(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const U=W(),X=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function _({defaultTheme:e,theme:o,themeId:t}){return K(o)?e:o[t]||o}function Y(e){return e?(o,t)=>t[e]:null}function P(e,o){let{ownerState:t}=o,s=A(o,H);const r=typeof e=="function"?e(u({ownerState:t},s)):e;if(Array.isArray(r))return r.flatMap(d=>P(d,u({ownerState:t},s)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:d=[]}=r;let p=A(r,I);return d.forEach(n=>{let l=!0;typeof n.props=="function"?l=n.props(u({ownerState:t},s,t)):Object.keys(n.props).forEach(h=>{(t==null?void 0:t[h])!==n.props[h]&&s[h]!==n.props[h]&&(l=!1)}),l&&(Array.isArray(p)||(p=[p]),p.push(typeof n.style=="function"?n.style(u({ownerState:t},s,t)):n.style))}),p}return r}function Z(e={}){const{themeId:o,defaultTheme:t=U,rootShouldForwardProp:s=O,slotShouldForwardProp:r=O}=e,d=a=>$(u({},a,{theme:_(u({},a,{defaultTheme:t,themeId:o}))}));return d.__mui_systemSx=!0,(a,p={})=>{z(a,i=>i.filter(f=>!(f!=null&&f.__mui_systemSx)));const{name:n,slot:l,skipVariantsResolver:h,skipSx:b,overridesResolver:T=Y(X(l))}=p,V=A(p,J),E=h!==void 0?h:l&&l!=="Root"&&l!=="root"||!1,N=b||!1;let D,v=O;l==="Root"||l==="root"?v=s:l?v=r:Q(a)&&(v=void 0);const x=G(a,u({shouldForwardProp:v,label:D},V)),C=i=>typeof i=="function"&&i.__emotion_real!==i||g(i)?f=>P(i,u({},f,{theme:_({theme:f.theme,defaultTheme:t,themeId:o})})):i,F=(i,...f)=>{let R=C(i);const y=f?f.map(C):[];n&&T&&y.push(m=>{const c=_(u({},m,{defaultTheme:t,themeId:o}));if(!c.components||!c.components[n]||!c.components[n].styleOverrides)return null;const S=c.components[n].styleOverrides,w={};return Object.entries(S).forEach(([L,M])=>{w[L]=P(M,u({},m,{theme:c}))}),T(m,w)}),n&&!E&&y.push(m=>{var c;const S=_(u({},m,{defaultTheme:t,themeId:o})),w=S==null||(c=S.components)==null||(c=c[n])==null?void 0:c.variants;return P({variants:w},u({},m,{theme:S}))}),N||y.push(d);const j=y.length-f.length;if(Array.isArray(i)&&j>0){const m=new Array(j).fill("");R=[...i,...m],R.raw=[...i.raw,...m]}const k=x(R,...y);return a.muiName&&(k.muiName=a.muiName),k};return x.withConfig&&(F.withConfig=x.withConfig),F}}const re=Z();function ee(e){const{theme:o,name:t,props:s}=e;return!o||!o.components||!o.components[t]||!o.components[t].defaultProps?s:B(o.components[t].defaultProps,s)}function ne({props:e,name:o,defaultTheme:t,themeId:s}){let r=q(t);return s&&(r=r[s]||r),ee({theme:r,name:o,props:e})}export{ee as g,re as s,ne as u};
