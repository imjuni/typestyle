(function e(t,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r();else if(typeof define==="function"&&define.amd)define([],r);else if(typeof exports==="object")exports["typestyle"]=r();else t["typestyle"]=r()})(this,function(){/******/
return function(e){// webpackBootstrap
/******/
// The module cache
/******/
var t={};/******/
/******/
// The require function
/******/
function r(n){/******/
/******/
// Check if module is in cache
/******/
if(t[n]){/******/
return t[n].exports}/******/
// Create a new module (and put it into the cache)
/******/
var i=t[n]={/******/
i:n,/******/
l:false,/******/
exports:{}};/******/
/******/
// Execute the module function
/******/
e[n].call(i.exports,i,i.exports,r);/******/
/******/
// Flag the module as loaded
/******/
i.l=true;/******/
/******/
// Return the exports of the module
/******/
return i.exports}/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
r.m=e;/******/
/******/
// expose the module cache
/******/
r.c=t;/******/
/******/
// define getter function for harmony exports
/******/
r.d=function(e,t,n){/******/
if(!r.o(e,t)){/******/
Object.defineProperty(e,t,{/******/
configurable:false,/******/
enumerable:true,/******/
get:n})}};/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
r.n=function(e){/******/
var t=e&&e.__esModule?/******/
function t(){return e["default"]}:/******/
function t(){return e};/******/
r.d(t,"a",t);/******/
return t};/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};/******/
/******/
// __webpack_public_path__
/******/
r.p="";/******/
/******/
// Load entry module and return exports
/******/
return r(r.s=2)}([/* 0 */
/***/
function(e,t,r){"use strict";/* WEBPACK VAR INJECTION */
(function(e){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:true});/**
 * The unique id is used to get a unique hash on styles (no merging).
 */
var n=0;/**
 * Tag styles with this string to get unique hash outputs.
 */
t.IS_UNIQUE="__DO_NOT_DEDUPE_STYLE__";/**
 * CSS properties that are valid unit-less numbers.
 */
var i={"animation-iteration-count":true,"box-flex":true,"box-flex-group":true,"column-count":true,"counter-increment":true,"counter-reset":true,flex:true,"flex-grow":true,"flex-positive":true,"flex-shrink":true,"flex-negative":true,"font-weight":true,"line-clamp":true,"line-height":true,opacity:true,order:true,orphans:true,"tab-size":true,widows:true,"z-index":true,zoom:true,
// SVG properties.
"fill-opacity":true,"stroke-dashoffset":true,"stroke-opacity":true,"stroke-width":true};
// Add vendor prefixes to all unit-less properties.
for(var s=0,o=["-webkit-","-ms-","-moz-","-o-"];s<o.length;s++){var u=o[s];for(var a=0,f=Object.keys(i);a<f.length;a++){var c=f[a];i[u+c]=true}}/**
 * Transform a JavaScript property into a CSS property.
 */
function h(e){return e.replace(/([A-Z])/g,"-$1").replace(/^ms-/,"-ms-").toLowerCase()}/**
 * Check if a property name should pop to the top level of CSS.
 */
function l(e){return e.charAt(0)==="@"}/**
 * Check if a value is a nested style definition.
 */
function d(e){return e!=null&&typeof e==="object"&&!Array.isArray(e)}/**
 * Generate a hash value from a string.
 */
function p(e){var t=5381;var r=e.length;while(r){t=t*33^e.charCodeAt(--r)}return(t>>>0).toString(36)}t.stringHash=p;/**
 * Transform a style string to a CSS string.
 */
function y(e,t){if(typeof t==="number"&&t!==0&&!i[e]){t=t+"px"}return e+":"+String(t)}/**
 * Sort an array of tuples by first value.
 */
function v(e){return e.sort(function(e,t){return e[0]>t[0]?1:-1})}/**
 * Categorize user styles.
 */
function g(e,r){var n=[];var i=[];var s=false;
// Sort keys before adding to styles.
for(var o=0,u=Object.keys(e);o<u.length;o++){var a=u[o];var f=e[a];if(a===t.IS_UNIQUE){s=!!f}else if(d(f)){i.push([a.trim(),f])}else{n.push([h(a.trim()),f])}}return{properties:v(n),nestedStyles:r?i:v(i),isUnique:s}}/**
 * Stringify an array of property tuples.
 */
function _(e){var t=[];var r=function(e,r){if(r!=null){if(Array.isArray(r)){r.forEach(function(r){r&&t.push(y(e,r))})}else{t.push(y(e,r))}}};for(var n=0,i=e;n<i.length;n++){var s=i[n],o=s[0],u=s[1];r(o,u)}return t.join(";")}/**
 * Interpolate CSS selectors.
 */
function m(e,t){if(e.indexOf("&")>-1){return e.replace(/&/g,t)}return t+" "+e}/**
 * Recursive loop building styles with deferred selectors.
 */
function S(e,t,r,i,s){var o=g(r,!!t),u=o.properties,a=o.nestedStyles,f=o.isUnique;var c=_(u);var h=c;if(l(t)){var d=e.add(new O(t,s?undefined:c,e.hash));
// Nested styles support (e.g. `.foo > @media > .bar`).
if(c&&s){var p=d.add(new I(c,d.hash,f?"u"+(++n).toString(36):undefined));i.push([s,p])}for(var y=0,v=a;y<v.length;y++){var w=v[y],x=w[0],b=w[1];h+=x+S(d,x,b,i,s)}}else{var T=s?m(t,s):t;if(c){var p=e.add(new I(c,e.hash,f?"u"+(++n).toString(36):undefined));i.push([T,p])}for(var j=0,k=a;j<k.length;j++){var R=k[j],x=R[0],b=R[1];h+=x+S(e,x,b,i,T)}}return h}/**
 * Register all styles, but collect for selector interpolation using the hash.
 */
function w(e,t,r,n,i){var s=new b(e.hash);var o=[];var u=S(s,t,r,o);var a="f"+s.hash(u);var f=i?i+"_"+a:a;for(var c=0,h=o;c<h.length;c++){var l=h[c],d=l[0],p=l[1];var y=n?m(d,"."+f):d;p.add(new T(y,p.hash,undefined,u))}return{cache:s,pid:u,id:f}}/**
 * Get the styles string for a container class.
 */
function x(e){return e.values().map(function(e){return e.getStyles()}).join("")}/**
 * Implement a cache/event emitter.
 */
var b=function(){function e(e){this.hash=e;this.changeId=0;this._children={};this._keys=[];this._counters={}}e.prototype.values=function(){var e=this;return this._keys.map(function(t){return e._children[t]})};e.prototype.add=function(t){var r=this._counters[t.id]||0;var n=this._children[t.id]||t.clone();this._counters[t.id]=r+1;if(r===0){this._keys.push(n.id);this._children[n.id]=n;this.changeId++}else{
// Check if contents are different.
if(n.getIdentifier()!==t.getIdentifier()){throw new TypeError("Hash collision: "+t.getStyles()+" === "+n.getStyles())}this._keys.splice(this._keys.indexOf(t.id),1);this._keys.push(t.id);if(n instanceof e&&t instanceof e){var i=n.changeId;n.merge(t);if(n.changeId!==i){this.changeId++}}}return n};e.prototype.remove=function(t){var r=this._counters[t.id];if(r>0){this._counters[t.id]=r-1;var n=this._children[t.id];if(r===1){delete this._counters[t.id];delete this._children[t.id];this._keys.splice(this._keys.indexOf(t.id),1);this.changeId++}else if(n instanceof e&&t instanceof e){var i=n.changeId;n.unmerge(t);if(n.changeId!==i){this.changeId++}}}};e.prototype.merge=function(e){for(var t=0,r=e.values();t<r.length;t++){var n=r[t];this.add(n)}return this};e.prototype.unmerge=function(e){for(var t=0,r=e.values();t<r.length;t++){var n=r[t];this.remove(n)}return this};e.prototype.clone=function(){return new e(this.hash).merge(this)};return e}();t.Cache=b;/**
 * Selector is a dumb class made to represent nested CSS selectors.
 */
var T=function(){function e(e,t,r,n){if(r===void 0){r="s"+t(e)}if(n===void 0){n=""}this.selector=e;this.hash=t;this.id=r;this.pid=n}e.prototype.getStyles=function(){return this.selector};e.prototype.getIdentifier=function(){return this.pid+"."+this.selector};e.prototype.clone=function(){return new e(this.selector,this.hash,this.id,this.pid)};return e}();t.Selector=T;/**
 * The style container registers a style string with selectors.
 */
var I=function(e){r(t,e);function t(t,r,n){if(n===void 0){n="c"+r(t)}var i=e.call(this,r)||this;i.style=t;i.hash=r;i.id=n;return i}t.prototype.getStyles=function(){return this.values().map(function(e){return e.getStyles()}).join(",")+"{"+this.style+"}"};t.prototype.getIdentifier=function(){return this.style};t.prototype.clone=function(){return new t(this.style,this.hash,this.id).merge(this)};return t}(b);t.Style=I;/**
 * Implement rule logic for style output.
 */
var O=function(e){r(t,e);function t(t,r,n,i,s){if(r===void 0){r=""}if(i===void 0){i="a"+n(t+"."+r)}if(s===void 0){s=""}var o=e.call(this,n)||this;o.rule=t;o.style=r;o.hash=n;o.id=i;o.pid=s;return o}t.prototype.getStyles=function(){return this.rule+"{"+this.style+x(this)+"}"};t.prototype.getIdentifier=function(){return this.pid+"."+this.rule+"."+this.style};t.prototype.clone=function(){return new t(this.rule,this.style,this.hash,this.id,this.pid).merge(this)};return t}(b);t.Rule=O;/**
 * The FreeStyle class implements the API for everything else.
 */
var j=function(e){r(t,e);function t(t,r,i){if(i===void 0){i="f"+(++n).toString(36)}var s=e.call(this,t)||this;s.hash=t;s.debug=r;s.id=i;return s}t.prototype.registerStyle=function(e,t){var r=w(this,"&",e,true,this.debug?t:undefined),n=r.cache,i=r.id;this.merge(n);return i};t.prototype.registerKeyframes=function(e,t){return this.registerHashRule("@keyframes",e,t)};t.prototype.registerHashRule=function(e,t,r){var n=w(this,"",t,false,this.debug?r:undefined),i=n.cache,s=n.pid,o=n.id;var u=new O(e+" "+o,undefined,this.hash,undefined,s);this.add(u.merge(i));return o};t.prototype.registerRule=function(e,t){this.merge(w(this,e,t,false).cache)};t.prototype.registerCss=function(e){this.merge(w(this,"",e,false).cache)};t.prototype.getStyles=function(){return x(this)};t.prototype.getIdentifier=function(){return this.id};t.prototype.clone=function(){return new t(this.hash,this.debug,this.id).merge(this)};return t}(b);t.FreeStyle=j;/**
 * Exports a simple function to create a new instance.
 */
function k(t,r){if(t===void 0){t=p}if(r===void 0){r=typeof e!=="undefined"&&e.env["NODE_ENV"]!=="production"}return new j(t,r)}t.create=k}).call(t,r(5))},/* 1 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});/** Raf for node + browser */
t.raf=typeof requestAnimationFrame==="undefined"?function(e){return setTimeout(e)}:requestAnimationFrame.bind(window);/**
 * Utility to join classes conditionally
 */
function n(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return e.filter(function(e){return!!e}).join(" ")}t.classes=n;/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */
function i(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}/** The final result we will return */
var r={};for(var n=0,s=e;n<s.length;n++){var o=s[n];if(o==null||o===false){continue}for(var u in o){/** Falsy values except a explicit 0 is ignored */
var a=o[u];if(!a&&a!==0){continue}/** if nested media or pseudo selector */
if(u==="$nest"&&a){r[u]=r["$nest"]?i(r["$nest"],a):a}else if(u.indexOf("&")!==-1||u.indexOf("@media")===0){r[u]=r[u]?i(r[u],a):a}else{r[u]=a}}}return r}t.extend=i;/**
 * Utility to help customize styles with media queries. e.g.
 * ```
 * style(
 *  media({maxWidth:500}, {color:'red'})
 * )
 * ```
 */
