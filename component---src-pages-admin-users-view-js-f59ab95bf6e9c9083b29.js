(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{p6Lgq:function(e,t,a){"use strict";a.r(t),a.d(t,"UserView",(function(){return I}));var s=a("dI71"),r=a("q1tI"),i=a.n(r),n=a("Wbzz"),o=a("vDqi"),d=a.n(o),l=a("/MKj"),c=a("ofer"),m=a("Z3vd"),u=a("oCA+"),h=a("7oih"),p=a("tRbT"),g=a("kKAo"),f=a("tr08"),v=a("lopY"),w=a("+n12"),S=a("lpWn"),b=a("/4VY"),E=a("CkNY"),y=a("+QwO"),_=a.n(y),D=E.c+"/api",A=[{label:"Email",name:"email",placeholder:"Email Address",value:"cam@yahoo.com",type:"email"},{label:"First Name",placeholder:"First Name",name:"first_name",value:"Cam",type:"text"},{label:"Last Name",placeholder:"Last Name",name:"last_name",value:"Nguyen",type:"text"}],I=function(e){function t(t){var a;(a=e.call(this,t)||this).handleAddProgram=function(){a.setState({openCardPrograms:!0})},a.handleAddPermission=function(){a.setState({openPermissionDlg:!0})},a.removeCardPrograms=function(e){var t=a.state.cardPrograms.filter((function(t){return t!=e}));a.setState({cardPrograms:t})},a.removePermission=function(e){var t=a.state.permissions.filter((function(t){return t!=e}));a.setState({permissions:t})},a.handleReset=function(){var e=localStorage.getItem("token"),t=(localStorage.getItem("userId"),{Authorization:"Bearer "+e}),s=D+"/forgotpassword",r={email:A[0].value};a.setState({showLoader:!0}),d.a.put(s,r,{headers:t}).then((function(e){a.setState({showLoader:!1}),"unauthorized"===e.data.status?a.setState({showError:!0,message:e.data.message.toString()}):(a.setState({showLoader:!1}),a.alertRef.current?a.alertRef.current.showDialog("","A password reset email has been sent to the selected user",(function(){Object(n.navigate)("/admin/users")})):Object(n.navigate)("/admin/users"))})).catch((function(e){a.setState({showLoader:!1,showError:!0,message:e.toString()})}))},a.handleStatus=function(){var e=localStorage.getItem("token"),t=(localStorage.getItem("userId"),{Authorization:"Bearer "+e}),s=D+"/userEnabled/"+a.state.userID,r="disabled";a.state.disabledUser&&(r="enabled");var i={status:r};a.setState({showLoader:!0}),d.a.put(s,i,{headers:t}).then((function(e){a.setState({showLoader:!1}),"unauthorized"===e.data.status?a.setState({showError:!0,message:e.data.message.toString()}):(a.setState({showLoader:!1,disabledUser:!a.state.disabledUser}),a.alertRef.current?a.alertRef.current.showDialog("","This user status has set as "+r,(function(){Object(n.navigate)("/admin/users")})):Object(n.navigate)("/admin/users"))})).catch((function(e){a.setState({showLoader:!1,showError:!0,message:e.toString()})}))},a.onSave=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("userId"),s=D+"/users/";a.props.isAdd||(s=D+"/admin/users/"+a.state.userID);for(var r={Authorization:"Bearer "+e},i=A,o=!0,l={},c=0;c<i.length;c++)i[c].value?0!=c||_.a.isEmail(i[c].value)||(l[i[c].name]="Invalid Email Address",o=!1):(l[i[c].name]="This field is required",o=!1);if(!a.props.isAdd){var m=a.props.location.state.email.split("@")[1],u=i[0].value;console.log("new domain : ",u),m!=u.split("@")[1]&&(l.email="Email domain can not be changed",o=!1)}if(a.setState({showError:l}),o){var h={program1:!0,program2:!0,program3:!0,program4:!0,program5:!0,program6:!0},p={cards_read:!0,cards_order:!0,cards_edit:!0,cards_print:!0,cards_reject:!0,nfc_write:!0},g={user_id:a.state.userID,user_email:A[0].value,first_name:A[1].value,last_name:A[2].value,user_status:a.props.isAdd?"enabled":a.state.status,user_permissions:p,user_programs:h,user_role:"Administrator",created_user:t,modified_user:t};console.log("body : ",g),a.props.isAdd?(a.setState({showLoader:!0}),d.a.post(s,g,{headers:r}).then((function(e){console.log("response : ",e),a.setState({showLoader:!1}),"unauthorized"===e.data.status?a.setState({showError:!0,message:e.data.message.toString()}):a.alertRef.current?a.alertRef.current.showDialog("","New user is created",(function(){Object(n.navigate)("/admin/users")})):Object(n.navigate)("/admin/users")})).catch((function(e){console.log("error : ",e),a.setState({showLoader:!1,showError:!0,message:e.toString()})}))):(a.setState({showLoader:!0}),d.a.put(s,g,{headers:r}).then((function(e){a.setState({showLoader:!1}),"unauthorized"===e.data.status?a.setState({showError:!0,message:e.data.message.toString()}):a.alertRef.current?a.alertRef.current.showDialog("","User information is updated",(function(){Object(n.navigate)("/admin/users")})):Object(n.navigate)("/admin/users")})).catch((function(e){a.setState({showLoader:!1,showError:!0,message:e.toString()})})))}};var s=localStorage.getItem("user_permissions");return a.state={isLogin:!0,showEditButton:!0,cardPrograms:(t.isAdd,["Program1","Program2","Program3"]),permissions:t.isAdd?s:["Cards_Read","Cards_Order","Cards_Edit","Cards_Print"],showLoader:!1,disabledUser:!1,userID:"",user_created_date:"01-01-2020",status:"disabled",formFields:A,showError:{}},a.alertRef=i.a.createRef(),a}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props;e.dispatch,e.userData,e.basicData;A[0].value=this.props.location.state.email,A[1].value=this.props.location.state.first_name,A[2].value=this.props.location.state.last_name,this.setState({userID:this.props.isAdd?0:this.props.location.state.id.toString(),status:this.props.location.state.user_status,role:this.props.location.state.user_role,user_created_date:this.props.location.state.created_date,disabledUser:"disabled"===this.props.location.state.user_status})},a.formFields=function(e,t){for(var a=0;a<A.length;a++)A[a].placeholder==t&&(A[a].value=e)},a.render=function(){var e=this,t=this.props,a=(t.userData,t.classes),s=(t.transitionDuration,t.isDesktop),r=(t.isAdd,{width:s?"50%":120,float:"right",marginLeft:5,marginRight:5,marginBottom:20,minWidth:180}),n=s?{minWidth:150}:{minWidth:"90vw"};return i.a.createElement(h.a,{menuIndex:this.props.menuIndex,loader:this.state.showLoader},i.a.createElement(p.a,{container:!0,justify:"center",spacing:2,style:{minHeight:"100%"}},i.a.createElement(p.a,{item:!0,sm:4,xs:12,className:a.cardViewGridLeft,style:{display:this.props.isAdd?"none":"inherit"}},this.props.isAdd?null:i.a.createElement("div",{style:{marginTop:20,paddingLeft:20}},i.a.createElement("div",null,i.a.createElement(c.a,{variant:"body1"},"User ID: ",this.state.userID)),i.a.createElement("div",{style:{marginTop:5,marginBottom:5}},i.a.createElement(c.a,{variant:"body1"},"Created: ",this.state.user_created_date)),i.a.createElement("div",null,i.a.createElement(c.a,{variant:"body1"},"Status: ",this.state.status)))),i.a.createElement(p.a,{item:!0,md:5,sm:12,xs:12,className:a.cardViewGrid,style:{marginRight:5}},i.a.createElement(g.a,{style:{padding:"0 10px"},elevation:0},A.map((function(t,a){var s=e.state.showError[t.name];return i.a.createElement(S.a,{key:w.a.getKey(),label:t.label,type:t.type,value:t.value,name:t.name,placeholder:t.placeholder,showError:s,formFields:e.formFields.bind(e)})})))),i.a.createElement(p.a,{item:!0,md:3,sm:12,className:a.cardViewGrid,style:n},i.a.createElement(g.a,{style:{padding:10,display:"flex",width:"100%",flexDirection:s?"column":"row",justifyContent:"center",alignItems:s?"stretch":"center",flexWrap:s?"nowrap":"wrap"},elevation:0},i.a.createElement("div",null,this.props.isAdd?i.a.createElement(m.a,{variant:"contained",size:"medium",color:"primary",style:r,onClick:this.onSave}," Create "):i.a.createElement(m.a,{variant:"contained",size:"medium",color:"primary",style:r,onClick:this.onSave}," Update ")),this.props.isAdd?null:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,{variant:"contained",size:"medium",color:"primary",style:r,onClick:this.handleReset},"Reset password")),i.a.createElement("div",null,i.a.createElement(m.a,{variant:"contained",size:"medium",color:this.state.disabledUser?"primary":"secondary",style:r,onClick:this.handleStatus},this.state.disabledUser?"Enable User":"Disable User")))))),i.a.createElement(b.a,{ref:this.alertRef,okTitle:"done"}))},t}(i.a.Component);t.default=function(e){var t=Object(l.useDispatch)(),a=(Object(l.useSelector)((function(e){return e.app.userData})),Object(u.a)()),s=Object(f.a)(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},n=Object(v.a)("(min-width:1053px)");return i.a.createElement(I,Object.assign({},e,{menuIndex:5,isAdd:!1,dispatch:t,isDesktop:n,classes:a,transitionDuration:r}))}}}]);
//# sourceMappingURL=component---src-pages-admin-users-view-js-f59ab95bf6e9c9083b29.js.map