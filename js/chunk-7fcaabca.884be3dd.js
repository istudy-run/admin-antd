(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fcaabca"],{"0810":function(t,e,a){},"576d":function(t,e,a){},"773c":function(t,e,a){"use strict";a("576d")},"8fc8":function(t,e,a){"use strict";a("0810")},"90d78":function(t,e,a){"use strict";a("c9e6")},bf93:function(t,e,a){},c9e6:function(t,e,a){},cca0:function(t,e,a){"use strict";a("bf93")},f311:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("a-steps",{staticClass:"steps",attrs:{current:t.currentTab}},[e("a-step",{attrs:{title:"填写转账信息"}}),e("a-step",{attrs:{title:"确认转账信息"}}),e("a-step",{attrs:{title:"完成"}})],1),e("div",{staticClass:"content"},[0===t.currentTab?e("step1",{on:{nextStep:t.nextStep}}):t._e(),1===t.currentTab?e("step2",{on:{nextStep:t.nextStep,prevStep:t.prevStep}}):t._e(),2===t.currentTab?e("step3",{on:{prevStep:t.prevStep,finish:t.finish}}):t._e()],1)],1)},r=[],n=(a("b0c0"),function(){var t=this,e=t._self._c;return e("div",[e("a-form",t._b({ref:"form",staticStyle:{"max-width":"500px",margin:"40px auto 0"},attrs:{model:t.form,rules:t.rule}},"a-form",t.formItemLayout,!1),[e("a-form-item",{attrs:{label:"付款账户",prop:"paymentUser"}},[e("a-select",{attrs:{placeholder:"ant-design@alipay.com"},model:{value:t.form.paymentUser,callback:function(e){t.$set(t.form,"paymentUser",e)},expression:"form.paymentUser"}},[e("a-select-option",{attrs:{value:"1"}},[t._v("ant-design@alipay.com")])],1)],1),e("a-form-item",{attrs:{label:"收款账户",prop:"payType"}},[e("a-input-group",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{compact:!0}},[e("a-select",{staticStyle:{width:"100px"},attrs:{defaultValue:"alipay"}},[e("a-select-option",{attrs:{value:"alipay"}},[t._v("支付宝")]),e("a-select-option",{attrs:{value:"wexinpay"}},[t._v("微信")])],1),e("a-input",{style:{width:"calc(100% - 100px)"},model:{value:t.form.payType,callback:function(e){t.$set(t.form,"payType",e)},expression:"form.payType"}})],1)],1),e("a-form-item",{attrs:{label:"收款人姓名",prop:"name"}},[e("a-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("a-form-item",{attrs:{label:"转账金额",prop:"money"}},[e("a-input",{attrs:{prefix:"￥"},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}})],1),e("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[e("a-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("下一步")])],1)],1),e("a-divider"),t._m(0)],1)}),o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"step-form-style-desc"},[e("h3",[t._v("说明")]),e("h4",[t._v("转账到支付宝账户")]),e("p",[t._v(" 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ")]),e("h4",[t._v("转账到银行卡")]),e("p",[t._v(" 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ")])])}],i={name:"Step1",data:function(){return{form:{paymentUser:void 0,payType:"test@example.com",name:"Admin",money:5e3},rule:{paymentUser:[{required:!0,message:"付款账户必须填写"}],payType:[{required:!0,message:"收款账户必须填写"}],name:[{required:!0,message:"收款人名称必须核对"}],money:[{required:!0,message:"转账金额必须填写"}]},formItemLayout:{labelCol:{lg:{span:5},sm:{span:5}},wrapperCol:{lg:{span:19},sm:{span:19}}}}},methods:{nextStep:function(){var t=this;this.$refs.form.validate((function(e){e&&t.$emit("nextStep")}))}}},l=i,p=(a("cca0"),a("2877")),c=Object(p["a"])(l,n,o,!1,null,"a7314a36",null),m=c.exports,u=function(){var t=this,e=t._self._c;return e("div",[e("a-form",t._b({ref:"form",staticStyle:{"max-width":"500px",margin:"40px auto 0"},attrs:{model:t.form,rules:t.rule}},"a-form",t.formItemLayout,!1),[e("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{closable:!0,message:"确认转账后，资金将直接打入对方账户，无法退回。"}}),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"付款账户"}},[t._v(" ant-design@alipay.com ")]),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款账户"}},[t._v(" test@example.com ")]),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款人姓名"}},[t._v(" Alex ")]),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"转账金额"}},[t._v(" ￥ 5,000.00 ")]),e("a-divider"),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"支付密码"}},[e("a-input",{staticStyle:{width:"80%"},attrs:{type:"password"},model:{value:t.form.paymentPassword,callback:function(e){t.$set(t.form,"paymentPassword",e)},expression:"form.paymentPassword"}})],1),e("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[e("a-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.nextStep}},[t._v("提交")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prevStep}},[t._v("上一步")])],1)],1)],1)},f=[],d={name:"Step2",data:function(){return{form:{paymentPassword:"123456"},rule:{paymentPassword:[{required:!0,message:"请输入支付密码"}]},formItemLayout:{labelCol:{lg:{span:5},sm:{span:5}},wrapperCol:{lg:{span:19},sm:{span:19}}},loading:!1,timer:0}},methods:{nextStep:function(){var t=this;this.loading=!0,this.$refs.form.validate((function(e){e?t.timer=setTimeout((function(){t.loading=!1,t.$emit("nextStep")}),1500):t.loading=!1}))},prevStep:function(){this.$emit("prevStep")}},beforeDestroy:function(){clearTimeout(this.timer)}},y=d,v=(a("8fc8"),Object(p["a"])(y,u,f,!1,null,"4b20f619",null)),x=v.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("a-result",{staticStyle:{"max-width":"560px",margin:"0 auto"},attrs:{status:"success",title:"操作成功","sub-title":"预计两小时内到账"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("a-icon",{attrs:{type:"check-circle"}})]},proxy:!0},{key:"extra",fn:function(){return[e("a-button",{attrs:{type:"primary"},on:{click:t.finish}},[t._v("再转一笔")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.toOrderList}},[t._v("查看账单")])]},proxy:!0}])},[e("div",{staticClass:"information"},[e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[t._v("付款账户：")]),e("a-col",{attrs:{sm:16,xs:24}},[t._v("ant-design@alipay.com")])],1),e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[t._v("收款账户：")]),e("a-col",{attrs:{sm:16,xs:24}},[t._v("test@example.com")])],1),e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[t._v("收款人姓名：")]),e("a-col",{attrs:{sm:16,xs:24}},[t._v("辉夜")])],1),e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[t._v("转账金额：")]),e("a-col",{attrs:{sm:16,xs:24}},[e("span",{staticClass:"money"},[t._v("500")]),t._v(" 元")])],1)],1)])],1)},h=[],_={name:"Step3",data:function(){return{loading:!1}},methods:{finish:function(){this.$emit("finish")},toOrderList:function(){this.$router.push("/list/table-list")}}},S=_,g=(a("773c"),Object(p["a"])(S,b,h,!1,null,"65861905",null)),w=g.exports,T={name:"StepForm",components:{Step1:m,Step2:x,Step3:w},data:function(){return{pageMeta:{description:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"},currentTab:0,form:null}},methods:{nextStep:function(){this.currentTab<2&&(this.currentTab+=1)},prevStep:function(){this.currentTab>0&&(this.currentTab-=1)},finish:function(){this.currentTab=0}}},k=T,C=(a("90d78"),Object(p["a"])(k,s,r,!1,null,"a96a26ba",null));e["default"]=C.exports}}]);