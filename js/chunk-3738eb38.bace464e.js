(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3738eb38"],{"02b9":function(e,t,a){"use strict";a("ba63")},a137:function(e,t,a){"use strict";a.r(t);a("b0c0");var o=function(){var e=this,t=e._self._c;return t("div",[t("Card",{attrs:{shadow:"",title:"导入EXCEL"}},[t("Row",[t("Upload",{attrs:{action:"","before-upload":e.handleBeforeUpload,accept:".xls, .xlsx"}},[t("Button",{attrs:{icon:"ios-cloud-upload-outline",loading:e.uploadLoading},on:{click:e.handleUploadFile}},[e._v("上传文件")])],1)],1),t("Row",[null!==e.file?t("div",{staticClass:"ivu-upload-list-file"},[t("Icon",{attrs:{type:"ios-stats"}}),e._v(" "+e._s(e.file.name)+" "),t("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showRemoveFile,expression:"showRemoveFile"}],staticClass:"ivu-upload-list-remove",attrs:{type:"ios-close"},nativeOn:{click:function(t){return e.handleRemove()}}})],1):e._e()]),t("Row",[t("transition",{attrs:{name:"fade"}},[e.showProgress?t("Progress",{attrs:{percent:e.progressPercent,"stroke-width":2}},[100===e.progressPercent?t("div",[t("Icon",{attrs:{type:"ios-checkmark-circle"}}),t("span",[e._v("成功")])],1):e._e()]):e._e()],1)],1)],1),t("Row",{staticClass:"margin-top-10"},[t("Col",{attrs:{span:24}},[t("Table",{attrs:{columns:e.tableTitle,data:e.tableData,loading:e.tableLoading}})],1)],1)],1)},s=[],n=(a("d81d"),a("cd77")),i={name:"upload-excel",data:function(){return{uploadLoading:!1,progressPercent:0,showProgress:!1,showRemoveFile:!1,file:null,tableData:[],tableTitle:[],tableLoading:!1}},methods:{initUpload:function(){this.file=null,this.showProgress=!1,this.loadingProgress=0,this.tableData=[],this.tableTitle=[]},handleUploadFile:function(){this.initUpload()},handleRemove:function(){this.initUpload(),this.$Message.info("上传的文件已删除！")},handleBeforeUpload:function(e){var t=e.name.split(".").pop().toLocaleLowerCase();return"xlsx"===t||"xls"===t?(this.readFile(e),this.file=e):this.$Notice.warning({title:"文件类型错误",desc:"文件："+e.name+"不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。"}),!1},readFile:function(e){var t=this,a=new FileReader;a.readAsArrayBuffer(e),a.onloadstart=function(e){t.uploadLoading=!0,t.tableLoading=!0,t.showProgress=!0},a.onprogress=function(e){t.progressPercent=Math.round(e.loaded/e.total*100)},a.onerror=function(e){t.$Message.error("文件读取出错")},a.onload=function(e){t.$Message.info("文件读取成功");var a=e.target.result,o=n["a"].read(a,"array"),s=o.header,i=o.results,l=s.map((function(e){return{title:e,key:e}}));t.tableData=i,t.tableTitle=l,t.uploadLoading=!1,t.tableLoading=!1,t.showRemoveFile=!0}}},created:function(){},mounted:function(){}},l=i,r=(a("02b9"),a("2877")),d=Object(r["a"])(l,o,s,!1,null,null,null);t["default"]=d.exports},ba63:function(e,t,a){}}]);