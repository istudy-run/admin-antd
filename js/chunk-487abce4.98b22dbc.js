(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-487abce4"],{"5fea":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t._self._c;return n("Card",{attrs:{"dis-hover":!0,bordered:!1}},[n("Row",[n("Col",{attrs:{span:"8"}},[n("Input",{staticStyle:{width:"60%"},model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}},[n("Button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.clipOptions,expression:"clipOptions"}],attrs:{slot:"append"},slot:"append"},[t._v("点击复制")])],1)],1),n("Col",{attrs:{span:"16"}},[n("div",{staticClass:"intro-con"},[t._v(' <Input style="width: 60%" v-model="inputValue"> '),n("br"),t._v('    <Button slot="append" v-clipboard="clipOptions">点击复制</Button> '),n("br"),t._v(" </Input> "),n("pre",{staticClass:"code-con"},[t._v("            clipOptions: {\n              value: this.inputValue,\n              success: (e) => {\n                this.$Message.success('复制成功')\n              },\n              error: () => {\n                this.$Message.error('复制失败')\n              }\n            }\n          ")])])])],1)],1)},a=[],i={name:"ClipboardDemo",data:function(){return{inputValue:"Admin Labs"}},computed:{clipOptions:function(){var t=this;return{value:this.inputValue,success:function(n){t.$Message.success("复制成功："+n.text)},error:function(){t.$Message.error("复制失败")}}}}},o=i,u=(e("9ac5"),e("2877")),c=Object(u["a"])(o,s,a,!1,null,"0f185296",null);n["default"]=c.exports},"86d2":function(t,n,e){},"9ac5":function(t,n,e){"use strict";e("86d2")}}]);