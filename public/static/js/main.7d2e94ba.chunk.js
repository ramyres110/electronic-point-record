(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{30:function(e,t,a){e.exports=a(56)},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(5),s=a(1);var i=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark shadow mb-5"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Checkpoint"),r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"In\xedcio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/checkpoint"},"Registros")))))};var m=function(){return r.a.createElement("nav",{className:"mt-5 p-5 border-top"},"@ramyres110 - \xa9 2020")},u=a(7);var d=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)},p=a(8),E=a.n(p),b=a(29),g=a(28),f=a.n(g).a.create({baseURL:"".concat(window.location.origin,"/api/v1"),timeout:1e4,headers:{"Content-Type":"application/json"}});var v={get:function(e){return f.get(e)},post:function(e,t){return f.post(e,JSON.stringify(t))},del:function(e){return f.delete(e)},put:function(e,t){return f.put(e,JSON.stringify(t))}};function h(e){return e.map((function(e){return Object(b.a)({},e,{typeName:"I"===e.type.trim()?"Entrada":"Sa\xedda",createdAt:new Date(e.createdAt).toLocaleString()})}))}var N={save:function(e){return v.post("/checkpoint",{name:e})},getAll:function(){return v.get("/checkpoint").then((function(e){return e.data?h(e.data):[]}))},getByName:function(e){return v.get("/checkpoint/".concat(e)).then((function(e){return e.data?h(e.data):[]}))},del:function(e){return v.del("/checkpoint/".concat(e))},change:function(e,t){return v.put("/checkpoint/".concat(e),t)}};var y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(d,null,r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card w-100 shadow p-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Registrar"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.trim()||E()("Aten\xe7\xe3o","Informe seu nome para registro do ponto!","warning"),N.save(a).then((function(e){E()("Sucesso","Ponto Registrado!","success"),c("")})).catch((function(e){E()("Ops!","Algo de errado ocorreu impossibilitando o registro!","error"),console.log(e),c("")}))}},r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)},type:"text",className:"form-control mb-3","aria-label":"",autoFocus:!0,placeholder:"Informe seu nome"}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary float-right btn-lg"},"Registrar"))))))))};var k=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),s=o[0],i=o[1];function m(){N.getAll().then((function(e){return c(e)}))}return Object(n.useEffect)((function(){m()}),[]),Object(n.useEffect)((function(){}),[a]),r.a.createElement(d,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("form",{className:"form-inline mb-3",onSubmit:function(e){if(e.preventDefault(),!s)return m();N.getByName(s).then((function(e){return c(e)}))}},r.a.createElement("input",{value:s,onChange:function(e){return i(e.target.value)},className:"form-control mr-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Nome"),r.a.createElement("th",{scope:"col"},"Tipo"),r.a.createElement("th",{scope:"col"},"Registrado Em"))),r.a.createElement("tbody",null,a.length?a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{scope:"col"},e.id),r.a.createElement("td",{scope:"col"},e.name),r.a.createElement("td",{scope:"col",className:"I"===e.type.trim()?"text-success":"text-danger"},e.typeName),r.a.createElement("td",{scope:"col"},e.createdAt))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4",className:"text-muted text-center"},"Nenhum Registro Encontrado"))))))};function w(){return r.a.createElement(o.a,null,r.a.createElement(i,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(s.a,{path:"/checkpoint"},r.a.createElement(k,null))),r.a.createElement(m,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7d2e94ba.chunk.js.map