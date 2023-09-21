(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(6),s=c.n(n),a=c(4),r=c(13),l=c(5),i=c(11),o=c(12),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=function(e){return{type:"filter/SET_QUERY",payload:e}},b=function(){return{type:"filter/REMOVE_QUERY"}},f=function(e){return{type:"filter/SET_STATUS",payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:"all"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return{query:t.payload,status:e.status};case"filter/REMOVE_QUERY":return{query:"",status:e.status};case"filter/SET_STATUS":return{query:e.query,status:t.payload};default:return e}},O=function(e){return{type:"todos/LOAD",payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/LOAD"===t.type?t.payload:e},p=Object(l.combineReducers)({currentTodo:j,filter:m,todos:x}),v=Object(l.createStore)(p,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),y=c(0),N=(c(21),c(22),a.b),g=a.c,T=c(1),E=function(){var e=N(),t=g((function(e){return e.todos})),c=g((function(e){return e.currentTodo})),n=g((function(e){return e.filter})),s=Object(y.useMemo)((function(){var e=t.filter((function(e){var t=e.title.toLowerCase(),c=n.query.toLowerCase();return t.includes(c)}));switch(n.status){case"all":default:return e;case"active":return e.filter((function(e){return!1===e.completed}));case"completed":return e.filter((function(e){return!0===e.completed}))}}),[t,n]);return Object(T.jsxs)(T.Fragment,{children:[0===s.length&&Object(T.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),s.length>0&&Object(T.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"#"}),Object(T.jsx)("th",{children:Object(T.jsx)("span",{className:"icon",children:Object(T.jsx)("i",{className:"fas fa-check"})})}),Object(T.jsx)("th",{children:"Title"}),Object(T.jsx)("th",{children:" "})]})}),Object(T.jsx)("tbody",{children:s.map((function(t){return Object(T.jsxs)("tr",{"data-cy":"todo",children:[Object(T.jsx)("td",{className:"is-vcentered",children:t.id}),t.completed?Object(T.jsx)("td",{className:"is-vcentered",children:Object(T.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(T.jsx)("i",{className:"fas fa-check"})})}):Object(T.jsx)("td",{className:"is-vcentered"}),Object(T.jsx)("td",{className:"is-vcentered is-expanded",children:Object(T.jsx)("p",{className:t.completed?"has-text-success":"has-text-danger",children:t.title})}),Object(T.jsx)("td",{className:"has-text-right is-vcentered",children:Object(T.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){return e(d(t))}(t)},children:Object(T.jsx)("span",{className:"icon",children:(null===c||void 0===c?void 0:c.id)===t.id?Object(T.jsx)("i",{className:"far fa-eye-slash"}):Object(T.jsx)("i",{className:"far fa-eye"})})})})]},t.id)}))})]})]})},S=function(){var e=N(),t=g((function(e){return e.filter}));return Object(T.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(T.jsx)("p",{className:"control",children:Object(T.jsx)("span",{className:"select",children:Object(T.jsxs)("select",{"data-cy":"statusSelect",value:t.status,onChange:function(t){return c=t.target.value,e(f(c));var c},children:[Object(T.jsx)("option",{value:"all",children:"All"}),Object(T.jsx)("option",{value:"active",children:"Active"}),Object(T.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(T.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(T.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(t){return c=t.target.value,e(h(c));var c}}),Object(T.jsx)("span",{className:"icon is-left",children:Object(T.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(T.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(T.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(b())}})})]})]})},w=c(3),k=(c(24),function(){return Object(T.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(T.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var C=function(){var e=Object(y.useState)(),t=Object(w.a)(e,2),c=t[0],n=t[1],s=N(),a=g((function(e){return e.currentTodo}));return Object(y.useEffect)((function(){var e;a&&(e=a.userId,_("/users/".concat(e))).then(n).catch((function(){return new Error("Try again later")}))}),[a]),Object(T.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(T.jsx)("div",{className:"modal-background"}),!c&&Object(T.jsx)(k,{}),c&&Object(T.jsxs)("div",{className:"modal-card",children:[Object(T.jsxs)("header",{className:"modal-card-head",children:[Object(T.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===a||void 0===a?void 0:a.id)}),Object(T.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(u())}})]}),Object(T.jsxs)("div",{className:"modal-card-body",children:[Object(T.jsx)("p",{className:"block","data-cy":"modal-title",children:null===a||void 0===a?void 0:a.title}),Object(T.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==a&&void 0!==a&&a.completed?Object(T.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(T.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(T.jsx)("a",{href:"mailto:".concat(c.email),children:c.name})]})]})]})]})},R=function(){var e=N(),t=g((function(e){return e.todos})),c=g((function(e){return e.currentTodo}));return Object(y.useEffect)((function(){_("/todos").then((function(t){return e(O(t))}))}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"section",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"box",children:[Object(T.jsx)("h1",{className:"title",children:"Todos:"}),Object(T.jsx)("div",{className:"block",children:Object(T.jsx)(S,{})}),Object(T.jsx)("div",{className:"block",children:t.length?Object(T.jsx)(E,{}):Object(T.jsx)(k,{})})]})})}),c&&Object(T.jsx)(C,{})]})},q=function(){return Object(T.jsx)(a.a,{store:v,children:Object(T.jsx)(r.a,{children:Object(T.jsx)(R,{})})})};s.a.render(Object(T.jsx)(q,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.50438740.chunk.js.map