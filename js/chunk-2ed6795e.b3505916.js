(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ed6795e"],{"192b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1,bodyStyle:{padding:0}}},[e("div",{staticClass:"user-message"},[e("div",{staticClass:"user-message-menu"},[e("a-menu",{attrs:{mode:t.isMobile?"horizontal":"inline",selectedKeys:t.selectedKeys},on:{click:t.handleClickItem}},[e("a-menu-item",{key:"UserNotice"},[e("span",{staticClass:"ant-mr-16"},[t._v("系统通知")]),e("a-badge",{attrs:{count:5}})],1),e("a-menu-item",{key:"UserLetter"},[e("span",{staticClass:"ant-mr-16"},[t._v("用户私信")]),e("a-badge",{attrs:{count:3}})],1),e("a-menu-item",{key:"UserTodo"},[e("span",{staticClass:"ant-mr-16"},[t._v("待办事项")]),e("a-badge",{attrs:{count:4}})],1)],1)],1),e("div",{staticClass:"user-message-content"},[e("XTransition",{attrs:{enabled:t.routeAnimate.enabled,animate:t.routeAnimate.animate}},[e(t.component,{tag:"component"})],1)],1)])])},i=[],s=function(){var t=this,e=t._self._c;return e("TableTool",{attrs:{dataSource:t.tableData,"table-size":t.tableSize,selectRows:t.selectedRows,selectKeys:t.selectedRowKeys},on:{"update:tableSize":function(e){t.tableSize=e},"update:table-size":function(e){t.tableSize=e},"update:selectRows":function(e){t.selectedRows=e},"update:select-rows":function(e){t.selectedRows=e},"update:selectKeys":function(e){t.selectedRowKeys=e},"update:select-keys":function(e){t.selectedRowKeys=e}},scopedSlots:t._u([{key:"table",fn:function(){return[e("a-table",{attrs:{tableLayout:"fixed",rowKey:function(t){return t.id},columns:t.columns,size:t.tableSize,loading:{spinning:t.tableLoading,tip:"加载中..."},dataSource:t.tableData,pagination:t.pagination,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},scopedSlots:t._u([{key:"status",fn:function(n){return[e("span",{class:1===n.status?"ant-text":"ant-text-warning"},[t._v(" "+t._s(1===n.status?"已确认":"未确认")+" ")])]}},{key:"action",fn:function(){return[e("a",{staticClass:"ant-text-primary"},[t._v("确认")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{attrs:{title:"确定要删除此通知吗?",placement:"topRight"}},[e("a",{staticClass:"ant-text-error"},[t._v("删除")])])]},proxy:!0}])})]},proxy:!0}]),model:{value:t.columns,callback:function(e){t.columns=e},expression:"columns"}},[e("a-button",{attrs:{type:"primary"},on:{click:t.handleClick}},[t._v("批量确认")]),e("a-button",{attrs:{type:"danger"},on:{click:t.handleClick}},[t._v("删除通知")])],1)},l=[],o={name:"UserNotice",data:function(){var t=this;return{tableLoading:!1,selectedRowKeys:[],selectedRows:[],tableSize:"middle",columns:[{key:"index",width:48,align:"center",hideInSetting:!0,customRender:function(e,n,a){return t.tableIndex+a}},{title:"通知标题",dataIndex:"title",ellipsis:!0},{title:"通知时间",dataIndex:"time",ellipsis:!0,width:140,align:"center"},{title:"状态",key:"status",width:90,align:"center",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",width:120,align:"center",hideInSetting:!0,scopedSlots:{customRender:"action"}}],tableData:[{id:21,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:0},{id:22,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:0},{id:23,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:0},{id:24,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:0},{id:25,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:0},{id:26,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:1},{id:27,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:1},{id:28,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:1},{id:29,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:1},{id:30,title:"Admin Labs新版本发布，欢迎体验",time:"2023-08-20 11:35",status:1}],pagination:{total:0,current:1,pageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(t){return"共".concat(t,"条")}},currentPage:1,pageSize:10}},computed:{tableIndex:function(){return(this.pagination.current-1)*this.pagination.pageSize+1}},methods:{handleClick:function(){},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e}}},c=o,u=n("2877"),d=Object(u["a"])(c,s,l,!1,null,null,null),r=d.exports,m=function(){var t=this,e=t._self._c;return e("TableTool",{attrs:{dataSource:t.tableData,"table-size":t.tableSize,selectRows:t.selectedRows,selectKeys:t.selectedRowKeys},on:{"update:tableSize":function(e){t.tableSize=e},"update:table-size":function(e){t.tableSize=e},"update:selectRows":function(e){t.selectedRows=e},"update:select-rows":function(e){t.selectedRows=e},"update:selectKeys":function(e){t.selectedRowKeys=e},"update:select-keys":function(e){t.selectedRowKeys=e}},scopedSlots:t._u([{key:"table",fn:function(){return[e("a-table",{attrs:{tableLayout:"fixed",rowKey:function(t){return t.id},columns:t.columns,size:t.tableSize,loading:{spinning:t.tableLoading,tip:"加载中..."},dataSource:t.tableData,pagination:t.pagination,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},scopedSlots:t._u([{key:"status",fn:function(n){return[e("span",{class:1===n.status?"ant-text":"ant-text-warning"},[t._v(" "+t._s(1===n.status?"已读":"未读")+" ")])]}},{key:"action",fn:function(){return[e("a",{staticClass:"ant-text-primary"},[t._v("回复")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{attrs:{title:"确定要删除此私信吗？",placement:"topRight"}},[e("a",{staticClass:"ant-text-error"},[t._v("删除")])])]},proxy:!0}])})]},proxy:!0}]),model:{value:t.columns,callback:function(e){t.columns=e},expression:"columns"}},[e("a-button",{attrs:{type:"primary"},on:{click:t.handleClick}},[t._v("标记已读")]),e("a-button",{attrs:{type:"danger"},on:{click:t.handleClick}},[t._v("删除私信")])],1)},p=[],b={name:"UserNotice",data:function(){var t=this;return{tableLoading:!1,selectedRowKeys:[],selectedRows:[],tableSize:"middle",columns:[{key:"index",width:48,align:"center",hideInSetting:!0,customRender:function(e,n,a){return t.tableIndex+a}},{title:"私信内容",dataIndex:"title",ellipsis:!0},{title:"发送时间",dataIndex:"time",ellipsis:!0,width:140,align:"center"},{title:"状态",key:"status",width:90,align:"center",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",width:120,align:"center",hideInSetting:!0,scopedSlots:{customRender:"action"}}],tableData:[{id:11,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:0},{id:12,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:0},{id:13,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:0},{id:14,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:15,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:16,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:17,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:18,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:19,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1},{id:20,title:"Jasmine给你发来了一条私信",time:"2020-07-24 11:35",status:1}],pagination:{total:0,current:1,pageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(t){return"共".concat(t,"条")}},currentPage:1,pageSize:10}},computed:{tableIndex:function(){return(this.pagination.current-1)*this.pagination.pageSize+1}},methods:{handleClick:function(){},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e}}},g=b,y=Object(u["a"])(g,m,p,!1,null,null,null),h=y.exports,f=function(){var t=this,e=t._self._c;return e("TableTool",{attrs:{dataSource:t.tableData,"table-size":t.tableSize,selectRows:t.selectedRows,selectKeys:t.selectedRowKeys},on:{"update:tableSize":function(e){t.tableSize=e},"update:table-size":function(e){t.tableSize=e},"update:selectRows":function(e){t.selectedRows=e},"update:select-rows":function(e){t.selectedRows=e},"update:selectKeys":function(e){t.selectedRowKeys=e},"update:select-keys":function(e){t.selectedRowKeys=e}},scopedSlots:t._u([{key:"table",fn:function(){return[e("a-table",{attrs:{tableLayout:"fixed",rowKey:function(t){return t.id},columns:t.columns,size:t.tableSize,loading:{spinning:t.tableLoading,tip:"加载中..."},dataSource:t.tableData,pagination:t.pagination,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},scopedSlots:t._u([{key:"status",fn:function(n){return[e("span",{class:1===n.status?"ant-text":"ant-text-warning"},[t._v(" "+t._s(1===n.status?"已完成":"未完成")+" ")])]}},{key:"action",fn:function(){return[e("a",{staticClass:"ant-text-primary"},[t._v("完成")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{attrs:{title:"确定要删除此待办吗？",placement:"topRight"}},[e("a",{staticClass:"ant-text-error"},[t._v("删除")])])]},proxy:!0}])})]},proxy:!0}]),model:{value:t.columns,callback:function(e){t.columns=e},expression:"columns"}},[e("a-button",{attrs:{type:"primary"},on:{click:t.handleClick}},[t._v("批量完成")]),e("a-button",{attrs:{type:"danger"},on:{click:t.handleClick}},[t._v("删除待办")])],1)},w=[],S={name:"UserNotice",data:function(){var t=this;return{tableLoading:!1,selectedRowKeys:[],selectedRows:[],tableSize:"middle",columns:[{key:"index",width:48,align:"center",hideInSetting:!0,customRender:function(e,n,a){return t.tableIndex+a}},{title:"待办内容",dataIndex:"title",ellipsis:!0},{title:"结束时间",dataIndex:"time",ellipsis:!0,width:140,align:"center"},{title:"状态",key:"status",width:90,align:"center",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",width:120,align:"center",hideInSetting:!0,scopedSlots:{customRender:"action"}}],tableData:[{id:1,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:0},{id:2,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:0},{id:3,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:0},{id:4,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:0},{id:5,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:6,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:7,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:8,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:9,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1},{id:10,title:"你有两条任务待完成，不要忘了哦~",time:"2020-07-24 11:35",status:1}],pagination:{total:0,current:1,pageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(t){return"共".concat(t,"条")}},currentPage:1,pageSize:10}},computed:{tableIndex:function(){return(this.pagination.current-1)*this.pagination.pageSize+1}},methods:{handleClick:function(){},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e}}},R=S,k=Object(u["a"])(R,f,w,!1,null,null,null),x=k.exports,z=n("2af9"),v=n("ac0d"),C={name:"UserMessage",mixins:[v["b"]],components:{XTransition:z["G"],UserNotice:r,UserLetter:h,UserTodo:x},data:function(){return{component:"UserNotice",selectedKeys:["UserNotice"]}},computed:{routeAnimate:function(){return this.$store.state.app.routeAnimate}},methods:{handleClickItem:function(t){t.item;var e=t.key,n=t.keyPath;this.component=e,this.selectedKeys=n}}},_=C,K=(n("cd78"),Object(u["a"])(_,a,i,!1,null,null,null));e["default"]=K.exports},b012:function(t,e,n){},cd78:function(t,e,n){"use strict";n("b012")}}]);