(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac20a26a"],{"83ab0":function(a,c,n){"use strict";n.r(c);var t=function(){var a=this,c=a._self._c;return c("div",[c("a-card",{attrs:{bordered:!1}},[c("code",[a._v(a._s(a.$config.titleSuffix))]),a._v(" 会自动将你程序中的错误收集起来，你可以将错误日志发给后端保存起来。 在开发环境下，你程序中的错误都会被收集起来，这样不利于排查错误，可以将"),c("code",[a._v("./src/config/index.js")]),a._v("的"),c("code",[a._v("loggingSwitch")]),a._v("设为false。 如果只是想收集错误日志，不希望登录用户看到错误日志，可以关闭查看日志的入口，只需将"),c("code",[a._v("./src/config/index.js")]),a._v("的"),c("code",[a._v("alarmLogEntry")]),a._v("设为false。 ")]),c("a-card",{staticStyle:{"margin-top":"20px"},attrs:{bordered:!1}},[c("a-row",[c("a-col",{attrs:{span:"8"}},[c("a-button",{on:{click:a.handleClick1}},[a._v("测试xxx is not defined 错误")]),c("a-button",{staticStyle:{"margin-top":"10px"},on:{click:a.handleClick2}},[a._v("测试read properties of undefined 错误")]),c("a-button",{staticStyle:{"margin-top":"10px"},on:{click:a.handleAxiosClick}},[a._v("测试触发axios接口请求错误")])],1),c("a-col",{attrs:{span:"16"}},[a._v(" axios接口请求是请求easy-mock的一个不存在接口，所以服务端会报404错误，错误收集机制会收集这个错误，测试的时候有一定网络延迟，所以点击按钮之后稍等一会才会收集到错误。 ")])],1)],1)],1)},o=[],i=n("8916"),e={name:"CaptureLog",methods:{handleClick1:function(){capture.admin},handleClick2:function(){var a=a.account},handleAxiosClick:function(){Object(i["a"])()}}},s=e,r=(n("b539"),n("2877")),d=Object(r["a"])(s,t,o,!1,null,"7741cd91",null);c["default"]=d.exports},b539:function(a,c,n){"use strict";n("c55f")},c55f:function(a,c,n){}}]);