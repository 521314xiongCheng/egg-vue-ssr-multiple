(window.webpackJsonp=window.webpackJsonp||[]).push([["demoSpa/view/detail",0],{"./app/web/component/layout/standard/content/content.vue?vue&type=style&index=0&lang=css&":function(e,t,n){"use strict";var s=n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/content/content.vue?vue&type=style&index=0&lang=css&");n.n(s).a},"./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&lang=css&":function(e,t,n){"use strict";var s=n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&lang=css&");n.n(s).a},"./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&":function(e,t,n){"use strict";var s=n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&");n.n(s).a},"./app/web/framework/vue/directive/index.js":function(e,t){},"./app/web/framework/vue/entry/client.js":function(e,t,n){"use strict";var s=n("./node_modules/vue/dist/vue.esm.js");s.default.filter("removeHtml",(function(e){return e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")}));n("./app/web/framework/vue/directive/index.js");var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LayoutHeader"),this._v(" "),t("LayoutContent",[t("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],1)};o._withStripped=!0;var a=n("./node_modules/element-ui/lib/element-ui.common.js"),d=n.n(a),l=(n("./node_modules/element-ui/lib/theme-chalk/index.css"),function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"header"},[t("div",{staticClass:"container"},[this._m(0),this._v(" "),t("ul",{staticClass:"nav"},[t("li",{staticClass:"nav-item"},[t("a",{class:{active:"/"===this.selectedMenu},attrs:{href:"/"}},[this._v("Server-Render")])]),this._v(" "),t("li",{staticClass:"nav-item"},[t("a",{class:{active:"/client"===this.selectedMenu},attrs:{href:"/client"}},[this._v("Client-Render")])])])])])});l._withStripped=!0;var r={data:function(){return{selectedMenu:"/"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase()}},i=(n("./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&lang=css&"),n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),u=Object(i.a)(r,l,[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[t("a",{staticClass:"router-link-active",attrs:{href:"/"}},[this._v("Egg + Vue")])])}],!1,null,null,null);u.options.__file="app/web/component/layout/standard/header/header.vue";var c=u.exports,p=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main"},[t("div",{staticClass:"page-container page-component"},[this._t("content")],2)])};p._withStripped=!0;var v={name:"v-content",data:function(){return{}},components:{},mounted:function(){}},m=(n("./app/web/component/layout/standard/content/content.vue?vue&type=style&index=0&lang=css&"),Object(i.a)(v,p,[],!1,null,null,null));m.options.__file="app/web/component/layout/standard/content/content.vue";var _=m.exports;s.default.use(d.a);var f={components:{LayoutHeader:c,LayoutContent:_}},h=(n("./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&"),Object(i.a)(f,o,[],!1,null,null,null));h.options.__file="app/web/component/layout/standard/main.vue";var b='<div><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>',y={name:"Layout",props:["title","description","keywords"],components:{MainLayout:h.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:b};s.default.component(y.name,y);var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e};t.a=function(e){s.default.prototype.$http=n("./node_modules/axios/index.js"),e.store?e.store.replaceState(w({},window.__INITIAL_STATE__,e.store.state)):window.__INITIAL_STATE__&&(e.data=w(window.__INITIAL_STATE__,e.data&&e.data())),new s.default(e).$mount("#app")}},"./app/web/page/demoSpa/view/detail.vue":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"50%",margin:"0 auto"}},[n("el-button",{on:{click:e.handle}},[e._v("返回")]),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("span",{staticClass:"key"},[e._v("学员姓名：")]),n("span",{staticClass:"value"},[e._v(e._s(e.student.name))])]),e._v(" "),n("el-col",{attrs:{span:12}},[n("span",{staticClass:"key"},[e._v("学员手机号：")]),n("span",{staticClass:"value"},[e._v(e._s(e.student.phone))])]),e._v(" "),n("el-col",{attrs:{span:12}},[n("span",{staticClass:"key"},[e._v("证件类型：")]),n("span",{staticClass:"value"},[e._v(e._s(e.student.type))])]),e._v(" "),n("el-col",{attrs:{span:12}},[n("span",{staticClass:"key"},[e._v("证件  号：")]),n("span",{staticClass:"value"},[e._v(e._s(e.student.certificate))])])],1)],1)};s._withStripped=!0;n("./node_modules/vuex/dist/vuex.esm.js");var o={computed:{student:function(){return this.$store.state.student?this.$store.state.student:{}}},methods:{fetchApi:function(e){return e.dispatch("set_ListItem")},handle:function(){this.$router.push("/list")}},beforeMount:function(){this.student.name||this.fetchApi(this.$store)}},a=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),d=Object(a.a)(o,s,[],!1,null,null,null);d.options.__file="app/web/page/demoSpa/view/detail.vue";t.default=d.exports},"./node_modules/axios/index.js":function(e,t,n){e.exports=n("dll-reference vendor")(10)},"./node_modules/babel-helper-vue-jsx-merge-props/index.js":function(e,t){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function s(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce((function(e,t){var o,a,d,l,r;for(d in t)if(o=e[d],a=t[d],o&&n.test(d))if("class"===d&&("string"==typeof o&&(r=o,e[d]=o={},o[r]=!0),"string"==typeof a&&(r=a,t[d]=a={},a[r]=!0)),"on"===d||"nativeOn"===d||"hook"===d)for(l in a)o[l]=s(o[l],a[l]);else if(Array.isArray(o))e[d]=o.concat(a);else if(Array.isArray(a))e[d]=[o].concat(a);else for(l in a)o[l]=a[l];else e[d]=t[d];return e}),{})}},"./node_modules/babel-loader/lib/index.js!./app/web/framework/vue/entry/client-loader.js!./app/web/page/demoSpa/view/detail.vue":function(e,t,n){"use strict";n.r(t);var s=n("./app/web/framework/vue/entry/client.js"),o=n("./app/web/page/demoSpa/view/detail.vue"),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e};t.default=Object(s.a)(a({},o.default))},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/content/content.vue?vue&type=style&index=0&lang=css&":function(e,t,n){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&lang=css&":function(e,t,n){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&":function(e,t,n){},"./node_modules/normalize-wheel/index.js":function(e,t,n){e.exports=n("./node_modules/normalize-wheel/src/normalizeWheel.js")},"./node_modules/throttle-debounce/debounce.js":function(e,t,n){var s=n("./node_modules/throttle-debounce/throttle.js");e.exports=function(e,t,n){return void 0===n?s(e,t,!1):s(e,n,!1!==t)}},"./node_modules/throttle-debounce/index.js":function(e,t,n){var s=n("./node_modules/throttle-debounce/throttle.js"),o=n("./node_modules/throttle-debounce/debounce.js");e.exports={throttle:s,debounce:o}},"./node_modules/throttle-debounce/throttle.js":function(e,t){e.exports=function(e,t,n,s){var o,a=0;return"boolean"!=typeof t&&(s=n,n=t,t=void 0),function(){var d=this,l=Number(new Date)-a,r=arguments;function i(){a=Number(new Date),n.apply(d,r)}s&&!o&&i(),o&&clearTimeout(o),void 0===s&&l>e?i():!0!==t&&(o=setTimeout(s?function(){o=void 0}:i,void 0===s?e-l:e))}}},"./node_modules/vue/dist/vue.esm.js":function(e,t,n){e.exports=n("dll-reference vendor")(8)},"./node_modules/webpack/buildin/global.js":function(e,t,n){e.exports=n("dll-reference vendor")(9)},"dll-reference vendor":function(e,t){e.exports=vendor}},[["./node_modules/babel-loader/lib/index.js!./app/web/framework/vue/entry/client-loader.js!./app/web/page/demoSpa/view/detail.vue","runtime","common"]]]);