t.media=function(e){var t=[];for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}var n=[];if(e.type)n.push(e.type);if(e.orientation)n.push(e.orientation);if(e.minWidth)n.push("(min-width: "+s(e.minWidth)+")");if(e.maxWidth)n.push("(max-width: "+s(e.maxWidth)+")");if(e.minHeight)n.push("(min-height: "+s(e.minHeight)+")");if(e.maxHeight)n.push("(max-height: "+s(e.maxHeight)+")");var o="@media "+n.join(" and ");var u={$nest:(a={},a[o]=i.apply(void 0,t),a)};return u;var a};var s=function(e){return typeof e==="string"?e:e+"px"}},/* 2 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);t.TypeStyle=n.TypeStyle;/**
 * All the CSS types in the 'types' namespace
 */
var i=r(6);t.types=i;/**
 * Export certain utilities
 */
var s=r(1);t.extend=s.extend;t.classes=s.classes;t.media=s.media;/** Zero configuration, default instance of TypeStyle */
var o=new n.TypeStyle({autoGenerateTag:false});/** Sets the target tag where we write the css on style updates */
t.setStylesTarget=o.setStylesTarget;/**
 * Insert `raw` CSS as a string. This is useful for e.g.
 * - third party CSS that you are customizing with template strings
 * - generating raw CSS in JavaScript
 * - reset libraries like normalize.css that you can use without loaders
 */
