(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4ppn":function(e,a,t){"use strict";var r=t("wx14"),s=t("ODXe"),n=t("Ff2n"),o=t("q1tI"),i=t("iuhU"),l=t("yCxk"),c=t("EHdT"),d=t("H2TA"),m=t("PsDL"),u=o.forwardRef((function(e,a){var t=e.autoFocus,d=e.checked,u=e.checkedIcon,p=e.classes,h=e.className,g=e.defaultChecked,b=e.disabled,f=e.icon,v=e.id,E=e.inputProps,y=e.inputRef,P=e.name,k=e.onBlur,C=e.onChange,w=e.onFocus,S=e.readOnly,O=e.required,j=e.tabIndex,x=e.type,I=e.value,_=Object(n.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),R=Object(l.a)({controlled:d,default:Boolean(g),name:"SwitchBase",state:"checked"}),A=Object(s.a)(R,2),D=A[0],L=A[1],N=Object(c.a)(),z=b;N&&void 0===z&&(z=N.disabled);var F="checkbox"===x||"radio"===x;return o.createElement(m.a,Object(r.a)({component:"span",className:Object(i.a)(p.root,h,D&&p.checked,z&&p.disabled),disabled:z,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),N&&N.onFocus&&N.onFocus(e)},onBlur:function(e){k&&k(e),N&&N.onBlur&&N.onBlur(e)},ref:a},_),o.createElement("input",Object(r.a)({autoFocus:t,checked:d,defaultChecked:g,className:p.input,disabled:z,id:F&&v,name:P,onChange:function(e){var a=e.target.checked;L(a),C&&C(e,a)},readOnly:S,ref:y,required:O,tabIndex:j,type:x,value:I},E)),D?u:f)}));a.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)},VmPI:function(e,a,t){"use strict";var r=t("wx14"),s=t("Ff2n"),n=t("q1tI"),o=t("iuhU"),i=t("4ppn"),l=t("5AJ6"),c=Object(l.a)(n.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(l.a)(n.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=t("ye/S"),u=Object(l.a)(n.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t("NqtD"),h=t("H2TA"),g=n.createElement(d,null),b=n.createElement(c,null),f=n.createElement(u,null),v=n.forwardRef((function(e,a){var t=e.checkedIcon,l=void 0===t?g:t,c=e.classes,d=e.color,m=void 0===d?"secondary":d,u=e.icon,h=void 0===u?b:u,v=e.indeterminate,E=void 0!==v&&v,y=e.indeterminateIcon,P=void 0===y?f:y,k=e.inputProps,C=e.size,w=void 0===C?"medium":C,S=Object(s.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),O=E?P:h,j=E?P:l;return n.createElement(i.a,Object(r.a)({type:"checkbox",classes:{root:Object(o.a)(c.root,c["color".concat(Object(p.a)(m))],E&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:m,inputProps:Object(r.a)({"data-indeterminate":E},k),icon:n.cloneElement(O,{fontSize:void 0===O.props.fontSize&&"small"===w?w:O.props.fontSize}),checkedIcon:n.cloneElement(j,{fontSize:void 0===j.props.fontSize&&"small"===w?w:j.props.fontSize}),ref:a},S))}));a.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(m.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(m.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(v)},ZGBi:function(e,a,t){"use strict";var r=t("wx14"),s=t("Ff2n"),n=t("q1tI"),o=t("iuhU"),i=t("EHdT"),l=t("H2TA"),c=t("ofer"),d=t("NqtD"),m=n.forwardRef((function(e,a){e.checked;var t=e.classes,l=e.className,m=e.control,u=e.disabled,p=(e.inputRef,e.label),h=e.labelPlacement,g=void 0===h?"end":h,b=(e.name,e.onChange,e.value,Object(s.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),f=Object(i.a)(),v=u;void 0===v&&void 0!==m.props.disabled&&(v=m.props.disabled),void 0===v&&f&&(v=f.disabled);var E={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(a){void 0===m.props[a]&&void 0!==e[a]&&(E[a]=e[a])})),n.createElement("label",Object(r.a)({className:Object(o.a)(t.root,l,"end"!==g&&t["labelPlacement".concat(Object(d.a)(g))],v&&t.disabled),ref:a},b),n.cloneElement(m,E),n.createElement(c.a,{component:"span",className:Object(o.a)(t.label,v&&t.disabled)},p))}));a.a=Object(l.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(m)},ibjX:function(e,a,t){"use strict";t.r(a),t.d(a,"UserView",(function(){return W}));var r=t("dI71"),s=t("q1tI"),n=t.n(s),o=t("Wbzz"),i=t("vDqi"),l=t.n(i),c=t("/MKj"),d=t("ofer"),m=t("Z3vd"),u=t("1AYd"),p=t("ADg1"),h=t("cVXz"),g=t("jjAL"),b=t("oCA+"),f=t("7oih"),v=t("tRbT"),E=t("kKAo"),y=t("PsDL"),P=t("tr08"),k=t("ydnR"),C=t("lopY"),w=t("+n12"),S=t("lpWn"),O=t("5AJ6"),j=Object(O.a)(s.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),x=t("3Qh7"),I=t("kfFl"),_=t("+JwS"),R=t("EQI2"),A=t("ZGBi"),D=t("VmPI");function L(e){var a=e.selPrograms,t=void 0===a?[]:a,r=e.open,s=e.onCancel,o=e.onAdd,i=e.handleClose,l=["Program 1","Program 2","Program 3","Program 4","Program 5","Program 6","Program 7","Program 8","Program 9","Program 10"],c=n.a.useState([]),u=c[0],p=c[1];n.a.useEffect((function(){p(t)}),[t]);var h=function(e){var a=e.target.name,t=e.target.checked,r=l.filter((function(e){return e==a?!!t:-1!=u.indexOf(e)}));p(r)};return n.a.createElement(I.a,{open:r,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.a.createElement(R.a,{style:{minWidth:400,paddingTop:20}},n.a.createElement("div",null,n.a.createElement(d.a,{variant:"body1"},"Select Card Programs to add")),l.map((function(e,a){return n.a.createElement("div",{key:w.a.getKey()},n.a.createElement(A.a,{control:n.a.createElement(D.a,{checked:-1!=u.indexOf(e),onChange:h,name:e,color:"primary"}),label:e}))}))),n.a.createElement(_.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:"10px 15px"}},n.a.createElement(m.a,{onClick:s,color:"primary"},"Cancel"),n.a.createElement(m.a,{onClick:function(){o&&o(u)},color:"primary",autoFocus:!0},"Add")))}function N(e){var a=e.selPrograms,t=void 0===a?[]:a,r=e.open,s=e.onCancel,o=e.onAdd,i=e.handleClose,l=["Cards Read","Cards Order","Cards Edit","Cards Print","Cards Reject","NFC Write","Permission 7","Permission 8","Permission 9","Permission 10"],c=n.a.useState([]),u=c[0],p=c[1];n.a.useEffect((function(){p(t)}),[t]);var h=function(e){var a=e.target.name,t=e.target.checked,r=l.filter((function(e){return e==a?!!t:-1!=u.indexOf(e)}));p(r)};return n.a.createElement(I.a,{open:r,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.a.createElement(R.a,{style:{minWidth:400,paddingTop:20}},n.a.createElement("div",null,n.a.createElement(d.a,{variant:"body1"},"Select Permissions to add")),l.map((function(e,a){return n.a.createElement("div",{key:w.a.getKey()},n.a.createElement(A.a,{control:n.a.createElement(D.a,{checked:-1!=u.indexOf(e),onChange:h,name:e,color:"primary"}),label:e}))}))),n.a.createElement(_.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:"10px 15px"}},n.a.createElement(m.a,{onClick:s,color:"primary"},"Cancel"),n.a.createElement(m.a,{onClick:function(){o&&o(u)},color:"primary",autoFocus:!0},"Add")))}var z=t("/4VY"),F=t("+QwO"),B=t.n(F),U=t("CkNY").c+"/api",T=[{label:"First Name",placeholder:"First Name",value:"Cam",name:"first_name",type:"text"},{label:"Last Name",placeholder:"Last Name",name:"last_name",value:"Nguyen",type:"text"},{label:"Email",name:"email",placeholder:"Email Address",value:"cam@yahoo.com",type:"email"},{label:"Phone Number",name:"phone",placeholder:"Phone Number",value:"(555) 555-5555",type:"phone"}],W=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleAddProgram=function(){t.setState({openCardPrograms:!0})},t.handleAddPermission=function(){t.setState({openPermissionDlg:!0})},t.removeCardPrograms=function(e){var a=t.state.cardPrograms.filter((function(a){return a!=e}));t.setState({cardPrograms:a})},t.removePermission=function(e){var a=t.state.permissions.filter((function(a){return a!=e}));t.setState({permissions:a})},t.handleReset=function(){var e=localStorage.getItem("token"),a=(localStorage.getItem("userId"),{Authorization:"Bearer "+e}),r=U+"/forgotpassword",s={email:T[2].value};t.setState({showLoader:!0}),l.a.put(r,s,{headers:a}).then((function(e){t.setState({showLoader:!1}),"unauthorized"===e.data.status?t.setState({showError:!0,message:e.data.message.toString()}):(t.setState({showLoader:!1}),t.alertRef.current?t.alertRef.current.showDialog("","A password reset email has been sent to the selected user",(function(){Object(o.navigate)("/users")})):Object(o.navigate)("/users"))})).catch((function(e){t.setState({showLoader:!1,showError:!0,message:e.toString()})}))},t.handleStatus=function(){var e=localStorage.getItem("token"),a=(localStorage.getItem("userId"),{Authorization:"Bearer "+e}),r=U+"/userEnabled/"+t.state.userID,s="disabled";t.state.disabledUser&&(s="enabled");var n={status:s};t.setState({showLoader:!0}),l.a.put(r,n,{headers:a}).then((function(e){t.setState({showLoader:!1}),"unauthorized"===e.data.status?t.setState({showError:!0,message:e.data.message.toString()}):(t.setState({showLoader:!1,disabledUser:!t.state.disabledUser}),t.alertRef.current?t.alertRef.current.showDialog("","This user status has set as "+s,(function(){Object(o.navigate)("/users")})):Object(o.navigate)("/users"))})).catch((function(e){t.setState({showLoader:!1,showError:!0,message:e.toString()})}))},t.onSave=function(){var e=localStorage.getItem("token"),a=localStorage.getItem("userId"),r=U+"/users";t.props.isAdd||(r=r+"/"+t.state.userID);for(var s={Authorization:"Bearer "+e},n=t.state.cardPrograms.length,i={},c=0;c<n;c++){i[t.getProgram(t.state.cardPrograms[c])]=!0}for(var d=t.state.permissions.length,m={},u=0;u<d;u++){m[t.getPermission(t.state.permissions[u])]=!0}var p=t.state.cardPrograms.filter((function(e){return e}));t.setState({cardPrograms:p});var h=t.state.permissions.filter((function(e){return e}));t.setState({permissions:h});for(var g=T,b=!0,f={},v=0;v<g.length;v++)g[v].value?2!=v||B.a.isEmail(g[v].value)?3!=v||B.a.isMobilePhone(g[v].value)||(f[g[v].name]="Invalid Phone Number",b=!1):(f[g[v].name]="Invalid Email Address",b=!1):(f[g[v].name]="This field is required",b=!1);if(!t.props.isAdd){var E=t.props.location.state.email;console.log("old domain : ",E);var y=E.split("@")[1],P=g[2].value;console.log("new domain : ",P),y!=P.split("@")[1]&&(f.email="Email domain can not be changed",b=!1)}if(t.setState({showError:f}),b)if(console.log("Programs ; ",i),JSON.stringify(i).length<5)t.alertRef.current.showDialog("Warning!","Please add a program at least",(function(){}));else if(console.log("Permissions ; ",m),JSON.stringify(m).length<5)t.alertRef.current.showDialog("Warning!","Please add a permission at least",(function(){}));else if(console.log("user status ; ",t.state.userStatus),t.state.userStatus||!t.props.isAdd)if(console.log("user role ; ",t.state.userRole),t.state.userRole||!t.props.isAdd){var k={user_id:t.state.userID,first_name:g[0].value,last_name:g[1].value,user_status:t.props.isAdd?t.state.userStatus:t.state.status,user_email:g[2].value,user_permissions:m,user_programs:i,user_role:t.props.isAdd?t.state.userRole:t.state.role,created_user:a,modified_user:a};console.log("body : ",k),t.props.isAdd?(t.setState({showLoader:!0}),l.a.post(r,k,{headers:s}).then((function(e){console.log("response : ",e),t.setState({showLoader:!1}),"unauthorized"===e.data.status?t.setState({showError:!0,message:e.data.message.toString()}):t.alertRef.current?t.alertRef.current.showDialog("","New user is created",(function(){Object(o.navigate)("/users")})):Object(o.navigate)("/users")})).catch((function(e){console.log("error : ",e),t.setState({showLoader:!1,showError:!0,message:e.toString()})}))):(t.setState({showLoader:!0}),l.a.put(r,k,{headers:s}).then((function(e){t.setState({showLoader:!1}),"unauthorized"===e.data.status?t.setState({showError:!0,message:e.data.message.toString()}):t.alertRef.current?t.alertRef.current.showDialog("","User information is updated",(function(){Object(o.navigate)("/users")})):Object(o.navigate)("/users")})).catch((function(e){t.setState({showLoader:!1,showError:!0,message:e.toString()})})))}else t.alertRef.current.showDialog("Warning!","Please select the role",(function(){}));else t.alertRef.current.showDialog("Warning!","Please select the status",(function(){}))},t.state={isLogin:!0,showEditButton:!0,cardPrograms:a.isAdd?[]:["Program1","Program2","Program3"],permissions:a.isAdd?[]:["Cards_Read","Cards_Order","Cards_Edit","Cards_Print"],openCardPrograms:!1,openPermissionDlg:!1,showLoader:!1,disabledUser:!1,userID:"",user_created_date:"01-01-2020",status:"disabled",role:"",formFields:T,userStatus:"",userRole:"",showError:{},cur_role:4,edit_role:4},t.alertRef=n.a.createRef(),t}Object(r.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.props;e.dispatch,e.userData,e.basicData;console.log(this.props.location.state);var a=[],t=[],r=4;if(this.props.location.state.id>0){T[0].value=this.props.location.state.first_name,T[1].value=this.props.location.state.last_name,T[2].value=this.props.location.state.email;var s=JSON.parse(this.props.location.state.user_permissions),n=JSON.parse(this.props.location.state.user_programs),o=Object.keys(s),i=Object.keys(n);console.log("cardProg keys : ",i);for(var l=0;l<11;l++){n["program"+(l+1).toString()]&&a.push("Program "+(l+1).toString())}for(var c=0;c<11;c++){var d=o[c];switch(d){case"cards_read":s[d]&&t.push("Cards Read");break;case"cards_order":s[d]&&t.push("Cards Order");break;case"cards_edit":s[d]&&t.push("Cards Edit");break;case"cards_print":s[d]&&t.push("Cards Print");break;case"cards_reject":s[d]&&t.push("Cards Reject");break;case"nfc_write":s[d]&&t.push("NFC Write");break;case"permission7":s[d]&&t.push("Permission 7");break;case"permission8":s[d]&&t.push("Permission 8");break;case"permission9":s[d]&&t.push("Permission 9");break;case"permission10":s[d]&&t.push("Permission 10")}}switch(this.props.location.state.user_role){case"Administrator":r=1;break;case"Program Manager":r=2;break;case"User":r=3}}else T[0].value="",T[1].value="",T[2].value="";var m=4;switch(localStorage.getItem("user_role")){case"Administrator":m=1;break;case"Program Manager":m=2;break;case"User":m=3}this.setState({cardPrograms:a,permissions:t,userID:this.props.location.state.id.toString(),status:this.props.location.state.user_status,role:this.props.location.state.user_role,cur_role:m,edit_role:r,user_created_date:this.props.location.state.created_date,disabledUser:"disabled"===this.props.location.state.user_status})},t.formFields=function(e,a){for(var t=0;t<T.length;t++)T[t].placeholder==a&&(T[t].value=e)},t.getProgram=function(e){var a="";switch(e){case"Program 1":a="program1";break;case"Program 2":a="program2";break;case"Program 3":a="program3";break;case"Program 4":a="program4";break;case"Program 5":a="program5";break;case"Program 6":a="program6";break;case"Program 7":a="program7";break;case"Program 8":a="program8";break;case"Program 9":a="program9";break;case"Program 10":a="program10";break;case"Program 11":a="program11";break;default:case"Program 12":a="program12"}return a},t.getPermission=function(e){var a="";switch(e){case"Cards Read":a="cards_read";break;case"Cards Order":a="cards_order";break;case"Cards Edit":a="cards_edit";break;case"Cards Print":a="cards_print";break;case"Cards Reject":a="cards_reject";break;case"NFC Write":a="nfc_write";break;case"Permission 7":a="permission7";break;case"Permission 8":a="permission8";break;case"Permission 9":a="permission9";break;case"Permission 10":a="permission10";break;case"Permission 11":a="permission11"}return a},t.render=function(){var e=this,a=this.props,t=(a.userData,a.classes),r=(a.transitionDuration,a.isDesktop),s=(a.isAdd,{width:r?"50%":120,float:"right",marginLeft:5,marginRight:5,marginBottom:20,minWidth:180}),o=r?{minWidth:150}:{minWidth:"90vw"};return n.a.createElement(f.a,{menuIndex:this.props.menuIndex,loader:this.state.showLoader},n.a.createElement(v.a,{container:!0,justify:"center",spacing:2,style:{minHeight:"100%"}},n.a.createElement(v.a,{item:!0,sm:4,xs:12,className:t.cardViewGridLeft},n.a.createElement(E.a,{elevation:0,style:{padding:10,backgroundColor:k.a.lightGray,borderRadius:5}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},n.a.createElement("div",{style:{paddingLeft:15}},n.a.createElement(d.a,{variant:"subtitle1"},"Card Programs")),n.a.createElement("div",null,n.a.createElement(y.a,{color:"primary","aria-label":"add program",onClick:this.handleAddProgram},n.a.createElement(j,null)))),this.state.cardPrograms.map((function(a){return n.a.createElement("div",{key:w.a.getKey(),style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},n.a.createElement(y.a,{"aria-label":"delete",onClick:function(){return e.removeCardPrograms(a)}},n.a.createElement(x.a,null)),n.a.createElement(d.a,{variant:"body1"},a))}))),n.a.createElement(E.a,{elevation:0,style:{padding:10,backgroundColor:k.a.lightGray,borderRadius:5,marginTop:20}},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}},n.a.createElement("div",{style:{paddingLeft:15}},n.a.createElement(d.a,{variant:"subtitle1"},"Permissions")),n.a.createElement("div",null,n.a.createElement(y.a,{color:"primary","aria-label":"add permissions",onClick:this.handleAddPermission},n.a.createElement(j,null)))),this.state.permissions.map((function(a){return n.a.createElement("div",{key:w.a.getKey(),style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},n.a.createElement(y.a,{"aria-label":"add to shopping cart",onClick:function(){return e.removePermission(a)}},n.a.createElement(x.a,null)),n.a.createElement(d.a,{variant:"body1"},a))}))),this.props.isAdd?n.a.createElement(E.a,{elevation:0,style:{padding:10,backgroundColor:k.a.lightGray,borderRadius:5,marginTop:20}},n.a.createElement("div",{style:{paddingLeft:15}},n.a.createElement(p.a,{fullWidth:!0},n.a.createElement(u.a,{id:"select-status"},"Status"),n.a.createElement(h.a,{labelId:"select-status",id:"select-status",value:this.state.userStatus,fullWidth:!0,onChange:function(a){e.setState({userStatus:a.target.value})}},n.a.createElement(g.a,{value:"enabled"},"Enabled"),n.a.createElement(g.a,{value:"locked"},"Locked"),n.a.createElement(g.a,{value:"disabled"},"Disabled"))))):null,this.props.isAdd?n.a.createElement(E.a,{elevation:0,style:{padding:10,backgroundColor:k.a.lightGray,borderRadius:5,marginTop:20}},n.a.createElement("div",{style:{paddingLeft:15}},n.a.createElement(p.a,{fullWidth:!0},n.a.createElement(u.a,{id:"select-role"},"Role"),n.a.createElement(h.a,{labelId:"select-role",id:"select-role",value:this.state.userRole,fullWidth:!0,onChange:function(a){e.setState({userRole:a.target.value})}},this.state.cur_role<2?n.a.createElement(g.a,{value:"Administrator"},"Administrator"):null,this.state.cur_role<3?n.a.createElement(g.a,{value:"Program Manager"},"Program Manager"):null,this.state.cur_role<4?n.a.createElement(g.a,{value:"User"},"User"):null,n.a.createElement(g.a,{value:"CardHolder"},"Card Holder"))))):null,this.props.isAdd?null:n.a.createElement("div",{style:{marginTop:20,paddingLeft:20}},n.a.createElement("div",null,n.a.createElement(d.a,{variant:"body1"},"User ID: ",this.state.userID)),n.a.createElement("div",{style:{marginTop:5,marginBottom:5}},n.a.createElement(d.a,{variant:"body1"},"Created: ",this.state.user_created_date)),n.a.createElement("div",null,n.a.createElement(d.a,{variant:"body1"},"Status: ",this.state.status)))),n.a.createElement(v.a,{item:!0,sm:5,xs:12,className:t.cardViewGrid,style:{marginRight:5}},n.a.createElement(E.a,{style:{padding:"0 10px"},elevation:0},T.map((function(a,t){var r=e.state.showError[a.name];return n.a.createElement(S.a,{key:w.a.getKey(),label:a.label,type:a.type,value:a.value,name:a.name,placeholder:a.placeholder,showError:r,formFields:e.formFields.bind(e)})})))),n.a.createElement(v.a,{item:!0,md:3,sm:12,className:t.cardViewGrid,style:o},n.a.createElement(E.a,{style:{padding:10,display:"flex",width:"100%",flexDirection:r?"column":"row",justifyContent:"center",alignItems:r?"stretch":"center",flexWrap:r?"nowrap":"wrap"},elevation:0},n.a.createElement("div",null,this.props.isAdd?n.a.createElement(m.a,{variant:"contained",size:"medium",color:"primary",style:s,onClick:this.onSave}," Create "):this.state.cur_role<=this.state.edit_role?n.a.createElement(m.a,{variant:"contained",size:"medium",color:"primary",style:s,onClick:this.onSave}," Update "):null),this.props.isAdd||this.state.cur_role>this.state.edit_role?null:n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(m.a,{variant:"contained",size:"medium",color:"primary",style:s,onClick:this.handleReset},"Reset password")),n.a.createElement("div",null,n.a.createElement(m.a,{variant:"contained",size:"medium",color:this.state.disabledUser?"primary":"secondary",style:s,onClick:this.handleStatus},this.state.disabledUser?"Enable User":"Disable User")))))),n.a.createElement(L,{open:this.state.openCardPrograms,selPrograms:this.state.cardPrograms,onCancel:function(){e.setState({openCardPrograms:!1})},onAdd:function(a){e.setState({cardPrograms:a,openCardPrograms:!1})},handleClose:function(){e.setState({openCardPrograms:!1})}}),n.a.createElement(N,{open:this.state.openPermissionDlg,selPrograms:this.state.permissions,onCancel:function(){e.setState({openPermissionDlg:!1})},onAdd:function(a){e.setState({permissions:a,openPermissionDlg:!1})},handleClose:function(){e.setState({openPermissionDlg:!1})}}),n.a.createElement(z.a,{ref:this.alertRef,okTitle:"done"}))},a}(n.a.Component);a.default=function(e){var a=Object(c.useDispatch)(),t=(Object(c.useSelector)((function(e){return e.app.userData})),Object(b.a)()),r=Object(P.a)(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},o=Object(C.a)("(min-width:1053px)");return n.a.createElement(W,Object.assign({},e,{menuIndex:4,isAdd:!1,dispatch:a,isDesktop:o,classes:t,transitionDuration:s}))}},jjAL:function(e,a,t){"use strict";var r=t("Ff2n"),s=t("rePB"),n=t("wx14"),o=t("q1tI"),i=t("iuhU"),l=t("H2TA"),c=t("tVbE"),d=o.forwardRef((function(e,a){var t,s=e.classes,l=e.className,d=e.component,m=void 0===d?"li":d,u=e.disableGutters,p=void 0!==u&&u,h=e.ListItemClasses,g=e.role,b=void 0===g?"menuitem":g,f=e.selected,v=e.tabIndex,E=Object(r.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(t=void 0!==v?v:-1),o.createElement(c.a,Object(n.a)({button:!0,role:b,tabIndex:t,component:m,selected:f,disableGutters:p,classes:Object(n.a)({dense:s.dense},h),className:Object(i.a)(s.root,l,f&&s.selected,!p&&s.gutters),ref:a},E))}));a.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.body1,Object(s.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(n.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)}}]);
//# sourceMappingURL=component---src-pages-users-view-js-8956333e9a8337a9cb7e.js.map