(function(t){function a(a){for(var n,r,s=a[0],c=a[1],u=a[2],l=0,d=[];l<s.length;l++)r=s[l],i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(a);while(d.length)d.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,r=1;r<e.length;r++){var s=e[r];0!==i[s]&&(n=!1)}n&&(o.splice(a--,1),t=c(c.s=e[0]))}return t}var n={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-5b519a3c":"0e4568c9","chunk-130a923c":"5e5427e1","chunk-40a898a8":"4a4b0bc3","chunk-4f2468c3":"7efb12c0","chunk-7a6da3f8":"2ead7184","chunk-67993dc8":"59c27f51","chunk-7a694975":"6c5ea316","chunk-9e9d26b8":"229f6e7c"}[t]+".js"}function c(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var a=[],e={"chunk-130a923c":1,"chunk-4f2468c3":1,"chunk-7a6da3f8":1,"chunk-67993dc8":1,"chunk-7a694975":1,"chunk-9e9d26b8":1};r[t]?a.push(r[t]):0!==r[t]&&e[t]&&a.push(r[t]=new Promise(function(a,e){for(var n="css/"+({}[t]||t)+"."+{"chunk-5b519a3c":"31d6cfe0","chunk-130a923c":"5962d08e","chunk-40a898a8":"31d6cfe0","chunk-4f2468c3":"c51c15ad","chunk-7a6da3f8":"d1eba720","chunk-67993dc8":"6dd41b1c","chunk-7a694975":"341558c3","chunk-9e9d26b8":"b489b910"}[t]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return a()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.request=n,delete r[t],m.parentNode.removeChild(m),e(o)},m.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(m)}).then(function(){r[t]=0}));var n=i[t];if(0!==n)if(n)a.push(n[2]);else{var o=new Promise(function(a,e){n=i[t]=[a,e]});a.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(a){l.onerror=l.onload=null,clearTimeout(d);var e=i[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,e[1](o)}i[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(a)},c.m=t,c.c=n,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)c.d(e,n,function(a){return t[a]}.bind(null,n));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var m=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0706":function(t,a,e){"use strict";a["a"]={HOME:"home",IOT:"iot",FARMING:"farming",PLANT:"plant",WAREHOUSE:"warehouse",ORIGIN:"origin"}},"1a1e":function(t,a,e){"use strict";a["a"]={mapStyle:"amap://styles/darkblue",fm1MarkerImgUrl:{normal:"./images/fm1.png",active:"./images/fm1_active.png"},fm2MarkerImgUrl:{normal:"./images/fm2.png",active:"./images/fm2_active.png"},gunMarkerImgUrl:{normal:"./images/gun.png",active:"./images/gun_active.png"},wfMarkerImgUrl:{normal:"./images/wf.png",active:"./images/wf_active.png"},sphereMarkerImgUrl:{normal:"./images/sphere.png",active:"./images/sphere_active.png"},photoMarkerImgUrl:{normal:"./images/360.png",active:"./images/360_active.png"},iotMonitorMap:{center:[117.8689366,27.658368],zoom:14},proxyUrl:"https://proxy.yufengtek.com/",baseUrl:"https://tea.yufengtek.com/tea-IIS-Web",socketUrl:"wss://tea.yufengtek.com/tea-IIS-Web/myHandler"}},"56d7":function(t,a,e){"use strict";e.r(a);e("5c07"),e("53da"),e("2556"),e("d0f8");var n=e("6e6d"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{height:t.winHeight+"px"},attrs:{id:"app"}},[e("Sky"),e("NavMenu"),e("router-view",{style:{height:t.pageHeight+"px"}}),e("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},i=[],o=e("8e61"),s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spinner-wrap"},[e("div",{staticClass:"spinner"},[e("div",{staticClass:"spinner-container container1"},[e("div",{staticClass:"circle1"}),e("div",{staticClass:"circle2"}),e("div",{staticClass:"circle3"}),e("div",{staticClass:"circle4"})]),e("div",{staticClass:"spinner-container container2"},[e("div",{staticClass:"circle1"}),e("div",{staticClass:"circle2"}),e("div",{staticClass:"circle3"}),e("div",{staticClass:"circle4"})]),e("div",{staticClass:"spinner-container container3"},[e("div",{staticClass:"circle1"}),e("div",{staticClass:"circle2"}),e("div",{staticClass:"circle3"}),e("div",{staticClass:"circle4"})])])])}],u=e("17cc"),l={},d=Object(u["a"])(l,s,c,!1,null,null,null),m=d.exports,h={getFmsHourChartData:"./api-json/iot.hour.json",getFmsWeekChartData:"./api-json/iot.week.json",home:"/data/monitor/selectStation"},f=e("52c1"),p=e("eb57"),_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav-menu"},[t._m(0),e("ul",{staticClass:"menu"},[e("router-link",{attrs:{tag:"li",to:{name:"home"}}},[t._v("智慧全息")]),e("router-link",{attrs:{tag:"li",to:{name:"iot"}}},[t._v("物联监控")]),e("router-link",{attrs:{tag:"li",to:{name:"plant"}}},[t._v("种植分布")]),e("router-link",{attrs:{tag:"li",to:{name:"farming"}}},[t._v("农事活动")]),e("router-link",{attrs:{tag:"li",to:{name:"warehouse"}}},[t._v("出库入库")]),e("router-link",{attrs:{tag:"li",to:{name:"origin"}}},[t._v("溯源数据")])],1),e("AppTitle")],1)},T=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"logo"},[e("div",[t._v("智所未见 尽在未来")])])}],A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-title"},[e("canvas",{ref:"bg"}),e("h3",[t._v("武夷山市智慧茗园数据平台")])])},E=[],g=e("056e"),v=e.n(g),D={name:"app-title",mounted:function(){var t=this;t.$nextTick(function(){t.draw(),window.addEventListener("resize",t.draw)})},methods:{draw:function(){var t=this,a=window.getComputedStyle(t.$el,null),e=v()(a.width),n=v()(a.height);if(isNaN(e)||isNaN(n))setTimeout(function(){t.draw()},1e3);else{var r=t.$refs.bg;r.width=e,r.height=n;var i=r.getContext("2d"),o=e-2,s=n-1;i.clearRect(0,0,e,n),i.beginPath(),i.strokeStyle="rgba(53, 121, 255, 0.25)",i.lineWidth=2,i.moveTo(o,s),i.lineTo(24,s),i.lineTo(0,49.5),i.stroke(),i.beginPath(),i.lineWidth=4,i.moveTo(19,s-9),i.lineTo(o,s-9),i.stroke(),i.beginPath(),i.lineWidth=6,i.moveTo(0,s-1),i.lineTo(6,s-1),i.stroke()}}},beforeDestroy:function(){var t=this;window.removeEventListener("resize",t.draw)}},O=D,b=Object(u["a"])(O,A,E,!1,null,null,null),w=b.exports,S={name:"NavMenu",components:{AppTitle:w}},F=S,y=Object(u["a"])(F,_,T,!1,null,null,null),R=y.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("canvas",{staticClass:"app-bg"})},C=[],N=(e("244e"),e("7aaf")),G=e("1deb"),k=680;function H(t,a){if(arguments.length<2&&(a=t,t=0),t>a){var e=a;a=t,t=e}return Math.floor(Math.random()*(a-t+1))+t}function U(t,a){var e=Math.max(t,a),n=Math.round(Math.sqrt(e*e+e*e));return n/2}var M,P=function(){function t(a,e,n,r,i){Object(N["a"])(this,t),this.ctx=n,this.ctx2=r,this.canvas2=i,this.orbitRadius=H(U(a,e)),this.radius=H(60,this.orbitRadius)/15,this.radius>19&&(this.radius=19),this.orbitX=a/2,this.orbitY=e/2,this.timePassed=H(0,k),this.speed=H(this.orbitRadius)/605e3,this.alpha=H(2,10)/10}return Object(G["a"])(t,[{key:"draw",value:function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,a=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY;this.ctx.globalAlpha=this.alpha,this.ctx.drawImage(this.canvas2,t-this.radius/2,a-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed}}]),t}(),x=window,L={data:function(){return{stars:[],ctx:null,hue:0,w:0,h:0,requestId:null}},created:function(){console.log(x.requestAnimationFrame),x.requestAnimationFrame=x.requestAnimationFrame||x.webkitRequestAnimationFrame||x.mozRequestAnimationFrame||x.msRequestAnimationFrame,x.cancelAnimationFrame=x.cancelAnimationFrame||x.webkitCancelAnimationFrame||x.mozCancelAnimationFrame||x.msCancelAnimationFrame},mounted:function(){var t=this;t.$nextTick(function(){var a=t.$el;t.ctx=a.getContext("2d"),t.draw()}),x.addEventListener("resize",t.doResize)},methods:{doResize:function(){var t=this;t.requestId&&x.cancelAnimationFrame(t.requestId),t.ctx.clearRect(0,0,t.w,t.h),t.draw()},draw:function(){var t=this,a=t.$el,e=t.ctx,n=t.w=a.width=window.innerWidth,r=t.h=a.height=window.innerHeight,i=t.hue=217,o=680,s=document.createElement("canvas"),c=s.getContext("2d");s.width=100,s.height=100;var u=s.width/2,l=c.createRadialGradient(u,u,0,u,u,u);l.addColorStop(.025,"#fff"),l.addColorStop(.1,"hsl("+i+", 61%, 33%)"),l.addColorStop(.25,"hsl("+i+", 64%, 6%)"),l.addColorStop(1,"transparent"),c.fillStyle=l,c.beginPath(),c.arc(u,u,u,0,2*Math.PI),c.fill(),t.stars=[];for(var d=0;d<o;d++)t.stars.push(new P(n,r,e,c,s));t.animation()},animation:function(){var t=this,a=t.ctx;a.globalCompositeOperation="source-over",a.globalAlpha=.8,a.fillStyle="hsla("+t.hue+", 64%, 6%, 0.9)",a.fillRect(0,0,t.w,t.h),a.globalCompositeOperation="lighter";for(var e=1,n=t.stars.length;e<n;e++)t.stars[e].draw();t.requestId=x.requestAnimationFrame(t.animation)}},beforeDestroy:function(){var t=this;t.requestId&&x.cancelAnimationFrame(t.requestId),window.removeEventListener("onresize",t.doResize)}},j=L,W=Object(u["a"])(j,I,C,!1,null,null,null),Y=W.exports,q={name:"app",components:{Spinner:m,NavMenu:R,Sky:Y},data:function(){return{}},computed:Object(o["a"])({},Object(f["c"])(["loading","winHeight","screenFullState"]),{pageHeight:function(){var t=this.$store.state,a=t.winHeight-105;return a>540?a:540}}),created:function(){var t=this,a=t.$store,e=window;e.addEventListener("resize",function(){a.commit(p["a"].GET_WINDOW_SIZE)}),a.commit(p["a"].GET_WINDOW_SIZE)}},z=q,V=(e("5c0b"),Object(u["a"])(z,r,i,!1,null,null,null)),$=V.exports,K=(e("3a23"),e("44f7")),B=window,Z=document,J=(M={},Object(K["a"])(M,p["a"].SWITCH_LOADING,function(t,a){t.loading=a}),Object(K["a"])(M,p["a"].SWITCH_SCREEN_FULL,function(t,a){t.screenFullState=a}),Object(K["a"])(M,p["a"].GET_WINDOW_SIZE,function(t){t.winHeight=Z.documentElement.clientHeight||B.innerHeight,t.winWidth=Z.documentElement.clientWidth||B.innerWidth,Z.body.style.minHeight=t.winHeight+"px",t.windowResizeState=t.windowResizeState+1}),Object(K["a"])(M,p["a"].SET_CURR_ROUTER,function(t,a){var e=t.currRouter;e.from=a.from,e.to=a.to,e.query=a.query,e.instance=a.instance,e.to||(t.loading=!1,t.screenFullState=!1)}),M),Q=e("0706"),X=(e("44a2"),e("ab56"),e("a59e")),tt=e.n(X),at=e("7f43"),et=e.n(at),nt=e("1a1e"),rt=e("0e4f");et.a.defaults.baseURL="",et.a.interceptors.request.use(function(t){return t},function(t){return tt.a.reject(t)}),et.a.interceptors.response.use(function(t){return tt.a.resolve(t)},function(t){return tt.a.reject(t)});var it,ot,st,ct,ut,lt,dt,mt,ht,ft=function(t){return/post/i.test(t.method)&&!t.headers&&(t.headers={"Content-Type":"application/x-www-form-urlencoded"},t.data=rt.stringify(t.data)),/json/.test(t.url)||(t.url=nt["a"].baseUrl+t.url),new tt.a(function(a,e){et.a.request(t).then(function(t){a(t.data)},function(t){e(t)})})},pt=Object(K["a"])({},p["a"].HOME_GET_AMOUNT_RANK_DATA,function(t,a){var e=a?{addr:a||""}:"";ft({url:"/bigdata/home/detail",method:"post",data:e}).then(function(a){t.state.amountRankDatas=a.repData.planting.sort(function(t,a){return t.area>a.area?1:-1}),t.state.farmingActdatas=a.repData.fertiliz.map(function(t){return{label:t.month,value:t.weight}});var e=0;t.state.pickDatas=a.repData.picking.map(function(t){return e=t.amount,{label:t.classify,value:e}}),t.state.teaTotalAmount=null==a.repData.totalPicking||0==a.repData.totalPicking.length?t.state.teaTotalAmount:a.repData.totalPicking;var n={};n.in=0==a.repData.inStock.length?t.state.warehouseDatas.in:a.repData.inStock,n.out=0==a.repData.inStock.length?t.state.warehouseDatas.out:a.repData.outStock,t.state.warehouseDatas=n;var r=a.repData.origin.map(function(t){return{value:t.counts,name:t.cityname}});t.state.cityDatas=r,t.state.cameraAmount=a.repData.cameraCount.count,t.state.monitorAmount=a.repData.fielddstation.count,t.state.waterFertilizerAmount=0,t.state.levelDatas=a.repData.craft})}),_t=(it={},Object(K["a"])(it,p["a"].HOME_CHANGE_CURR_REGION,function(t,a){t.currSelectedRegion=a}),Object(K["a"])(it,p["a"].HOME_CHANGE_FULL_STATE,function(t,a){t[a.fullStateName]=a.state}),it),Tt={namespaced:!0,state:{cameraAmount:0,monitorAmount:0,waterFertilizerAmount:0,farmingActdatas:[],pickDatas:[],teaTotalAmount:"",levelDatas:[],amountRankUnit:"亩",amountRankDatas:[],warehouseUnit:"吨",warehouseDatas:[],cityDatas:[],currSelectedRegion:"",amountRankFullState:!1,farmingInfoFullState:!1,pickInfoFullState:!1,warehouseFullState:!1,originDataFullState:!1,levelInfoFullState:!1,mapFullState:!1},actions:pt,mutations:_t},At=(e("f91a"),e("48fb"),e("4ccc"),e("612f"),e("0b9e"),ot={},Object(K["a"])(ot,p["a"].GET_IOT_DATA,function(t,a){ft({url:"/data/monitor/selectStation",method:"post"}).then(function(e){e.repData.cameraVos.forEach(function(t){t.type="1"==t.camera_type?p["a"].IOT_TYPE_GUN:p["a"].IOT_TYPE_360,t.isActive=!1}),e.repData.emVos.forEach(function(t){t.type=p["a"].IOT_TYPE_SPHERE,t.isActive=!1}),e.repData.Fm1.forEach(function(t){t.type=p["a"].IOT_TYPE_FM1,t.isActive=!1}),e.repData.Fm2.forEach(function(t){t.type=p["a"].IOT_TYPE_FM2,t.isActive=!1});var n=[],r=0;if(a)if("camera"==a){n=e.repData.cameraVos,n.map(function(t,a){t.index=a});for(var i=0;i<n.length;){if("1"==n[i].camera_type){r=i;break}i++}t.state.camera=e.repData.cameraVos[r],t.commit(p["a"].CHANGE_ACTIVE_MARKER,{id:r,type:p["a"].IOT_TYPE_GUN}),t.dispatch(p["a"].GET_GUN_DATA,e.repData.cameraVos[r])}else n=e.repData.Fm1.concat(e.repData.emVos).concat(e.repData.Fm2),n.map(function(t,a){t.index=a}),t.dispatch(p["a"].GET_FM1_DATA,n[0].sno),t.commit(p["a"].CHANGE_ACTIVE_MARKER,{id:0,type:p["a"].IOT_TYPE_FM1});else n=e.repData.Fm1.concat(e.repData.emVos).concat(e.repData.Fm2).concat(e.repData.cameraVos),n.map(function(t,a){t.index=a}),t.dispatch(p["a"].GET_FM1_DATA,n[0].sno),t.dispatch(p["a"].GET_FM1_CHART_DATA);n[r].isActive=!0,t.state.cameraAmount=e.repData.cameraVos.length,t.state.monitorAmount=e.repData.Fm1.length+e.repData.Fm2.length+e.repData.emVos.length,t.state.iotDatas=n})}),Object(K["a"])(ot,p["a"].GET_FM1_DATA,function(t,a){var e=t.state,n=e.fm1,r=e.fm1.time,i=e.fm1.type;t.state.fm1.sno=a||t.state.fm1.sno,ft({url:"/data/monitor/getflddata?sno="+t.state.fm1.sno,method:"post"}).then(function(t){if("HOUR"==r){t.repData.todayData.length;var a=[];"temperature"==i?(t.repData.todayData.forEach(function(t){return a.push({title:t.flddata_txtime,data:t.flddata_temp}),a}),e.fm1.chartDatas=a):"humidity"==i?(t.repData.todayData.forEach(function(t){return a.push({title:t.flddata_txtime,data:t.flddata_humid}),a}),e.fm1.chartDatas=a):"light"==i?(t.repData.todayData.forEach(function(t){return a.push({title:t.flddata_txtime,data:t.flddata_sunlux}),a}),e.fm1.chartDatas=a):"pressure"==i&&(t.repData.todayData.forEach(function(t){return a.push({title:t.flddata_txtime,data:t.flddata_pa}),a}),e.fm1.chartDatas=a)}else if("WEEK"==r){var o=t.repData.sevenData.length-1;n.data.temperature=t.repData.sevenData[o].flddata_temp.toFixed(2),n.data.humidity=t.repData.sevenData[o].flddata_humid.toFixed(2),n.data.light=t.repData.sevenData[o].flddata_sunlux.toFixed(2),n.data.pressure=t.repData.sevenData[o].flddata_pa.toFixed(2);var s=[];"temperature"==i?(t.repData.sevenData.forEach(function(t){return s.push({title:t.days,data:t.flddata_temp.toFixed(2)}),s}),e.fm1.chartDatas=s):"humidity"==i?(t.repData.sevenData.forEach(function(t){return s.push({title:t.days,data:t.flddata_humid.toFixed(2)}),s}),e.fm1.chartDatas=s):"light"==i?(t.repData.sevenData.forEach(function(t){return s.push({title:t.days,data:t.flddata_sunlux.toFixed(2)}),s}),e.fm1.chartDatas=s):"pressure"==i&&(t.repData.sevenData.forEach(function(t){return s.push({title:t.days,data:t.flddata_pa.toFixed(2)}),s}),e.fm1.chartDatas=s)}})}),Object(K["a"])(ot,p["a"].GET_FM1_CHART_DATA,function(t){var a=t.state,e=a.fm1,n=a.fm1.time;ft({url:"/data/momitor/getflddataLast?sno="+t.state.fm1.sno,method:"post"}).then(function(t){"HOUR"==n&&(e.data.temperature=t.repData.data.flddata_temp,e.data.humidity=t.repData.data.flddata_humid,e.data.light=t.repData.data.flddata_sunlux,e.data.pressure=t.repData.data.flddata_pa)})}),Object(K["a"])(ot,p["a"].GET_FM2_DATA,function(t,a){var e=t.state,n=e.fm2,r=e.fm2.time,i=e.fm2.type;t.state.fm2.sno=a||t.state.fm2.sno,ft({url:"/data/monitor/getFmbData?sno="+t.state.fm2.sno,method:"post"}).then(function(t){if("HOUR"==r){var a=t.repData.todayData.length-1;n.data.temperature=t.repData.todayData[a].soiltemp.toString(),n.data.humidity=v()(t.repData.todayData[a].soilmture).toFixed(2),n.data.wind=v()(t.repData.todayData[a].windspd).toFixed(2),n.data.rain=v()(t.repData.todayData[a].rain).toFixed(2);var o=[];"temperature"==i?(t.repData.todayData.forEach(function(t){return o.push({title:t.txtime,data:v()(t.soiltemp).toFixed(2)}),o}),e.fm2.chartDatas=o):"humidity"==i?(t.repData.todayData.forEach(function(t){return o.push({title:t.txtime,data:v()(t.soilmture).toFixed(2)}),o}),e.fm2.chartDatas=o):"wind"==i?(t.repData.todayData.forEach(function(t){return o.push({title:t.txtime,data:v()(t.windspd).toFixed(2),rotate:v()(t.winddir).toFixed(2)}),o}),e.fm2.chartDatas=o):"rain"==i&&(t.repData.todayData.forEach(function(t){return o.push({title:t.txtime,data:v()(t.rain).toFixed(2)}),o}),e.fm2.chartDatas=o)}else if("WEEK"==r){var s=t.repData.sevenData.length-1;n.data.temperature=v()(t.repData.sevenData[s].soiltemp).toFixed(2),n.data.humidity=v()(t.repData.sevenData[s].soilmture).toFixed(2),n.data.wind=v()(t.repData.sevenData[s].windspd).toFixed(2),n.data.rain=v()(t.repData.sevenData[s].rain).toFixed(2);var c=[];"temperature"==i?(t.repData.sevenData.forEach(function(t){return c.push({title:t.days,data:v()(t.soiltemp).toFixed(2)}),c}),e.fm2.chartDatas=c):"humidity"==i?(t.repData.sevenData.forEach(function(t){return c.push({title:t.days,data:v()(t.soilmture).toFixed(2)}),c}),e.fm2.chartDatas=c):"wind"==i?(t.repData.sevenData.forEach(function(t){return c.push({title:t.days,data:v()(t.windspd).toFixed(2),rotate:v()(t.winddir).toFixed(2)}),c}),e.fm2.chartDatas=c):"rain"==i&&(t.repData.sevenData.forEach(function(t){return c.push({title:t.days,data:v()(t.rain).toFixed(2)}),c}),e.fm2.chartDatas=c)}})}),Object(K["a"])(ot,p["a"].GET_FM2_CHART_DATA,function(t){var a=t.state,e=a.fm2,n=a.fm2.time;ft({url:"/data/momitor/getFmbDataLast?sno="+t.state.fm2.sno,method:"post"}).then(function(t){"HOUR"==n&&(e.data.temperature=v()(t.repData.data.soiltemp).toFixed(2),e.data.humidity=v()(t.repData.data.soilmture).toFixed(2),e.data.wind=v()(t.repData.data.windspd).toFixed(2),e.data.rain=v()(t.repData.data.rain).toFixed(2))})}),Object(K["a"])(ot,p["a"].GET_WF_DATA,function(t){var a=t.state,e=a.wf;setTimeout(function(){e.data.ec=(2e3*Math.random()).toFixed(2),e.data.ph=(14*Math.random()).toFixed(0),e.data.water=(5e3*Math.random()).toFixed(1),e.data.fertilizer=(3e3*Math.random()).toFixed(1)},1200)}),Object(K["a"])(ot,p["a"].GET_WF_CHART_DATA,function(t){var a=t.state,e=a.wf.time,n=a.wf.type,r=50;"ec"==n?r=2e3:"ph"==n?r=14:"water"==n?r=5e3:"fertilizer"==n&&(r=3e3),"HOUR"==e?ft({url:h.getFmsHourChartData}).then(function(t){var e=t.todayBrokenLineList||[];a.wf.chartDatas=e.map(function(t){return{title:"water"==n||"fertilizer"==n?t.month:t.template_txdate,data:v()(r*Math.random())}})}):"WEEK"==e&&ft({url:h.getFmsWeekChartData}).then(function(t){var e=t.weekDayBrokenLineList||[];a.wf.chartDatas=e.map(function(t){return{title:"water"==n||"fertilizer"==n?t.month:t.template_txdate,data:v()(r*Math.random())}})})}),Object(K["a"])(ot,p["a"].CHANGE_PHOTO_VIEW_URL,function(t,a){ft({url:"/data/monitor/getemdata?em_devid="+a,method:"post"}).then(function(a){var e=a.repData[11].replace(/http/,"https");t.state.photoViewUrl=e||t.state.photoViewUrl})}),Object(K["a"])(ot,p["a"].GET_GUN_DATA,function(t,a){t.state.camera=a,t.state.videoUrl=t.state.camera.camera_url}),Object(K["a"])(ot,p["a"].GET_360_DATA,function(t,a){t.state.camera=a,t.state.videoUrl360=t.state.camera.camera_url}),Object(K["a"])(ot,p["a"].CHANGE_GUN_DIRECTION,function(t,a){var e=t.state.camera.camera_sno;"up"==a?ft({url:"/data/momitor/CameraStop?sno="+e,method:"post"}).then(function(t){console.log(t)}):ft({url:"/data/momitor/CameraRun?sno="+e+"&direction="+v()(a),method:"post"}).then(function(t){console.log(t)})}),ot),Et=(st={},Object(K["a"])(st,p["a"].CHANGE_ACTIVE_MARKER,function(t,a){var e=t.currActive;e.id=a.id,e.type=a.type}),Object(K["a"])(st,p["a"].SWITCH_FM1_TYPE,function(t,a){var e=t.fm1;e.type=a.value,e.name=a.name,"temperature"==a.value?e.chartUnit="℃":"humidity"==a.value?e.chartUnit="%":"light"==a.value?e.chartUnit="Lux":"pressure"==a.value&&(e.chartUnit="Pa")}),Object(K["a"])(st,p["a"].SWITCH_FM1_TIME_TYPE,function(t,a){t.fm1.time=a}),Object(K["a"])(st,p["a"].SWITCH_FM2_TYPE,function(t,a){var e=t.fm2;e.type=a.value,e.name=a.name,"temperature"==a.value?e.chartUnit="℃":"humidity"==a.value?e.chartUnit="%":"wind"==a.value?e.chartUnit="m/s":"rain"==a.value&&(e.chartUnit="mm")}),Object(K["a"])(st,p["a"].SWITCH_FM2_TIME_TYPE,function(t,a){t.fm2.time=a}),Object(K["a"])(st,p["a"].SWITCH_WF_TYPE,function(t,a){var e=t.wf;e.type=a.value,e.name=a.name,"ec"==a.value?e.chartUnit="mS/cm":"ph"==a.value?e.chartUnit="":"water"==a.value?e.chartUnit="L":"fertilizer"==a.value&&(e.chartUnit="kg")}),Object(K["a"])(st,p["a"].SWITCH_WF_TIME_TYPE,function(t,a){t.wf.time=a}),Object(K["a"])(st,p["a"].IOT_CHANGE_FULL_STATE,function(t,a){t[a.fullStateName]=a.state}),st),gt={namespaced:!0,state:{cameraAmount:0,monitorAmount:0,waterFertilizerAmount:0,iotDatas:[],camera:[],emVos:[],Fm1:[],Fm2:[],photoViewUrl:"./360/01.jpg",currActive:{type:p["a"].IOT_TYPE_FM1,id:0},fm1:{type:"temperature",name:"温度",chartUnit:"℃",time:"HOUR",data:{temperature:"12.13",humidity:"52.7",light:"9987.0",pressure:"988.51"},sno:"",chartDatas:[],curveChartFullState:!1},fm2:{type:"wind",name:"风速",chartUnit:"m/s",time:"HOUR",data:{wind:"12",rain:"52",temperature:"17",humidity:"16"},sno:"",chartDatas:[],curveChartFullState:!1},wf:{type:"ec",name:"EC",chartUnit:"mS/cm",time:"HOUR",data:{ec:"12",ph:"7",water:"17",fertilizer:"16"},chartDatas:[],curveChartFullState:!1},photoViewerFullState:!1,camera360FullState:!1,videoUrl:"",videoUrl360:"",display:"",mapSise:14},actions:At,mutations:Et},vt=Object(K["a"])({},p["a"].PLANT_GET_STAT_DATA,function(t,a){var e=a?{addr:a||""}:"",n=[{label:"山场总数",data:"1322",unit:"家"},{label:"种植面积",data:"14.2万",unit:"亩"},{label:"预估产量",data:"1988",unit:"吨"}];ft({url:"/bigdata/plant/detail",method:"post",data:e}).then(function(a){var e=a.repData;n[0].data=null==e.gardenCount?0:e.gardenCount,n[1].data=null==e.gardenArea?0:e.gardenArea,t.state.totalData=n,t.state.treeAgeDistributeDatas=e.treeAge,t.state.varietiesDatas=e.treeVarieties;for(var r=0,i=0;i<e.treeVarieties.length;i++)r=e.treeVarieties[i].area+r;t.state.varietiesTotalData=r.toFixed(2),t.state.amountRankDatas=e.plantRanking,t.state.teaFarmTypeDatas=e.plantQuality;for(var o=0,s=0;s<e.plantQuality.length;s++)o=e.plantQuality[s].area+o;t.state.farmTotalArea=o.toFixed(2)})}),Dt=(ct={},Object(K["a"])(ct,p["a"].PLANT_CHANGE_CURR_REGION,function(t,a){t.currSelectedRegion=a}),Object(K["a"])(ct,p["a"].PLANT_CHANGE_FULL_STATE,function(t,a){t[a.fullStateName]=a.state}),ct),Ot={namespaced:!0,state:{currSelectedRegion:"",amountRankUnit:"亩",amountRankDatas:[],farmTotalArea:0,teaFarmTypeDatas:[],varietiesTotalData:0,varietiesDatas:[],treeAgeDistributeUnit:"亩",treeAgeDistributeDatas:[],totalData:[],totalDataFullState:!1,treeAgeFullState:!1,teaVarietiesFullState:!1,plantRankFullState:!1,teaFarmFullState:!1,mapFullState:!1},actions:vt,mutations:Dt},bt=Object(K["a"])({},p["a"].FARMING_GET_PLANT_ACT_DATA,function(t,a){var e=a?{address_country:"",address_town:a||""}:{address_country:"",address_town:""};ft({url:"/data/farm/getData",method:"post",data:e}).then(function(a){200==a.code&&(t.state.plantActPieDatas=a.repData.yearPlant,t.state.plantActLineDatas=a.repData.monthPlant,t.state.fertilizerActPieDatas=a.repData.yearFaramA,t.state.fertilizerActLineDatas=a.repData.monthFaramA,t.state.protectionActPieDatas=a.repData.yearFaramB,t.state.protectionActLineDatas=a.repData.monthFaramB)})}),wt=(ut={},Object(K["a"])(ut,p["a"].FARMING_CHANGE_CURR_REGION,function(t,a){t.currSelectedRegion=a}),Object(K["a"])(ut,p["a"].FARMING_CHANGE_FULL_STATE,function(t,a){t[a.fullStateName]=a.state}),ut),St={namespaced:!0,state:{currSelectedRegion:"",plantActPieDatas:[],plantActLineDatas:[],fertilizerActPieDatas:[],fertilizerActLineDatas:[],protectionActPieDatas:[],protectionActLineDatas:[],mapFullState:!1,plantFullState:!1,protectionFullState:!1,fertilizerFullState:!1},actions:bt,mutations:wt},Ft=Object(K["a"])({},p["a"].WAREHOUSE_GET_TODAY_DATA,function(t,a){var e=a?{addr:a||""}:"";ft({url:"/bigdata/warehouse/detail",method:"post",data:e}).then(function(a){if(200==a.code){var e=a.repData;t.state.toDayInAmount=e.inStock?e.inStock.weight:0,t.state.toDayOutAmount=e.outStock?e.outStock.weight:0,t.state.thisYearInDatas=e.thisYearInStock.map(function(t){return{label:t.omonth,value:t.weight}}),t.state.thisYearOutDatas=e.thisYearOutStock.map(function(t){return{label:t.omonth,value:t.weight}});var n=[],r=[],i=[{omonth:"1月",weight:0},{omonth:"2月",weight:0},{omonth:"3月",weight:0},{omonth:"4月",weight:0},{omonth:"5月",weight:0},{omonth:"6月",weight:0},{omonth:"7月",weight:0},{omonth:"8月",weight:0},{omonth:"9月",weight:0},{omonth:"10月",weight:0},{omonth:"11月",weight:0},{omonth:"12月",weight:0}],o=(new Date).getFullYear(),s=i;n.push({year:o-1,list:s}),n.push({year:o,list:e.thisYearInStock}),t.state.historyInDatas=n.map(function(t){return{year:t.year.toString(),list:t.list.map(function(t){return{label:t.omonth,value:t.weight}})}}),0!=e.lastYearOutStock.length&&e.lastYearOutStock!=[]&&(r.push({year:o-1,list:s}),r.push({year:o,list:e.thisYearOutStock}),t.state.historyOutDatas=r.map(function(t){return{year:t.year.toString(),list:t.list.map(function(t){return{label:t.omonth,value:t.weight}})}}))}})}),yt=(lt={},Object(K["a"])(lt,p["a"].WAREHOUSE_CHANGE_CURR_REGION,function(t,a){t.currSelectedRegion=a}),Object(K["a"])(lt,p["a"].WAREHOUSE_CHANGE_FULL_STATE,function(t,a){t[a.fullStateName]=a.state}),lt),Rt={namespaced:!0,state:{currSelectedRegion:"",toDayInAmount:0,toDayOutAmount:0,thisYearInDatas:[],thisYearOutDatas:[],historyInDatas:[],historyOutDatas:[],mapFullState:!1,inCircleChartFullState:!1,outCircleChartFullState:!1,inLineChartFullState:!1,outLineChartFullState:!1,inConstrastFullState:!1,outConstrastFullState:!1},actions:Ft,mutations:yt},It=(dt={},Object(K["a"])(dt,p["a"].GET_ORIGIN_DATA,function(t){ft({url:"/bigdata/origin/detail",method:"post"}).then(function(a){t.state.cityDatas=a.repData.originCity.map(function(t){return{value:t.count,name:t.city}}),t.state.countStatDatas=a.repData.originCount;var e=[];a.repData.originCity.map(function(t,a){e[a]=[t.latitude,t.longitude]}),t.state.mapDatas=a.repData.originCity.map(function(t,a){return{value:e[a].concat(t.count),name:t.city}})})}),Object(K["a"])(dt,p["a"].GET_ORIGIN_LIST_DATA,function(t,a){1==a.currentPage&&(t.state.addressList=[]);var e={currentPage:a.currentPage,originDate:a.originDate||""};ft({url:"/bigdata/origin/pageList",method:"post",data:e}).then(function(e){200==e.code&&(t.state.addressList=e.repData.originList,t.state.totalPage=e.repData.pageInfo.totalPages,t.state.currentPage=a.currentPage,t.state.originDate=a.originDate)})}),dt),Ct=(mt={},Object(K["a"])(mt,p["a"].ORIGIN_CHANGE_FULL_STATE,function(t,a){t[a.fullStateName]=a.state}),Object(K["a"])(mt,p["a"].ORIGIN_REAL_TIME_DATA,function(t,a){var e=a.type,n=a.data;1==e?t.addressList[0].list.unshift(n):2==e&&t.addressList.unshift(n)}),mt),Nt={namespaced:!0,state:{cityDatas:[],countStatDatas:[],addressList:[],totalPage:1,currentPage:1,originDate:"",mapDatas:[],mapFullState:!1,cityRankFullState:!1,countStateFullState:!1},actions:It,mutations:Ct},Gt=(ht={},Object(K["a"])(ht,Q["a"].HOME,Tt),Object(K["a"])(ht,Q["a"].IOT,gt),Object(K["a"])(ht,Q["a"].PLANT,Ot),Object(K["a"])(ht,Q["a"].FARMING,St),Object(K["a"])(ht,Q["a"].WAREHOUSE,Rt),Object(K["a"])(ht,Q["a"].ORIGIN,Nt),ht);n["default"].use(f["b"]);var kt=new f["b"].Store({state:{winHeight:0,winWidth:0,currRouter:{from:"",to:"",query:null,instance:null},chartFullPage:!1,loading:!1,screenFullState:!1,windowResizeState:0},mutations:J,modules:Gt}),Ht=e("081a");n["default"].use(Ht["a"]);var Ut=new Ht["a"]({base:"",linkActiveClass:"active",routes:[{path:"/home",name:"home",component:function(){return Promise.all([e.e("chunk-5b519a3c"),e.e("chunk-40a898a8"),e.e("chunk-4f2468c3")]).then(e.bind(null,"8a00"))}},{path:"/iot",name:"iot",component:function(){return Promise.all([e.e("chunk-5b519a3c"),e.e("chunk-130a923c")]).then(e.bind(null,"ecf9"))}},{path:"/plant",name:"plant",component:function(){return Promise.all([e.e("chunk-5b519a3c"),e.e("chunk-9e9d26b8")]).then(e.bind(null,"3501"))}},{path:"/farming",name:"farming",component:function(){return Promise.all([e.e("chunk-5b519a3c"),e.e("chunk-67993dc8")]).then(e.bind(null,"af20"))}},{path:"/warehouse",name:"warehouse",component:function(){return Promise.all([e.e("chunk-5b519a3c"),e.e("chunk-7a694975")]).then(e.bind(null,"bc30"))}},{path:"/origin",name:"origin",component:function(){return Promise.all([e.e("chunk-5b519a3c"),e.e("chunk-40a898a8"),e.e("chunk-7a6da3f8")]).then(e.bind(null,"7f36"))}},{path:"*",redirect:{name:"home"}}]});Ut.beforeEach(function(t,a,e){kt.commit({type:p["a"].SET_CURR_ROUTER,from:a.name,to:t.name,query:t.query,instance:Ut}),t.name&&t.name!==a.name&&kt.commit(p["a"].SWITCH_LOADING,!0),e(!0)});var Mt=Ut,Pt=e("ff8e"),xt=e.n(Pt),Lt=(e("dc54"),e("07cd"),e("18da"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"plane",class:{"full-screen":t.full}},[e("canvas",{ref:"bg"}),t._t("default")],2)}),jt=[],Wt=["rgba(53, 121, 255, 0.15)","rgba(18, 35, 87, 0.5)","rgba(53, 121, 255, 0.2)"],Yt={name:"Plane",props:{full:{type:Boolean,default:!1}},watch:{full:function(){var t=this;setTimeout(function(){t.draw()},500)}},mounted:function(){var t=this;t.$nextTick(function(){t.draw(),window.addEventListener("resize",t.draw)})},methods:{draw:function(){var t=this,a=t.$el,e=getComputedStyle(a,null),n=v()(e.width),r=v()(e.height);if(isNaN(n)||isNaN(r))setTimeout(function(){t.draw()},1e3);else{var i=t.$refs.bg;i.width=n,i.height=r;var o=i.getContext("2d");o.clearRect(0,0,n,r);var s=4,c=.5;o.strokeStyle=Wt[0],o.fillStyle=Wt[1],o.lineWidth=1,o.beginPath(),o.moveTo(s,c),o.lineTo(n-s-.5,c),o.quadraticCurveTo(n-.5,c,n-.5,c+s),o.lineTo(n-.5,r-s),o.quadraticCurveTo(n-.5,r-.5,n-s-.5,r-.5),o.lineTo(s,r-.5),o.quadraticCurveTo(.5,r-.5,.5,r-s-.5),o.lineTo(.5,s),o.quadraticCurveTo(.5,c,s,c),o.stroke(),o.fill();var u=9;o.strokeStyle=Wt[2],o.lineWidth=2,o.beginPath(),o.moveTo(.5,s+u),o.lineTo(.5,s),o.quadraticCurveTo(.5,c,s,c),o.lineTo(s+u,c),o.moveTo(n-s-.5-u,c),o.lineTo(n-s-.5,c),o.quadraticCurveTo(n-.5,c,n-.5,c+s),o.lineTo(n-.5,c+s+u),o.moveTo(n-.5,r-s-u),o.lineTo(n-.5,r-s),o.quadraticCurveTo(n-.5,r-.5,n-s-.5,r-.5),o.lineTo(n-s-.5-u,r-.5),o.moveTo(s+u,r-.5),o.lineTo(s,r-.5),o.quadraticCurveTo(.5,r-.5,.5,r-s-.5),o.lineTo(.5,r-s-.5-u),o.stroke()}}},beforeDestroy:function(){var t=this;window.removeEventListener("resize",t.draw)}},qt=Yt,zt=Object(u["a"])(qt,Lt,jt,!1,null,null,null),Vt=zt.exports,$t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",{staticClass:"plane-title"},[e("i"),t._t("default")],2)},Kt=[],Bt={},Zt=Object(u["a"])(Bt,$t,Kt,!1,null,null,null),Jt=Zt.exports,Qt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-tools"},[e("i",{staticClass:"iconfont full-icon",domProps:{innerHTML:t._s(t.full?"&#xe621;":"&#xe629;")},on:{click:function(a){return t.change()}}}),e("i",{staticClass:"iconfont download-icon",on:{click:function(a){return t.download()}}},[t._v("")])])},Xt=[],ta={name:"PlaneTools",props:{full:{type:Boolean,default:!1}},methods:{change:function(){var t=this;t.$emit("change",!t.full)},download:function(){var t=this,a=t.$el,e=a.parentNode,n=e.querySelectorAll(".plane-content canvas");if(n.length||(n=e.querySelectorAll(".wuyishan-map-container canvas")),n.length){var r=e.querySelector(".plane-title"),i=r?r.innerText:Math.random().toString(36).substr(2),o=0,s=0;n.forEach(function(t){t.height>s&&(s=t.height),o+=t.width}),o+=40+10*(n.length-1),s+=40;var c=document.createElement("canvas");c.width=o,c.height=s;var u=c.getContext("2d");u.fillStyle="rgba(18, 35, 87, 0.98)",u.fillRect(0,0,o,s);for(var l=20,d=null,m=0;m<n.length;m++)d=n[m],u.drawImage(d,l,20,d.width,d.height),l=l+d.width+10;var h=document.createElement("a");h.download=i,h.href=c.toDataURL("image/png"),document.body.appendChild(h),h.click(),h.remove()}}}},aa=ta,ea=Object(u["a"])(aa,Qt,Xt,!1,null,null,null),na=ea.exports,ra=e("71cb"),ia=new WebSocket(nt["a"].socketUrl);ia.onopen=function(t){console.log("web socket open...")},ia.onmessage=function(t){console.log("on message....",t);var a=Object(ra["a"])(t.data),e=kt.state[Q["a"].ORIGIN];if("string"==a)try{var n=JSON.parse(t.data);e.addressList[0]&&n.date==e.addressList[0].date?kt.commit(Q["a"].ORIGIN+"/"+p["a"].ORIGIN_REAL_TIME_DATA,{type:1,data:n}):kt.commit(Q["a"].ORIGIN+"/"+p["a"].ORIGIN_REAL_TIME_DATA,{type:2,data:{date:n.date,list:[n]}})}catch(r){console.log(t.data,r)}},ia.onerror=function(t){console.log("socket error....",t)},ia.onclose=function(t){console.log("socket close....",t)},ia.send=function(t){console.log("send successful...",t)};var oa=ia;n["default"].config.productionTip=!1,n["default"].prototype.$ajax=ft,n["default"].prototype.$socket=oa,n["default"].use(xt.a),n["default"].component("Plane",Vt),n["default"].component("PlaneTitle",Jt),n["default"].component("PlaneTools",na),new n["default"]({router:Mt,store:kt,render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var n=e("7508"),r=e.n(n);r.a},7508:function(t,a,e){},eb57:function(t,a,e){"use strict";e("0b9e");var n=["SWITCH_LOADING","SWITCH_SCREEN_FULL","GET_WINDOW_SIZE","SET_CURR_ROUTER","GET_IOT_DATA","CHANGE_ACTIVE_MARKER","GET_FM1_DATA","GET_FM1_CHART_DATA","SWITCH_FM1_TYPE","SWITCH_FM1_TIME_TYPE","GET_FM2_DATA","GET_FM2_CHART_DATA","SWITCH_FM2_TYPE","SWITCH_FM2_TIME_TYPE","GET_WF_DATA","GET_WF_CHART_DATA","SWITCH_WF_TYPE","SWITCH_WF_TIME_TYPE","IOT_CHANGE_FULL_STATE","CHANGE_PHOTO_VIEW_URL","IOT_TYPE_FM1","IOT_TYPE_FM2","IOT_TYPE_GUN","IOT_TYPE_SPHERE","IOT_TYPE_WF","IOT_TYPE_360","FARMING_CHANGE_CURR_REGION","FARMING_GET_PLANT_ACT_DATA","FARMING_GET_FERTILIZER_ACT_DATA","FARMING_GET_PROTECTION_ACT_DATA","FARMING_CHANGE_FULL_STATE","WAREHOUSE_CHANGE_CURR_REGION","WAREHOUSE_GET_TODAY_DATA","WAREHOUSE_GET_THIS_YEAR_IN_DATA","WAREHOUSE_GET_THIS_YEAR_OUT_DATA","WAREHOUSE_GET_HISTORY_IN_DATA","WAREHOUSE_GET_HISTORY_OUT_DATA","WAREHOUSE_CHANGE_FULL_STATE","PLANT_CHANGE_CURR_REGION","PLANT_GET_STAT_DATA","PLANT_GET_TREE_AGE_DATA","PLANT_GET_TEA_FARM_DATA","PLANT_GET_TEA_VARIETIES_DATA","PLANT_GET_AMOUNT_RANK","PLANT_CHANGE_FULL_STATE","HOME_CHANGE_CURR_REGION","HOME_GET_AMOUNT_RANK_DATA","HOME_GET_FARMING_ACT_DATA","HOME_GET_PICK_DATA","HOME_GET_WAREHOUSE_DATA","HOME_GET_CITY_DATA","HOME_GET_MONITOR_AMOUNT","HOME_GET_TEA_LEVEL_DATA","HOME_CHANGE_FULL_STATE","ORIGIN_CHANGE_FULL_STATE","GET_ORIGIN_DATA","GET_ORIGIN_LIST_DATA","CHANGE_PHOTO_VIEW_URL","GET_GUN_DATA","CHANGE_GUN_DIRECTION","GET_360_DATA","ORIGIN_REAL_TIME_DATA"],r={};n.forEach(function(t){r[t]=t}),a["a"]=r}});