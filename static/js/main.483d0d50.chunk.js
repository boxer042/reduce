(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{81:function(e,n,t){"use strict";t.r(n);var c,i,r,a,s,o=t(2),l=t.n(o),d=t(18),j=t.n(d),b=t(16),x=t(49),h=t(8),u=t(3),p=t(5),O=t(10),f=t(4),g={gray:{0:"#f8f9fa",1:"#f1f3f5",2:"#e9ecef",3:"#dee2e6",4:"#ced4da",5:"#adb5bd",6:"#868e96",7:"#495057",8:"#343a40",9:"#212529"},red:{0:"#fff5f5",1:"#ffe3e3",2:"#ffc9c9",3:"#ffa8a8",4:"#ff8787",5:"#ff6b6b",6:"#fa5252",7:"#f03e3e",8:"#e03131",9:"#c92a2a"},pink:{0:"#fff0f6",1:"#ffdeeb",2:"#fcc2d7",3:"#faa2c1",4:"#f783ac",5:"#f06595",6:"#e64980",7:"#d6336c",8:"#c2255c",9:"#a61e4d"},grape:{0:"#f8f0fc",1:"#f3d9fa",2:"#eebefa",3:"#e599f7",4:"#da77f2",5:"#cc5de8",6:"#be4bdb",7:"#ae3ec9",8:"#9c36b5",9:"#862e9c"},blue:{0:"#e7f5ff",1:"#d0ebff",2:"#a5d8ff",3:"#74c0fc",4:"#4dabf7",5:"#339af0",6:"#228be6",7:"#1c7ed6",8:"#1971c2",9:"#1864ab"}},v=t(7),m=t(83),y=t(50),w=t(1);var k,C=function(e){var n=e.children,t=e.visible,c=e.onClose,i=e.zIndex,r=void 0===i?20:i,a=l.a.useRef(null),s=l.a.useRef(null);Object(o.useEffect)((function(){return window.history.pushState({page:"modal"},window.location.pathname),document.addEventListener("keydown",d),function(){document.removeEventListener("keydown",d)}}));var d=function(e){"Escape"===e.key&&c()};return Object(y.a)(s,c),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(m.a,{in:t,nodeRef:a,timeout:{enter:250,exit:200},unmountOnExit:!0,classNames:"fade",children:Object(w.jsx)(N,{ref:a})}),Object(w.jsx)(m.a,{in:t,nodeRef:s,timeout:{enter:250,exit:200},unmountOnExit:!0,classNames:"bottom",children:Object(w.jsxs)(S,{zIndex:r,ref:s,children:[Object(w.jsx)(z,{onClick:c,children:Object(w.jsx)(v.j,{})}),n]})})]})},N=f.c.div(r||(r=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  left: 100vw - 768px;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100vw;\n  max-width: 768px;\n  height: 100%;\n  z-index: 10;\n  ","\n"])),Object(f.b)(c||(c=Object(u.a)(["\n  &.fade-enter {\n    opacity: 0;\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transition: opacity 250ms;\n  }\n  &.fade-exit {\n    opacity: 1;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n"])))),S=f.c.div(a||(a=Object(u.a)(["\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  max-width: 768px;\n  width: 100vw;\n  max-height: 70%;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  padding: 48px 24px 70px 24px;\n  z-index: ",";\n  ","\n"])),(function(e){return e.zIndex}),Object(f.b)(i||(i=Object(u.a)(["\n  &.bottom-enter {\n    transform: translateY(100%);\n  }\n  &.bottom-enter-active {\n    transform: translateY(0%);\n    transition: transform 250ms;\n  }\n  &.bottom-exit {\n    transform: translateY(0%);\n  }\n  &.bottom-exit-active {\n    transform: translateY(100%);\n    transition: transform 200ms;\n  }\n"])))),z=f.c.div(s||(s=Object(u.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 24px;\n  right: 24px;\n  font-size: 32px;\n  display: inline-flex;\n"]))),I=t(47);var E,D,L,R,A,P,V=function(e){Object(O.a)(e);var n=Object(o.useRef)(null),t=Object(o.useCallback)((function(e){console.log(e)}),[]);return Object(o.useCallback)((function(e){}),[]),Object(o.useEffect)((function(){window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"776507555025-pmue89ta15dvgre537u1ge9l2ee450g1.apps.googleusercontent.com",cookiepolicy:"single_host_origin"}).attachClickHandler(n.current,{},(function(e){t(e)}))}))}),[t]),Object(w.jsxs)(F,{ref:n,id:"google-login-button",children:[Object(w.jsx)(I.a,{}),"Sign in with Google"]})},F=f.c.button(k||(k=Object(u.a)(["\n  border: none;\n  outline: none;\n  background: none;\n  padding: 0;\n  width: 100%;\n  display: inline-flex;\n  height: 54px;\n  background: white;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all ease-in 0.125s;\n  border-radius: 7px;\n  border: 1px solid ",";\n  svg {\n    font-size: 24px;\n    margin-right: 8px;\n  }\n  &:hover {\n    box-shadow: 0px 0.25rem 0.5rem rgb(0 0 0 / 11%);\n  }\n"])),g.gray[3]);var G,H,B=function(e){Object(O.a)(e);var n=Object(o.useState)(!1),t=Object(p.a)(n,2),c=t[0],i=t[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(K,{children:Object(w.jsxs)(T,{children:[Object(w.jsxs)(M,{to:"/workspaces",children:[Object(w.jsx)(W,{children:Object(w.jsx)(v.a,{})}),Object(w.jsx)(Y,{children:"Workspaces"})]}),Object(w.jsxs)(M,{to:"/login",onClick:function(e){e.preventDefault(),i(!0)},children:[Object(w.jsx)(W,{children:Object(w.jsx)(v.g,{})}),Object(w.jsx)(Y,{children:"Sign In"})]}),Object(w.jsxs)(M,{to:"/sales",children:[Object(w.jsx)(W,{children:Object(w.jsx)(v.f,{})}),Object(w.jsx)(Y,{children:"Sales"})]})]})}),Object(w.jsx)(C,{visible:c,zIndex:40,onClose:function(){return i(!1)},children:Object(w.jsxs)(_,{children:[Object(w.jsx)("h3",{children:"Hello, Manager"}),Object(w.jsx)("div",{className:"button-block",onClick:function(){return i(!1)},children:Object(w.jsx)(V,{})})]})})]})},K=f.c.div(E||(E=Object(u.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  z-index: 30;\n"]))),T=f.c.div(D||(D=Object(u.a)(["\n  max-width: 768px;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 16px;\n"])),g.gray[3],g.gray[3]),M=Object(f.c)(b.b)(L||(L=Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  height: 100%;\n  color: ",";\n\n  &:hover,\n  &.active {\n    color: ",";\n  }\n"])),g.gray[7],g.blue[9]),W=f.c.div(R||(R=Object(u.a)(["\n  font-size: 24px;\n  margin-bottom: -5px;\n"]))),Y=f.c.div(A||(A=Object(u.a)(["\n  font-size: 12px;\n"]))),_=f.c.div(P||(P=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  h3 {\n    font-size: 24px;\n    text-align: center;\n  }\n  .button-block {\n    width: 100%;\n  }\n"])));var J,U,$,q=function(e){var n=e.children;return Object(w.jsx)(Q,{children:Object(w.jsx)(X,{children:n})})},Q=f.c.div(G||(G=Object(u.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n"]))),X=f.c.div(H||(H=Object(u.a)(["\n  background: #fff;\n  max-width: 768px;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 56px;\n"])));var Z,ee,ne=function(e){var n=e.title,t=Object(h.f)();return Object(w.jsxs)(te,{children:[Object(w.jsx)(ie,{onClick:function(){return t.goBack()},children:Object(w.jsx)(v.j,{})}),Object(w.jsx)(ce,{children:n})]})},te=f.c.div(J||(J=Object(u.a)(["\n  position: fixed;\n  max-width: 768px;\n  width: 100%;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 16px;\n  background: #fff;\n  /* box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.125); */\n"]))),ce=f.c.h3(U||(U=Object(u.a)([""]))),ie=f.c.div($||($=Object(u.a)(["\n  position: absolute;\n  cursor: pointer;\n  left: 16px;\n  top: 16px;\n  font-size: 24px;\n"])));var re=function(e){var n=e.children,t=e.header;return Object(w.jsxs)(ae,{children:[t,Object(w.jsx)(se,{header:t,children:n})]})},ae=f.c.div(Z||(Z=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n"]))),se=f.c.div(ee||(ee=Object(u.a)(["\n  height: 100%;\n  padding-top: ",";\n"])),(function(e){return e.header?"72px":"16px"}));var oe=function(e){return Object(O.a)(e),Object(w.jsx)(re,{header:Object(w.jsx)(ne,{title:"Locations"}),children:"Locations"})};var le,de,je,be,xe,he,ue,pe=function(e){return Object(O.a)(e),Object(w.jsx)(re,{children:"Account"})},Oe=t(11),fe=t.n(Oe),ge=t(22),ve=t(6),me=t(19);var ye,we,ke,Ce,Ne,Se,ze,Ie,Ee,De,Le,Re,Ae=function(e){var n=e.icon,t=e.placeholder,c=e.label,i=e.value,r=(e.setValue,e.onChange),a=e.error,s=Object(me.a)(e,["icon","placeholder","label","value","setValue","onChange","error"]);return Object(w.jsxs)(Pe,Object(ve.a)(Object(ve.a)({},s),{},{children:[c&&Object(w.jsx)(Ve,{children:c}),Object(w.jsxs)(Fe,{children:[n&&Object(w.jsx)(Ge,{children:n}),Object(w.jsx)(He,{value:i,placeholder:t,autoComplete:"off",onChange:r}),i&&Object(w.jsx)(Be,{children:Object(w.jsx)(v.j,{})})]}),a&&Object(w.jsx)(Ke,{children:a})]}))},Pe=f.c.div(le||(le=Object(u.a)(["\n  margin: 8px 0;\n"]))),Ve=f.c.div(de||(de=Object(u.a)(["\n  margin-bottom: 6px;\n  font-size: 16px;\n"]))),Fe=f.c.div(je||(je=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 0 16px;\n  align-items: center;\n  &:focus-within {\n    border: 1px solid ",";\n  }\n"])),g.gray[5],g.gray[8]),Ge=f.c.div(be||(be=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  margin-right: 8px;\n  color: ",";\n"])),g.gray[6]),He=f.c.input(xe||(xe=Object(u.a)(["\n  width: 100%;\n  outline: none;\n  border: none;\n  font-size: 16px;\n"]))),Be=f.c.div(he||(he=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  color: ",";\n"])),g.gray[6]),Ke=f.c.div(ue||(ue=Object(u.a)([""])));function Te(e){var n=e.children,t=e.selectedIndex,c=e.index;return Object(w.jsx)(Xe,{selected:c===t,children:n})}var Me=function(e){var n=e.children,t=e.icon,c=e.placeholder,i=e.label,r=e.value,a=(e.setValue,e.isSelected),s=(e.setIsSelected,e.onChange),l=e.error,d=e.selectedIndex,j=e.setSelectedIndex,b=e.isEnter,x=e.dataList,h=Object(me.a)(e,["children","icon","placeholder","label","value","setValue","isSelected","setIsSelected","onChange","error","selectedIndex","setSelectedIndex","isEnter","dataList"]),u=Object(o.useRef)(null),O=Object(o.useRef)(null),f=Object(o.useState)(!1),g=Object(p.a)(f,2),m=g[0],y=g[1];return Object(o.useEffect)((function(){m||j(-2)}),[m,j]),Object(o.useEffect)((function(){if(!r)return y(!1);y(!0)}),[r]),Object(w.jsxs)(We,Object(ve.a)(Object(ve.a)({},h),{},{children:[i&&Object(w.jsx)(Ye,{children:i}),Object(w.jsxs)(_e,{onClick:function(){var e;null===(e=u.current)||void 0===e||e.focus(),y(!m)},children:[t&&Object(w.jsx)(Je,{children:t}),Object(w.jsxs)(Ze,{children:[a&&a.map((function(e,n){return Object(w.jsxs)(en,{onClick:function(e){return e.stopPropagation()},children:[Object(w.jsx)("div",{className:"label",children:e}),Object(w.jsx)("div",{className:"removeIcon",children:Object(w.jsx)(v.j,{})})]},n)})),Object(w.jsx)(Ue,Object(ve.a)({value:r,placeholder:c,autoComplete:"off",onChange:s,onKeyDown:function(e){if(["ArrowDown","ArrowUp","Enter"].includes(e.key))switch(e.preventDefault(),e.key){case"ArrowUp":if(d-1===-2||-2===d)return void j(-2);if(j(d-1),!O.current)return;return void(O.current.scrollTop>O.current.children[0].clientHeight*d&&O.current.scrollBy(0,-O.current.children[0].clientHeight));case"ArrowDown":if(d===x.length-1)return;if(j(d+1),!O.current)return;return void(O.current.clientHeight+O.current.scrollTop<O.current.children[0].clientHeight*(d+3)&&O.current.scrollBy(0,O.current.children[0].clientHeight));case"Enter":if(-1===d||-2===d)return console.log(r);var n=null===x||void 0===x?void 0:x[d];if(!b)return;return void b(n)}},autoWidth:r.replace(/[a-z0-9]|[ [\]{}()<>?|`~!@#$%^&*-_+=,.;:"'\\]/g,"")?16*r.length:10*r.length,ref:u},h))]}),r&&Object(w.jsx)($e,{children:Object(w.jsx)(v.j,{})})]}),l&&Object(w.jsx)(qe,{children:l}),m&&Object(w.jsx)(Qe,{ref:O,onKeyDown:function(e){return e.stopPropagation()},children:n})]}))},We=f.c.div(ye||(ye=Object(u.a)(["\n  margin: 8px 0;\n  position: relative;\n"]))),Ye=f.c.div(we||(we=Object(u.a)(["\n  margin-bottom: 6px;\n"]))),_e=f.c.div(ke||(ke=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  min-height: 3rem;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 8px 16px;\n  align-items: center;\n  &:focus-within {\n    border: 1px solid ",";\n  }\n"])),g.gray[5],g.gray[8]),Je=f.c.div(Ce||(Ce=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  margin-right: 8px;\n  color: ",";\n"])),g.gray[6]),Ue=f.c.input(Ne||(Ne=Object(u.a)(["\n  outline: none;\n  border: none;\n  font-size: 16px;\n  width: calc(16px + ","px);\n"])),(function(e){return e.autoWidth})),$e=f.c.div(Se||(Se=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  color: ",";\n"])),g.gray[6]),qe=f.c.div(ze||(ze=Object(u.a)([""]))),Qe=f.c.div(Ie||(Ie=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  max-height: 172px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);\n  margin-top: 8px;\n  margin-bottom: 16px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  scroll-padding-bottom: 4px;\n  scroll-padding-top: 4px;\n"]))),Xe=f.c.div(Ee||(Ee=Object(u.a)(["\n  padding: 8px 18px;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  ","\n"])),(function(e){return e.selected&&Object(f.b)(De||(De=Object(u.a)(["\n      background: ",";\n    "])),g.gray[2])})),Ze=f.c.div(Le||(Le=Object(u.a)(["\n  display: flex;\n  flex: 1 1 0%;\n  flex-wrap: wrap;\n  overflow: hidden;\n  align-content: center;\n"]))),en=f.c.div(Re||(Re=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 2px 6px;\n  background: ",";\n  border: 1px solid ",";\n  margin: 3px;\n  .label {\n    font-size: 12px;\n  }\n  .removeIcon {\n    line-height: 12px;\n  }\n"])),g.gray[3],g.gray[6]),nn=[{id:1,name:"\uc804\uad6d"},{id:2,name:"\uc11c\uc6b8"},{id:3,name:"\ubd80\uc0b0"},{id:4,name:"\ub300\uad6c"},{id:5,name:"\ub300\uc804"},{id:6,name:"\uc138\uc885"},{id:7,name:"\uc6b8\uc0b0"}];var tn,cn=function(e){Object(O.a)(e);var n=Object(o.useState)(""),t=Object(p.a)(n,2),c=t[0],i=t[1],r=Object(o.useState)(["\uc804\uad6d","\ub300\uc804","\uc138\uc885","\uc6b8\uc0b0","\ubd80\uc0b0","\ub300\uad6c","\uad11\uc8fc","\uc601\ub3d9","\ubcf4\uc740","\uae08\uc0b0"]),a=Object(p.a)(r,2),s=a[0],l=a[1],d=Object(o.useState)(-2),j=Object(p.a)(d,2),b=j[0],x=j[1];return Object(w.jsxs)(Me,{selectedIndex:b,setSelectedIndex:x,label:"\uc0ac\uc6a9\uc9c0\uc5ed",value:c,setValue:i,isSelected:s,setIsSelected:l,onChange:function(e){return i(e.target.value)},isEnter:function(e){return function(e){return console.log("\ud14c\uc2a4\ud2b8",e)}(e)},dataList:nn,children:[Object(w.jsx)(Te,{index:-1,selectedIndex:b,children:c}),nn.map((function(e,n){return Object(w.jsx)(Te,{index:n,selectedIndex:b,children:e.name},n)}))]})};var rn=function(e){Object(O.a)(e);var n=Object(o.useState)(""),t=Object(p.a)(n,2),c=t[0],i=t[1],r=Object(o.useState)(""),a=Object(p.a)(r,2),s=a[0];return a[1],Object(w.jsxs)(an,{children:[Object(w.jsx)(Ae,{label:"\uc774\ub984",value:c,setValue:i,icon:Object(w.jsx)(v.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(w.jsx)(Ae,{label:"\uc5f0\ub77d\ucc98",value:c,setValue:i,icon:Object(w.jsx)(v.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(w.jsx)(Ae,{label:"\uc8fc\uc18c",value:c,setValue:i,icon:Object(w.jsx)(v.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(w.jsx)(cn,{}),Object(w.jsx)(Ae,{label:"\uc8fc\uc18c",value:c,setValue:i,icon:Object(w.jsx)(v.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}})]})},an=f.c.form(tn||(tn=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0 16px;\n"]))),sn=t(48),on=t.n(sn).a.create({withCredentials:!0});on.defaults.baseURL="https://api.jaewoomade.xyz";var ln=on;function dn(){return jn.apply(this,arguments)}function jn(){return(jn=Object(ge.a)(fe.a.mark((function e(){var n,t;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ln.get("example/list");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var bn,xn,hn,un=function(e){Object(O.a)(e);var n=Object(o.useState)([]),t=Object(p.a)(n,2),c=(t[0],t[1]);return Object(o.useEffect)((function(){(function(){var e=Object(ge.a)(fe.a.mark((function e(){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,dn();case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(w.jsx)(re,{header:Object(w.jsx)(ne,{title:"Create Individual Account"}),children:Object(w.jsx)(rn,{})})};var pn,On,fn=function(e){return Object(O.a)(e),Object(w.jsxs)(re,{header:Object(w.jsx)(ne,{title:"Workspaces"}),children:[Object(w.jsx)(gn,{children:Object(w.jsxs)(vn,{children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)(v.i,{})}),Object(w.jsx)("div",{className:"label",children:"Dashboard"})]})}),Object(w.jsx)(gn,{children:Object(w.jsxs)(vn,{children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)(v.d,{})}),Object(w.jsx)("div",{className:"label",children:"Reports"})]})}),Object(w.jsxs)(gn,{children:[Object(w.jsxs)(vn,{children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)(v.e,{})}),Object(w.jsx)("div",{className:"label",children:"Goods"})]}),Object(w.jsx)(mn,{to:"",children:Object(w.jsx)("div",{className:"label",children:"Create Sale Goods"})}),Object(w.jsx)(mn,{to:"",children:Object(w.jsx)("div",{className:"label",children:"Sale Goods"})}),Object(w.jsx)(mn,{to:"",children:Object(w.jsx)("div",{className:"label",children:"Inventroy"})})]}),Object(w.jsx)(gn,{children:Object(w.jsxs)(vn,{children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)(v.h,{})}),Object(w.jsx)("div",{className:"label",children:"Sale"})]})}),Object(w.jsx)(gn,{children:Object(w.jsxs)(vn,{children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)(v.b,{})}),Object(w.jsx)("div",{className:"label",children:"Purchase"})]})}),Object(w.jsxs)(gn,{children:[Object(w.jsxs)(vn,{children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)(v.g,{})}),Object(w.jsx)("div",{className:"label",children:"Account"})]}),Object(w.jsx)(mn,{to:"/workspaces/account",children:Object(w.jsx)("div",{className:"label",children:"Account"})}),Object(w.jsx)(mn,{to:"/workspaces/create/individual",children:Object(w.jsx)("div",{className:"label",children:"Create Individual"})}),Object(w.jsx)(mn,{to:"",onClick:function(e){return e.preventDefault()},children:Object(w.jsx)("div",{className:"label",children:"Create Company"})})]}),Object(w.jsx)(gn,{children:Object(w.jsxs)(vn,{children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)(v.c,{})}),Object(w.jsx)("div",{className:"label",children:"Log"})]})}),Object(w.jsxs)(gn,{children:[Object(w.jsxs)(vn,{children:[Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)(v.g,{})}),Object(w.jsx)("div",{className:"label",children:"Settings"})]}),Object(w.jsx)(mn,{to:"/settings/locations",children:Object(w.jsx)("div",{className:"label",children:"Locations"})})]})]})},gn=f.c.div(bn||(bn=Object(u.a)(["\n  & + & {\n    margin-top: 16px;\n  }\n"]))),vn=f.c.div(xn||(xn=Object(u.a)(["\n  height: 32px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n  }\n  .icon {\n    font-size: 24px;\n    padding-top: 6px;\n    margin-right: 16px;\n  }\n  .label {\n    font-weight: bold;\n    font-size: 18px;\n  }\n"])),g.gray[2]),mn=Object(f.c)(b.b)(hn||(hn=Object(u.a)(["\n  text-decoration: none;\n  height: 32px;\n  display: flex;\n  color: ",";\n  &:hover {\n    background: ",";\n  }\n  .label {\n    line-height: 32px;\n    height: 32px;\n    font-size: 18px;\n    padding-left: 56px;\n  }\n"])),g.gray[9],g.gray[2]),yn=Object(f.a)(pn||(pn=Object(u.a)(["",""])),Object(f.b)(On||(On=Object(u.a)(["\n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n  html {\n    box-sizing: border-box;\n\n    * {\n      box-sizing: inherit;\n    }\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',\n      'Apple SD Gothic Neo', 'Malgun Gothic', '\ub9d1\uc740 \uace0\ub515', \ub098\ub214\uace0\ub515,\n      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, \ub3cb\uc6c0, Dotum,\n      Tahoma, Geneva, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 0;\n    padding: 0;\n    background: ",";\n  }\n"])),g.gray[2]));var wn=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(yn,{}),Object(w.jsxs)(q,{children:[Object(w.jsxs)(h.c,{children:[Object(w.jsx)(h.a,{exact:!0,path:"/",children:"\ud648"}),Object(w.jsx)(h.a,{exact:!0,path:"/workspaces",children:Object(w.jsx)(fn,{})}),Object(w.jsx)(h.a,{exact:!0,path:"/workspaces/create/individual",children:Object(w.jsx)(un,{})}),Object(w.jsx)(h.a,{exact:!0,path:"/workspaces/account",children:Object(w.jsx)(pe,{})}),Object(w.jsx)(h.a,{exact:!0,path:"/settings/locations",children:Object(w.jsx)(oe,{})}),Object(w.jsx)(h.a,{exact:!0,path:"/sales",children:"Sales"})]}),Object(w.jsx)(B,{})]})]})},kn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,84)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};j.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(b.a,{basename:"/",children:Object(w.jsx)(wn,{})})})}),document.getElementById("root")),kn()}},[[81,1,2]]]);
//# sourceMappingURL=main.483d0d50.chunk.js.map