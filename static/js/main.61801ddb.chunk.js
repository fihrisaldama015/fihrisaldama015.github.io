(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t),c.d(t,"RegisterWithGoogle",(function(){return K})),c.d(t,"SignOutGoogle",(function(){return U}));var n,s,r=c(7),a=c.n(r),i=c(36),o=c.n(i),l=(c(52),c(5)),j=c(6),b=c(8),d=c(9),u=c.p+"static/media/logo.6ce24c58.svg",h=c.p+"static/media/Asset1.768f27b8.svg",p=(c(53),c(20)),m=c(3),O=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"profile-log-out",children:[console.log(this.props.username),Object(m.jsx)("button",{className:"logout-button",onClick:U,children:"Keluar"})]})}}]),c}(a.a.Component),x=function(e){return Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)(C,{}),Object(m.jsx)("h1",{children:"My Profile"}),Object(m.jsxs)("div",{style:{margin:"1em 0 0 0"},children:[Object(m.jsx)("p",{style:{color:"var(--react-dark)",fontSize:".75em"},children:"Name : "}),Object(m.jsx)("b",{children:e.username||"-"})]}),Object(m.jsxs)("div",{style:{margin:"1em 0"},children:[Object(m.jsxs)("p",{style:{color:"var(--react-dark)",fontSize:".75em"},children:["Email :"," "]}),Object(m.jsx)("b",{children:e.email||"-@gmail.com"})]}),Object(m.jsx)("p",{children:null!=e.username?Object(m.jsx)(p.a,{children:Object(m.jsx)(p.b,{to:"/",children:Object(m.jsx)(O,{username:e.username})})}):null})]})},g=c(15),f=c(17),A=c(25),v=c(26),y=v.a.button(n||(n=Object(A.a)(["\n    color:var(--white);\n    background-color:var(--react-blue);\n    border:2px solid var(--react-blue);\n    border-radius:10px;\n    padding: 10px;\n    font-weight:600;\n    box-shadow: 5px 5px 30px 10px var(--blue-shadow);\n    margin-top:2vh;\n    transition:0.2s;\n    &:hover {\n      color:#61dafb;\n      background-color:var(--white);\n      transition:0.2s;\n    }\n"])));a.a.Component;function N(){var e=Object(r.useState)("DEFAULT VALUE"),t=Object(g.a)(e,2),c=t[0],n=t[1];return Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("h1",{children:c}),Object(m.jsx)(y,{onClick:function(){n("DEFAULT VALUE"!==c?"DEFAULT VALUE":"TESTING")},children:"CHANGE !"})]})}c(64);var S,E,k=function(){var e=v.a.p(S||(S=Object(A.a)(["\n    color: red;\n    font-size: 0.4em;\n  "])));return Object(m.jsx)("header",{className:"App-header",children:Object(m.jsxs)("div",{className:"register-card",children:[Object(m.jsx)("h1",{children:"Daftar"}),Object(m.jsx)(e,{children:"*untuk sementara signIn dengan Google"}),Object(m.jsx)("br",{}),Object(m.jsxs)("form",{children:[Object(m.jsx)("label",{for:"username",id:"label",children:"Username :"}),Object(m.jsx)("input",{id:"username",autocomplete:"off",className:"register-input",type:"text",placeholder:"Masukkan Username..."}),Object(m.jsx)("label",{for:"email",id:"label",children:"Email :"}),Object(m.jsx)("input",{id:"email",className:"register-input",type:"email",placeholder:"Masukkan Email..."}),Object(m.jsx)("label",{for:"password",id:"label",children:"Password :"}),Object(m.jsx)("input",{min:"8",id:"password",className:"register-input",type:"password",placeholder:"Masukkan Password..."}),Object(m.jsx)("button",{className:"submit-button",type:"submit",children:"Daftar"}),Object(m.jsx)("button",{className:"register-link",children:" Masuk"})]}),Object(m.jsx)("h5",{id:"or",children:"or"}),Object(m.jsxs)("div",{className:"google-btn",onClick:K,children:[Object(m.jsx)("div",{className:"google-icon-wrapper",children:Object(m.jsx)("img",{alt:"google-icon",className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})}),Object(m.jsx)("p",{className:"btn-text",children:Object(m.jsx)("b",{children:"Sign in with google"})})]})]})})},H=(c(65),function(){var e=function(e){var t=v.a.div(E||(E=Object(A.a)(["\n      ","\n      ","\n    "])),"math"===e.type?"background: #dd4444;":"","chemistry"===e.type?"background: var(--blue-bantuin)":"");return Object(m.jsxs)(t,{className:"card-in",children:[Object(m.jsx)("p",{style:{opacity:"0.8",color:"var(--light)"},children:e.type}),Object(m.jsx)("h3",{style:{color:"var(--react-light)"},children:"Username"}),Object(m.jsxs)("p",{style:{marginTop:"1em",fontSize:".8em"},children:["Here is where question meant to be written"," "]})]})};return Object(m.jsx)("header",{className:"App-header-main",children:Object(m.jsxs)("div",{className:"main-card",children:[Object(m.jsx)("h1",{children:"Last Minute Problem"}),Object(m.jsxs)("div",{className:"bungkus",children:[Object(m.jsx)(e,{type:"math"}),Object(m.jsx)(e,{type:"chemistry"})]}),Object(m.jsx)("a",{href:"/",children:"\u2192 See All"})]})})}),G=c(10),C=function(){return Object(m.jsx)("img",{src:u,className:"App-logo",alt:"logo"})},M=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{id:"user-info",children:[Object(m.jsx)("p",{children:!0===this.props.status?this.props.username:"Guest"}),Object(m.jsx)("img",{className:"user-profile-picture-nav",src:this.props.userPic||"data:image/png;base64,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",alt:"user"}),Object(m.jsx)(p.a,{children:Object(m.jsx)(p.b,{to:"/",children:!0===this.props.status?Object(m.jsx)("button",{className:"nav-logout-button",onClick:U,children:"Keluar"}):null})})]})}}]),c}(a.a.Component),T=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){var e=this,t=function(){return!0===e.props.userLogin?Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsxs)("h1",{children:["Hi ",e.props.username," !"]}),Object(m.jsx)("p",{children:"Konten menyusul :)"})]}):Object(m.jsx)("header",{className:"App-header-home",children:Object(m.jsxs)("div",{className:"opening",children:[Object(m.jsx)(C,{}),Object(m.jsx)("p",{style:{marginBottom:"0",textAlign:"left",opacity:".8",transform:"scale(.7) translateX(-8em)"},children:"September 28, 2021"}),Object(m.jsx)("h1",{children:"Hi. I'm Aldam \ud83e\udd32"}),Object(m.jsxs)("p",{children:["This Page was made to snapshot my learning progress, using a Backend-as-a-Service (Baas) that called"," ",Object(m.jsx)("a",{href:"https://firebase.google.com/",target:"blank",children:"Firebase"})]}),Object(m.jsx)(p.b,{to:"/login",children:Object(m.jsx)("button",{className:"blue-button",children:"Let's Try"})})]})})};return Object(m.jsx)(p.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("nav",{className:"App-nav",children:[Object(m.jsxs)("ul",{children:[Object(m.jsxs)(p.b,{to:"/",children:[Object(m.jsx)("img",{className:"Main-logo",src:h,alt:"App-logo"}),Object(m.jsx)("li",{children:"Home"})]}),Object(m.jsx)(p.b,{to:"/button",children:Object(m.jsx)("li",{children:"Explore"})}),Object(m.jsx)(p.b,{to:"/test",children:Object(m.jsx)("li",{children:"Test"})}),Object(m.jsx)(p.b,{to:"/about",children:Object(m.jsx)("li",{children:"Profile"})})]}),Object(m.jsx)("div",{className:"user-profile",children:Object(m.jsx)(M,{userPic:this.props.userPic,status:this.props.userLogin,username:this.props.username})})]}),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(G.d,{children:[Object(m.jsx)(G.b,{path:"/button",children:Object(m.jsx)(H,{})}),Object(m.jsx)(G.b,{path:"/about",children:Object(m.jsx)(x,{status:this.props.userLogin,username:this.props.username,email:this.props.email})}),Object(m.jsx)(G.b,{path:"/test",children:Object(m.jsx)(N,{})}),Object(m.jsx)(G.b,{path:"/login",render:function(){return e.props.userLogin?Object(m.jsx)(G.a,{to:"/"}):Object(m.jsx)(k,{})}}),Object(m.jsx)(G.b,{path:"/",children:Object(m.jsx)(t,{})})]})})]})})}}]),c}(a.a.Component),w=T,R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))},V=c(46),L=c(29),D=Object(V.a)({apiKey:"AIzaSyDs49OYpNmLEKzoLuWkiydBLRVmSECodwE",authDomain:"learn-react-13cf4.firebaseapp.com",projectId:"learn-react-13cf4",storageBucket:"learn-react-13cf4.appspot.com",messagingSenderId:"782701918760",appId:"1:782701918760:web:b520ede1a5c2a04d49531d",measurementId:"G-2HETTW5VRD"}),I=new L.a,P=Object(L.b)(D);function K(){Object(L.d)(P,I).then((function(e){})).catch((function(e){}))}function U(){window.confirm("Are you sure want to Sign out?")&&Object(L.e)(P).then((function(){alert("Sign Out Successful")})).catch((function(e){console.log(e.message)}))}Object(L.c)(P,(function(e){if(null!=e){console.log("user login");var t=P.currentUser.email,c=P.currentUser.photoURL,n=P.currentUser.displayName;o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(w,{userLogin:!0,username:n,userPic:c,email:t})}),document.getElementById("root"))}else{console.log("No user");o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(w,{userLogin:!1})}),document.getElementById("root"))}})),R()}},[[67,1,2]]]);
//# sourceMappingURL=main.61801ddb.chunk.js.map