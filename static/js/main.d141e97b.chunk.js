(this["webpackJsonpbestbuy-web"]=this["webpackJsonpbestbuy-web"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/zayn1.32f1847e.jpg"},function(e,a,t){e.exports=t.p+"static/media/default.defc1297.jpg"},,,function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r);t(24);var m=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"navbar-section"},c.a.createElement("div",{className:"row top-header"},c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{className:"top-header-texts float-right"},c.a.createElement("a",{href:"#"},"log in"),".",c.a.createElement("a",{href:"#"},"create account")))),c.a.createElement("div",{className:"row down-header"},c.a.createElement("div",{className:"col-12"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"BestBuy."),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/shop"},"shop")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},"my boyfriends back")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},"staff edit")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},"contact")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"},"cart"))),c.a.createElement("form",{action:"/shop",method:"GET",className:"form-inline"},c.a.createElement("input",{className:"form-control mr-sm-2",name:"s",type:"search",placeholder:"Search","aria-label":"Search"}),c.a.createElement("button",{className:"btn btn-outline-dark my-2 my-sm-0",type:"submit"},"Search"))))))))},s=t(15),o=t.n(s),i=(t(25),t(7)),u=t(16),d=t.n(u);var E=function(e){var a=e.product,t=null!==a.image?"http://127.0.0.1:8000".concat(a.image):d.a;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:t,"data-img":t,alt:"Card image cap"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},a.title),c.a.createElement("p",{className:"card-text"},a.detail,c.a.createElement("br",null),a.price," $"),e.detail?null:c.a.createElement("a",{href:"/shop/"+a.slug,className:"btn btn-primary"},"View Detail")))};function p(e,a,t){var n=new XMLHttpRequest;n.onload=function(){t(n.status,n.response)},n.open(a,"http://127.0.0.1:8000/".concat(e),!0),n.responseType="json",n.send()}t(26);var v=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=document.location.search;return Object(n.useEffect)((function(){!function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";p("api/products/list/".concat(a),"GET",e)}((function(e,a){200===e?r(a):alert("Some problem getting products,Try again later.")}),l)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row products"},t.map((function(e,a){return c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(E,{key:a,product:e}))}))))};var f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row image-row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("img",{className:"intro-img",src:o.a}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-center mt-2"},c.a.createElement("h1",null," Last Products "))),c.a.createElement(v,null))};t(27);var g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("h1",null," Products "))),c.a.createElement(v,null))};var h=function(e){var a=e.match.params.productSlug,t=Object(n.useState)({}),r=Object(i.a)(t,2),l=r[0],m=r[1];return Object(n.useEffect)((function(){!function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";p("api/products/detail/".concat(a,"/"),"GET",e)}((function(e,a){404===e?alert("Not Found."):200===e&&m(a)}),a)}),[]),c.a.createElement(c.a.Fragment,null," ",c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement(E,{product:l,detail:!0}))),"   ")};var b=function(e){var a=e.product,t=e.cartRemoveHandler;return c.a.createElement("li",{className:"list-group-item"},a.title,"  ",c.a.createElement("button",{type:"button",className:"btn btn-danger float-right",onClick:function(e){e.preventDefault(),t(a)}},"Remove"))};var N=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],l=t[1],m=e.data.cartId,s=function(e){var a=r.filter((function(a){return a.id!==e.id}));l(a)};return Object(n.useEffect)((function(){!function(e){p("api/cart/list/","GET",e)}((function(e,a){200===e&&l(a)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Cart ",m," items:"),c.a.createElement("ul",{class:"list-group"},r.map((function(e,a){return c.a.createElement(b,{id:a,product:e,cartRemoveHandler:s})}))))};t(28);var y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"404"),c.a.createElement("h4",null,"Opps! Page not found"),c.a.createElement("p",null,"The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved."),c.a.createElement("a",{href:"/"},"Back To Home"))))},w=t(17),k=t(1);var x=function(e){return c.a.createElement(w.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement(k.c,null,c.a.createElement(k.a,{path:"/",exact:!0,component:f}),c.a.createElement(k.a,{path:"/shop",exact:!0,component:g}),c.a.createElement(k.a,{path:"/shop/:productSlug",component:h}),c.a.createElement(k.a,{path:"/cart",exact:!0,component:function(){return c.a.createElement(N,{data:e})}}),c.a.createElement(k.a,{component:y}))))},j=c.a.createElement,O=document.getElementById("root");l.a.render(j(x,O.dataset),O)}],[[19,1,2]]]);
//# sourceMappingURL=main.d141e97b.chunk.js.map