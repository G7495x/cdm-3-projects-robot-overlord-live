(this["webpackJsonprobot-overlord-react"]=this["webpackJsonprobot-overlord-react"]||[]).push([[0],[,,,,,function(e,t){e.exports={x:{position:[0,11.32,0],axis:[0,1,0],angles:{home:0,min:-120,max:120},objs:["2_Shoulder.obj"]},y:{position:[0,7.524,0],axis:[0,0,1],angles:{home:-90,min:-170,max:0},objs:["3_Bicep.obj"],parent:"x"},z:{position:[0,35.796,0],axis:[0,0,1],angles:{home:0,min:-83.369,max:86},objs:["4_Forearm.obj"],parent:"y"},u:{position:[29.207,6.406,0],axis:[1,0,0],angles:{home:0,min:-175,max:175},objs:["5_TuningFork.obj"],parent:"z"},v:{position:[9.513,0,0],axis:[0,0,1],angles:{home:0,min:-120,max:120},objs:["6_PicassoBox.obj"],parent:"u"},w:{position:[5.423,0,0],axis:[1,0,0],angles:{home:0,min:-170,max:170},objs:["7_Hand.obj"],parent:"v"},t:{position:[0,0,0],axis:[0,0,0],angles:{home:180,min:10,max:180},objs:["8_ClampBase.obj"],parent:"w"},t_l:{position:[10.634,0,-4.05],axis:[0,0,0],angles:{home:0,min:0,max:0},objs:["9_Clamp_Left_Fixed.obj"],parent:"t"},t_r:{position:[10.634,0,4.05],axis:[0,0,0],angles:{home:0,min:0,max:0},objs:["9_Clamp_Right_Fixed.obj"],parent:"t"}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(92)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./1_Anchor.obj":73,"./2_Shoulder.obj":74,"./3_Bicep.obj":75,"./4_Forearm.obj":76,"./5_TuningFork.obj":77,"./6_PicassoBox.obj":78,"./7_Hand.obj":79,"./8_ClampBase.obj":80,"./9_Clamp_Left_Fixed.obj":81,"./9_Clamp_Right_Fixed.obj":82};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=72},function(e,t,a){e.exports=a.p+"static/media/1_Anchor.05a3563c.obj"},function(e,t,a){e.exports=a.p+"static/media/2_Shoulder.67fa005d.obj"},function(e,t,a){e.exports=a.p+"static/media/3_Bicep.6eb28d2f.obj"},function(e,t,a){e.exports=a.p+"static/media/4_Forearm.bab2fed0.obj"},function(e,t,a){e.exports=a.p+"static/media/5_TuningFork.69d3d423.obj"},function(e,t,a){e.exports=a.p+"static/media/6_PicassoBox.78e539c9.obj"},function(e,t,a){e.exports=a.p+"static/media/7_Hand.bfb064cf.obj"},function(e,t,a){e.exports=a.p+"static/media/8_ClampBase.659054d7.obj"},function(e,t,a){e.exports=a.p+"static/media/9_Clamp_Left_Fixed.45fe70fc.obj"},function(e,t,a){e.exports=a.p+"static/media/9_Clamp_Right_Fixed.1e1f6339.obj"},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(37),i=a.n(r),c=a(15),s=(a(48),a(3)),l=(a(49),a(12)),m=(a(50),a(14)),u=a(10),d=a.n(u),p=a(19),f=a.n(p),E=a(9),v=a(1),h=a(38),b=a(23),g=a.n(b),S=a(39),x=a(40),N=(a(70),a(5)),w=a.n(N),y=(a(71),new(a(41).a));function j(e,t,a,n){var o=e/t;a.setSize(e,t),a.setPixelRatio(window.devicePixelRatio),n.fov=45*(o>1?1:Math.atan(1/o)/v.l.DEG2RAD/45),n.aspect=o,n.updateProjectionMatrix()}var _,O=new v.z({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),T=O.domElement;T.id="PoseToImgCanvas",document.body.appendChild(T);var k={},P=new v.p;P.position.set(100,100,-100),P.lookAt(0,30,0),j(320,240,O,P);var A,C,H,I,R,L={};function F(e){var t=e.pose,a=e.cache,r=Object(n.useContext)(re).state,i=L[t];if(r.isPoseToImgReady&&!i){var c=JSON.parse(t);d.a.forIn(k,(function(e,t){return e.rotateSection(c[t])})),O.render(_,P),i=T.toDataURL(),!1!==a&&(L[t]=i)}return o.a.createElement("img",Object.assign({src:i},d.a.omit(e,["pose","cache"]),{"data-pose":t,alt:""}))}var M={},D={},J=(new v.y(90,90,-90),["1_Anchor.obj"].concat(Object(m.a)(Object.values(w.a).flatMap((function(e){return e.objs})))).filter((function(e){return e}))),z=Promise.all(J.map((function(e){return t=a(72)("./"+e),new Promise((function(e,a){try{y.load(t,(function(t){return e(t)}),null,null,null)}catch(n){a(n)}}));var t}))).then((function(e){e.forEach((function(e,t){return M[J[t]]=e}))}));function B(){return A=Object(n.useRef)(),Object(n.useEffect)((function(){Object(S.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C=new v.z({antialias:!0,canvas:A.current,alpha:!0,preserveDrawingBuffer:!0}),H=new v.u,(I=new v.p).position.set(90,90,-90),I.lookAt(0,30,0),(R=new x.a(I,C.domElement)).enableDamping=!0,R.enablePan=!1,R.dampingFactor=.1,R.rotateSpeed=.5,R.maxPolarAngle=Math.PI/2,R.target.set(0,30,0),G(),window.addEventListener("resize",G,!0),(t=new v.q).position.set(0,100,0),H.add(t),(a=new v.a).intensity=.25,H.add(a),e.next=22,z;case 22:n=H.clone(),o=d.a.mapValues(M,(function(e){return e.clone()})),W(_=n,o,k),console.log("isPoseToImgReady"),$(["SET_STATE",{isPoseToImgReady:!0}]),W(H,M,D),q();case 25:case"end":return e.stop()}var n,o}),e)})))()}),[]),o.a.createElement("canvas",{id:"SimRobot",ref:A})}function G(){j(A.current.offsetWidth,A.current.offsetHeight,C,I)}function W(e,t,a){d.a.forIn(w.a,(function(e,n){return a[n]=function(e,t,a,n){var o,r=Object(h.a)(v.y,Object(m.a)(e.axis)),i=new v.o;i.name="section-"+t,(o=i.position).set.apply(o,Object(m.a)(e.position)),i.setRotationFromAxisAngle(r,e.angles.home*v.l.DEG2RAD);var c=new v.o;i.add(c),c.name="section-"+t+"-inner",e.objs.map((function(e){return c.add(a[e])})),i.sectionName=t,i.inner=c,i.axis=r,i.rotateSection=function(t){t=v.l.clamp(t,e.angles.min,e.angles.max),i.sectionAngle!==t&&(i.sectionAngle=t,c.setRotationFromAxisAngle(r,-t*v.l.DEG2RAD))},i.rotateSection(e.angles.home),e.parent&&n[e.parent].inner.add(i);return i}(e,n,t,a)}));var n=a.t.inner,o=n.children[1].inner,r=n.children[2].inner;a.t.rotateSection=function(e){var t=(e-w.a.t.angles.max)/w.a.t.angles.max*.7;o.position.z=t*w.a.t_l.position[2],r.position.z=t*w.a.t_r.position[2]},e.add(t["1_Anchor.obj"]),e.add(a.x)}function q(){requestAnimationFrame(q),R.update(),R.object.position,C.render(H,I)}var U;a(83);function K(){var e=Object(n.useContext)(re),t=e.state,a=e.dispatch,r=t.historySeekPos,i=t.poseHistory,c=t.simPose,s=t.historyLockHand,l=t.historySeekbarPrecision;return r===i.length&&(U=JSON.stringify(c)),o.a.createElement("div",{id:"HistoryTimeline"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"f-center px-8 py-4 spb-x-8"},o.a.createElement("div",{className:"fa fa-history"}),o.a.createElement("div",{className:"b-700"},"History Timeline")),o.a.createElement("div",{className:"f-center px-8 py-4 pr-0"},o.a.createElement("span",{className:"h7"},"Don't affect Hand State"),o.a.createElement("input",{className:"ml-8",type:"checkbox",checked:s,onChange:function(e){var t=e.target;a(["SET_HISTORY_LOCK_HAND",t.checked])}})),o.a.createElement("div",{className:"f-center px-8 py-4 pr-0",style:{visibility:i.length?"visible":"hidden"}},o.a.createElement("span",{className:"h7"},"Slider position"),o.a.createElement("input",{className:"mx-8 text-center h7 b-500",type:"number",value:r,onChange:function(e){var t=e.target.valueAsNumber;return a(["HISTORY_SEEK",t])}})),o.a.createElement("div",{className:"fa fa-minus f-center px-16 ml-auto",onClick:function(){return a(["SET_STATE",{showHistoryTimeline:!1}])}})),o.a.createElement("div",{className:"seekbar f-center",style:{height:"30px"}},o.a.createElement("div",{className:"text-center h7"},"Preview"),i.length>=1?o.a.createElement("input",{type:"range",min:"0",max:i.length,step:1/Math.pow(10,l),value:r,onChange:function(e){var t=e.target.valueAsNumber;return a(["HISTORY_SEEK",t])},style:{width:136*i.length+"px"}}):void 0),o.a.createElement("div",{className:"row spc-8 f-nowrap scroll-x"},i.map((function(e,t){return o.a.createElement(F,{key:t,pose:e,onClick:function(){return a(["HISTORY_SEEK",t])}})})),o.a.createElement("div",{className:"col-extrude p-8 current d-flex"},o.a.createElement(F,{cache:!1,pose:U,onClick:function(){return a(["HISTORY_SEEK",i.length])}}),o.a.createElement("div",{className:"vertical-text h7 b-500 f-center"},o.a.createElement("div",{className:"mb-auto"},"Current Pose"),o.a.createElement("div",{className:"fa fa-chevron-right"})))))}var Y,V,$,Q={},X=function(e,t){var a=Object(l.a)(t,2),n=a[0],o=a[1];return"false"===(Q=function e(t,a,n){var o;switch(a){case"SET_STATE":return Object(E.a)(Object(E.a)({},t),n);case"SET_SIM_ANGLES":for(var r in n)n[r]=v.l.clamp(+n[r].toFixed(3),w.a[r].angles.min,w.a[r].angles.max),D[r].rotateSection(n[r]);return Object(E.a)(Object(E.a)({},t),{},{simPose:n});case"GO":return t.online&&f.a.put("https://".concat(t.IP,":7878/goto"),t.simPose),o=JSON.stringify(t.simPose),Y!==o&&(t.poseHistory.push(o),t.historySeekPos=t.poseHistory.length,Y=o),Object(E.a)({},t);case"HISTORY_SEEK":isNaN(+n)&&(n=0),n=v.l.clamp(+n,0,t.poseHistory.length);var i=Math.floor(n),c=Math.ceil(n),s=+(n%1).toFixed(t.historySeekbarPrecision),l=JSON.parse(U);i=i>=t.poseHistory.length?l:JSON.parse(t.poseHistory[i]),c=c>=t.poseHistory.length?l:JSON.parse(t.poseHistory[c]);var m=function(e,t,a){return d.a.mapValues(e,(function(n,o){return v.l.lerp(e[o],t[o],a)}))}(i,c,s);return t.historyLockHand&&(m.t=l.t),e(Object(E.a)(Object(E.a)({},t),{},{historySeekPos:n}),"SET_SIM_ANGLES",m);case"SET_HISTORY_LOCK_HAND":return e(Object(E.a)(Object(E.a)({},t),{},{historyLockHand:n}),"HISTORY_SEEK",t.historySeekPos);default:return t}}(e,n,o)).isPolling&&(Q.isPolling=!1),"true"===Q.isPolling&&(Q.isPolling=!0),V!==(e.showHistoryTimeline||e.showSequenceControl)&&(console.log("Bottom drawer changed"),window.setTimeout(G,0),V=e.showHistoryTimeline||e.showSequenceControl),"SET_SIM_ANGLES"===n&&(Q.historySeekPos=e.poseHistory.length),Q};var Z,ee,te=JSON.stringify(d.a.mapValues(w.a,(function(e){return e.angles.home}))),ae=JSON.parse(te),ne=JSON.parse(te),oe=JSON.stringify({isPolling:!0,IP:"",simPose:JSON.parse(te),online:!1,camFeedState:"searching",camFeedMaximize:!1,isPoseToImgReady:!1,showHistoryTimeline:!0,showSequenceControl:!1,showLibrary:!1,poseHistory:[],historySeekPos:0,historyLockHand:!0,historySeekbarPrecision:2}),re=Object(n.createContext)(JSON.parse(oe)),ie=["IP","isPolling"],ce=!1,se=Object(s.e)((function(e){var t,a=e.children,r=e.location,i=e.history,c=Object(n.useReducer)(X,JSON.parse(oe)),s=Object(l.a)(c,2);return t=s[0],$=s[1],Object(n.useEffect)(u,[].concat(Object(m.a)(ie.map((function(e){return t[e]}))),[r.pathname])),Object(n.useEffect)((function(){$(["SET_STATE",{camFeedState:"searching"}])}),[t.IP]),ce||function(){console.log("componentWillMount");var e=d.a.pick(Object.fromEntries(new URLSearchParams(r.search)),ie);$(["SET_STATE",e]),window.setInterval((function(){Q.isPolling&&f.a.get("https://".concat(Q.IP,":7878/live")).then((function(e){ae=e.position,ne=e.target,$(["SET_STATE",{online:!0}])})).catch((function(e){return $(["SET_STATE",{online:!1}])}))}),1e3),u()}(),o.a.createElement(re.Provider,{value:{state:t,dispatch:$}},a);function u(){console.log("stateToUrl"),ce?i.replace(r.pathname+"?"+new URLSearchParams(d.a.pick(t,ie)).toString()):(i.replace("/login?"+new URLSearchParams(d.a.pick(t,ie)).toString()),ce=!0)}})),le=Object(s.e)((function(e){var t=e.history,a=Object(n.useContext)(re),r=a.state,i=a.dispatch,c=Object(n.useState)(!1),s=Object(l.a)(c,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){return u(!0)}),[]),o.a.createElement("form",Object.assign({id:"Login",className:m?"active":void 0},{onSubmit:function(e){e.preventDefault(),u(!1),window.setTimeout((function(){return t.push("/")}),500)}}),o.a.createElement("section",null,m?o.a.createElement("style",null,"#cam-feed, #cam-feed:hover:not(.active){ z-index: 1; transform: scale(1,1); right: calc(50% - 320px); bottom: calc(50% - 213px); border-radius: 6px; transition: opacity .5s; }"):void 0,o.a.createElement("div",{className:"cam-feed-container"}),o.a.createElement("div",{className:"row spc-12 f-center"},o.a.createElement("label",{htmlFor:"login-ip"},"Robot IP Address"),o.a.createElement("input",{id:"login-ip",className:"col",type:"text",name:"Robot IP",value:r.IP,onChange:function(e){var t=e.target;return i(["SET_STATE",{IP:t.value}])}}),o.a.createElement("button",{className:"outline"},"Go"))))})),me=a(2);a(88),a(89);function ue(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),r=a[0],i=a[1];return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:e.id,className:(e.className||"")+" accordion"+(r?" expanded":""),onClick:function(){return i(!r)}},e.head),o.a.createElement("div",{style:{maxHeight:e.maxHeight}},e.children))}function de(){var e=Object(n.useContext)(re);return Z=e.state,ee=e.dispatch,o.a.createElement("div",{id:"RightSidebar",className:"row f-vert f-nowrap scroll-y"},o.a.createElement("div",{className:"accordion-container"},o.a.createElement(ue,{head:"Arm Angles",maxHeight:"176 px"},["x","y","z"].map((function(e){return o.a.createElement(pe,Object.assign({i:e},{key:e}))})))),o.a.createElement("div",{className:"accordion-container"},o.a.createElement(ue,{head:"Wrist Angles",maxHeight:"176 px"},["u","v","w"].map((function(e){return o.a.createElement(pe,Object.assign({i:e},{key:e}))})))),o.a.createElement("div",{className:"accordion-container"},o.a.createElement(ue,{head:"Hand State",maxHeight:"64 px"},["t"].map((function(e){return o.a.createElement(pe,Object.assign({i:e},{key:e}))})))),o.a.createElement("div",{className:"col-extrude row spc-12"},o.a.createElement("div",{className:"button outline col-12 row f-center",onClick:function(){return ee(["SET_SIM_ANGLES",JSON.parse(te)])}},o.a.createElement("div",{className:"icon-home super-center"}),o.a.createElement("div",{className:"col text-center"},"Load Home Pose")),o.a.createElement("div",{className:"button outline col-12 row f-center",onClick:function(){return ee(["SET_SIM_ANGLES",ae])}},o.a.createElement("div",{className:"icon-joystick super-center"}),o.a.createElement("div",{className:"col text-center"},"Load Real World Pose")),o.a.createElement("div",{className:"button outline col-12 row f-center",onClick:function(){return ee(["SET_SIM_ANGLES",ne])}},o.a.createElement("div",{className:"icon-node_link_direction super-center"}),o.a.createElement("div",{className:"col text-center"},"Load Target Pose"))),o.a.createElement("div",{className:"f-grow-1"}),o.a.createElement("div",{className:"col-extrude row spc-12"},o.a.createElement("div",{className:"col-extrude col-12 row spc-12 f-center"},o.a.createElement("div",{className:"h7 ml-auto mt-12"},Z.isPolling?Z.online?"Online":"Offline":void 0)),o.a.createElement("div",{className:"button outline col-12 row f-center"},o.a.createElement("div",{className:"icon-stop super-center",style:{fontSize:"11px"}}),o.a.createElement("div",{className:"col text-center"},"Emergency Stop")),o.a.createElement("div",{className:"button outline col-12 row f-center",onClick:function(){return ee(["GO"])}},o.a.createElement("div",{className:"icon-play super-center"}),o.a.createElement("div",{className:"col text-center"},"Go")),Z.showSequenceControl?o.a.createElement("div",{className:"button outline col-12 row f-center"},o.a.createElement("div",{className:"fa fa-forward super-center"}),o.a.createElement("div",{className:"col text-center"},"Play Sequence")):void 0))}function pe(e){var t=e.i,a=w.a[t],r=Object(n.useState)(!1),i=Object(l.a)(r,2),c=i[0],s=i[1];return o.a.createElement("div",{className:"p-8 pt-2"},o.a.createElement("div",{className:"row mt-0"},o.a.createElement("label",{className:"uppercase"},t),o.a.createElement("div",{className:"col",style:{height:"30px"}},o.a.createElement("input",Object.assign({type:"range",min:a.angles.min,max:a.angles.max,value:Z.simPose[t]},{onChange:u},{step:".1"})))),o.a.createElement("div",{className:"trim sliding-row"},o.a.createElement("div",{className:"row f-nowrap mt-0"+(c?" active":"")},o.a.createElement("div",{className:"col-6 row mr-8"},o.a.createElement("div",{className:"button outline super-center icon-reply p-0",title:"Reset",onClick:function(){return s(!0)}}),o.a.createElement("div",{className:"pl-10 col row f-justify-space-between"},o.a.createElement("div",{className:"col text-muted h7"},a.angles.min),o.a.createElement("input",Object.assign({className:"text-center py-2",type:"number",value:Z.simPose[t]},{onChange:u})),o.a.createElement("div",{className:"col text-muted h7 text-right"},a.angles.max),o.a.createElement("div",{className:"row-breaker"}))),o.a.createElement("div",{className:"col-6 row mr-8 f-center"},o.a.createElement("div",{className:"button outline super-center icon-cross_mark",onClick:function(){return s(!1)}}),o.a.createElement("div",{className:"mr-auto ml-8"},"Reset to:"),o.a.createElement("button",{title:"Home angle",className:"outline ml-8 h8 icon-home",style:{height:"22px"},onClick:function(){return m(JSON.parse(te)[t])},tabIndex:"-1"}),o.a.createElement("button",{title:"Actual angle",className:"outline ml-8 h8 icon-joystick",style:{height:"22px"},onClick:function(){return m(ae[t])},tabIndex:"-1"}),o.a.createElement("button",{title:"Target angle",className:"outline ml-8 h8 icon-node_link_direction",style:{height:"22px"},onClick:function(){return m(ne[t])},tabIndex:"-1"})))));function m(e){s(!1),u({target:{valueAsNumber:e}})}function u(e){var a=e.target.valueAsNumber;ee(["SET_SIM_ANGLES",Object(E.a)(Object(E.a)({},Z.simPose),{},Object(me.a)({},t,a))])}}a(90);function fe(){var e=Object(n.useContext)(re),t=e.state,a=e.dispatch,r=t.showHistoryTimeline,i=t.showSequenceControl,c=t.showLibrary;return o.a.createElement("div",{id:"BottomDrawer"},!1===(r||i)?o.a.createElement("style",null,":root{ --bottomDrawerHeight: 46px }"):void 0,o.a.createElement("div",{id:"taskbar",className:"row spc-8 f-end"},o.a.createElement("div",{className:"button outline row f-center"+(r?" active":""),onClick:function(){return a(["SET_STATE",{showHistoryTimeline:!r}])}},o.a.createElement("div",{className:"fa fa-history super-center"}),o.a.createElement("div",{className:"col text-center mr-m30"},"History Timeline"),o.a.createElement("div",{className:"fa fa-history super-center"})),o.a.createElement("div",{className:"button outline row f-center"+(i?" active":""),onClick:function(){return a(["SET_STATE",{showSequenceControl:!i}])}},o.a.createElement("div",{className:"icon-layout_directed super-center"}),o.a.createElement("div",{className:"col text-center mr-m30"},"Sequence Controls"),o.a.createElement("div",{className:"icon-layout_directed super-center"})),o.a.createElement("div",{className:"button outline row f-center"+(c?" active":""),onClick:function(){return a(["SET_STATE",{showLibrary:!c}])}},o.a.createElement("div",{className:"fa fa-bookmark super-center"}),o.a.createElement("div",{className:"col text-center mr-m30"},"Library"),o.a.createElement("div",{className:"fa fa-bookmark super-center"})),o.a.createElement("div",{className:"ml-auto h7"},"App Version: 0.1.1")),r?o.a.createElement(K,null):void 0)}a(91);function Ee(e){e.className,e.children;var t=Object(n.useContext)(re),a=t.state,r=t.dispatch;return o.a.createElement(n.Fragment,null,o.a.createElement("style",null,"#cam-feed{","found"!==a.camFeedState?"opacity: 0":void 0,"}"),o.a.createElement("img",{id:"cam-feed",className:a.camFeedMaximize?"active":"",src:"http://".concat(a.IP,":8081/?action=stream"),alt:"Cam feed",onClick:function(){return r(["SET_STATE",{camFeedMaximize:!a.camFeedMaximize}])},onLoad:function(){return r(["SET_STATE",{camFeedState:"found"}])},onError:function(){return r(["SET_STATE",{camFeedState:"not found"}])}}))}var ve=Object(s.e)((function(){return o.a.createElement("div",{id:"App"},o.a.createElement("div",{className:"pos-rel"},o.a.createElement(B,null)),o.a.createElement(de,null),o.a.createElement(Ee,null),o.a.createElement(fe,null),o.a.createElement(s.a,{path:"/login",component:le}))})),he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(c.a,null,o.a.createElement(se,null,o.a.createElement(ve,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");he?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(t,e)}))}}()}],[[43,1,2]]]);
//# sourceMappingURL=main.485cff57.chunk.js.map