t.cssRaw=o.cssRaw;/**
 * Takes CSSProperties and registers it to a global selector (body, html, etc.)
 */
t.cssRule=o.cssRule;/**
 * Renders styles to the singleton tag imediately
 * NOTE: You should only call it on initial render to prevent any non CSS flash.
 * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
 **/
t.forceRenderStyles=o.forceRenderStyles;/**
 * Utility function to register an @font-face
 */
t.fontFace=o.fontFace;/**
 * Allows use to use the stylesheet in a node.js environment
 */
t.getStyles=o.getStyles;/**
 * Takes keyframes and returns a generated animationName
 */
t.keyframes=o.keyframes;/**
 * Helps with testing. Reinitializes FreeStyle + raw
 */
t.reinit=o.reinit;/**
 * Takes CSSProperties and return a generated className you can use on your component
 */
t.style=o.style;/**
 * Creates a new instance of TypeStyle separate from the default instance.
 *
 * - Use this for creating a different typestyle instance for a shadow dom component.
 * - Use this if you don't want an auto tag generated and you just want to collect the CSS.
 *
 * NOTE: styles aren't shared between different instances.
 */
function u(e){var t=new n.TypeStyle({autoGenerateTag:false});if(e){t.setStylesTarget(e)}return t}t.createTypeStyle=u},/* 3 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(4);var i=r(1);var s=r(0);/**
 * Creates an instance of free style with our options
 */
