(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{80:function(e,n,t){"use strict";t.r(n);var c,i,a,r,s,o=t(2),l=t.n(o),d=t(18),j=t.n(d),b=t(16),x=t(49),h=t(8),u=t(3),p=t(10),O=t(4),f={gray:{0:"#f8f9fa",1:"#f1f3f5",2:"#e9ecef",3:"#dee2e6",4:"#ced4da",5:"#adb5bd",6:"#868e96",7:"#495057",8:"#343a40",9:"#212529"},red:{0:"#fff5f5",1:"#ffe3e3",2:"#ffc9c9",3:"#ffa8a8",4:"#ff8787",5:"#ff6b6b",6:"#fa5252",7:"#f03e3e",8:"#e03131",9:"#c92a2a"},pink:{0:"#fff0f6",1:"#ffdeeb",2:"#fcc2d7",3:"#faa2c1",4:"#f783ac",5:"#f06595",6:"#e64980",7:"#d6336c",8:"#c2255c",9:"#a61e4d"},grape:{0:"#f8f0fc",1:"#f3d9fa",2:"#eebefa",3:"#e599f7",4:"#da77f2",5:"#cc5de8",6:"#be4bdb",7:"#ae3ec9",8:"#9c36b5",9:"#862e9c"},blue:{0:"#e7f5ff",1:"#d0ebff",2:"#a5d8ff",3:"#74c0fc",4:"#4dabf7",5:"#339af0",6:"#228be6",7:"#1c7ed6",8:"#1971c2",9:"#1864ab"}},g=t(7),v=t(82),m=t(1);var y,w=function(e){var n=e.children,t=e.visible,c=e.setVisible,i=e.onClose,a=e.zIndex,r=void 0===a?20:a,s=l.a.useRef(null),d=l.a.useRef(null),j=Object(o.useCallback)((function(){c(!1)}),[c]);return Object(o.useEffect)((function(){if(t)return window.history.pushState(null,"",window.location.href+"#modal"),window.addEventListener("popstate",j),function(){window.removeEventListener("popstate",j)}}),[t,j]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v.a,{in:t,nodeRef:s,timeout:{enter:250,exit:200},unmountOnExit:!0,classNames:"fade",children:Object(m.jsx)(k,{ref:s})}),Object(m.jsx)(v.a,{in:t,nodeRef:d,timeout:{enter:250,exit:200},unmountOnExit:!0,classNames:"bottom",children:Object(m.jsxs)(C,{zIndex:r,ref:d,children:[Object(m.jsx)(N,{onClick:i,children:Object(m.jsx)(g.j,{})}),n]})})]})},k=O.c.div(a||(a=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  left: 100vw - 768px;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100vw;\n  max-width: 768px;\n  height: 100%;\n  z-index: 10;\n  ","\n"])),Object(O.b)(c||(c=Object(u.a)(["\n  &.fade-enter {\n    opacity: 0;\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transition: opacity 250ms;\n  }\n  &.fade-exit {\n    opacity: 1;\n  }\n  &.fade-exit-active {\n    opacity: 0;\n    transition: opacity 200ms;\n  }\n"])))),C=O.c.div(r||(r=Object(u.a)(["\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  max-width: 768px;\n  width: 100vw;\n  max-height: 70%;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  padding: 48px 24px 70px 24px;\n  z-index: ",";\n  ","\n"])),(function(e){return e.zIndex}),Object(O.b)(i||(i=Object(u.a)(["\n  &.bottom-enter {\n    transform: translateY(100%);\n  }\n  &.bottom-enter-active {\n    transform: translateY(0%);\n    transition: transform 250ms;\n  }\n  &.bottom-exit {\n    transform: translateY(0%);\n  }\n  &.bottom-exit-active {\n    transform: translateY(100%);\n    transition: transform 200ms;\n  }\n"])))),N=O.c.div(s||(s=Object(u.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 24px;\n  right: 24px;\n  font-size: 32px;\n  display: inline-flex;\n"]))),S=t(47);var z=function(e){Object(p.a)(e);var n=Object(o.useRef)(null),t=Object(o.useCallback)((function(e){console.log(e)}),[]);return Object(o.useCallback)((function(e){}),[]),Object(o.useEffect)((function(){window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"776507555025-pmue89ta15dvgre537u1ge9l2ee450g1.apps.googleusercontent.com",cookiepolicy:"single_host_origin"}).attachClickHandler(n.current,{},(function(e){t(e)}))}))}),[t]),Object(m.jsxs)(I,{ref:n,id:"google-login-button",children:[Object(m.jsx)(S.a,{}),"Sign in with Google"]})},I=O.c.button(y||(y=Object(u.a)(["\n  border: none;\n  outline: none;\n  background: none;\n  padding: 0;\n  width: 100%;\n  display: inline-flex;\n  height: 54px;\n  background: white;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 16px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all ease-in 0.125s;\n  border-radius: 7px;\n  border: 1px solid ",";\n  svg {\n    font-size: 24px;\n    margin-right: 8px;\n  }\n  &:hover {\n    box-shadow: 0px 0.25rem 0.5rem rgb(0 0 0 / 11%);\n  }\n"])),f.gray[3]),D=t(5);var E,L,R,V,A,P,F=function(){var e=Object(h.f)(),n=Object(o.useState)(!1),t=Object(D.a)(n,2),c=t[0],i=t[1],a=Object(o.useCallback)((function(){e.goBack(),i(!1)}),[e]);return{isOpenModal:c,setIsOpenModal:i,onClose:a}};var G,H,M=function(e){Object(p.a)(e);var n=F(),t=n.isOpenModal,c=n.setIsOpenModal,i=n.onClose;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(B,{children:Object(m.jsxs)(K,{children:[Object(m.jsxs)(T,{to:"/workspaces",children:[Object(m.jsx)(W,{children:Object(m.jsx)(g.a,{})}),Object(m.jsx)(Y,{children:"Workspaces"})]}),Object(m.jsxs)(T,{to:"/login",onClick:function(e){e.preventDefault(),c(!0)},children:[Object(m.jsx)(W,{children:Object(m.jsx)(g.g,{})}),Object(m.jsx)(Y,{children:"Sign In"})]}),Object(m.jsxs)(T,{to:"/sales",children:[Object(m.jsx)(W,{children:Object(m.jsx)(g.f,{})}),Object(m.jsx)(Y,{children:"Sales"})]})]})}),Object(m.jsx)(w,{visible:t,setVisible:c,zIndex:40,onClose:i,children:Object(m.jsxs)(_,{children:[Object(m.jsx)("h3",{children:"Hello, Manager"}),Object(m.jsx)("div",{className:"button-block",onClick:i,children:Object(m.jsx)(z,{})})]})})]})},B=O.c.div(E||(E=Object(u.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  z-index: 30;\n"]))),K=O.c.div(L||(L=Object(u.a)(["\n  max-width: 768px;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 16px;\n"])),f.gray[3],f.gray[3]),T=Object(O.c)(b.b)(R||(R=Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  height: 100%;\n  color: ",";\n\n  &:hover,\n  &.active {\n    color: ",";\n  }\n"])),f.gray[7],f.blue[9]),W=O.c.div(V||(V=Object(u.a)(["\n  font-size: 24px;\n  margin-bottom: -5px;\n"]))),Y=O.c.div(A||(A=Object(u.a)(["\n  font-size: 12px;\n"]))),_=O.c.div(P||(P=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  h3 {\n    font-size: 24px;\n    text-align: center;\n  }\n  .button-block {\n    width: 100%;\n  }\n"])));var J,U,$,q=function(e){var n=e.children;return Object(m.jsx)(Q,{children:Object(m.jsx)(X,{children:n})})},Q=O.c.div(G||(G=Object(u.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n"]))),X=O.c.div(H||(H=Object(u.a)(["\n  background: #fff;\n  max-width: 768px;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 56px;\n"])));var Z,ee,ne=function(e){var n=e.title,t=Object(h.f)();return Object(m.jsxs)(te,{children:[Object(m.jsx)(ie,{onClick:function(){return t.goBack()},children:Object(m.jsx)(g.j,{})}),Object(m.jsx)(ce,{children:n})]})},te=O.c.div(J||(J=Object(u.a)(["\n  position: fixed;\n  max-width: 768px;\n  width: 100%;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 16px;\n  background: #fff;\n  /* box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.125); */\n"]))),ce=O.c.h3(U||(U=Object(u.a)([""]))),ie=O.c.div($||($=Object(u.a)(["\n  position: absolute;\n  cursor: pointer;\n  left: 16px;\n  top: 16px;\n  font-size: 24px;\n"])));var ae=function(e){var n=e.children,t=e.header;return Object(m.jsxs)(re,{children:[t,Object(m.jsx)(se,{header:t,children:n})]})},re=O.c.div(Z||(Z=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n"]))),se=O.c.div(ee||(ee=Object(u.a)(["\n  height: 100%;\n  padding-top: ",";\n"])),(function(e){return e.header?"72px":"16px"}));var oe=function(e){return Object(p.a)(e),Object(m.jsx)(ae,{header:Object(m.jsx)(ne,{title:"Locations"}),children:"Locations"})};var le,de,je,be,xe,he,ue,pe=function(e){return Object(p.a)(e),Object(m.jsx)(ae,{children:"Account"})},Oe=t(11),fe=t.n(Oe),ge=t(22),ve=t(6),me=t(19);var ye,we,ke,Ce,Ne,Se,ze,Ie,De,Ee,Le,Re,Ve=function(e){var n=e.icon,t=e.placeholder,c=e.label,i=e.value,a=(e.setValue,e.onChange),r=e.error,s=Object(me.a)(e,["icon","placeholder","label","value","setValue","onChange","error"]);return Object(m.jsxs)(Ae,Object(ve.a)(Object(ve.a)({},s),{},{children:[c&&Object(m.jsx)(Pe,{children:c}),Object(m.jsxs)(Fe,{children:[n&&Object(m.jsx)(Ge,{children:n}),Object(m.jsx)(He,{value:i,placeholder:t,autoComplete:"off",onChange:a}),i&&Object(m.jsx)(Me,{children:Object(m.jsx)(g.j,{})})]}),r&&Object(m.jsx)(Be,{children:r})]}))},Ae=O.c.div(le||(le=Object(u.a)(["\n  margin: 8px 0;\n"]))),Pe=O.c.div(de||(de=Object(u.a)(["\n  margin-bottom: 6px;\n  font-size: 16px;\n"]))),Fe=O.c.div(je||(je=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: 3rem;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 0 16px;\n  align-items: center;\n  &:focus-within {\n    border: 1px solid ",";\n  }\n"])),f.gray[5],f.gray[8]),Ge=O.c.div(be||(be=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  margin-right: 8px;\n  color: ",";\n"])),f.gray[6]),He=O.c.input(xe||(xe=Object(u.a)(["\n  width: 100%;\n  outline: none;\n  border: none;\n  font-size: 16px;\n"]))),Me=O.c.div(he||(he=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  color: ",";\n"])),f.gray[6]),Be=O.c.div(ue||(ue=Object(u.a)([""])));function Ke(e){var n=e.children,t=e.selectedIndex,c=e.index;return Object(m.jsx)(Xe,{selected:c===t,children:n})}var Te=function(e){var n=e.children,t=e.icon,c=e.placeholder,i=e.label,a=e.value,r=(e.setValue,e.isSelected),s=(e.setIsSelected,e.onChange),l=e.error,d=e.selectedIndex,j=e.setSelectedIndex,b=e.isEnter,x=e.dataList,h=Object(me.a)(e,["children","icon","placeholder","label","value","setValue","isSelected","setIsSelected","onChange","error","selectedIndex","setSelectedIndex","isEnter","dataList"]),u=Object(o.useRef)(null),p=Object(o.useRef)(null),O=Object(o.useState)(!1),f=Object(D.a)(O,2),v=f[0],y=f[1];return Object(o.useEffect)((function(){v||j(-2)}),[v,j]),Object(o.useEffect)((function(){if(!a)return y(!1);y(!0)}),[a]),Object(m.jsxs)(We,Object(ve.a)(Object(ve.a)({},h),{},{children:[i&&Object(m.jsx)(Ye,{children:i}),Object(m.jsxs)(_e,{onClick:function(){var e;null===(e=u.current)||void 0===e||e.focus(),y(!v)},children:[t&&Object(m.jsx)(Je,{children:t}),Object(m.jsxs)(Ze,{children:[r&&r.map((function(e,n){return Object(m.jsxs)(en,{onClick:function(e){return e.stopPropagation()},children:[Object(m.jsx)("div",{className:"label",children:e}),Object(m.jsx)("div",{className:"removeIcon",children:Object(m.jsx)(g.j,{})})]},n)})),Object(m.jsx)(Ue,Object(ve.a)({value:a,placeholder:c,autoComplete:"off",onChange:s,onKeyDown:function(e){if(["ArrowDown","ArrowUp","Enter"].includes(e.key))switch(e.preventDefault(),e.key){case"ArrowUp":if(d-1===-2||-2===d)return void j(-2);if(j(d-1),!p.current)return;return void(p.current.scrollTop>p.current.children[0].clientHeight*d&&p.current.scrollBy(0,-p.current.children[0].clientHeight));case"ArrowDown":if(d===x.length-1)return;if(j(d+1),!p.current)return;return void(p.current.clientHeight+p.current.scrollTop<p.current.children[0].clientHeight*(d+3)&&p.current.scrollBy(0,p.current.children[0].clientHeight));case"Enter":if(-1===d||-2===d)return console.log(a);var n=null===x||void 0===x?void 0:x[d];if(!b)return;return void b(n)}},autoWidth:a.replace(/[a-z0-9]|[ [\]{}()<>?|`~!@#$%^&*-_+=,.;:"'\\]/g,"")?16*a.length:10*a.length,ref:u},h))]}),a&&Object(m.jsx)($e,{children:Object(m.jsx)(g.j,{})})]}),l&&Object(m.jsx)(qe,{children:l}),v&&Object(m.jsx)(Qe,{ref:p,onKeyDown:function(e){return e.stopPropagation()},children:n})]}))},We=O.c.div(ye||(ye=Object(u.a)(["\n  margin: 8px 0;\n  position: relative;\n"]))),Ye=O.c.div(we||(we=Object(u.a)(["\n  margin-bottom: 6px;\n"]))),_e=O.c.div(ke||(ke=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  min-height: 3rem;\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 8px 16px;\n  align-items: center;\n  &:focus-within {\n    border: 1px solid ",";\n  }\n"])),f.gray[5],f.gray[8]),Je=O.c.div(Ce||(Ce=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  margin-right: 8px;\n  color: ",";\n"])),f.gray[6]),Ue=O.c.input(Ne||(Ne=Object(u.a)(["\n  outline: none;\n  border: none;\n  font-size: 16px;\n  width: calc(16px + ","px);\n"])),(function(e){return e.autoWidth})),$e=O.c.div(Se||(Se=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  color: ",";\n"])),f.gray[6]),qe=O.c.div(ze||(ze=Object(u.a)([""]))),Qe=O.c.div(Ie||(Ie=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  max-height: 172px;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);\n  margin-top: 8px;\n  margin-bottom: 16px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  scroll-padding-bottom: 4px;\n  scroll-padding-top: 4px;\n"]))),Xe=O.c.div(De||(De=Object(u.a)(["\n  padding: 8px 18px;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  ","\n"])),(function(e){return e.selected&&Object(O.b)(Ee||(Ee=Object(u.a)(["\n      background: ",";\n    "])),f.gray[2])})),Ze=O.c.div(Le||(Le=Object(u.a)(["\n  display: flex;\n  flex: 1 1 0%;\n  flex-wrap: wrap;\n  overflow: hidden;\n  align-content: center;\n"]))),en=O.c.div(Re||(Re=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 2px 6px;\n  background: ",";\n  border: 1px solid ",";\n  margin: 3px;\n  .label {\n    font-size: 12px;\n  }\n  .removeIcon {\n    line-height: 12px;\n  }\n"])),f.gray[3],f.gray[6]),nn=[{id:1,name:"\uc804\uad6d"},{id:2,name:"\uc11c\uc6b8"},{id:3,name:"\ubd80\uc0b0"},{id:4,name:"\ub300\uad6c"},{id:5,name:"\ub300\uc804"},{id:6,name:"\uc138\uc885"},{id:7,name:"\uc6b8\uc0b0"}];var tn,cn=function(e){Object(p.a)(e);var n=Object(o.useState)(""),t=Object(D.a)(n,2),c=t[0],i=t[1],a=Object(o.useState)(["\uc804\uad6d","\ub300\uc804","\uc138\uc885","\uc6b8\uc0b0","\ubd80\uc0b0","\ub300\uad6c","\uad11\uc8fc","\uc601\ub3d9","\ubcf4\uc740","\uae08\uc0b0"]),r=Object(D.a)(a,2),s=r[0],l=r[1],d=Object(o.useState)(-2),j=Object(D.a)(d,2),b=j[0],x=j[1];return Object(m.jsxs)(Te,{selectedIndex:b,setSelectedIndex:x,label:"\uc0ac\uc6a9\uc9c0\uc5ed",value:c,setValue:i,isSelected:s,setIsSelected:l,onChange:function(e){return i(e.target.value)},isEnter:function(e){return function(e){return console.log("\ud14c\uc2a4\ud2b8",e)}(e)},dataList:nn,children:[Object(m.jsx)(Ke,{index:-1,selectedIndex:b,children:c}),nn.map((function(e,n){return Object(m.jsx)(Ke,{index:n,selectedIndex:b,children:e.name},n)}))]})};var an=function(e){Object(p.a)(e);var n=Object(o.useState)(""),t=Object(D.a)(n,2),c=t[0],i=t[1],a=Object(o.useState)(""),r=Object(D.a)(a,2),s=r[0];return r[1],Object(m.jsxs)(rn,{children:[Object(m.jsx)(Ve,{label:"\uc774\ub984",value:c,setValue:i,icon:Object(m.jsx)(g.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(m.jsx)(Ve,{label:"\uc5f0\ub77d\ucc98",value:c,setValue:i,icon:Object(m.jsx)(g.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(m.jsx)(Ve,{label:"\uc8fc\uc18c",value:c,setValue:i,icon:Object(m.jsx)(g.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}}),Object(m.jsx)(cn,{}),Object(m.jsx)(Ve,{label:"\uc8fc\uc18c",value:c,setValue:i,icon:Object(m.jsx)(g.e,{}),error:s,placeholder:"Primary Input Design",onChange:function(e){return i(e.target.value)}})]})},rn=O.c.form(tn||(tn=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0 16px;\n"]))),sn=t(48),on=t.n(sn).a.create({withCredentials:!0});on.defaults.baseURL="https://api.jaewoomade.xyz";var ln=on;function dn(){return jn.apply(this,arguments)}function jn(){return(jn=Object(ge.a)(fe.a.mark((function e(){var n,t;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ln.get("example/list");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var bn,xn,hn,un=function(e){Object(p.a)(e);var n=Object(o.useState)([]),t=Object(D.a)(n,2),c=(t[0],t[1]);return Object(o.useEffect)((function(){(function(){var e=Object(ge.a)(fe.a.mark((function e(){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,dn();case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsx)(ae,{header:Object(m.jsx)(ne,{title:"Create Individual Account"}),children:Object(m.jsx)(an,{})})};var pn,On,fn=function(e){return Object(p.a)(e),Object(m.jsxs)(ae,{header:Object(m.jsx)(ne,{title:"Workspaces"}),children:[Object(m.jsx)(gn,{children:Object(m.jsxs)(vn,{children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(g.i,{})}),Object(m.jsx)("div",{className:"label",children:"Dashboard"})]})}),Object(m.jsx)(gn,{children:Object(m.jsxs)(vn,{children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(g.d,{})}),Object(m.jsx)("div",{className:"label",children:"Reports"})]})}),Object(m.jsxs)(gn,{children:[Object(m.jsxs)(vn,{children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(g.e,{})}),Object(m.jsx)("div",{className:"label",children:"Goods"})]}),Object(m.jsx)(mn,{to:"",children:Object(m.jsx)("div",{className:"label",children:"Create Sale Goods"})}),Object(m.jsx)(mn,{to:"",children:Object(m.jsx)("div",{className:"label",children:"Sale Goods"})}),Object(m.jsx)(mn,{to:"",children:Object(m.jsx)("div",{className:"label",children:"Inventroy"})})]}),Object(m.jsx)(gn,{children:Object(m.jsxs)(vn,{children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(g.h,{})}),Object(m.jsx)("div",{className:"label",children:"Sale"})]})}),Object(m.jsx)(gn,{children:Object(m.jsxs)(vn,{children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(g.b,{})}),Object(m.jsx)("div",{className:"label",children:"Purchase"})]})}),Object(m.jsxs)(gn,{children:[Object(m.jsxs)(vn,{children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(g.g,{})}),Object(m.jsx)("div",{className:"label",children:"Account"})]}),Object(m.jsx)(mn,{to:"/workspaces/account",children:Object(m.jsx)("div",{className:"label",children:"Account"})}),Object(m.jsx)(mn,{to:"/workspaces/create/individual",children:Object(m.jsx)("div",{className:"label",children:"Create Individual"})}),Object(m.jsx)(mn,{to:"",onClick:function(e){return e.preventDefault()},children:Object(m.jsx)("div",{className:"label",children:"Create Company"})})]}),Object(m.jsx)(gn,{children:Object(m.jsxs)(vn,{children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(g.c,{})}),Object(m.jsx)("div",{className:"label",children:"Log"})]})}),Object(m.jsxs)(gn,{children:[Object(m.jsxs)(vn,{children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(g.g,{})}),Object(m.jsx)("div",{className:"label",children:"Settings"})]}),Object(m.jsx)(mn,{to:"/settings/locations",children:Object(m.jsx)("div",{className:"label",children:"Locations"})})]})]})},gn=O.c.div(bn||(bn=Object(u.a)(["\n  & + & {\n    margin-top: 16px;\n  }\n"]))),vn=O.c.div(xn||(xn=Object(u.a)(["\n  height: 32px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n  }\n  .icon {\n    font-size: 24px;\n    padding-top: 6px;\n    margin-right: 16px;\n  }\n  .label {\n    font-weight: bold;\n    font-size: 18px;\n  }\n"])),f.gray[2]),mn=Object(O.c)(b.b)(hn||(hn=Object(u.a)(["\n  text-decoration: none;\n  height: 32px;\n  display: flex;\n  color: ",";\n  &:hover {\n    background: ",";\n  }\n  .label {\n    line-height: 32px;\n    height: 32px;\n    font-size: 18px;\n    padding-left: 56px;\n  }\n"])),f.gray[9],f.gray[2]),yn=Object(O.a)(pn||(pn=Object(u.a)(["",""])),Object(O.b)(On||(On=Object(u.a)(["\n  html,\n  body,\n  #root {\n    height: 100%;\n  }\n  html {\n    box-sizing: border-box;\n\n    * {\n      box-sizing: inherit;\n    }\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',\n      'Apple SD Gothic Neo', 'Malgun Gothic', '\ub9d1\uc740 \uace0\ub515', \ub098\ub214\uace0\ub515,\n      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, \ub3cb\uc6c0, Dotum,\n      Tahoma, Geneva, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 0;\n    padding: 0;\n    background: ",";\n  }\n"])),f.gray[2]));var wn=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(yn,{}),Object(m.jsxs)(q,{children:[Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{exact:!0,path:"/",children:"\ud648"}),Object(m.jsx)(h.a,{exact:!0,path:"/workspaces",children:Object(m.jsx)(fn,{})}),Object(m.jsx)(h.a,{exact:!0,path:"/workspaces/create/individual",children:Object(m.jsx)(un,{})}),Object(m.jsx)(h.a,{exact:!0,path:"/workspaces/account",children:Object(m.jsx)(pe,{})}),Object(m.jsx)(h.a,{exact:!0,path:"/settings/locations",children:Object(m.jsx)(oe,{})}),Object(m.jsx)(h.a,{exact:!0,path:"/sales",children:"Sales"})]}),Object(m.jsx)(M,{})]})]})},kn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,83)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))};j.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(x.a,{children:Object(m.jsx)(b.a,{basename:"/",children:Object(m.jsx)(wn,{})})})}),document.getElementById("root")),kn()}},[[80,1,2]]]);
//# sourceMappingURL=main.1b68efd8.chunk.js.map