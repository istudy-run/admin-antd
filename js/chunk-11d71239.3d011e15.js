(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11d71239"],{"599d":function(t,e,a){},7631:function(t,e,a){"use strict";a("599d")},df55:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("a-descriptions",{attrs:{title:"退款申请"}},[e("a-descriptions-item",{attrs:{label:"取货单号"}},[t._v("1000000000")]),e("a-descriptions-item",{attrs:{label:"状态"}},[t._v("已取货")]),e("a-descriptions-item",{attrs:{label:"销售单号"}},[t._v("1234123421")]),e("a-descriptions-item",{attrs:{label:"子订单"}},[t._v("3214321432")])],1),e("a-divider",{staticStyle:{"margin-bottom":"32px"}}),e("a-descriptions",{attrs:{title:"用户信息"}},[e("a-descriptions-item",{attrs:{label:"用户姓名"}},[t._v("付小小")]),e("a-descriptions-item",{attrs:{label:"联系电话"}},[t._v("18100000000")]),e("a-descriptions-item",{attrs:{label:"常用快递"}},[t._v("菜鸟仓储")]),e("a-descriptions-item",{attrs:{label:"取货地址"}},[t._v("浙江省杭州市西湖区万塘路18号")]),e("a-descriptions-item",{attrs:{label:"备注"}},[t._v("无")])],1),e("a-divider",{staticStyle:{"margin-bottom":"32px"}}),e("div",{staticClass:"title"},[t._v("退货商品")]),e("s-table",{staticStyle:{"margin-bottom":"24px"},attrs:{"row-key":"id",columns:t.goodsColumns,data:t.loadGoodsData}}),e("div",{staticClass:"title"},[t._v("退货进度")]),e("s-table",{staticStyle:{"margin-bottom":"24px"},attrs:{"row-key":"key",columns:t.scheduleColumns,data:t.loadScheduleData},scopedSlots:t._u([{key:"status",fn:function(a){return[e("a-badge",{attrs:{status:a,text:t._f("statusFilter")(a)}})]}}])})],1)},i=[],o=(a("d3b7"),a("2af9")),n={components:{STable:o["A"]},data:function(){return{goodsColumns:[{title:"商品编号",dataIndex:"id",key:"id"},{title:"商品名称",dataIndex:"name",key:"name"},{title:"商品条码",dataIndex:"barcode",key:"barcode"},{title:"单价",dataIndex:"price",key:"price",align:"right"},{title:"数量（件）",dataIndex:"num",key:"num",align:"right"},{title:"金额",dataIndex:"amount",key:"amount",align:"right"}],loadGoodsData:function(){return new Promise((function(t){t({data:[{id:"1234561",name:"矿泉水 550ml",barcode:"12421432143214321",price:"2.00",num:"1",amount:"2.00"},{id:"1234562",name:"凉茶 300ml",barcode:"12421432143214322",price:"3.00",num:"2",amount:"6.00"},{id:"1234563",name:"好吃的薯片",barcode:"12421432143214323",price:"7.00",num:"4",amount:"28.00"},{id:"1234564",name:"特别好吃的蛋卷",barcode:"12421432143214324",price:"8.50",num:"3",amount:"25.50"}],pageSize:10,pageNo:1,totalPage:1,totalCount:10})})).then((function(t){return t}))},scheduleColumns:[{title:"时间",dataIndex:"time",key:"time"},{title:"当前进度",dataIndex:"rate",key:"rate"},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"操作员ID",dataIndex:"operator",key:"operator"},{title:"耗时",dataIndex:"cost",key:"cost"}],loadScheduleData:function(){return new Promise((function(t){t({data:[{key:"1",time:"2017-10-01 14:10",rate:"联系客户",status:"processing",operator:"取货员 ID1234",cost:"5mins"},{key:"2",time:"2017-10-01 14:05",rate:"取货员出发",status:"success",operator:"取货员 ID1234",cost:"1h"},{key:"3",time:"2017-10-01 13:05",rate:"取货员接单",status:"success",operator:"取货员 ID1234",cost:"5mins"},{key:"4",time:"2017-10-01 13:00",rate:"申请审批通过",status:"success",operator:"系统",cost:"1h"},{key:"5",time:"2017-10-01 12:00",rate:"发起退货申请",status:"success",operator:"用户",cost:"5mins"}],pageSize:10,pageNo:1,totalPage:1,totalCount:10})})).then((function(t){return t}))}}},filters:{statusFilter:function(t){var e={processing:"进行中",success:"完成",failed:"失败"};return e[t]}},computed:{title:function(){return this.$route.meta.title}}},r=n,d=(a("7631"),a("2877")),c=Object(d["a"])(r,s,i,!1,null,"5e6aa193",null);e["default"]=c.exports}}]);