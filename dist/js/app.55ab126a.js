(function(t){function e(e){for(var n,r,c=e[0],s=e[1],u=e[2],l=0,m=[];l<c.length;l++)r=c[l],i[r]&&m.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-1f7e5338":"3b5805b4","chunk-c09ff5b6":"ea2fb6f9","chunk-1d542474":"af46d438","chunk-1ec03dbe":"1d74c915","chunk-5c1b4660":"b08079a3","chunk-6b08b789":"980e3221","chunk-86bb6142":"a30fa217","chunk-c08a56c0":"54d279c0"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={"chunk-1f7e5338":1,"chunk-1d542474":1,"chunk-1ec03dbe":1,"chunk-5c1b4660":1,"chunk-6b08b789":1,"chunk-86bb6142":1,"chunk-c08a56c0":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-1f7e5338":"0d951d37","chunk-c09ff5b6":"31d6cfe0","chunk-1d542474":"8078f518","chunk-1ec03dbe":"d80de37c","chunk-5c1b4660":"352944d8","chunk-6b08b789":"e7f64196","chunk-86bb6142":"a369c357","chunk-c08a56c0":"0628e4b3"}[t]+".css",i=s.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){u=m[c],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],d.parentNode.removeChild(d),a(o)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){r[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t),u=function(e){l.onerror=l.onload=null,clearTimeout(m);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,a[1](o)}i[t]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0706":function(t,e,a){"use strict";e["a"]={HOME:"home",IOT:"iot",FARMING:"farming",PLANT:"plant",WAREHOUSE:"warehouse",ORIGIN:"origin"}},"1a1e":function(t,e,a){"use strict";e["a"]={mapStyle:"amap://styles/darkblue",fm1MarkerImgUrl:{normal:"./images/fm1.png",active:"./images/fm1_active.png"},fm2MarkerImgUrl:{normal:"./images/fm2.png",active:"./images/fm2_active.png"},gunMarkerImgUrl:{normal:"./images/gun.png",active:"./images/gun_active.png"},wfMarkerImgUrl:{normal:"./images/wf.png",active:"./images/wf_active.png"},sphereMarkerImgUrl:{normal:"./images/sphere.png",active:"./images/sphere_active.png"},photoMarkerImgUrl:{normal:"./images/360.png",active:"./images/360_active.png"},iotMonitorMap:{center:[117.9289366,27.659368],zoom:12},baseUrl:"".concat(location.origin,"/tea-Web-Bigdata"),socketUrl:"ws://".concat(location.host,"/tea-Web-Bigdata/myHandler"),mapAutoChangeTime:5e3}},"2b2a":function(t,e,a){},4360:function(t,e,a){"use strict";var n,r,i,o,c,s,u,l,m,d,f=a("6e6d"),h=a("52c1"),p=a("b89d"),_=a("eb57"),g=a("ecac"),T=window,A=document,v=localStorage,E=(n={},Object(p["a"])(n,_["a"].SWITCH_LOADING,function(t,e){t.loading=e}),Object(p["a"])(n,_["a"].SWITCH_SCREEN_FULL,function(t,e){t.screenFullState=e}),Object(p["a"])(n,_["a"].GET_WINDOW_SIZE,function(t){t.winHeight=A.documentElement.clientHeight||T.innerHeight,t.winWidth=A.documentElement.clientWidth||T.innerWidth,A.body.style.minHeight=t.winHeight+"px";var e=t.windowResizeState+1;e=e>99999?1:e,t.winWidth<=1200?(t.miniScreen=!0,t.smallScreen=!1):t.winWidth<=1400?(t.smallScreen=!0,t.miniScreen=!1):(t.smallScreen=!1,t.miniScreen=!1),t.windowResizeState=e}),Object(p["a"])(n,_["a"].SET_CURR_ROUTER,function(t,e){var a=t.currRouter;a.from=e.from,a.to=e.to,a.query=e.query,a.instance=e.instance,a.to||(t.loading=!1,t.screenFullState=!1)}),Object(p["a"])(n,_["a"].UPDATE_USER_INFO,function(t,e){t.userToken=e.userToken,t.userId=e.userId,t.userName=e.userName,t.userRole=e.userRole,t.loginRemember=e.loginRemember,v.setItem(g["a"].loginRemember,e.loginRemember?"1":"0"),e.loginRemember?(v.setItem(g["a"].userToken,t.userToken),v.setItem(g["a"].userId,t.userId),v.setItem(g["a"].userName,t.userName),v.setItem(g["a"].userRole,t.userRole),v.setItem(g["a"].password,e.password)):(v.removeItem(g["a"].userToken),v.removeItem(g["a"].userId),v.removeItem(g["a"].userName),v.removeItem(g["a"].userRole),v.removeItem(g["a"].password))}),Object(p["a"])(n,_["a"].CLEAR_USER_INFO,function(t){t.userToken="",t.userId="",t.userRole="",v.removeItem(g["a"].userToken),v.removeItem(g["a"].userId),v.removeItem(g["a"].userRole),"0"==v.getItem(g["a"].loginRemember)&&(t.userName="",v.removeItem(g["a"].userName),v.removeItem(g["a"].password))}),Object(p["a"])(n,_["a"].SWITCH_MESSAGE_TIP,function(t,e){t.showMessageTip=e.show,t.tip=e.tip}),n),I=a("0706"),b=(a("3a23"),a("612f"),a("0b9e"),a("44a2"),a("ab56"),a("7ad2")),O=Object(p["a"])({},_["a"].HOME_GET_DATA,function(t){var e=this,a=t.state,n=a.currSelectedRegion?{addr:a.currSelectedRegion}:{};Object(b["a"])({url:"/bigdata/home/detail",method:"post",data:n}).then(function(t){if(200==t.code){var n=t.repData,r=n.planting.sort(function(t,e){return t.area>e.area?-1:1});if(a.amountRankDatas=r,!a.currSelectedRegion){for(var i=[],o=r.length-1;o>=0;o--)i.push(r[o]);a.amountRankMainDatas=i}a.farmingActdatas=n.fertiliz.map(function(t){return{label:t.month,value:t.weight}}),a.pickDatas=n.picking.map(function(t){return{label:t.classify,value:t.amount}}).sort(function(t,e){return t.value>e.value?-1:1});var c=null==n.totalPicking||0==n.totalPicking.length?a.teaTotalAmount:n.totalPicking||0;if(a.pickDatas.length<=4)a.pickPieDatas=a.pickDatas;else{for(var s=[],u=0,l=0;l<3;l++)s.push(a.pickDatas[l]),u+=a.pickDatas[l].value;s.push({label:"其他",value:c-u}),a.pickPieDatas=s}c>1e4?(a.teaTotalAmount=(c/1e4).toFixed(2),a.pickDataUnit="万吨"):(a.teaTotalAmount=c?(c-0).toFixed(2):0,a.pickDataUnit="吨");var m={};m.in=0==n.inStock.length?a.warehouseDatas.in:n.inStock,m.out=0==n.inStock.length?a.warehouseDatas.out:n.outStock,a.warehouseDatas=m,a.cityDatas=n.origin.map(function(t){return{value:t.counts,name:t.cityname}}),a.cameraAmount=n.cameraCount.count,a.monitorAmount=n.fielddstation.count,a.levelDatas=n.craft;var d=[{name:"监测站FM1",data:0,type:"c4",size:"s0"},{name:"监测站FM2",data:0,type:"c5",size:"s0"},{name:"普通摄像头",data:0,type:"c2",size:"s0"},{name:"云台摄像头",data:0,type:"c1",size:"s0"},{name:"全景摄像头",data:0,type:"c3",size:"s0"}];n.deviceNumlist&&n.deviceNumlist.forEach(function(t){"枪机"==t.name?d[2].data=t.num:"球机"==t.name?d[3].data=t.num:"全景"==t.name?d[4].data=t.num:"FM1"==t.name?d[0].data=t.num:"FM2"==t.name&&(d[1].data=t.num)}),a.iotDatas=d;var f=e.state;f.gardenArea=n.gardenArea,f.gardenTotal=n.gardenTotal,f.plantArea=n.plantArea||[],a.inStockWeight=n.instockWeight||0,a.outStockWeight=n.outstockWeight||0}else a.amountRankDatas=[],a.farmingActdatas=[],a.pickDatas=[],a.teaTotalAmount="-",a.warehouseDatas.in=[],a.warehouseDatas.out=[],a.cityDatas=[],a.cameraAmount="-",a.monitorAmount="-",a.levelDatas=[]})}),D=(r={},Object(p["a"])(r,_["a"].HOME_CHANGE_CURR_REGION,function(t,e){t.currSelectedRegion=e}),Object(p["a"])(r,_["a"].HOME_CHANGE_FULL_STATE,function(t,e){t[e.fullStateName]=e.state}),r),S={namespaced:!0,state:{cameraAmount:0,monitorAmount:0,waterFertilizerAmount:0,farmingActdatas:[],pickDatas:[],pickPieDatas:[],pickDataUnit:"吨",teaTotalAmount:"",iotDatas:[],levelDatas:[],amountRankUnit:"亩",amountRankDatas:[],amountRankMainDatas:[],warehouseUnit:"吨",warehouseDatas:{in:[],out:[]},cityDatas:[],currSelectedRegion:"",inStockWeight:0,outStockWeight:0,amountRankFullState:!1,farmingInfoFullState:!1,pickInfoFullState:!1,warehouseFullState:!1,originDataFullState:!1,levelInfoFullState:!1,mapFullState:!1},actions:O,mutations:D},R=(a("f91a"),a("96f8")),y=a.n(R),F=(a("48fb"),a("4ccc"),a("7415"),a("f1ed")),w=(i={},Object(p["a"])(i,_["a"].GET_IOT_DATA,function(t){var e=t.state;Object(b["a"])({url:"/data/monitor/selectStation",method:"post"}).then(function(a){if(200==a.code){var n=a.repData;n.cameraVos.forEach(function(t){t.type="1"==t.camera_type?_["a"].IOT_TYPE_GUN:_["a"].IOT_TYPE_360,t.isActive=!1,t.name=t.camera_name||"",t.show=""==e.currVisibleIotType||"camera"==e.currVisibleIotType}),n.emVos.forEach(function(t){t.type=_["a"].IOT_TYPE_SPHERE,t.isActive=!1,t.show=""==e.currVisibleIotType||"monitor"==e.currVisibleIotType}),n.Fm1.forEach(function(t){t.type=_["a"].IOT_TYPE_FM1,t.isActive=!1,t.show=""==e.currVisibleIotType||"monitor"==e.currVisibleIotType}),n.Fm2.forEach(function(t){t.type=_["a"].IOT_TYPE_FM2,t.isActive=!1,t.show=""==e.currVisibleIotType||"monitor"==e.currVisibleIotType});var r=[];r=n.Fm1.concat(n.emVos).concat(n.Fm2).concat(n.cameraVos),e.iotDatas.length!=r.length&&(r.forEach(function(t,e){t.index=e}),e.currActive.type=_["a"].IOT_TYPE_FM1,e.currActive.index=0,r[0].isActive=!0,e.cameraAmount=n.cameraVos.length,e.monitorAmount=n.Fm1.length+n.Fm2.length+n.emVos.length,e.iotDatas=r,t.dispatch(_["a"].GET_FM1_DATA,r[0].sno))}})}),Object(p["a"])(i,_["a"].GET_FM1_DATA,function(t,e){var a=t.state,n=a.fm1,r=n.data,i=a.fm1.time,o=a.fm1.type;a.fm1.sno=e||a.fm1.sno;var c=a.iotDatas.find(function(t){return t.sno==a.fm1.sno});c&&(a.fm1.iotName=c.name||""),Object(b["a"])({url:"/data/monitor/getflddata?sno="+a.fm1.sno,method:"post"}).then(function(t){if(200==t.code){var e=t.repData,a=e.todayData||[],c=e.sevenData||[];if(a.length){var s=a.length-1,u=a[s];r.temperature=u.temp.toFixed(2),r.humidity=u.humid.toFixed(0),r.light=u.sunlux.toFixed(0),r.pressure=u.pa.toFixed(2)}else r.temperature="-",r.humidity="-",r.light="-",r.pressure="-";"HOUR"==i?"temperature"==o?n.chartDatas=a.map(function(t){return{title:t.txtime,data:t.temp.toFixed(2)}}):"humidity"==o?n.chartDatas=a.map(function(t){return{title:t.txtime,data:t.humid.toFixed(0)}}):"light"==o?n.chartDatas=a.map(function(t){return{title:t.txtime,data:t.sunlux.toFixed(0)}}):"pressure"==o&&(n.chartDatas=a.map(function(t){return{title:t.txtime,data:t.pa.toFixed(2)}})):"WEEK"==i&&("temperature"==o?n.chartDatas=c.map(function(t){return{title:t.day,data:t.temp.toFixed(2)}}):"humidity"==o?n.chartDatas=c.map(function(t){return{title:t.day,data:t.humid.toFixed(0)}}):"light"==o?n.chartDatas=c.map(function(t){return{title:t.day,data:t.sunlux.toFixed(0)}}):"pressure"==o&&(n.chartDatas=c.map(function(t){return{title:t.day,data:t.pa.toFixed(2)}})))}else r.temperature="-",r.humidity="-",r.light="-",r.pressure="-",n.chartDatas=[]})}),Object(p["a"])(i,_["a"].GET_FM2_DATA,function(t,e){var a=t.state,n=a.fm2,r=n.data,i=a.fm2.time,o=a.fm2.type;a.fm2.sno=e||a.fm2.sno;var c=a.iotDatas.find(function(t){return t.sno==a.fm2.sno});c&&(a.fm2.iotName=c.name||""),Object(b["a"])({url:"/data/monitor/getFmbData?sno="+a.fm2.sno,method:"post"}).then(function(t){if(200==t.code){var e=t.repData,a=e.todayData||[],c=e.sevenData||[];if(a.length){var s=a.length-1,u=a[s];r.temperature=u.soiltemp.toString(),r.humidity=y()(u.soilmture).toFixed(2),r.wind=y()(u.windspd).toFixed(2),r.rain=y()(u.rain).toFixed(2)}else r.temperature="-",r.humidity="-",r.wind="-",r.rain="-";"HOUR"==i?"temperature"==o?n.chartDatas=a.map(function(t){return{title:t.txtime,data:y()(t.soiltemp).toFixed(2)}}):"humidity"==o?n.chartDatas=a.map(function(t){return{title:t.txtime,data:y()(t.soilmture).toFixed(2)}}):"wind"==o?n.chartDatas=a.map(function(t){return{title:t.txtime,data:y()(t.windspd).toFixed(2),rotate:y()(t.winddir).toFixed(2)}}):"rain"==o&&(n.chartDatas=a.map(function(t){return{title:t.txtime,data:y()(t.rain).toFixed(2)}})):"WEEK"==i&&("temperature"==o?n.chartDatas=c.map(function(t){return{title:t.day,data:y()(t.soiltemp).toFixed(2)}}):"humidity"==o?n.chartDatas=c.map(function(t){return{title:t.day,data:y()(t.soilmture).toFixed(2)}}):"wind"==o?n.chartDatas=c.map(function(t){return{title:t.day,data:y()(t.windspd).toFixed(2),rotate:y()(t.winddir).toFixed(2)}}):"rain"==o&&(n.chartDatas=c.map(function(t){return{title:t.day,data:y()(t.rain).toFixed(2)}})))}else r.temperature="-",r.humidity="-",r.wind="-",r.rain="-",n.chartDatas=[]})}),Object(p["a"])(i,_["a"].CHANGE_ACTIVE_IOT_TYPE,function(t,e){var a=t.state,n=a.iotDatas;if("camera"==e){for(var r=0,i=null,o=0;o<n.length;o++)if(i=n[o],"1"==i.camera_type){r=o;break}i&&(t.state.camera=i,t.commit(_["a"].CHANGE_ACTIVE_MARKER,{index:r,type:_["a"].IOT_TYPE_GUN}),t.commit(_["a"].GET_GUN_DATA,i),t.commit(_["a"].CHANGE_VISIBLE_IOT_TYPE,e))}else n.length&&(t.dispatch(_["a"].GET_FM1_DATA,n[0].sno),t.commit(_["a"].CHANGE_ACTIVE_MARKER,{index:0,type:_["a"].IOT_TYPE_FM1}),t.commit(_["a"].CHANGE_VISIBLE_IOT_TYPE,e))}),Object(p["a"])(i,_["a"].CHANGE_PHOTO_VIEW_URL,function(t,e){var a=e.id,n=e.name,r=this,i=t.state;Object(b["a"])({url:"/data/monitor/getemdata?em_devid="+a,method:"post"}).then(function(t){if(t&&t.repData&&t.repData[11]){var e=t.repData[11].replace(/http/,"https");i.photoViewUrl=e||i.photoViewUrl,i.photoViewName=n||"",i.photoViewTime=t.repData[0]?Object(F["b"])(new Date(1e3*t.repData[0]),"yyyy-MM-dd hh:mm:ss"):""}else r.commit(_["a"].SWITCH_MESSAGE_TIP,{tip:"未能获取到全景图！",show:!0})})}),i),k=(o={},Object(p["a"])(o,_["a"].CHANGE_ACTIVE_MARKER,function(t,e){var a=t.currActive,n=t.iotDatas[a.index];n&&(n.isActive=!1),a.index=e.index,a.type=e.type,t.iotDatas[a.index].isActive=!0}),Object(p["a"])(o,_["a"].SWITCH_FM1_TYPE,function(t,e){var a=t.fm1;a.type=e.value,a.name=e.name,"temperature"==e.value?a.chartUnit="℃":"humidity"==e.value?a.chartUnit="%":"light"==e.value?a.chartUnit="Lux":"pressure"==e.value&&(a.chartUnit="Pa")}),Object(p["a"])(o,_["a"].SWITCH_FM1_TIME_TYPE,function(t,e){t.fm1.time=e}),Object(p["a"])(o,_["a"].CHANGE_VISIBLE_IOT_TYPE,function(t,e){t.currVisibleIotType=e,t.iotDatas=t.iotDatas.map(function(t){return t.type==_["a"].IOT_TYPE_GUN||t.type==_["a"].IOT_TYPE_360?t.show=""==e||"camera"==e:t.show=""==e||"monitor"==e,t})}),Object(p["a"])(o,_["a"].SWITCH_FM2_TYPE,function(t,e){var a=t.fm2;a.type=e.value,a.name=e.name,"temperature"==e.value?a.chartUnit="℃":"humidity"==e.value?a.chartUnit="%":"wind"==e.value?a.chartUnit="m/s":"rain"==e.value&&(a.chartUnit="mm")}),Object(p["a"])(o,_["a"].SWITCH_FM2_TIME_TYPE,function(t,e){t.fm2.time=e}),Object(p["a"])(o,_["a"].SWITCH_WF_TYPE,function(t,e){var a=t.wf;a.type=e.value,a.name=e.name,"ec"==e.value?a.chartUnit="mS/cm":"ph"==e.value?a.chartUnit="":"water"==e.value?a.chartUnit="L":"fertilizer"==e.value&&(a.chartUnit="kg")}),Object(p["a"])(o,_["a"].SWITCH_WF_TIME_TYPE,function(t,e){t.wf.time=e}),Object(p["a"])(o,_["a"].IOT_CHANGE_FULL_STATE,function(t,e){e.subModuleName?t[e.subModuleName][e.fullStateName]=e.state:t[e.fullStateName]=e.state}),Object(p["a"])(o,_["a"].GET_GUN_DATA,function(t,e){t.videoUrl=e.camera_url,t.videoName=e.camera_name}),Object(p["a"])(o,_["a"].GET_360_DATA,function(t,e){t.camera=e,t.videoUrl360=e.camera_url||e.camera_hlsurl,t.video360Name=e.camera_name}),Object(p["a"])(o,_["a"].CHANGE_CONTROL_BUTTON_STATUS,function(t,e){t.controlButtonIsActive=e}),o),N={namespaced:!0,state:{cameraAmount:0,monitorAmount:0,waterFertilizerAmount:0,iotDatas:[],camera:[],emVos:[],fm1List:[],fm2List:[],photoViewUrl:"",photoViewName:"",photoViewTime:"",controlButtonIsActive:!1,currVisibleIotType:"",currActive:{type:_["a"].IOT_TYPE_FM1,index:0},fm1:{iotName:"",type:"temperature",name:"温度",chartUnit:"℃",time:"HOUR",data:{temperature:"-",humidity:"-",light:"-",pressure:"-"},sno:"",chartDatas:[],curveChartFullState:!1},fm2:{iotName:"",type:"wind",name:"风速",chartUnit:"m/s",time:"HOUR",data:{wind:"-",rain:"-",temperature:"-",humidity:"-"},sno:"",chartDatas:[],curveChartFullState:!1},wf:{type:"ec",name:"EC",chartUnit:"mS/cm",time:"HOUR",data:{ec:"-",ph:"-",water:"-",fertilizer:"-"},chartDatas:[],curveChartFullState:!1},photoViewerFullState:!1,camera360FullState:!1,videoUrl:"",videoName:"",videoUrl360:"",video360Name:""},actions:w,mutations:k},C=(a("9788"),Object(p["a"])({},_["a"].PLANT_GET_DATA,function(t){var e=this,a=t.state,n=a.currSelectedRegion?{addr:a.currSelectedRegion}:{},r=[{label:"山场总数",data:"-",unit:"家"},{label:"种植面积",data:"-",unit:"亩"}];Object(b["a"])({url:"/bigdata/plant/detail",method:"post",data:n}).then(function(t){if(200==t.code){var n=t.repData;r[0].data=null==n.gardenCount?0:n.gardenCount,r[1].data=null==n.gardenArea?0:(n.gardenArea-0).toFixed(0),a.totalData=r,a.treeAgeDistributeDatas=n.treeAge||[],a.varietiesDatas=n.treeVarieties||[];var i=a.varietiesDatas.reduce(function(t,e){return t+e.area},0);a.varietiesTotalData=i.toFixed(0),a.amountRankDatas=n.plantRanking||[],a.teaFarmTypeDatas=n.plantQuality||[];var o=a.teaFarmTypeDatas.reduce(function(t,e){return t+e.area},0);a.farmTotalArea=o.toFixed(0);var c=e.state;c.gardenArea=n.gardenArea,c.gardenTotal=n.gardenTotal,c.plantArea=n.plantArea||[]}else a.treeAgeDistributeDatas=[],a.varietiesDatas=[],a.varietiesTotalData="-",a.amountRankDatas=[],a.teaFarmTypeDatas=[],a.farmTotalArea="-"})})),G=(c={},Object(p["a"])(c,_["a"].PLANT_CHANGE_CURR_REGION,function(t,e){t.currSelectedRegion=e}),Object(p["a"])(c,_["a"].PLANT_CHANGE_FULL_STATE,function(t,e){t[e.fullStateName]=e.state}),c),M={namespaced:!0,state:{currSelectedRegion:"",amountRankUnit:"亩",amountRankDatas:[],farmTotalArea:0,teaFarmTypeDatas:[],varietiesTotalData:0,varietiesDatas:[],treeAgeDistributeUnit:"亩",treeAgeDistributeDatas:[],totalData:[],totalDataFullState:!1,treeAgeFullState:!1,teaVarietiesFullState:!1,plantRankFullState:!1,teaFarmFullState:!1,mapFullState:!1},actions:C,mutations:G},H=Object(p["a"])({},_["a"].FARMING_GET_DATA,function(t){var e=this,a=t.state,n={address_country:"",address_town:a.currSelectedRegion};Object(b["a"])({url:"/data/farm/getData",method:"post",data:n}).then(function(t){if(200==t.code){var n=t.repData;a.plantActPieDatas=n.yearPlant||[],a.plantActLineDatas=n.monthPlant||[],a.fertilizerActPieDatas=n.yearFaramA||[],a.fertilizerActLineDatas=n.monthFaramA||[],a.protectionActPieDatas=n.yearFaramB||[],a.protectionActLineDatas=n.monthFaramB||[];var r=e.state;r.gardenArea=n.gardenArea,r.gardenTotal=n.gardenTotal,r.plantArea=n.plantArea||[]}else a.plantActPieDatas=[],a.plantActLineDatas=[],a.fertilizerActPieDatas=[],a.fertilizerActLineDatas=[],a.protectionActPieDatas=[],a.protectionActLineDatas=[]})}),P=(s={},Object(p["a"])(s,_["a"].FARMING_CHANGE_CURR_REGION,function(t,e){t.currSelectedRegion=e}),Object(p["a"])(s,_["a"].FARMING_CHANGE_FULL_STATE,function(t,e){t[e.fullStateName]=e.state}),s),U={namespaced:!0,state:{currSelectedRegion:"",plantActPieDatas:[],plantActLineDatas:[],fertilizerActPieDatas:[],fertilizerActLineDatas:[],protectionActPieDatas:[],protectionActLineDatas:[],mapFullState:!1,plantFullState:!1,protectionFullState:!1,fertilizerFullState:!1},actions:H,mutations:P},L=Object(p["a"])({},_["a"].WAREHOUSE_GET_DATA,function(t){var e=this,a=t.state,n=a.currSelectedRegion?{addr:a.currSelectedRegion}:{};Object(b["a"])({url:"/bigdata/warehouse/detail",method:"post",data:n}).then(function(t){if(200==t.code){var n=t.repData;a.toDayInAmount=n.inStock?n.inStock.weight:0,a.toDayOutAmount=n.outStock?n.outStock.weight:0;var r=(n.stockWeight||0).toFixed(0);a.stockWeight=r,a.thisYearInDatas=n.thisYearInStock.map(function(t){return{label:t.omonth,value:t.weight}}),a.thisYearOutDatas=n.thisYearOutStock.map(function(t){return{label:t.omonth,value:t.weight}});var i=[],o=[],c=["1","2","3","4","5","6","7","8","9","10","11","12"].map(function(t){return{omonth:"".concat(t,"月"),weight:0}}),s=(new Date).getFullYear();i.push({year:s-1,list:c}),i.push({year:s,list:n.thisYearInStock}),a.historyInDatas=i.map(function(t){return{year:t.year.toString(),list:t.list.map(function(t){return{label:t.omonth,value:t.weight}})}}),o.push({year:s-1,list:c}),o.push({year:s,list:n.thisYearOutStock}),a.historyOutDatas=o.map(function(t){return{year:t.year.toString(),list:t.list.map(function(t){return{label:t.omonth,value:t.weight}})}});var u=e.state;u.gardenArea=n.gardenArea,u.gardenTotal=n.gardenTotal,u.plantArea=n.plantArea||[]}else a.toDayInAmount="-",a.toDayOutAmount="-",a.stockWeight="-",a.thisYearInDatas=[],a.thisYearOutDatas=[],a.historyInDatas=[],a.historyOutDatas=[]})}),j=(u={},Object(p["a"])(u,_["a"].WAREHOUSE_CHANGE_CURR_REGION,function(t,e){t.currSelectedRegion=e}),Object(p["a"])(u,_["a"].WAREHOUSE_CHANGE_FULL_STATE,function(t,e){t[e.fullStateName]=e.state}),u),x={namespaced:!0,state:{currSelectedRegion:"",toDayInAmount:0,toDayOutAmount:0,stockWeight:0,thisYearInDatas:[],thisYearOutDatas:[],historyInDatas:[],historyOutDatas:[],mapFullState:!1,inCircleChartFullState:!1,outCircleChartFullState:!1,inLineChartFullState:!1,outLineChartFullState:!1,inConstrastFullState:!1,outConstrastFullState:!1},actions:L,mutations:j},W=(l={},Object(p["a"])(l,_["a"].GET_ORIGIN_DATA,function(t){var e=t.state;Object(b["a"])({url:"/bigdata/origin/detail",method:"post"}).then(function(t){if(200==t.code){var a=t.repData,n=[];a.originCity.forEach(function(t){t.city&&n.push({value:t.count,name:t.city})}),e.cityDatas=n,e.countStatDatas=a.originCount||[];var r=[];a.originCity.forEach(function(t,e){r[e]=[t.latitude,t.longitude]}),e.mapDatas=a.originCity.map(function(t,e){return{value:r[e].concat(t.count),name:t.city}})}else e.cityDatas=[],e.countStatDatas=[],e.mapDatas=[]})}),Object(p["a"])(l,_["a"].GET_ORIGIN_LIST_DATA,function(t,e){var a=t.state;1==e.currentPage&&(a.addressList=[]);var n={currentPage:e.currentPage,originDate:e.originDate||""};Object(b["a"])({url:"/bigdata/origin/pageList",method:"post",data:n}).then(function(t){if(200==t.code){var n=t.repData;a.addressList=n.originList,a.totalPage=n.pageInfo.totalPages,a.currentPage=e.currentPage,a.originDate=e.originDate}})}),l),Y=(m={},Object(p["a"])(m,_["a"].ORIGIN_CHANGE_FULL_STATE,function(t,e){t[e.fullStateName]=e.state}),Object(p["a"])(m,_["a"].ORIGIN_REAL_TIME_DATA,function(t,e){var a=e.type,n=e.data;1==a?t.addressList[0].list.unshift(n):2==a&&t.addressList.unshift(n)}),m),V={namespaced:!0,state:{cityDatas:[],countStatDatas:[],addressList:[],totalPage:1,currentPage:1,originDate:"",mapDatas:[],mapFullState:!1,cityRankFullState:!1,countStateFullState:!1},actions:W,mutations:Y},z=(d={},Object(p["a"])(d,I["a"].HOME,S),Object(p["a"])(d,I["a"].IOT,N),Object(p["a"])(d,I["a"].PLANT,M),Object(p["a"])(d,I["a"].FARMING,U),Object(p["a"])(d,I["a"].WAREHOUSE,x),Object(p["a"])(d,I["a"].ORIGIN,V),d);f["default"].use(h["b"]);var $=localStorage;e["a"]=new h["b"].Store({state:{winHeight:0,winWidth:0,showMessageTip:!1,tip:"",currRouter:{from:"",to:"",query:null,instance:null},chartFullPage:!1,loading:!1,screenFullState:!1,windowResizeState:0,smallScreen:!1,miniScreen:!1,gardenArea:0,gardenTotal:0,plantArea:[],userToken:$.getItem(g["a"].userToken)||"",userId:$.getItem(g["a"].userId)||"",userName:$.getItem(g["a"].userName)||"",userRole:$.getItem(g["a"].userRole)||"0"},mutations:E,modules:z})},"56d7":function(t,e,a){"use strict";a.r(e);a("5c07"),a("53da"),a("2556"),a("d0f8");var n=a("6e6d"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{height:t.winHeight+"px"},attrs:{id:"app"}},[a("NavMenu"),a("router-view",{style:{height:t.pageHeight+"px"}}),a("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},i=[],o=(a("a321"),a("3f47")),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-wrap"},[a("div",{staticClass:"spinner"},[a("div",{staticClass:"spinner-container container1"},[a("div",{staticClass:"circle1"}),a("div",{staticClass:"circle2"}),a("div",{staticClass:"circle3"}),a("div",{staticClass:"circle4"})]),a("div",{staticClass:"spinner-container container2"},[a("div",{staticClass:"circle1"}),a("div",{staticClass:"circle2"}),a("div",{staticClass:"circle3"}),a("div",{staticClass:"circle4"})]),a("div",{staticClass:"spinner-container container3"},[a("div",{staticClass:"circle1"}),a("div",{staticClass:"circle2"}),a("div",{staticClass:"circle3"}),a("div",{staticClass:"circle4"})])])])}],u=a("17cc"),l={},m=Object(u["a"])(l,c,s,!1,null,null,null),d=m.exports,f=a("52c1"),h=a("eb57"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-menu"},[a("h3",{on:{dblclick:function(e){return t.doFull()}}},[t._v("武夷山市智慧茗园数据平台")]),a("ul",{staticClass:"menu"},[a("li",{class:t.currRouter.to}),a("router-link",{attrs:{tag:"li",to:{name:"home"}}},[t._v("智慧全息")]),a("router-link",{attrs:{tag:"li",to:{name:"iot"}}},[t._v("物联监控")]),a("router-link",{attrs:{tag:"li",to:{name:"plant"}}},[t._v("种植分布")]),a("router-link",{attrs:{tag:"li",to:{name:"farming"}}},[t._v("农事活动")]),a("router-link",{attrs:{tag:"li",to:{name:"warehouse"}}},[t._v("出库入库")]),a("router-link",{attrs:{tag:"li",to:{name:"origin"}}},[t._v("溯源数据")])],1),a("div",{staticClass:"tag"}),a("div",{staticClass:"logout",on:{click:function(e){return t.doLogout()}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:"1"==t.userRole,expression:"userRole == '1'"}],staticClass:"logo spec",on:{dblclick:function(e){return t.doRefreshPage()}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:"1"!=t.userRole,expression:"userRole != '1'"}],staticClass:"curr-time",on:{dblclick:function(e){return t.doRefreshPage()}}},[t._v(t._s(t.currTime))])])},_=[],g=a("f1ed"),T={name:"NavMenu",computed:Object(o["a"])({},Object(f["c"])(["userRole","currRouter"])),data:function(){return{currTime:""}},created:function(){var t=this;setInterval(function(){t.currTime=Object(g["b"])(new Date,"yyyy.MM.dd hh:mm:ss")},1e3)},methods:{doLogout:function(){var t=this,e=t.$store;t.$ajax({url:"/data/user/loginOut"}),e.commit(h["a"].CLEAR_USER_INFO),t.$router.push({name:"login"})},doRefreshPage:function(){window.useFlash&&location.hash.indexOf("?flash=true")<0?location.href=location.href+"?flash=true":location.reload(!0)},doFull:function(){var t=this.$store.state,e=window.screen,a=e.width==t.winWidth&&e.height==t.winHeight;if(a){var n=document,r=n.cancelFullScreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.exitFullscreen;r.call(n)}else{var i=document.documentElement,o=i.requestFullScreen||i.webkitRequestFullScreen||i.mozRequestFullScreen||i.msRequestFullScreen;o.call(i)}}}},A=T,v=Object(u["a"])(A,p,_,!1,null,null,null),E=v.exports,I=a("c4f2"),b={name:"app",components:{Spinner:d,NavMenu:E},computed:Object(o["a"])({},Object(f["c"])(["loading","winHeight","screenFullState"]),{pageHeight:function(){var t=this.$store.state,e=t.winHeight-133;return t.winWidth<=1200?e+=29:t.winWidth<=1400&&(e+=25),e>540?e:540},isLogin:function(){return"login"===this.$store.state.currRouter.to}}),created:function(){var t=this,e=t.$store,a=window;a.useFlash=location.hash.indexOf("?flash=true")>0,a.addEventListener("resize",function(){e.commit(h["a"].GET_WINDOW_SIZE)}),e.commit(h["a"].GET_WINDOW_SIZE),setTimeout(function(){e.state.userToken&&Object(I["a"])()},1e3)}},O=b,D=(a("5c0b"),Object(u["a"])(O,r,i,!1,null,null,null)),S=D.exports,R=(a("3a23"),a("4360")),y=a("8663");n["default"].use(y["a"]);var F=new y["a"]({base:"",linkActiveClass:"active",routes:[{path:"/login",name:"login",component:function(){return a.e("chunk-1f7e5338").then(a.bind(null,"e426"))}},{path:"/home",name:"home",component:function(){return Promise.all([a.e("chunk-c09ff5b6"),a.e("chunk-1ec03dbe")]).then(a.bind(null,"8a00"))}},{path:"/iot",name:"iot",component:function(){return Promise.all([a.e("chunk-c09ff5b6"),a.e("chunk-1d542474")]).then(a.bind(null,"ecf9"))}},{path:"/plant",name:"plant",component:function(){return Promise.all([a.e("chunk-c09ff5b6"),a.e("chunk-86bb6142")]).then(a.bind(null,"3501"))}},{path:"/farming",name:"farming",component:function(){return Promise.all([a.e("chunk-c09ff5b6"),a.e("chunk-5c1b4660")]).then(a.bind(null,"af20"))}},{path:"/warehouse",name:"warehouse",component:function(){return Promise.all([a.e("chunk-c09ff5b6"),a.e("chunk-6b08b789")]).then(a.bind(null,"bc30"))}},{path:"/origin",name:"origin",component:function(){return Promise.all([a.e("chunk-c09ff5b6"),a.e("chunk-c08a56c0")]).then(a.bind(null,"7f36"))}},{path:"*",redirect:{name:"login"}}]});F.beforeEach(function(t,e,a){R["a"].commit({type:h["a"].SET_CURR_ROUTER,from:e.name,to:t.name,query:t.query,instance:F}),t.name&&t.name!==e.name&&R["a"].commit(h["a"].SWITCH_LOADING,!0),a(!0)});var w=F,k=a("7ad2"),N=a("adfa"),C=a.n(N),G=(a("5a14"),a("18da"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plane",class:{"full-screen":t.full}},[a("i"),a("i"),t._t("default")],2)}),M=[],H={name:"Plane",props:{full:{type:Boolean,default:!1}}},P=H,U=Object(u["a"])(P,G,M,!1,null,null,null),L=U.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"plane-title",on:{click:function(e){return t.doClick()}}},[t._t("default")],2)},x=[],W={name:"PlaneTitle",methods:{doClick:function(){this.$emit("click")}}},Y=W,V=Object(u["a"])(Y,j,x,!1,null,null,null),z=V.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-tools"},[a("i",{staticClass:"iconfont full-icon",domProps:{innerHTML:t._s(t.full?"&#xe621;":"&#xe629;")},on:{click:function(e){return t.change()}}}),a("i",{staticClass:"iconfont download-icon",on:{click:function(e){return t.download()}}},[t._v("")])])},q=[],B=(a("612f"),a("0b9e"),a("48fb"),a("4ccc"),{name:"PlaneTools",props:{full:{type:Boolean,default:!1}},methods:{change:function(){var t=this;t.$emit("change",!t.full)},download:function(){var t=this,e=t.$el,a=e.parentNode,n=a.querySelectorAll(".plane-content canvas");if(n.length||(n=a.querySelectorAll(".wuyishan-map-container canvas")),n.length){var r=a.querySelector(".plane-title"),i=r?r.innerText:Math.random().toString(36).substr(2),o=0,c=0;n.forEach(function(t){t.height>c&&(c=t.height),o+=t.width}),o+=40+10*(n.length-1),c+=40;var s=document.createElement("canvas");s.width=o,s.height=c;var u=s.getContext("2d");u.fillStyle="rgba(18, 35, 87, 0.98)",u.fillRect(0,0,o,c);for(var l=20,m=null,d=0;d<n.length;d++)m=n[d],u.drawImage(m,l,20,m.width,m.height),l=l+m.width+10;var f=document.createElement("a");f.download=i,f.href=s.toDataURL("image/png"),document.body.appendChild(f),f.click(),f.remove()}}}}),K=B,Z=Object(u["a"])(K,$,q,!1,null,null,null),J=Z.exports;n["default"].config.productionTip=!1,n["default"].prototype.$ajax=k["a"],n["default"].use(C.a),n["default"].component("Plane",L),n["default"].component("PlaneTitle",z),n["default"].component("PlaneTools",J),new n["default"]({router:w,store:R["a"],render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("2b2a"),r=a.n(n);r.a},"7ad2":function(t,e,a){"use strict";var n=a("3f46"),r=a.n(n),i=a("7f43"),o=a.n(i),c=a("1a1e"),s=a("4360"),u=a("0e4f");o.a.defaults.baseURL="",o.a.interceptors.request.use(function(t){return t.headers["valToken"]=s["a"].state.userToken,t},function(t){return r.a.reject(t)}),o.a.interceptors.response.use(function(t){return r.a.resolve(t)},function(t){return r.a.reject(t)}),e["a"]=function(t){return/post/i.test(t.method)&&!t.headers&&(t.headers={"Content-Type":"application/x-www-form-urlencoded"},t.data=u.stringify(t.data)),/json/.test(t.url)||(t.url=c["a"].baseUrl+t.url),new r.a(function(e,a){o.a.request(t).then(function(t){"w1005"==t.data.code||"token过期"==t.data.msg?s["a"].state.currRouter.instance.push({name:"login"}):e(t.data)},function(t){a(t)})})}},c4f2:function(t,e,a){"use strict";a("612f"),a("0b9e");var n=a("3e8e"),r=a.n(n),i=(a("ea65"),a("f8c5"),a("1a1e")),o=a("4360"),c=a("0706"),s=a("eb57"),u=a("f1ed"),l={camera:[c["a"].HOME,c["a"].IOT],craft:[c["a"].HOME],farm:[c["a"].FARMING],fm1:[c["a"].HOME,c["a"].IOT],fm2:[c["a"].HOME,c["a"].IOT],plant:[c["a"].HOME,c["a"].PLANT,c["a"].FARMING],stock:[c["a"].WAREHOUSE,c["a"].HOME],pick:[c["a"].HOME,c["a"].PLANT]},m=null,d="",f=null,h=null;function p(){h&&h.close(),h=new WebSocket(i["a"].socketUrl+"?token="+o["a"].state.userToken),h.onopen=_,h.onmessage=g,h.onerror=A,h.onclose=v,h.send=E}function _(t){console.log("origin web socket open...",Object(u["b"])(new Date)),f&&clearInterval(f)}function g(t){var e=t.data,a=o["a"].state.currRouter.to;if(console.log("socket data....",e),e.startsWith("change:")){var n=e.slice(8,-1).split(","),i=new r.a([]);n.forEach(function(t){l[t]&&l[t].forEach(function(t){i.add(t)})}),i.has(a)&&(console.log("needRefresh...."),m&&d!=a&&(clearTimeout(m),console.log("cancel page：",d," refresh...")),d!=a&&(d=a,m=setTimeout(function(){T(a)},3e3)))}else if(e.startsWith("{")&&/(home|origin)/.test(a)){var u=o["a"].state[c["a"].ORIGIN];try{var f=JSON.parse(t.data);"home"==a?o["a"].dispatch(c["a"].HOME+"/"+s["a"].HOME_GET_DATA):(o["a"].dispatch(c["a"].ORIGIN+"/"+s["a"].GET_ORIGIN_DATA),u.addressList[0]&&f.date==u.addressList[0].date?o["a"].commit(c["a"].ORIGIN+"/"+s["a"].ORIGIN_REAL_TIME_DATA,{type:1,data:f}):o["a"].commit(c["a"].ORIGIN+"/"+s["a"].ORIGIN_REAL_TIME_DATA,{type:2,data:{date:f.date,list:[f]}}))}catch(h){console.log(t.data,h)}}}function T(t){var e=o["a"].state.currRouter.to;t==e&&(t==c["a"].HOME?o["a"].dispatch(c["a"].HOME+"/"+s["a"].HOME_GET_DATA):t==c["a"].IOT?o["a"].dispatch(c["a"].IOT+"/"+s["a"].GET_IOT_DATA):t==c["a"].PLANT?o["a"].dispatch(c["a"].PLANT+"/"+s["a"].PLANT_GET_DATA):t==c["a"].FARMING?o["a"].dispatch(c["a"].FARMING+"/"+s["a"].FARMING_GET_DATA):t==c["a"].WAREHOUSE&&o["a"].dispatch(c["a"].WAREHOUSE+"/"+s["a"].WAREHOUSE_GET_DATA)),m=null,d=""}function A(t){console.log("socket error....",Object(u["b"])(new Date),t)}function v(t){console.log("socket close....",Object(u["b"])(new Date)),console.log("close socket event...",t),console.log("reconnect socket..."),h=null,f&&clearInterval(f),f=setInterval(function(){p()},2e4)}function E(t){console.log("send successful...",t)}p(),e["a"]=p},eb57:function(t,e,a){"use strict";a("0b9e");var n=["SWITCH_LOADING","SWITCH_SCREEN_FULL","GET_WINDOW_SIZE","SET_CURR_ROUTER","UPDATE_USER_INFO","CLEAR_USER_INFO","SWITCH_MESSAGE_TIP","GET_IOT_DATA","CHANGE_ACTIVE_IOT_TYPE","CHANGE_ACTIVE_MARKER","GET_FM1_DATA","SWITCH_FM1_TYPE","SWITCH_FM1_TIME_TYPE","GET_FM2_DATA","GET_FM2_CHART_DATA","SWITCH_FM2_TYPE","SWITCH_FM2_TIME_TYPE","SWITCH_WF_TYPE","SWITCH_WF_TIME_TYPE","IOT_CHANGE_FULL_STATE","IOT_TYPE_FM1","IOT_TYPE_FM2","IOT_TYPE_GUN","IOT_TYPE_SPHERE","IOT_TYPE_WF","IOT_TYPE_360","CHANGE_PHOTO_VIEW_URL","GET_GUN_DATA","GET_360_DATA","ORIGIN_REAL_TIME_DATA","CHANGE_VISIBLE_IOT_TYPE","CHANGE_CONTROL_BUTTON_STATUS","FARMING_CHANGE_CURR_REGION","FARMING_GET_DATA","FARMING_CHANGE_FULL_STATE","WAREHOUSE_CHANGE_CURR_REGION","WAREHOUSE_GET_DATA","WAREHOUSE_CHANGE_FULL_STATE","PLANT_CHANGE_CURR_REGION","PLANT_GET_DATA","PLANT_CHANGE_FULL_STATE","HOME_CHANGE_CURR_REGION","HOME_GET_DATA","HOME_CHANGE_FULL_STATE","ORIGIN_CHANGE_FULL_STATE","GET_ORIGIN_DATA","GET_ORIGIN_LIST_DATA"],r={};n.forEach(function(t){r[t]=t}),e["a"]=r},ecac:function(t,e,a){"use strict";var n="tea-sys-client";e["a"]={userToken:"".concat(n,"-token"),userId:"".concat(n,"-userid"),userRole:"".concat(n,"-userrole"),userName:"".concat(n,"-username"),password:"".concat(n,"-password"),loginRemember:"".concat(n,"-remember"),version:"".concat(n,"-version")}},f1ed:function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"a",function(){return i}),a.d(e,"c",function(){return o});var n=a("417d");a("5f33"),a("f91a");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e}function i(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0,i=Math.max.apply(Math,Object(n["a"])(t)),o=0;if(i==r)o=2,i=o*e;else{o=Math.ceil((i-r)/e);var c=Math.pow(10,(o+"").length-1);o=Math.ceil(o/c+a)*c,i=e*o}return{min:r,max:i,interval:o}}var o={ios:/\(i[^;]+;( U;)? CPU.+Mac OS X/}}});