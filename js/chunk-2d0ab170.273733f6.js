(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab170"],{1490:function(t,a,n){"use strict";n.r(a);n("a4d3"),n("e01a");var e=function(){var t=this,a=t._self._c;return a("a-card",{attrs:{bordered:!1}},[a("a-list",{attrs:{size:"large",rowKey:"id",loading:t.loading,itemLayout:"vertical",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(n){return[a("a-list-item",{key:n.id,scopedSlots:t._u([{key:"actions",fn:function(){return[a("span",[a("a-icon",{staticClass:"ant-mr-4",attrs:{type:"star"}}),t._v(t._s(n.star)+" ")],1),a("span",[a("a-icon",{staticClass:"ant-mr-4",attrs:{type:"like"}}),t._v(t._s(n.like)+" ")],1),a("span",[a("a-icon",{staticClass:"ant-mr-4",attrs:{type:"message"}}),t._v(t._s(n.message)+" ")],1)]},proxy:!0}],null,!0)},[a("a-list-item-meta",{scopedSlots:t._u([{key:"title",fn:function(){return[a("a",{attrs:{href:"#"}},[t._v(t._s(n.title))])]},proxy:!0},{key:"description",fn:function(){return[a("a-tag",[t._v("Ant Design")]),a("a-tag",[t._v("设计语言")]),a("a-tag",[t._v("蚂蚁金服")])]},proxy:!0}],null,!0)}),a("div",[t._v(t._s(n.description))]),a("div",{staticClass:"ant-mt-16 ant-flex-align"},[a("a-avatar",{attrs:{src:n.avatar,size:"small"}}),a("div",{staticClass:"ant-pl-8"},[a("a",{attrs:{href:n.href}},[t._v(t._s(n.owner))]),t._v(" 发表在 "),a("a",{attrs:{href:n.href}},[t._v(t._s(n.href))])]),a("span",{staticClass:"ant-ml-16"},[t._v(t._s(t._f("formatDate")(n.updatedAt)))])],1)],1)]}},{key:"footer",fn:function(){return[t.data.length?a("div",{staticClass:"ant-text-center ant-mt-16"},[a("a-button",{attrs:{loading:t.loadingMore},on:{click:t.loadMore}},[t._v("加载更多")])],1):t._e()]},proxy:!0}])})],1)},s=[],i=n("5530"),r=(n("d3b7"),n("d81d"),n("99af"),{data:function(){return{loading:!0,loadingMore:!1,data:[]}},mounted:function(){this.getList()},methods:{handleChange:function(t){},getList:function(){var t=this;this.$http.get("/list/article").then((function(a){t.data=a.result,console.log("data:",t.data),t.loading=!1}))},loadMore:function(){var t=this;this.loadingMore=!0,this.$http.get("/list/article").then((function(a){t.data=t.data.concat(a.result).map((function(t,a){return Object(i["a"])(Object(i["a"])({},t),{},{id:a+1})}))})).finally((function(){t.loadingMore=!1}))}}}),o=r,l=n("2877"),c=Object(l["a"])(o,e,s,!1,null,null,null);a["default"]=c.exports}}]);