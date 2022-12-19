(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,":root {\n  --img-width: 200px;\n  --left-margin: 20px;\n  --light-blue: rgb(190, 226, 238);\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  margin-left: var(--left-margin);\n}\n\nul li {\n  margin: 0;\n  background-color: var(--light-blue);\n  padding: 10px;\n}\n\n.tab {\n  border: 2px solid blue;\n  border-bottom: none;\n  cursor: pointer;\n}\n\n.tab:hover {\n  filter: brightness(120%);\n}\n\n.content {\n  max-width: 800px;\n  /* margin: 0px var(--left-margin); */\n  margin: auto;\n  padding: 0px 30px;\n  background-color: var(--light-blue);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid blue;\n}\n\nh1 {\n  color: red;\n}\n\nimg {\n  width: var(--img-width);\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"b7a2f0d9f0692df36549.jpg",n=t.p+"36b1a947f1981681676d.jpg",r=t.p+"85242690b3eb60b8fc90.jpg";var o=t(379),a=t.n(o),i=t(795),c=t.n(i),s=t(569),l=t.n(s),u=t(565),d=t.n(u),p=t(216),f=t.n(p),m=t(589),h=t.n(m),g=t(426),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=f(),a()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;let v=document.querySelector(".content");const y=document.querySelector(".contact.tab"),w=document.querySelector(".home.tab"),x=document.querySelector(".menu.tab");function C(){v=function(n){const t=n,r=document.createElement("h1"),o=document.createElement("p");r.textContent="American Comfort";const a=new Image;return a.src=e,o.textContent="Our restaurant is the original home of American Comfort. We will delight your senses with nostalgia and authentic home cooking. Please swing on by and try some of our amazing food. You won't regret it. We guarantee it.",t.appendChild(r),t.appendChild(a),t.appendChild(o),t}(v)}function S(e){e.innerHTML=""}y.onclick=()=>{S(v),v=function(e){const t=e,r=document.createElement("h1"),o=document.createElement("p");r.textContent="Contact";const a=new Image;return a.src=n,o.innerHTML="Name: American Comfort<br><br>Address: 123 Main Street, Anytown, USA 12345<br><br>Phone: 555-555-5555<br><br>Email: info@americancomfort.com",t.appendChild(r),t.appendChild(a),t.appendChild(o),t}(v)},x.onclick=()=>{S(v),v=function(e){const n=e,t=document.createElement("h1"),o=document.createElement("p");t.textContent="Menu";const a=new Image;return a.src=r,o.innerHTML="$15 - Classic Burger: A juicy, all-beef patty topped with cheese, lettuce, tomato, and pickles, served on a toasted bun. <br><br>$11 - Grilled Cheese Sandwich: Melted cheese between two slices of toasted bread, served with a side of tomato soup for dipping.<br><br>$13 - Chicken and Waffles: Crispy fried chicken served over a warm, fluffy waffle, drizzled with maple syrup.<br><br>$16 - BBQ Ribs: Slow-cooked, fall-off-the-bone ribs coated in a tangy BBQ sauce.",n.appendChild(t),n.appendChild(a),n.appendChild(o),n}(v)},w.onclick=()=>{S(v),C()},C()})()})();