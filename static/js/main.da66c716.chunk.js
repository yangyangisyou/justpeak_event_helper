(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(18),i=(n(28),n(3)),s=n(19),r=n(20),o=n(23),d=n(21),u=(n(29),n(4)),j=n.n(u),l=n(6),p=n(9),b=n.n(p),O="http://ec2-18-167-41-233.ap-east-1.compute.amazonaws.com",h={getParticipants:function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(O,"/login"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0.response),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),upDatePaid:function(){var e=Object(l.a)(j.a.mark((function e(t,n){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=t).participants=n,e.prev=2,e.next=5,b.a.post("".concat(O,"/updateParticipants"),c);case 5:return a=e.sent,console.log(a),e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()},v=n(0);var m=function(e){var t=e.setEventData,n=e.setLogged,a=e.logged,s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],d=r[1],u=Object(c.useState)(""),p=Object(i.a)(u,2),b=p[0],O=p[1];return Object(v.jsx)("div",{className:"Landing",children:Object(v.jsxs)("div",{className:"Landing__form",children:[Object(v.jsx)("h1",{children:"\u53e3\u8aaa\u5718 \u6d3b\u52d5\u52a9\u624b v1"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Name:"}),Object(v.jsx)("input",{placeholder:"Enter Name here",value:b,onChange:function(e){O(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Passcode:"}),Object(v.jsx)("input",{placeholder:"Enter Code Here",value:o,onChange:function(e){d(e.target.value)}})]}),Object(v.jsx)("button",{onClick:function(){var e=Object(l.a)(j.a.mark((function e(c){var i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getParticipants({Code:o,HostName:b});case 2:(i=e.sent).passCode==o&&(t(i),n(!a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Submit"})]})})},f=n(22);var x=function(e){var t=Object(c.useState)(e),n=Object(i.a)(t,2),a=n[0],s=n[1];return{participants:a,setPaid:function(e){var t=Object(f.a)(a);t[e].paid=!t[e].paid,console.log(t[e].paid),s(t)}}},g=n(52);function N(e){e.key,e.participantId;var t=e.participantName,n=(e.eventId,e.isAdmin,e.index),c=e.paid,a=(e.eventName,e.setPaid);return Object(v.jsxs)("div",{className:"List__member ".concat(n%2===0?"darkgrey":"grey"),children:[Object(v.jsx)("h2",{children:t}),c?Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"checkbox",checked:!0,onChange:function(){a(n)}}),Object(v.jsx)("label",{children:"Paid"})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"checkbox",onChange:function(){a(n)}}),Object(v.jsx)("label",{children:"Unpaid"})]})]})}var _=function(e){var t,n=e.eventData,a=e.setLogged,s=(n.eventId,n.eventName,n.hostName),r=(n.passCode,n.eventDate,n.participantNumber,x(n.participants)),o=r.participants,d=r.setPaid,u=Object(c.useState)(!1),j=Object(i.a)(u,2),l=j[0],p=j[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),m=O[0],f=O[1],_=Object(c.useRef)(null);t=_,Object(c.useEffect)((function(){document.addEventListener("click",(function(e){t.current&&!t.current.contains(e.target)&&p(!1)}))}),[t]);var S=200*o.length,C=o.filter((function(e,t){return!0===e.isAdmin})),L=o.filter((function(e,t){return!0===e.paid})),P=o.map((function(e,t){return Object(v.jsx)(N,{eventName:e.eventName,participantId:e.participantId,eventId:e.eventId,setPaid:d,participantName:e.participantName,index:t,paid:e.paid,isAdmin:e.isAdmin},g.a())}));return Object(v.jsxs)("div",{className:"List",children:[m?Object(v.jsx)("div",{className:"List__success",onClick:function(){a(!1),f(!1)},children:Object(v.jsx)("div",{children:"Successfully Submitted!"})}):"",Object(v.jsxs)("h1",{children:["Welcome ",s," !"]}),Object(v.jsxs)("div",{className:"List__container",children:[Object(v.jsxs)("div",{className:"List__info",children:[Object(v.jsxs)("p",{children:["Participants : ",o.length]}),Object(v.jsxs)("p",{children:["Admins : ",C.length]})]}),Object(v.jsx)("div",{className:"List__List",children:P}),Object(v.jsxs)("div",{className:"List__money",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsx)("p",{children:"Shall Recieve:"}),Object(v.jsxs)("p",{children:["$",S]})]}),Object(v.jsxs)("div",{className:"right",children:[Object(v.jsx)("p",{children:"Collected :"}),Object(v.jsxs)("p",{children:["$",200*L.length]})]})]})]}),Object(v.jsx)("div",{className:"List__buttons",ref:_,children:Object(v.jsx)("button",{className:l?"confirm":"submit",onClick:function(e){(p(!0),1==l)&&(h.upDatePaid(n,o)&&f(!0))},children:l?"Confirm":"Submit"})})]})},S=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(v.jsx)(C,{})}}]),n}(c.Component);function C(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APIHOST:"http://ec2-18-167-41-233.ap-east-1.compute.amazonaws.com"}));var e=Object(c.useState)({eventId:0,eventName:"",hostName:"",passCode:"",eventDate:"",participantNumber:0,participants:[]}),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),o=r[0],d=r[1];return Object(v.jsx)("div",{className:"App",children:!0===o?Object(v.jsx)(_,{eventData:n,setLogged:d}):Object(v.jsx)(m,{setEventData:a,setLogged:d,logged:o})})}var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};a.render(Object(v.jsx)(c.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),L()}},[[50,1,2]]]);
//# sourceMappingURL=main.da66c716.chunk.js.map