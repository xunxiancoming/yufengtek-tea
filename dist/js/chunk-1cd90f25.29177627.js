(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cd90f25"],{"43ff":function(e,t,s){},"539d":function(e,t,s){var i=s("b2f5"),o=s("f01a"),n=s("b6f1"),a=s("c9ea"),r="["+a+"]",u="​",c=RegExp("^"+r+r+"*"),m=RegExp(r+r+"*$"),p=function(e,t,s){var o={},r=n(function(){return!!a[e]()||u[e]()!=u}),c=o[e]=r?t(l):a[e];s&&(o[s]=c),i(i.P+i.F*r,"String",o)},l=p.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(m,"")),e};e.exports=p},"96e28":function(e,t,s){"use strict";var i=s("43ff"),o=s.n(i);o.a},c9ea:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e426:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page login-page"},[s("div",{staticClass:"dialog"},[s("h2",[e._v("用户登录")]),s("input",{staticStyle:{display:"none"},attrs:{type:"password",name:"password"}}),s("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"loginName"}}),s("div",{staticClass:"input-item account"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginName,expression:"loginName"}],ref:"loginNameInput",attrs:{disabled:e.isProcessing,type:"text",name:"loginName",disableautocomplete:"",autocomplete:"off",maxlength:"50",tabindex:"1"},domProps:{value:e.loginName},on:{input:function(t){t.target.composing||(e.loginName=t.target.value)}}}),s("i"),s("i"),s("i"),s("i")]),s("div",{staticClass:"input-item password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"passwordInput",attrs:{disabled:e.isProcessing,type:"password",name:"password",disableautocomplete:"",autocomplete:"new-password",maxlength:"50",tabindex:"2"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("i"),s("i"),s("i"),s("i")]),s("div",{staticClass:"remember",class:{active:e.loginRemember},on:{click:function(t){return e.switchLoginRemember()}}},[s("i",{staticClass:"iconfont"},[e._v("")]),s("div"),e._v("记住密码")]),s("div",{staticClass:"login-button"},[s("button",{on:{click:function(t){return e.doLogin()}}},[e._v("登录")])]),s("div",{staticClass:"login-tip",class:{active:e.showTip}},[e._v(e._s(e.tipStr))])]),s("div",{staticClass:"title"},[s("h1",{class:{active:e.showMainTitle}},[s("span",[e._v("武")]),s("span",[e._v("夷")]),s("span",[e._v("山")]),s("span",[e._v("市")]),s("span",[e._v("智")]),s("span",[e._v("慧")]),s("span",[e._v("茗")]),s("span",[e._v("园")]),s("span",[e._v("数")]),s("span",[e._v("据")]),s("span",[e._v("平")]),s("span",[e._v("台")])]),s("h4",{class:{active:e.showSubTitle}},[e._v("基于物联网监控的大数据服务，为茶叶质量保驾护航")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showExitApp,expression:"showExitApp"}],staticClass:"exit-app-btn",on:{click:function(t){return e.doExitApp()}}},[s("i"),e._v("退出")])])},o=[],n=(s("e836"),s("ecac")),a=s("eb57"),r=s("c4f2"),u=localStorage,c={name:"login-index",data:function(){return{loginName:"",password:"",isProcessing:!1,tipStr:"",showTip:!1,timer:null,showMainTitle:!1,showSubTitle:!1,showExitApp:/yfkjtea/i.test(navigator.userAgent),loginRemember:!("0"==u.getItem(n["a"].loginRemember))}},created:function(){var e=this,t=e.$store;t.commit(a["a"].SWITCH_LOADING,!1),document.body.addEventListener("keypress",e.doPresskey)},mounted:function(){var e=this;e.$nextTick(function(){var t=e.$store.state,s=t.userName,i=u.getItem(n["a"].password)||"",o=e.$refs;setTimeout(function(){o.passwordInput.value=e.password=i,o.loginNameInput.value=e.loginName=s,s?i||o.passwordInput.focus():o.loginNameInput.focus()},800),setTimeout(function(){e.showMainTitle=!0},1e3),setTimeout(function(){e.showSubTitle=!0},3e3)})},methods:{doExitApp:function(){location.href="exitAppRequest?exitApp=1"},showMessage:function(e){var t=this;t.tipStr=e,t.timer&&clearTimeout(t.timer),t.showTip=!0,t.timer=setTimeout(function(){t.showTip=!1},3e3)},switchLoginRemember:function(){var e=this;e.loginRemember=!e.loginRemember,e.loginRemember?(u.setItem(n["a"].userName,e.loginName),u.setItem(n["a"].password,e.password)):(u.removeItem(n["a"].userName),u.removeItem(n["a"].password))},doLogin:function(){var e=this,t=e.$store;e.checkForm()&&(e.isProcessing=!0,t.commit(a["a"].SWITCH_LOADING,!0),e.$ajax({url:"/data/user/login",method:"post",data:{username:e.loginName.trim(),password:e.password.trim()}}).then(function(s){if(t.commit(a["a"].SWITCH_LOADING,!1),200!=s.code)e.showMessage("您输入的账号或者密码不正确！");else{e.showMessage("登录成功！");var i=s.repData,o={"BS+":"2",DT:"1"};t.commit(a["a"].UPDATE_USER_INFO,{userToken:i.tokenKey,userId:"",userName:e.loginName.trim(),userRole:o[i.user_type]||"0",password:e.password.trim(),loginRemember:e.loginRemember}),setTimeout(function(){e.$router.push({name:"home"})},500),Object(r["a"])(),t.dispatch(a["a"].GET_APP_VIDEO_TOKEN)}setTimeout(function(){e.isProcessing=!1},100)}))},checkForm:function(){var e=this,t=e.$refs;return e.loginName.trim()?!!e.password.trim()||(t.passwordInput.focus(),e.showMessage("请输入密码！"),!1):(t.loginNameInput.focus(),e.showMessage("请输入您的账号！"),!1)},doPresskey:function(e){13===e.keyCode&&this.doLogin()}},beforeDestroy:function(){document.body.removeEventListener("keypress",this.doPresskey)}},m=c,p=(s("96e28"),s("17cc")),l=Object(p["a"])(m,i,o,!1,null,null,null);t["default"]=l.exports},e836:function(e,t,s){"use strict";s("539d")("trim",function(e){return function(){return e(this,3)}})}}]);