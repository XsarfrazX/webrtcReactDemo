(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t){},133:function(e,t){},151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(9),i=a.n(c),r=a(22),s=a(192),l=a(187),o=a(182),d=a(185),j=a(153),u=a(19),b=a(82),m=a(54),x=a.n(m),p=a(4),O=Object(n.createContext)(),f=Object(b.io)("https://sarru-meetings.herokuapp.com"),h=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(u.a)(a,2),i=c[0],r=c[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),o=l[0],d=l[1],j=Object(n.useState)(),b=Object(u.a)(j,2),m=b[0],h=b[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),C=v[0],w=v[1],y=Object(n.useState)({}),N=Object(u.a)(y,2),k=N[0],I=N[1],S=Object(n.useState)(""),D=Object(u.a)(S,2),R=D[0],A=D[1],B=Object(n.useRef)(),U=Object(n.useRef)(),E=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){h(e),B.current.srcObject=e})),f.on("me",(function(e){return A(e)})),f.on("callUser",(function(e){var t=e.from,a=e.name,n=e.signal;I({isReceivingCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(p.jsx)(O.Provider,{value:{call:k,callAccepted:i,myVideo:B,userVideo:U,stream:m,name:C,setName:w,callEnded:o,me:R,callUser:function(e){var t=new x.a({initiator:!0,trickle:!1,stream:m});t.on("signal",(function(t){f.emit("callUser",{userToCall:e,signalData:t,from:R,name:C})})),t.on("stream",(function(e){U.current.srcObject=e})),f.on("callAccepted",(function(e){r(!0),t.signal(e)})),E.current=t},leaveCall:function(){d(!0),E.current.destroy(),window.location.reload()},answerCall:function(){r(!0);var e=new x.a({initiator:!1,trickle:!1,stream:m});e.on("signal",(function(e){f.emit("answerCall",{signal:e,to:k.from})})),e.on("stream",(function(e){U.current.srcObject=e})),e.signal(k.signal),E.current=e}},children:t})},g=Object(o.a)((function(e){return{video:Object(r.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(r.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",border:"2px solid black",margin:"10px"}}})),v=function(){var e=Object(n.useContext)(O),t=e.name,a=e.callAccepted,c=e.myVideo,i=e.userVideo,r=e.callEnded,s=e.stream,o=e.call,u=g();return Object(p.jsxs)(d.a,{container:!0,className:u.gridContainer,children:[s&&Object(p.jsx)(j.a,{className:u.paper,children:Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(p.jsx)(l.a,{variant:"h5",gutterBottom:!0,children:t||"Name"}),Object(p.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:u.video})]})}),a&&!r&&Object(p.jsx)(j.a,{className:u.paper,children:Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(p.jsx)(l.a,{variant:"h5",gutterBottom:!0,children:o.name||"Name"}),Object(p.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0,className:u.video})]})})]})},C=a(188),w=a(193),y=a(194),N=a(88),k=a(189),I=a(190),S=a(191),D=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(r.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(r.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),R=function(e){var t=e.children,a=Object(n.useContext)(O),c=a.me,i=a.callAccepted,r=a.name,s=a.setName,o=a.callEnded,b=a.leaveCall,m=a.callUser,x=Object(n.useState)(""),f=Object(u.a)(x,2),h=f[0],g=f[1],v=D();return Object(p.jsx)(C.a,{className:v.container,children:Object(p.jsxs)(j.a,{elevation:10,className:v.paper,children:[Object(p.jsx)("form",{className:v.root,noValidate:!0,autoComplete:"off",children:Object(p.jsxs)(d.a,{container:!0,className:v.gridContainer,children:[Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(p.jsx)(l.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(p.jsx)(w.a,{label:"Name",value:r,onChange:function(e){return s(e.target.value)},fullWidth:!0}),Object(p.jsx)(N.CopyToClipboard,{text:c,className:v.margin,children:Object(p.jsx)(y.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(p.jsx)(k.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(p.jsxs)(d.a,{item:!0,xs:12,md:6,className:v.padding,children:[Object(p.jsx)(l.a,{gutterBottom:!0,variant:"h6",children:"Request to join"}),Object(p.jsx)(w.a,{label:"ID to join",value:h,onChange:function(e){return g(e.target.value)},fullWidth:!0}),i&&!o?Object(p.jsx)(y.a,{variant:"contained",color:"secondary",startIcon:Object(p.jsx)(I.a,{fontSize:"large"}),fullWidth:!0,onClick:b,className:v.margin,children:"Hang Up"}):Object(p.jsx)(y.a,{variant:"contained",color:"primary",startIcon:Object(p.jsx)(S.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return m(h)},className:v.margin,children:"Request"})]})]})}),t]})})},A=function(){var e=Object(n.useContext)(O),t=e.answerCall,a=e.call,c=e.callAccepted;return Object(p.jsx)(p.Fragment,{children:a.isReceivingCall&&!c&&Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(p.jsxs)("h1",{children:[a.name," is requesting to join:"]}),Object(p.jsx)(y.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})},B=Object(o.a)((function(e){return{appBar:Object(r.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black"},e.breakpoints.down("xs"),{width:"90%"}),image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),U=function(){var e=B();return Object(p.jsxs)("div",{className:e.wrapper,children:[Object(p.jsx)(s.a,{className:e.appBar,position:"static",color:"inherit",children:Object(p.jsx)(l.a,{variant:"h2",align:"center",children:"Podcast Room"})}),Object(p.jsx)(v,{}),Object(p.jsx)(R,{children:Object(p.jsx)(A,{})})]})};a(151);i.a.render(Object(p.jsx)(h,{children:Object(p.jsx)(U,{})}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.8bdfde01.chunk.js.map