(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c3fd074"],{"8028a":function(e,o,c){"use strict";c("caee")},"9fe8":function(e,o,c){"use strict";c.r(o);var d=function(){var e=this,o=e._self._c;return o("a-card",{attrs:{bordered:!1},scopedSlots:e._u([{key:"title",fn:function(){return[o("a-avatar",{staticStyle:{color:"#52c41a",background:"#f6ffed"},attrs:{size:"small",icon:"history"}}),o("span",{staticClass:"ant-pl-8"},[e._v("更新日志")])]},proxy:!0}])},[o("article",{staticClass:"version-doc"},[o("a-timeline",e._l(e.version,(function(c,d){return o("a-timeline-item",{key:"item-".concat(d),attrs:{color:c.color},scopedSlots:e._u([{key:"dot",fn:function(){return[o("a-icon",{attrs:{type:c.icon}})]},proxy:!0}],null,!0)},[o("span",[e._v(e._s(c.title))]),o("p",[o("code",[e._v(e._s(c.date))])]),o("ul",e._l(c.list,(function(c,d){return o("li",{key:"li-".concat(d),domProps:{innerHTML:e._s(c)}})})),0)])})),1)],1)])},t=[],i=[{title:"项目初始化",icon:"clock-circle",date:"2022-01-03",list:["基于<code>ant-design-vue-pro 2.0.3</code>初始化"]},{title:"Start Now ?",icon:"clock-circle",date:"2022-09-07",list:["疫情封控，做点什么呢 ?"]},{title:"ant-admin-vue@2.0.0",icon:"clock-circle",date:"2022-10-28",list:["项目更名为<code>ant-admin-vue</code>，版本为<code>2.0.0</code>","升级<code>package.json</code>基础依赖，升级<code>Ant Design Vue@1.7.8</code>版本 & 配置<code>less-loader</code>等","解决设置抽屉样式异常，浏览器滚动条美化，调整主题色、图标、sider宽度、header高度等","解决切换路由页面内容overflow出现浏览器滚动条导致页面抖动问题","登录背景更换、页面美化调整、增加验证码","ant design vue组件按需引入，组件样式使用less变量覆盖，移除重复定义less变量或多余的class",'多页签组件以及样式重写，增加"内容全屏/退出全屏"，userMenu增加"清空缓存"',"增加LimitTextarea组件、增加HeaderNotice与HeaderSearch组件，HeaderSearch在Mobile端呈现样式为弹出框","修复主题色在线预览，登录页面主题色不生效问题、首次访问系统主题色配置不编译生效问题","变量命名统一使用驼峰命名规范","升级Vue-Router版本，VueRouter@3.5.0+ New API [router.addRoute]","修复打包后报错 TypeError: le.addRoute is not a function","Form表单全部使用FormModel重构","更改select、dropMenu、popover默认渲染VNode节点，防止滚动定位问题","修复Mobile下HeaderSearch组件点击2次弹出Modal的问题","修复HeaderSearch组件在Mobile与PC切换时，因Modal挂载在Body上导致组件内document元素被删除导致无法通过v-if重新渲染","sideMenu组件新增@click事件，在Mobile下点击MenuItem调用关闭侧边栏","Mobile下是侧边卡Drawer渲染在当前dom里，避免在PC与mobile切换渲染出错","isMobile、isTopMenu等mixin由方法改为计算属性","Vuex变量重命名、优化PC与Mobile切换侧边栏默认展开状态","移动端禁止缩放；新增$log控制台日志打印","配置新增<code>固定侧栏区域</code>，<code>固定顶栏区域</code>，<code>置顶顶栏区域</code>，<code>固定多页签栏</code>，<code>顶部主题切换</code>等12项","其他样式微调，细节处理......"]},{title:"ant-admin-vue@2.0.1",icon:"clock-circle",date:"2022-11-06",list:["新增Drawer组件，Mobile端sideMenu、SettingDrawer均替换a-drawer，因a-drawer对移动端滑动支持不友好","topMenu下dark与light模式切换时顶部菜单高度变化的问题","topMenu下dark与light切换background变化不同步问题(mobile下优化遗留问题(header背景设为#fff)，theme拆分为sideTheme/headTheme后不会出现此问题)","......"]},{title:"ant-admin-vue@2.0.2",icon:"clock-circle",date:"2022-12-10",list:["user-dropdown-menu图标尺寸统一14px；trigger图标尺寸统一15px","list列表 拆分出search查询页面；工作台、PageView tabs 样式微调","移除DetailList/DescriptionList，使用官方Descriptions组件","移除自定义组件Result，使用官方Result组件","创建分支版本<code>view-admin</code>，<code>ViewUI 4.x</code> 替换 <code>ant design1.x</code>"]},{title:"view-admin@2.x",color:"red",icon:"clock-circle",date:"2023-02-20",list:["由于限制在<code>ant-design-vue-pro</code>圈子中找不到后续方向，<code>view-admin</code>分支暂停",'转向<code>ViewUI4.x</code>、<code>iview-admin@2.5.0</code>，项目为<code>iView Admin</code>，版本为<code>4.0.0</code> <a target="_blank" href="https://istudy-run.gitee.io/admin-labs">点击预览</a>']},{title:"Admin Labs @2.1.0",icon:"clock-circle",date:"2023-06-04",list:["升级<code>package.json</code>依赖版本、添加<code>Eslint</code>规范代码、<code>Prettier</code>格式化代码","目录结构调整，移除无用文件依赖，自定义组件样式抽离到<code>styles</code>统一管理","Layout重构<code>GlobalSider</code>、<code>GlobalHeader</code>、<code>GlobalContent</code>、<code>GlobalFooter</code>","导航模式增加<code>混合菜单导航</code>，顶栏风格增加<code>主色顶栏</code>、<code>顶栏区域宽度</code>","新增<code>Verify</code>验证码组件，包含滑块验证<code>VerifySlide</code>、文字验证<code>VerifyPoints</code>","新增<code>showProgressBar</code>显示进度条、<code>logoutConfirm</code> 退出确认、<code>前端日志</code>监控","<code>GlobalHeader</code>使用Flex布局重写，顶栏功能逻辑全部抽离为组件进行重构","多页签组件<code>TabsNav</code> 重构，新增卡片风格、边框设置；个人中心、账户设置页面重构","组件按需加载、$config、$console、自定义指令等使用<code>Vue.use()</code>方式统一注册管理","修复诸多bug，细节优化等..."]},{title:"Admin Labs @2.1.1",icon:"clock-circle",date:"2023-06-06",list:["左侧菜单折叠状态下选中样式更改为<code>border-right</code>与css伪类实现，视觉更为明显","侧栏Logo跟随顶栏主题变化；底部分割线由<code>border-bottom</code>更改为<code>box-shadow</code>，减轻与Header的高度视觉差","修复色弱模式下内容区域高度塌陷导致<code>footer</code>不可见的问题"]}],a=i.reverse(),r={name:"UpdateLog",data:function(){return{version:a}}},n=r,l=(c("8028a"),c("2877")),s=Object(l["a"])(n,d,t,!1,null,null,null);o["default"]=s.exports},caee:function(e,o,c){}}]);