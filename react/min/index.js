!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t.NestedLink={},t.React)}(this,function(t,e){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=Array.prototype,i=Object.prototype;function a(t){if(t&&"object"==typeof t)switch(Object.getPrototypeOf(t)){case u:return f;case i:return c}return s}var s={clone:function(t){return t},map:function(t,e){return[]},remove:function(t){return t}},c={map:function(t,e){var n=[],r=t.value;for(var o in r)if(r.hasOwnProperty(o)){var u=e(t.at(o),o);void 0===u||n.push(u)}return n},remove:function(t,e){return delete t[e],t},clone:function(t){return o({},t)}},f={clone:function(t){return t.slice()},remove:function(t,e){return t.splice(e,1),t},map:function(t,e){for(var n=t.value.length,r=Array(n),o=0,u=0;o<n;o++){var i=e(t.at(o),o);void 0===i||(r[u++]=i)}return r.length===u||(r.length=u),r}};t.Linked=function(){function t(t){this.value=t,this.error=void 0}return Object.defineProperty(t.prototype,"current",{get:function(){return this.value},set:function(t){this.set(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_changeToken",{get:function(){return this.value},enumerable:!0,configurable:!0}),t.prototype.onChange=function(t){var e=this;return new l(this,function(n){t(n),e.set(n)})},t.prototype.pipe=function(t){var e=this;return new l(this,function(n){var r=t(n,e.value);void 0===r||e.set(r)})},Object.defineProperty(t.prototype,"props",{get:function(){var t=this;return"boolean"==typeof this.value?{checked:this.value,onChange:function(e){return t.set(Boolean(e.target.checked))}}:{value:this.value,onChange:function(e){return t.set(e.target.value)}}},enumerable:!0,configurable:!0}),t.prototype.update=function(t,e){var n=t(this.clone(),e);void 0===n||this.set(n)},t.prototype.action=function(t){var e=this;return function(n){return e.update(t,n)}},t.prototype.equals=function(t){return new h(this,t)},t.prototype.enabled=function(t){return new v(this,t||"")},t.prototype.contains=function(t){return new y(this,t)},t.prototype.push=function(){var t=f.clone(this.value);Array.prototype.push.apply(t,arguments),this.set(t)},t.prototype.unshift=function(){var t=f.clone(this.value);Array.prototype.unshift.apply(t,arguments),this.set(t)},t.prototype.splice=function(){var t=f.clone(this.value);Array.prototype.splice.apply(t,arguments),this.set(t)},t.prototype.map=function(t){return a(this.value).map(this,t)},t.prototype.removeAt=function(t){var e=this.value,n=a(e);this.set(n.remove(n.clone(e),t))},t.prototype.at=function(t){return new k(this,t)},t.prototype.clone=function(){var t=this.value;return a(t).clone(t)},t.prototype.pick=function(){for(var t={},e=arguments.length?arguments:Object.keys(this.value),n=0;n<e.length;n++){var r=e[n];t[r]=new k(this,r)}return t},Object.defineProperty(t.prototype,"$",{get:function(){if(!this._value$){var t=this._value$={},e=this.value;for(var n in e)e.hasOwnProperty(n)&&(t[n]=new k(this,n))}return this._value$},enumerable:!0,configurable:!0}),t.prototype.check=function(t,e){return this.error||t(this.value)||(this.error=e||t.error||d),this},t}(),function(t){t.value=function(t,e){return new p(t,e)},t.getValues=function(t){return g(t,"value")},t.getErrors=function(t){return g(t,"error")},t.hasErrors=function(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e].error)return!0;return!1},t.setValues=function(t,e){if(e)for(var n in t){var r=L(n);if(e.hasOwnProperty(r)){var o=e[r];void 0===o||t[n].set(o)}}}}(t.Linked||(t.Linked={}));var p=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return r(e,t),e.prototype.set=function(t){},e}(t.Linked),l=function(t){function e(e,n){var r=t.call(this,e.value)||this;r.set=n;var o=e.error;return o&&(r.error=o),r}return r(e,t),e.prototype.set=function(t){},e}(t.Linked),h=function(t){function e(e,n){var r=t.call(this,e.value===n)||this;return r.parent=e,r.truthyValue=n,r}return r(e,t),e.prototype.set=function(t){this.parent.set(t?this.truthyValue:null)},e}(t.Linked),v=function(t){function e(e,n){var r=t.call(this,null!=e.value)||this;return r.parent=e,r.defaultValue=n,r}return r(e,t),e.prototype.set=function(t){this.parent.set(t?this.defaultValue:null)},e}(t.Linked),y=function(t){function e(e,n){var r=t.call(this,e.value.indexOf(n)>=0)||this;return r.parent=e,r.element=n,r}return r(e,t),e.prototype.set=function(t){var e=this,n=Boolean(t);if(this.value!==n){var r=this.parent.value,o=t?r.concat(this.element):r.filter(function(t){return t!==e.element});this.parent.set(o)}},e}(t.Linked),d="Invalid value",k=function(t){function e(e,n){var r=t.call(this,e.value[n])||this;return r.parent=e,r.key=n,r}return r(e,t),e.prototype.remove=function(){this.parent.removeAt(this.key)},e.prototype.set=function(t){var e=this;this.value!==t&&this.parent.update(function(n){return n[e.key]=t,n})},e}(t.Linked);function g(t,e){var n={};for(var r in t)if(t.hasOwnProperty(r)){var o=t[r][e];void 0!==o&&(n[L(r)]=o)}return n}function L(t){return"$"===t[0]?t.slice(1):t}var m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.links=null,e}return r(e,t),e.prototype.linkAt=function(t){return this.$at(t)},e.prototype.$at=function(t){var e=this.state[t],n=this.links||(this.links={}),r=n[t];return r&&r.value===e?r:n[t]=new b(this,t,e)},e.prototype.linkAll=function(){return this.state$.apply(this,arguments)},e.prototype.state$=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=this.state,r=this.links||(this.links={}),o=0,u=t.length?t:Object.keys(n);o<u.length;o++){var i=u[o],a=n[i],s=r[i];s&&s.value===a||(r[i]=new b(this,i,a))}return r},e}(e.Component),b=function(t){function e(e,n,r){var o=t.call(this,r)||this;return o.component=e,o.key=n,o}return r(e,t),e.prototype.set=function(t){var e={};e[this.key]=t,this.component.setState(e)},e}(t.Linked),O=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return r(e,t),e.prototype.set=function(t){},e.prototype.update=function(t,e){this.set(function(n){var r=a(n).clone(n),o=t(r,e);return void 0===o?n:o})},e}(t.Linked);function w(t){var n=e.useState(t),r=n[0],o=n[1];return new O(r,o)}function j(t){var n=e.useState(t),r=n[0],o=n[1],u=_();return new O(r,function(t){return u.current&&o(t)})}function _(){var t=e.useRef(!0);return e.useEffect(function(){return function(){return t.current=!1}},[]),t}function P(n){var r=n instanceof t.Linked?n.value:n,o=w(r);return e.useEffect(function(){return o.set(r)},[r]),o}function S(n){var r=n instanceof t.Linked?n.value:n,o=j(r);return e.useEffect(function(){return o.set(r)},[r]),o}function A(t){return t&&void 0!==t._changeToken?t._changeToken:t}var V=t.Linked;t.default=V,t.Link=t.Linked,t.LinkedComponent=m,t.StateLink=b,t.PropValueLink=k,t.helpers=a,t.objectHelpers=c,t.arrayHelpers=f,t.useLink=w,t.useLinked=w,t.useSafeLinked=j,t.useSyncLinked=P,t.useSafeSyncLinked=S,t.useSafeLink=j,t.useIsMountedRef=_,t.useBoundLink=P,t.useSafeBoundLink=S,t.useLocalStorage=function(n,r){var o=e.useRef();o.current=r,e.useEffect(function(){var e=JSON.parse(localStorage.getItem(n)||"{}");return t.Linked.setValues(o.current,e),function(){var e=t.Linked.getValues(o.current);localStorage.setItem(n,JSON.stringify(e))}},[])},t.useIO=function(t,n){void 0===n&&(n=[]);var r=j(null);e.useEffect(function(){r.set(function(t){var e=t||[0,null];return[e[0]+1,e[1]]}),t().catch(function(t){r.set(function(e){var n=e[0];return e[1],[n-1,t]})}).then(function(){r.set(function(t){var e=t[0];return t[1],[e-1,null]})})},n);var o=r.value;return null!==o&&!o[0]&&(o[1]||!0)},t.whenChanged=function(t,e,n,r){var o=arguments.length;switch(o){case 1:return[A(t)];case 2:return[A(t),A(e)];case 3:return[A(t),A(e),A(n)];default:for(var u=[A(t),A(e),A(n),A(r)],i=4;i<o;i++)u.push(A(arguments[i]));return u}},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
