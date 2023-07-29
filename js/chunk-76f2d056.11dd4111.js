(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76f2d056"],{a9e32:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{class:"".concat(e.prefixCls,"-container")},[t("a-form-model",{ref:"formRegister",attrs:{model:e.formModel,rules:e.validRule}},[t("a-form-model-item",{attrs:{prop:"username"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入账户名"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"user"}})]},proxy:!0}]),model:{value:e.formModel.username,callback:function(t){e.$set(e.formModel,"username",t)},expression:"formModel.username"}})],1),t("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[t("template",{slot:"content"},[t("div",{style:{width:"240px"}},[t("div",{class:e.passwordLevelClass},[e._v(" 强度："),t("span",[e._v(e._s(e.passwordLevelName))])]),t("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),t("div",{staticStyle:{"margin-top":"10px"}},[t("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),t("a-form-model-item",{attrs:{prop:"password"}},[t("a-input-password",{attrs:{size:"large",autocomplete:"false",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"lock"}})]},proxy:!0}]),model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1)],2),t("a-form-model-item",{attrs:{prop:"password2"}},[t("a-input-password",{attrs:{size:"large",autocomplete:"false",placeholder:"确认密码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"lock"}})]},proxy:!0}]),model:{value:e.formModel.password2,callback:function(t){e.$set(e.formModel,"password2",t)},expression:"formModel.password2"}})],1),t("a-form-model-item",{attrs:{prop:"mobile"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入手机号码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"mobile"}})]},proxy:!0}]),model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:16}},[t("a-form-model-item",{attrs:{prop:"captcha"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入验证码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"safety-certificate"}})]},proxy:!0}]),model:{value:e.formModel.captcha,callback:function(t){e.$set(e.formModel,"captcha",t)},expression:"formModel.captcha"}})],1)],1),t("a-col",{attrs:{span:8}},[t("a-button",{attrs:{block:"",size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1)],1),t("div",{class:"".concat(e.prefixCls,"-container-submit")},[t("a-button",{attrs:{size:"large",type:"primary",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v("注册 ")])],1),t("div",{class:"".concat(e.prefixCls,"-container-other-login")},[t("router-link",{attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)},a=[],o=s("5530"),n=(s("ac1f"),s("498a"),s("d3b7"),s("159b"),s("b64b"),s("a15b"),s("25f0"),s("ac0d")),i=s("7ded"),l={0:"低",1:"低",2:"中",3:"强"},c={0:"error",1:"error",2:"warning",3:"success"},d={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},p={name:"Register",mixins:[n["b"]],data:function(){return{prefixCls:"".concat(this.$config.cssPrefix,"login"),formModel:{username:"",password:"",password2:"",mobile:"",captcha:""},validRule:{username:[{required:!0,message:"请输入账户名"},{validator:this.checkUsername}],password:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],password2:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],mobile:[{required:!0,message:"请输入手机号码",trigger:"change"},{validator:this.handlePhoneCheck}],captcha:[{required:!0,message:"请输入验证码"},{validator:this.handleCaptchaCheck}]},state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return c[this.state.passwordLevel]},passwordLevelName:function(){return l[this.state.passwordLevel]},passwordLevelColor:function(){return d[this.state.passwordLevel]}},methods:{checkUsername:function(e,t,s){t?s():s(new Error("请输入用户名"))},handlePasswordLevel:function(e,t,s){var r=0;/[0-9]/.test(t)&&r++,/[a-zA-Z]/.test(t)&&r++,/[^0-9a-zA-Z_]/.test(t)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),s()):(0===r&&(this.state.percent=10),s(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,s){var r=this.formModel.password;void 0===t&&s(new Error("请输入密码")),t&&r&&t.trim()!==r.trim()&&s(new Error("两次密码不一致")),s()},handlePhoneCheck:function(e,t,s){var r=/^1[3456789]\d{9}$/;r.test(t)?s():s(new Error("请输入正确手机号"))},handlePasswordInputClick:function(){this.isMobile?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleCaptchaCheck:function(e,t,s){t?s():s(new Error("请输入验证码"))},handleSubmit:function(){var e=this,t=this.formModel,s=this.state,r=this.$router;this.$refs.formRegister.validate((function(a,n){e.alertMsg(n),a&&(s.passwordLevelChecked=!1,r.push({name:"registerResult",params:Object(o["a"])({},t)}))}))},alertMsg:function(e){var t=[];Object.keys(e).forEach((function(s){return t.push(e[s][0].message)})),t.length&&this.$message.error(t.join("；"))},getCaptcha:function(e){var t=this;e.preventDefault();var s=this.formModel,r=this.state,a=this.$message,o=this.$notification;this.$refs.formRegister.validateField(["mobile"],(function(e){if(e)t.$message.error(e);else{r.smsSendBtn=!0;var n=window.setInterval((function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(n))}),1e3),l=a.loading("验证码发送中..",0);Object(i["b"])({mobile:s.mobile}).then((function(e){setTimeout(l,0),o.error({message:"系统提示",description:"您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(l,1),clearInterval(n),r.time=60,r.smsSendBtn=!1,t.requestFailed(e)}))}}))},requestFailed:function(e){this.$notification.error({message:"系统提示",description:e.toString(),duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},u=p,m=s("2877"),f=Object(m["a"])(u,r,a,!1,null,null,null);t["default"]=f.exports}}]);