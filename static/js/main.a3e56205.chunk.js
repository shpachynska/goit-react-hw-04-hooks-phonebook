(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={Modal__backdrop:"Modal_Modal__backdrop__2swQB",Modal__content:"Modal_Modal__content__2sV4U"}},13:function(t,e,n){t.exports={button:"Form_button__13cNt"}},14:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__tWofn"}},15:function(t,e,n){t.exports={Container:"Container_Container__1ysmr"}},22:function(t,e,n){},23:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(5),o=n.n(r),i=(n(22),n(16)),l=n(2),s=(n(23),n(12)),u=n.n(s),d=n(7),b=n.n(d),j=n(0);var m=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:b.a.Contact__list,children:e.map((function(t){return Object(j.jsxs)("li",{className:b.a.ContactList__item,children:[Object(j.jsxs)("span",{children:[t.name,":\xa0"]}),Object(j.jsx)("span",{children:t.number}),Object(j.jsx)("button",{id:t.id,type:"button",onClick:function(){return n(t.id)},className:b.a.button,children:"Delete"})]},t.id)}))})},f=n(9),h=n.n(f),O=function(t){var e=t.value,n=t.onChange;return Object(j.jsx)("div",{className:h.a.Filter,children:Object(j.jsxs)("label",{children:["Filter by name",Object(j.jsx)("input",{className:h.a.filter__input,type:"text",value:e,onChange:n})]})})},_=n(13),p=n.n(_);function v(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(l.a)(i,2),u=s[0],d=s[1],b=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":d(c);break;default:return}},m=function(){o(r),d(u)};return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,number:u}),m()},children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:b})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:b})]}),Object(j.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}var x=n(10),C=n.n(x),g=document.querySelector("#modal-root");function y(t){var e=t.children,n=t.onClose;window.addEventListener("keydown",(function(t){"Escape"===t.code&&n()}));return Object(r.createPortal)(Object(j.jsx)("div",{className:C.a.Modal__backdrop,onClick:function(t){t.currentTarget===t.target&&n()},children:Object(j.jsx)("div",{className:C.a.Modal__content,children:e})}),g)}var w=n(11),k=n(17),N=n(14),S=n.n(N),M=["children","onClick"],E=function(t){var e=t.children,n=t.onClick,c=Object(k.a)(t,M);return Object(j.jsx)("button",Object(w.a)(Object(w.a)({type:"button",className:S.a.IconButton,onClick:n},c),{},{children:e}))};E.defaultProps={onClick:function(){return null},children:null};var I,L,B=E,A=["title","titleId"];function F(){return F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},F.apply(this,arguments)}function J(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function z(t,e){var n=t.title,a=t.titleId,r=J(t,A);return c.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,I||(I=c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),L||(L=c.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var P=c.forwardRef(z),D=(n.p,n(15)),H=n.n(D),q=function(t){var e=t.children;return Object(j.jsx)("div",{className:H.a.Container,children:e})},T=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function V(){var t=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:T})),e=Object(l.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),s=o[0],d=o[1],b=Object(c.useState)(!1),f=Object(l.a)(b,2),h=f[0],_=f[1];Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var p=function(){_(!h)},x=function(){var t=s.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(j.jsxs)(q,{children:[Object(j.jsx)("h1",{className:"title",children:"Phonebook"}),Object(j.jsx)(B,{onClick:p,"aria-label":"add contact",children:Object(j.jsx)(P,{width:"40",height:"40",fill:"#fff"})}),h&&Object(j.jsx)(y,{onClose:p,children:Object(j.jsx)("div",{className:"form-section",children:Object(j.jsx)("div",{className:"form",children:Object(j.jsx)(v,{onSubmit:function(t){var e={id:u.a.generate(),name:t.name,number:t.number};n.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):(a([e].concat(Object(i.a)(n))),p())}})})})}),Object(j.jsxs)("div",{className:"contacts-section",children:[Object(j.jsx)("b",{className:"title",children:"Contacts"}),Object(j.jsx)(O,{value:s,onChange:function(t){d(t.currentTarget.value)}}),Object(j.jsx)(m,{contacts:x,onDeleteContact:function(t){a((function(){return n.filter((function(e){return e.id!==t}))}))}})]})]})}n(33);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={Contact__list:"ContactList_Contact__list__bGByJ",ContactList__item:"ContactList_ContactList__item__1JGSt",button:"ContactList_button__1Lnl0"}},9:function(t,e,n){t.exports={filter__input:"Filter_filter__input__1KH40",Filter:"Filter_Filter__3pVSc"}}},[[34,1,2]]]);
//# sourceMappingURL=main.a3e56205.chunk.js.map