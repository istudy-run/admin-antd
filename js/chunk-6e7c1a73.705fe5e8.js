(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e7c1a73"],{"0d2d":function(o,a,t){"use strict";t.r(a);var e=function(){var o=this,a=o._self._c;return a("div",[a("Card",{attrs:{"dis-hover":!0,bordered:!1}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("Button",{attrs:{type:"primary"},on:{click:o.showModal}},[o._v("显示可拖动弹窗")]),a("br"),a("Button",{directives:[{name:"draggable",rawName:"v-draggable",value:o.buttonOptions,expression:"buttonOptions"}],staticClass:"draggable-btn"},[o._v("这个按钮也是可以拖动的")])],1),a("Col",{attrs:{span:"16"}},[a("div",{staticClass:"intro-con"},[o._v(' <Modal v-draggable="options" v-model="visible">标题</Modal> '),a("pre",{staticClass:"code-con"},[o._v("            options = {\n              trigger: '.ivu-modal-body',\n              body: '.ivu-modal'\n            }\n          ")])])])],1)],1),a("Modal",{directives:[{name:"draggable",rawName:"v-draggable",value:o.options,expression:"options"}],model:{value:o.modalVisible,callback:function(a){o.modalVisible=a},expression:"modalVisible"}},[o._v(" 拖动这里即可拖动整个弹窗 ")])],1)},i=[],n={name:"DraggableDemo",data:function(){return{modalVisible:!1,options:{trigger:".ivu-modal-body",body:".ivu-modal",recover:!0},buttonOptions:{trigger:".draggable-btn",body:".draggable-btn"}}},methods:{showModal:function(){this.modalVisible=!0}}},s=n,l=(t("be95"),t("2877")),r=Object(l["a"])(s,e,i,!1,null,null,null);a["default"]=r.exports},"447f":function(o,a,t){},be95:function(o,a,t){"use strict";t("447f")}}]);