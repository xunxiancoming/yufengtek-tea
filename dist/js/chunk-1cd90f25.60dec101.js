(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cd90f25"],{"43ff":function(e,t,s){},"539d":function(e,t,s){var i=s("b2f5"),n=s("f01a"),o=s("b6f1"),a=s("c9ea"),r="["+a+"]",u="​",m=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),l=function(e,t,s){var n={},r=o(function(){return!!a[e]()||u[e]()!=u}),m=n[e]=r?t(p):a[e];s&&(n[s]=m),i(i.P+i.F*r,"String",n)},p=l.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(m,"")),2&t&&(e=e.replace(c,"")),e};e.exports=l},"96e28":function(e,t,s){"use strict";var i=s("43ff"),n=s.n(i);n.a},c9ea:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e426:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page login-page"},[s("div",{staticClass:"dialog"},[s("h2",[e._v("用户登录")]),s("input",{staticStyle:{display:"none"},attrs:{type:"password",name:"password"}}),s("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"loginName"}}),s("div",{staticClass:"input-item account"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.loginName,expression:"loginName"}],ref:"loginNameInput",attrs:{disabled:e.isProcessing,type:"text",name:"loginName",disableautocomplete:"",autocomplete:"off",maxlength:"50",tabindex:"1"},domProps:{value:e.loginName},on:{input:function(t){t.target.composing||(e.loginName=t.target.value)}}}),s("i"),s("i"),s("i"),s("i")]),s("div",{staticClass:"input-item password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"passwordInput",attrs:{disabled:e.isProcessing,type:"password",name:"password",disableautocomplete:"",autocomplete:"new-password",maxlength:"50",tabindex:"2"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("i"),s("i"),s("i"),s("i")]),s("div",{staticClass:"remember",class:{active:e.loginRemember},on:{click:function(t){return e.switchLoginRemember()}}},[s("i",{staticClass:"iconfont"},[e._v("")]),s("div"),e._v("记住密码")]),s("div",{staticClass:"login-button"},[s("button",{on:{click:function(t){return e.doLogin()}}},[e._v("登录")])]),s("div",{staticClass:"login-tip",class:{active:e.showTip}},[e._v(e._s(e.tipStr))])]),s("div",{staticClass:"title"},[s("h1",{class:{active:e.showMainTitle}},[s("span",[e._v("武")]),s("span",[e._v("夷")]),s("span",[e._v("山")]),s("span",[e._v("市")]),s("span",[e._v("智")]),s("span",[e._v("慧")]),s("span",[e._v("茗")]),s("span",[e._v("园")]),s("span",[e._v("数")]),s("span",[e._v("据")]),s("span",[e._v("平")]),s("span",[e._v("台")])]),s("h4",{class:{active:e.showSubTitle}},[e._v("基于物联网监控的大数据服务，为茶叶质量保驾护航")])])])},n=[],o=(s("e836"),s("ecac")),a=s("eb57"),r=s("c4f2"),u=localStorage,m={name:"login-index",data:function(){return{loginName:"",password:"",isProcessing:!1,tipStr:"",showTip:!1,timer:null,showMainTitle:!1,showSubTitle:!1,loginRemember:!("0"==u.getItem(o["a"].loginRemember))}},created:function(){var e=this,t=e.$store;t.commit(a["a"].SWITCH_LOADING,!1),document.body.addEventListener("keypress",e.doPresskey)},mounted:function(){var e=this;e.$nextTick(function(){var t=e.$store.state,s=t.userName,i=u.getItem(o["a"].password)||"",n=e.$refs;setTimeout(function(){n.passwordInput.value=e.password=i,n.loginNameInput.value=e.loginName=s,s?i||n.passwordInput.focus():n.loginNameInput.focus()},800),setTimeout(function(){e.showMainTitle=!0},1e3),setTimeout(function(){e.showSubTitle=!0},3e3)})},methods:{showMessage:function(e){var t=this;t.tipStr=e,t.timer&&clearTimeout(t.timer),t.showTip=!0,t.timer=setTimeout(function(){t.showTip=!1},3e3)},switchLoginRemember:function(){var e=this;e.loginRemember=!e.loginRemember,e.loginRemember?(u.setItem(o["a"].userName,e.loginName),u.setItem(o["a"].password,e.password)):(u.removeItem(o["a"].userName),u.removeItem(o["a"].password))},doLogin:function(){var e=this,t=e.$store;e.checkForm()&&(e.isProcessing=!0,t.commit(a["a"].SWITCH_LOADING,!0),e.$ajax({url:"/data/user/login",method:"post",data:{username:e.loginName.trim(),password:e.password.trim()}}).then(function(s){if(t.commit(a["a"].SWITCH_LOADING,!1),200!=s.code)e.showMessage("您输入的账号或者密码不正确！");else{e.showMessage("登录成功！");var i=s.repData,n={"BS+":"2",DT:"1"};t.commit(a["a"].UPDATE_USER_INFO,{userToken:i.tokenKey,userId:"",userName:e.loginName.trim(),userRole:n[i.user_type]||"0",password:e.password.trim(),loginRemember:e.loginRemember}),setTimeout(function(){e.$router.push({name:"home"})},500),Object(r["a"])()}setTimeout(function(){e.isProcessing=!1},100)}))},checkForm:function(){var e=this,t=e.$refs;return e.loginName.trim()?!!e.password.trim()||(t.passwordInput.focus(),e.showMessage("请输入密码！"),!1):(t.loginNameInput.focus(),e.showMessage("请输入您的账号！"),!1)},doPresskey:function(e){13===e.keyCode&&this.doLogin()}},beforeDestroy:function(){document.body.removeEventListener("keypress",this.doPresskey)}},c=m,l=(s("96e28"),s("17cc")),p=Object(l["a"])(c,i,n,!1,null,null,null);t["default"]=p.exports},e836:function(e,t,s){"use strict";s("539d")("trim",function(e){return function(){return e(this,3)}})}}]);