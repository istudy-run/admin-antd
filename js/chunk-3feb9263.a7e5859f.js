(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3feb9263"],{"8f08":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("Row",{attrs:{gutter:10}},[a("Col",{attrs:{span:"6"}},[a("Card",{attrs:{shadow:""}},[a("Upload",{attrs:{action:"","before-upload":t.beforeUpload}},[a("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v("上传Csv文件")]),t._v("     点击上传Csv文件 ")],1),a("p",[t._v("util.js提供两个方法用来实现这个功能：")]),a("p",{staticClass:"update-table-intro"},[a("Icon",{staticStyle:{"margin-right":"10px"},attrs:{size:10,type:"md-heart"}}),a("span",{staticClass:"code-high-line"},[t._v("getArrayFromFile")]),t._v("：将Csv文件解析为二维数组")],1),a("p",{staticClass:"update-table-intro"},[a("Icon",{staticStyle:{"margin-right":"10px"},attrs:{size:10,type:"md-heart"}}),a("span",{staticClass:"code-high-line"},[t._v("getTableDataFromArray")]),t._v("：将二维数组转为表格数据，具体请看文档")],1)],1)],1),a("Col",{attrs:{span:"18"}},[a("Table",{attrs:{height:500,columns:t.columns,data:t.tableData}})],1)],1)},n=[],o=e("ca00"),r={name:"update_table",data:function(){return{columns:[],tableData:[]}},methods:{beforeUpload:function(t){var a=this;return Object(o["f"])(t).then((function(t){var e=Object(o["m"])(t),s=e.columns,n=e.tableData;a.columns=s,a.tableData=n})).catch((function(){a.$Notice.warning({title:"只能上传Csv文件",desc:"只能上传Csv文件，请重新上传"})})),!1}}},i=r,l=(e("e13f"),e("2877")),c=Object(l["a"])(i,s,n,!1,null,null,null);a["default"]=c.exports},"9f79":function(t,a,e){},e13f:function(t,a,e){"use strict";e("9f79")}}]);