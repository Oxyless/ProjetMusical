(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{473:function(e,t,n){var content=n(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("2c9fa580",content,!0,{sourceMap:!1})},474:function(e,t,n){"use strict";n(473)},475:function(e,t,n){var r=n(16)(!1);r.push([e.i,".tune{background-color:#fff}.free-textarea{width:100%}@media screen and (min-width:1920px){.theme{position:-webkit-sticky;position:sticky;top:0}}@media print{.main-tune{min-height:29.5cm}.tune{width:21cm}.theme{position:static}}",""]),e.exports=r},476:function(e,t,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("2453800e",content,!0,{sourceMap:!1})},491:function(e,t,n){"use strict";n.r(t);n(36),n(3),n(24),n(45),n(38),n(21),n(8),n(46),n(48),n(39);var r=n(29),o=n(84);n(62),n(92);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={name:"Tune",data:function(){return{abcTunes:this.$initTune.apply(this,Object(o.a)(this.tuneProfile)).toAbc(),free:""}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.initFree();case 1:case"end":return t.stop()}}),t)})))()},mounted:function(){this.renderAbc(),this.initFree()},props:["tuneProfile"],watch:{print:function(){this.renderAbc(),this.renderAbcFree()},free:function(e,t){this.renderAbcFree(),this.saveFree()}},methods:{renderAbc:function(){var e,t=0,n=c(this.abcTunes);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.$abcjs.renderAbc("tune_".concat(t),r,this.abcOptions),t+=1}}catch(e){n.e(e)}finally{n.f()}},renderAbcFree:function(){this.$abcjs.renderAbc("tune_free",this.free,this.abcOptions)},initFree:function(){var e=this;this.free=localStorage.getItem(this.localstorageFreeKey)||"",setTimeout((function(){return e.renderAbcFree()}),0)},saveFree:function(){localStorage.setItem(this.localstorageFreeKey,this.free)}},computed:{localstorageFreeKey:function(){return"".concat(this.$route.path,"_tune_free")},print:function(){return this.$store.getters["options/getPrint"]},abcOptions:function(){return this.print?{}:{responsive:"resize"}},colSize:function(){return this.print?"":6}}},h=(n(474),n(83)),d=n(101),v=n.n(d),m=n(517),y=n(518),w=n(520),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"main-tune",attrs:{cols:e.colSize}},[n("div",{staticClass:"tune theme",attrs:{id:"tune_0"}})]),e._v(" "),n("v-col",{staticClass:"pl-3",attrs:{cols:e.colSize}},[e._l(e.abcTunes.slice(1),(function(e,t){return n("div",{key:e,staticClass:"tune mb-3",attrs:{id:"tune_"+(t+1)}})})),e._v(" "),n("v-textarea",{staticClass:"d-print-none free-textarea",model:{value:e.free,callback:function(t){e.free=t},expression:"free"}}),e._v(" "),e.free.length>0?n("div",{staticClass:"tune",attrs:{id:"tune_free"}},[e._v("\n      "+e._s(e.free)+"\n    ")]):e._e()],2)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCol:m.a,VRow:y.a,VTextarea:w.a})},493:function(e,t,n){"use strict";n(476)},494:function(e,t,n){var r=n(16)(!1);r.push([e.i,"#paper{background-color:#fff;width:21cm}",""]),e.exports=r},521:function(e,t,n){"use strict";n.r(t);var r=n(29),o=(n(92),{name:"tune",data:function(){return{tuneProfile:null}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("tunes").where({title:e.$route.params.title}).fetch();case 2:e.tuneProfile=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}),c=(n(493),n(83)),f=n(101),l=n.n(f),h=n(517),d=n(518),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-col",[e.tuneProfile?n("Tune",{attrs:{tuneProfile:e.tuneProfile}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{Tune:n(491).default}),l()(component,{VCol:h.a,VRow:d.a})}}]);