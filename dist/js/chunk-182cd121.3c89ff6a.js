(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-182cd121"],{"185c":function(t,e,a){},6362:function(t,e,a){"use strict";var n=a("185c"),i=a.n(n);i.a},"8a00":function(t,e,a){"use strict";a.r(e);var n,i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page home-page"},[a("div",[a("AmountRank"),a("FarmingInfo"),a("PickInfo")],1),a("div",[a("PlantInfo"),a("WarehouseInfo")],1),a("div",[a("OriginData"),a("Iot"),a("LevelInfo")],1)])},o=[],l=(a("0b9e"),a("eb57")),s=a("52c1"),c=a("0706"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Plane",{staticClass:"farming-info-wrap",attrs:{full:t.farmingInfoFullState}},[a("PlaneTitle",[t._v("施肥信息"),a("div",{staticClass:"unit"},[t._v("单位：kg")])]),a("div",{ref:"container",staticClass:"plane-content"}),a("PlaneTools",{attrs:{full:t.farmingInfoFullState},on:{change:t.doFullStateChange}})],1)},h=[],f=(a("612f"),a("b89d")),d=a("3f47"),m=a("3604"),p=a("f1ed"),S=c["a"].HOME,g=Object(s["a"])(S).mapState,b="farmingActdatas",v="farmingInfoFullState",x="$store.state.".concat(S,".").concat(b),O="$store.state.".concat(S,".").concat(v),C="$store.state.windowResizeState",y={name:"app-farming-info",computed:Object(d["a"])({},g([v]),{miniScreen:function(){return this.$store.state.winWidth<1300}}),watch:(n={},Object(f["a"])(n,x,function(){this.doInitOrRefreshChart()}),Object(f["a"])(n,O,function(){this.doInitOrRefreshChart()}),Object(f["a"])(n,C,function(){this.doInitOrRefreshChart()}),n),data:function(){return{container:null,chart:null}},mounted:function(){var t=this;t.$nextTick(function(){t.container=t.$refs.container;var e=t.$store.state[S][b];e.length&&!t.chart&&t.init(e)})},methods:{doInitOrRefreshChart:function(){var t=this,e=t.$store.state[S][b];e&&e.length&&t.container&&(t.chart?t.refresh(e):t.init(e))},init:function(t){var e=this,a=e.container,n=e.handleChartData(t),i=n.values,r=n.titles,o=(e.miniScreen,Object(p["a"])(i,4,.1)),l=o.min,s=o.max,c=o.interval,u={grid:{top:15,left:8,right:8,bottom:2,containLabel:!0},tooltip:{trigger:"axis",formatter:"{b}：{c}kg",backgroundColor:"rgba(0, 159, 253, 0.9)",axisPointer:{lineStyle:{color:"rgba(238, 238, 238, 0.4)"}},textStyle:{fontSize:14}},xAxis:[{type:"category",data:r,boundaryGap:!0,axisTick:{show:!0},axisLine:{lineStyle:{color:"rgba(38, 99, 188, 0.5)"}},axisLabel:{margin:8,textStyle:{color:"#fff",fontSize:12}}}],yAxis:[{show:!0,min:l,max:s,interval:c,splitLine:{show:!0,lineStyle:{type:"dosh",color:"rgba(38, 99, 188, 0.3)"}},axisTick:{show:!0},axisLine:{show:!0,lineStyle:{color:"rgba(38, 99, 188, 0.5)"}},axisLabel:{show:!0,margin:8,textStyle:{color:"#fff",fontSize:12}}}],color:["#4775b7"],series:[{smooth:!0,type:"line",symbolSize:45,symbol:"pin",itemStyle:{normal:{color:"rgba(0, 159, 253, 0.3)",barBorderRadius:0,label:{show:!0,position:"inside",fontSize:9}}},data:i,lineStyle:{type:"dotted",width:1,color:"rgba(0, 159, 253, 0.65)"}}]};e.chart=m["a"].init(a),e.chart.setOption(u)},refresh:function(t){var e=this,a=e.chart,n=e.handleChartData(t),i=n.titles,r=n.values,o=Object(p["a"])(r,4,.1),l=o.min,s=o.max,c=o.interval,u=null;u=e[v]?{grid:{top:32,left:20,right:20,bottom:20},series:[{data:r,symbolSize:60,itemStyle:{normal:{label:{fontSize:12}}}}],xAxis:[{axisLabel:{margin:12,fontSize:15},data:i}],yAxis:[{min:l,max:s,interval:c,axisLabel:{margin:12,fontSize:15}}],tooltip:{textStyle:{fontSize:18}}}:{grid:{top:15,left:8,right:8,bottom:2},series:[{data:r,symbolSize:45,itemStyle:{normal:{label:{fontSize:9}}}}],xAxis:[{axisLabel:{margin:8,fontSize:12},data:i}],yAxis:[{min:l,max:s,interval:c,axisLabel:{margin:8,fontSize:12}}],tooltip:{textStyle:{fontSize:14}}},a.setOption(u),setTimeout(function(){a.resize()},200)},handleChartData:function(t){var e=[],a=[];return t.forEach(function(t){e.push(t.label+"月"),a.push(t.value.toFixed(0)-0)}),{titles:e,values:a}},doFullStateChange:function(t){var e=this;e.$store.commit(S+"/"+l["a"].HOME_CHANGE_FULL_STATE,{fullStateName:v,state:t})}}},w=y,z=a("17cc"),_=Object(z["a"])(w,u,h,!1,null,null,null),$=_.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Plane",{staticClass:"iot-wrap"},[a("PlaneTitle",[t._v("物联监控"),a("div",{staticClass:"unit"},[t._v("单位：台")])]),a("router-link",{staticClass:"plane-container",attrs:{tag:"div",to:{name:"iot"}}},[a("div",{staticClass:"iot-item"},[a("div",[a("i",{staticClass:"iconfont"},[t._v("")]),a("div",[t._v("摄像头")])]),a("div",[t._v(t._s(t.cameraAmount))])]),a("div",{staticClass:"iot-item"},[a("div",[a("i",{staticClass:"iconfont"},[t._v("")]),a("div",[t._v("监测站")])]),a("div",[t._v(t._s(t.monitorAmount))])])])],1)},R=[],T=c["a"].HOME,j=Object(s["a"])(T).mapState,A={name:"app-iot",computed:Object(d["a"])({},j(["cameraAmount","monitorAmount","waterFertilizerAmount"]))},F=A,I=Object(z["a"])(F,E,R,!1,null,null,null),k=I.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Plane",{staticClass:"origin-wrap",attrs:{full:t.originDataFullState}},[a("PlaneTitle",[t._v("溯源排行")]),a("div",{ref:"container",staticClass:"plane-content"}),a("PlaneTools",{attrs:{full:t.originDataFullState},on:{change:t.doFullStateChange}})],1)},D=[];a("54bc");var M,H,P,G,N=c["a"].HOME,W=Object(s["a"])(N).mapState,U="cityDatas",B="$store.state.".concat(N,".").concat(U),J="originDataFullState",K="$store.state.".concat(N,".").concat(J),X="$store.state.windowResizeState",q={name:"home-origin-data",computed:Object(d["a"])({},W([J]),{miniScreen:function(){return this.$store.state.winWidth<1300}}),watch:(i={},Object(f["a"])(i,B,function(){this.doInitOrRefreshChart()}),Object(f["a"])(i,K,function(){this.doInitOrRefreshChart()}),Object(f["a"])(i,X,function(){this.doInitOrRefreshChart()}),i),data:function(){return{container:null,chart:null}},mounted:function(){var t=this;t.$nextTick(function(){t.container=t.$refs.container;var e=t.$store.state[N][U];e.length&&!t.chart&&t.init(e)})},methods:{doInitOrRefreshChart:function(){var t=this,e=t.$store.state[N][U];e&&e.length&&t.container&&(t.chart?t.refresh(e):t.init(e))},init:function(t){var e=this,a=e.container,n=e.miniScreen,i={tooltip:{trigger:"item",show:!0,formatter:"{b}：{c}",backgroundColor:"rgba(0, 159, 253, 0.9)",textStyle:{fontSize:14}},series:[{type:"wordCloud",gridSize:10,sizeRange:n?[12,22]:[14,30],rotationRange:[0,0],shape:"circle",autoSize:{enable:!0,minSize:12},data:t,textStyle:{normal:{color:function(){return"hsla("+[207+Math.round(10*Math.random()),75+Math.round(12*Math.random())+"%",60+Math.round(10*Math.random())+"%",.2+Math.random()].join(",")+")"}},emphasis:{shadowBlur:10,shadowColor:"#333"}}}]};e.chart=m["a"].init(a),e.chart.setOption(i)},refresh:function(t){var e=this,a=e.chart,n=e.miniScreen,i=null;i=e[J]?{series:[{data:t,gridSize:20,sizeRange:[14,50]}],tooltip:{textStyle:{fontSize:18}}}:{series:[{data:t,gridSize:10,sizeRange:n?[12,22]:[14,30]}],tooltip:{textStyle:{fontSize:14}}},a.setOption(i),setTimeout(function(){a.resize()},200)},doFullStateChange:function(t){var e=this;e.$store.commit(N+"/"+l["a"].HOME_CHANGE_FULL_STATE,{fullStateName:J,state:t})}}},Q=q,V=Object(z["a"])(Q,L,D,!1,null,null,null),Y=V.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Plane",{staticClass:"plant-distribute-wrap",attrs:{full:t.mapFullState}},[a("WuyishanMap",{attrs:{curr:t.currSelectedRegion,full:t.mapFullState},on:{change:t.doMapChange}}),a("PlaneTools",{attrs:{full:t.mapFullState},on:{change:t.doFullStateChange}})],1)},tt=[],et=a("df17"),at=c["a"].HOME,nt=Object(s["a"])(at).mapState,it="mapFullState",rt={name:"home-plant-info",components:{WuyishanMap:et["a"]},computed:Object(d["a"])({},nt(["currSelectedRegion",it])),methods:{doMapChange:function(t){var e=this,a=e.$store;a.commit(at+"/"+l["a"].HOME_CHANGE_CURR_REGION,t),a.dispatch(at+"/"+l["a"].HOME_GET_AMOUNT_RANK_DATA,t)},doFullStateChange:function(t){var e=this;e.$store.commit(at+"/"+l["a"].HOME_CHANGE_FULL_STATE,{fullStateName:it,state:t})}}},ot=rt,lt=Object(z["a"])(ot,Z,tt,!1,null,null,null),st=lt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Plane",{staticClass:"warehouse-info-wrap",attrs:{full:t.warehouseFullState}},[a("PlaneTitle",[t._v("入库出库"),a("div",{staticClass:"unit"},[t._v("单位：吨")])]),a("div",{ref:"container",staticClass:"plane-content"}),a("PlaneTools",{attrs:{full:t.warehouseFullState},on:{change:t.doFullStateChange}})],1)},ut=[],ht=a("417d"),ft=c["a"].HOME,dt=Object(s["a"])(ft).mapState,mt="warehouseDatas",pt="warehouseFullState",St="$store.state.".concat(ft,".").concat(mt),gt="$store.state.".concat(ft,".").concat(pt),bt="$store.state.windowResizeState",vt={name:"home-warehouse",computed:Object(d["a"])({},dt(["warehouseUnit",pt]),{miniScreen:function(){return this.$store.state.winWidth<1300}}),watch:(M={},Object(f["a"])(M,St,function(){this.doInitOrRefreshChart()}),Object(f["a"])(M,gt,function(){this.doInitOrRefreshChart()}),Object(f["a"])(M,bt,function(){this.doInitOrRefreshChart()}),M),data:function(){return{container:null,chart:null}},mounted:function(){var t=this;t.$nextTick(function(){t.container=t.$refs.container;var e=t.$store.state[ft][mt];e.length&&!t.chart&&t.init(e)})},methods:{doInitOrRefreshChart:function(){var t=this,e=t.$store.state[ft][mt];e&&t.container&&(t.chart?t.refresh(e):t.init(e))},init:function(t){var e=this,a=e.container,n=e.handleChartData(t),i=n.titles,r=n.values,o=Object(p["a"])([].concat(Object(ht["a"])(r[0]),Object(ht["a"])(r[1])),5),l=o.min,s=o.max,c=o.interval,u=e.miniScreen,h={tooltip:{trigger:"axis",formatter:"{b0}<br/>{a0}: {c0} ".concat(e.warehouseUnit,"<br/>{a1}: {c1} ").concat(e.warehouseUnit),backgroundColor:"rgba(0, 159, 253, 0.9)",axisPointer:{lineStyle:{color:"rgba(238,238,238,0.4)"}},textStyle:{fontSize:14}},legend:{show:!0,data:["入库","出库"],right:67,top:19,itemGap:u?5:15,textStyle:{color:"#d0d0d0",fontSize:u?12:14,padding:[2,0,0,u?0:2]}},grid:{top:50,bottom:2,left:5,right:5,containLabel:!0},xAxis:{data:i,axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{margin:8,interval:0,rotate:0,color:"#fff",fontSize:12}},yAxis:[{min:l,max:s,interval:c,axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{margin:8,interval:0,color:"#fff",fontSize:12},splitLine:{show:!0,lineStyle:{type:"dosh",color:"rgba(238, 238, 238, 0.2)",width:.5}}}],color:["#91acd4","#2663bc"],series:[{name:"入库",type:"bar",barWidth:u?8:10,itemStyle:{normal:{barBorderRadius:5}},data:r[0]},{name:"出库",type:"bar",barWidth:u?8:10,itemStyle:{normal:{barBorderRadius:5}},data:r[1]}]};e.chart=m["a"].init(a),e.chart.setOption(h)},refresh:function(t){var e=this,a=e.chart,n=e.miniScreen,i=e.handleChartData(t),r=i.titles,o=i.values,l=Object(p["a"])([].concat(Object(ht["a"])(o[0]),Object(ht["a"])(o[1])),5),s=l.min,c=l.max,u=l.interval,h=null;h=e[pt]?{tooltip:{textStyle:{fontSize:18}},xAxis:[{data:r,axisLabel:{margin:12,fontSize:15}}],yAxis:[{min:s,max:c,interval:u,axisLabel:{margin:12,fontSize:15}}],grid:{top:58,bottom:20,left:25,right:25},series:[{barWidth:20,data:o[0]},{barWidth:20,data:o[1]}],legend:{itemGap:15,right:90,top:28,textStyle:{fontSize:15,padding:[2,0,0,2]}}}:{tooltip:{textStyle:{fontSize:14}},xAxis:[{data:r,axisLabel:{margin:8,fontSize:12}}],yAxis:[{min:s,max:c,interval:u,axisLabel:{margin:8,fontSize:12}}],grid:{top:50,bottom:2,left:5,right:5},series:[{barWidth:n?8:10,data:o[0]},{barWidth:10,data:o[1]}],legend:{itemGap:n?5:15,right:67,top:19,textStyle:{fontSize:n?12:14,padding:[2,0,0,n?0:2]}}},a.setOption(h),setTimeout(function(){a.resize()},100)},handleChartData:function(t){var e=[],a=[[],[]];return t.in.forEach(function(t){e.push(t.omonth+"月"),a[0].push(t.weight)}),t.out.forEach(function(t){a[1].push(t.weight)}),{titles:e,values:a}},doFullStateChange:function(t){var e=this;e.$store.commit(ft+"/"+l["a"].HOME_CHANGE_FULL_STATE,{fullStateName:pt,state:t})}}},xt=vt,Ot=Object(z["a"])(xt,ct,ut,!1,null,null,null),Ct=Ot.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Plane",{staticClass:"amount-rank-wrap",attrs:{full:t.amountRankFullState}},[a("PlaneTitle",[t._v("茶树排行"),a("div",{staticClass:"unit"},[t._v("单位：亩")])]),a("div",{ref:"container",staticClass:"plane-content"}),a("PlaneTools",{attrs:{full:t.amountRankFullState},on:{change:t.doFullStateChange}})],1)},wt=[],zt=(a("ea65"),c["a"].HOME),_t=Object(s["a"])(zt).mapState,$t="amountRankDatas",Et="amountRankFullState",Rt="$store.state.".concat(zt,".").concat($t),Tt="$store.state.".concat(zt,".").concat(Et),jt="$store.state.windowResizeState",At={name:"home-amount-rank",computed:Object(d["a"])({},_t(["amountRankUnit",Et,"amountRankDatas"])),watch:(H={},Object(f["a"])(H,Rt,function(){this.doInitOrRefreshChart()}),Object(f["a"])(H,Tt,function(){this.doInitOrRefreshChart()}),Object(f["a"])(H,jt,function(){this.doInitOrRefreshChart()}),H),data:function(){return{container:null,chart:null}},mounted:function(){var t=this;t.$nextTick(function(){t.container=t.$refs.container;var e=t.$store.state[zt][$t];e.length&&!t.chart&&t.init(e)})},methods:{doInitOrRefreshChart:function(){var t=this,e=t.$store.state[zt][$t];e&&e.length&&t.container&&(t.chart?t.refresh(e):t.init(e))},init:function(t){var e=this,a=e.container,n=e.handleChartData(t),i=n.titles,r=n.values,o={grid:{top:14,left:5,right:10,bottom:0,containLabel:!0},tooltip:{trigger:"axis",formatter:"{b}：{c} 亩",backgroundColor:"rgba(0, 159, 253, 0.9)",axisPointer:{lineStyle:{color:"rgba(238,238,238,0.4)"}},textStyle:{fontSize:14}},yAxis:[{show:!0,splitLine:{show:!0,lineStyle:{type:"dosh",color:"rgba(238, 238, 238, 0.2)",width:.5}},axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{margin:8,interval:0,rotate:0,color:"#fff",fontSize:12}}],xAxis:{show:!0,data:i,inverse:!0,axisLine:{lineStyle:{color:"#0c3b71"}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#fff",fontSize:12,margin:5,formatter:function(t){return t.split("").join("\n")}}},series:[{type:"bar",yAxisIndex:0,data:r,barWidth:10,itemStyle:{normal:{barBorderRadius:30,color:new m["a"].graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#2663bc"},{offset:1,color:"#003366"}])}}}]};e.chart=m["a"].init(a),e.chart.setOption(o)},refresh:function(t){var e=this,a=e.chart,n=e.handleChartData(t),i=n.titles,r=n.values,o=null;o=e[Et]?{grid:{top:25,left:20,right:20,bottom:20},xAxis:{axisLabel:{margin:12,fontSize:15},data:i},yAxis:[{axisLabel:{margin:12,fontSize:15}}],tooltip:{textStyle:{fontSize:18}},series:[{barWidth:20,data:r}]}:{grid:{top:14,left:5,right:10,bottom:0},xAxis:{axisLabel:{margin:5,fontSize:12},data:i},yAxis:[{axisLabel:{margin:8,fontSize:12}}],tooltip:{textStyle:{fontSize:14}},series:[{barWidth:10,data:r}]},a.setOption(o),setTimeout(function(){a.resize()},100)},handleChartData:function(t){var e=this,a=[],n=[];return t.forEach(function(t){a.push(e.amountRankFullState?t.town:t.town.substring(0,4)),n.push(t.area)}),{titles:a,values:n}},doFullStateChange:function(t){var e=this;e.$store.commit(zt+"/"+l["a"].HOME_CHANGE_FULL_STATE,{fullStateName:Et,state:t})}}},Ft=At,It=Object(z["a"])(Ft,yt,wt,!1,null,null,null),kt=It.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Plane",{staticClass:"pick-info-wrap",attrs:{full:t.pickInfoFullState}},[a("PlaneTitle",[t._v("采摘信息")]),a("div",{staticClass:"plane-content"},[a("div",{ref:"container",staticClass:"chart-container"}),a("div",{staticClass:"chart-title"},[a("h4",[t._v("茶叶总产量")]),a("div",[t._v(t._s(t.teaTotalAmount)),a("span",[t._v("吨")])])])]),a("PlaneTools",{attrs:{full:t.pickInfoFullState},on:{change:t.doFullStateChange}})],1)},Dt=[],Mt=c["a"].HOME,Ht=Object(s["a"])(Mt).mapState,Pt="$store.state.".concat(Mt,".pickDatas"),Gt="pickInfoFullState",Nt="$store.state.".concat(Mt,".").concat(Gt),Wt="$store.state.windowResizeState",Ut={name:"home-pick-info",computed:Object(d["a"])({},Ht(["teaTotalAmount",Gt]),{miniScreen:function(){return this.$store.state.winWidth<1300}}),watch:(P={},Object(f["a"])(P,Pt,function(){this.doInitOrRefreshChart()}),Object(f["a"])(P,Nt,function(){this.doInitOrRefreshChart()}),Object(f["a"])(P,Wt,function(){this.doInitOrRefreshChart()}),P),data:function(){return{container:null,chart:null}},mounted:function(){var t=this;t.$nextTick(function(){t.container=t.$refs.container;var e=t.$store.state[Mt].pickDatas;e.length&&!t.chart&&t.init(e)})},methods:{doInitOrRefreshChart:function(){var t=this,e=t.$store.state[Mt].pickDatas;e&&e.length&&t.container&&(t.chart?t.refresh(e):t.init(e))},init:function(t){var e=this,a=e.container,n=e.miniScreen,i=e.handleChartData(t),r=i.seriesData,o=i.legendData,l={tooltip:{trigger:"item",show:!0,formatter:"{b}：{c}吨 ({d}%)",backgroundColor:"rgba(0, 159, 253, 0.9)",textStyle:{fontSize:14}},legend:{show:!0,data:o,orient:"vertical",right:n?0:"3%",top:10,itemGap:n?5:15,textStyle:{color:"#d0d0d0",fontSize:n?12:14,padding:[2,0,0,n?0:4]}},series:[{type:"pie",radius:["45%",n?"80%":"88%"],center:[n?"38%":"44%","50%"],label:{show:!0,position:"inside",formatter:"{d}%",fontSize:12},color:["#43517c","#87d0f6","#4775b7","#91acd4","#15467d"],data:r,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.chart=m["a"].init(a),e.chart.setOption(l)},refresh:function(t){var e=this,a=e.chart,n=e.handleChartData(t),i=n.seriesData,r=n.legendData,o=null,l=e.miniScreen;o=e[Gt]?{tooltip:{textStyle:{fontSize:18}},series:[{center:[l?"38%":"44%","50%"],radius:["45%","88%"],data:i,label:{fontSize:16}}],legend:{data:r,right:"3.5%",itemGap:20,top:20,textStyle:{fontSize:16}}}:{tooltip:{textStyle:{fontSize:14}},series:[{center:[l?"38%":"44%","50%"],radius:["45%",l?"80%":"88%"],data:i,label:{fontSize:12}}],legend:{data:r,right:l?0:"3%",itemGap:l?5:15,top:10,textStyle:{fontSize:l?12:14,padding:[2,0,0,l?0:4]}}},a.setOption(o),setTimeout(function(){a.resize()},200)},handleChartData:function(t){for(var e=[],a=[],n=null,i=0;i<t.length;i++)n=t[i],a.push({name:n.label,value:n.value}),e.push(n.label);return{legendData:e,seriesData:a}},doFullStateChange:function(t){var e=this;e.$store.commit(Mt+"/"+l["a"].HOME_CHANGE_FULL_STATE,{fullStateName:Gt,state:t})}}},Bt=Ut,Jt=Object(z["a"])(Bt,Lt,Dt,!1,null,null,null),Kt=Jt.exports,Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Plane",{staticClass:"level-info-wrap",attrs:{full:t.levelInfoFullState}},[a("PlaneTitle",[t._v("制茶工艺")]),a("div",{ref:"container",staticClass:"plane-content"}),a("PlaneTools",{attrs:{full:t.levelInfoFullState},on:{change:t.doFullStateChange}})],1)},qt=[],Qt=c["a"].HOME,Vt=Object(s["a"])(Qt).mapState,Yt="levelDatas",Zt="levelInfoFullState",te="$store.state.".concat(Qt,".").concat(Yt),ee="$store.state.".concat(Qt,".").concat(Zt),ae="$store.state.windowResizeState",ne={name:"home-level-info",computed:Object(d["a"])({},Vt(["teaTotalAmount",Zt]),{miniScreen:function(){return this.$store.state.winWidth<1300}}),watch:(G={},Object(f["a"])(G,te,function(){this.doInitOrRefreshChart()}),Object(f["a"])(G,ee,function(){this.doInitOrRefreshChart()}),Object(f["a"])(G,ae,function(){this.doInitOrRefreshChart()}),G),data:function(){return{container:null,chart:null}},mounted:function(){var t=this;t.$nextTick(function(){t.container=t.$refs.container;var e=t.$store.state[Qt][Yt];e.length&&!t.chart&&t.init(e)})},methods:{doInitOrRefreshChart:function(){var t=this,e=t.$store.state[Qt][Yt];e&&e.length&&t.container&&(t.chart?t.refresh(e):t.init(e))},init:function(t){var e=this,a=e.container,n=e.handleChartData(t),i=n.seriesData,r=n.legendData,o=e.miniScreen,l={tooltip:{trigger:"item",show:!0,formatter:"{b}：{c}吨 ({d}%)",backgroundColor:"rgba(0, 159, 253, 0.9)",textStyle:{fontSize:14}},legend:{show:!0,data:r,orient:"vertical",right:o?0:"3%",top:10,itemGap:o?5:15,textStyle:{color:"#d0d0d0",fontSize:o?12:14,padding:[2,0,0,o?0:4]}},series:[{type:"pie",radius:["45%",o?"80%":"88%"],center:[o?"38%":"44%","50%"],label:{show:!0,position:"inside",formatter:"{d}%",fontSize:12},color:["#43517c","#87d0f6","#4775b7","#91acd4","#15467d"],data:i,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};e.chart=m["a"].init(a),e.chart.setOption(l)},refresh:function(t){var e=this,a=e.chart,n=e.handleChartData(t),i=n.seriesData,r=n.legendData,o=null,l=e.miniScreen;o=e[Zt]?{tooltip:{textStyle:{fontSize:18}},series:[{center:[l?"38%":"44%","50%"],radius:["45%","88%"],data:i,label:{fontSize:16}}],legend:{data:r,right:"4%",top:20,itemGap:20,textStyle:{fontSize:16}}}:{tooltip:{textStyle:{fontSize:14}},series:[{center:[l?"38%":"44%","50%"],radius:["45%",l?"80%":"88%"],data:i,label:{fontSize:12}}],legend:{data:r,right:l?0:"3%",itemGap:l?5:15,top:10,textStyle:{fontSize:l?12:14,padding:[2,0,0,l?0:4]}}},a.setOption(o),setTimeout(function(){a.resize()},200)},handleChartData:function(t){for(var e=[],a=[],n=null,i=0;i<t.length;i++)n=t[i],a.push({name:n.grade,value:n.gravity}),e.push(n.grade);return{legendData:e,seriesData:a}},doFullStateChange:function(t){var e=this;e.$store.commit(Qt+"/"+l["a"].HOME_CHANGE_FULL_STATE,{fullStateName:Zt,state:t})}}},ie=ne,re=Object(z["a"])(ie,Xt,qt,!1,null,null,null),oe=re.exports,le=c["a"].HOME,se=(Object(s["a"])(le).mapState,{name:"home-index",components:{FarmingInfo:$,Iot:k,OriginData:Y,PlantInfo:st,WarehouseInfo:Ct,AmountRank:kt,PickInfo:Kt,LevelInfo:oe},created:function(){var t=this,e=t.$store;e.commit(l["a"].SWITCH_LOADING,!1),e.dispatch(le+"/"+l["a"].HOME_GET_AMOUNT_RANK_DATA)},beforeDestroy:function(){var t=this,e=t.$store;e.commit(le+"/"+l["a"].HOME_CHANGE_CURR_REGION,"");var a=["mapFullState","amountRankFullState","farmingInfoFullState","pickInfoFullState","warehouseFullState","originDataFullState","levelInfoFullState"];a.forEach(function(t){e.commit(le+"/"+l["a"].HOME_CHANGE_FULL_STATE,{fullStateName:t,state:!1})})}}),ce=se,ue=(a("6362"),Object(z["a"])(ce,r,o,!1,null,null,null));e["default"]=ue.exports},df17:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wuyishan-map-container"},[a("div",{ref:"container"}),a("div",{staticClass:"curr-region"},[a("a",{on:{click:function(e){return t.doClearMap()}}},[t._v("武夷山市")]),a("i",{directives:[{name:"show",rawName:"v-show",value:t.curr,expression:"curr"}]}),a("a",[t._v(t._s(t.curr))])])])},i=[],r=(a("612f"),a("0b9e"),a("3a23"),a("997e")),o=a.n(r),l=(a("44a2"),a("3604")),s=200,c={"星村镇":0,"兴田镇":30,"洋庄乡":10,"五夫镇":20,"上梅乡":0,"岚谷乡":0,"吴屯乡":20,"新丰街道":30,"崇安街道":0,"武夷街道":20},u={name:"WuyishanMap",props:{curr:{type:String,default:"",required:!0},full:{type:Boolean,default:!1}},watch:{full:function(){var t=this;t.refresh()}},data:function(){return{chart:null,currSelectedRegion:"",mapDatas:o()(c).map(function(t){return{name:t,value:c[t]}})}},created:function(){var t=this;if(t.curr)for(var e=0;e<t.mapDatas.length;e++)if(t.mapDatas[e].name==t.curr){t.mapDatas[e].value=s;break}},mounted:function(){var t=this;t.$nextTick(function(){t.$ajax({url:"./map.json"}).then(function(e){l["a"].registerMap("wuyishan",e),t.chart=l["a"].init(t.$refs.container),t.chart.setOption({backgroundColor:"transparent",dataRange:{show:!1,x:"left",y:"bottom",splitList:[{start:0,end:0,color:"rgba(31, 80, 150, 0.7)"},{start:10,end:10,color:"rgba(71, 120, 190, 0.7)"},{start:20,end:20,color:"rgba(75, 147, 250, 0.7)"},{start:30,end:30,color:"rgba(134, 184, 255, 0.7)"},{start:s,end:s,color:"rgba(135, 208, 246, 0.8)"}]},series:[{type:"map",mapType:"wuyishan",itemStyle:{emphasis:{areaColor:"rgba(135, 208, 246, 0.7)",borderWidth:0},normal:{areaColor:"#1f5096",borderColor:"#3B5077",borderWidth:0}},label:{emphasis:{textStyle:{color:"#ffffff",fontSize:15}},normal:{show:!0,textStyle:{color:"#ffffff",fontSize:12}}},roam:!0,zoom:1.2,data:t.mapDatas}]}),t.chart.on("click",function(e){t.doClickMap(e.name)}),window.addEventListener("resize",t.refresh)})})},methods:{doClickMap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this;e.curr==t&&(t="");var a=e.chart,n=a.getOption();e.mapDatas.forEach(function(e){e.value=e.name==t?s:c[e.name]});var i=n.series;i[0].data=e.mapDatas,a.setOption({series:i}),e.$emit("change",t)},doClearMap:function(){var t=this;t.doClickMap("")},refresh:function(){var t=this;setTimeout(function(){var e=t.chart;if(e){var a=null;a=t.full?{series:[{label:{normal:{textStyle:{fontSize:16}}}}]}:{series:[{label:{normal:{textStyle:{fontSize:12}}}}]},e.setOption(a),e.resize()}},120)}},beforeDestroy:function(){var t=this;window.removeEventListener("resize",t.refresh)}},h=u,f=a("17cc"),d=Object(f["a"])(h,n,i,!1,null,null,null);e["a"]=d.exports},ea65:function(t,e,a){"use strict";var n=a("d635"),i=a("4d65"),r=a("d4f6"),o=a("1ff3"),l=a("33f2"),s=a("b21e"),c=a("31d0"),u=a("201d"),h=Math.min,f=[].push,d="split",m="length",p="lastIndex",S=4294967295,g=!u(function(){RegExp(S,"y")});a("c5aa")("split",2,function(t,e,a,u){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[m]||2!="ab"[d](/(?:ab)*/)[m]||4!="."[d](/(.?)(.?)/)[m]||"."[d](/()()/)[m]>1||""[d](/.?/)[m]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return a.call(i,t,e);var r,o,l,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?S:e>>>0,g=new RegExp(t.source,u+"g");while(r=c.call(g,i)){if(o=g[p],o>h&&(s.push(i.slice(h,r.index)),r[m]>1&&r.index<i[m]&&f.apply(s,r.slice(1)),l=r[0][m],h=o,s[m]>=d))break;g[p]===r.index&&g[p]++}return h===i[m]?!l&&g.test("")||s.push(""):s.push(i.slice(h)),s[m]>d?s.slice(0,d):s}:"0"[d](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,n){var i=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,i,n):b.call(String(i),a,n)},function(t,e){var n=u(b,t,this,e,b!==a);if(n.done)return n.value;var c=i(t),f=String(this),d=r(c,RegExp),m=c.unicode,p=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),v=new d(g?c:"^(?:"+c.source+")",p),x=void 0===e?S:e>>>0;if(0===x)return[];if(0===f.length)return null===s(v,f)?[f]:[];var O=0,C=0,y=[];while(C<f.length){v.lastIndex=g?C:0;var w,z=s(v,g?f:f.slice(C));if(null===z||(w=h(l(v.lastIndex+(g?0:C)),f.length))===O)C=o(f,C,m);else{if(y.push(f.slice(O,C)),y.length===x)return y;for(var _=1;_<=z.length-1;_++)if(y.push(z[_]),y.length===x)return y;C=O=w}}return y.push(f.slice(O)),y}]})}}]);