var o=function(){/** Use the default hash function */ /** Preserve $debugName values */return s.create(undefined,true)};/**
 * Maintains a single stylesheet and keeps it in sync with requested styles
 */
var u=function(){function e(e){var t=e.autoGenerateTag;var r=this;/**
         * Insert `raw` CSS as a string. This is useful for e.g.
         * - third party CSS that you are customizing with template strings
         * - generating raw CSS in JavaScript
         * - reset libraries like normalize.css that you can use without loaders
         */
this.cssRaw=function(e){if(!e){return}r._raw+=e||"";r._pendingRawChange=true;r._styleUpdated()};/**
         * Takes CSSProperties and registers it to a global selector (body, html, etc.)
         */
this.cssRule=function(e){var t=[];for(var s=1;s<arguments.length;s++){t[s-1]=arguments[s]}var o=n.ensureStringObj(i.extend.apply(void 0,t)).result;r._freeStyle.registerRule(e,o);r._styleUpdated();return};/**
         * Renders styles to the singleton tag imediately
         * NOTE: You should only call it on initial render to prevent any non CSS flash.
         * After that it is kept sync using `requestAnimationFrame` and we haven't noticed any bad flashes.
         **/
this.forceRenderStyles=function(){var e=r._getTag();if(!e){return}e.textContent=r.getStyles()};/**
         * Utility function to register an @font-face
         */
this.fontFace=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var n=r._freeStyle;for(var i=0,s=e;i<s.length;i++){var o=s[i];n.registerRule("@font-face",o)}r._styleUpdated();return};/**
         * Allows use to use the stylesheet in a node.js environment
         */
this.getStyles=function(){return(r._raw||"")+r._freeStyle.getStyles()};/**
         * Takes keyframes and returns a generated animationName
         */
this.keyframes=function(e){var t=n.explodeKeyframes(e),i=t.keyframes,s=t.$debugName;
// TODO: replace $debugName with display name
var o=r._freeStyle.registerKeyframes(i,s);r._styleUpdated();return o};/**
         * Helps with testing. Reinitializes FreeStyle + raw
         */
this.reinit=function(){/** reinit freestyle */
var e=o();r._freeStyle=e;r._lastFreeStyleChangeId=e.changeId;/** reinit raw */
r._raw="";r._pendingRawChange=false;/** Clear any styles that were flushed */
var t=r._getTag();if(t){t.textContent=""}};/** Sets the target tag where we write the css on style updates */
this.setStylesTarget=function(e){/** Clear any data in any previous tag */
if(r._tag){r._tag.textContent=""}r._tag=e;/** This special time buffer immediately */
r.forceRenderStyles()};/**
         * Takes CSSProperties and return a generated className you can use on your component
         */
this.style=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var s=r._freeStyle;var o=n.ensureStringObj(i.extend.apply(void 0,e)),u=o.result,a=o.debugName;var f=a?s.registerStyle(u,a):s.registerStyle(u);r._styleUpdated();return f};var s=o();this._autoGenerateTag=t;this._freeStyle=s;this._lastFreeStyleChangeId=s.changeId;this._pending=0;this._pendingRawChange=false;this._raw="";this._tag=undefined}/**
     * Only calls cb all sync operations settle
     */
