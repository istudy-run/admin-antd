(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b748a50"],{"61a7":function(e,t,a){},a85d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-row",{attrs:{gutter:24,type:"flex"}},[t("a-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:10}},[t("a-card",{directives:[{name:"height",rawName:"v-height",value:"100%",expression:"'100%'"}],attrs:{bordered:!1},scopedSlots:e._u([{key:"title",fn:function(){return[t("a-space",[t("a-dropdown",{scopedSlots:e._u([{key:"overlay",fn:function(){return[t("a-menu",{on:{click:function(t){return e.handleClickMenu(t,e.selectedMenu)}}},[t("a-menu-item",{key:"1"},[e._v("添加菜单")]),t("a-menu-item",{key:"2",attrs:{disabled:!e.selectedMenu}},[e._v("添加子菜单")])],1)]},proxy:!0}])},[t("a-button",{attrs:{type:"primary",ghost:""}},[e._v("添加菜单"),t("a-icon",{attrs:{type:"down"}})],1)],1),t("a-button",{attrs:{type:"primary",ghost:"",icon:"align-left"},on:{click:e.collapseOrExpand}},[e._v("全部"+e._s(e.collapse?"收起":"展开")+" ")]),t("a-button",{attrs:{type:"danger",ghost:"",icon:"delete"},on:{click:e.deleteMenus}},[e._v("批量删除")])],1)]},proxy:!0}])},[t("div",{staticClass:"ant-p-8"},[t("a-input-search",{attrs:{placeholder:"输入菜单名称搜索"}})],1),t("Tree",{attrs:{treeData:e.treeData,checkable:!0,autoExpandParent:!1,expandedKeys:e.expandedKeys},on:{"update:expandedKeys":function(t){e.expandedKeys=t},"update:expanded-keys":function(t){e.expandedKeys=t},select:e.handleSelectMenu,check:e.handleCheckedMenu,expand:e.handleExpandMenu},scopedSlots:e._u([{key:"title",fn:function(a){var r=a.key,o=a.title;return[t("a-dropdown",{attrs:{trigger:["contextmenu"]},scopedSlots:e._u([{key:"overlay",fn:function(){return[t("a-menu",{on:{click:function(t){var a=t.key;return e.handleContextMenu(r,a)}}},[t("a-menu-item",{key:"1"},[e._v("添加菜单")]),t("a-menu-item",{key:"2"},[e._v("添加子菜单")]),t("a-menu-divider"),t("a-menu-item",{directives:[{name:"color",rawName:"v-color",value:"#ed4014",expression:"'#ed4014'"}],key:"3"},[e._v("删除")])],1)]},proxy:!0}],null,!0)},[t("span",[e._v(e._s(o))])])]}}])})],1)],1),t("a-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:14}},[t("a-card",{directives:[{name:"height",rawName:"v-height",value:"100%",expression:"'100%'"}],attrs:{bordered:!1},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"ant-menu-head"},[t("a-avatar",{staticStyle:{color:"#1890ff",background:"#e6f7ff"},attrs:{size:"small",icon:"appstore"}}),t("span",{staticClass:"ant-pl-8"},[e._v("编辑菜单"+e._s(e.selectedMenu?"："+e.selectedMenu.title:""))])],1)]},proxy:!0}])},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.selectedMenu,expression:"!selectedMenu"}]},[t("Empty",{attrs:{image:e.simpleImage,description:"请选择一项菜单编辑"}})],1),e.selectedMenu?t("a-form-model",e._b({ref:"form",attrs:{model:e.editForm,rules:e.editRule}},"a-form-model",e.formItemLayout,!1),[t("a-form-model-item",{attrs:{label:"菜单类型"}},[t("a-radio-group",{attrs:{"default-value":"0",size:"small"}},[t("XRadio",{attrs:{border:"",value:"0"}},[e._v("目录")]),t("XRadio",{attrs:{border:"",value:"1"}},[e._v("菜单")]),t("XRadio",{attrs:{border:"",value:"2"}},[e._v("按钮")])],1)],1),t("a-form-model-item",{attrs:{label:"菜单名称"}},[t("a-input",{attrs:{placeholder:"请输入标题，必填"},model:{value:e.editForm.title,callback:function(t){e.$set(e.editForm,"title",t)},expression:"editForm.title"}})],1),t("a-form-model-item",{attrs:{label:"二级标题"}},[t("a-input",{attrs:{placeholder:"请输入副标题"},model:{value:e.editForm.subtitle,callback:function(t){e.$set(e.editForm,"subtitle",t)},expression:"editForm.subtitle"}})],1),t("a-form-model-item",{attrs:{label:"菜单路径"}},[t("a-input",{attrs:{placeholder:"请输入路径，必填"},model:{value:e.editForm.path,callback:function(t){e.$set(e.editForm,"path",t)},expression:"editForm.path"}})],1),t("a-form-model-item",{attrs:{label:"打开方式"}},[t("a-radio-group",{attrs:{size:"small"},model:{value:e.editForm.openWay,callback:function(t){e.$set(e.editForm,"openWay",t)},expression:"editForm.openWay"}},[t("XRadio",{attrs:{border:"",value:"0"}},[e._v("组件")]),t("XRadio",{attrs:{border:"",value:"1"}},[e._v("内链")]),t("XRadio",{attrs:{border:"",value:"2"}},[e._v("外链")])],1)],1),t("a-form-model-item",{scopedSlots:e._u([{key:"label",fn:function(){return[t("span",[t("a-tooltip",{attrs:{title:"菜单折叠时是否显示分割线",placement:"top"}},[t("a-icon",{attrs:{type:"question-circle"}})],1),e._v(" 分割线 ")],1)]},proxy:!0}],null,!1,2095379247)},[t("a-switch",{attrs:{checked:"1"===e.editForm.divider,checkedChildren:"是",unCheckedChildren:"否"},on:{change:function(t){return e.editForm.divider=t?"1":"0"}}})],1),t("a-form-model-item",{attrs:{label:"菜单图标"}},[t("a-input",{attrs:{placeholder:"请输入标题，必填"},model:{value:e.editForm.icon,callback:function(t){e.$set(e.editForm,"icon",t)},expression:"editForm.icon"}})],1),t("a-form-model-item",{attrs:{label:"菜单权限"}},[t("a-input",{attrs:{placeholder:"权限，逗号分隔"},model:{value:e.editForm.auth,callback:function(t){e.$set(e.editForm,"auth",t)},expression:"editForm.auth"}})],1),t("a-form-model-item",{attrs:{"wrapper-col":e.buttonWrapper}},[t("a-space",{attrs:{size:16}},[t("a-button",{attrs:{type:"primary",icon:"save"},on:{click:e.resetMenu}},[e._v("保存")]),t("a-button",{attrs:{icon:"reload"},on:{click:e.resetMenu}},[e._v("重置")])],1)],1)],1):e._e()],1)],1),t("a-drawer",{attrs:{width:360,visible:e.drawer.show,title:e.drawer.title,bodyStyle:e.drawer.style},on:{close:function(){return e.drawer.show=!1}}},[t("a-form-model",{ref:"form",attrs:{model:e.addForm,rules:e.addRule}},[t("a-form-model-item",{attrs:{label:"菜单类型"}},[t("a-radio-group",{attrs:{"default-value":"0",size:"small"}},[t("XRadio",{attrs:{border:"",value:"0"}},[e._v("目录")]),t("XRadio",{attrs:{border:"",value:"1"}},[e._v("菜单")]),t("XRadio",{attrs:{border:"",value:"2"}},[e._v("按钮")])],1)],1),t("a-form-model-item",{attrs:{label:"菜单名称"}},[t("a-input",{attrs:{placeholder:"请输入标题，必填"},model:{value:e.addForm.title,callback:function(t){e.$set(e.addForm,"title",t)},expression:"addForm.title"}})],1),t("a-form-model-item",{attrs:{label:"二级标题"}},[t("a-input",{attrs:{placeholder:"请输入副标题"},model:{value:e.addForm.subtitle,callback:function(t){e.$set(e.addForm,"subtitle",t)},expression:"addForm.subtitle"}})],1),t("a-form-model-item",{attrs:{label:"菜单路径"}},[t("a-input",{attrs:{placeholder:"请输入路径，必填"},model:{value:e.addForm.path,callback:function(t){e.$set(e.addForm,"path",t)},expression:"addForm.path"}})],1),t("a-form-model-item",{attrs:{label:"打开方式"}},[t("a-radio-group",{attrs:{size:"small"},model:{value:e.addForm.openWay,callback:function(t){e.$set(e.addForm,"openWay",t)},expression:"addForm.openWay"}},[t("XRadio",{attrs:{border:"",value:"0"}},[e._v("组件")]),t("XRadio",{attrs:{border:"",value:"1"}},[e._v("内链")]),t("XRadio",{attrs:{border:"",value:"2"}},[e._v("外链")])],1)],1),t("a-form-model-item",{scopedSlots:e._u([{key:"label",fn:function(){return[t("span",[t("a-tooltip",{attrs:{title:"菜单折叠时是否显示分割线",placement:"top"}},[t("a-icon",{attrs:{type:"question-circle"}})],1),e._v(" 分割线 ")],1)]},proxy:!0}])},[t("a-switch",{attrs:{checked:"1"===e.addForm.divider,checkedChildren:"是",unCheckedChildren:"否"},on:{change:function(t){return e.addForm.divider=t?"1":"0"}}})],1),t("a-form-model-item",{attrs:{label:"菜单图标"}},[t("a-input",{attrs:{placeholder:"请输入标题，必填"},model:{value:e.addForm.icon,callback:function(t){e.$set(e.addForm,"icon",t)},expression:"addForm.icon"}})],1),t("a-form-model-item",{attrs:{label:"菜单权限"}},[t("a-input",{attrs:{placeholder:"权限，逗号分隔"},model:{value:e.addForm.auth,callback:function(t){e.$set(e.addForm,"auth",t)},expression:"addForm.auth"}})],1),t("a-form-model-item",{attrs:{label:"隐藏侧边栏"}},[t("a-switch",{attrs:{checkedChildren:"是",unCheckedChildren:"否",checked:"1"===e.addForm.hideSiderBar},on:{change:function(t){return e.addForm.hideSiderBar=t?"1":"0"}}})],1)],1),t("div",{staticClass:"menu-drawer-footer"},[t("a-button",{attrs:{type:"primary"}},[e._v("提交")])],1)],1)],1)},o=[],n=a("2909"),i=a("5530"),d=a("b85c"),l=(a("06f4"),a("fc25")),s=(a("c119"),a("d865")),c=(a("d3b7"),a("159b"),a("7db0"),a("d81d"),a("4de4"),a("235e")),u=[],m=function e(t){return t.forEach((function(t){if(!u.some((function(e){return e.key===t.key}))){var a={key:t.path,title:t.title,path:t.path,openWay:"0",divider:"0",icon:t.icon,children:t.children};u.push(a)}t.children.length&&e(t.children)})),u},p={name:"Menu",components:{Tree:s["a"],Empty:l["a"]},data:function(){return{addForm:{title:"",subtitle:"",path:"",openWay:"0",divider:"0",icon:"",auth:"",hideSiderBar:"0"},addRule:{},editForm:{title:"",subtitle:"",path:"",openWay:"0",divider:"0",icon:"",auth:"",hideSiderBar:"0"},editRule:{},treeData:[],collapse:!1,contextData:void 0,expandedKeys:[],checkedMenus:[],selectedMenu:void 0,formItemLayout:{labelCol:{span:4},wrapperCol:{span:20}},formItemModal:{labelCol:{xs:24,sm:4,md:6},wrapperCol:{xs:24,sm:20,md:18}},buttonWrapper:{offset:4},simpleImage:l["a"].PRESENTED_IMAGE_SIMPLE,drawer:{show:!1,title:"",style:{height:"calc(100% - 55px)",overflow:"auto",paddingBottom:"53px",position:"static"}}}},created:function(){this.getTreeData()},methods:{getTreeData:function(){var e=Object(c["a"])(this.$store.state.permission.addRouters);this.formatMenus(this.treeData,e),this.expandedKeys.push(this.treeData[0].key)},formatMenus:function(e,t){var a,r=Object(d["a"])(t);try{for(r.s();!(a=r.n()).done;){var o,n,i=a.value,l={key:i.path,path:i.path,title:null===i||void 0===i||null===(o=i.meta)||void 0===o?void 0:o.title,openWay:"0",divider:"0",icon:null===i||void 0===i||null===(n=i.meta)||void 0===n?void 0:n.icon,children:[]};i.children&&this.formatMenus(l.children,i.children),e.push(l)}}catch(s){r.e(s)}finally{r.f()}},handleSelectMenu:function(e,t){var a=e[0];this.selectedMenu=m(this.treeData).find((function(e){return e.key===a})),this.editForm=Object(i["a"])({},this.selectedMenu)},handleCheckedMenu:function(e,t){this.checkedMenus=Object(n["a"])(e)},handleExpandMenu:function(e){this.expandedKeys=e},handleContextMenu:function(e,t){this.contextData=m(this.treeData).find((function(t){return t.key===e})),"3"!==t?this.handleClickMenu({key:t},this.contextData):this.$message.error("删除了 "+this.contextData.title)},collapseOrExpand:function(){this.collapse=!this.collapse,this.collapse?this.expandedKeys=m(this.treeData).filter((function(e){return e.children.length})).map((function(e){return e.key})):this.expandedKeys=[]},deleteMenus:function(){var e=this;this.checkedMenus.length?this.$confirm({title:"删除确认",content:"您确认要删除选中菜单？",loading:!0,onOk:function(){return new Promise((function(t){setTimeout((function(){e.$message.error("抱歉，您没有该权限"),t()}),800)}))}}):this.$message.error("您没有勾选菜单")},resetMenu:function(){this.editForm=Object(i["a"])({},this.selectedMenu)},handleClickMenu:function(e,t){e.item;var a=e.key;e.keyPath;"1"===a?this.drawer=Object(i["a"])(Object(i["a"])({},this.drawer),{},{show:!0,title:"添加菜单"}):"2"===a&&(this.drawer=Object(i["a"])(Object(i["a"])({},this.drawer),{},{show:!0,title:"添加子菜单：".concat(t.title)}))}}},h=p,f=(a("df79"),a("2877")),v=Object(f["a"])(h,r,o,!1,null,"8f7f7322",null);t["default"]=v.exports},df79:function(e,t,a){"use strict";a("61a7")}}]);