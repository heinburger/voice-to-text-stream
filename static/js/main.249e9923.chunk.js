(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,n){e.exports=n(379)},171:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),s=(n(169),n(171),n(162)),c=n.n(s),u=n(3),l=function(e){var t=e.store,n=e.children;return r.a.createElement(u.Provider,{view:t.view,router:t.router,translate:t.translate,settings:t.settings,speechRecognition:t.speechRecognition},n)},p=n(7),h=n(149),g=n.n(h),d=n(76),m=n.n(d),v=Object(u.inject)("view")(Object(u.observer)(function(e){var t=e.view,n=e.children;return r.a.createElement(p.MuiThemeProvider,{theme:Object(p.createMuiTheme)({drawerWidth:260,typography:{useNextVariants:!0},bodyColor:{dark:m.a.A400,light:m.a[50]},palette:{primary:g.a,type:t.lightThemeActive?"light":"dark"}})},n)})),f=n(30),b=n.n(f),w=Object(p.withStyles)(function(e){return{title:Object.assign({},e.mixins.gutters(),{flex:"1 1 auto"})}})(function(e){var t=e.classes,n=e.title;return r.a.createElement(b.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},n)}),O=n(31),j=n.n(O),E=n(150),S=n.n(E),x=Object(u.inject)("view")(function(e){var t=e.view;return r.a.createElement(j.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return t.toggleTempDrawer()}},r.a.createElement(S.a,null))}),y=n(151),R=n.n(y),T=Object(u.inject)("view")(function(e){var t=e.view;return r.a.createElement(j.a,{color:"inherit","aria-label":"toggle light theme",onClick:function(){return t.toggleLightTheme()}},r.a.createElement(R.a,null))}),k=n(75),D=n.n(k),A=function(){return r.a.createElement(D.a,null,r.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))},C=n(25),P=n.n(C),N=n(47),I=function(){return window.innerWidth},H=function(){return window.innerHeight},z=function(){return window.navigator.onLine},G="undefined"!==typeof window&&!!(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition),L="undefined"!==typeof window&&!!window.localStorage,W="undefined"!==typeof window&&"undefined"!==typeof window.navigator&&!!window.navigator.permissions;function F(){return U.apply(this,arguments)}function U(){return(U=Object(N.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.navigator.permissions.query({name:"microphone"});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 11:case"end":return e.stop()}},e,this,[[0,7]])}))).apply(this,arguments)}function B(){return M.apply(this,arguments)}function M(){return(M=Object(N.a)(P.a.mark(function e(){var t,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.navigator.mediaDevices.getUserMedia({audio:!0});case 3:return t=e.sent,(n=t.getAudioTracks()).length&&n[0].stop(),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,this,[[0,9]])}))).apply(this,arguments)}function V(){return(V=Object(N.a)(P.a.mark(function e(){var t,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!W){e.next=7;break}return e.next=3,F();case 3:return t=e.sent,e.abrupt("return","granted"===t.state);case 7:return e.next=9,B();case 9:return n=e.sent,e.abrupt("return",n);case 11:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function q(){return(q=Object(N.a)(P.a.mark(function e(){var t,n=arguments;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:function(){return!1},e.prev=1,e.next=4,window.navigator.permissions.query({name:"microphone"});case 4:return e.sent.onchange=t,e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,this,[[1,9]])}))).apply(this,arguments)}var Z="undefined"!==typeof window&&"undefined"!==typeof window.navigator&&!!window.navigator.mediaDevices;function K(){return(K=Object(N.a)(P.a.mark(function e(){var t;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.navigator.mediaDevices.enumerateDevices();case 3:return t=e.sent,e.abrupt("return",t.filter(function(e){return"audioinput"===e.kind&&"default"!==e.deviceId}));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}},e,this,[[0,7]])}))).apply(this,arguments)}var _=function(){return r.a.createElement(j.a,{color:"inherit","aria-label":"go to github",onClick:function(){return e="https://github.com/heinburger/voice-to-text-stream",void window.open(e);var e}},r.a.createElement(A,null))},J=n(11),Y=n(17),X=n(21),$=n(20),Q=n(22),ee=n(77),te=n.n(ee),ne=function(e){function t(){return Object(J.a)(this,t),Object(X.a)(this,Object($.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{buttonRef:function(t){return e.button=t},color:"inherit","aria-label":"recording",onClick:this.props.speechRecognition.stopRecognition},r.a.createElement(te.a,null))}}]),t}(a.Component),ae=Object(u.inject)("speechRecognition")(ne),re=Object(u.inject)("view","translate")(Object(u.observer)(function(e){var t=e.view;e.translate;return r.a.createElement(r.a.Fragment,null,t.showTempDrawer?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null),t.recording&&r.a.createElement(ae,null),r.a.createElement(w,null),r.a.createElement(T,null),r.a.createElement(_,null))})),ie=n(153),oe=n.n(ie),se=Object(p.withStyles)(function(e){return{wrapper:Object.assign({},e.mixins.toolbar,{display:"flex"}),drawerHeader:Object.assign({},e.mixins.gutters(),{display:"flex",alignItems:"center",overflow:"hidden"}),caption:{paddingLeft:"".concat(e.spacing.unit,"px"),paddingTop:"".concat(e.spacing.unit/2,"px")},h6:{cursor:"pointer","&:hover":{color:e.palette.secondary[e.palette.type],textDecoration:"underline"}}}})(Object(u.inject)("router","translate")(Object(u.observer)(function(e){var t=e.classes,n=e.router,a=e.translate;return r.a.createElement("div",{className:t.wrapper},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(b.a,{variant:"h6",className:t.h6,noWrap:!0,onClick:function(){return n.goTo("/")}},a.getText("Voice to text"))))}))),ce=n(23),ue=n(55),le=n.n(ue),pe=n(57),he=n.n(pe),ge=n(54),de=n.n(ge),me=n(56),ve=n.n(me),fe=[];[["Afrikaans",["af-ZA"]],["Bahasa Indonesia",["id-ID"]],["Bahasa Melayu",["ms-MY"]],["Catal\xe0",["ca-ES"]],["\u010ce\u0161tina",["cs-CZ"]],["Deutsch",["de-DE"]],["English",["en-AU","Australia"],["en-CA","Canada"],["en-IN","India"],["en-NZ","New Zealand"],["en-ZA","South Africa"],["en-GB","United Kingdom"],["en-US","United States"]],["Espa\xf1ol",["es-AR","Argentina"],["es-BO","Bolivia"],["es-CL","Chile"],["es-CO","Colombia"],["es-CR","Costa Rica"],["es-EC","Ecuador"],["es-SV","El Salvador"],["es-ES","Espa\xf1a"],["es-US","Estados Unidos"],["es-GT","Guatemala"],["es-HN","Honduras"],["es-MX","M\xe9xico"],["es-NI","Nicaragua"],["es-PA","Panam\xe1"],["es-PY","Paraguay"],["es-PE","Per\xfa"],["es-PR","Puerto Rico"],["es-DO","Rep\xfablica Dominicana"],["es-UY","Uruguay"],["es-VE","Venezuela"]],["Euskara",["eu-ES"]],["Fran\xe7ais",["fr-FR"]],["Galego",["gl-ES"]],["Hrvatski",["hr_HR"]],["IsiZulu",["zu-ZA"]],["\xcdslenska",["is-IS"]],["Italiano",["it-IT","Italia"],["it-CH","Svizzera"]],["Magyar",["hu-HU"]],["Nederlands",["nl-NL"]],["Norsk bokm\xe5l",["nb-NO"]],["Polski",["pl-PL"]],["Portugu\xeas",["pt-BR","Brasil"],["pt-PT","Portugal"]],["Rom\xe2n\u0103",["ro-RO"]],["Sloven\u010dina",["sk-SK"]],["Suomi",["fi-FI"]],["Svenska",["sv-SE"]],["T\xfcrk\xe7e",["tr-TR"]],["\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",["bg-BG"]],["P\u0443\u0441\u0441\u043a\u0438\u0439",["ru-RU"]],["\u0421\u0440\u043f\u0441\u043a\u0438",["sr-RS"]],["\ud55c\uad6d\uc5b4",["ko-KR"]],["\u4e2d\u6587",["cmn-Hans-CN","\u666e\u901a\u8bdd (\u4e2d\u56fd\u5927\u9646)"],["cmn-Hans-HK","\u666e\u901a\u8bdd (\u9999\u6e2f)"],["cmn-Hant-TW","\u4e2d\u6587 (\u53f0\u7063)"],["yue-Hant-HK","\u7cb5\u8a9e (\u9999\u6e2f)"]],["\u65e5\u672c\u8a9e",["ja-JP"]],["Lingua lat\u012bna",["la"]]].forEach(function(e){e.forEach(function(t,n){n>0&&fe.push({name:t[1]?"".concat(e[0]," (").concat(t[1],")"):e[0],tag:t[0]})})});var be=fe,we=Object(p.withStyles)(function(e){return{formControl:{width:"100%",marginTop:"".concat(e.spacing.unit,"px")}}})(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement(de.a,Object.assign({className:t.formControl},n))}),Oe=function(e){function t(){var e,n;Object(J.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(X.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r))))._handleChange=function(e){n.props.settings.setLanguage(e.target.value)},n}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.settings,n=e.translate;return r.a.createElement(we,null,r.a.createElement(le.a,{htmlFor:"language-simple"},n.getText("Language")),r.a.createElement(ve.a,{value:t.language,onChange:this._handleChange,inputProps:{name:"language",id:"language-simple"}},be.map(function(e){var t=e.name,n=e.tag;return r.a.createElement(he.a,{key:n,value:n},t)})))}}]),t}(r.a.Component),je=Object(u.inject)("settings","translate")(Object(u.observer)(Oe)),Ee=Object(p.withStyles)(function(e){return{caption:{paddingTop:"".concat(e.spacing.unit,"px"),color:e.palette.text.secondary}}})(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement(b.a,Object.assign({variant:"caption",className:t.caption,noWrap:!0},n))}),Se=function(e){function t(){return Object(J.a)(this,t),Object(X.a)(this,Object($.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.settings,n=e.translate;return r.a.createElement(Ee,null,n.getText("Online status"),t.onlineStatus?" \ud83d\udc4d":" \ud83d\udc4e")}}]),t}(r.a.Component),xe=Object(u.inject)("settings","translate")(Object(u.observer)(Se)),ye=function(e){function t(){return Object(J.a)(this,t),Object(X.a)(this,Object($.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.settings,n=e.translate;return r.a.createElement(Ee,null,n.getText("localStorage support"),t.localStorageSupported?" \ud83d\udc4d":" \ud83d\udc4e")}}]),t}(r.a.Component),Re=Object(u.inject)("settings","translate")(Object(u.observer)(ye)),Te=function(e){function t(){return Object(J.a)(this,t),Object(X.a)(this,Object($.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.settings,n=e.translate;return r.a.createElement(Ee,null,n.getText("Speech recognition support"),t.speechRecognitionSupported?" \ud83d\udc4d":" \ud83d\udc4e")}}]),t}(r.a.Component),ke=Object(u.inject)("settings","translate")(Object(u.observer)(Te)),De=function(e){function t(){return Object(J.a)(this,t),Object(X.a)(this,Object($.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.settings,n=e.translate;return r.a.createElement(Ee,null,n.getText("Audio support"),t.audioSupported?" \ud83d\udc4d":" \ud83d\udc4e")}}]),t}(r.a.Component),Ae=Object(u.inject)("settings","translate")(Object(u.observer)(De)),Ce=n(152),Pe=n.n(Ce),Ne=function(e){function t(){return Object(J.a)(this,t),Object(X.a)(this,Object($.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.settings,n=e.translate;return r.a.createElement("div",null,r.a.createElement(Ee,null,n.getText("Audio permission"),t.audioPermission?" \ud83d\udc4d":" \ud83d\udc4e"),!t.audioPermission&&r.a.createElement(Pe.a,{variant:"contained",onClick:t.requestAudioPermission},n.getText("Request")))}}]),t}(r.a.Component),Ie=Object(u.inject)("settings","translate")(Object(u.observer)(Ne)),He=Object(p.withStyles)(function(e){return{formControl:{width:"100%",marginTop:"".concat(e.spacing.unit,"px")}}})(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement(de.a,Object.assign({className:t.formControl},n))}),ze=function(e){function t(){var e,n;Object(J.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(X.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r))))._handleChange=function(e){n.props.settings.setAudioSource(e.target.value)},n}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.settings,n=e.translate;return r.a.createElement(He,null,r.a.createElement(le.a,{htmlFor:"audio-simple"},n.getText("Audio source")),r.a.createElement(ve.a,{value:t.audioSource,onChange:this._handleChange,inputProps:{name:"audio",id:"audio-simple"}},r.a.createElement(he.a,{key:"default",value:"default"},n.getText("Default")),t.audioDevices.map(function(e){return r.a.createElement(he.a,{key:e.deviceId,value:e.deviceId},e.label||n.getText("Unknown"))})))}}]),t}(r.a.Component),Ge=Object(u.inject)("settings","translate")(Object(u.observer)(ze)),Le=Object(p.withStyles)(function(e){return{wrapper:e.mixins.gutters()}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.wrapper},r.a.createElement(xe,null),r.a.createElement(Re,null),r.a.createElement(ke,null),r.a.createElement(je,null),r.a.createElement(Ae,null),r.a.createElement(Ie,null),r.a.createElement(Ge,null))}),We=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null),r.a.createElement(oe.a,null),r.a.createElement(Le,null))},Fe=n(53),Ue=n.n(Fe),Be=Object(p.withStyles)(function(e){return{wrapper:{flexGrow:1,zIndex:1,height:"100vh",overflow:"hidden",position:"relative",display:"flex",width:"100%"}}})(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement("div",Object.assign({className:t.wrapper},n))}),Me=Object(u.inject)("view")(function(e){var t=e.children,n=e.view;return r.a.createElement(Be,null,t,r.a.createElement(Ue.a,{target:"window",onResize:n.onScreenResize}))}),Ve=n(78),qe=n.n(Ve),Ze=Object(p.withStyles)(function(e){return{drawerPaper:{width:e.drawerWidth,position:"relative"}}})(function(e){var t=e.classes,n=e.children;return r.a.createElement(qe.a,{variant:"permanent",anchor:"left",classes:{paper:t.drawerPaper}},n)}),Ke=Object(p.withStyles)(function(e){return{drawerPaper:{width:e.drawerWidth}}})(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement(qe.a,Object.assign({variant:"temporary",anchor:"left",classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},n))}),_e=Object(u.inject)("view")(Object(u.observer)(function(e){var t=e.view,n=e.children;return r.a.createElement(Ke,{open:t.tempDrawerOpen,onClose:t.toggleTempDrawer},n)})),Je=Object(u.inject)("view")(Object(u.observer)(function(e){var t=e.view,n=e.children;return t.showTempDrawer?r.a.createElement(_e,null,n):r.a.createElement(Ze,null,n)})),Ye=n(154),Xe=n(155),$e=n.n(Xe),Qe=n(156),et=n.n(Qe),tt=Object(p.withStyles)(function(e){return{appBar:Object(Ye.a)({right:0,left:"auto",position:"absolute"},e.breakpoints.up("md"),{width:"calc(100% - ".concat(e.drawerWidth,"px)")})}})(function(e){var t=e.classes,n=e.children;return r.a.createElement($e.a,{className:t.appBar},r.a.createElement(et.a,null,n))}),nt=Object(p.withStyles)(function(e){return{toolbar:Object.assign({},e.mixins.toolbar,{flex:"0 0 auto"}),main:{backgroundColor:e.palette.background.default,flex:"1 1 auto",overflow:"auto",display:"flex",flexDirection:"column"},content:{flex:"1 1 auto",display:"flex",flexDirection:"column"}}})(function(e){var t=e.classes,n=e.children;return r.a.createElement("main",{className:t.main},r.a.createElement("div",{className:t.toolbar}),r.a.createElement("div",{className:t.content},n))}),at=n(157),rt=n.n(at),it=Object(p.withStyles)(function(e){return{message:Object.assign({},e.mixins.gutters(),{paddingTop:"".concat(e.spacing.unit,"px"),color:e.palette.text.secondary})}})(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement(b.a,Object.assign({variant:"h5",className:t.message},n))}),ot=Object(u.inject)("translate")(Object(u.observer)(function(e){var t=e.translate;return r.a.createElement(it,null,r.a.createElement(rt.a,{style:{verticalAlign:"middle"}})," ".concat(t.getText("Speech recognition is not supported by your device.")))})),st=n(158),ct=n.n(st),ut=Object(p.withStyles)(function(e){return{textField:{flex:"1 1 250px"}}})(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement(ct.a,Object.assign({InputLabelProps:{shrink:!0},className:t.textField},n))}),lt=function(e){function t(){var e,n;Object(J.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(X.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).handleOnChange=function(e){var t=n.props.view,a=t.recording,r=t.setText,i=n.props.speechRecognition.stopRecognition;a?i():r(e.target.value)},n.handleOnFocus=function(e){var t=n.props.view.recording,a=n.props.speechRecognition.stopRecognition;t?a():e.target.select()},n}return Object(Q.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.view,n=t.text,a=t.guessText,i=t.inputRows,o=this.props.translate;return this.guess&&(this.guess.scrollTop=this.guess.scrollHeight),this.output&&(this.output.scrollTop=this.output.scrollHeight),r.a.createElement("div",{style:{flex:"1 0 auto",display:"flex",flexWrap:"wrap"}},r.a.createElement(ut,{variant:"filled",inputRef:function(t){return e.guess=t},rows:i,disabled:!0,placeholder:o.getText('Guesses show up here... say things like "new paragraph" or "period" for punctuation'),label:o.getText("Guess"),multiline:!0,value:a,onChange:function(){return!1}}),r.a.createElement(ut,{variant:"filled",inputRef:function(t){return e.output=t},rows:i,placeholder:"...",InputLabelProps:{shrink:!0},multiline:!0,value:n,label:o.getText("Output"),onChange:this.handleOnChange,onFocus:this.handleOnFocus}))}}]),t}(a.Component),pt=Object(u.inject)("view","translate","speechRecognition")(Object(u.observer)(lt)),ht=n(159),gt=n.n(ht),dt=n(161),mt=n.n(dt),vt=n(160),ft=n.n(vt),bt=function(e){return{fab:{margin:e.spacing.unit},container:{position:"fixed",right:e.spacing.unit,bottom:e.spacing.unit}}},wt=Object(p.withStyles)(bt)(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement(gt.a,Object.assign({className:t.fab},n))}),Ot=Object(p.withStyles)(bt)(function(e){var t=e.classes,n=Object(ce.a)(e,["classes"]);return r.a.createElement("div",Object.assign({className:t.container},n))}),jt=Object(u.inject)("view","speechRecognition","translate")(Object(u.observer)(function(e){var t=e.view,n=e.speechRecognition,a=(e.translate,t.recording),i=t.clearText,o=t.text,s=t.screenWidth,c=n.startRecognition,u=n.stopRecognition;return r.a.createElement(Ot,null,a?r.a.createElement(wt,{size:s<600?"small":"large",color:"secondary",onClick:u},r.a.createElement(ft.a,null)):r.a.createElement(wt,{size:s<600?"small":"large",color:"primary",onClick:c},r.a.createElement(te.a,null)),r.a.createElement(wt,{size:s<600?"small":"large",disabled:!o,onClick:i},r.a.createElement(mt.a,null)))})),Et=Object(u.inject)("settings")(Object(u.observer)(function(e){return e.settings.speechRecognitionSupported?r.a.createElement(r.a.Fragment,null,r.a.createElement(pt,null),r.a.createElement(jt,null)):r.a.createElement(ot,null)})),St=function(e){var t=e.store;return r.a.createElement(l,{store:t},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(v,null,r.a.createElement(Me,null,r.a.createElement(tt,null,r.a.createElement(re,null)),r.a.createElement(Je,null,r.a.createElement(We,null)),r.a.createElement(nt,null,r.a.createElement(Et,null))))))},xt=n(2),yt=function(){function e(t){var n=this;Object(J.a)(this,e),this.recording=!1,this.text="",this.guessText="",this.tempDrawerOpen=!1,this.screenWidth=I(),this.screenHeight=H(),this.lightThemeActive=!1,this.onScreenResize=function(){n.screenWidth=I(),n.screenHeight=H()},this.toggleTempDrawer=function(){n.tempDrawerOpen=!n.tempDrawerOpen},this.closeTempDrawer=function(){n.tempDrawerOpen=!1},this.toggleLightTheme=function(){n.lightThemeActive=!n.lightThemeActive},this.setText=function(e){n.text=e},this.clearText=function(){n.text=""},this.addText=function(e){n.text=n.text+e},this.setGuessText=function(e){n.guessText=e||"..."},this.startRecording=function(){n.recording=!0},this.stopRecording=function(){n.recording=!1},this.appStore=t}return Object(Y.a)(e,[{key:"showTempDrawer",get:function(){return this.screenWidth<960}},{key:"inputRows",get:function(){return(this.screenHeight-130)/19}}]),e}();Object(xt.decorate)(yt,{recording:xt.observable,text:xt.observable,guessText:xt.observable,tempDrawerOpen:xt.observable,screenWidth:xt.observable,screenHeight:xt.observable,lightThemeActive:xt.observable,showTempDrawer:xt.computed,inputRows:xt.computed,onScreenResize:xt.action,toggleTempDrawer:xt.action,closeTempDrawer:xt.action,toggleLightTheme:xt.action,setText:xt.action,clearText:xt.action,setGuessText:xt.action,startRecording:xt.action,stopRecording:xt.action});var Rt=yt,Tt=function e(t){var n=this;Object(J.a)(this,e),this.initRecognition=function(){var e=G?window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition:null;n.recognition=new e,n.recognition.continuous=!0,n.recognition.interimResults=!0,n.recognition.lang=n.appStore.settings.language,n.recognition.onstart=function(e){console.log("SpeechRecognition.onstart")},n.recognition.onresult=function(e){if(console.log("SpeechRecognition.onresult"),n.appStore.view.recording){for(var t="",a="",r=e.resultIndex;r<e.results.length;r++)e.results[r].isFinal?a=e.results[r][0].transcript:t=r>0?t+e.results[r][0].transcript:e.results[r][0].transcript;n.setOutput(a),n.setGuess(t)}},n.recognition.onspeechend=function(){console.log("SpeechRecognition.onspeechend")},n.recognition.onerror=function(e){console.log("SpeechRecognition.onerror")},n.recognition.onaudiostart=function(e){console.log("SpeechRecognition.onaudiostart")},n.recognition.onaudioend=function(e){console.log("SpeechRecognition.onaudioend")},n.recognition.onend=function(e){console.log("SpeechRecognition.onend"),n.stopRecognition()},n.recognition.onnomatch=function(e){console.log("SpeechRecognition.onnomatch")},n.recognition.onsoundstart=function(e){console.log("SpeechRecognition.onsoundstart")},n.recognition.onsoundend=function(e){console.log("SpeechRecognition.onsoundend")},n.recognition.onspeechstart=function(e){console.log("SpeechRecognition.onspeechstart")}},this.output="",this.guess="",this.lastGuess="",this.startRecognition=function(){n.recognition||n.initRecognition(),n.output="",n.guess="",n.lastGuess="",n.recognition.start(),n.appStore.view.startRecording()},this.stopRecognition=function(){n.guess&&n.appStore.view.addText(n.guess+" "),n.appStore.view.setGuessText(""),n.output="",n.guess="",n.appStore.view.stopRecording();try{n.recognition.stop()}catch(e){}},this.setOutput=function(e){n.output=e,n.guess="",n.appStore.view.addText(e)},this.setGuess=function(e){n.guess=e,n.appStore.view.setGuessText(n.guess)},this.appStore=t};Object(xt.decorate)(Tt,{output:xt.observable,guess:xt.observable,startRecognition:xt.action,stopRecognition:xt.action,setOutput:xt.action,setGuess:xt.action});var kt=Tt,Dt=n(163),At=n.n(Dt),Ct=function e(t){var n=this;Object(J.a)(this,e),this.pathname="",this.goTo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";n.history.push(e),n.appStore.view.showTempDrawer&&n.appStore.view.tempDrawerOpen&&n.appStore.view.closeTempDrawer()},this.setPathname=function(e){n.pathname=e},this.appStore=t,this.history=At()({basename:"/voice-to-text-stream"}),this.setPathname(this.history.location.pathname),this.history.listen(function(e,t){n.setPathname(e.pathname),console.log("The last navigation action was ".concat(t))})};Object(xt.decorate)(Ct,{pathname:xt.observable,goTo:xt.action,setPathname:xt.action});var Pt=Ct,Nt=function e(t){var n=this;Object(J.a)(this,e),this.translations={"Voice to text":{"de-DE":"Stimme zum Text"},Language:{"de-DE":"Sprache"},"Online status":{"de-DE":"Online Status"},"localStorage support":{"de-DE":"Speicherunterst\xfctzung"},"Speech recognition support":{"de-DE":"Spracherkennungsunterst\xfctzung"},"Audio support":{"de-DE":"Audio-Unterst\xfctzung"},"Audio permission":{"de-DE":"Audio-Erlaubnis"},"Audio source":{"de-DE":"Audio quelle"},Default:{"de-DE":"Standard"},Unknown:{"de-DE":"Unbekannte"},Request:{"de-DE":"Anfordern"},'Guesses show up here... say things like "new paragraph" or "period" for punctuation':{"de-DE":'Vermutungen tauchen hier auf... sagen Dinge wie "neuer Absatz" oder "Punkt" f\xfcr Interpunktion'},Guess:{"de-DE":"Vermutung"},Output:{"de-DE":"Ausgang"}},this.getText=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.translations[e]&&n.translations[e][n.appStore.settings.language]?n.translations[e][n.appStore.settings.language]:e},this.appStore=t};Object(xt.decorate)(Nt,{});var It=Nt,Ht=function e(t){var n=this;Object(J.a)(this,e),this.onlineStatus=z(),this.language=function(e){var t;try{t=window.localStorage.getItem(e)}catch(n){return console.log(n),null}return t}("language")||"de-DE",this.audioSource="default",this.audioDevices=[],this.audioPermission=!0,this.setOnlineStatus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n.onlineStatus=e},this.setLanguage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"de-DE";!function(e,t){try{window.localStorage.setItem(e,t)}catch(n){return console.log(n),!1}}("language",e),n.language=e,n.appStore.speechRecognition.recognition&&(n.appStore.speechRecognition.recognition.lang=e)},this.setAudioSource=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n.audioSource=e},this.setAudioDevices=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.audioDevices=e},this.setAudioPermission=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n.audioPermission=e,n.updateAudioDevices()},this.appStore=t,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1},t=function(){return e(z())};window.addEventListener("offline",t),window.addEventListener("online",t)}(this.setOnlineStatus),this.localStorageSupported=L,this.speechRecognitionSupported=G,this.audioSupported=Z,this.permissionSupported=W,this.requestAudioPermission=function(){return B().then(n.setAudioPermission)},this.updateAudioPermission=function(){return function(){return V.apply(this,arguments)}().then(n.setAudioPermission)},this.updateAudioPermission(),function(){q.apply(this,arguments)}(this.updateAudioPermission),this.updateAudioDevices=function(){return function(){return K.apply(this,arguments)}().then(n.setAudioDevices)},this.updateAudioDevices(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!1};try{window.navigator.mediaDevices.ondevicechange=e}catch(t){return console.log(t),!1}}(this.updateAudioDevices)};Object(xt.decorate)(Ht,{onlineStatus:xt.observable,language:xt.observable,audioSource:xt.observable,audioDevices:xt.observable,audioPermission:xt.observable,setOnlineStatus:xt.action,setLanguage:xt.action,setAudioSource:xt.action,setAudioDevices:xt.action,setAudioPermission:xt.action});var zt=Ht;Object(xt.configure)({enforceActions:"observed"});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(St,{store:new function e(){Object(J.a)(this,e),this.view=new Rt(this),this.speechRecognition=new kt(this),this.router=new Pt(this),this.translate=new It(this),this.settings=new zt(this)}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,2,1]]]);
//# sourceMappingURL=main.249e9923.chunk.js.map