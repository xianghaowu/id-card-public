(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{MSNp:function(e,a,t){e.exports=t.p+"static/bar-logo-29e248e379426350cf822d6fc92b23ca.png"},MSZI:function(e,a,t){"use strict";t.r(a);var r=t("dI71"),n=t("q1tI"),o=t.n(n),i=t("Wbzz"),l=t("vDqi"),s=t.n(l),c=t("bMkq"),d=t("Ji2X"),u=t("/MKj"),m=t("oCA+"),p=t("MSNp"),b=t.n(p),f=t("kKAo"),v=t("r9w1"),h=t("Z3vd"),g=t("ADg1"),E=t("ofer"),w=t("CkNY").c+"/api/forgotpassword",y=function(e){function a(a){var t;return(t=e.call(this,a)||this).onSignup=function(){},t.onSignin=function(){},t.handleChange=function(e){t.setState({email:e.target.value})},t.handleSubmit=function(){s.a.put(w,{email:t.state.email}).then((function(e){Object(i.navigate)("/pwdreset/")})).catch((function(e){Object(i.navigate)("/forgotpwd/"),t.setState({showError:!0})}))},t.state={isLogin:!0,email:"",nav:"/forgotpwd/",massage:"Email Incorrect!",showError:!1},t}Object(r.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.props;e.dispatch,e.userData,e.basicData},t.render=function(){var e=this.props,a=(e.userData,e.classes);return o.a.createElement(c.a,null,o.a.createElement(d.a,{maxWidth:"md",className:a.rootContainer},o.a.createElement(f.a,{className:a.paper,elevation:3},o.a.createElement("div",{style:{width:"100%",textAlign:"center"}},o.a.createElement("img",{alt:"",src:b.a,width:250})),o.a.createElement("div",{style:{width:"100%",textAlign:"center",color:"red"}},this.state.showError?this.state.massage:null),o.a.createElement("div",{style:{padding:"0 30px",marginTop:40}},o.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Forgot Password"),o.a.createElement(E.a,{variant:"body1",gutterBottom:!0,style:{marginBottom:60}},"Enter your email address and we will send you a temporary password."),o.a.createElement("form",{className:a.formRoot,autoComplete:"off"},o.a.createElement(g.a,{variant:"outlined",fullWidth:!0},o.a.createElement(v.a,{id:"email",label:"Email",variant:"outlined",value:this.state.email,onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement(i.Link,{to:"/",replace:!0},o.a.createElement(h.a,{variant:"contained",color:"primary"},"back")),o.a.createElement(i.Link,{to:this.state.nav},o.a.createElement(h.a,{variant:"contained",color:"primary",className:a.signin,onClick:this.handleSubmit},"submit")))))),o.a.createElement(E.a,{variant:"subtitle2",gutterBottom:!0,style:{position:"absolute",bottom:10,fontStyle:"normal"}},"Powered by Veritec © 2020")))},a}(o.a.Component);a.default=function(e){var a=Object(u.useDispatch)(),t=Object(u.useSelector)((function(e){return e.app.userData})),r=Object(m.b)();return o.a.createElement(y,Object.assign({},e,{dispatch:a,userData:t,classes:r}))}},r9w1:function(e,a,t){"use strict";var r=t("wx14"),n=t("Ff2n"),o=t("q1tI"),i=t("iuhU"),l=t("pdwK"),s=t("TLZQ"),c=t("KmP9"),d=t("1AYd"),u=t("ADg1"),m=t("28cb"),p=t("EHdT"),b=t("H2TA"),f=o.forwardRef((function(e,a){var t=e.children,l=e.classes,s=e.className,c=e.component,d=void 0===c?"p":c,u=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(n.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),b=Object(p.a)(),f=Object(m.a)({props:e,muiFormControl:b,states:["variant","margin","disabled","error","filled","focused","required"]});return o.createElement(d,Object(r.a)({className:Object(i.a)(l.root,("filled"===f.variant||"outlined"===f.variant)&&l.contained,s,f.disabled&&l.disabled,f.error&&l.error,f.filled&&l.filled,f.focused&&l.focused,f.required&&l.required,"dense"===f.margin&&l.marginDense),ref:a},u)," "===t?o.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):t)})),v=Object(b.a)((function(e){return{root:Object(r.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(f),h=t("cVXz"),g={standard:l.a,filled:s.a,outlined:c.a},E=o.forwardRef((function(e,a){var t=e.autoComplete,l=e.autoFocus,s=void 0!==l&&l,c=e.children,m=e.classes,p=e.className,b=e.color,f=void 0===b?"primary":b,E=e.defaultValue,w=e.disabled,y=void 0!==w&&w,j=e.error,O=void 0!==j&&j,x=e.FormHelperTextProps,C=e.fullWidth,F=void 0!==C&&C,q=e.helperText,P=e.hiddenLabel,S=e.id,N=e.InputLabelProps,T=e.inputProps,D=e.InputProps,M=e.inputRef,k=e.label,I=e.multiline,L=void 0!==I&&I,A=e.name,B=e.onBlur,R=e.onChange,W=e.onFocus,H=e.placeholder,V=e.required,K=void 0!==V&&V,z=e.rows,J=e.rowsMax,Z=e.select,X=void 0!==Z&&Z,Y=e.SelectProps,$=e.type,_=e.value,Q=e.variant,U=void 0===Q?"standard":Q,G=Object(n.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===U&&(N&&void 0!==N.shrink&&(ee.notched=N.shrink),k)){var ae,te=null!==(ae=null==N?void 0:N.required)&&void 0!==ae?ae:K;ee.label=o.createElement(o.Fragment,null,k,te&&" *")}X&&(Y&&Y.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var re=q&&S?"".concat(S,"-helper-text"):void 0,ne=k&&S?"".concat(S,"-label"):void 0,oe=g[U],ie=o.createElement(oe,Object(r.a)({"aria-describedby":re,autoComplete:t,autoFocus:s,defaultValue:E,fullWidth:F,multiline:L,name:A,rows:z,rowsMax:J,type:$,value:_,id:S,inputRef:M,onBlur:B,onChange:R,onFocus:W,placeholder:H,inputProps:T},ee,D));return o.createElement(u.a,Object(r.a)({className:Object(i.a)(m.root,p),disabled:y,error:O,fullWidth:F,hiddenLabel:P,ref:a,required:K,color:f,variant:U},G),k&&o.createElement(d.a,Object(r.a)({htmlFor:S,id:ne},N),k),X?o.createElement(h.a,Object(r.a)({"aria-describedby":re,id:S,labelId:ne,value:_,input:ie},Y),c):ie,q&&o.createElement(v,Object(r.a)({id:re},x),q))}));a.a=Object(b.a)({root:{}},{name:"MuiTextField"})(E)}}]);
//# sourceMappingURL=component---src-pages-forgotpwd-js-e6de93b8fa6a2516fb69.js.map