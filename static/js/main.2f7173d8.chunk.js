(this["webpackJsonptime-to"]=this["webpackJsonptime-to"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(4),s=n.n(r),o=(n(9),n(3)),a=(n(10),n(0)),u=new Date("2021-12-19T02:10:00.000Z").getTime(),l=new Date("2021-12-11T20:00:00.000Z").getTime();var j=function(){var e=Object(c.useState)((function(){var e=u-(new Date).getTime();return Math.floor(e/1e3)})),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(Math.floor((l-(new Date).getTime())/1e3)),s=Object(o.a)(r,2),j=s[0],h=s[1],d=Object(c.useRef)(null);return Object(c.useEffect)((function(){d.current=setInterval((function(){i(Math.floor((u-(new Date).getTime())/1e3))}),1e3)}),[]),Object(c.useEffect)((function(){n<0&&d.current&&(clearInterval(d.current),d.current=null,setInterval((function(){h(Math.floor((l-(new Date).getTime())/1e3))}),1e3))}),[n]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"App-header",children:n>0?Object(a.jsxs)("p",{children:["Faltan ",n.toLocaleString("es-MX")," segundos para vernos \ud83d\ude48"]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{style:{height:600},src:"/time-to/ticket.jpg",alt:"ticket"}),j>0?Object(a.jsxs)("div",{children:["Siguiente sorpresa en ",j.toLocaleString("es-MX")," ","segundos"]}):Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"https://drive.google.com/drive/folders/1oVii4CAY0Ujk8oaI9kcQPiXBLvDhciWp?usp=sharing",children:"No te r\xedas mucho"})})]})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.2f7173d8.chunk.js.map