e.prototype._afterAllSync=function(e){var t=this;this._pending++;var r=this._pending;i.raf(function(){if(r!==t._pending){return}e()})};e.prototype._getTag=function(){if(this._tag){return this._tag}if(this._autoGenerateTag){var e=typeof window==="undefined"?{textContent:""}:document.createElement("style");if(typeof document!=="undefined"){document.head.appendChild(e)}this._tag=e;return e}return undefined};/** Checks if the style tag needs updating and if so queues up the change */
e.prototype._styleUpdated=function(){var e=this;var t=this._freeStyle.changeId;var r=this._lastFreeStyleChangeId;if(!this._pendingRawChange&&t===r){return}this._lastFreeStyleChangeId=t;this._pendingRawChange=false;this._afterAllSync(function(){return e.forceRenderStyles()})};return e}();t.TypeStyle=u},/* 4 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);/**
 * We need to do the following to *our* objects before passing to freestyle:
 * - For any `$nest` directive move up to FreeStyle style nesting
 * - For any `$unique` directive map to FreeStyle Unique
 * - For any `$debugName` directive return the debug name
 */
function i(e){/** The final result we will return */
var t={};var r="";for(var s in e){/** Grab the value upfront */
var o=e[s];/** TypeStyle configuration options */
if(s==="$unique"){t[n.IS_UNIQUE]=o}else if(s==="$nest"){var u=o;for(var a in u){var f=u[a];t[a]=i(f).result}}else if(s==="$debugName"){r=o}else{t[s]=o}}return{result:t,debugName:r}}t.ensureStringObj=i;
// todo: better name here
function s(e){var t={$debugName:undefined,keyframes:{}};for(var r in e){var n=e[r];if(r==="$debugName"){t.$debugName=n}else{t.keyframes[r]=n}}return t}t.explodeKeyframes=s},/* 5 */
/***/
function(e,t){
// shim for using process in browser
var r=e.exports={};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var n;var i;function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){n=setTimeout}else{n=s}}catch(e){n=s}try{if(typeof clearTimeout==="function"){i=clearTimeout}else{i=o}}catch(e){i=o}})();function u(e){if(n===setTimeout){
//normal enviroments in sane situations
return setTimeout(e,0)}
// if setTimeout wasn't available but was latter defined
if((n===s||!n)&&setTimeout){n=setTimeout;return setTimeout(e,0)}try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return n(e,0)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return n.call(null,e,0)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return n.call(this,e,0)}}}function a(e){if(i===clearTimeout){
//normal enviroments in sane situations
return clearTimeout(e)}
// if clearTimeout wasn't available but was latter defined
if((i===o||!i)&&clearTimeout){i=clearTimeout;return clearTimeout(e)}try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return i(e)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return i.call(null,e)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return i.call(this,e)}}}var f=[];var c=false;var h;var l=-1;function d(){if(!c||!h){return}c=false;if(h.length){f=h.concat(f)}else{l=-1}if(f.length){p()}}function p(){if(c){return}var e=u(d);c=true;var t=f.length;while(t){h=f;f=[];while(++l<t){if(h){h[l].run()}}l=-1;t=f.length}h=null;c=false;a(e)}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}f.push(new y(e,t));if(f.length===1&&!c){u(p)}};
// v8 likes predictible objects
function y(e,t){this.fun=e;this.array=t}y.prototype.run=function(){this.fun.apply(null,this.array)};r.title="browser";r.browser=true;r.env={};r.argv=[];r.version="";// empty string to avoid regexp issues
r.versions={};function v(){}r.on=v;r.addListener=v;r.once=v;r.off=v;r.removeListener=v;r.removeAllListeners=v;r.emit=v;r.prependListener=v;r.prependOnceListener=v;r.listeners=function(e){return[]};r.binding=function(e){throw new Error("process.binding is not supported")};r.cwd=function(){return"/"};r.chdir=function(e){throw new Error("process.chdir is not supported")};r.umask=function(){return 0}},/* 6 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true})}])});