(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"00d87":function(e,t){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,a=0;r<e.length;r++,a+=8)t[a>>>5]|=e[r]<<24-a%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],a=0;a<e.length;a+=3)for(var n=e[a]<<16|e[a+1]<<8|e[a+2],o=0;o<4;o++)8*a+6*o<=8*e.length?r.push(t.charAt(n>>>6*(3-o)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],a=0,n=0;a<e.length;n=++a%4)0!=n&&r.push((t.indexOf(e.charAt(a-1))&Math.pow(2,-2*n+8)-1)<<2*n|t.indexOf(e.charAt(a))>>>6-2*n);return r}};e.exports=r})()},"044b":function(e,t){function r(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function a(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&r(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||a(e)||!!e._isBuffer)}},"0fea":function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return m})),r.d(t,"d",(function(){return h}));var a=r("b775"),n=r("53ca"),o=r("d4ec"),s=r("bee2"),i=(r("4e82"),r("ac1f"),r("caad"),r("2532"),r("d3b7"),r("25f0"),r("b64b"),r("6821")),c=r.n(i),l="dd05f1c54d63749eda95f9fa6d49v442a",u=function(){function e(){Object(o["a"])(this,e)}return Object(s["a"])(e,null,[{key:"sortAsc",value:function(e){var t=[],r=0;for(var a in e)t[r]=a,r++;var n=t.sort(),o={};for(var s in n)o[n[s]]=e[n[s]];return o}},{key:"getSign",value:function(e,t){var r=this.parseQueryString(e),a=this.mergeObject(r,t),n=this.sortAsc(a);return c()(JSON.stringify(n)+l).toUpperCase()}},{key:"parseQueryString",value:function(e){var t=/^[^\?]+\?([\w\W]+)$/,r=/([^&=]+)=([\w\W]*?)(&|$|#)/g,a=t.exec(e),n={},o=e.substring(e.lastIndexOf("/")+1);if(o.includes(",")&&(o.includes("?")&&(o=o.substring(0,o.indexOf("?"))),n["x-path-variable"]=decodeURIComponent(o)),a&&a[1]){var s,i=a[1];while(null!==(s=r.exec(i)))this.myIsNaN(s[2])&&(s[2]=s[2].toString()),n[s[1]]=s[2]}return n}},{key:"mergeObject",value:function(e,t){if(t&&Object.keys(t).length>0)for(var r in t)!0===t.hasOwnProperty(r)&&(this.myIsNaN(t[r])&&(t[r]=t[r].toString()),e[r]=t[r]);return e}},{key:"urlEncode",value:function(e,t,r){if(null===e)return"";var a="",o=Object(n["a"])(e);if("string"===o||"number"===o||"boolean"===o)a+="&"+t+"="+(null===r||r?encodeURIComponent(e):e);else for(var s in e){var i=null===t?s:t+(e instanceof Array?"["+s+"]":"."+s);a+=this.urlEncode(e[s],i,r)}return a}},{key:"getDateTimeToString",value:function(){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();r<10&&(r="0"+r),a<10&&(a="0"+a);var n=e.getHours(),o=e.getMinutes(),s=e.getSeconds(),i=e.getMilliseconds();return n<10&&(n="0"+n),o<10&&(o="0"+o),s<10&&(s="0"+s),i<10&&(s="0"+i),t+""+r+a+n+o+s}},{key:"myIsNaN",value:function(e){return"number"===typeof e&&!isNaN(e)}}]),e}(),d={user:"/user",role:"/role",service:"/service",userList:"/userList",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function f(e){return Object(a["b"])({url:d.role,method:"get",params:e})}function p(e){return Object(a["b"])({url:d.service,method:"get",params:e})}function m(e,t){var r=u.getSign(e,t),n={"X-Sign":r,"X-TIMESTAMP":u.getDateTimeToString()};return Object(a["b"])({url:e,method:"get",params:t,headers:n})}function h(e){return Object(a["b"])({url:d.userList,method:"get",params:e})}},3390:function(e,t,r){"use strict";r.r(t);r("a4d3"),r("e01a");var a=function(){var e=this,t=e._self._c;return t("a-result",{attrs:{status:"success",title:e.email,"sub-title":e.description},scopedSlots:e._u([{key:"icon",fn:function(){return[t("a-icon",{attrs:{type:"check-circle"}})]},proxy:!0},{key:"extra",fn:function(){return[t("a-button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:e.goHomeHandle}},[e._v("返回首页")])]},proxy:!0}])})},n=[],o={name:"RegisterResult",data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx";return"你的账户：".concat(e," 注册成功")}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},s=o,i=r("2877"),c=Object(i["a"])(s,a,n,!1,null,"683dc966",null);t["default"]=c.exports},"5fc7":function(e,t){e.exports="data:image/png;base64,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"},6821:function(e,t,r){(function(){var t=r("00d87"),a=r("9a634").utf8,n=r("044b"),o=r("9a634").bin,s=function(e,r){e.constructor==String?e=r&&"binary"===r.encoding?o.stringToBytes(e):a.stringToBytes(e):n(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var i=t.bytesToWords(e),c=8*e.length,l=1732584193,u=-271733879,d=-1732584194,f=271733878,p=0;p<i.length;p++)i[p]=16711935&(i[p]<<8|i[p]>>>24)|4278255360&(i[p]<<24|i[p]>>>8);i[c>>>5]|=128<<c%32,i[14+(c+64>>>9<<4)]=c;var m=s._ff,h=s._gg,g=s._hh,v=s._ii;for(p=0;p<i.length;p+=16){var b=l,A=u,y=d,w=f;l=m(l,u,d,f,i[p+0],7,-680876936),f=m(f,l,u,d,i[p+1],12,-389564586),d=m(d,f,l,u,i[p+2],17,606105819),u=m(u,d,f,l,i[p+3],22,-1044525330),l=m(l,u,d,f,i[p+4],7,-176418897),f=m(f,l,u,d,i[p+5],12,1200080426),d=m(d,f,l,u,i[p+6],17,-1473231341),u=m(u,d,f,l,i[p+7],22,-45705983),l=m(l,u,d,f,i[p+8],7,1770035416),f=m(f,l,u,d,i[p+9],12,-1958414417),d=m(d,f,l,u,i[p+10],17,-42063),u=m(u,d,f,l,i[p+11],22,-1990404162),l=m(l,u,d,f,i[p+12],7,1804603682),f=m(f,l,u,d,i[p+13],12,-40341101),d=m(d,f,l,u,i[p+14],17,-1502002290),u=m(u,d,f,l,i[p+15],22,1236535329),l=h(l,u,d,f,i[p+1],5,-165796510),f=h(f,l,u,d,i[p+6],9,-1069501632),d=h(d,f,l,u,i[p+11],14,643717713),u=h(u,d,f,l,i[p+0],20,-373897302),l=h(l,u,d,f,i[p+5],5,-701558691),f=h(f,l,u,d,i[p+10],9,38016083),d=h(d,f,l,u,i[p+15],14,-660478335),u=h(u,d,f,l,i[p+4],20,-405537848),l=h(l,u,d,f,i[p+9],5,568446438),f=h(f,l,u,d,i[p+14],9,-1019803690),d=h(d,f,l,u,i[p+3],14,-187363961),u=h(u,d,f,l,i[p+8],20,1163531501),l=h(l,u,d,f,i[p+13],5,-1444681467),f=h(f,l,u,d,i[p+2],9,-51403784),d=h(d,f,l,u,i[p+7],14,1735328473),u=h(u,d,f,l,i[p+12],20,-1926607734),l=g(l,u,d,f,i[p+5],4,-378558),f=g(f,l,u,d,i[p+8],11,-2022574463),d=g(d,f,l,u,i[p+11],16,1839030562),u=g(u,d,f,l,i[p+14],23,-35309556),l=g(l,u,d,f,i[p+1],4,-1530992060),f=g(f,l,u,d,i[p+4],11,1272893353),d=g(d,f,l,u,i[p+7],16,-155497632),u=g(u,d,f,l,i[p+10],23,-1094730640),l=g(l,u,d,f,i[p+13],4,681279174),f=g(f,l,u,d,i[p+0],11,-358537222),d=g(d,f,l,u,i[p+3],16,-722521979),u=g(u,d,f,l,i[p+6],23,76029189),l=g(l,u,d,f,i[p+9],4,-640364487),f=g(f,l,u,d,i[p+12],11,-421815835),d=g(d,f,l,u,i[p+15],16,530742520),u=g(u,d,f,l,i[p+2],23,-995338651),l=v(l,u,d,f,i[p+0],6,-198630844),f=v(f,l,u,d,i[p+7],10,1126891415),d=v(d,f,l,u,i[p+14],15,-1416354905),u=v(u,d,f,l,i[p+5],21,-57434055),l=v(l,u,d,f,i[p+12],6,1700485571),f=v(f,l,u,d,i[p+3],10,-1894986606),d=v(d,f,l,u,i[p+10],15,-1051523),u=v(u,d,f,l,i[p+1],21,-2054922799),l=v(l,u,d,f,i[p+8],6,1873313359),f=v(f,l,u,d,i[p+15],10,-30611744),d=v(d,f,l,u,i[p+6],15,-1560198380),u=v(u,d,f,l,i[p+13],21,1309151649),l=v(l,u,d,f,i[p+4],6,-145523070),f=v(f,l,u,d,i[p+11],10,-1120210379),d=v(d,f,l,u,i[p+2],15,718787259),u=v(u,d,f,l,i[p+9],21,-343485551),l=l+b>>>0,u=u+A>>>0,d=d+y>>>0,f=f+w>>>0}return t.endian([l,u,d,f])};s._ff=function(e,t,r,a,n,o,s){var i=e+(t&r|~t&a)+(n>>>0)+s;return(i<<o|i>>>32-o)+t},s._gg=function(e,t,r,a,n,o,s){var i=e+(t&a|r&~a)+(n>>>0)+s;return(i<<o|i>>>32-o)+t},s._hh=function(e,t,r,a,n,o,s){var i=e+(t^r^a)+(n>>>0)+s;return(i<<o|i>>>32-o)+t},s._ii=function(e,t,r,a,n,o,s){var i=e+(r^(t|~a))+(n>>>0)+s;return(i<<o|i>>>32-o)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var a=t.wordsToBytes(s(e,r));return r&&r.asBytes?a:r&&r.asString?o.bytesToString(a):t.bytesToHex(a)}})()},"9a634":function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},a9e32:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{class:"".concat(e.prefixCls,"-container")},[t("a-form-model",{ref:"formRegister",attrs:{model:e.formModel,rules:e.validRule}},[t("a-form-model-item",{attrs:{prop:"username"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入账户名"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"user"}})]},proxy:!0}]),model:{value:e.formModel.username,callback:function(t){e.$set(e.formModel,"username",t)},expression:"formModel.username"}})],1),t("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[t("template",{slot:"content"},[t("div",{style:{width:"240px"}},[t("div",{class:e.passwordLevelClass},[e._v(" 强度："),t("span",[e._v(e._s(e.passwordLevelName))])]),t("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),t("div",{staticStyle:{"margin-top":"10px"}},[t("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),t("a-form-model-item",{attrs:{prop:"password"}},[t("a-input-password",{attrs:{size:"large",autocomplete:"false",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"lock"}})]},proxy:!0}]),model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1)],2),t("a-form-model-item",{attrs:{prop:"password2"}},[t("a-input-password",{attrs:{size:"large",autocomplete:"false",placeholder:"确认密码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"lock"}})]},proxy:!0}]),model:{value:e.formModel.password2,callback:function(t){e.$set(e.formModel,"password2",t)},expression:"formModel.password2"}})],1),t("a-form-model-item",{attrs:{prop:"mobile"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入手机号码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"mobile"}})]},proxy:!0}]),model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}})],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:16}},[t("a-form-model-item",{attrs:{prop:"captcha"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入验证码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"safety-certificate"}})]},proxy:!0}]),model:{value:e.formModel.captcha,callback:function(t){e.$set(e.formModel,"captcha",t)},expression:"formModel.captcha"}})],1)],1),t("a-col",{attrs:{span:8}},[t("a-button",{attrs:{block:"",size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1)],1),t("div",{class:"".concat(e.prefixCls,"-container-submit")},[t("a-button",{attrs:{size:"large",type:"primary",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v("注册 ")])],1),t("div",{class:"".concat(e.prefixCls,"-container-other-login")},[t("router-link",{attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)},n=[],o=r("5530"),s=(r("ac1f"),r("498a"),r("d3b7"),r("159b"),r("b64b"),r("a15b"),r("25f0"),r("ac0d")),i=r("7ded"),c={0:"低",1:"低",2:"中",3:"强"},l={0:"error",1:"error",2:"warning",3:"success"},u={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},d={name:"Register",mixins:[s["b"]],data:function(){return{prefixCls:"".concat(this.$config.cssPrefix,"login"),formModel:{username:"",password:"",password2:"",mobile:"",captcha:""},validRule:{username:[{required:!0,message:"请输入账户名"},{validator:this.checkUsername}],password:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],password2:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],mobile:[{required:!0,message:"请输入手机号码",trigger:"change"},{validator:this.handlePhoneCheck}],captcha:[{required:!0,message:"请输入验证码"},{validator:this.handleCaptchaCheck}]},state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return l[this.state.passwordLevel]},passwordLevelName:function(){return c[this.state.passwordLevel]},passwordLevelColor:function(){return u[this.state.passwordLevel]}},methods:{checkUsername:function(e,t,r){t?r():r(new Error("请输入用户名"))},handlePasswordLevel:function(e,t,r){var a=0;/[0-9]/.test(t)&&a++,/[a-zA-Z]/.test(t)&&a++,/[^0-9a-zA-Z_]/.test(t)&&a++,this.state.passwordLevel=a,this.state.percent=30*a,a>=2?(a>=3&&(this.state.percent=100),r()):(0===a&&(this.state.percent=10),r(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,r){var a=this.formModel.password;void 0===t&&r(new Error("请输入密码")),t&&a&&t.trim()!==a.trim()&&r(new Error("两次密码不一致")),r()},handlePhoneCheck:function(e,t,r){var a=/^1[3456789]\d{9}$/;a.test(t)?r():r(new Error("请输入正确手机号"))},handlePasswordInputClick:function(){this.isMobile?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleCaptchaCheck:function(e,t,r){t?r():r(new Error("请输入验证码"))},handleSubmit:function(){var e=this,t=this.formModel,r=this.state,a=this.$router;this.$refs.formRegister.validate((function(n,s){e.alertMsg(s),n&&(r.passwordLevelChecked=!1,a.push({name:"registerResult",params:Object(o["a"])({},t)}))}))},alertMsg:function(e){var t=[];Object.keys(e).forEach((function(r){return t.push(e[r][0].message)})),t.length&&this.$message.error(t.join("；"))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.formModel,a=this.state,n=this.$message,o=this.$notification;this.$refs.formRegister.validateField(["mobile"],(function(e){if(e)t.$message.error(e);else{a.smsSendBtn=!0;var s=window.setInterval((function(){a.time--<=0&&(a.time=60,a.smsSendBtn=!1,window.clearInterval(s))}),1e3),c=n.loading("验证码发送中..",0);Object(i["b"])({mobile:r.mobile}).then((function(e){setTimeout(c,0),o.error({message:"系统提示",description:"您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(c,1),clearInterval(s),a.time=60,a.smsSendBtn=!1,t.requestFailed(e)}))}}))},requestFailed:function(e){this.$notification.error({message:"系统提示",description:e.toString(),duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},f=d,p=r("2877"),m=Object(p["a"])(f,a,n,!1,null,null,null);t["default"]=m.exports},ede4:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{class:"".concat(e.prefixCls,"-container")},[t("div",{class:"".concat(e.prefixCls,"-container-form")},[t("a-form-model",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit.apply(null,arguments)}}},[t("a-tabs",{attrs:{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"initial"}},on:{change:e.handleTabClick}},[t("a-tab-pane",{key:"tab1",attrs:{tab:"账号密码登录"}},[t("login-account",{ref:"alogin",on:{validFail:e.validateFail,success:e.requestSuccess,fail:e.requestFailed}})],1),t("a-tab-pane",{key:"tab2",attrs:{tab:"手机号登录"}},[t("login-phone",{ref:"plogin",on:{validFail:e.validateFail,success:e.requestSuccess,fail:e.requestFailed}})],1)],1)],1)],1),t("div",{class:"".concat(e.prefixCls,"-container-auto-login")},[t("a-checkbox",{model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}},[e._v("自动登录")]),t("router-link",{attrs:{to:{}}},[e._v("忘记密码")])],1),t("div",{class:"".concat(e.prefixCls,"-container-submit")},[t("a-button",{attrs:{size:"large",type:"primary",loading:e.loginBtn,disabled:e.loginBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v("登录")])],1),t("div",{class:"".concat(e.prefixCls,"-container-other")},[t("span",[e._v("其他登录方式")]),t("a",[t("a-icon",{staticClass:"item-icon",attrs:{type:"alipay-circle"}})],1),t("a",[t("a-icon",{staticClass:"item-icon",attrs:{type:"taobao-circle"}})],1),t("a",[t("a-icon",{staticClass:"item-icon",attrs:{type:"weibo-circle"}})],1),t("router-link",{class:"".concat(e.prefixCls,"-container-other-register"),attrs:{to:{name:"register"}}},[e._v("注册账户")])],1)])},n=[],o=r("5530"),s=(r("99af"),r("d3b7"),r("25f0"),r("2f62")),i=function(){var e=this,t=e._self._c;return t("div",[t("a-form-model",{ref:"ruleForm",attrs:{model:e.formModel,rules:e.validRule}},[t("a-form-model-item",{attrs:{prop:"username"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入帐号 / admin"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"user"}})]},proxy:!0}]),model:{value:e.formModel.username,callback:function(t){e.$set(e.formModel,"username",t)},expression:"formModel.username"}})],1),t("a-form-model-item",{attrs:{prop:"password"}},[t("a-input-password",{attrs:{size:"large",autocomplete:"false",placeholder:"请输入密码 / admin"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"lock"}})]},proxy:!0}]),model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1),e.isPictureCode?t("a-row",{attrs:{gutter:0}},[t("a-col",{attrs:{span:16}},[t("a-form-model-item",{attrs:{prop:"captcha"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入验证码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{type:"safety-certificate"}})]},proxy:!0}],null,!1,3796725004),model:{value:e.formModel.captcha,callback:function(t){e.$set(e.formModel,"captcha",t)},expression:"formModel.captcha"}})],1)],1),t("a-col",{staticClass:"captcha",attrs:{span:8}},[e.requestCodeSuccess?t("img",{attrs:{src:e.randCodeImage},on:{click:e.handleChangeCheckCode}}):t("img",{attrs:{src:r("5fc7")},on:{click:e.handleChangeCheckCode}})])],1):e._e()],1),e.isPictureCode?e._e():t("Verify",{ref:"verify",attrs:{mode:"pop",imgSize:{width:"400px",height:"200px"},captchaType:e.captchaType},on:{success:e.verifySuccess}})],1)},c=[],l=(r("ac1f"),r("159b"),r("b64b"),r("a15b"),r("6821")),u=r.n(l),d=r("2af9"),f=r("0fea"),p=r("c9d9"),m={name:"LoginAccount",components:{Verify:d["C"]},data:function(){var e=this,t=function(t,r,a){var n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;n.test(r)?e.loginType=0:e.loginType=1,a()};return{loginType:0,requestCodeSuccess:!0,randCodeImage:"",formModel:{username:"admin",password:"admin",captcha:"admin"},validRule:{username:[{required:!0,message:"请输入帐号"},{validator:t}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},created:function(){this.handleChangeCheckCode()},computed:{captchaType:function(){var e=0,t=100,r=Math.floor(Math.random()*(t-e))+e,a=p["a"].clickWord;return r%3===0?a=p["a"].blockPuzzle:r%3===1&&(a=p["a"].pictureCode),this.$config.captchaType||a},isPictureCode:function(){return this.captchaType===p["a"].pictureCode}},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["Login"])),{},{handleChangeCheckCode:function(){var e=this;this.currdatetime=(new Date).getTime();var t="https://api.boot.jeecg.com/sys/randomImage/".concat(this.currdatetime);Object(f["a"])(t).then((function(t){t.success?(e.randCodeImage=t.result,e.requestCodeSuccess=!0):(e.$message.error(t.message),e.requestCodeSuccess=!1)})).catch((function(){e.requestCodeSuccess=!1}))},handleLogin:function(){var e=this;this.$refs.ruleForm.validate((function(t,r){e.alertMsg(r),t?e.isPictureCode?e.handleSubmit():e.$refs.verify.show():e.$emit("validFail")}))},alertMsg:function(e){var t=[];Object.keys(e).forEach((function(r){return t.push(e[r][0].message)})),t.length&&this.$message.error(t.join("；"))},handleSubmit:function(){var e=this,t=this.formModel,r=this.Login,a=Object(o["a"])({},t);a.password=u()(t.password),r(a).then((function(t){return e.$emit("success",t)})).catch((function(t){return e.$emit("fail",t)}))},verifySuccess:function(e){this.formModel.code=e.captchaVerification,this.handleSubmit()}})},h=m,g=r("2877"),v=Object(g["a"])(h,i,c,!1,null,null,null),b=v.exports,A=function(){var e=this,t=e._self._c;return t("div",[t("a-form-model",{ref:"ruleForm",attrs:{model:e.formModel,rules:e.validRule}},[t("a-form-model-item",{attrs:{required:"",prop:"mobile"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入手机号码"},model:{value:e.formModel.mobile,callback:function(t){e.$set(e.formModel,"mobile",t)},expression:"formModel.mobile"}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:16}},[t("a-form-model-item",{attrs:{prop:"captcha"}},[t("a-input",{attrs:{size:"large",placeholder:"请输入验证码"},model:{value:e.formModel.captcha,callback:function(t){e.$set(e.formModel,"captcha",t)},expression:"formModel.captcha"}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"safety-certificate"},slot:"prefix"})],1)],1)],1),t("a-col",{attrs:{span:8}},[t("a-button",{attrs:{block:"",size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1)],1)],1)},y=[],w=(r("4d63"),r("7ded")),x={name:"LoginPhone",data:function(){return{formModel:{mobile:"",captcha:""},validRule:{mobile:[{required:!0,message:"请输入手机号码",trigger:"change"},{validator:this.validateMobile}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},state:{time:60,smsSendBtn:!1}}},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["Login"])),{},{validateMobile:function(e,t,r){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?r():r(new Error("手机号码格式不正确"))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.state,a=this.formModel;this.$refs.ruleForm.validateField(["mobile"],(function(e){if(e)t.$message.error(e);else{r.smsSendBtn=!0;var n=window.setInterval((function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(n))}),1e3),o=t.$message.loading("验证码发送中..",0);Object(w["b"])({mobile:a.mobile}).then((function(e){setTimeout(o,0),t.$notification.success({message:"系统提示",description:"您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(o,1),clearInterval(n),r.time=60,r.smsSendBtn=!1,t.requestFailed(e)}))}}))},handleLogin:function(){var e=this,t=this.formModel,r=this.Login;this.$refs.ruleForm.validate((function(a,n){if(e.alertMsg(n),a){var s=Object(o["a"])({},t);r(s).then((function(t){return e.$emit("success",t)})).catch((function(t){return e.$emit("fail",t)}))}else e.$emit("validFail")}))},alertMsg:function(e){var t=[];Object.keys(e).forEach((function(r){return t.push(e[r][0].message)})),t.length&&this.$message.error(t.join("；"))}})},k=x,C=Object(g["a"])(k,A,y,!1,null,null,null),M=C.exports,S=r("ca00"),B={components:{LoginAccount:b,LoginPhone:M},data:function(){return{prefixCls:"".concat(this.$config.cssPrefix,"login"),customActiveKey:"tab1",loginBtn:!1,rememberMe:!1}},computed:Object(o["a"])({},Object(s["c"])(["userName"])),created:function(){},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["Logout"])),{},{handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(){if("tab1"===this.customActiveKey){var e=this.$config;e.captchaType===p["a"].pictureCode&&(this.loginBtn=!0),this.$refs.alogin.handleLogin()}else this.loginBtn=!0,this.$refs.plogin.handleLogin()},requestSuccess:function(e){var t=this;this.$router.push({name:this.$config.homeRouteName}),setTimeout((function(){t.$message.success("".concat(Object(S["c"])(),"，").concat(t.userName))}),1e3)},requestFailed:function(e){this.validateFail(),this.$notification.error({message:"系统提示",description:e.toString(),duration:4})},validateFail:function(){this.loginBtn=!1}})},O=B,j=Object(g["a"])(O,a,n,!1,null,null,null);t["default"]=j.exports}}]);