var Ne=Math.pow;import{r as c,_ as h,i as j,D as dt,T as ft,E as pt,l as Se,o as te,j as $,F as ye,H as Pe,n as Ue,I as ht,p as mt}from"./index-Bf9l0LPL.js";import{c as V,b as Z,g as ne,d as oe,s as G,a as re,_ as gt,m as nt,u as Oe,n as Ke,k as We,o as vt,r as Et}from"./Button-B-vxSuKm.js";function Ve(...e){return e.reduce((t,n)=>n==null?t:function(...s){t.apply(this,s),n.apply(this,s)},()=>{})}function xt(e,t=166){let n;function o(...s){const r=()=>{e.apply(this,s)};clearTimeout(n),n=setTimeout(r,t)}return o.clear=()=>{clearTimeout(n)},o}function Un(e,t){var n,o;return c.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(o=e.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}function K(e){return e&&e.ownerDocument||document}function Ee(e){return K(e).defaultView||window}function Kn({controlled:e,default:t,name:n,state:o="value"}){const{current:s}=c.useRef(e!==void 0),[r,i]=c.useState(t),a=s?e:r,l=c.useCallback(d=>{s||i(d)},[]);return[a,l]}function ot(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function rt(e){return typeof e=="string"}function bt(e,t,n){return e===void 0||rt(e)?t:h({},t,{ownerState:h({},t.ownerState,n)})}function st(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{n[o]=e[o]}),n}function Ge(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function yt(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:s,className:r}=e;if(!t){const E=V(n==null?void 0:n.className,r,s==null?void 0:s.className,o==null?void 0:o.className),m=h({},n==null?void 0:n.style,s==null?void 0:s.style,o==null?void 0:o.style),C=h({},n,s,o);return E.length>0&&(C.className=E),Object.keys(m).length>0&&(C.style=m),{props:C,internalRef:void 0}}const i=st(h({},s,o)),a=Ge(o),l=Ge(s),d=t(i),f=V(d==null?void 0:d.className,n==null?void 0:n.className,r,s==null?void 0:s.className,o==null?void 0:o.className),p=h({},d==null?void 0:d.style,n==null?void 0:n.style,s==null?void 0:s.style,o==null?void 0:o.style),y=h({},d,n,l,a);return f.length>0&&(y.className=f),Object.keys(p).length>0&&(y.style=p),{props:y,internalRef:d.ref}}function Pt(e,t,n){return typeof e=="function"?e(t,n):e}const St=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function fe(e){var t;const{elementType:n,externalSlotProps:o,ownerState:s,skipResolvingSlotProps:r=!1}=e,i=j(e,St),a=r?{}:Pt(o,s),{props:l,internalRef:d}=yt(h({},i,{externalSlotProps:a})),f=Z(d,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return bt(n,h({},l,{ref:f}),s)}function Te(e){if(parseInt(c.version,10)>=19){var t;return(e==null||(t=e.props)==null?void 0:t.ref)||null}return(e==null?void 0:e.ref)||null}function it(){const e=dt(pt);return e[ft]||e}const qe=e=>{let t;return e<1?t=5.11916*Ne(e,2):t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Rt(e){return ne("MuiSvgIcon",e)}oe("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Tt=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Ct=e=>{const{color:t,fontSize:n,classes:o}=e,s={root:["root",t!=="inherit"&&`color${Se(t)}`,`fontSize${Se(n)}`]};return re(s,Rt,o)},kt=G("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Se(n.color)}`],t[`fontSize${Se(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,o,s,r,i,a,l,d,f,p,y,E,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(o=n.create)==null?void 0:o.call(n,"fill",{duration:(s=e.transitions)==null||(s=s.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((r=e.typography)==null||(i=r.pxToRem)==null?void 0:i.call(r,20))||"1.25rem",medium:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((d=e.typography)==null||(f=d.pxToRem)==null?void 0:f.call(d,35))||"2.1875rem"}[t.fontSize],color:(p=(y=(e.vars||e).palette)==null||(y=y[t.color])==null?void 0:y.main)!=null?p:{action:(E=(e.vars||e).palette)==null||(E=E.action)==null?void 0:E.active,disabled:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.disabled,inherit:void 0}[t.color]}}),De=c.forwardRef(function(t,n){const o=te({props:t,name:"MuiSvgIcon"}),{children:s,className:r,color:i="inherit",component:a="svg",fontSize:l="medium",htmlColor:d,inheritViewBox:f=!1,titleAccess:p,viewBox:y="0 0 24 24"}=o,E=j(o,Tt),m=c.isValidElement(s)&&s.type==="svg",C=h({},o,{color:i,component:a,fontSize:l,instanceFontSize:t.fontSize,inheritViewBox:f,viewBox:y,hasSvgAsChild:m}),R={};f||(R.viewBox=y);const b=Ct(C);return $.jsxs(kt,h({as:a,className:V(b.root,r),focusable:"false",color:d,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:n},R,E,m&&s.props,{ownerState:C,children:[m?s.props.children:s,p?$.jsx("title",{children:p}):null]}))});De.muiName="SvgIcon";function Wn(e,t){function n(o,s){return $.jsx(De,h({"data-testid":`${t}Icon`,ref:s},o,{children:e}))}return n.muiName=De.muiName,c.memo(c.forwardRef(n))}const Xe={disabled:!1};var Nt=function(t){return t.scrollTop},ge="unmounted",Q="exited",ee="entering",de="entered",Fe="exiting",X=function(e){gt(t,e);function t(o,s){var r;r=e.call(this,o,s)||this;var i=s,a=i&&!i.isMounting?o.enter:o.appear,l;return r.appearStatus=null,o.in?a?(l=Q,r.appearStatus=ee):l=de:o.unmountOnExit||o.mountOnEnter?l=ge:l=Q,r.state={status:l},r.nextCallback=null,r}t.getDerivedStateFromProps=function(s,r){var i=s.in;return i&&r.status===ge?{status:Q}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(s){var r=null;if(s!==this.props){var i=this.state.status;this.props.in?i!==ee&&i!==de&&(r=ee):(i===ee||i===de)&&(r=Fe)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var s=this.props.timeout,r,i,a;return r=i=a=s,s!=null&&typeof s!="number"&&(r=s.exit,i=s.enter,a=s.appear!==void 0?s.appear:i),{exit:r,enter:i,appear:a}},n.updateStatus=function(s,r){if(s===void 0&&(s=!1),r!==null)if(this.cancelNextCallback(),r===ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:ye.findDOMNode(this);i&&Nt(i)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Q&&this.setState({status:ge})},n.performEnter=function(s){var r=this,i=this.props.enter,a=this.context?this.context.isMounting:s,l=this.props.nodeRef?[a]:[ye.findDOMNode(this),a],d=l[0],f=l[1],p=this.getTimeouts(),y=a?p.appear:p.enter;if(!s&&!i||Xe.disabled){this.safeSetState({status:de},function(){r.props.onEntered(d)});return}this.props.onEnter(d,f),this.safeSetState({status:ee},function(){r.props.onEntering(d,f),r.onTransitionEnd(y,function(){r.safeSetState({status:de},function(){r.props.onEntered(d,f)})})})},n.performExit=function(){var s=this,r=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:ye.findDOMNode(this);if(!r||Xe.disabled){this.safeSetState({status:Q},function(){s.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Fe},function(){s.props.onExiting(a),s.onTransitionEnd(i.exit,function(){s.safeSetState({status:Q},function(){s.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(s,r){r=this.setNextCallback(r),this.setState(s,r)},n.setNextCallback=function(s){var r=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,r.nextCallback=null,s(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(s,r){this.setNextCallback(r);var i=this.props.nodeRef?this.props.nodeRef.current:ye.findDOMNode(this),a=s==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],d=l[0],f=l[1];this.props.addEndListener(d,f)}s!=null&&setTimeout(this.nextCallback,s)},n.render=function(){var s=this.state.status;if(s===ge)return null;var r=this.props,i=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var a=j(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Pe.createElement(nt.Provider,{value:null},typeof i=="function"?i(s,a):Pe.cloneElement(Pe.Children.only(i),a))},t}(Pe.Component);X.contextType=nt;X.propTypes={};function ue(){}X.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ue,onEntering:ue,onEntered:ue,onExit:ue,onExiting:ue,onExited:ue};X.UNMOUNTED=ge;X.EXITED=Q;X.ENTERING=ee;X.ENTERED=de;X.EXITING=Fe;const at=e=>e.scrollTop;function Re(e,t){var n,o;const{timeout:s,easing:r,style:i={}}=e;return{duration:(n=i.transitionDuration)!=null?n:typeof s=="number"?s:s[t.mode]||0,easing:(o=i.transitionTimingFunction)!=null?o:typeof r=="object"?r[t.mode]:r,delay:i.transitionDelay}}function Mt(e){return ne("MuiPaper",e)}oe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const wt=["className","component","elevation","square","variant"],It=e=>{const{square:t,elevation:n,variant:o,classes:s}=e,r={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${n}`]};return re(r,Mt,s)},$t=G("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return h({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&h({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ue.alpha("#fff",qe(t.elevation))}, ${Ue.alpha("#fff",qe(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Ot=c.forwardRef(function(t,n){const o=te({props:t,name:"MuiPaper"}),{className:s,component:r="div",elevation:i=1,square:a=!1,variant:l="elevation"}=o,d=j(o,wt),f=h({},o,{component:r,elevation:i,square:a,variant:l}),p=It(f);return $.jsx($t,h({as:r,ownerState:f,className:V(p.root,s),ref:n},d))});function Dt(e){return typeof e=="function"?e():e}const Ft=c.forwardRef(function(t,n){const{children:o,container:s,disablePortal:r=!1}=t,[i,a]=c.useState(null),l=Z(c.isValidElement(o)?Te(o):null,n);if(Oe(()=>{r||a(Dt(s)||document.body)},[s,r]),Oe(()=>{if(i&&!r)return Ke(n,i),()=>{Ke(n,null)}},[n,i,r]),r){if(c.isValidElement(o)){const d={ref:l};return c.cloneElement(o,d)}return $.jsx(c.Fragment,{children:o})}return $.jsx(c.Fragment,{children:i&&ht.createPortal(o,i)})}),Lt=c.createContext(void 0);function Vn(){return c.useContext(Lt)}const _t=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],At={entering:{opacity:1},entered:{opacity:1}},Ht=c.forwardRef(function(t,n){const o=it(),s={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:a,easing:l,in:d,onEnter:f,onEntered:p,onEntering:y,onExit:E,onExited:m,onExiting:C,style:R,timeout:b=s,TransitionComponent:D=X}=t,u=j(t,_t),g=c.useRef(null),x=Z(g,Te(a),n),k=N=>P=>{if(N){const S=g.current;P===void 0?N(S):N(S,P)}},v=k(y),I=k((N,P)=>{at(N);const S=Re({style:R,timeout:b,easing:l},{mode:"enter"});N.style.webkitTransition=o.transitions.create("opacity",S),N.style.transition=o.transitions.create("opacity",S),f&&f(N,P)}),_=k(p),O=k(C),z=k(N=>{const P=Re({style:R,timeout:b,easing:l},{mode:"exit"});N.style.webkitTransition=o.transitions.create("opacity",P),N.style.transition=o.transitions.create("opacity",P),E&&E(N)}),F=k(m),L=N=>{r&&r(g.current,N)};return $.jsx(D,h({appear:i,in:d,nodeRef:g,onEnter:I,onEntered:_,onEntering:v,onExit:z,onExited:F,onExiting:O,addEndListener:L,timeout:b},u,{children:(N,P)=>c.cloneElement(a,h({style:h({opacity:0,visibility:N==="exited"&&!d?"hidden":void 0},At[N],R,a.props.style),ref:x},P))}))});function jt(e){return ne("MuiBackdrop",e)}oe("MuiBackdrop",["root","invisible"]);const zt=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],Bt=e=>{const{classes:t,invisible:n}=e;return re({root:["root",n&&"invisible"]},jt,t)},Ut=G("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>h({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Kt=c.forwardRef(function(t,n){var o,s,r;const i=te({props:t,name:"MuiBackdrop"}),{children:a,className:l,component:d="div",components:f={},componentsProps:p={},invisible:y=!1,open:E,slotProps:m={},slots:C={},TransitionComponent:R=Ht,transitionDuration:b}=i,D=j(i,zt),u=h({},i,{component:d,invisible:y}),g=Bt(u),x=(o=m.root)!=null?o:p.root;return $.jsx(R,h({in:E,timeout:b},D,{children:$.jsx(Ut,h({"aria-hidden":!0},x,{as:(s=(r=C.root)!=null?r:f.Root)!=null?s:d,className:V(g.root,l,x==null?void 0:x.className),ownerState:h({},u,x==null?void 0:x.ownerState),classes:g,ref:n,children:a}))}))});function Wt(e){const t=K(e);return t.body===e?Ee(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ve(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ye(e){return parseInt(Ee(e).getComputedStyle(e).paddingRight,10)||0}function Vt(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function Ze(e,t,n,o,s){const r=[t,n,...o];[].forEach.call(e.children,i=>{const a=r.indexOf(i)===-1,l=!Vt(i);a&&l&&ve(i,s)})}function Me(e,t){let n=-1;return e.some((o,s)=>t(o)?(n=s,!0):!1),n}function Gt(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Wt(o)){const i=ot(K(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ye(o)+i}px`;const a=K(o).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{n.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Ye(l)+i}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=K(o).body;else{const i=o.parentElement,a=Ee(o);r=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:i,property:a})=>{r?i.style.setProperty(a,r):i.style.removeProperty(a)})}}function qt(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Xt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&ve(t.modalRef,!1);const s=qt(n);Ze(n,t.mount,t.modalRef,s,!0);const r=Me(this.containers,i=>i.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:s}),o)}mount(t,n){const o=Me(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[o];s.restore||(s.restore=Gt(s,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const s=Me(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&ve(t.modalRef,n),Ze(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&ve(i.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Yt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Zt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Jt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Qt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Jt(e))}function en(e){const t=[],n=[];return Array.from(e.querySelectorAll(Yt)).forEach((o,s)=>{const r=Zt(o);r===-1||!Qt(o)||(r===0?t.push(o):n.push({documentOrder:s,tabIndex:r,node:o}))}),n.sort((o,s)=>o.tabIndex===s.tabIndex?o.documentOrder-s.documentOrder:o.tabIndex-s.tabIndex).map(o=>o.node).concat(t)}function tn(){return!0}function nn(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:s=!1,getTabbable:r=en,isEnabled:i=tn,open:a}=e,l=c.useRef(!1),d=c.useRef(null),f=c.useRef(null),p=c.useRef(null),y=c.useRef(null),E=c.useRef(!1),m=c.useRef(null),C=Z(Te(t),m),R=c.useRef(null);c.useEffect(()=>{!a||!m.current||(E.current=!n)},[n,a]),c.useEffect(()=>{if(!a||!m.current)return;const u=K(m.current);return m.current.contains(u.activeElement)||(m.current.hasAttribute("tabIndex")||m.current.setAttribute("tabIndex","-1"),E.current&&m.current.focus()),()=>{s||(p.current&&p.current.focus&&(l.current=!0,p.current.focus()),p.current=null)}},[a]),c.useEffect(()=>{if(!a||!m.current)return;const u=K(m.current),g=v=>{R.current=v,!(o||!i()||v.key!=="Tab")&&u.activeElement===m.current&&v.shiftKey&&(l.current=!0,f.current&&f.current.focus())},x=()=>{const v=m.current;if(v===null)return;if(!u.hasFocus()||!i()||l.current){l.current=!1;return}if(v.contains(u.activeElement)||o&&u.activeElement!==d.current&&u.activeElement!==f.current)return;if(u.activeElement!==y.current)y.current=null;else if(y.current!==null)return;if(!E.current)return;let I=[];if((u.activeElement===d.current||u.activeElement===f.current)&&(I=r(m.current)),I.length>0){var _,O;const z=!!((_=R.current)!=null&&_.shiftKey&&((O=R.current)==null?void 0:O.key)==="Tab"),F=I[0],L=I[I.length-1];typeof F!="string"&&typeof L!="string"&&(z?L.focus():F.focus())}else v.focus()};u.addEventListener("focusin",x),u.addEventListener("keydown",g,!0);const k=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&x()},50);return()=>{clearInterval(k),u.removeEventListener("focusin",x),u.removeEventListener("keydown",g,!0)}},[n,o,s,i,a,r]);const b=u=>{p.current===null&&(p.current=u.relatedTarget),E.current=!0,y.current=u.target;const g=t.props.onFocus;g&&g(u)},D=u=>{p.current===null&&(p.current=u.relatedTarget),E.current=!0};return $.jsxs(c.Fragment,{children:[$.jsx("div",{tabIndex:a?0:-1,onFocus:D,ref:d,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:C,onFocus:b}),$.jsx("div",{tabIndex:a?0:-1,onFocus:D,ref:f,"data-testid":"sentinelEnd"})]})}function on(e){return typeof e=="function"?e():e}function rn(e){return e?e.props.hasOwnProperty("in"):!1}const sn=new Xt;function an(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:s=sn,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:a,children:l,onClose:d,open:f,rootRef:p}=e,y=c.useRef({}),E=c.useRef(null),m=c.useRef(null),C=Z(m,p),[R,b]=c.useState(!f),D=rn(l);let u=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(u=!1);const g=()=>K(E.current),x=()=>(y.current.modalRef=m.current,y.current.mount=E.current,y.current),k=()=>{s.mount(x(),{disableScrollLock:o}),m.current&&(m.current.scrollTop=0)},v=We(()=>{const S=on(t)||g().body;s.add(x(),S),m.current&&k()}),I=c.useCallback(()=>s.isTopModal(x()),[s]),_=We(S=>{E.current=S,S&&(f&&I()?k():m.current&&ve(m.current,u))}),O=c.useCallback(()=>{s.remove(x(),u)},[u,s]);c.useEffect(()=>()=>{O()},[O]),c.useEffect(()=>{f?v():(!D||!r)&&O()},[f,O,D,r,v]);const z=S=>T=>{var M;(M=S.onKeyDown)==null||M.call(S,T),!(T.key!=="Escape"||T.which===229||!I())&&(n||(T.stopPropagation(),d&&d(T,"escapeKeyDown")))},F=S=>T=>{var M;(M=S.onClick)==null||M.call(S,T),T.target===T.currentTarget&&d&&d(T,"backdropClick")};return{getRootProps:(S={})=>{const T=st(e);delete T.onTransitionEnter,delete T.onTransitionExited;const M=h({},T,S);return h({role:"presentation"},M,{onKeyDown:z(M),ref:C})},getBackdropProps:(S={})=>{const T=S;return h({"aria-hidden":!0},T,{onClick:F(T),open:f})},getTransitionProps:()=>{const S=()=>{b(!1),i&&i()},T=()=>{b(!0),a&&a(),r&&O()};return{onEnter:Ve(S,l==null?void 0:l.props.onEnter),onExited:Ve(T,l==null?void 0:l.props.onExited)}},rootRef:C,portalRef:_,isTopModal:I,exited:R,hasTransition:D}}function ln(e){return ne("MuiModal",e)}oe("MuiModal",["root","hidden","backdrop"]);const cn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],un=e=>{const{open:t,exited:n,classes:o}=e;return re({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},ln,o)},dn=G("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>h({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),fn=G(Kt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),pn=c.forwardRef(function(t,n){var o,s,r,i,a,l;const d=te({name:"MuiModal",props:t}),{BackdropComponent:f=fn,BackdropProps:p,className:y,closeAfterTransition:E=!1,children:m,container:C,component:R,components:b={},componentsProps:D={},disableAutoFocus:u=!1,disableEnforceFocus:g=!1,disableEscapeKeyDown:x=!1,disablePortal:k=!1,disableRestoreFocus:v=!1,disableScrollLock:I=!1,hideBackdrop:_=!1,keepMounted:O=!1,onBackdropClick:z,open:F,slotProps:L,slots:N}=d,P=j(d,cn),S=h({},d,{closeAfterTransition:E,disableAutoFocus:u,disableEnforceFocus:g,disableEscapeKeyDown:x,disablePortal:k,disableRestoreFocus:v,disableScrollLock:I,hideBackdrop:_,keepMounted:O}),{getRootProps:T,getBackdropProps:M,getTransitionProps:H,portalRef:q,isTopModal:xe,exited:U,hasTransition:be}=an(h({},S,{rootRef:n})),J=h({},S,{exited:U}),Y=un(J),se={};if(m.props.tabIndex===void 0&&(se.tabIndex="-1"),be){const{onEnter:w,onExited:A}=H();se.onEnter=w,se.onExited=A}const ie=(o=(s=N==null?void 0:N.root)!=null?s:b.Root)!=null?o:dn,pe=(r=(i=N==null?void 0:N.backdrop)!=null?i:b.Backdrop)!=null?r:f,he=(a=L==null?void 0:L.root)!=null?a:D.root,ae=(l=L==null?void 0:L.backdrop)!=null?l:D.backdrop,Ce=fe({elementType:ie,externalSlotProps:he,externalForwardedProps:P,getSlotProps:T,additionalProps:{ref:n,as:R},ownerState:J,className:V(y,he==null?void 0:he.className,Y==null?void 0:Y.root,!J.open&&J.exited&&(Y==null?void 0:Y.hidden))}),ke=fe({elementType:pe,externalSlotProps:ae,additionalProps:p,getSlotProps:w=>M(h({},w,{onClick:A=>{z&&z(A),w!=null&&w.onClick&&w.onClick(A)}})),className:V(ae==null?void 0:ae.className,p==null?void 0:p.className,Y==null?void 0:Y.backdrop),ownerState:J});return!O&&!F&&(!be||U)?null:$.jsx(Ft,{ref:q,container:C,disablePortal:k,children:$.jsxs(ie,h({},Ce,{children:[!_&&f?$.jsx(pe,h({},ke)):null,$.jsx(nn,{disableEnforceFocus:g,disableAutoFocus:u,disableRestoreFocus:v,isEnabled:xe,open:F,children:c.cloneElement(m,se)})]}))})}),hn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Le(e){return`scale(${e}, ${Ne(e,2)})`}const mn={entering:{opacity:1,transform:Le(1)},entered:{opacity:1,transform:"none"}},we=typeof navigator!="undefined"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),lt=c.forwardRef(function(t,n){const{addEndListener:o,appear:s=!0,children:r,easing:i,in:a,onEnter:l,onEntered:d,onEntering:f,onExit:p,onExited:y,onExiting:E,style:m,timeout:C="auto",TransitionComponent:R=X}=t,b=j(t,hn),D=vt(),u=c.useRef(),g=it(),x=c.useRef(null),k=Z(x,Te(r),n),v=P=>S=>{if(P){const T=x.current;S===void 0?P(T):P(T,S)}},I=v(f),_=v((P,S)=>{at(P);const{duration:T,delay:M,easing:H}=Re({style:m,timeout:C,easing:i},{mode:"enter"});let q;C==="auto"?(q=g.transitions.getAutoHeightDuration(P.clientHeight),u.current=q):q=T,P.style.transition=[g.transitions.create("opacity",{duration:q,delay:M}),g.transitions.create("transform",{duration:we?q:q*.666,delay:M,easing:H})].join(","),l&&l(P,S)}),O=v(d),z=v(E),F=v(P=>{const{duration:S,delay:T,easing:M}=Re({style:m,timeout:C,easing:i},{mode:"exit"});let H;C==="auto"?(H=g.transitions.getAutoHeightDuration(P.clientHeight),u.current=H):H=S,P.style.transition=[g.transitions.create("opacity",{duration:H,delay:T}),g.transitions.create("transform",{duration:we?H:H*.666,delay:we?T:T||H*.333,easing:M})].join(","),P.style.opacity=0,P.style.transform=Le(.75),p&&p(P)}),L=v(y),N=P=>{C==="auto"&&D.start(u.current||0,P),o&&o(x.current,P)};return $.jsx(R,h({appear:s,in:a,nodeRef:x,onEnter:_,onEntered:O,onEntering:I,onExit:F,onExited:L,onExiting:z,addEndListener:N,timeout:C==="auto"?null:C},b,{children:(P,S)=>c.cloneElement(r,h({style:h({opacity:0,transform:Le(.75),visibility:P==="exited"&&!a?"hidden":void 0},mn[P],m,r.props.style),ref:k},S))}))});lt.muiSupportAuto=!0;const gn=c.createContext({});function vn(e){return ne("MuiList",e)}oe("MuiList",["root","padding","dense","subheader"]);const En=["children","className","component","dense","disablePadding","subheader"],xn=e=>{const{classes:t,disablePadding:n,dense:o,subheader:s}=e;return re({root:["root",!n&&"padding",o&&"dense",s&&"subheader"]},vn,t)},bn=G("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>h({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),yn=c.forwardRef(function(t,n){const o=te({props:t,name:"MuiList"}),{children:s,className:r,component:i="ul",dense:a=!1,disablePadding:l=!1,subheader:d}=o,f=j(o,En),p=c.useMemo(()=>({dense:a}),[a]),y=h({},o,{component:i,dense:a,disablePadding:l}),E=xn(y);return $.jsx(gn.Provider,{value:p,children:$.jsxs(bn,h({as:i,className:V(E.root,r),ref:n,ownerState:y},f,{children:[d,s]}))})}),Pn=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Ie(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Je(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function ct(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function me(e,t,n,o,s,r){let i=!1,a=s(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(i)return!1;i=!0}const l=o?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!ct(a,r)||l)a=s(e,a,n);else return a.focus(),!0}return!1}const Sn=c.forwardRef(function(t,n){const{actions:o,autoFocus:s=!1,autoFocusItem:r=!1,children:i,className:a,disabledItemsFocusable:l=!1,disableListWrap:d=!1,onKeyDown:f,variant:p="selectedMenu"}=t,y=j(t,Pn),E=c.useRef(null),m=c.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Oe(()=>{s&&E.current.focus()},[s]),c.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(u,{direction:g})=>{const x=!E.current.style.width;if(u.clientHeight<E.current.clientHeight&&x){const k=`${ot(K(u))}px`;E.current.style[g==="rtl"?"paddingLeft":"paddingRight"]=k,E.current.style.width=`calc(100% + ${k})`}return E.current}}),[]);const C=u=>{const g=E.current,x=u.key,k=K(g).activeElement;if(x==="ArrowDown")u.preventDefault(),me(g,k,d,l,Ie);else if(x==="ArrowUp")u.preventDefault(),me(g,k,d,l,Je);else if(x==="Home")u.preventDefault(),me(g,null,d,l,Ie);else if(x==="End")u.preventDefault(),me(g,null,d,l,Je);else if(x.length===1){const v=m.current,I=x.toLowerCase(),_=performance.now();v.keys.length>0&&(_-v.lastTime>500?(v.keys=[],v.repeating=!0,v.previousKeyMatched=!0):v.repeating&&I!==v.keys[0]&&(v.repeating=!1)),v.lastTime=_,v.keys.push(I);const O=k&&!v.repeating&&ct(k,v);v.previousKeyMatched&&(O||me(g,k,!1,l,Ie,v))?u.preventDefault():v.previousKeyMatched=!1}f&&f(u)},R=Z(E,n);let b=-1;c.Children.forEach(i,(u,g)=>{if(!c.isValidElement(u)){b===g&&(b+=1,b>=i.length&&(b=-1));return}u.props.disabled||(p==="selectedMenu"&&u.props.selected||b===-1)&&(b=g),b===g&&(u.props.disabled||u.props.muiSkipListHighlight||u.type.muiSkipListHighlight)&&(b+=1,b>=i.length&&(b=-1))});const D=c.Children.map(i,(u,g)=>{if(g===b){const x={};return r&&(x.autoFocus=!0),u.props.tabIndex===void 0&&p==="selectedMenu"&&(x.tabIndex=0),c.cloneElement(u,x)}return u});return $.jsx(yn,h({role:"menu",ref:R,className:a,onKeyDown:C,tabIndex:s?0:-1},y,{children:D}))});function Rn(e){return ne("MuiPopover",e)}oe("MuiPopover",["root","paper"]);const Tn=["onEntering"],Cn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],kn=["slotProps"];function Qe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function et(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function tt(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function $e(e){return typeof e=="function"?e():e}const Nn=e=>{const{classes:t}=e;return re({root:["root"],paper:["paper"]},Rn,t)},Mn=G(pn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ut=G(Ot,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),wn=c.forwardRef(function(t,n){var o,s,r;const i=te({props:t,name:"MuiPopover"}),{action:a,anchorEl:l,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:f,anchorReference:p="anchorEl",children:y,className:E,container:m,elevation:C=8,marginThreshold:R=16,open:b,PaperProps:D={},slots:u,slotProps:g,transformOrigin:x={vertical:"top",horizontal:"left"},TransitionComponent:k=lt,transitionDuration:v="auto",TransitionProps:{onEntering:I}={},disableScrollLock:_=!1}=i,O=j(i.TransitionProps,Tn),z=j(i,Cn),F=(o=g==null?void 0:g.paper)!=null?o:D,L=c.useRef(),N=Z(L,F.ref),P=h({},i,{anchorOrigin:d,anchorReference:p,elevation:C,marginThreshold:R,externalPaperSlotProps:F,transformOrigin:x,TransitionComponent:k,transitionDuration:v,TransitionProps:O}),S=Nn(P),T=c.useCallback(()=>{if(p==="anchorPosition")return f;const w=$e(l),B=(w&&w.nodeType===1?w:K(L.current).body).getBoundingClientRect();return{top:B.top+Qe(B,d.vertical),left:B.left+et(B,d.horizontal)}},[l,d.horizontal,d.vertical,f,p]),M=c.useCallback(w=>({vertical:Qe(w,x.vertical),horizontal:et(w,x.horizontal)}),[x.horizontal,x.vertical]),H=c.useCallback(w=>{const A={width:w.offsetWidth,height:w.offsetHeight},B=M(A);if(p==="none")return{top:null,left:null,transformOrigin:tt(B)};const _e=T();let le=_e.top-B.vertical,ce=_e.left-B.horizontal;const Ae=le+A.height,He=ce+A.width,je=Ee($e(l)),ze=je.innerHeight-R,Be=je.innerWidth-R;if(R!==null&&le<R){const W=le-R;le-=W,B.vertical+=W}else if(R!==null&&Ae>ze){const W=Ae-ze;le-=W,B.vertical+=W}if(R!==null&&ce<R){const W=ce-R;ce-=W,B.horizontal+=W}else if(He>Be){const W=He-Be;ce-=W,B.horizontal+=W}return{top:`${Math.round(le)}px`,left:`${Math.round(ce)}px`,transformOrigin:tt(B)}},[l,p,T,M,R]),[q,xe]=c.useState(b),U=c.useCallback(()=>{const w=L.current;if(!w)return;const A=H(w);A.top!==null&&(w.style.top=A.top),A.left!==null&&(w.style.left=A.left),w.style.transformOrigin=A.transformOrigin,xe(!0)},[H]);c.useEffect(()=>(_&&window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)),[l,_,U]);const be=(w,A)=>{I&&I(w,A),U()},J=()=>{xe(!1)};c.useEffect(()=>{b&&U()}),c.useImperativeHandle(a,()=>b?{updatePosition:()=>{U()}}:null,[b,U]),c.useEffect(()=>{if(!b)return;const w=xt(()=>{U()}),A=Ee(l);return A.addEventListener("resize",w),()=>{w.clear(),A.removeEventListener("resize",w)}},[l,b,U]);let Y=v;v==="auto"&&!k.muiSupportAuto&&(Y=void 0);const se=m||(l?K($e(l)).body:void 0),ie=(s=u==null?void 0:u.root)!=null?s:Mn,pe=(r=u==null?void 0:u.paper)!=null?r:ut,he=fe({elementType:pe,externalSlotProps:h({},F,{style:q?F.style:h({},F.style,{opacity:0})}),additionalProps:{elevation:C,ref:N},ownerState:P,className:V(S.paper,F==null?void 0:F.className)}),ae=fe({elementType:ie,externalSlotProps:(g==null?void 0:g.root)||{},externalForwardedProps:z,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:se,open:b},ownerState:P,className:V(S.root,E)}),{slotProps:Ce}=ae,ke=j(ae,kn);return $.jsx(ie,h({},ke,!rt(ie)&&{slotProps:Ce,disableScrollLock:_},{children:$.jsx(k,h({appear:!0,in:b,onEntering:be,onExited:J,timeout:Y},O,{children:$.jsx(pe,h({},he,{children:y}))}))}))});function In(e){return ne("MuiMenu",e)}oe("MuiMenu",["root","paper","list"]);const $n=["onEntering"],On=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Dn={vertical:"top",horizontal:"right"},Fn={vertical:"top",horizontal:"left"},Ln=e=>{const{classes:t}=e;return re({root:["root"],paper:["paper"],list:["list"]},In,t)},_n=G(wn,{shouldForwardProp:e=>Et(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),An=G(ut,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Hn=G(Sn,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Gn=c.forwardRef(function(t,n){var o,s;const r=te({props:t,name:"MuiMenu"}),{autoFocus:i=!0,children:a,className:l,disableAutoFocusItem:d=!1,MenuListProps:f={},onClose:p,open:y,PaperProps:E={},PopoverClasses:m,transitionDuration:C="auto",TransitionProps:{onEntering:R}={},variant:b="selectedMenu",slots:D={},slotProps:u={}}=r,g=j(r.TransitionProps,$n),x=j(r,On),k=mt(),v=h({},r,{autoFocus:i,disableAutoFocusItem:d,MenuListProps:f,onEntering:R,PaperProps:E,transitionDuration:C,TransitionProps:g,variant:b}),I=Ln(v),_=i&&!d&&y,O=c.useRef(null),z=(M,H)=>{O.current&&O.current.adjustStyleForScrollbar(M,{direction:k?"rtl":"ltr"}),R&&R(M,H)},F=M=>{M.key==="Tab"&&(M.preventDefault(),p&&p(M,"tabKeyDown"))};let L=-1;c.Children.map(a,(M,H)=>{c.isValidElement(M)&&(M.props.disabled||(b==="selectedMenu"&&M.props.selected||L===-1)&&(L=H))});const N=(o=D.paper)!=null?o:An,P=(s=u.paper)!=null?s:E,S=fe({elementType:D.root,externalSlotProps:u.root,ownerState:v,className:[I.root,l]}),T=fe({elementType:N,externalSlotProps:P,ownerState:v,className:I.paper});return $.jsx(_n,h({onClose:p,anchorOrigin:{vertical:"bottom",horizontal:k?"right":"left"},transformOrigin:k?Dn:Fn,slots:{paper:N,root:D.root},slotProps:{root:S,paper:T},open:y,ref:n,transitionDuration:C,TransitionProps:h({onEntering:z},g),ownerState:v},x,{classes:m,children:$.jsx(Hn,h({onKeyDown:F,actions:O,autoFocus:i&&(L===-1||d),autoFocusItem:_,variant:b},f,{className:V(I.list,f.className),children:a}))}))});export{Lt as F,gn as L,pn as M,Ot as P,X as T,bt as a,Kn as b,Wn as c,Vn as d,it as e,xt as f,Te as g,at as h,Re as i,Gn as j,yn as k,K as l,yt as m,Un as n,Ee as o,rt as p,Pt as r,fe as u};
