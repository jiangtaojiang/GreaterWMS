(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"0a26":function(e,t){},"9dea":function(e,t,a){"use strict";var n=a("0a26"),o=a.n(n);t["default"]=o.a},a9ea:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:"refresh",icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             Refresh data\n           ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"Search word"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"dn_code",attrs:{props:t}},[e._v("\n             "+e._s(t.row.dn_code)+"\n           ")]),a("q-td",{key:"dn_status",attrs:{props:t}},[e._v("\n             "+e._s(t.row.dn_status)+"\n           ")]),a("q-td",{key:"goods_qty",attrs:{props:t}},[e._v("\n             "+e._s(t.row.goods_qty)+"\n           ")]),a("q-td",{key:"customer",attrs:{props:t}},[e._v("\n           "+e._s(t.row.customer)+"\n         ")]),a("q-td",{key:"creater",attrs:{props:t}},[e._v("\n           "+e._s(t.row.creater)+"\n         ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")])],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:"Previous",icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          Previous\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:"Next","icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          Next\n        ")])],1)],1)]],2)},o=[],i=(a("5319"),a("3004")),s={name:"Pagednbackorder",data(){return{openid:"",login_name:"",authin:"0",pathname:"dn/detail/?dn_status=2&back_order_label=true",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],warehouse_list:[],columns:[{name:"dn_code",required:!0,label:"DN Code",align:"left",field:"dn_code"},{name:"dn_status",label:"DN Status",field:"dn_status",align:"center"},{name:"goods_qty",label:"Back Order Qty",field:"goods_qty",align:"center"},{name:"customer",label:"Customer",field:"customer",align:"center"},{name:"creater",label:"Creater",field:"creater",align:"center"},{name:"create_time",label:"Create Time",field:"create_time",align:"center"},{name:"update_time",label:"Update Time",field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var e=this;e.$q.localStorage.has("auth")&&Object(i["d"])(e.pathname,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0];t.previous.replace(a,window.location.href.split(":")[0]),e.pathname_previous=t.previous}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0];t.next.replace(n,window.location.href.split(":")[0]),e.pathname_next=t.next}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;e.$q.localStorage.has("auth")&&Object(i["d"])(e.pathname_previous,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0];t.previous.replace(a,window.location.href.split(":")[0]),e.pathname_previous=t.previous}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0];t.next.replace(n,window.location.href.split(":")[0]),e.pathname_next=t.next}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;e.$q.localStorage.has("auth")&&Object(i["d"])(e.pathname_next,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0];t.previous.replace(a,window.location.href.split(":")[0]),e.pathname_previous=t.previous}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0];t.next.replace(n,window.location.href.split(":")[0]),e.pathname_next=t.next}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()}},created(){var e=this;e.$q.localStorage.has("openid")?e.openid=e.$q.localStorage.getItem("openid"):(e.openid="",e.$q.localStorage.set("openid","")),e.$q.localStorage.has("login_name")?e.login_name=e.$q.localStorage.getItem("login_name"):(e.login_name="",e.$q.localStorage.set("login_name","")),e.$q.localStorage.has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated(){},destroyed(){}},r=s,l=a("2877"),p=a("9dea"),c=a("eaac"),d=a("e7a9"),u=a("9c40"),h=a("05c0"),_=a("2c91"),m=a("27f9"),g=a("0016"),f=a("bd08"),v=a("db86"),b=a("eebe"),x=a.n(b),q=Object(l["a"])(r,n,o,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])(q);t["default"]=q.exports;x()(q,"components",{QTable:c["a"],QBtnGroup:d["a"],QBtn:u["a"],QTooltip:h["a"],QSpace:_["a"],QInput:m["a"],QIcon:g["a"],QTr:f["a"],QTd:v["a"]})}}]);