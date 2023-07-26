"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[94],{58246:function(t,e,n){n.d(e,{Z:function(){return b}});var r=n(72791),a=n(64554),i=n(63021),o=n(36314),c=n(93044),s=n(20890),l=n(66934),u=n(13967),d=n(12065),p=n(59434),h=n(55613),f=function(t){return("0"+t).slice(-2)};function g(t){var e=new Date(t),n=new Date;n=new Date(n.toDateString());var r=(new Date).setDate(n.getDate()-1);return e>n?function(t){var e=t.getHours(),n=t.getMinutes();return f(e)+":"+f(n)}(e):e>r?"Yesterday":e.getDate()+"/"+e.getMonth()+"/"+e.getFullYear().toString().substring(2,4)}var m=n(71498),x=n(94984),v=n(80184),Z=(0,l.ZP)(a.Z)((function(t){t.theme;return{"&:hover":{cursor:"pointer"}}})),j=(0,l.ZP)(i.Z)((function(t){var e=t.theme;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),b=function(t){var e,n,a,i,l,f,b,w=t._id,k=t.users,y=t.latestMessage,C=t.isGroupChat,M=t.chatName,E=(0,p.I0)(),W=(0,p.v9)((function(t){return t.app})).chat_id,A=(0,p.v9)((function(t){return t.app.user}))._id,I=W===w;W||(I=!1),(0,r.useEffect)((function(){}),[W,y]);var S,B,V=(0,u.Z)();return(0,v.jsx)(Z,{onClick:function(){m.W.emit("leave chat",W),E((0,h.ND)({chat_id:w,isGroupChat:C})),m.W.emit("join chat",w),m.W.on("connected",(function(){console.log("Socket Connected"),E((0,x.h7)(!0))}))},sx:{width:"100%",borderRadius:1,backgroundColor:I?"light"===V.palette.mode?(0,d.Fq)(V.palette.primary.main,.5):V.palette.primary.main:"light"===V.palette.mode?"#fff":V.palette.background.paper},p:2,children:(0,v.jsxs)(o.Z,{direction:"row",alignItems:"flex-end",justifyContent:"space-between",children:[(0,v.jsxs)(o.Z,{direction:"row",spacing:2,children:[" ",C?(0,v.jsx)(c.Z,{alt:M,src:""}):"online"===(null===(e=k[0])||void 0===e?void 0:e.status)?(0,v.jsx)(j,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,v.jsx)(c.Z,{alt:null===(n=k[0])||void 0===n?void 0:n.firstName,src:null===(a=k[0])||void 0===a?void 0:a.avatar})}):(0,v.jsx)(c.Z,{alt:null===(i=k[0])||void 0===i?void 0:i.firstName,src:null===(l=k[0])||void 0===l?void 0:l.avatar}),(0,v.jsxs)(o.Z,{children:[C?(0,v.jsx)(s.Z,{variant:"subtitle2",children:M}):(0,v.jsx)(s.Z,{variant:"subtitle2",children:(null===(f=k[0])||void 0===f?void 0:f.firstName)+" "+(null===(b=k[0])||void 0===b?void 0:b.lastName)}),(0,v.jsxs)(o.Z,{direction:"row",spacing:.5,children:[(0,v.jsx)(s.Z,{variant:"caption",sx:{fontWeight:"600"},children:y?y.sender._id===A?"You: ":"".concat(y.sender.firstName.trim(),": "):""}),(0,v.jsx)(s.Z,{variant:"caption",sx:{fontWeight:"500"},children:y?(S=y.content,B=20,(null===S||void 0===S?void 0:S.length)>B?"".concat(null===S||void 0===S?void 0:S.slice(0,B),"..."):S):""})]})]})]}),(0,v.jsx)(o.Z,{spacing:2,alignItems:"end",direction:"column",children:(0,v.jsx)(s.Z,{sx:{fontWeight:600},variant:"caption",children:y?g(y.createdAt):""})})]})})}},53614:function(t,e,n){n.d(e,{ol:function(){return i},cB:function(){return o},el:function(){return s}});var r=n(66934),a=n(12065),i=(0,r.ZP)("div")((function(t){var e=t.theme;return{position:"relative",borderRadius:20,backgroundColor:(0,a.Fq)(e.palette.background.paper,1),marginRight:e.spacing(2),marginLeft:0,width:"100%"}})),o=(0,r.ZP)("div")((function(t){return{padding:t.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),c=n(85818),s=(0,r.ZP)(c.ZP)((function(t){var e=t.theme;return{color:"inherit","& .MuiInputBase-input":{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),")"),width:"100%"}}}))},41036:function(t,e,n){n(72791);var r=n(13967),a=n(64554),i=n(36314),o=n(13400),c=n(6842),s=n(15122),l=n(59434),u=n(55613),d=n(57689),p=n(80184);e.Z=function(){var t=(0,r.Z)(),e=(0,d.s0)(),n=(0,l.I0)(),h=(0,l.v9)((function(t){return t.app})).tab;return(0,p.jsx)(a.Z,{sx:{zIndex:10,position:"absolute",bottom:0,width:"100vw",backgroundColor:t.palette.background.paper,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,p.jsxs)(i.Z,{sx:{width:"100%"},direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,p:2,children:[s.u5.map((function(r){return r.index===h?(0,p.jsx)(a.Z,{sx:{backgroundColor:t.palette.primary.main,borderRadius:1.5},p:1,children:(0,p.jsx)(o.Z,{sx:{width:"max-content",color:"#ffffff"},children:r.icon})}):(0,p.jsx)(o.Z,{onClick:function(){var t;2!==(t=r.index)?(n((0,u.Tn)({tab:t})),e(function(t){switch(t){case 0:return"/app";case 1:return"/group";case 2:return"/call";case 3:return"/settings"}}(t))):n((0,u.OV)({severity:"info",message:"Feature Under Construction"}))},sx:{width:"max-content",color:"light"===t.palette.mode?"#080707":t.palette.text.primary},children:r.icon})})),(0,p.jsx)(c.Z,{})]})})}},57007:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var r=n(1413),a=n(29439),i=n(72791),o=n(64554),c=n(36314),s=n(20890),l=n(13400),u=n(57320),d=n(40703),p=n(13967),h=n(29998),f=n(41036),g=n(58246),m=n(55931),x=n(5289),v=n(65661),Z=n(39157),j=n(59434),b=n(55613),w=n(74165),k=n(15861),y=n(63021),C=n(93044),M=n(66934),E=n(53687),W=n(57689),A=n(80184),I=(0,M.ZP)(o.Z)((function(t){t.theme;return{"&:hover":{cursor:"pointer"}}})),S=(0,M.ZP)(y.Z)((function(t){var e=t.theme;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),B=function(t){var e=t.avatar,n=t.firstName,r=t.lastName,a=t.status,i=t._id,o=t.handleClose,u=(0,p.Z)(),d="".concat(n," ").concat(r),h=(0,j.I0)(),f=(0,W.s0)();return(0,A.jsx)(I,{sx:{width:"100%",borderRadius:1,backgroundColor:u.palette.background.paper},p:1,children:(0,A.jsxs)(c.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,A.jsxs)(c.Z,{direction:"row",alignItems:"center",spacing:2,children:[" ","Online"===a?(0,A.jsx)(S,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,A.jsx)(C.Z,{alt:d,src:e})}):(0,A.jsx)(C.Z,{alt:d,src:e}),(0,A.jsx)(c.Z,{spacing:.3,children:(0,A.jsx)(s.Z,{variant:"subtitle2",children:d})})]}),(0,A.jsx)(c.Z,{direction:"row",spacing:2,alignItems:"center",children:(0,A.jsx)(l.Z,{onClick:(0,k.Z)((0,w.Z)().mark((function t(){return(0,w.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(i,"working"),t.next=3,h((0,b.VM)({_id:i})).then(o()).then(f("/app"));case 3:case"end":return t.stop()}}),t)}))),children:(0,A.jsx)(E.Z,{})})})]})})},V=i.forwardRef((function(t,e){return(0,A.jsx)(m.Z,(0,r.Z)({direction:"up",ref:e},t))})),F=function(t){var e=t.open,n=t.handleClose,a=(0,j.I0)(),o=(0,j.v9)((function(t){return t.app})).users;return(0,i.useEffect)((function(){a((0,b.j4)())}),[]),(0,A.jsxs)(x.Z,{fullWidth:!0,maxWidth:"xs",open:e,TransitionComponent:V,keepMounted:!0,onClose:n,"aria-describedby":"alert-dialog-slide-description",sx:{p:4},children:[(0,A.jsx)(c.Z,{width:"100%",direction:"row",justifyContent:"center",children:(0,A.jsx)(v.Z,{children:"Start New Chat"})}),(0,A.jsx)(Z.Z,{children:(0,A.jsx)(c.Z,{sx:{height:"100%"},children:(0,A.jsx)(c.Z,{children:o.map((function(t,e){return(0,A.jsx)(B,(0,r.Z)((0,r.Z)({},t),{},{handleClose:n}),e)}))})})})]})},H=n(53614),N=(n(71498),function(){var t=(0,p.Z)(),e=(0,h.Z)("up","md"),n=(0,j.I0)(),m=(0,j.v9)((function(t){return t.app})).chats;(0,i.useEffect)((function(){n((0,b.dv)()),n((0,b.Tn)({tab:0}))}),[]),(0,i.useEffect)((function(){}),[m]);var x=(0,i.useState)(!1),v=(0,a.Z)(x,2),Z=v[0],w=v[1];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(o.Z,{sx:{position:"relative",height:"100%",width:e?320:"100vw",backgroundColor:"light"===t.palette.mode?"#F8FAFF":t.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:[!e&&(0,A.jsx)(f.Z,{}),(0,A.jsxs)(c.Z,{p:3,pr:1.5,spacing:2,sx:{maxHeight:"100vh",height:"100%"},children:[(0,A.jsxs)(c.Z,{alignItems:"center",justifyContent:"space-between",direction:"row",pr:1.5,children:[(0,A.jsx)(s.Z,{variant:"h5",children:"Chats"}),(0,A.jsx)(c.Z,{direction:"row",alignItems:"center",spacing:1,children:(0,A.jsx)(l.Z,{onClick:function(){w(!0)},sx:{width:"max-content"},children:(0,A.jsx)(u.Z,{})})})]}),(0,A.jsx)(c.Z,{sx:{width:"100%",height:"auto"},pr:1.5,children:(0,A.jsxs)(H.ol,{children:[(0,A.jsx)(H.cB,{children:(0,A.jsx)(d.Z,{color:"#709CE6"})}),(0,A.jsx)(H.el,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})}),(0,A.jsx)(c.Z,{sx:{flexGrow:1,overflowY:"scroll",height:"100%"},pr:.5,children:(0,A.jsxs)(c.Z,{spacing:1,children:[(0,A.jsx)(s.Z,{variant:"subtitle2",sx:{color:"#676667"},children:"All Chats"}),m.filter((function(t){return!t.isGroupChat})).map((function(t,e){return(0,i.createElement)(g.Z,(0,r.Z)((0,r.Z)({},t),{},{key:e}))}))]})})]})]}),Z&&(0,A.jsx)(F,{open:Z,handleClose:function(){w(!1)}})]})})},20890:function(t,e,n){n.d(e,{Z:function(){return j}});var r=n(63366),a=n(87462),i=n(72791),o=n(28182),c=n(78519),s=n(94419),l=n(66934),u=n(31402),d=n(14036),p=n(75878),h=n(21217);function f(t){return(0,h.Z)("MuiTypography",t)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(80184),m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e["align".concat((0,d.Z)(n.align))],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((function(t){var e=t.theme,n=t.ownerState;return(0,a.Z)({margin:0},n.variant&&e.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=i.forwardRef((function(t,e){var n=(0,u.Z)({props:t,name:"MuiTypography"}),i=function(t){return Z[t]||t}(n.color),l=(0,c.Z)((0,a.Z)({},n,{color:i})),p=l.align,h=void 0===p?"inherit":p,j=l.className,b=l.component,w=l.gutterBottom,k=void 0!==w&&w,y=l.noWrap,C=void 0!==y&&y,M=l.paragraph,E=void 0!==M&&M,W=l.variant,A=void 0===W?"body1":W,I=l.variantMapping,S=void 0===I?v:I,B=(0,r.Z)(l,m),V=(0,a.Z)({},l,{align:h,color:i,className:j,component:b,gutterBottom:k,noWrap:C,paragraph:E,variant:A,variantMapping:S}),F=b||(E?"p":S[A]||v[A])||"span",H=function(t){var e=t.align,n=t.gutterBottom,r=t.noWrap,a=t.paragraph,i=t.variant,o=t.classes,c={root:["root",i,"inherit"!==t.align&&"align".concat((0,d.Z)(e)),n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,s.Z)(c,f,o)}(V);return(0,g.jsx)(x,(0,a.Z)({as:F,ref:e,ownerState:V,className:(0,o.Z)(H.root,j)},B))}))},18252:function(t,e,n){var r;n.d(e,{Z:function(){return s}});var a=n(29439),i=n(72791),o=0;var c=(r||(r=n.t(i,2)))["useId".toString()];function s(t){if(void 0!==c){var e=c();return null!=t?t:e}return function(t){var e=i.useState(t),n=(0,a.Z)(e,2),r=n[0],c=n[1],s=t||r;return i.useEffect((function(){null==r&&c("mui-".concat(o+=1))}),[r]),s}(t)}},53687:function(t,e,n){var r=n(72791),a=n(92602),i=n(87120),o=new Map;o.set("bold",(function(t){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))})),o.set("duotone",(function(t){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M78,201.3,45.1,228.9A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H81.7Z",opacity:"0.2"}),r.createElement("path",{d:"M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))})),o.set("fill",(function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M216,48H40A16,16,0,0,0,24,64V222.8a15.7,15.7,0,0,0,9.3,14.5,16,16,0,0,0,17-2.2L82,208.4l134-.4a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Z"}))})),o.set("light",(function(t){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))})),o.set("thin",(function(t){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))})),o.set("regular",(function(t){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}));var c=function(t,e){return(0,a._)(t,e,o)},s=(0,r.forwardRef)((function(t,e){return r.createElement(i.Z,Object.assign({ref:e},t,{renderPath:c}))}));s.displayName="Chat",e.Z=s}}]);
//# sourceMappingURL=94.54655f99.chunk.js.map