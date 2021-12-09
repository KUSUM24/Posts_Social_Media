(this.webpackJsonpcrud_app=this.webpackJsonpcrud_app||[]).push([[0],{68:function(e,t,c){},70:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(21),i=c.n(s),r=c(24),l=c(48),j=c.n(l),d=c(53),o=c(11),b=c(17),u=c(7),x=(c(68),c(1)),O=function(){return Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)("div",{className:"lds-dual-ring"})})},h=c(99),m=c(101),p=c(100),f=c(56),v=(c(70),function(){var e=Object(n.useContext)(I),t=Object(n.useRef)();return Object(x.jsxs)(h.a,{className:"header-main",expand:"lg",children:[Object(x.jsx)(h.a.Brand,{className:"heading",href:"/Posts_Social_Media",children:Object(x.jsx)("b",{children:"CRUD Application"})}),Object(x.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",className:"collapse",children:[Object(x.jsxs)(m.a,{className:"mr-auto",children:[Object(x.jsx)(b.b,{to:"/Posts_Social_Media/create",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Create a post"}),Object(x.jsx)(b.b,{to:"/Posts_Social_Media/liked",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Liked Posts"}),Object(x.jsx)(b.b,{to:"/Posts_Social_Media/disliked",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Disliked Posts"}),Object(x.jsx)(b.b,{to:"/Posts_Social_Media",style:{textDecoration:"none",color:"black",margin:"0px 20px",cursor:"pointer"},children:"Home"})]}),Object(x.jsx)(p.a,{className:"form-search",children:Object(x.jsx)(f.a,{type:"text",ref:t,placeholder:"Search Posts...",className:"mr-sm-2",onChange:function(){return e(t.current.value)}})})]})]})}),g=c(102),C=c(44),y=c.n(C),N=c(96),k=c(45),S=c.n(k),D=c(46),P=c.n(D),w=function(e){var t=e.statusDisplay,c=Object(n.useContext)(M),a=Object(n.useContext)(R),s=Object(n.useContext)(q),i=Object(n.useContext)(J),r=(i.updateName,i.updatePost,i.handleUpdate),l=Object(n.useContext)(F),j=l.likedList,d=l.handleLiked,o=Object(n.useContext)(H),b=o.dislikedList,O=o.handleDisliked,h=Object(u.f)(),m=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.a,{className:"text-center m-4 w-75",style:{boxShadow:"5px 5px 10px rgb(131, 130, 130)"},children:[Object(x.jsx)(g.a.Header,{className:"card-header bg-dark text-white",children:Object(x.jsxs)("b",{children:[e.title," "]})}),Object(x.jsx)(g.a.Body,{children:e.body}),Object(x.jsxs)(g.a.Footer,{className:"d-flex justify-content-between align-items-center",children:[Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"".concat(j.includes(e)?"btn btn-success":"btn btn-light"," mx-2"),onClick:function(){return t=e.id,void d(t);var t},children:Object(x.jsx)(y.a,{})}),Object(x.jsx)("div",{className:"".concat(b.includes(e)?"btn btn-danger":"btn btn-light"),onClick:function(){return t=e.id,void O(t);var t},children:Object(x.jsx)(N.a,{})})]}),Object(x.jsxs)("b",{className:"d-flex ",children:["By"," ",Object(x.jsx)("div",{className:"mx-2",style:{textDecoration:"underline"},children:a.map((function(t){if(t.id==e.userId)return t.name}))})]}),Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("div",{className:"btn text-white d-flex align-items-center",style:{backgroundColor:"#5567ff"},onClick:function(){return t=e.id,r(t),void h.push("/update");var t},children:Object(x.jsx)(S.a,{})}),Object(x.jsx)("div",{className:"btn text-white d-flex align-items-center mx-2",style:{backgroundColor:"#ed0b4c"},onClick:function(){return s(e.id)},children:Object(x.jsx)(P.a,{})})]})]})]})})};return Object(x.jsx)("div",{className:"d-flex flex-column align-items-center",children:"Disliked"==t?Object(x.jsx)(x.Fragment,{children:b.map(m)}):Object(x.jsx)(x.Fragment,{children:"Liked"==t?Object(x.jsx)(x.Fragment,{children:j.map(m)}):Object(x.jsx)(x.Fragment,{children:c.map(m)})})})},_=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(w,{})]})},E=c(97),L=c(98),B=function(){var e=Object(u.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=(c[1],Object(n.useState)("")),i=Object(o.a)(s,2),r=i[0],l=i[1],j=Object(n.useState)(""),d=Object(o.a)(j,2),b=d[0],O=d[1],h=Object(n.useContext)(G);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(E.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"75vh"},children:Object(x.jsxs)(g.a,{className:"w-100",style:{maxWidth:"800px",border:"1px solid"},children:[Object(x.jsx)(g.a.Header,{style:{fontSize:"130%"},className:"card-heading text-center text-white bg-dark",children:Object(x.jsx)("b",{children:"Post Details"})}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(p.a,{onSubmit:function(t){return t.preventDefault(),e.push("/CRUD_Application"),void h(a,r,b)},children:[Object(x.jsx)("div",{className:"row"}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{children:"Title"}),Object(x.jsx)(p.a.Control,{className:"my-2",placeholder:"Title",value:r,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(x.jsxs)(p.a.Group,{children:[Object(x.jsx)("label",{children:"Body"}),Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,className:"my-2",placeholder:"Body",value:b,onChange:function(e){return O(e.target.value)},required:!0})]}),Object(x.jsx)("div",{className:"text-center",children:Object(x.jsx)(L.a,{type:"submit",children:"CREATE"})})]})})]})})]})},U=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(w,{statusDisplay:"Disliked"})]})},A=function(){var e=Object(n.useContext)(F);e.likedList,e.handleLiked,Object(n.useContext)(R);return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(w,{statusDisplay:"Liked"})]})},T=function(){var e=Object(n.useContext)(J),t=e.updateName,c=e.updatePost,a=(e.handleUpdate,e.handleUpdateDetails),s=Object(n.useState)(t),i=Object(o.a)(s,2),r=i[0],l=i[1],j=Object(n.useState)(c.title),d=Object(o.a)(j,2),b=d[0],O=d[1],h=Object(n.useState)(c.body),m=Object(o.a)(h,2),f=m[0],C=m[1],y=Object(u.f)();return Object(x.jsxs)("div",{children:[" ",Object(x.jsx)(v,{}),Object(x.jsx)(E.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"75vh"},children:Object(x.jsxs)(g.a,{className:"w-100",style:{maxWidth:"800px",border:"1px solid"},children:[Object(x.jsx)(g.a.Header,{className:"card-heading text-center text-white bg-dark",children:Object(x.jsx)("b",{children:"Post Details"})}),Object(x.jsx)(g.a.Body,{children:Object(x.jsxs)(p.a,{onSubmit:function(e){return e.preventDefault(),y.push("/CRUD_Application"),void a(r,b,f,c.id)},children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-md-6 ",children:[Object(x.jsx)("label",{children:"Creator Name"}),Object(x.jsx)(p.a.Control,{className:"my-2",value:r,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"form-group col-md-6",children:[Object(x.jsx)("label",{children:"Title"}),Object(x.jsx)(p.a.Control,{className:"my-2",value:b,onChange:function(e){return O(e.target.value)},required:!0})]})]}),Object(x.jsxs)(p.a.Group,{children:[Object(x.jsx)("label",{children:"Body"}),Object(x.jsx)(p.a.Control,{as:"textarea",rows:3,className:"my-2",value:f,onChange:function(e){return C(e.target.value)},required:!0})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)(L.a,{type:"submit",children:"UPDATE"}),Object(x.jsx)(L.a,{onClick:function(){y.push("/CRUD_Application")},className:"btn btn-dark",children:"BACK"})]})]})})]})})]})},M=a.a.createContext(),R=a.a.createContext(),F=a.a.createContext(),H=a.a.createContext(),q=a.a.createContext(),I=a.a.createContext(),G=a.a.createContext(),J=a.a.createContext();var W=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),l=i[0],h=i[1],m=Object(n.useState)([]),p=Object(o.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)(!0),C=Object(o.a)(g,2),y=C[0],N=C[1],k=Object(n.useState)([]),S=Object(o.a)(k,2),D=S[0],P=S[1],w=Object(n.useState)([]),E=Object(o.a)(w,2),L=E[0],W=E[1],z=Object(n.useState)({}),K=Object(o.a)(z,2),Q=K[0],V=K[1],X=Object(n.useState)(""),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1];return Object(n.useEffect)((function(){return function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,a(c),h(c),e.next=10,fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"});case 10:return t=e.sent,e.next=13,t.json();case 13:c=e.sent,v(c),N(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(x.jsxs)("div",{className:"App",children:[y&&Object(x.jsx)(O,{}),!y&&Object(x.jsx)(b.a,{children:Object(x.jsx)(u.c,{children:Object(x.jsx)(M.Provider,{value:c,children:Object(x.jsx)(R.Provider,{value:f,children:Object(x.jsx)(F.Provider,{value:{likedList:D,handleLiked:function(e){var t=D,n=L;c.map((function(c){if(e==c.id&&!t.includes(c)&&(t.unshift(c),n.includes(c))){var a=n.indexOf(c);n.splice(a,1)}})),P(Object(r.a)(t)),W(Object(r.a)(n))}},children:Object(x.jsx)(H.Provider,{value:{dislikedList:L,handleDisliked:function(e){var t=L,n=D;c.map((function(c){if(e==c.id&&!t.includes(c)&&(t.unshift(c),n.includes(c))){var a=n.indexOf(c);n.splice(a,1)}})),W(Object(r.a)(t)),P(Object(r.a)(n))}},children:Object(x.jsx)(q.Provider,{value:function(e){a((function(t){return t.filter((function(t){return t.id!=e}))}))},children:Object(x.jsx)(I.Provider,{value:function(e){var t=[],c=(Object(r.a)(D),new RegExp(e,"i"));l.forEach((function(e){f.forEach((function(n){n.id==e.userId&&n.name.match(c)&&!t.includes(e)&&t.push(e)})),!e.title.match(c)&&!e.body.match(c)||t.includes(e)||t.push(e)})),a(t)},children:Object(x.jsx)(G.Provider,{value:function(e,t,n){var a={},s={};a.userId=f.length+1,a.id=c.length+1,a.title=t,a.body=n,s.id=f.length+1,s.name=e,c.unshift(a),f.unshift(s)},children:Object(x.jsxs)(J.Provider,{value:{updateName:Z,updatePost:Q,handleUpdate:function(e){c.map((function(t){e==t.id&&(V(t),f.forEach((function(e){e.id==t.userId&&$(e.name)})))}))},handleUpdateDetails:function(e,t,n,a){c.forEach((function(e){e.id==a&&(e.title=t,e.body=n)}))}},children:[Object(x.jsx)(u.a,{exact:!0,path:"/",children:Object(x.jsx)(_,{})}),Object(x.jsx)(u.a,{path:"/liked",children:Object(x.jsx)(A,{})}),Object(x.jsx)(u.a,{path:"/disliked",children:Object(x.jsx)(U,{})}),Object(x.jsx)(u.a,{path:"/create",children:Object(x.jsx)(B,{})}),Object(x.jsx)(u.a,{path:"/update",children:Object(x.jsx)(T,{})}),Object(x.jsx)(u.a,{path:"/Posts_Social_Media",children:Object(x.jsx)(_,{})})]})})})})})})})})})})]})};c(78);i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.3688f974.chunk.js.map