(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/4VY":function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a("dI71"),r=a("zLVn"),o=a("q1tI"),i=a.n(o),l=a("H2TA"),s=a("Z3vd"),c=a("kfFl"),d=a("wx14"),m=a("Ff2n"),u=a("iuhU"),p=a("ofer"),h=o.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.disableTypography,l=void 0!==i&&i,s=Object(m.a)(e,["children","classes","className","disableTypography"]);return o.createElement("div",Object(d.a)({className:Object(u.a)(n.root,r),ref:t},s),l?a:o.createElement(p.a,{component:"h2",variant:"h6"},a))})),g=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(h),f=a("EQI2"),v=a("+JwS"),b=a("PsDL"),E=a("ZPUd"),y=a.n(E),C=["children","classes","onClose"],w=(Object(l.a)((function(e){return{root:{margin:0,padding:e.spacing(2),width:"90vw"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,o=Object(r.a)(e,C);return i.a.createElement(g,Object.assign({disableTypography:!0,className:a.root},o),i.a.createElement(p.a,{variant:"subtitle2",style:{fontStyle:"normal"}},t),n?i.a.createElement(b.a,{"aria-label":"close",className:a.closeButton,onClick:n},i.a.createElement(y.a,null)):null)})),Object(l.a)((function(e){return{root:{padding:e.spacing(2)}}}))(f.a)),S=Object(l.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(v.a);function x(e){var t=e.title,a=e.body,n=e.okTitle,r=void 0===n?"Ok":n,o=e.cancelTitle,l=e.isOpen,d=e.onOk,m=e.onCancel,u=e.onClose;return i.a.createElement("div",null,i.a.createElement(c.a,{onClose:function(){u()},"aria-labelledby":"customized-dialog-title",open:l},i.a.createElement(w,{dividers:!0},i.a.createElement(p.a,{variant:"subtitle1",gutterBottom:!0},t),i.a.createElement(p.a,{gutterBottom:!0},a)),i.a.createElement(S,null,o?i.a.createElement(s.a,{autoFocus:!0,onClick:function(){u(),m()},color:"secondary"},o):null,i.a.createElement(s.a,{autoFocus:!0,onClick:function(){u(),d()},color:"primary"},r))))}var k=function(e){function t(t){var a;return(a=e.call(this,t)||this).showDialog=function(e,t,n){a.setState({isOpen:!0,title:e,body:t,onOk:n||a.onOk})},a.close=function(){a.setState({isOpen:!1})},a.onOk=function(){a.props.onOk&&a.props.onOk(),close()},a.state={isOpen:!1,onOk:t.onOk?t.onOk:a.onOk},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.componentWillUnmount=function(){},a.render=function(){var e=this.state,t=e.title,a=e.body,n=e.isOpen,r=this.props,o=r.okTitle,l=r.cancelTitle;return i.a.createElement(x,{title:t,okTitle:o,cancelTitle:l,body:a,isOpen:n,onOk:this.state.onOk,onCancel:this.close,onClose:this.close})},t}(i.a.Component)},"3Qh7":function(e,t,a){"use strict";var n=a("q1tI"),r=a("5AJ6");t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},"7Zau":function(e,t,a){e.exports=a.p+"static/card-front-532d3f869f48df198db699b193c0b91b.png"},WFAr:function(e,t,a){e.exports=a.p+"static/back_vt-9263874c3d77783609b63b5a88ef7804.png"},YYmR:function(e,t,a){"use strict";a.r(t),a.d(t,"ViewCardProgram",(function(){return be}));var n=a("KQm4"),r=a("dI71"),o=a("q1tI"),i=a.n(o),l=a("Wbzz"),s=a("vDqi"),c=a.n(s),d=a("/MKj"),m=a("ofer"),u=a("Z3vd"),p=a("oCA+"),h=a("7oih"),g=a("tRbT"),f=a("kKAo"),v=a("tr08"),b=a("lopY"),E=a("1AYd"),y=a("cVXz"),C=a("jjAL"),w=a("UhlP"),S=a("ZGBi"),x=a("+n12"),k=a("lpWn"),O=a("kKU3"),_=a("ydnR"),j=a("wpBK"),F=1,D=2,T=3;function R(e){e.isCreateMode;var t=e.editMode,a=void 0!==t&&t,n=e.disabledProgram,r=void 0!==n&&n,o=e.created_date,s=void 0===o?"01/01/1970":o,c=e.program_id,d=void 0===c?"00000001":c,m=e.front_img,h=e.back_img,g=e.logo_img,b=e.status,E=void 0===b||b,y=e.onChangeFront,C=e.onChangeLogo,x=e.onChangeBack,k=Object(p.a)(),R=Object(v.a)(),M=(R.transitions.duration.enteringScreen,R.transitions.duration.leavingScreen,i.a.useState()),N=M[0],z=M[1],L=i.a.useState(),A=L[0],I=L[1],B=i.a.useState(),W=B[0],P=B[1],q=i.a.useState(T),V=q[0],Y=q[1],G=i.a.useState(!1),K=G[0],U=G[1],Z=i.a.useState(!1),H=Z[0],J=Z[1];return i.a.useEffect((function(){z(m)}),[m]),i.a.useEffect((function(){P(g)}),[g]),i.a.useEffect((function(){I(h)}),[h]),i.a.createElement(f.a,{elevation:0},i.a.createElement("div",null,i.a.createElement("span",{className:k.cardTitle},"Back Card")),i.a.createElement(f.a,{elevation:4},i.a.createElement("div",{style:{width:"100%",paddingTop:_.b.cardSize.paddingTop,position:"relative",borderRadius:7}},i.a.createElement("img",{src:A,ref:function(e){e&&console.log(e.getBoundingClientRect().width)},style:{width:"100%",position:"absolute",top:0,left:0,objectFit:"contain",borderRadius:7}}),i.a.createElement(O.a,{in:a},i.a.createElement("div",{style:{position:"absolute",left:0,right:0,bottom:0,top:0,backgroundColor:a?_.a.opacityBlack:_.a.transparent,display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(u.a,{style:{color:_.a.white},onClick:function(){U(!0),Y(F)}},"change photo"))))),i.a.createElement("div",{style:{marginTop:10}},i.a.createElement("div",null,i.a.createElement("span",{className:k.cardTitle},"Front Card")),i.a.createElement(f.a,{elevation:4},i.a.createElement("div",{style:{width:"100%",paddingTop:_.b.cardSize.paddingTop,position:"relative",borderRadius:7}},i.a.createElement("img",{src:N,ref:function(e){e&&console.log(e.getBoundingClientRect().width)},style:{width:"100%",position:"absolute",top:0,left:0,objectFit:"contain",borderRadius:7}}),i.a.createElement(O.a,{in:a},i.a.createElement("div",{style:{position:"absolute",left:0,right:0,bottom:0,top:0,backgroundColor:a?_.a.opacityBlack:_.a.transparent,display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(u.a,{style:{color:_.a.white},onClick:function(){U(!0),Y(T)}},"change photo")))))),i.a.createElement("div",{style:{marginTop:20}},i.a.createElement("div",null,i.a.createElement("span",{className:k.cardTitle},"Logo")),i.a.createElement(f.a,{elevation:3,style:{width:"50%"}},i.a.createElement("div",{style:{position:"relative"}},i.a.createElement("img",{src:W,style:{width:"100%",objectFit:"contain",minHeight:80,marginBottom:10}}),i.a.createElement(O.a,{in:a},i.a.createElement("div",{style:{position:"absolute",left:0,width:"100%",bottom:17,top:0,backgroundColor:a?_.a.opacityBlack:_.a.transparent,display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(u.a,{style:{color:_.a.white},onClick:function(){U(!0),Y(D)}},"change photo")))))),i.a.createElement("div",null,i.a.createElement(S.a,{value:"start",control:i.a.createElement(w.a,{color:"primary",value:H,onChange:function(e,t){J(t)}}),label:"BlinxPay Card",labelPlacement:"start",style:{marginLeft:0}})),i.a.createElement("div",null,i.a.createElement(u.a,{color:"primary",disabled:!r,style:{marginLeft:-8},onClick:function(){Object(l.navigate)("/admin/card-programs/manage/cards")}},"Manage cards")),i.a.createElement("div",{className:k.mainText},"Program ID: ",d),i.a.createElement("div",{className:k.mainText},"Created: ",s),i.a.createElement("div",{className:k.mainText},"Status: ",E?"Enabled":"Disabled"),i.a.createElement("div",{className:k.mainText},"BlinxPay: ",H?"Yes":"No"),i.a.createElement(j.c,{open:K,title:"Replace Photo?",cropType:V==T||V==F?j.b.CardFront:j.b.Logo,handleClose:function(){U(!1)},onResult:function(e){V==T?(z(e),y(e)):V==D?(P(e),C(e)):V==F&&(I(e),x(e)),U(!1)}}))}var M=a("kfFl"),N=a("+JwS"),z=a("EQI2"),L=a("r9w1"),A=a("wx14"),I=a("Ff2n"),B=a("iuhU"),W=a("4ppn"),P=a("5AJ6"),q=Object(P.a)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),V=Object(P.a)(o.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Y=a("H2TA");var G=Object(Y.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return o.createElement("div",{className:Object(B.a)(a.root,t&&a.checked)},o.createElement(q,{fontSize:n}),o.createElement(V,{fontSize:n,className:a.layer}))})),K=a("ye/S"),U=a("NqtD"),Z=a("x6Ns");var H=o.createContext();var J=o.createElement(G,{checked:!0}),$=o.createElement(G,null),Q=o.forwardRef((function(e,t){var a=e.checked,n=e.classes,r=e.color,i=void 0===r?"secondary":r,l=e.name,s=e.onChange,c=e.size,d=void 0===c?"medium":c,m=Object(I.a)(e,["checked","classes","color","name","onChange","size"]),u=o.useContext(H),p=a,h=Object(Z.a)(s,u&&u.onChange),g=l;return u&&(void 0===p&&(p=u.value===e.value),void 0===g&&(g=u.name)),o.createElement(W.a,Object(A.a)({color:i,type:"radio",icon:o.cloneElement($,{fontSize:"small"===d?"small":"default"}),checkedIcon:o.cloneElement(J,{fontSize:"small"===d?"small":"default"}),classes:{root:Object(B.a)(n.root,n["color".concat(Object(U.a)(i))]),checked:n.checked,disabled:n.disabled},name:g,checked:p,onChange:h,ref:t},m))})),X=Object(Y.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(K.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(K.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(Q),ee=a("ODXe"),te=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.row,i=void 0!==r&&r,l=Object(I.a)(e,["classes","className","row"]);return o.createElement("div",Object(A.a)({className:Object(B.a)(a.root,n,i&&a.row),ref:t},l))})),ae=Object(Y.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(te),ne=a("bfFb"),re=a("yCxk"),oe=a("wRgb"),ie=o.forwardRef((function(e,t){var a=e.actions,n=e.children,r=e.name,i=e.value,l=e.onChange,s=Object(I.a)(e,["actions","children","name","value","onChange"]),c=o.useRef(null),d=Object(re.a)({controlled:i,default:e.defaultValue,name:"RadioGroup"}),m=Object(ee.a)(d,2),u=m[0],p=m[1];o.useImperativeHandle(a,(function(){return{focus:function(){var e=c.current.querySelector("input:not(:disabled):checked");e||(e=c.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var h=Object(ne.a)(t,c),g=Object(oe.a)(r);return o.createElement(H.Provider,{value:{name:g,onChange:function(e){p(e.target.value),l&&l(e,e.target.value)},value:u}},o.createElement(ae,Object(A.a)({role:"radiogroup",ref:h},s),n))})),le=a("ADg1");function se(e){var t=e.open,a=void 0!==t&&t,n=e.onCancel,r=e.onAdd,o=e.handleClose,l=i.a.useState(""),s=l[0],c=l[1],d=i.a.useState("text"),p=d[0],h=d[1];return i.a.createElement(M.a,{open:a,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(z.a,{style:{minWidth:400,paddingTop:20}},i.a.createElement("div",null,i.a.createElement(m.a,{variant:"body1"},"Add a field")),i.a.createElement(L.a,{required:!0,id:"filled-required",label:"Label",type:"text",variant:"filled",value:s,onChange:function(e){c(e.target.value)},fullWidth:!0}),i.a.createElement(le.a,{component:"fieldset"},i.a.createElement(ie,{"aria-label":"fields",name:"fields",value:p,onChange:function(e){h(e.target.value)}},i.a.createElement(S.a,{value:"text",control:i.a.createElement(X,{color:"primary"}),label:"Text"}),i.a.createElement(S.a,{value:"number",control:i.a.createElement(X,{color:"primary"}),label:"Number"}),i.a.createElement(S.a,{value:"email",control:i.a.createElement(X,{color:"primary"}),label:"Email"}),i.a.createElement(S.a,{value:"phone",control:i.a.createElement(X,{color:"primary"}),label:"Phone Number"})))),i.a.createElement(N.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:"10px 15px"}},i.a.createElement(u.a,{onClick:n,color:"primary"},"Cancel"),i.a.createElement(u.a,{onClick:function(){s&&r&&r(s,p)},color:"primary",autoFocus:!0,disabled:!s},"Add")))}var ce=a("/4VY"),de=a("7Zau"),me=a.n(de),ue=a("WFAr"),pe=a.n(ue),he=a("nWR2"),ge=a.n(he),fe=a("CkNY").c+"/api",ve=[{label:"First Name",placeholder:"First Name",type:"text",extend:!1,removable:!1},{label:"Last Name",placeholder:"Last Name",type:"text",extend:!1,removable:!1},{label:"Email",placeholder:"Email Address",type:"email",extend:!1,removable:!1}],be=function(e){function t(t){var a;(a=e.call(this,t)||this).onChangeState=function(e){var t=localStorage.getItem("token"),n=a.props.location.state.program_id,r={Authorization:"Bearer "+t},o=fe+"/programenabled/"+n,i={status:e};a.setState({showLoader:!0}),c.a.put(o,i,{headers:r}).then((function(t){a.setState({showLoader:!1}),console.log(" response ;",t),"unauthorized"===t.data.status?a.alertRef.current&&a.alertRef.current.showDialog("Error!",t.data.message.toString(),(function(){})):a.alertRef.current?a.alertRef.current.showDialog("","This program status has set as "+e,(function(){e?a.setState({showLoader:!1,disabledProgram:!1,editMode:!1}):a.setState({showLoader:!1,disabledProgram:!0})})):e?a.setState({showLoader:!1,disabledProgram:!1,editMode:!1}):a.setState({showLoader:!1,disabledProgram:!0})})).catch((function(e){a.setState({showLoader:!1}),a.alertRef.current&&a.alertRef.current.showDialog("Error!",e.toString(),(function(){}))}))},a.onDeleteCardFields=function(e){var t=a.state.cardFields.filter((function(t){return t.label!=e}));a.setState({cardFields:t})},a.onDeleteServerFields=function(e){var t=a.state.serverFields.filter((function(t){return t.label!=e}));a.setState({serverFields:t})},a.onSave=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("userId"),n={Authorization:"Bearer "+e},r=fe+"/cardprogram";if(a.programname)if(a.state.front_img&&!a.state.front_img.includes("/static/"))if(a.state.back_img&&!a.state.back_img.includes("/static/"))if(a.state.logo_img&&!a.state.logo_img.includes("/static/")){var o=a.state.cardFields;a.state.serverFields.length>0&&(o=o.concat(a.state.serverFields));var i={program_id:a.props.location.state.program_id,program_name:a.programname,program_template:o,card_image:a.state.front_img,back_img:a.state.back_img,logo:a.state.logo_img,compression:a.state.compression,edac:a.state.edac,matrix_size:a.state.matrix_size,pxpcw:a.state.pixels_cell,sample_width:a.state.sample_width,prefilter:a.state.prefiltering,user:t};console.log("body: ",i),a.state.isCreateMode?(a.setState({showLoader:!0}),c.a.post(r,i,{headers:n}).then((function(e){a.setState({showLoader:!1}),"unauthorized"===e.data.status?a.alertRef.current.showDialog("",e.data.message.toString(),(function(){})):(a.setState({showLoader:!1}),a.alertRef.current?a.alertRef.current.showDialog("","New card program has been created",(function(){Object(l.navigate)("/admin/card-programs/")})):Object(l.navigate)("/admin/card-programs/"))})).catch((function(e){a.setState({showLoader:!1}),a.alertRef.current.showDialog("",e.toString())}))):(console.log("edit : ",a.state.isCreateMode),a.setState({showLoader:!0}),c.a.put(r,i,{headers:n}).then((function(e){a.setState({showLoader:!1}),"unauthorized"===e.data.status?a.alertRef.current.showDialog("Error!",e.data.message.toString(),(function(){})):(a.setState({showLoader:!1}),a.alertRef.current?a.alertRef.current.showDialog("","Card program has been updated",(function(){Object(l.navigate)("/admin/card-programs/")})):Object(l.navigate)("/admin/card-programs/"))})).catch((function(e){a.setState({showLoader:!1}),a.alertRef.current.showDialog("Error!",e.toString())})))}else a.alertRef.current.showDialog("Warning!","Please choose the card logo image",(function(){}));else a.alertRef.current.showDialog("Warning!","Please choose the card back image",(function(){}));else a.alertRef.current.showDialog("Warning!","Please choose the card front image",(function(){}));else a.setState({showError:"This field is required"})};var n=t.isCreateMode;return a.state={isLogin:!0,isCreateMode:n,editMode:!1,disabledProgram:!1,cardFields:n?ve:[],serverFields:[],openServerFieldsAdd:!1,openCardFieldsAdd:!1,created_date:"",showLoader:!1,showError:"",front_img:pe.a,back_img:me.a,logo_img:ge.a,program_name:"",matrix_size:0,compression:"0",edac:0,pixels_cell:2,sample_width:1,prefiltering:!1,matrix_array:[]},a.alertRef=i.a.createRef(),a.programname="",a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){for(var e=this.props,t=(e.dispatch,e.userData,e.basicData,[]),a=[],n=this.props.location.state.program_template,r=0;r<n.length;r++){var o=n[r];o.extend?a.push(o):t.push(o)}(0==t.length||this.state.isCreateMode)&&(t=ve);this.state.isCreateMode;for(var i=[],l=0;l<257;l+=2)i.push(l);this.setState({cardFields:t,serverFields:a,disabledProgram:!this.props.location.state.program_enabled,created_date:this.props.location.state.created_date,front_img:this.props.isCreateMode?pe.a:this.props.location.state.card_image_front,back_img:this.props.isCreateMode?me.a:this.props.location.state.card_image_back,logo_img:this.props.isCreateMode?ge.a:this.props.location.state.logo,program_name:this.props.location.state.program_name,matrix_size:this.props.location.state.matrix_size,compression:this.props.location.state.compression,edac:this.props.location.state.edac,pixels_cell:this.props.location.state.pxpcw,sample_width:this.props.location.state.sampleWidth,matrix_array:i}),this.programname=this.props.location.state.program_name},a.changeName=function(e,t){e&&(this.programname=e)},a.render=function(){var e=this,t=this.props,a=(t.userData,t.classes),r=(t.transitionDuration,t.isDesktop),o=t.isSmall,l=t.isCreateMode,s={width:r?"50%":120,float:"right",marginLeft:5,marginRight:5,marginBottom:20,minWidth:120},c=r?{minWidth:150}:{minWidth:"90vw"};return i.a.createElement(h.a,{menuIndex:this.props.menuIndex,loader:this.state.showLoader},i.a.createElement(g.a,{container:!0,justify:"center",spacing:2,style:{minHeight:"100%"}},i.a.createElement(g.a,{item:!0,sm:4,xs:12,className:a.cardViewGridLeft},i.a.createElement(R,{isCreateMode:l,editMode:this.state.editMode||l,disabledProgram:this.state.disabledProgram||l,created_date:this.state.created_date,program_id:this.props.location.state.program_id,front_img:this.state.front_img,back_img:this.state.back_img,logo_img:this.state.logo_img,status:this.props.location.state.program_enabled,onChangeFront:function(t){e.setState({front_img:t})},onChangeLogo:function(t){e.setState({logo_img:t})},onChangeBack:function(t){e.setState({back_img:t})}})),i.a.createElement(g.a,{item:!0,sm:5,xs:12,className:a.cardViewGrid,style:{marginRight:5}},i.a.createElement(f.a,{style:{padding:"0 10px",marginBottom:20},elevation:0},i.a.createElement("div",null,i.a.createElement(m.a,{variant:"h6",style:{fontWeight:"medium"}},"Card Name")),i.a.createElement("div",null,i.a.createElement(k.a,{key:x.a.getKey(),label:"",type:"text",value:this.programname,placeholder:"program_name",editMode:this.state.editMode||l,formFields:this.changeName.bind(this),showError:this.state.showError,disable:!this.state.editMode&&!l}))),i.a.createElement(f.a,{style:{padding:"0 10px",marginBottom:20},elevation:0},i.a.createElement("div",null,i.a.createElement(m.a,{variant:"h6",style:{fontWeight:"medium"}},"Card Fields")),i.a.createElement("div",{style:{marginTop:2}},i.a.createElement(m.a,{variant:"body1",style:{color:"darkgray"}},"Card fields are written to the barcode and NFC on a card. It is recommended that only essential fields are written to cards. Additional fields can be accessed from the server."))),i.a.createElement(f.a,{style:{padding:"0 10px"},elevation:0},this.state.editMode||l?i.a.createElement(u.a,{size:"medium",variant:"contained",color:"primary",style:{marginBottom:10},onClick:function(){e.setState({openCardFieldsAdd:!0})}},"Add Field"):null,this.state.cardFields?this.state.cardFields.map((function(t,a){return i.a.createElement(k.a,{key:x.a.getKey(),label:t.label,type:t.type,value:t.value,placeholder:t.placeholder,removable:t.removable,editMode:e.state.editMode||l,onDelete:function(){var a=t.label;e.onDeleteCardFields(a)}})})):null),i.a.createElement(f.a,{style:{padding:"0 10px",marginBottom:20},elevation:0},i.a.createElement("div",null,i.a.createElement(m.a,{variant:"h6",style:{fontWeight:"medium"}},"Server Fields")),i.a.createElement("div",{style:{marginTop:2}},i.a.createElement(m.a,{variant:"body1",style:{color:"darkgray"}},"Server fields contain additional information that is not stored in the code and NFC of a card. When a card is scanned the application will reach out to the server to retrieve this information. It is recommended that server fields are used for information that is expected to change."))),i.a.createElement(f.a,{style:{padding:"0 10px"},elevation:0},this.state.editMode||l?i.a.createElement(u.a,{size:"medium",variant:"contained",color:"primary",style:{marginBottom:10},onClick:function(){e.setState({openServerFieldsAdd:!0})}},"Add Field"):null,this.state.serverFields?this.state.serverFields.map((function(t,a){return i.a.createElement(k.a,{key:x.a.getKey(),label:t.label,type:t.type,value:t.value,placeholder:t.placeholder,removable:t.removable,editMode:e.state.editMode||l,onDelete:function(){var a=t.label;e.onDeleteServerFields(a)}})})):null)),i.a.createElement(g.a,{item:!0,md:3,sm:12,className:a.cardViewGrid,style:Object.assign({},c,{display:"flex",flexDirection:r?"column":"column-reverse"})},i.a.createElement(f.a,{style:{padding:20,display:"flex",width:"100%",flexDirection:r?"column":"row",justifyContent:"center",alignItems:"center",flexWrap:r?"nowrap":"wrap"},elevation:0},this.state.editMode||l?i.a.createElement("div",null,i.a.createElement(u.a,{variant:"contained",size:"medium",color:"primary",style:s,onClick:this.onSave},"Save")):!this.state.editMode&&this.state.disabledProgram?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(u.a,{variant:"contained",size:"medium",color:"primary",style:s,onClick:function(){e.setState({openDisableConfirm:!1}),e.onChangeState(!0)}},"Enable")),i.a.createElement("div",null,i.a.createElement(u.a,{variant:"contained",size:"medium",color:"secondary",style:s,onClick:function(){e.setState({editMode:!0})}},"Edit"))):i.a.createElement("div",null,i.a.createElement(u.a,{variant:"contained",size:"medium",color:"secondary",style:s,onClick:function(){e.setState({openDisableConfirm:!0})}},"Disable"))),i.a.createElement(f.a,{style:{padding:10,display:"flex",width:"100%",flexDirection:"row",alignItems:"stretch",flexWrap:"nowrap",justifyContent:r||o?"center":"flex-start",marginLeft:r||o?0:"50%"},elevation:0},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(m.a,{variant:"h6",style:{fontWeight:"medium"}},"Vericode Features :")),i.a.createElement("div",{style:{padding:10,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},i.a.createElement(E.a,{id:"select-status",style:{paddingTop:10,width:"40%"}},"Matrix Size : "),i.a.createElement(y.a,{style:{width:"60%"},labelId:"select-status",id:"select-status",value:this.state.matrix_size,onChange:function(t){e.setState({matrix_size:t.target.value})}},this.state.matrix_array.map((function(e){return i.a.createElement(C.a,{value:e},e)})))),i.a.createElement("div",null,i.a.createElement(m.a,{variant:"h6",style:{fontWeight:"medium",paddingTop:15,paddingLeft:10}},"Encode :")),i.a.createElement(f.a,{elevation:4},i.a.createElement("div",{style:{width:"100%",paddingTop:20,position:"relative",borderRadius:7}},i.a.createElement("div",{style:{padding:10,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},i.a.createElement(E.a,{id:"select-status",style:{paddingTop:10,width:"40%"}},"Compression : "),i.a.createElement(y.a,{style:{width:"60%",minWidth:170},labelId:"select-status",id:"select-status",value:this.state.compression,onChange:function(t){e.setState({compression:t.target.value})}},i.a.createElement(C.a,{value:"0"},"Non Compression 8-bit"),i.a.createElement(C.a,{value:"-1"},"Alpha Numeric 6-bit"),i.a.createElement(C.a,{value:"-2"},"Number 4-bit"))),i.a.createElement("div",{style:{padding:10,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},i.a.createElement(E.a,{id:"select-status",style:{paddingTop:10,width:"40%"}},"EDAC : "),i.a.createElement(y.a,{style:{width:"60%"},labelId:"select-status",id:"select-status",value:this.state.edac,onChange:function(t){e.setState({edac:t.target.value})}},i.a.createElement(C.a,{value:0},"Default"),i.a.createElement(C.a,{value:2},"12.5 %"),i.a.createElement(C.a,{value:4},"25 %"))),i.a.createElement("div",{style:{padding:10}}))),i.a.createElement("div",null,i.a.createElement(m.a,{variant:"h6",style:{fontWeight:"medium",paddingTop:15,paddingLeft:10}},"Decode :")),i.a.createElement(f.a,{elevation:4},i.a.createElement("div",{style:{width:"100%",paddingTop:20,position:"relative",borderRadius:7}},i.a.createElement("div",{style:{padding:10,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},i.a.createElement(E.a,{id:"select-status",style:{paddingTop:10,width:"40%"}},"Pixels/Cell : "),i.a.createElement(y.a,{style:{width:"60%"},labelId:"select-status",id:"select-status",value:this.state.pixels_cell,onChange:function(t){e.setState({pixels_cell:t.target.value})}},i.a.createElement(C.a,{value:2},"2"),i.a.createElement(C.a,{value:4},"4"),i.a.createElement(C.a,{value:6},"6"),i.a.createElement(C.a,{value:8},"8"),i.a.createElement(C.a,{value:16},"16"))),i.a.createElement("div",{style:{padding:10,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},i.a.createElement(E.a,{id:"select-status",style:{paddingTop:10,width:"40%"}},"Sample Width : "),i.a.createElement(y.a,{style:{width:"60%"},labelId:"select-status",id:"select-status",value:this.state.sample_width,onChange:function(t){e.setState({sample_width:t.target.value})}},i.a.createElement(C.a,{value:1},"1"),i.a.createElement(C.a,{value:2},"2"),i.a.createElement(C.a,{value:3},"3"),i.a.createElement(C.a,{value:4},"4"),i.a.createElement(C.a,{value:5},"5"),i.a.createElement(C.a,{value:6},"6"),i.a.createElement(C.a,{value:7},"7"),i.a.createElement(C.a,{value:8},"8"))),i.a.createElement("div",{style:{padding:10,width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},i.a.createElement(E.a,{id:"select-status",style:{paddingTop:10,width:"40%"}},"Prefiltering : "),i.a.createElement(S.a,{value:"start",control:i.a.createElement(w.a,{color:"primary",value:this.state.prefiltering,onChange:function(t,a){e.setState({prefiltering:a})}}),style:{width:"60%"}})),i.a.createElement("div",{style:{padding:10}}))))))),i.a.createElement(j.a,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,null,"Warning! This is probably a bad idea.")),i.a.createElement("div",null,i.a.createElement(m.a,null,"Disabling a card program will take the entire program offline. Card program users will not be able to log in to mobile apps or the website. You should only disable a card program during a scheduled maintenance or when a program is terminated."))),open:this.state.openDisableConfirm,okTitle:"Confirm",cancelTitle:"Cancel",onOk:function(){e.setState({openDisableConfirm:!1}),e.onChangeState(!1)},onCancel:function(){e.setState({openDisableConfirm:!1})}}),i.a.createElement(se,{open:this.state.openServerFieldsAdd,onAdd:function(t,a){var r=[].concat(Object(n.a)(e.state.serverFields),[{label:t,placeholder:t,type:a,extend:!0,removable:!0}]);e.setState({serverFields:r,openServerFieldsAdd:!1})},onCancel:function(){e.setState({openServerFieldsAdd:!1})},handleClose:function(){e.setState({openServerFieldsAdd:!1})}}),i.a.createElement(se,{open:this.state.openCardFieldsAdd,onAdd:function(t,a){var r=[].concat(Object(n.a)(e.state.cardFields),[{label:t,placeholder:t,type:a,extend:!1,removable:!0}]);e.setState({cardFields:r,openCardFieldsAdd:!1})},onCancel:function(){e.setState({openCardFieldsAdd:!1})},handleClose:function(){e.setState({openCardFieldsAdd:!1})}}),i.a.createElement(ce.a,{ref:this.alertRef,okTitle:"done"}))},t}(i.a.Component);t.default=function(e){var t=Object(d.useDispatch)(),a=(Object(d.useSelector)((function(e){return e.app.userData})),Object(p.a)()),n=Object(v.a)(),r={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},o=Object(b.a)("(min-width:1053px)");return i.a.createElement(be,Object.assign({},e,{menuIndex:5,dispatch:t,isDesktop:o,classes:a,transitionDuration:r}))}},ZPUd:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),i=(0,n(a("8/g6")).default)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},lpWn:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),o=a("oCA+"),i=a("PsDL"),l=a("ydnR"),s=a("3Qh7");function c(e){var t=e.label,a=e.type,c=e.name,d=e.showError,m=e.value,u=e.placeholder,p=e.formFields,h=e.removable,g=e.editMode,f=e.onDelete,v=e.disable,b=void 0!==v&&v,E=Object(n.useState)(!1),y=E[0],C=E[1],w=Object(n.useState)(""),S=(w[0],w[1]),x=Object(n.useState)(!0),k=x[0],O=x[1],_=Object(o.a)();return r.a.createElement("div",{style:{backgroundColor:l.a.lightGray,padding:5,marginBottom:20,position:"relative"}},r.a.createElement("div",{className:_.labelText,style:{marginLeft:3}},t),r.a.createElement("input",{className:_.mainText,type:a,name:c,defaultValue:m,placeholder:u,onChange:function(e){S(e.target.value),function(e,t){void 0!==p&&p(e,t)}(e.target.value,u),e.target.value?O(!1):O(!0)},onFocus:function(){C(!0)},onBlur:function(){C(!1)},style:{width:"100%",borderWidth:0,backgroundColor:l.a.lightGray,outline:"none",borderBottomWidth:y?2:0,borderBottomColor:l.a.blue},disabled:b}),d&&k&&r.a.createElement("div",{className:_.errorText},d),h&&g?r.a.createElement(i.a,{style:{position:"absolute",right:0,top:10},onClick:f},r.a.createElement(s.a,null)):null)}},nWR2:function(e,t,a){e.exports=a.p+"static/logo-29e248e379426350cf822d6fc92b23ca.png"}}]);
//# sourceMappingURL=component---src-pages-admin-card-programs-view-js-ae0ddc5957666aba9c7e.js.map