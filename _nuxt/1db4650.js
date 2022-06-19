(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e,n){"use strict";var o={components:{TranslateSelect:n(121).a},data:function(){return{links:[{title:"Home"}]}},computed:{selectedLang:function(){return this.$i18n.locale},availableLocales:function(){return this.$i18n.locales}},methods:{toggleDark:function(){this.$store.dispatch("toggleDarkMode")},changeLang:function(){}}},r=n(23),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-white text-pallette-darkMain dark:bg-pallette-darkMain dark:text-white sticky top-0 shadow-sm bg-opacity-95 dark:bg-opacity-95 font-medium text-lg"},[n("div",{staticClass:"max-w-3xl mx-auto py-5 flex justify-center items-center space-x-8"},[t._l(4,(function(e){return n("nuxt-link",{key:e,staticClass:"hover:text-pallette-lighter",attrs:{to:"/"}},[t._v(" Home ")])})),t._v(" "),n("div",{staticClass:"flex space-x-5 pl-7 items-center"},[n("span",{on:{click:t.toggleDark}},[n(t.$store.state.isDark?"icons-moon-icon":"icons-sun-icon",{tag:"component",staticClass:"w-5 h-5 cursor-pointer hover:text-pallette-lighter"})],1),t._v(" "),n("translate-select"),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedLang,expression:"selectedLang"}],staticClass:"bg-gray-500",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedLang=e.target.multiple?n:n[0]},t.changeLang]}},t._l(t.availableLocales,(function(e){return n("option",{key:e.code,domProps:{value:e.code}},[t._v(t._s(e.code))])})),0),t._v(" "),t._l(t.availableLocales,(function(e){return n("nuxt-link",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.code))])}))],2)],2)])}),[],!1,null,null,null);e.a=component.exports},121:function(t,e,n){"use strict";var o={data:function(){return{open:!1,data:["salam","labas"]}},methods:{handelClickOutSide:function(){this.open=!1}}},r=n(23),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.handelClickOutSide,expression:"handelClickOutSide"}],staticClass:"relative flex space-x-1 items-center cursor-pointer hover:text-pallette-semiDark",on:{click:function(e){t.open=!t.open},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.open=!1}}},[n("icons-translate-icon",{staticClass:"w-5 h-5"}),t._v(" "),n(t.open?"icons-chevron-up-icon":"icons-chevron-down-icon",{tag:"component",staticClass:"w-3 h-3"}),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition duration-100 ease-out","enter-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"}},[t.open?n("div",{staticClass:"absolute top-4 -left-1/2 w-max mt-3 origin-top-right bg-white dark:bg-pallette-semiDark dark:text-white text-gray-400 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"}},[n("div",{staticClass:"py-1",attrs:{role:"none"}},t._l(t.data,(function(e){return n("span",{key:e,staticClass:"block px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100 hover:text-gray-900",attrs:{role:"menuitem"},on:{click:function(n){return t.handelClick(e)}}},[t._v(t._s(e))])})),0)]):t._e()])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{IconsTranslateIcon:n(293).default})},122:function(t,e,n){"use strict";var o=n(23),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"bg-new-br2"},[t._v("app footer")])}),[],!1,null,null,null);e.a=component.exports},154:function(t,e,n){"use strict";var o=n(0);n(29),n(86),n(45),n(46);function r(t,e,n){c(t);var o=n.context,r=e.value;if("function"==typeof r){var d=!1;setTimeout((function(){d=!0}),0),t[l]=function(e){var path=e.path||(e.composedPath?e.composedPath():void 0);if(d&&(path?!path.includes(t):!t.contains(e.target)))return r.call(o,e)},document.documentElement.addEventListener("click",t[l],!1)}}function c(t){document.documentElement.removeEventListener("click",t[l],!1),delete t[l]}var l="_click_outside_handler",d={bind:r,update:function(t,e,n){e.value!==e.oldValue&&r(t,e,n)},unbind:c};o.a.directive("click-outside",d)},198:function(t){t.exports=JSON.parse('{"welcome":"salam en"}')},199:function(t){t.exports=JSON.parse('{"welcome":"salam ar"}')},200:function(t){t.exports=JSON.parse('{"welcome":"salam fr"}')},202:function(t,e,n){"use strict";n(116),n(14);var o=n(120),r=n(122),c={components:{AppHeader:o.a,AppFooter:r.a},computed:{isDark:function(){return this.$store.state.isDark},currentLangIsRtl:function(){var t=this;return this.$i18n.locales.find((function(e){return t.$i18n.locale===e.code})).isRTL}},mounted:function(){this.$store.dispatch("changeLang",this.$i18n.locales[0])}},l=n(23),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.isDark?"dark":"",attrs:{dir:t.currentLangIsRtl?"rtl":"ltr"}},[n("app-header"),t._v(" "),n("Nuxt",{staticClass:"min-h-screen"}),t._v(" "),n("app-footer")],1)}),[],!1,null,null,null);e.a=component.exports},205:function(t,e,n){n(206),t.exports=n(207)},265:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"actions",(function(){return c})),n.d(e,"mutations",(function(){return l}));var o="mode",r=function(){return{isDark:"true"===localStorage.getItem(o)||!1,lang:null}},c={toggleDarkMode:function(t){t.commit("toggleDarkMode")},changeLang:function(t,e){t.commit("changeLang",e)}},l={toggleDarkMode:function(t){localStorage.setItem(o,!t.isDark),t.isDark=!t.isDark},changeLang:function(t,e){t.lang=e}}},293:function(t,e,n){"use strict";n.r(e);var o=n(23),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports}},[[205,9,1,10]]]);