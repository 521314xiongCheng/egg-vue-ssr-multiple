exports.ids=[4],exports.modules={25:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{width:"50%",margin:"0 auto"}},[e("el-button",{on:{click:t.handle}},[t._v("返回")]),t._ssrNode(" "),e("el-row",[e("el-col",{attrs:{span:12}},[e("span",{staticClass:"key"},[t._v("学员姓名：")]),e("span",{staticClass:"value"},[t._v(t._s(t.student.name))])]),t._v(" "),e("el-col",{attrs:{span:12}},[e("span",{staticClass:"key"},[t._v("学员手机号：")]),e("span",{staticClass:"value"},[t._v(t._s(t.student.phone))])]),t._v(" "),e("el-col",{attrs:{span:12}},[e("span",{staticClass:"key"},[t._v("证件类型：")]),e("span",{staticClass:"value"},[t._v(t._s(t.student.type))])]),t._v(" "),e("el-col",{attrs:{span:12}},[e("span",{staticClass:"key"},[t._v("证件  号：")]),e("span",{staticClass:"value"},[t._v(t._s(t.student.certificate))])])],1)],2)};a._withStripped=!0;e(17);var n={computed:{student(){return this.$store.state.student?this.$store.state.student:{}}},methods:{fetchApi:t=>t.dispatch("set_ListItem"),handle(){this.$router.push("/list")}},beforeMount(){this.student.name||this.fetchApi(this.$store)}},i=e(1);var l=Object(i.a)(n,a,[],!1,(function(t){}),null,"4d3e9563");l.options.__file="app/web/page/demoSpa/view/detail.vue";s.default=l.exports}};