(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a7d1e76"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(n(t))}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",s=o.set,c=o.getterFor(a);i(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"3d4c":function(t,e,r){},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),f=r("35a1");t.exports=function(t){var e,r,u,l,d,p,m=o(t),b="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=f(m),w=0;if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==y||b==Array&&a(y))for(e=s(m.length),r=new b(e);e>w;w++)p=g?v(m[w],w):m[w],c(r,w,p);else for(l=y.call(m),d=l.next,r=new b;!(u=d.call(l)).done;w++)p=g?i(l,v,[u.value,w],!0):u.value,c(r,w,p);return r.length=w,r}},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"86c4":function(t,e,r){},"8e2f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"my-home"}},[r("nav-bar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isFix,expression:"isFix"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{titleClick:t.titleClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[r("home-swiper",{staticClass:"home-swiper",attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),r("recommend-view",{attrs:{recommends:t.recommends}}),r("feature-view"),r("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{titleClick:t.titleClick}}),r("goods-list",{attrs:{goods:t.showGoods}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||c(t)||f()}var l=r("f1d4"),d=r("6d71"),p=r("5d17"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.banners.length?r("swiper",t._l(t.banners,(function(e,n){return r("swiper-item",{key:n},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.swiperImageLoad}})])])})),1):t._e()},b=[],h=r("dc2c"),v={name:"HomeSwiper",components:{Swiper:h["a"],SwiperItem:h["b"]},props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{isLoad:!1}},methods:{stopTimer:function(){this.$refs.swiper.stopTimer()},startTimer:function(){this.$refs.swiper&&this.$refs.swiper.startTimer()},swiperImageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},g=v,y=r("2877"),w=Object(y["a"])(g,m,b,!1,null,"1f8a6cd8",null),S=w.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return r("div",{staticClass:"recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("div",[t._v(t._s(e.title))])])])})),0)},j=[],$={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},x=$,k=(r("fbce"),Object(y["a"])(x,O,j,!1,null,"094e5d63",null)),A=k.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],T={name:"FeatureView"},I=T,E=(r("9bb7"),Object(y["a"])(I,C,_,!1,null,"6511b0ac",null)),L=E.exports,H=r("1bab");function P(){return Object(H["a"])({url:"/home/multidata"})}function F(t,e){return Object(H["b"])({url:"/home/data",params:{type:t,page:e}})}var G=r("90b9"),N=r("eecb"),M={name:"Home",components:{NavBar:l["a"],GoodsList:d["a"],scroll:p["a"],HomeSwiper:S,RecommendView:A,FeatureView:L},mixins:[N["a"],N["b"]],data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},offsetTop:44,saveY:0}},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY()},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){var t=Object(G["a"])(this.$refs.scroll.refresh,500);this.$bus.$on("itemImageLoad",(function(){t()}))},methods:{getHomeMultidata:function(){var t=this;P().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,r=this.goods[t].page+1;F(t,r).then((function(r){var n;(n=e.goods[t].list).push.apply(n,u(r.data.list)),e.goods[t].page+=1}))},contentScroll:function(t){this.isShowBackTop=-t.y>1e3,this.isFix=-t.y>this.offsetTop},loadMore:function(){this.getHomeGoods(this.type),this.$refs.scroll&&this.$refs.scroll.finishPullUp()},swiperImageLoad:function(){var t=this;Object(G["a"])((function(){t.$refs.scroll.refresh()}),50),this.offsetTop=this.$refs.tabControl2.$el.offsetTop}},computed:{showGoods:function(){return this.goods[this.type].list}}},B=M,J=(r("e83f"),Object(y["a"])(B,n,o,!1,null,"8531139c",null));e["default"]=J.exports},"9bb7":function(t,e,r){"use strict";var n=r("3d4c"),o=r.n(n);o.a},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),m=r("825a"),b=r("7b0b"),h=r("fc6a"),v=r("c04e"),g=r("5c6c"),y=r("7c73"),w=r("df75"),S=r("241c"),O=r("057f"),j=r("7418"),$=r("06cf"),x=r("9bf2"),k=r("d1e7"),A=r("9112"),C=r("6eeb"),_=r("5692"),T=r("f772"),I=r("d012"),E=r("90e3"),L=r("b622"),H=r("e538"),P=r("746f"),F=r("d44e"),G=r("69f3"),N=r("b727").forEach,M=T("hidden"),B="Symbol",J="prototype",V=L("toPrimitive"),Y=G.set,R=G.getterFor(B),U=Object[J],z=o.Symbol,D=i("JSON","stringify"),Q=$.f,W=x.f,q=O.f,K=k.f,X=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=o.QObject,ot=!nt||!nt[J]||!nt[J].findChild,it=s&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(U,e);n&&delete U[e],W(t,e,r),n&&t!==U&&W(U,e,n)}:W,at=function(t,e){var r=X[t]=y(z[J]);return Y(r,{type:B,tag:t,description:e}),s||(r.description=e),r},st=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,r){t===U&&ct(Z,e,r),m(t);var n=v(e,!0);return m(r),l(X,n)?(r.enumerable?(l(t,M)&&t[M][n]&&(t[M][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,M)||W(t,M,g(1,{})),t[M][n]=!0),it(t,n,r)):W(t,n,r)},ft=function(t,e){m(t);var r=h(e),n=w(r).concat(mt(r));return N(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=v(t,!0),r=K.call(this,e);return!(this===U&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,M)&&this[M][e])||r)},dt=function(t,e){var r=h(t),n=v(e,!0);if(r!==U||!l(X,n)||l(Z,n)){var o=Q(r,n);return!o||!l(X,n)||l(r,M)&&r[M][n]||(o.enumerable=!0),o}},pt=function(t){var e=q(h(t)),r=[];return N(e,(function(t){l(X,t)||l(I,t)||r.push(t)})),r},mt=function(t){var e=t===U,r=q(e?Z:h(t)),n=[];return N(r,(function(t){!l(X,t)||e&&!l(U,t)||n.push(X[t])})),n};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===U&&r.call(Z,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),it(this,e,g(1,t))};return s&&ot&&it(U,e,{configurable:!0,set:r}),at(e,t)},C(z[J],"toString",(function(){return R(this).tag})),C(z,"withoutSetter",(function(t){return at(E(t),t)})),k.f=lt,x.f=ct,$.f=dt,S.f=O.f=pt,j.f=mt,H.f=function(t){return at(L(t),t)},s&&(W(z[J],"description",{configurable:!0,get:function(){return R(this).description}}),a||C(U,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),N(w(rt),(function(t){P(t)})),n({target:B,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),n({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(b(t))}}),D){var bt=!c||u((function(){var t=z();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,D.apply(null,o)}})}z[J][V]||A(z[J],V,z[J].valueOf),F(z,B),I[M]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),s=r("b622"),c=s("iterator"),f=s("toStringTag"),u=i.values;for(var l in o){var d=n[l],p=d&&d.prototype;if(p){if(p[c]!==u)try{a(p,c,u)}catch(b){p[c]=u}if(p[f]||a(p,f,l),o[l])for(var m in i)if(p[m]!==i[m])try{a(p,m,i[m])}catch(b){p[m]=i[m]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,f=r("e893"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};f(d,u);var p=d.prototype=u.prototype;p.constructor=d;var m=p.toString,b="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=m.call(t);if(a(l,t))return"";var r=b?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e83f:function(t,e,r){"use strict";var n=r("f15a"),o=r.n(n);o.a},f15a:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),f=r("8418"),u=r("b622"),l=r("1dde"),d=r("ae40"),p=l("slice"),m=d("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),h=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!p||!m},{slice:function(t,e){var r,n,u,l=c(this),d=s(l.length),p=a(t,d),m=a(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(l,p,m);for(n=new(void 0===r?Array:r)(v(m-p,0)),u=0;p<m;p++,u++)p in l&&f(n,u,l[p]);return n.length=u,n}})},fbce:function(t,e,r){"use strict";var n=r("86c4"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-0a7d1e76.d0eade00.js.map