(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{82:function(e,n,t){"use strict";t.r(n);var c,i,r,a,s,o=t(2),l=t.n(o),d=t(18),j=t.n(d),b=t(16),x=t(49),u=t(7),h=t(3),p=t(9),O=t(4),f={gray:{0:"#f8f9fa",1:"#f1f3f5",2:"#e9ecef",3:"#dee2e6",4:"#ced4da",5:"#adb5bd",6:"#868e96",7:"#495057",8:"#343a40",9:"#212529"},red:{0:"#fff5f5",1:"#ffe3e3",2:"#ffc9c9",3:"#ffa8a8",4:"#ff8787",5:"#ff6b6b",6:"#fa5252",7:"#f03e3e",8:"#e03131",9:"#c92a2a"},pink:{0:"#fff0f6",1:"#ffdeeb",2:"#fcc2d7",3:"#faa2c1",4:"#f783ac",5:"#f06595",6:"#e64980",7:"#d6336c",8:"#c2255c",9:"#a61e4d"},grape:{0:"#f8f0fc",1:"#f3d9fa",2:"#eebefa",3:"#e599f7",4:"#da77f2",5:"#cc5de8",6:"#be4bdb",7:"#ae3ec9",8:"#9c36b5",9:"#862e9c"},blue:{0:"#e7f5ff",1:"#d0ebff",2:"#a5d8ff",3:"#74c0fc",4:"#4dabf7",5:"#339af0",6:"#228be6",7:"#1c7ed6",8:"#1971c2",9:"#1864ab"}},g=t(8),v=t(5),m=t(83),w=function(e){return Object(O.b)(c||(c=Object(h.a)(["\n  &.fade-enter {\n    opacity: 0;\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transition: opacity 250ms;\n  }\n  &.fade-exit {\n    opacity: 1;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n"])))},y=function(e){return Object(O.b)(i||(i=Object(h.a)(["\n  &.bottom-enter {\n    transform: translateY(100%);\n  }\n  &.bottom-enter-active {\n    transform: translateY(0%);\n    transition: transform 250ms;\n  }\n  &.bottom-exit {\n    transform: translateY(0%);\n  }\n  &.bottom-exit-active {\n    transform: translateY(100%);\n    transition: transform 200ms;\n  }\n"])))},k=t(50),C=t(1);var z,N=function(e){var n=e.children,t=e.visible,c=e.onClose,i=e.zIndex,r=void 0===i?20:i,a=Object(o.useRef)(null),s=Object(o.useRef)(null),l=Object(o.useState)(!1),d=Object(v.a)(l,2),j=d[0],b=d[1],x=Object(u.f)(),h=Object(o.useCallback)((function(){b(!0),c()}),[c]),p=Object(o.useCallback)((function(){return window.history.pushState(null,"",window.location.href),window.addEventListener("popstate",h),b(!1),function(){window.removeEventListener("popstate",h)}}),[]);return Object(k.a)(s,c),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(m.a,{in:t,nodeRef:a,timeout:{enter:250,exit:200},unmountOnExit:!0,classNames:"fade",onEntered:p,onExited:function(){j||x.goBack()},children:Object(C.jsx)(I,{ref:a})}),Object(C.jsx)(m.a,{in:t,nodeRef:s,timeout:{enter:250,exit:200},unmountOnExit:!0,classNames:"bottom",children:Object(C.jsxs)(S,{zIndex:r,ref:s,children:[Object(C.jsx)(D,{onClick:c,children:Object(C.jsx)(g.j,{})}),n]})})]})},I=O.c.div(r||(r=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  left: 100vw - 768px;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100vw;\n  max-width: 768px;\n  height: 100%;\n  z-index: 10;\n  ","\n"])),w()),S=O.c.div(a||(a=Object(h.a)(["\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  max-width: 768px;\n  width: 100vw;\n  max-height: 70%;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  padding: 48px 24px 70px 24px;\n  z-index: ",";\n  ","\n"])),(function(e){return e.zIndex}),y()),D=O.c.div(s||(s=Object(h.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 24px;\n  right: 24px;\n  font-size: 32px;\n  display: inline-flex;\n"]))),E=t(47);var R=function(e){Object(p.a)(e);var n=Object(o.useRef)(null),t=Object(o.useCallback)((function(e){console.log(e)}),[]);return Object(o.useCallback)((function(e){}),[]),Object(o.useEffect)((function(){window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"776507555025-pmue89ta15dvgre537u1ge9l2ee450g1.apps.googleusercontent.com",cookiepolicy:"single_host_origin"}).attachClickHandler(n.current,{},(function(e){t(e)}))}))}),[t]),Object(C.jsxs)(P,{ref:n,id:"google-login-button",children:[Object(C.jsx)(E.a,{}),"Sign in with Google"]})},P=O.c.button(z||(z=Object(h.a)(["\n  border: none;\n  outline: none;\n  background: none;\n  padding: 0;\n  width: 100%;\n  display: inline-flex;\n  height: 54px;\n  background: white;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all ease-in 0.125s;\n  border-radius: 7px;\n  border: 1px solid ",";\n  svg {\n    font-size: 24px;\n    margin-right: 8px;\n  }\n  &:hover {\n    box-shadow: 0px 0.25rem 0.5rem rgb(0 0 0 / 11%);\n  }\n"])),f.gray[3]);var L,M,A,F,H,V,B=function(){Object(u.f)();var e=Object(o.useState)(!1),n=Object(v.a)(e,2),t=n[0],c=n[1],i=Object(o.useCallback)((function(){c(!1)}),[]);return{isOpenModal:t,setIsOpenModal:c,onClose:i}};var G,K,T=function(e){Object(p.a)(e);var n=B(),t=n.isOpenModal,c=n.setIsOpenModal,i=n.onClose,r=Object(u.g)();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(W,{children:Object(C.jsxs)(Y,{children:[Object(C.jsxs)(_,{to:"/workspaces",children:[Object(C.jsx)(J,{children:Object(C.jsx)(g.a,{})}),Object(C.jsx)(U,{children:"Workspaces"})]}),Object(C.jsxs)(_,{to:"/login",onClick:function(e){e.preventDefault(),c(!0)},children:[Object(C.jsx)(J,{children:Object(C.jsx)(g.g,{})}),Object(C.jsx)(U,{children:"Sign In"})]}),Object(C.jsxs)(_,{to:{pathname:"/login",state:{background:r}},children:[Object(C.jsx)(J,{children:Object(C.jsx)(g.f,{})}),Object(C.jsx)(U,{children:"Sales"})]})]})}),Object(C.jsx)(N,{visible:t,zIndex:40,onClose:i,children:Object(C.jsxs)($,{children:[Object(C.jsx)("h3",{children:"Hello, Manager"}),Object(C.jsx)("div",{className:"button-block",onClick:i,children:Object(C.jsx)(R,{})})]})})]})},W=O.c.div(L||(L=Object(h.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  z-index: 30;\n"]))),Y=O.c.div(M||(M=Object(h.a)(["\n  max-width: 768px;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 16px;\n"])),f.gray[2],f.gray[2]),_=Object(O.c)(b.b)(A||(A=Object(h.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  height: 100%;\n  color: ",";\n\n  &:hover,\n  &.active {\n    color: ",";\n  }\n"])),f.gray[7],f.blue[9]),J=O.c.div(F||(F=Object(h.a)(["\n  font-size: 24px;\n  margin-bottom: -5px;\n"]))),U=O.c.div(H||(H=Object(h.a)(["\n  font-size: 12px;\n"]))),$=O.c.div(V||(V=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  h3 {\n    font-size: 24px;\n    text-align: center;\n  }\n  .button-block {\n    width: 100%;\n  }\n"])));var q,Q,X,Z=function(e){var n=e.children;return Object(C.jsx)(ee,{children:Object(C.jsx)(ne,{children:n})})},ee=O.c.div(G||(G=Object(h.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n"]))),ne=O.c.div(K||(K=Object(h.a)(["\n  background: #fff;\n  max-width: 768px;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 56px;\n"])));var te,ce=function(e){var n=e.children,t=(e.onClose,e.zIndex),c=void 0===t?40:t,i=Object(o.useState)(!1),r=Object(v.a)(i,2),a=r[0],s=r[1],d=l.a.useRef(null),j=l.a.useRef(null),b=Object(u.f)();return Object(o.useEffect)((function(){s(!0)}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(m.a,{in:a,nodeRef:d,timeout:{enter:250,exit:200},unmountOnExit:!0,classNames:"fade",onExited:function(){return b.goBack()},children:Object(C.jsx)(ie,{ref:d})}),Object(C.jsx)(m.a,{in:a,nodeRef:j,timeout:{enter:250,exit:200},unmountOnExit:!0,classNames:"bottom",children:Object(C.jsxs)(re,{zIndex:c,ref:j,children:[Object(C.jsx)(ae,{onClick:function(e){s(!1)},children:Object(C.jsx)(g.j,{})}),n]})})]})},ie=O.c.div(q||(q=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  left: 100vw - 768px;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100vw;\n  max-width: 768px;\n  height: 100%;\n  z-index: 10;\n  ","\n"])),w()),re=O.c.div(Q||(Q=Object(h.a)(["\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  max-width: 768px;\n  width: 100vw;\n  max-height: 70%;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  padding: 48px 24px 70px 24px;\n  z-index: ",";\n  ","\n"])),(function(e){return e.zIndex}),y()),ae=O.c.div(X||(X=Object(h.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 24px;\n  right: 24px;\n  font-size: 32px;\n  display: inline-flex;\n"])));var se,oe,le,de=function(e){Object(p.a)(e);var n=B(),t=(n.isOpenModal,n.setIsOpenModal,n.onClose);return Object(u.f)(),Object(C.jsx)(ce,{onClose:t,children:Object(C.jsxs)(je,{children:[Object(C.jsx)("h3",{children:"Hello, Manager"}),Object(C.jsx)("div",{className:"button-block",children:Object(C.jsx)(R,{})})]})})},je=O.c.div(te||(te=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  h3 {\n    font-size: 24px;\n    text-align: center;\n  }\n  .button-block {\n    width: 100%;\n  }\n"])));var be,xe,ue=function(e){var n=e.title,t=Object(u.f)();return Object(C.jsxs)(he,{children:[Object(C.jsx)(Oe,{onClick:function(){return t.goBack()},children:Object(C.jsx)(g.j,{})}),Object(C.jsx)(pe,{children:n})]})},he=O.c.div(se||(se=Object(h.a)(["\n  position: fixed;\n  max-width: 768px;\n  width: 100%;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 16px;\n  background: #fff;\n  /* box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.125); */\n"]))),pe=O.c.h3(oe||(oe=Object(h.a)(["\n  font-size: 24px;\n"]))),Oe=O.c.div(le||(le=Object(h.a)(["\n  position: absolute;\n  cursor: pointer;\n  left: 16px;\n  top: 16px;\n  font-size: 24px;\n"])));var fe=function(e){var n=e.children,t=e.header;return Object(C.jsxs)(ge,{children:[t,Object(C.jsx)(ve,{header:t,children:n})]})},ge=O.c.div(be||(be=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n"]))),ve=O.c.div(xe||(xe=Object(h.a)(["\n  height: 100%;\n  padding-top: ",";\n"])),(function(e){return e.header?"72px":"16px"}));var me,we,ye,ke=function(e){return Object(p.a)(e),Object(C.jsx)(fe,{header:Object(C.jsx)(ue,{title:"Locations"}),children:"Locations"})};var Ce,ze=function(e){return Object(p.a)(e),Object(C.jsxs)(Ne,{children:[Object(C.jsx)(Ie,{children:Object(C.jsx)("input",{})}),Object(C.jsx)(Se,{})]})},Ne=O.c.div(me||(me=Object(h.a)(["\n  width: 100%;\n  border-bottom: 1px solid ",";\n  padding: 0 16px 16px 16px;\n"])),f.gray[2]),Ie=O.c.div(we||(we=Object(h.a)(["\n  border: 1px solid ","; // #DDDDDD\n  height: 62px;\n  width: 100%;\n  border-radius: 54px;\n  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%);\n  display: flex;\n  padding: 8px 32px 8px 32px;\n  input {\n    border: none;\n    width: 100%;\n    font-size: 24px;\n    font-weight: bold;\n  }\n"])),f.gray[3]),Se=O.c.div(ye||(ye=Object(h.a)([""])));var De=function(e){return Object(p.a)(e),Object(C.jsx)(Ee,{children:Object(C.jsx)(ze,{})})},Ee=O.c.div(Ce||(Ce=Object(h.a)([""])));var Re,Pe,Le,Me,Ae,Fe,He,Ve=function(e){return Object(p.a)(e),Object(C.jsx)(fe,{header:Object(C.jsx)(ue,{title:"\uace0\uac1d / \uac70\ub798\ucc98"}),children:Object(C.jsx)(De,{})})},Be=t(11),Ge=t.n(Be),Ke=t(22),Te=t(6),We=t(19);var Ye,_e,Je,Ue,$e,qe,Qe,Xe,Ze,en,nn,tn,cn=function(e){var n=e.icon,t=e.placeholder,c=e.label,i=e.value,r=(e.setValue,e.onChange),a=e.error,s=Object(We.a)(e,["icon","placeholder","label","value","setValue","onChange","error"]);return Object(C.jsxs)(rn,Object(Te.a)(Object(Te.a)({},s),{},{children:[c&&Object(C.jsx)(an,{children:c}),Object(C.jsxs)(sn,{children:[n&&Object(C.jsx)(on,{children:n}),Object(C.jsx)(ln,{value:i,placeholder:t,autoComplete:"off",onChange:r}),i&&Object(C.jsx)(dn,{children:Object(C.jsx)(g.j,{})})]}),a&&Object(C.jsx)(jn,{children:a})]}))},rn=O.c.div(Re||(Re=Object(h.a)(["\n  margin: 8px 0;\n"]))),an=O.c.div(Pe||(Pe=Object(h.a)(["\n  margin-bottom: 6px;\n  font-size: 16px;\n"]))),sn=O.c.div(Le||(Le=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 0 16px;\n  align-items: center;\n  &:focus-within {\n    border: 1px solid ",";\n  }\n"])),f.gray[5],f.gray[8]),on=O.c.div(Me||(Me=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  margin-right: 8px;\n  color: ",";\n"])),f.gray[6]),ln=O.c.input(Ae||(Ae=Object(h.a)(["\n  width: 100%;\n  outline: none;\n  border: none;\n  font-size: 16px;\n"]))),dn=O.c.div(Fe||(Fe=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  color: ",";\n"])),f.gray[6]),jn=O.c.div(He||(He=Object(h.a)([""])));function bn(e){var n=e.children,t=e.selectedIndex,c=e.index;return Object(C.jsx)(wn,{selected:c===t,children:n})}var xn=function(e){var n=e.children,t=e.icon,c=e.placeholder,i=e.label,r=e.value,a=(e.setValue,e.isSelected),s=(e.setIsSelected,e.onChange),l=e.error,d=e.selectedIndex,j=e.setSelectedIndex,b=e.isEnter,x=e.dataList,u=Object(We.a)(e,["children","icon","placeholder","label","value","setValue","isSelected","setIsSelected","onChange","error","selectedIndex","setSelectedIndex","isEnter","dataList"]),h=Object(o.useRef)(null),p=Object(o.useRef)(null),O=Object(o.useState)(!1),f=Object(v.a)(O,2),m=f[0],w=f[1];return Object(o.useEffect)((function(){m||j(-2)}),[m,j]),Object(o.useEffect)((function(){if(!r)return w(!1);w(!0)}),[r]),Object(C.jsxs)(un,Object(Te.a)(Object(Te.a)({},u),{},{children:[i&&Object(C.jsx)(hn,{children:i}),Object(C.jsxs)(pn,{onClick:function(){var e;null===(e=h.current)||void 0===e||e.focus(),w(!m)},children:[t&&Object(C.jsx)(On,{children:t}),Object(C.jsxs)(yn,{children:[a&&a.map((function(e,n){return Object(C.jsxs)(kn,{onClick:function(e){return e.stopPropagation()},children:[Object(C.jsx)("div",{className:"label",children:e}),Object(C.jsx)("div",{className:"removeIcon",children:Object(C.jsx)(g.j,{})})]},n)})),Object(C.jsx)(fn,Object(Te.a)({value:r,placeholder:c,autoComplete:"off",onChange:s,onKeyDown:function(e){if(["ArrowDown","ArrowUp","Enter"].includes(e.key))switch(e.preventDefault(),e.key){case"ArrowUp":if(d-1===-2||-2===d)return void j(-2);if(j(d-1),!p.current)return;return void(p.current.scrollTop>p.current.children[0].clientHeight*d&&p.current.scrollBy(0,-p.current.children[0].clientHeight));case"ArrowDown":if(d===x.length-1)return;if(j(d+1),!p.current)return;return void(p.current.clientHeight+p.current.scrollTop<p.current.children[0].clientHeight*(d+3)&&p.current.scrollBy(0,p.current.children[0].clientHeight));case"Enter":if(-1===d||-2===d)return console.log(r);var n=null===x||void 0===x?void 0:x[d];if(!b)return;return void b(n)}},autoWidth:r.replace(/[a-z0-9]|[ [\]{}()<>?|`~!@#$%^&*-_+=,.;:"'\\]/g,"")?16*r.length:10*r.length,ref:h},u))]}),r&&Object(C.jsx)(gn,{children:Object(C.jsx)(g.j,{})})]}),l&&Object(C.jsx)(vn,{children:l}),m&&Object(C.jsx)(mn,{ref:p,onKeyDown:function(e){return e.stopPropagation()},children:n})]}))},un=O.c.div(Ye||(Ye=Object(h.a)(["\n  margin: 8px 0;\n  position: relative;\n"]))),hn=O.c.div(_e||(_e=Object(h.a)(["\n  margin-bottom: 6px;\n"]))),pn=O.c.div(Je||(Je=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  min-height: 3rem;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 8px 16px;\n  align-items: center;\n  &:focus-within {\n    border: 1px solid ",";\n  }\n"])),f.gray[5],f.gray[8]),On=O.c.div(Ue||(Ue=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  margin-right: 8px;\n  color: ",";\n"])),f.gray[6]),fn=O.c.input($e||($e=Object(h.a)(["\n  outline: none;\n  border: none;\n  font-size: 16px;\n  width: calc(16px + ","px);\n"])),(function(e){return e.autoWidth})),gn=O.c.div(qe||(qe=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  color: ",";\n"])),f.gray[6]),vn=O.c.div(Qe||(Qe=Object(h.a)([""]))),mn=O.c.div(Xe||(Xe=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  max-height: 172px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);\n  margin-top: 8px;\n  margin-bottom: 16px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  scroll-padding-bottom: 4px;\n  scroll-padding-top: 4px;\n"]))),wn=O.c.div(Ze||(Ze=Object(h.a)(["\n  padding: 8px 18px;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  ","\n"])),(function(e){return e.selected&&Object(O.b)(en||(en=Object(h.a)(["\n      background: ",";\n    "])),f.gray[2])})),yn=O.c.div(nn||(nn=Object(h.a)(["\n  display: flex;\n  flex: 1 1 0%;\n  flex-wrap: wrap;\n  overflow: hidden;\n  align-content: center;\n"]))),kn=O.c.div(tn||(tn=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 2px 6px;\n  background: ",";\n  border: 1px solid ",";\n  margin: 3px;\n  .label {\n    font-size: 12px;\n  }\n  .removeIcon {\n    line-height: 12px;\n  }\n"])),f.gray[3],f.gray[6]),Cn=[{id:1,name:"\uc804\uad6d"},{id:2,name:"\uc11c\uc6b8"},{id:3,name:"\ubd80\uc0b0"},{id:4,name:"\ub300\uad6c"},{id:5,name:"\ub300\uc804"},{id:6,name:"\uc138\uc885"},{id:7,name:"\uc6b8\uc0b0"}];var zn,Nn=function(e){Object(p.a)(e);var n=Object(o.useState)(""),t=Object(v.a)(n,2),c=t[0],i=t[1],r=Object(o.useState)(["\uc804\uad6d","\ub300\uc804","\uc138\uc885","\uc6b8\uc0b0","\ubd80\uc0b0","\ub300\uad6c","\uad11\uc8fc","\uc601\ub3d9","\ubcf4\uc740","\uae08\uc0b0"]),a=Object(v.a)(r,2),s=a[0],l=a[1],d=Object(o.useState)(-2),j=Object(v.a)(d,2),b=j[0],x=j[1];return Object(C.jsxs)(xn,{selectedIndex:b,setSelectedIndex:x,label:"\uc0ac\uc6a9\uc9c0\uc5ed",value:c,setValue:i,isSelected:s,setIsSelected:l,onChange:function(e){return i(e.target.value)},isEnter:function(e){return function(e){return console.log("\ud14c\uc2a4\ud2b8",e)}(e)},dataList:Cn,children:[Object(C.jsx)(bn,{index:-1,selectedIndex:b,children:c}),Cn.map((function(e,n){return Object(C.jsx)(bn,{index:n,selectedIndex:b,children:e.name},n)}))]})};var In=function(e){Object(p.a)(e);var n=Object(o.useState)(""),t=Object(v.a)(n,2),c=t[0],i=t[1],r=Object(o.useState)(""),a=Object(v.a)(r,2),s=a[0];return a[1],Object(C.jsxs)(Sn,{children:[Object(C.jsx)(cn,{label:"\uc774\ub984",value:c,setValue:i,icon:Object(C.jsx)(g.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(C.jsx)(cn,{label:"\uc5f0\ub77d\ucc98",value:c,setValue:i,icon:Object(C.jsx)(g.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(C.jsx)(cn,{label:"\uc8fc\uc18c",value:c,setValue:i,icon:Object(C.jsx)(g.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(C.jsx)(Nn,{}),Object(C.jsx)(cn,{label:"\uc8fc\uc18c",value:c,setValue:i,icon:Object(C.jsx)(g.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}})]})},Sn=O.c.form(zn||(zn=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0 16px;\n"]))),Dn=t(48),En=t.n(Dn).a.create({withCredentials:!0});En.defaults.baseURL="https://api.jaewoomade.xyz";var Rn=En;function Pn(){return Ln.apply(this,arguments)}function Ln(){return(Ln=Object(Ke.a)(Ge.a.mark((function e(){var n,t;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Rn.get("example/list");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Mn,An,Fn,Hn=function(e){Object(p.a)(e);var n=Object(o.useState)([]),t=Object(v.a)(n,2),c=(t[0],t[1]);return Object(o.useEffect)((function(){(function(){var e=Object(Ke.a)(Ge.a.mark((function e(){var n;return Ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Pn();case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(C.jsx)(fe,{header:Object(C.jsx)(ue,{title:"Create Individual AccountPage"}),children:Object(C.jsx)(In,{})})};var Vn,Bn,Gn=function(e){return Object(p.a)(e),Object(C.jsxs)(fe,{header:Object(C.jsx)(ue,{title:"Workspaces"}),children:[Object(C.jsx)(Kn,{children:Object(C.jsxs)(Tn,{children:[Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)(g.i,{})}),Object(C.jsx)("div",{className:"label",children:"Dashboard"})]})}),Object(C.jsx)(Kn,{children:Object(C.jsxs)(Tn,{children:[Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)(g.d,{})}),Object(C.jsx)("div",{className:"label",children:"Reports"})]})}),Object(C.jsxs)(Kn,{children:[Object(C.jsxs)(Tn,{children:[Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)(g.e,{})}),Object(C.jsx)("div",{className:"label",children:"Goods"})]}),Object(C.jsx)(Wn,{to:"",children:Object(C.jsx)("div",{className:"label",children:"Create Sale Goods"})}),Object(C.jsx)(Wn,{to:"",children:Object(C.jsx)("div",{className:"label",children:"Sale Goods"})}),Object(C.jsx)(Wn,{to:"",children:Object(C.jsx)("div",{className:"label",children:"Inventroy"})})]}),Object(C.jsx)(Kn,{children:Object(C.jsxs)(Tn,{children:[Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)(g.h,{})}),Object(C.jsx)("div",{className:"label",children:"Sale"})]})}),Object(C.jsx)(Kn,{children:Object(C.jsxs)(Tn,{children:[Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)(g.b,{})}),Object(C.jsx)("div",{className:"label",children:"Purchase"})]})}),Object(C.jsxs)(Kn,{children:[Object(C.jsxs)(Tn,{children:[Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)(g.g,{})}),Object(C.jsx)("div",{className:"label",children:"AccountPage"})]}),Object(C.jsx)(Wn,{to:"/workspaces/AccountPage",children:Object(C.jsx)("div",{className:"label",children:"AccountPage"})}),Object(C.jsx)(Wn,{to:"/workspaces/create/individual",children:Object(C.jsx)("div",{className:"label",children:"Create Individual"})}),Object(C.jsx)(Wn,{to:"",onClick:function(e){return e.preventDefault()},children:Object(C.jsx)("div",{className:"label",children:"Create Company"})})]}),Object(C.jsx)(Kn,{children:Object(C.jsxs)(Tn,{children:[Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)(g.c,{})}),Object(C.jsx)("div",{className:"label",children:"Log"})]})}),Object(C.jsxs)(Kn,{children:[Object(C.jsxs)(Tn,{children:[Object(C.jsx)("div",{className:"icon",children:Object(C.jsx)(g.g,{})}),Object(C.jsx)("div",{className:"label",children:"Settings"})]}),Object(C.jsx)(Wn,{to:"/settings/locations",children:Object(C.jsx)("div",{className:"label",children:"Locations"})})]})]})},Kn=O.c.div(Mn||(Mn=Object(h.a)(["\n  & + & {\n    margin-top: 16px;\n  }\n"]))),Tn=O.c.div(An||(An=Object(h.a)(["\n  height: 32px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n  }\n  .icon {\n    font-size: 24px;\n    padding-top: 6px;\n    margin-right: 16px;\n  }\n  .label {\n    font-weight: bold;\n    font-size: 18px;\n  }\n"])),f.gray[2]),Wn=Object(O.c)(b.b)(Fn||(Fn=Object(h.a)(["\n  text-decoration: none;\n  height: 32px;\n  display: flex;\n  color: ",";\n  &:hover {\n    background: ",";\n  }\n  .label {\n    line-height: 32px;\n    height: 32px;\n    font-size: 18px;\n    padding-left: 56px;\n  }\n"])),f.gray[9],f.gray[2]),Yn=Object(O.a)(Vn||(Vn=Object(h.a)(["",""])),Object(O.b)(Bn||(Bn=Object(h.a)(["\n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n  html {\n    box-sizing: border-box;\n\n    * {\n      box-sizing: inherit;\n    }\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',\n      'Apple SD Gothic Neo', 'Malgun Gothic', '\ub9d1\uc740 \uace0\ub515', \ub098\ub214\uace0\ub515,\n      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, \ub3cb\uc6c0, Dotum,\n      Tahoma, Geneva, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 0;\n    padding: 0;\n    background: ",";\n  }\n"])),f.gray[2]));var _n=function(){var e=Object(u.g)(),n=e.state&&e.state.background;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Yn,{}),Object(C.jsxs)(Z,{children:[Object(C.jsxs)(u.c,{location:n||e,children:[Object(C.jsx)(u.a,{exact:!0,path:"/",children:"\ud648"}),Object(C.jsx)(u.a,{exact:!0,path:"/workspaces",children:Object(C.jsx)(Gn,{})}),Object(C.jsx)(u.a,{exact:!0,path:"/workspaces/create/individual",children:Object(C.jsx)(Hn,{})}),Object(C.jsx)(u.a,{exact:!0,path:"/workspaces/AccountPage",children:Object(C.jsx)(Ve,{})}),Object(C.jsx)(u.a,{exact:!0,path:"/settings/locations",children:Object(C.jsx)(ke,{})}),Object(C.jsx)(u.a,{exact:!0,path:"/sales",children:"Sales"})]}),n&&Object(C.jsx)(u.a,{path:"/login",children:Object(C.jsx)(de,{})}),Object(C.jsx)(T,{})]})]})},Jn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,84)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};j.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(x.a,{children:Object(C.jsx)(b.a,{basename:"/",children:Object(C.jsx)(_n,{})})})}),document.getElementById("root")),Jn()}},[[82,1,2]]]);
//# sourceMappingURL=main.050162a8.chunk.js.map