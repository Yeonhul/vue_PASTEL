(function(e){function t(t){for(var n,a,i=t[0],f=t[1],g=t[2],b=0,u=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);h&&h(t);while(u.length)u.shift()();return c.push.apply(c,g||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var f=r[a];0!==o[f]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-8ebd6efe":"f7778166","chunk-2d0a49eb":"f4b328e0","chunk-60a580b8":"c231a43c","chunk-66b35cd4":"23ec5dbc","chunk-b5f84b6e":"02c7cdcd"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var g=new Error;c=function(t){f.onerror=f.onload=null,clearTimeout(b);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;g.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",g.name="ChunkLoadError",g.type=n,g.request=c,r[1](g)}o[e]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue_PASTEL/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],g=f.push.bind(f);f.push=t,f=f.slice();for(var b=0;b<f.length;b++)t(f[b]);var h=g;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4ae8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(e,t,r,o,c,a){var i=Object(n["z"])("Menu"),f=Object(n["z"])("He-der"),g=Object(n["z"])("router-view");return Object(n["t"])(),Object(n["f"])("div",null,[Object(n["i"])(f,null,{default:Object(n["G"])((function(){return[e.$store.state.mobile?(Object(n["t"])(),Object(n["d"])(i,{key:0})):Object(n["e"])("",!0)]})),_:1}),Object(n["i"])(g),e.$store.state.mobile?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["d"])(i,{key:0}))])}var c={name:"App",components:{}},a=(r("5e16"),r("6b0d")),i=r.n(a);const f=i()(c,[["render",o]]);var g=f,b=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),h=function(){return Promise.all([r.e("chunk-8ebd6efe"),r.e("chunk-60a580b8")]).then(r.bind(null,"7f94"))},u=function(){return Promise.all([r.e("chunk-8ebd6efe"),r.e("chunk-66b35cd4")]).then(r.bind(null,"f0d7"))},l=function(){return Promise.all([r.e("chunk-8ebd6efe"),r.e("chunk-2d0a49eb")]).then(r.bind(null,"06e4"))},s=function(){return r.e("chunk-b5f84b6e").then(r.bind(null,"dd7b"))},d=[{path:"/",name:"main",component:h},{path:"/ColorList",name:"color list",component:u},{path:"/pick",name:"pick",component:l},{path:"/login",name:"login",component:s}],p=Object(b["a"])({history:Object(b["b"])(),routes:d}),x=p,_=(r("ac1f"),r("841c"),r("159b"),r("b680"),r("4de4"),r("5502")),F=r("0e44"),m=[{hex:"#F3B0C2",tag:["#f3b0c2","red"],r:243,g:176,b:194,tf:!0},{hex:"#ACDEE7",tag:["#acdee7","blue"],r:172,g:222,b:231,tf:!0},{hex:"#D9D9D9",tag:["#d9d9d9","gray"],r:217,g:217,b:217,tf:!0},{hex:"#EDEAE5",tag:["#edeae5","gray"],r:237,g:234,b:229,tf:!0},{hex:"#FFE1E9",tag:["#ffe1e9","pink"],r:255,g:225,b:233,tf:!0},{hex:"#CCAACB",tag:["#ccaacb","purple"],r:204,g:170,b:203,tf:!0},{hex:"#FFCDB6",tag:["#ffcdb6","orange"],r:255,g:205,b:182,tf:!0},{hex:"#FFFFB5",tag:["#ffffb5","yellow"],r:255,g:255,b:181,tf:!0},{hex:"#CCE2CB",tag:["#cce2cb","green"],r:204,g:226,b:203,tf:!0},{hex:"#F8A3C3",tag:["#f8a3c3","pink"],r:204,g:226,b:203,tf:!0},{hex:"#FCE5EB",tag:["#fce5eb","pink"],r:252,g:229,b:235,tf:!0},{hex:"#E7E5D9",tag:["#e7e5d9","beige"],r:231,g:229,b:217,tf:!0},{hex:"#5E5946",tag:["#5e5946","brown"],r:94,g:87,b:70,tf:!0},{hex:"#AE887B",tag:["#ae887b","brown"],r:174,g:136,b:123,tf:!0},{hex:"#C3C1AB",tag:["#c3c1ab","green"],r:195,g:193,b:171,tf:!0},{hex:"#E5B36A",tag:["#e5b36a","yellow"],r:229,g:179,b:106,tf:!0},{hex:"#F1DEEE",tag:["#f1deee","purple"],r:241,g:222,b:238,tf:!0},{hex:"#C8C7D7",tag:["#c8c7d7","gray"],r:200,g:199,b:215,tf:!0},{hex:"#878189",tag:["#878189","gray"],r:135,g:129,b:137,tf:!0},{hex:"#C6E1CE",tag:["#c6e1ce","green"],r:198,g:225,b:206,tf:!0},{hex:"#FEA78C",tag:["#fea78c","orange"],r:254,g:167,b:140,tf:!0},{hex:"#FFA3A6",tag:["#ffa3a6","pink"],r:255,g:163,b:166,tf:!0},{hex:"#F583B4",tag:["#f583b4","pink"],r:245,g:131,b:180,tf:!0},{hex:"#CD69A7",tag:["#cd69a7","purple"],r:205,g:105,b:167,tf:!0},{hex:"#ED7179",tag:["#ed7179","orange"],r:237,g:113,b:121,tf:!0},{hex:"#8869A5",tag:["#8869a5","purple"],r:136,g:105,b:165,tf:!0},{hex:"#C58ADE",tag:["#c58ade","purple"],r:197,g:138,b:222,tf:!0},{hex:"#B1BEEA",tag:["#b1beea","blue"],r:177,g:190,b:134,tf:!0},{hex:"#90C4E9",tag:["#90c4e9","blue"],r:144,g:196,b:233,tf:!0},{hex:"#8095CE",tag:["#8095ce","blue"],r:128,g:149,b:206,tf:!0},{hex:"#D6A3DC",tag:["#d6a3dc","purple"],r:214,g:163,b:220,tf:!0},{hex:"#F7DB70",tag:["#f7db70","yellow"],r:247,g:219,b:112,tf:!0},{hex:"#EABEBF",tag:["#eabebf","beige"],r:234,g:190,b:191,tf:!0},{hex:"#75CCE8",tag:["#75cce8","blue"],r:117,g:204,b:232,tf:!0},{hex:"#A5DEE5",tag:["#a5dee5","blue"],r:165,g:222,b:229,tf:!0},{hex:"#80BEAF",tag:["#80beaf","green"],r:128,g:190,b:175,tf:!0},{hex:"#B3DDD1",tag:["#b3ddd1","green"],r:179,g:221,b:209,tf:!0},{hex:"#D1DCE2",tag:["#d1dce2","gray"],r:209,g:220,b:226,tf:!0},{hex:"#F5B994",tag:["#f5b994","orange"],r:245,g:185,b:148,tf:!0},{hex:"#EE9C6A",tag:["#ee9c6a","orange"],r:238,g:156,b:106,tf:!0},{hex:"#FFF5E9",tag:["#fff5e9","beige"],r:255,g:245,b:233,tf:!0},{hex:"#FFE5C0",tag:["#ffe5c0","beige"],r:255,g:229,b:192,tf:!0},{hex:"#EAD2DF",tag:["#ead2df","purple"],r:234,g:210,b:223,tf:!0},{hex:"#EDB5D2",tag:["#edb5d2","pink"],r:237,g:181,b:210,tf:!0},{hex:"#C8A8DA",tag:["#c8a8da","purple"],r:200,g:168,b:218,tf:!0},{hex:"#FD475D",tag:["#fd475d","red"],r:253,g:71,b:93,tf:!0},{hex:"#FEB396",tag:["#feb396","orange"],r:254,g:179,b:150,tf:!0},{hex:"#FFCCBF",tag:["#ffccbf","beige"],r:255,g:204,b:191,tf:!0},{hex:"#AED4D5",tag:["#aed4d5","green"],r:174,g:212,b:213,tf:!0},{hex:"#F9CC87",tag:["#f9cc87","yellow"],r:249,g:204,b:135,tf:!0},{hex:"#F5CEC7",tag:["#f5cec7","pink"],r:245,g:206,b:199,tf:!0},{hex:"#E79796",tag:["#e79796","pink"],r:231,g:151,b:150,tf:!0},{hex:"#FFB284",tag:["#ffb284","orange"],r:255,g:178,b:132,tf:!0},{hex:"#FFC98B",tag:["#ffc98b","yellow"],r:255,g:201,b:139,tf:!0},{hex:"#C6C09C",tag:["#c6c09c","brown"],r:198,g:192,b:156,tf:!0},{hex:"#879E46",tag:["#879e46","green"],r:135,g:158,b:70,tf:!0},{hex:"#BBD5A6",tag:["#bbd5a6","green"],r:187,g:213,b:166,tf:!0},{hex:"#FBCEB9",tag:["#fbceb9","pink"],r:251,g:206,b:185,tf:!0},{hex:"#FEBD3D",tag:["#febd3d","orange"],r:254,g:189,b:61,tf:!0},{hex:"#E57B87",tag:["#e57b87","red"],r:229,g:123,b:135,tf:!0},{hex:"#FFC4C8",tag:["#ffc4c8","pink"],r:255,g:196,b:200,tf:!0},{hex:"#FF5685",tag:["#ff5685","red"],r:255,g:86,b:133,tf:!0},{hex:"#FED154",tag:["#fed154","yellow"],r:254,g:209,b:84,tf:!0},{hex:"#FEB25E",tag:["#feb25e","orange"],r:254,g:178,b:94,tf:!0},{hex:"#6AC7E6",tag:["#6ac7e6","blue"],r:106,g:199,b:230,tf:!0},{hex:"#FB93AC",tag:["#fb93ac","pink"],r:251,g:147,b:172,tf:!0},{hex:"#9BC768",tag:["#9bc768","green"],r:155,g:199,b:104,tf:!0},{hex:"#FDC7D4",tag:["#fdc7d4","pink"],r:253,g:199,b:212,tf:!0},{hex:"#FDD84C",tag:["#fdd84c","yellow"],r:253,g:216,b:76,tf:!0},{hex:"#BB9DCF",tag:["#bb9dcf","purple"],r:187,g:157,b:207,tf:!0},{hex:"#E49AAB",tag:["#e49aab","pink"],r:228,g:154,b:171,tf:!0},{hex:"#F3BDD7",tag:["#f3bdd7","pink"],r:243,g:189,b:215,tf:!0},{hex:"#FFDFA2",tag:["#ffdfa2","yellow"],r:255,g:223,b:162,tf:!0},{hex:"#BFE4FF",tag:["#bfe4ff","blue"],r:191,g:228,b:255,tf:!0},{hex:"#A3B5FD",tag:["#a3b5fd","blue"],r:163,g:181,b:253,tf:!0},{hex:"#C3C5F8",tag:["#c3c5f8","purple"],r:195,g:197,b:248,tf:!0},{hex:"#60EFDB",tag:["#60efdb","green"],r:96,g:239,b:219,tf:!0},{hex:"#BEF2E5",tag:["#bef2e5","green"],r:190,g:242,b:229,tf:!0},{hex:"#C5E7F1",tag:["#c5e7f1","blue"],r:197,g:231,b:241,tf:!0},{hex:"#79CEED",tag:["#79ceed","blue"],r:121,g:206,b:237,tf:!0},{hex:"#6F89A2",tag:["#6f89a2","blue"],r:111,g:137,b:162,tf:!0},{hex:"#85CBCD",tag:["#85cbcd","green"],r:133,g:203,b:205,tf:!0},{hex:"#A8DEE0",tag:["#a8dee0","green"],r:168,g:222,b:224,tf:!0},{hex:"#F9E2AE",tag:["#f9e2ae","yellow"],r:249,g:226,b:174,tf:!0},{hex:"#FBC78D",tag:["#fbc78d","orange"],r:251,g:199,b:141,tf:!0},{hex:"#A7D676",tag:["#a7d676","green"],r:167,g:214,b:118,tf:!0},{hex:"#ADC965",tag:["#adc965","green"],r:173,g:201,b:101,tf:!0},{hex:"#89D5C9",tag:["#89d5c9","green"],r:137,g:213,b:201,tf:!0},{hex:"#FAC172",tag:["#fac172","orange"],r:250,g:193,b:114,tf:!0},{hex:"#FF8357",tag:["#ff8357","orange"],r:255,g:131,b:87,tf:!0},{hex:"#E25B45",tag:["#e25b45","orange"],r:226,g:91,b:69,tf:!0},{hex:"#D2A8B2",tag:["#d2a8b2","pink"],r:210,g:168,b:178,tf:!0},{hex:"#EDE1E5",tag:["#ed1e5","gray"],r:237,g:225,b:229,tf:!0},{hex:"#DAE6E4",tag:["#dae6e4","green"],r:218,g:230,b:228,tf:!0},{hex:"#EECF65",tag:["#eecf65","yellow"],r:238,g:207,b:101,tf:!0},{hex:"#DA9C25",tag:["#da9c25","brown"],r:218,g:156,b:37,tf:!0}],C=r("bc3a"),E=r.n(C),w=Object(_["a"])({state:{width_resize:0,height_resize:0,TF:!1,ColorList:m,search:"",choice_r:0,choice_g:0,choice_b:0,percent_r:0,percent_g:0,percent_b:0,box:[],login_check:"",ColorPick:[],login_TF:!1,mobile:!0,menu_bt:0,router_list:["MAIN","COLOR LIST","PICK","LOGIN"]},mutations:{resize:function(e){e.width_resize=window.innerWidth,e.mobile&&e.width_resize<1024?(e.mobile=!1,e.TF=!1,e.login_TF=!1):!e.mobile&&e.width_resize>=1024&&(e.TF&&history.back(),e.mobile=!0,e.TF=!0,e.login_TF=!0)},change_TF:function(e,t){1==e.TF&&e.width_resize<1024?e.TF=!1:0==e.TF&&e.width_resize<1024&&(window.location.hash=window.location.hash+"".concat(e.ColorList[t].hex),e.TF=!0)},toss:function(e,t){e.search=t.toLowerCase()},similar:function(e,t){e.search=e.ColorList[t].tag[1]},choice:function(e,t){e.choice_r=e.ColorList[t].r,e.choice_g=e.ColorList[t].g,e.choice_b=e.ColorList[t].b},pick_tf:function(e,t){switch(e.ColorList[t].tf){case!0:return e.ColorList[t].tf=!1;case!1:return e.ColorList[t].tf=!0}},check:function(e,t){e.login_check=t},login_color:function(e,t){e.ColorPick=t,e.ColorPick.forEach((function(t){e.ColorList[t.hex_index].tf=!1}))},logout:function(e,t){e.login_check="",t.forEach((function(t){e.ColorList[t.hex_index].tf=!0})),e.ColorPick=[]},mobile_TF:function(e){e.login_TF=!e.login_TF},mobile_TF2:function(e){e.login_TF&&(e.login_TF=!1),e.TF&&(e.TF=!1)},mobile_menu:function(e){e.mobile=window.innerWidth<1024},popstate_event:function(e){e.login_TF&&e.width_resize<1024&&(e.login_TF=!1),e.TF&&e.width_resize<1024&&(e.TF=!1)},menu_count:function(e,t){e.menu_bt=t},menu_count_load:function(e,t){void 0!=t&&(e.menu_bt=e.router_list.indexOf(t.toUpperCase()))}},actions:{user_color:function(e,t){var r=e.commit;E.a.post("/api/pick/check",t).then((function(e){void 0!=t.u_password?r("login_color",e.data):r("logout",e.data)})).catch((function(e){console.log(e)}))},m_menu:function(e){var t=e.commit;t("mobile_menu"),t("resize")}},modules:{},getters:{search:function(e){return e.search.toLowerCase()},choice_r:function(e){return e.percent_r=(100*e.choice_r/(e.choice_r+e.choice_g+e.choice_b)).toFixed(2),"NaN"==e.percent_r?0:e.percent_r},choice_g:function(e){return e.percent_g=(100*e.choice_g/(e.choice_r+e.choice_g+e.choice_b)).toFixed(2),"NaN"==e.percent_g?0:e.percent_g},choice_b:function(e){return e.percent_b=(100*e.choice_b/(e.choice_r+e.choice_g+e.choice_b)).toFixed(2),"NaN"==e.percent_b?0:e.percent_b},random:function(e){for(var t=[],r=0;r<6;r++){var n=Math.floor(Math.random()*e.ColorList.length);-1===t.indexOf(n)?t.push(n):r--}return e.box=t},pick_page:function(e){return e.ColorList.filter((function(e){return 0==e.tf}))}},plugins:[Object(F["a"])({storage:window.sessionStorage,paths:["login_check","ColorPick","ColorList"],key:"login"})]}),v=Object(n["g"])("div",{class:"title"},[Object(n["g"])("h1",null,"PASTEL")],-1);function k(e,t,r,o,c,a){return Object(n["t"])(),Object(n["f"])("div",{class:Object(n["o"])(["header",{h_E:e.header_TF}])},[v,Object(n["y"])(e.$slots,"default")],2)}var D={data:function(){return{}},methods:{resize_event:function(){console.log("aasdasd"),this.$store.commit("resize")},login_bt:function(){-1==window.location.hash.indexOf("#login")&&(window.location.hash=window.location.hash+"#login"),this.$store.commit("mobile_TF")},popstate:function(){this.$store.commit("popstate_event")}},computed:{},mounted:function(){window.addEventListener("resize",this.resize_event),window.addEventListener("popstate",this.popstate,!1),this.$store.dispatch("m_menu")},beforeDestory:function(){window.removeEventListener("resize",this.resize_event),window.removeEventListener("popstate",this.popstate)},watch:{}};const O=i()(D,[["render",k]]);var y=O,j={class:"menu"},A={class:"h_box"},B=["value","onClick"];function T(e,t,r,o,c,a){return Object(n["t"])(),Object(n["f"])("div",j,[Object(n["g"])("div",A,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(e.$store.state.router_list,(function(e,t){return Object(n["t"])(),Object(n["f"])("input",{class:Object(n["o"])(["h_bt",a.b_class(t)]),type:"button",key:t,value:e,onClick:function(r){return a.m_click(e,t)}},null,10,B)})),128))])])}var L=r("c329");const z=i()(L["a"],[["render",T]]);var P=z,$=r("130e");r("7051");E.a.defaults.baseURL="https://personal-node-project.herokuapp.com/",Object(n["c"])(g).use(w).use(x).use($["a"],E.a).component("He-der",y).component("Menu",P).mount("#app")},"5e16":function(e,t,r){"use strict";r("4ae8")},c329:function(e,t,r){"use strict";(function(e){r("b0c0");t["a"]={data:function(){return{header_TF:!1,b_count:0}},methods:{m_click:function(t,r){this.$router.push({name:t.toLowerCase()}),this.$store.commit("menu_count",r),e("html, body").animate({scrollTop:0})},b_class:function(e){return this.$store.state.menu_bt==e?"h_E":""},load:function(){var e=this.$route.name;this.$store.commit("menu_count_load",e)}},mounted:function(){window.addEventListener("onload",this.load)},watch:{$route:function(e,t){this.load()}}}}).call(this,r("1157"))}});