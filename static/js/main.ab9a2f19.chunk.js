(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),r=n(4),i=(n(10),n(1));for(var l=n(2),s=n.n(l),o=n(0),u=function(e){for(var t=e.total,n=e.perPage,c=e.onPageChange,a=e.currentPage,r=[],i=1;i<=Math.ceil(t/n);i+=1)r.push(i);var l,u=function(e){return s()("page-item",{active:e===a})};return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:(l=a,s()("page-item",{disabled:1===l})),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===a,onClick:function(){return c(1===a?1:a-1)},children:"\xab"})}),r.map((function(e){return Object(o.jsx)("li",{className:u(e),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return c(e)},children:e})},e)})),Object(o.jsx)("li",{className:function(e){return s()("page-item",{disabled:e===r.length})}(a),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":a===r.length,onClick:function(){return c(a===r.length?a:a+1)},children:"\xbb"})})]})},j=function(e){var t=e.items;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})},d=function(e,t){for(var n=[],c=e;c<=t;c+=1)n.push(c);return n}(1,42).map((function(e){return"Item ".concat(e)})),h=[],b=1;b<=d.length;b+=1)h.push(b);var m=function(){var e=Object(i.useState)(5),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(1),l=Object(r.a)(a,2),s=l[0],d=l[1],b=Object(i.useMemo)((function(){return h.filter((function(e){return e<=n*s&&e>n*(s-1)})).map((function(e){return"Item ".concat(e)}))}),[n,s]),m=n*(s-1)+1,p=n*s>=42?42:n*s;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(m," - ").concat(p," of 42)")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:"5",onChange:function(e){c(+e.target.value),d(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(u,{total:h.length,perPage:n,onPageChange:function(e){d(e)},currentPage:s}),Object(o.jsx)("ul",{children:Object(o.jsx)(j,{items:b})})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ab9a2f19.chunk.js.map