(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d9b8"],{f7e6:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("TableTool",{attrs:{"show-alert":!0,dataSource:t.tableData,"table-size":t.tableSize,selectRows:t.selectedRows,selectKeys:t.selectedRowKeys},on:{"update:tableSize":function(e){t.tableSize=e},"update:table-size":function(e){t.tableSize=e},"update:selectRows":function(e){t.selectedRows=e},"update:select-rows":function(e){t.selectedRows=e},"update:selectKeys":function(e){t.selectedRowKeys=e},"update:select-keys":function(e){t.selectedRowKeys=e},refreshTable:t.getPostList},scopedSlots:t._u([{key:"table",fn:function(){return[e("a-table",{attrs:{tableLayout:"fixed",rowKey:function(t){return t.postId},size:t.tableSize,columns:t.columns,dataSource:t.tableData,pagination:t.pagination,loading:{spinning:t.loading,tip:"加载中..."},rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},scopedSlots:t._u([{key:"status",fn:function(o,a){return[e("a-tag",{attrs:{color:"1"===a.status?"blue":"red"}},[t._v(t._s("1"===a.status?"正常":"停用"))])]}},{key:"action",fn:function(o,a){return[e("a",{on:{click:function(e){return t.viewPost(a)}}},[e("a-icon",{attrs:{type:"eye"}}),e("span",{staticClass:"ant-ml-4"},[t._v("查看")])],1),e("a-divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(e){return t.editPost(a)}}},[e("a-icon",{attrs:{type:"edit"}}),e("span",{staticClass:"ant-ml-4"},[t._v("编辑")])],1),e("a-divider",{attrs:{type:"vertical"}}),e("a",{directives:[{name:"color",rawName:"v-color",value:"red",expression:"'red'"}],on:{click:function(e){return t.deletePost(a)}}},[e("a-icon",{attrs:{type:"delete"}}),e("span",{staticClass:"ant-ml-4"},[t._v("删除")])],1)]}}])})]},proxy:!0}]),model:{value:t.columns,callback:function(e){t.columns=e},expression:"columns"}},[e("a-button",{attrs:{type:"primary",icon:"plus",ghost:""},on:{click:t.addPost}},[t._v("添加岗位")]),e("a-button",{attrs:{type:"danger",icon:"delete",ghost:""},on:{click:t.delPosts}},[t._v("批量删除")])],1),e("a-modal",{attrs:{width:720,title:t.modal.title,keyboard:!1,maskClosable:!1},on:{cancel:t.handleCancel},scopedSlots:t._u([{key:"footer",fn:function(){return[e("a-space",[e("a-button",{on:{click:t.handleCancel}},[t._v(t._s(t.modal.view?"关闭":"取消"))]),t.modal.view?t._e():e("a-button",{attrs:{type:"primary"},on:{click:t.handleOkModal}},[t._v("提交")])],1)]},proxy:!0}]),model:{value:t.modal.show,callback:function(e){t.$set(t.modal,"show",e)},expression:"modal.show"}},[e("a-form-model",t._b({ref:"form",attrs:{model:t.form,rules:t.rules}},"a-form-model",t.formItemLayout,!1),[e("a-row",{attrs:{gutter:12,type:"flex"}},[t.modal.view?e("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[e("a-form-model-item",{attrs:{label:"岗位编号"}},[e("div",[t._v(t._s(t.form.postId))])])],1):t._e(),e("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[e("a-form-model-item",{attrs:{label:"岗位编码",prop:t.modal.view?"":"postCode"}},[t.modal.view?e("div",[t._v(t._s(t.form.postCode))]):e("a-input",{attrs:{placeholder:"岗位编码"},model:{value:t.form.postCode,callback:function(e){t.$set(t.form,"postCode",e)},expression:"form.postCode"}})],1)],1),e("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[e("a-form-model-item",{attrs:{label:"岗位名称",prop:t.modal.view?"":"postName"}},[t.modal.view?e("div",[t._v(t._s(t.form.postName))]):e("a-input",{attrs:{placeholder:"岗位名称"},model:{value:t.form.postName,callback:function(e){t.$set(t.form,"postName",e)},expression:"form.postName"}})],1)],1),e("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[e("a-form-model-item",{attrs:{label:"岗位排序",prop:t.modal.view?"":"postSort"}},[t.modal.view?e("div",[t._v(t._s(t.form.postSort))]):e("a-input-number",{directives:[{name:"width",rawName:"v-width",value:"100%",expression:"'100%'"}],attrs:{placeholder:"岗位排序"},model:{value:t.form.postSort,callback:function(e){t.$set(t.form,"postSort",e)},expression:"form.postSort"}})],1)],1),e("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[e("a-form-model-item",{attrs:{label:"状态"}},[t.modal.view?e("div",[e("a-tag",{attrs:{color:"1"===t.form.status?"blue":"red"}},[t._v(t._s("1"===t.form.status?"正常":"停用"))])],1):e("a-radio-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[e("a-radio",{attrs:{value:"1"}},[t._v("正常")]),e("a-radio",{attrs:{value:"0"}},[t._v("停用")])],1)],1)],1),t.modal.view?e("a-col",{attrs:{xl:12,lg:12,md:12,sm:24,xs:24}},[e("a-form-model-item",{attrs:{label:"创建时间"}},[e("div",[t._v(t._s(t.form.createTime))])])],1):t._e(),e("a-col",{attrs:{span:24}},[e("a-form-model-item",t._b({attrs:{label:"备注"}},"a-form-model-item",{labelCol:{span:3},wrapperCol:{span:21}},!1),[t.modal.view?e("div",[t._v(t._s(t.form.remark))]):e("a-textarea",{attrs:{rows:3,placeholder:"备注"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1)],1)],1)],1)],1)},s=[],r=(o("a15b"),o("d81d"),o("d3b7"),{name:"Post",data:function(){return{loading:!1,form:{postId:void 0,postCode:void 0,postName:void 0,postSort:void 0,status:"1",createTime:void 0,remark:void 0},rules:{postCode:[{required:!0,message:"请填写岗位编码",trigger:"blur"}],postName:[{required:!0,message:"请填写岗位名称",trigger:"blur"}],postSort:[{required:!0,message:"请填写岗位排序",trigger:"blur"}]},formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},columns:[{title:"岗位编号",dataIndex:"postId",align:"center",width:100},{title:"岗位编码",dataIndex:"postCode",align:"center",width:100},{title:"岗位名称",dataIndex:"postName",align:"center",width:120},{title:"岗位排序",dataIndex:"postSort",align:"center",width:100},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"},render:function(t){return"1"===t.status?"正常":"停用"},align:"center",width:100},{title:"创建时间",dataIndex:"createTime",align:"center",width:180},{title:"备注",dataIndex:"remark",align:"center"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",fixed:"right",width:220}],tableData:[],tableSize:"middle",pagination:{total:0,current:1,pageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(t){return"共".concat(t,"条")}},modal:{show:!1,view:!1,title:""},selectedRows:[],selectedRowKeys:[]}},created:function(){this.getPostList()},methods:{getPostList:function(){var t=this;this.loading=!0,setTimeout((function(){t.tableData=[{createBy:"admin",createTime:"2022-08-15 16:58:00",updateBy:null,updateTime:null,remark:"ceo",postId:"1",postCode:"ceo",postName:"董事长",postSort:"1",status:"1",flag:!1},{createBy:"admin",createTime:"2022-08-15 16:58:00",updateBy:null,updateTime:null,remark:"项目经理",postId:"2",postCode:"pd",postName:"项目经理",postSort:"2",status:"1",flag:!1},{createBy:"admin",createTime:"2022-08-15 16:58:00",updateBy:null,updateTime:null,remark:"",postId:"3",postCode:"hr",postName:"人力资源",postSort:"3",status:"1",flag:!1},{createBy:"admin",createTime:"2022-08-15 16:58:00",updateBy:null,updateTime:null,remark:"",postId:"4",postCode:"user",postName:"普通员工",postSort:"4",status:"1",flag:!1}],t.loading=!1}),500)},addPost:function(){this.form={status:"1"},this.modal={show:!0,view:!1,title:"添加岗位"}},delPosts:function(){var t=this,e=this.$createElement;this.selectedRows.length?this.$confirm({title:"删除确认",okType:"danger",content:e("span",["您确认要删除岗位 ",e("strong",[this.selectedRows.map((function(t){return t.postName})).join("，")])," ？"]),loading:!0,onOk:function(){return new Promise((function(e){setTimeout((function(){t.$message.error("抱歉，您没有该权限"),e()}),800)}))}}):this.$message.error("您没有选择岗位")},viewPost:function(t){this.form=t,this.modal={show:!0,view:!0,title:"查看岗位"}},editPost:function(t){this.form=t,this.modal={show:!0,view:!1,title:"编辑岗位"}},deletePost:function(t){var e=this,o=this.$createElement;this.$confirm({title:"删除确认",okType:"danger",content:o("span",["您确认要删除岗位 ",o("strong",[t.postName])," ？"]),loading:!0,onOk:function(){return new Promise((function(t){setTimeout((function(){e.$message.error("抱歉，您没有该权限"),t()}),800)}))}})},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},handleOkModal:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.modal.show=!1)}))},handleCancel:function(){this.modal.show=!1,this.modal.view||this.$refs.form.resetFields()}}}),l=r,n=o("2877"),i=Object(n["a"])(l,a,s,!1,null,null,null);e["default"]=i.exports}}]);