(this.webpackJsonpget_weather=this.webpackJsonpget_weather||[]).push([[0],{11:function(e,t,n){e.exports={navigation:"navigation_navigation__1RJOe",navLink:"navigation_navLink__3bI8-",active:"navigation_active__3aMSb"}},27:function(e,t,n){e.exports={container:"container_container__187eG"}},36:function(e,t,n){},40:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),s=n.n(i),r=n(9),o=(n(62),n(36),n(4)),l=n(11),j=n.n(l),d=n(1),u=function(){return Object(d.jsxs)("nav",{className:j.a.navigation,children:[Object(d.jsx)(r.c,{to:"/get_weather",exact:!0,className:j.a.navLink,activeClassName:j.a.active,children:"Home"}),Object(d.jsx)(r.c,{to:"/Information",className:j.a.navLink,activeClassName:j.a.active,children:"Information"})]})};function h(){return Object(d.jsx)(u,{})}var b=n(27),O=n.n(b);function m(e){var t=e.children;return Object(d.jsx)("div",{className:O.a.container,children:t})}n(40);var p=n(24),v=n(22),x=n.n(v),f=n(16),g=n.n(f),w=n(20),N=n(12),_=n(19),y=n.n(_);n(61);function S(){var e,t,n,c,i,s,r=Object(a.useState)([]),o=Object(N.a)(r,2),l=o[0],j=o[1],u=Object(a.useState)([]),h=Object(N.a)(u,2),b=h[0],O=h[1],m=Object(a.useState)([]),p=Object(N.a)(m,2),v=p[0],x=p[1],f=Object(a.useState)(null),_=Object(N.a)(f,2),S=_[0],I=_[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){j(e.coords.latitude),O(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(l,"&lon=").concat(b,"&units=metric&APPID=").concat("2d20223674e609e0aa7b3ad29d181f8b")).then((function(e){return e.json()})).then((function(e){x(e),console.log(e)})).catch((function(e){I(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l,b]),Object(d.jsxs)("div",{children:[S&&Object(d.jsxs)("p",{children:["Whoops, something went wrong: ",S.message]}),"undefined"!=typeof v.main?Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("p",{className:"header",children:v.name}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsxs)("p",{className:"day",children:[y()().format("dddd"),", ",Object(d.jsx)("span",{children:y()().format("LL")})]}),Object(d.jsx)("img",{alt:"Weather Condition and City",src:"http://openweathermap.org/img/wn/".concat(null===v||void 0===v||null===(e=v.weather)||void 0===e?void 0:e.map((function(e){return e.icon})),"@2x.png")}),Object(d.jsx)("p",{className:"description",children:null===(t=v.weather)||void 0===t?void 0:t.map((function(e){return e.main}))})]}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsxs)("p",{className:"temp",children:["Temperature: ",Math.round(null===(n=v.main)||void 0===n?void 0:n.temp)," \xb0C"]}),Object(d.jsxs)("p",{className:"temp",children:["Humidity: ",null===(c=v.main)||void 0===c?void 0:c.humidity," %"]})]}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsxs)("p",{className:"sunrise-sunset",children:["Sunrise:"," ",new Date(1e3*(null===(i=v.sys)||void 0===i?void 0:i.sunrise)).toLocaleTimeString("en-IN")]}),Object(d.jsxs)("p",{className:"sunrise-sunset",children:["Sunset:"," ",new Date(1e3*(null===(s=v.sys)||void 0===s?void 0:s.sunset)).toLocaleTimeString("en-IN")]})]})]}):Object(d.jsx)("div",{})]})}var I=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,71))})),k=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,72))}));function L(){return Object(d.jsxs)(m,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(x.a,{type:"ThreeDots",color:"teal",height:300,width:300,timeout:3e3}),children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/get_weather",exact:!0,children:Object(d.jsx)(I,{})}),Object(d.jsx)(o.a,{path:"/Information",exact:!0,children:Object(d.jsx)(S,{})}),Object(d.jsx)(o.a,{path:"/Information/:infoId",children:Object(d.jsx)(k,{})})]})}),Object(d.jsx)(p.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(L,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e6d6119b.chunk.js.map