(window.webpackJsonp=window.webpackJsonp||[]).push([["demoSpa/view/list"],{"./app/web/component/layout/standard/content/content.vue?vue&type=style&index=0&lang=css&":function(e,t,n){"use strict";var o=n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/content/content.vue?vue&type=style&index=0&lang=css&");n.n(o).a},"./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&lang=css&":function(e,t,n){"use strict";var o=n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&lang=css&");n.n(o).a},"./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&":function(e,t,n){"use strict";var o=n("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&");n.n(o).a},"./app/web/framework/vue/directive/index.js":function(e,t){},"./app/web/framework/vue/entry/client.js":function(e,t,n){"use strict";var o=n("./node_modules/vue/dist/vue.esm.js");o.default.filter("removeHtml",(function(e){return e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")}));n("./app/web/framework/vue/directive/index.js");var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LayoutHeader"),this._v(" "),t("LayoutContent",[t("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],1)};s._withStripped=!0;var a=n("./node_modules/element-ui/lib/element-ui.common.js"),l=n.n(a),r=(n("./node_modules/element-ui/lib/theme-chalk/index.css"),function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"header"},[t("div",{staticClass:"container"},[this._m(0),this._v(" "),t("ul",{staticClass:"nav"},[t("li",{staticClass:"nav-item"},[t("a",{class:{active:"/"===this.selectedMenu},attrs:{href:"/"}},[this._v("Server-Render")])]),this._v(" "),t("li",{staticClass:"nav-item"},[t("a",{class:{active:"/client"===this.selectedMenu},attrs:{href:"/client"}},[this._v("Client-Render")])])])])])});r._withStripped=!0;var d={data:function(){return{selectedMenu:"/"}},computed:{},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase()}},i=(n("./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&lang=css&"),n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),u=Object(i.a)(d,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[t("a",{staticClass:"router-link-active",attrs:{href:"/"}},[this._v("Egg + Vue")])])}],!1,null,null,null);u.options.__file="app/web/component/layout/standard/header/header.vue";var c=u.exports,p=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main"},[t("div",{staticClass:"page-container page-component"},[this._t("content")],2)])};p._withStripped=!0;var v={name:"v-content",data:function(){return{}},components:{},mounted:function(){}},m=(n("./app/web/component/layout/standard/content/content.vue?vue&type=style&index=0&lang=css&"),Object(i.a)(v,p,[],!1,null,null,null));m.options.__file="app/web/component/layout/standard/content/content.vue";var _=m.exports;o.default.use(l.a);var f={components:{LayoutHeader:c,LayoutContent:_}},h=(n("./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&"),Object(i.a)(f,s,[],!1,null,null,null));h.options.__file="app/web/component/layout/standard/main.vue";var b='<div><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>',y={name:"Layout",props:["title","description","keywords"],components:{MainLayout:h.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:b};o.default.component(y.name,y);var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.a=function(e){o.default.prototype.$http=n("./node_modules/axios/index.js"),e.store?e.store.replaceState(w({},window.__INITIAL_STATE__,e.store.state)):window.__INITIAL_STATE__&&(e.data=w(window.__INITIAL_STATE__,e.data&&e.data())),console.log(e),new o.default(e).$mount("#app")}},"./app/web/page/demoSpa/view/list.vue":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-button",{on:{click:e.handle}},[e._v("点击")]),e._v(" "),n("el-row",e._l(e.lists,(function(t){return n("div",{key:t.id},[n("el-col",{attrs:{span:8}},[e._v(e._s(t.id))]),e._v(" "),n("el-col",{attrs:{span:8}},[e._v(e._s(t.title))]),e._v(" "),n("el-col",{attrs:{span:8}},[e._v(e._s(t.url))])],1)})),0)],1)};o._withStripped=!0;n("./node_modules/vuex/dist/vuex.esm.js");var s={computed:{lists:function(){return this.$store.state.list}},methods:{fetchApi:function(e){return e.dispatch("set_ListData")},handle:function(){this.$router.push("/detail")}},beforeMount:function(){this.lists&&this.lists.length}},a=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),l=Object(a.a)(s,o,[],!1,null,null,null);l.options.__file="app/web/page/demoSpa/view/list.vue";t.a=l.exports},"./node_modules/axios/index.js":function(e,t,n){e.exports=n("dll-reference vendor")(10)},"./node_modules/babel-helper-vue-jsx-merge-props/index.js":function(e,t){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function o(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce((function(e,t){var s,a,l,r,d;for(l in t)if(s=e[l],a=t[l],s&&n.test(l))if("class"===l&&("string"==typeof s&&(d=s,e[l]=s={},s[d]=!0),"string"==typeof a&&(d=a,t[l]=a={},a[d]=!0)),"on"===l||"nativeOn"===l||"hook"===l)for(r in a)s[r]=o(s[r],a[r]);else if(Array.isArray(s))e[l]=s.concat(a);else if(Array.isArray(a))e[l]=[s].concat(a);else for(r in a)s[r]=a[r];else e[l]=t[l];return e}),{})}},"./node_modules/babel-loader/lib/index.js!./app/web/framework/vue/entry/client-loader.js!./app/web/page/demoSpa/view/list.vue":function(e,t,n){"use strict";n.r(t);var o=n("./app/web/framework/vue/entry/client.js"),s=n("./app/web/page/demoSpa/view/list.vue"),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=Object(o.a)(a({},s.a))},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/content/content.vue?vue&type=style&index=0&lang=css&":function(e,t,n){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&lang=css&":function(e,t,n){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&":function(e,t,n){},"./node_modules/normalize-wheel/index.js":function(e,t,n){e.exports=n("./node_modules/normalize-wheel/src/normalizeWheel.js")},"./node_modules/throttle-debounce/debounce.js":function(e,t,n){var o=n("./node_modules/throttle-debounce/throttle.js");e.exports=function(e,t,n){return void 0===n?o(e,t,!1):o(e,n,!1!==t)}},"./node_modules/throttle-debounce/index.js":function(e,t,n){var o=n("./node_modules/throttle-debounce/throttle.js"),s=n("./node_modules/throttle-debounce/debounce.js");e.exports={throttle:o,debounce:s}},"./node_modules/throttle-debounce/throttle.js":function(e,t){e.exports=function(e,t,n,o){var s,a=0;return"boolean"!=typeof t&&(o=n,n=t,t=void 0),function(){var l=this,r=Number(new Date)-a,d=arguments;function i(){a=Number(new Date),n.apply(l,d)}o&&!s&&i(),s&&clearTimeout(s),void 0===o&&r>e?i():!0!==t&&(s=setTimeout(o?function(){s=void 0}:i,void 0===o?e-r:e))}}},"./node_modules/vue/dist/vue.esm.js":function(e,t,n){e.exports=n("dll-reference vendor")(8)},"./node_modules/webpack/buildin/global.js":function(e,t,n){e.exports=n("dll-reference vendor")(9)},"dll-reference vendor":function(e,t){e.exports=vendor}},[["./node_modules/babel-loader/lib/index.js!./app/web/framework/vue/entry/client-loader.js!./app/web/page/demoSpa/view/list.vue","runtime","common"]]]);