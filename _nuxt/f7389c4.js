(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{484:function(t,n,e){"use strict";e.r(n);var o=e(19),r=(e(84),{props:["texto_botao","btnColor"],data:function(){return{loading:!1}},methods:{openWhats:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.$nuxt.$loading.start(),t.loading=!0,{data:[{event_name:"Lead",event_time:Math.floor(new Date/1e3),custom_data:{currency:"BRL",value:1}}]},t.loading=!1,t.$nuxt.$loading.finish(),window.open("https://wa.me/5511985043045","_blank","menubar=no,toolbar=no,location=no");case 6:case"end":return n.stop()}}),n)})))()}}}),c=e(57),l=e(75),d=e.n(l),h=e(408),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("v-btn",{attrs:{id:"chamarWhatsApp",color:t.btnColor},on:{click:t.openWhats}},[t._v(t._s(t.texto_botao))])}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:h.a})}}]);