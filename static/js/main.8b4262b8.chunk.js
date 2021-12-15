(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{29:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),o=n.n(s),l=(n(29),n(0)),r=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"/",children:"ICS2608"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/employees",children:"Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/add",children:"Add Employee"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},i=n(6),j=n(2),d=n(3),b=n(20),h=n.n(b).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),u=function(){return h.get("/employees")},m=function(e){return h.post("/employees",e)},p=function(e){return h.put("/employees",e)},O=function(e){return h.get("/employees/${employeeId}")},x=function(e){return h.delete("/employees/${employeeId}")},f=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(d.a)(s,2),r=o[0],i=o[1],b=Object(c.useState)(""),h=Object(d.a)(b,2),u=h[0],x=h[1],f=Object(j.f)(),g=Object(j.g)().employeeId;return Object(c.useEffect)((function(){g&&O(g).then((function(e){a(e.data.main),i(e.data.location),x(e.data.department)})).catch((function(e){console.error("Error!!!")}))}),[g]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Add Employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"main",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"main",placeholder:"Add Employee Name",onChange:function(e){a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"location",className:"form-label",children:"Location"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"location",placeholder:"Add Employee Location",onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"department",className:"form-label",children:"Department"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"department",placeholder:"Add Employee Department",onChange:function(e){x(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),g?p({employeeId:g,main:n,location:r,department:u}).then((function(e){console.log("Added New Employee :>",e.data),f("/employees")})).catch((function(e){console.error("Oops, Something Went Wrong huhuhuhu wawa ka naman")})):m({main:n,location:r,department:u}).then((function(e){console.log("Added New Employee :>",e.data),f("/employees")})).catch((function(e){console.error("Oops, Something Went Wrong huhuhuhu wawa ka naman")}))}(e)},children:"Save"})]})]})},g=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){s()}));var s=function(){u().then((function(e){a(e.data)})).catch((function(e){console.log("pasensya ka na godbless :>")}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"List of Employees"}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table-info",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.main}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"d-grid gap-2 d-flex justify-content-center",children:[Object(l.jsx)(i.b,{className:"btn btn-outline-primary",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return t=e.employeeId,void(window.confirm("Papakawalan mo na ba talaga?")&&x(t).then((function(e){console.log("Successfully deleted!!"),s()})).catch((function(e){console.error("Oops, Mali ka ata ng ginawa",e)})));var t},children:"Delete"})]})})]},e.employeeId)}))})]})})]})};n(49);var v=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Hello ",e.name," aka ",e.alias," "]}),e.children]})},y=function(){return Object(l.jsx)("p",{children:"click mo to kung magkano gusto mong price ng slp"})},N=n(21),k=n(22),C=n(24),A=n(23),E=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;return Object(N.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.decreaseCounter=function(){e.setState({count:e.state.count-1})},e.state={count:0},e}return Object(k.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"button1",onClick:this.addCounter,children:"Click to Increase!"}),Object(l.jsxs)("p",{className:"counter",children:["Price = \u20b1 ",this.state.count,".00"]}),Object(l.jsx)("button",{className:"button2",onClick:this.decreaseCounter,children:"Click to Decrease!"})]})}}]),n}(a.a.Component),w=function(){return h.get("/hello")},S=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){w().then((function(e){a(e.data)})).catch((function(e){console.log("something went wrong")}))})),n};var I=function(){return Object(l.jsxs)("div",{className:"Home",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:"https://cryptologos.cc/logos/smooth-love-potion-slp-logo.png",className:"App-logo",alt:"logo"}),Object(l.jsx)("div",{class:"header",children:Object(l.jsxs)("h1",{className:"blinkText",children:[Object(l.jsx)("img",{src:"https://cryptologos.cc/logos/smooth-love-potion-slp-logo.png",alt:"slp"}),Object(l.jsx)("strong",{children:"SLP TO THE MOON!"}),Object(l.jsx)("img",{src:"https://cryptologos.cc/logos/smooth-love-potion-slp-logo.png",alt:"slp2"})]})}),Object(l.jsx)("p",{children:S}),Object(l.jsx)("br",{}),Object(l.jsx)(v,{name:"Francis",alias:"pogi"}),Object(l.jsx)("br",{}),Object(l.jsx)(y,{}),Object(l.jsx)("div",{class:"button",children:Object(l.jsx)(E,{})}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"kung ayaw mo-"}),Object(l.jsx)("img",{className:"bimby",src:"https://pbs.twimg.com/media/EoslR-RUcAAqPgp.jpg",alt:"bimby"}),Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:"MAMA HACKER NAQ T_T"}),Object(l.jsx)("p",{children:"--papa jihoz help us--"}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(l.jsx)("footer",{children:Object(l.jsx)("h5",{children:"Created by: Francis Angelo Fundal"})})]})},L=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Page not found"})})},D=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",element:Object(l.jsx)(I,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/employees",element:Object(l.jsx)(g,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/add",element:Object(l.jsx)(f,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/edit/:employeeId",element:Object(l.jsx)(f,{})}),Object(l.jsx)(j.a,{exact:!0,path:"*",element:Object(l.jsx)(L,{})})]})})})};var T=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(r,{}),Object(l.jsx)(D,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};n(50);o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.8b4262b8.chunk.js.map