(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01311e99"],{"1d2e":function(t,o,a){},"4bd7":function(t,o,a){"use strict";a.r(o);var c=function(){var t=this,o=t._self._c;return o("div",[o("a-card",{attrs:{bordered:!1}},[o("code",[t._v(t._s(t.$config.titleSuffix))]),t._v(" 会自动将你程序中的错误收集起来，你可以将错误日志发给后端保存起来。 在开发环境下，你程序中的错误都会被收集起来，这样不利于排查错误，可以将"),o("code",[t._v("src/config/index.js")]),t._v("的"),o("code",[t._v("errorStoreLog")]),t._v("设为false。 如果只是想收集错误日志，不希望登录用户看到错误日志，可以关闭查看日志的入口，只需将"),o("code",[t._v("src/config/index.js")]),t._v("的"),o("code",[t._v("alarmLogEntry")]),t._v("设为false。 ")]),o("a-card",{staticStyle:{"margin-top":"20px"},attrs:{bordered:!1}},[o("a-row",{attrs:{gutter:16}},[o("a-col",{attrs:{span:6}},[o("a-button",{attrs:{block:""},on:{click:t.handleClick1}},[t._v("测试xxx is not defined 错误")]),o("a-button",{staticStyle:{"margin-top":"10px"},attrs:{block:""},on:{click:t.handleClick2}},[t._v("测试read properties of undefined 错误")]),o("a-button",{staticStyle:{"margin-top":"10px"},attrs:{block:""},on:{click:t.handleAxiosClick}},[t._v("测试触发axios接口请求错误")])],1),o("a-col",{attrs:{span:18}},[t._v(" axios接口请求是请求easy-mock的一个不存在接口，所以服务端会报404错误，错误收集机制会收集这个错误，测试的时候有一定网络延迟，所以点击按钮之后稍等一会才会收集到错误。 ")])],1)],1)],1)},n=[],e=a("8916"),i={name:"CaptureLog",methods:{handleClick1:function(){var t=capture.admin;console.log(t)},handleClick2:function(){var t=t.account;console.log(t)},handleAxiosClick:function(){Object(e["a"])()}}},r=i,s=(a("c6bd"),a("2877")),l=Object(s["a"])(r,c,n,!1,null,"8a4f24b2",null);o["default"]=l.exports},c6bd:function(t,o,a){"use strict";a("1d2e")}}]);