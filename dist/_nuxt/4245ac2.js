(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{448:function(t,n,e){var content=e(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("2c9fa580",content,!0,{sourceMap:!1})},449:function(t,n,e){"use strict";e(448)},450:function(t,n,e){var r=e(21)(!1);r.push([t.i,".tune{background-color:#fff;width:21cm}",""]),t.exports=r},466:function(t,n,e){"use strict";e.r(n);e(39),e(4),e(24),e(44),e(37),e(20),e(8),e(45),e(50),e(38);var r=e(80);function o(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==e.return||e.return()}finally{if(f)throw o}}}}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var l={name:"Tune",mounted:function(){var t,n=0,e=o(this.abcTunes);try{for(e.s();!(t=e.n()).done;){var r=t.value;this.$abcjs.renderAbc("tune_".concat(n),r,{}),n+=1}}catch(t){e.e(t)}finally{e.f()}},props:["tuneProfile"],data:function(){return{abcTunes:this.$initTune.apply(this,Object(r.a)(this.tuneProfile)).toAbc()}}},f=(e(449),e(96)),d=e(129),v=e.n(d),y=e(482),h=e(483),component=Object(f.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticStyle:{"min-height":"28cm"}},[e("div",{staticClass:"tune mb-3",attrs:{id:"tune_0"}})]),t._v(" "),e("v-col",t._l(t.abcTunes.slice(0),(function(t,n){return e("div",{key:t,staticClass:"tune",attrs:{id:"tune_"+n}})})),0)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VCol:y.a,VRow:h.a})}}]);