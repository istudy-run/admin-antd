(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3df6"],{"5f2a":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("a-card",{attrs:{bordered:!1}},[t("TableTool",{attrs:{"show-alert":!0,dataSource:e.tableData,xScroll:e.xScroll,"table-size":e.tableSize,selectRows:e.selectedRows,selectKeys:e.selectedRowKeys},on:{"update:xScroll":function(t){e.xScroll=t},"update:x-scroll":function(t){e.xScroll=t},"update:tableSize":function(t){e.tableSize=t},"update:table-size":function(t){e.tableSize=t},"update:selectRows":function(t){e.selectedRows=t},"update:select-rows":function(t){e.selectedRows=t},"update:selectKeys":function(t){e.selectedRowKeys=t},"update:select-keys":function(t){e.selectedRowKeys=t},refreshTable:e.getRoleList},scopedSlots:e._u([{key:"table",fn:function(){return[t("a-table",{attrs:{tableLayout:"fixed",rowKey:function(e){return e.configId},size:e.tableSize,scroll:e.xScroll,columns:e.columns,dataSource:e.tableData,pagination:e.pagination,loading:{spinning:e.loading,tip:"加载中..."},rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},scopedSlots:e._u([{key:"configType",fn:function(o,a){return[t("a-tag",{attrs:{color:"Y"===a.configType?"blue":"red"}},[e._v(e._s("Y"===a.configType?"是":"否"))])]}},{key:"action",fn:function(o,a){return[t("a",{on:{click:function(t){return e.viewConfig(a)}}},[t("a-icon",{attrs:{type:"eye"}}),t("span",{staticClass:"ant-ml-4"},[e._v("查看")])],1),t("a-divider",{attrs:{type:"vertical"}}),t("a",{on:{click:function(t){return e.editConfig(a)}}},[t("a-icon",{attrs:{type:"edit"}}),t("span",{staticClass:"ant-ml-4"},[e._v("编辑")])],1),t("a-divider",{attrs:{type:"vertical"}}),t("a",{directives:[{name:"color",rawName:"v-color",value:"red",expression:"'red'"}],on:{click:function(t){return e.deleteConfig(a)}}},[t("a-icon",{attrs:{type:"delete"}}),t("span",{staticClass:"ant-ml-4"},[e._v("删除")])],1)]}}])})]},proxy:!0}]),model:{value:e.columns,callback:function(t){e.columns=t},expression:"columns"}},[t("a-button",{attrs:{type:"primary",icon:"plus",ghost:""},on:{click:e.addConfig}},[e._v("添加参数")]),t("a-button",{attrs:{type:"danger",icon:"delete",ghost:""},on:{click:e.delConfigs}},[e._v("批量删除")]),t("a-button",{attrs:{type:"danger",icon:"reload",ghost:""},on:{click:e.refreshCache}},[e._v("刷新缓存")])],1),t("a-modal",{attrs:{visible:e.modal.show,width:720,title:e.modal.title,keyboard:!1,maskClosable:!1},on:{cancel:e.handleCancel},scopedSlots:e._u([{key:"footer",fn:function(){return[t("a-space",[t("a-button",{on:{click:e.handleCancel}},[e._v(e._s(e.modal.view?"关闭":"取消"))]),e.modal.view?e._e():t("a-button",{attrs:{type:"primary"},on:{click:e.handleOkModal}},[e._v("提交")])],1)]},proxy:!0}])},[t("a-form",e._b({ref:"form",attrs:{model:e.form,rules:e.rules}},"a-form",e.formItemLayout,!1),[t("a-row",{attrs:{gutter:12,type:"flex"}},[e.modal.view?t("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[t("a-form-item",{attrs:{label:"参数主键"}},[t("div",[e._v(e._s(e.form.configId))])])],1):e._e(),t("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[t("a-form-item",{attrs:{label:"参数名称",prop:e.modal.view?"":"configName"}},[e.modal.view?t("div",[e._v(e._s(e.form.configName))]):t("a-input",{attrs:{placeholder:"请填写参数名称"},model:{value:e.form.configName,callback:function(t){e.$set(e.form,"configName",t)},expression:"form.configName"}})],1)],1),t("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[t("a-form-item",{attrs:{label:"参数键名",prop:e.modal.view?"":"configKey"}},[e.modal.view?t("div",[e._v(e._s(e.form.configKey))]):t("a-input",{attrs:{placeholder:"请填写参数键名"},model:{value:e.form.configKey,callback:function(t){e.$set(e.form,"configKey",t)},expression:"form.configKey"}})],1)],1),t("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[t("a-form-item",{attrs:{label:"参数键值",prop:e.modal.view?"":"configValue"}},[e.modal.view?t("div",[e._v(e._s(e.form.configValue))]):t("a-input",{attrs:{placeholder:"请填写参数键值"},model:{value:e.form.configValue,callback:function(t){e.$set(e.form,"configValue",t)},expression:"form.configValue"}})],1)],1),t("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[t("a-form-item",{attrs:{label:"系统内置"}},[e.modal.view?t("div",[t("a-tag",{attrs:{color:"Y"===e.form.configType?"blue":"red"}},[e._v(e._s("Y"===e.form.configType?"是":"否"))])],1):t("a-radio-group",{model:{value:e.form.configType,callback:function(t){e.$set(e.form,"configType",t)},expression:"form.configType"}},[t("a-radio",{attrs:{value:"Y"}},[e._v("是")]),t("a-radio",{attrs:{value:"N"}},[e._v("否")])],1)],1)],1),e.modal.view?t("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[t("a-form-item",{attrs:{label:"创建时间"}},[t("div",[e._v(e._s(e.form.createTime))])])],1):e._e(),t("a-col",{attrs:{span:24}},[t("a-form-item",e._b({attrs:{label:"备注"}},"a-form-item",{labelCol:{span:3},wrapperCol:{span:21}},!1),[e.modal.view?t("div",[e._v(e._s(e.form.remark))]):t("a-textarea",{attrs:{rows:3,placeholder:"备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1)],1)],1)},i=[],n=o("5530"),r=(o("a15b"),o("d81d"),o("d3b7"),{name:"Config",data:function(){return{loading:!1,form:{configId:void 0,configName:void 0,configKey:void 0,configValue:void 0,configType:"Y",remark:void 0},rules:{configName:[{required:!0,message:"请填写参数名称",trigger:"blur"}],configKey:[{required:!0,message:"请填写参数键名",trigger:"blur"}],configValue:[{required:!0,message:"请填写参数键值",trigger:"blur"}]},formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},columns:[{title:"参数主键",dataIndex:"configId",align:"center",width:100},{title:"参数名称",dataIndex:"configName",width:300},{title:"参数键名",dataIndex:"configKey",width:240},{title:"参数键值",dataIndex:"configValue",width:140},{title:"系统内置",dataIndex:"configType",scopedSlots:{customRender:"configType"},align:"center",width:100},{title:"备注",dataIndex:"remark",ellipsis:!0},{title:"创建时间",dataIndex:"createTime",align:"center",width:160},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",fixed:"right",width:220}],xScroll:{x:!0},tableData:[],tableSize:"middle",pagination:{total:0,current:1,pageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(e){return"共".concat(e,"条")}},modal:{show:!1,view:!1,title:""},selectedRows:[],selectedRowKeys:[]}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;this.loading=!0,setTimeout((function(){e.tableData=[{createBy:"admin",createTime:"2022-08-15 16:58:36",updateBy:"",updateTime:null,remark:"蓝色 skin-blue、绿色 skin-green、紫色 skin-purple、红色 skin-red、黄色 skin-yellow",configId:"1",configName:"主框架页-默认皮肤样式名称",configKey:"sys.index.skinName",configValue:"skin-blue",configType:"Y"},{createBy:"admin",createTime:"2022-08-15 16:58:36",updateBy:"1",updateTime:"2022-10-26 16:58:24",remark:"初始化密码 123456",configId:"2",configName:"用户管理-账号初始密码",configKey:"sys.user.initPassword",configValue:"123456",configType:"Y"},{createBy:"admin",createTime:"2022-08-15 16:58:36",updateBy:"2",updateTime:"2022-09-21 15:12:58",remark:"深色主题theme-dark，浅色主题theme-light",configId:"3",configName:"主框架页-侧边栏主题",configKey:"sys.index.sideTheme",configValue:"theme-dark",configType:"Y"},{createBy:"admin",createTime:"2022-08-15 16:58:37",updateBy:"1",updateTime:"2022-10-27 11:16:18",remark:"是否开启验证码功能（true开启，false关闭）",configId:"4",configName:"账号自助-验证码开关",configKey:"sys.account.captchaEnabled",configValue:"true",configType:"N"},{createBy:"admin",createTime:"2022-08-15 16:58:37",updateBy:"",updateTime:null,remark:"是否开启注册用户功能（true开启，false关闭）",configId:"5",configName:"账号自助-是否开启用户注册功能",configKey:"sys.account.registerUser",configValue:"false",configType:"Y"},{createBy:"1",createTime:"2022-09-09 17:45:34",updateBy:"1",updateTime:"2022-11-07 18:58:47",remark:"验证码类型 1: 数学计算 2 字符验证 3 滑块验证 4 文字点选",configId:"6",configName:"验证码类型",configKey:"sys.account.captchaType",configValue:"3",configType:"Y"}],e.loading=!1}),500)},addConfig:function(){this.form={configType:"Y"},this.formString=JSON.stringify(this.form),this.modal={show:!0,view:!1,title:"添加参数"}},delConfigs:function(){var e=this,t=this.$createElement;this.selectedRows.length?this.$confirm({title:"删除确认",okType:"danger",content:t("span",["您确认要删除参数 ",t("strong",[this.selectedRows.map((function(e){return e.configName})).join("，")])," ？"]),onOk:function(){return new Promise((function(t){setTimeout((function(){e.$message.error("抱歉，您没有该权限"),t()}),800)}))}}):this.$message.error("您没有选择参数")},refreshCache:function(){this.$message.error("抱歉，您没有该权限")},viewConfig:function(e){this.form=Object(n["a"])({},e),this.modal={show:!0,view:!0,title:"查看参数"}},editConfig:function(e){this.form=Object(n["a"])({},e),this.formString=JSON.stringify(this.form),this.modal={show:!0,view:!1,title:"编辑参数"}},deleteConfig:function(e){var t=this,o=this.$createElement;this.$confirm({title:"删除确认",okType:"danger",content:o("span",["您确认要删除参数 ",o("strong",[e.configName])," ？"]),loading:!0,onOk:function(){return new Promise((function(e){setTimeout((function(){t.$message.error("抱歉，您没有该权限"),e()}),800)}))}})},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},handleOkModal:function(){var e=this;setTimeout((function(){e.modal.show=!1}),800)},handleCancel:function(){var e=this,t=JSON.stringify(this.form);t===this.formString||this.modal.view?(this.modal.show=!1,this.modal.view||this.$refs.form.resetFields()):this.$confirm({title:"关闭确认",content:"检测到有内容进行过修改，是否直接关闭？",onOk:function(){e.modal.show=!1},onCancel:function(){}})}}}),l=r,s=o("2877"),c=Object(s["a"])(l,a,i,!1,null,null,null);t["default"]=c.exports}}]);