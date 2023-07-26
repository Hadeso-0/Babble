"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[673],{58246:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(72791),i=r(64554),o=r(63021),a=r(36314),s=r(93044),c=r(20890),l=r(66934),d=r(13967),u=r(12065),p=r(59434),h=r(55613),f=function(e){return("0"+e).slice(-2)};function x(e){var t=new Date(e),r=new Date;r=new Date(r.toDateString());var n=(new Date).setDate(r.getDate()-1);return t>r?function(e){var t=e.getHours(),r=e.getMinutes();return f(t)+":"+f(r)}(t):t>n?"Yesterday":t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear().toString().substring(2,4)}var v=r(71498),g=r(94984),m=r(80184),Z=(0,l.ZP)(i.Z)((function(e){e.theme;return{"&:hover":{cursor:"pointer"}}})),j=(0,l.ZP)(o.Z)((function(e){var t=e.theme;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(t.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),b=function(e){var t,r,i,o,l,f,b,w=e._id,C=e.users,y=e.latestMessage,k=e.isGroupChat,I=e.chatName,S=(0,p.I0)(),N=(0,p.v9)((function(e){return e.app})).chat_id,P=(0,p.v9)((function(e){return e.app.user}))._id,R=N===w;N||(R=!1),(0,n.useEffect)((function(){}),[N,y]);var F,T,D=(0,d.Z)();return(0,m.jsx)(Z,{onClick:function(){v.W.emit("leave chat",N),S((0,h.ND)({chat_id:w,isGroupChat:k})),v.W.emit("join chat",w),v.W.on("connected",(function(){console.log("Socket Connected"),S((0,g.h7)(!0))}))},sx:{width:"100%",borderRadius:1,backgroundColor:R?"light"===D.palette.mode?(0,u.Fq)(D.palette.primary.main,.5):D.palette.primary.main:"light"===D.palette.mode?"#fff":D.palette.background.paper},p:2,children:(0,m.jsxs)(a.Z,{direction:"row",alignItems:"flex-end",justifyContent:"space-between",children:[(0,m.jsxs)(a.Z,{direction:"row",spacing:2,children:[" ",k?(0,m.jsx)(s.Z,{alt:I,src:""}):"online"===(null===(t=C[0])||void 0===t?void 0:t.status)?(0,m.jsx)(j,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,m.jsx)(s.Z,{alt:null===(r=C[0])||void 0===r?void 0:r.firstName,src:null===(i=C[0])||void 0===i?void 0:i.avatar})}):(0,m.jsx)(s.Z,{alt:null===(o=C[0])||void 0===o?void 0:o.firstName,src:null===(l=C[0])||void 0===l?void 0:l.avatar}),(0,m.jsxs)(a.Z,{children:[k?(0,m.jsx)(c.Z,{variant:"subtitle2",children:I}):(0,m.jsx)(c.Z,{variant:"subtitle2",children:(null===(f=C[0])||void 0===f?void 0:f.firstName)+" "+(null===(b=C[0])||void 0===b?void 0:b.lastName)}),(0,m.jsxs)(a.Z,{direction:"row",spacing:.5,children:[(0,m.jsx)(c.Z,{variant:"caption",sx:{fontWeight:"600"},children:y?y.sender._id===P?"You: ":"".concat(y.sender.firstName.trim(),": "):""}),(0,m.jsx)(c.Z,{variant:"caption",sx:{fontWeight:"500"},children:y?(F=y.content,T=20,(null===F||void 0===F?void 0:F.length)>T?"".concat(null===F||void 0===F?void 0:F.slice(0,T),"..."):F):""})]})]})]}),(0,m.jsx)(a.Z,{spacing:2,alignItems:"end",direction:"column",children:(0,m.jsx)(c.Z,{sx:{fontWeight:600},variant:"caption",children:y?x(y.createdAt):""})})]})})}},53614:function(e,t,r){r.d(t,{ol:function(){return o},cB:function(){return a},el:function(){return c}});var n=r(66934),i=r(12065),o=(0,n.ZP)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:20,backgroundColor:(0,i.Fq)(t.palette.background.paper,1),marginRight:t.spacing(2),marginLeft:0,width:"100%"}})),a=(0,n.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),s=r(85818),c=(0,n.ZP)(s.ZP)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),width:"100%"}}}))},6522:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(1413),i=r(61134),o=r(80184);function a(e){var t=e.children,r=e.onSubmit,a=e.methods;return(0,o.jsx)(i.RV,(0,n.Z)((0,n.Z)({},a),{},{children:(0,o.jsx)("form",{onSubmit:r,children:t})}))}},11892:function(e,t,r){r.d(t,{au:function(){return N},sX:function(){return y},ZP:function(){return k.Z}});var n=r(1413),i=r(45987),o=r(61134),a=r(47071),s=r(72791),c=r(87087),l=r(64554),d=r(80184),u=["disabledEffect","effect","sx"],p=(0,s.forwardRef)((function(e,t){var r=e.disabledEffect,o=void 0!==r&&r,a=e.effect,s=void 0===a?"blur":a,p=e.sx,h=(0,i.Z)(e,u),f=(0,d.jsx)(l.Z,(0,n.Z)({component:c.LazyLoadImage,wrapperClassName:"wrapper",effect:o?void 0:s,placeholderSrc:o?"/assets/transparent.png":"/assets/placeholder.svg",sx:{width:1,height:1,objectFit:"cover"}},h));return(0,d.jsx)(l.Z,{ref:t,component:"span",sx:(0,n.Z)({lineHeight:1,display:"block",overflow:"hidden",position:"relative","& .wrapper":{width:1,height:1,backgroundSize:"cover !important"}},p),children:f})}));function h(e){var t=e.file;if(!t)return null;var r="string"===typeof t?t:t.preview;return(0,d.jsx)(p,{alt:"avatar",src:r,sx:{zIndex:8,overflow:"hidden",borderRadius:"50%",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})}var f=r(18267),x=r(20890),v=r(66934),g=r(12065),m=r(76526),Z=["error","file","disabled","helperText","sx"],j=(0,v.ZP)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",display:"flex",cursor:"pointer",overflow:"hidden",borderRadius:"50%",alignItems:"center",position:"relative",justifyContent:"center",border:"1px dashed ".concat((0,g.Fq)(t.palette.grey[500],.32))}})),b=(0,v.ZP)("div")((function(e){var t=e.theme;return{zIndex:7,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",width:"calc(100% - 16px)",height:"calc(100% - 16px)",color:t.palette.text.disabled,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter})}}));function w(e){var t=e.error,r=e.file,o=e.disabled,a=e.helperText,s=e.sx,c=(0,i.Z)(e,Z),l=(0,f.uI)((0,n.Z)({multiple:!1,disabled:o},c)),u=l.getRootProps,p=l.getInputProps,v=l.isDragActive,w=!!r,C=l.isDragReject||!!t;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(j,(0,n.Z)((0,n.Z)({},u()),{},{sx:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},v&&{opacity:.72}),C&&(0,n.Z)({borderColor:"error.light"},w&&{bgcolor:"error.lighter"})),o&&{opacity:.48,pointerEvents:"none"}),w&&{"&:hover":{"& .placeholder":{opacity:1}}}),s),children:[(0,d.jsx)("input",(0,n.Z)({},p())),w&&(0,d.jsx)(h,{file:r}),(0,d.jsxs)(b,{className:"placeholder",sx:(0,n.Z)((0,n.Z)({"&:hover":{opacity:.72}},w&&{zIndex:9,opacity:0,color:"common.white",bgcolor:function(e){return(0,g.Fq)(e.palette.grey[900],.64)}}),C&&{color:"error.main",bgcolor:"error.lighter"}),children:[(0,d.jsx)(m.Z,{}),(0,d.jsx)(x.Z,{variant:"caption",children:r?"Update photo":"Upload photo"})]})]})),a&&a]})}var C=["name"];function y(e){var t=e.name,r=(0,i.Z)(e,C),s=(0,o.Gc)().control;return(0,d.jsx)(o.Qr,{name:t,control:s,render:function(e){var t=e.field,i=e.fieldState.error;return(0,d.jsxs)("div",{children:[(0,d.jsx)(w,(0,n.Z)({accept:{"image/*":[]},error:!!i,file:t.value},r)),!!i&&(0,d.jsx)(a.Z,{error:!0,sx:{px:2,textAlign:"center"},children:i.message})]})}})}var k=r(6522),I=r(43138),S=["name","helperText"];function N(e){var t=e.name,r=e.helperText,a=(0,i.Z)(e,S),s=(0,o.Gc)().control;return(0,d.jsx)(o.Qr,{name:t,control:s,render:function(e){var t=e.field,i=e.fieldState.error;return(0,d.jsx)(I.Z,(0,n.Z)((0,n.Z)({},t),{},{fullWidth:!0,value:"number"===typeof t.value&&0===t.value?"":t.value,error:!!i,helperText:i?null===i||void 0===i?void 0:i.message:r},a))}})}},41036:function(e,t,r){r(72791);var n=r(13967),i=r(64554),o=r(36314),a=r(13400),s=r(6842),c=r(15122),l=r(59434),d=r(55613),u=r(57689),p=r(80184);t.Z=function(){var e=(0,n.Z)(),t=(0,u.s0)(),r=(0,l.I0)(),h=(0,l.v9)((function(e){return e.app})).tab;return(0,p.jsx)(i.Z,{sx:{zIndex:10,position:"absolute",bottom:0,width:"100vw",backgroundColor:e.palette.background.paper,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:(0,p.jsxs)(o.Z,{sx:{width:"100%"},direction:"row",alignItems:"center",justifyContent:"space-between",spacing:2,p:2,children:[c.u5.map((function(n){return n.index===h?(0,p.jsx)(i.Z,{sx:{backgroundColor:e.palette.primary.main,borderRadius:1.5},p:1,children:(0,p.jsx)(a.Z,{sx:{width:"max-content",color:"#ffffff"},children:n.icon})}):(0,p.jsx)(a.Z,{onClick:function(){var e;2!==(e=n.index)?(r((0,d.Tn)({tab:e})),t(function(e){switch(e){case 0:return"/app";case 1:return"/group";case 2:return"/call";case 3:return"/settings"}}(e))):r((0,d.OV)({severity:"info",message:"Feature Under Construction"}))},sx:{width:"max-content",color:"light"===e.palette.mode?"#080707":e.palette.text.primary},children:n.icon})})),(0,p.jsx)(s.Z,{})]})})}},20673:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var n=r(1413),i=r(29439),o=r(72791),a=r(64554),s=r(36314),c=r(20890),l=r(13400),d=r(57320),u=r(40703),p=r(13967),h=(r(27578),r(15122),r(58246)),f=r(53614),x=r(74165),v=r(15861),g=r(81724),m=r(55931),Z=r(93044),j=r(36151),b=r(5289),w=r(65661),C=r(39157),y=r(44695),k=r(61134),I=r(6522),S=r(11892),N=r(45987),P=r(42561),R=r(43138),F=r(80184),T=["name","label","helperText"];function D(e){var t=e.name,r=e.label,i=e.helperText,o=(0,N.Z)(e,T),a=(0,k.Gc)(),s=a.control,c=a.setValue;return(0,F.jsx)(k.Qr,{name:t,control:s,render:function(e){var a=e.field,s=e.fieldState.error;return(0,F.jsx)(P.Z,(0,n.Z)((0,n.Z)({},a),{},{onChange:function(e,r){return c(t,r,{shouldValidate:!0})},renderInput:function(e){return(0,F.jsx)(R.Z,(0,n.Z)({label:r,error:!!s,helperText:s?null===s||void 0===s?void 0:s.message:i},e))}},o))}})}var E=r(59434),G=r(55613),W=r(66934),z=r(57689),M=(0,W.ZP)(a.Z)((function(e){e.theme;return{"&:hover":{cursor:"pointer"}}})),V=o.forwardRef((function(e,t){return(0,F.jsx)(m.Z,(0,n.Z)({direction:"up",ref:t},e))})),q=function(e){var t=e.handleClose,r=g.Ry().shape({title:g.Z_().required("Title is required"),members:g.IX().min(2,"Must have at least 2 members")}),i=(0,E.I0)(),a=(0,E.v9)((function(e){return e.app})).users,l=(0,z.s0)(),d=(0,p.Z)();(0,o.useEffect)((function(){i((0,G.j4)())}),[]);var u=(0,k.cI)({resolver:(0,y.X)(r),defaultValues:{title:"",tags:[]}}),h=(u.reset,u.watch,u.setValue,u.handleSubmit),f=u.formState,m=(f.isSubmitting,f.isValid,function(){var e=(0,v.Z)((0,x.Z)().mark((function e(r){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i((0,G.oP)({data:r})).then(t()).then(l("/group"));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}());return(0,F.jsx)(I.Z,{methods:u,onSubmit:h(m),children:(0,F.jsxs)(s.Z,{spacing:3,children:[(0,F.jsx)(S.au,{name:"title",label:"Title"}),(0,F.jsx)(D,{name:"members",label:"Members",multiple:!0,freeSolo:!0,options:a,list:a,getOptionLabel:function(e){return"".concat(e.firstName," ").concat(e.lastName)},renderOption:function(e,t,r){r.selected;return(0,F.jsx)("li",(0,n.Z)((0,n.Z)({},e),{},{children:(0,F.jsx)(M,{sx:{width:"100%",borderRadius:1,backgroundColor:d.palette.background.paper},p:1,children:(0,F.jsx)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:(0,F.jsxs)(s.Z,{direction:"row",alignItems:"center",spacing:2,children:[" ",(0,F.jsx)(Z.Z,{alt:t.firstName+" "+t.lastName,src:t.avatar}),(0,F.jsx)(s.Z,{spacing:.3,children:(0,F.jsx)(c.Z,{variant:"subtitle2",children:t.firstName+" "+t.lastName})})]})})})}))},ChipProps:{size:"medium"}}),(0,F.jsxs)(s.Z,{spacing:2,direction:"row",alignItems:"center",justifyContent:"end",children:[(0,F.jsx)(j.Z,{onClick:t,children:"Cancel"}),(0,F.jsx)(j.Z,{type:"submit",variant:"contained",children:"Create"})]})]})})},_=function(e){var t=e.open,r=e.handleClose;return(0,F.jsxs)(b.Z,{fullWidth:!0,maxWidth:"xs",open:t,TransitionComponent:V,keepMounted:!0,onClose:r,"aria-describedby":"alert-dialog-slide-description",sx:{p:4},children:[(0,F.jsx)(w.Z,{children:"Create New Group"}),(0,F.jsx)(C.Z,{sx:{mt:4},children:(0,F.jsx)(q,{handleClose:r})})]})},A=r(29998),L=r(41036),O=function(){var e=(0,p.Z)(),t=(0,A.Z)("up","md"),r=(0,E.I0)(),x=(0,E.v9)((function(e){return e.app})).chats;(0,o.useEffect)((function(){r((0,G.dv)()),r((0,G.Tn)({tab:1}))}),[]),(0,o.useEffect)((function(){}),[x]);var v=(0,o.useState)(!1),g=(0,i.Z)(v,2),m=g[0],Z=g[1];return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(a.Z,{sx:{position:"relative",height:"100%",width:t?320:"100vw",backgroundColor:"light"===e.palette.mode?"#F8FAFF":e.palette.background,boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.25)"},children:[!t&&(0,F.jsx)(L.Z,{}),(0,F.jsxs)(s.Z,{p:3,pr:1.5,spacing:2,sx:{maxHeight:"100vh",height:"100%"},children:[(0,F.jsxs)(s.Z,{alignItems:"center",justifyContent:"space-between",direction:"row",pr:1.5,children:[(0,F.jsx)(c.Z,{variant:"h5",children:"Groups"}),(0,F.jsx)(s.Z,{direction:"row",alignItems:"center",spacing:1,children:(0,F.jsx)(l.Z,{onClick:function(){Z(!0)},sx:{width:"max-content"},children:(0,F.jsx)(d.Z,{})})})]}),(0,F.jsx)(s.Z,{sx:{width:"100%",height:"auto"},pr:1.5,children:(0,F.jsxs)(f.ol,{children:[(0,F.jsx)(f.cB,{children:(0,F.jsx)(u.Z,{color:"#709CE6"})}),(0,F.jsx)(f.el,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})}),(0,F.jsx)(s.Z,{sx:{flexGrow:1,overflowY:"scroll",height:"100%"},pr:.5,children:(0,F.jsxs)(s.Z,{spacing:1,children:[(0,F.jsx)(c.Z,{variant:"subtitle2",sx:{color:"#676667"},children:"All Groups"}),x.filter((function(e){return e.isGroupChat})).map((function(e,t){return(0,o.createElement)(h.Z,(0,n.Z)((0,n.Z)({},e),{},{key:t}))}))]})})]})]}),m&&(0,F.jsx)(_,{open:m,handleClose:function(){Z(!1)}})]})}}}]);
//# sourceMappingURL=673.67eefd6b.chunk.js.map