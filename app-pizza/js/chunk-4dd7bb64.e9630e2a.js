(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd7bb64"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),c=n("6a99"),u=n("69a8"),s=n("c69a"),a=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?a:function(t,e){if(t=i(t),e=c(e,!0),s)try{return a(t,e)}catch(n){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"37fd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("ShowMenu",{staticClass:"show",attrs:{menu:t.menu},on:{add:t.add}}),n("Shopping",{directives:[{name:"show",rawName:"v-show",value:t.showShop,expression:"showShop"}],staticClass:"shop",attrs:{shop:t.shop},on:{empty:t.empty}})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[t._m(0),t._l(t.menu,function(e,r){return n("tbody",{key:r,staticClass:"containt"},[n("th",[n("td",[t._v(t._s(e.name))])]),t._l(e.options,function(r,o){return n("tr",{key:o},[n("td",[t._v(t._s(r.size))]),n("td",[t._v(t._s(r.price))]),n("td",[n("span",{on:{click:function(n){return t.add(e.name,r.size,r.price)}}},[t._v("+")])])])})],2)})],2)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tbody",[n("tr",[n("th",[t._v("尺寸")]),n("th",[t._v("价格")]),n("th",[t._v("加入")])])])}],u=n("2f62"),s={props:{menu:Object},computed:Object(u["b"])(["shop"]),methods:{add:function(t,e,n){this.$emit("add");var r=t+e;this.$store.dispatch("asyncshop",{type:r,num:1,price:n}),console.log(this.shop)}}},a=s,f=(n("dca2"),n("2877")),p=Object(f["a"])(a,i,c,!1,null,"174ec4d6",null),l=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.shop,function(e,r){return n("tr",{key:r},[n("td",[n("span",{on:{click:function(e){return t.sub(r)}}},[t._v("-")]),t._v("\n        "+t._s(e.num)+"\n        "),n("span",{on:{click:function(e){return t.add(r)}}},[t._v("+")])]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.price*e.num))])])}),0),n("h4",[t._v("总价："+t._s(t.sum))]),n("button",{staticClass:"btn"},[t._v("购买")])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tbody",[n("tr",[n("th",[t._v("数量")]),n("th",[t._v("品种")]),n("th",[t._v("价格")])])])}],v=(n("8e6e"),n("ac6a"),n("456d"),n("85f2")),b=n.n(v);function y(t,e,n){return e in t?b()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var _={computed:w({},Object(u["b"])(["shop"]),{sum:function(){var t=0;for(var e in this.shop)if(this.shop.hasOwnProperty(e)){var n=this.shop[e];t+=parseInt(n.price*n.num)}return t}}),methods:{sub:function(t){console.log("---"),this.shop[t].num--,this.shop[t].num<=0&&this.$store.dispatch("asyncDelete",this.shop[t].type),"{}"==JSON.stringify(this.shop)&&this.$emit("empty")},add:function(t){console.log("+++"),this.shop[t].num++}}},g=_,O=(n("c70b"),Object(f["a"])(g,h,d,!1,null,"4bd2aad5",null)),S=O.exports,j={components:{ShowMenu:l,Shopping:S},data:function(){return{menu:{},shop:{},showShop:!1}},methods:{fetchMenu:function(){var t=this;this.$axios.get("/menu.json").then(function(e){t.$store.dispatch("asyncmenu",e.data),console.log(t.$store.getters.getmenu),t.menu=t.$store.getters.getmenu}),console.log("-------------"+this.menu)},update:function(){this.fetchMenu()},empty:function(){this.showShop=!1},add:function(){this.showShop=!0}},beforeRouteEnter:function(t,e,n){n(function(t){t.fetchMenu()})}},x=j,L=(n("812a"),Object(f["a"])(x,r,o,!1,null,"53cae5ee",null));e["default"]=L.exports},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),o=n("0d58");n("5eda")("keys",function(){return function(t){return o(r(t))}})},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var r=n("5ca1"),o=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",c)}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),c=n("35e8"),u=n("07e3"),s="prototype",a=function(t,e,n){var f,p,l,h=t&a.F,d=t&a.G,v=t&a.S,b=t&a.P,y=t&a.B,m=t&a.W,w=d?o:o[e]||(o[e]={}),_=w[s],g=d?r:v?r[e]:(r[e]||{})[s];for(f in d&&(n=e),n)p=!h&&g&&void 0!==g[f],p&&u(w,f)||(l=p?g[f]:n[f],w[f]=d&&"function"!=typeof g[f]?n[f]:y&&p?i(l,r):m&&g[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(l):b&&"function"==typeof l?i(Function.call,l):l,b&&((w.virtual||(w.virtual={}))[f]=l,t&a.R&&_&&!_[f]&&c(_,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"812a":function(t,e,n){"use strict";var r=n("e429"),o=n.n(r);o.a},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(t,e,n){var r=n("5ca1"),o=n("990b"),i=n("6821"),c=n("11e9"),u=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),s=c.f,a=o(r),f={},p=0;while(a.length>p)n=s(r,e=a[p++]),void 0!==n&&u(f,e,n);return f}})},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"990b":function(t,e,n){var r=n("9093"),o=n("2621"),i=n("cb7c"),c=n("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),c=n("7726"),u=n("32e9"),s=n("84f2"),a=n("2b4c"),f=a("iterator"),p=a("toStringTag"),l=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(h),v=0;v<d.length;v++){var b,y=d[v],m=h[y],w=c[y],_=w&&w.prototype;if(_&&(_[f]||u(_,f,l),_[p]||u(_,p,y),s[y]=l,m))for(b in r)_[b]||i(_,b,r[b],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},c70b:function(t,e,n){"use strict";var r=n("f679"),o=n.n(r);o.a},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),c=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dca2:function(t,e,n){"use strict";var r=n("fdbc"),o=n.n(r);o.a},e429:function(t,e,n){},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f1ae:function(t,e,n){"use strict";var r=n("86cc"),o=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},f679:function(t,e,n){},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fdbc:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4dd7bb64.e9630e2a.js.map