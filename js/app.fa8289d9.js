(function(t){function e(e){for(var a,i,c=e[0],l=e[1],s=e[2],u=0,v=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("Calendar")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"primary",dark:""},on:{click:function(e){t.dialog=!0}}},[t._v(" New Event ")]),n("v-btn",{staticClass:"mr-4",attrs:{outlined:""},on:{click:t.setToday}},[t._v("Today")]),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-left")])],1),n("v-btn",{staticClass:"mr-4",attrs:{fab:"",text:"",small:""},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-right")])],1),n("v-toolbar-title",[t._v(t._s(t.title))]),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{outlined:""}},a),[n("span",[t._v(t._s(t.typeToLabel[t.type]))]),n("v-icon",{attrs:{right:""}},[t._v("mdi-menu-down")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",[t._v("Day")])],1),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",[t._v("Week")])],1),n("v-list-item",{on:{click:function(e){t.type="month"}}},[n("v-list-item-title",[t._v("Month")])],1),n("v-list-item",{on:{click:function(e){t.type="4day"}}},[n("v-list-item-title",[t._v("4 days")])],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEvent(e)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"details"},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-text-field",{attrs:{type:"date",label:"start (required)"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),n("v-text-field",{attrs:{type:"date",label:"end (required)"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"color (click to open colour menu)"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" Create Event ")])],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,"event-margin-bottom":3,now:t.today,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.deleteEvent(t.selectedEvent.id)}}},[n("v-icon",[t._v("mdi-delete")])],1),n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),n("v-spacer")],1),n("v-card-text",[t.currentlyEditing!==t.selectedEvent.id?n("form",[t._v(t._s(t.selectedEvent.details))]):n("form",[n("textarea-autosize",{staticStyle:{width:"100%"},attrs:{type:"text","min-height":100,placeholder:"add note"},model:{value:t.selectedEvent.details,callback:function(e){t.$set(t.selectedEvent,"details",e)},expression:"selectedEvent.details"}})],1)]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v("Close")]),t.currentlyEditing!==t.selectedEvent.id?n("v-btn",{attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.editEvent(t.selectedEvent)}}},[t._v("Edit")]):n("v-btn",{attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.updateEvent(t.selectedEvent)}}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},c=[],l=(n("99af"),n("4160"),n("accc"),n("0d03"),n("b0c0"),n("159b"),n("96cf"),n("89ba")),s={data:function(){return{today:(new Date).toISOString().substring(0,10),focus:(new Date).toISOString().substring(0,10),type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},name:null,details:null,start:null,end:null,color:"#1976D2",currentlyEditing:null,selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],dialog:!1}},mounted:function(){this.getEvents()},computed:{title:function(){var t=this.start,e=this.end;if(!t||!e)return"";var n=this.monthFormatter(t),a=this.monthFormatter(e),r=n===a?"":a,o=t.year,i=e.year,c=o===i?"":i,l=t.day+this.nth(t.day),s=e.day+this.nth(e.day);switch(this.type){case"month":return"".concat(n," ").concat(o);case"week":case"4day":return"".concat(n," ").concat(l," ").concat(o," - ").concat(r," ").concat(s," ").concat(c);case"day":return"".concat(n," ").concat(l," ").concat(o)}return""},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})}},methods:{getEvents:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U.collection("calEvent").get();case 2:e=t.sent,n=[],e.forEach((function(t){var e=t.data();e.id=t.id,n.push(e)})),this.events=n;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addEvent:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.start&&this.end&&this.name)){t.next=11;break}return t.next=3,U.collection("calEvent").add({name:this.name,start:this.start,end:this.end,details:this.details,color:this.color});case 3:this.getEvents(),this.name="",this.start="",this.end="",this.details="",this.color="#1976D2",t.next=12;break;case 11:alert("Name, start and end date are required");case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateEvent:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U.collection("calEvent").doc(this.currentlyEditing).update({details:e.details});case 2:this.selectedOpen=!1,this.currentlyEditing=null;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),deleteEvent:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,U.collection("calEvent").doc(e).delete();case 2:this.selectedOpen=!1,this.getEvents();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getEventColor:function(t){return t.color},viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},setToday:function(){this.focus=this.today},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},editEvent:function(t){this.currentlyEditing=t.id},showEvent:function(t){var e=this,n=t.nativeEvent,a=t.event,r=function(){e.selectedEvent=a,e.selectedElement=n.target,setTimeout((function(){return e.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r(),n.stopPropagation()},updateRange:function(t){var e=t.start,n=t.end;this.start=e,this.end=n},nth:function(t){return t>3&&t<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][t%10]}}},d=s,u=n("2877"),v=n("6544"),f=n.n(v),p=n("8336"),h=n("a4f6"),m=n("b0af"),b=n("99d9"),y=n("62ad"),g=n("a523"),E=n("169a"),x=n("4bd4"),w=n("132d"),k=n("8860"),_=n("da13"),O=n("5d23"),V=n("e449"),C=n("0fd9"),T=n("8dd9"),j=n("2fa4"),S=n("8654"),D=n("71d9"),R=n("2a7f"),P=Object(u["a"])(d,i,c,!1,null,null,null),I=P.exports;f()(P,{VBtn:p["a"],VCalendar:h["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCol:y["a"],VContainer:g["a"],VDialog:E["a"],VForm:x["a"],VIcon:w["a"],VList:k["a"],VListItem:_["a"],VListItemTitle:O["a"],VMenu:V["a"],VRow:C["a"],VSheet:T["a"],VSpacer:j["a"],VTextField:S["a"],VToolbar:D["a"],VToolbarTitle:R["a"]});var M={name:"App",components:{Calendar:I},data:function(){return{}}},F=M,L=n("7496"),$=n("a75b"),A=Object(u["a"])(F,r,o,!1,null,null,null),q=A.exports;f()(A,{VApp:L["a"],VContent:$["a"]});var z=n("f309");a["a"].use(z["a"]);var B=new z["a"]({icons:{iconfont:"mdi"}}),J=n("3f9d"),W=n("59ca"),N=n.n(W);n("e71f");n.d(e,"db",(function(){return U})),a["a"].use(J["a"]),a["a"].config.productionTip=!1,N.a.initializeApp({apiKey:"AIzaSyAY2FBXPi-zI0RE8O6-6VO4EqWTbdJsmwg",authDomain:"vue-calendar-deff4.firebaseapp.com",databaseURL:"https://vue-calendar-deff4.firebaseio.com",projectId:"vue-calendar-deff4",storageBucket:"vue-calendar-deff4.appspot.com",messagingSenderId:"706482613683",appId:"1:706482613683:web:a08fba0517748a48b2efc6"});var U=N.a.firestore();new a["a"]({vuetify:B,render:function(t){return t(q)}}).$mount("#app")}});
//# sourceMappingURL=app.fa8289d9.js.map