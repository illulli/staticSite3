webpackJsonp([96035311733894],{71:function(e,t){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){e.exports=n(7)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=(r=u)&&r.__esModule?r:{default:r},i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),o(t,[{key:"render",value:function(){return console.log("rendering story"),l.default.createElement("p",null,"Story")}}]),t}();t.default=i},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=(r=u)&&r.__esModule?r:{default:r},i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),o(t,[{key:"render",value:function(){return console.log("rendering simulation"),l.default.createElement("p",null,"Simulation")}}]),t}();t.default=i},function(e,t,n){function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){e.exports={}},function(e,t,n){var r=function(e){};e.exports=function(e,t,n,o,u,l,i,f){if(r(t),!e){var a;if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,u,l,i,f],p=0;(a=new Error(t.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}}},function(e,t,r){var o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(n({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,i=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),f=1;f<arguments.length;f++){for(var a in n=Object(arguments[f]))u.call(n,a)&&(i[a]=n[a]);if(o){r=o(n);for(var c=0;c<r.length;c++)l.call(n,r[c])&&(i[r[c]]=n[r[c]])}}return i}},function(e,t,n){function r(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}function o(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||M}function u(){}function l(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||M}function i(e,t,n){var r=void 0,o={},u=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)A.call(t,r)&&!q.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var f=Array(i),a=0;a<i;a++)f[a]=arguments[a+2];o.children=f}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:w,type:e,key:u,ref:l,props:o,_owner:$.current}}function f(e){return"object"==typeof e&&null!==e&&e.$$typeof===w}function a(e,t,n,r){if(U.length){var o=U.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function c(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>U.length&&U.push(e)}function p(e,t,n,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case w:case g:l=!0}}if(l)return n(o,e,""===t?"."+s(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=t+s(u=e[i],i);l+=p(u,f,n,o)}else if(f=null===e||void 0===e?null:"function"==typeof(f=C&&e[C]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),i=0;!(u=e.next()).done;)l+=p(u=u.value,f=t+s(u,i++),n,o);else"object"===u&&r("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return l}function s(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function y(e,t){e.func.call(e.context,t,e.count++)}function d(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?b(e,r,n,_.thatReturnsArgument):null!=e&&(f(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n,e={$$typeof:w,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function b(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(N,"$&/")+"/"),t=a(t,u,r,o),null==e||p(e,"",d,t),c(t)}var h=n(6),v=n(5),m=n(4),_=n(3),O="function"==typeof Symbol&&Symbol.for,w=O?Symbol.for("react.element"):60103,g=O?Symbol.for("react.portal"):60106,j=O?Symbol.for("react.fragment"):60107,P=O?Symbol.for("react.strict_mode"):60108,E=O?Symbol.for("react.profiler"):60114,S=O?Symbol.for("react.provider"):60109,x=O?Symbol.for("react.context"):60110,k=O?Symbol.for("react.async_mode"):60111,R=O?Symbol.for("react.forward_ref"):60112;O&&Symbol.for("react.timeout");var C="function"==typeof Symbol&&Symbol.iterator,M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&r("85"),this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},u.prototype=o.prototype;var T=l.prototype=new u;T.constructor=l,h(T,o.prototype),T.isPureReactComponent=!0;var $={current:null},A=Object.prototype.hasOwnProperty,q={key:!0,ref:!0,__self:!0,__source:!0},N=/\/+/g,U=[],F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return b(e,r,null,t,n),r},forEach:function(e,t,n){return null==e?e:(t=a(null,null,t,n),null==e||p(e,"",y,t),c(t),void 0)},count:function(e){return null==e?0:p(e,"",_.thatReturnsNull,null)},toArray:function(e){var t=[];return b(e,t,null,_.thatReturnsArgument),t},only:function(e){return f(e)||r("143"),e}},createRef:function(){return{current:null}},Component:o,PureComponent:l,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:x,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:S,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:R,render:e}},Fragment:j,StrictMode:P,unstable_AsyncMode:k,unstable_Profiler:E,createElement:i,cloneElement:function(e,t,n){(null===e||void 0===e)&&r("267",e);var o=void 0,u=h({},e.props),l=e.key,i=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(i=t.ref,f=$.current),void 0!==t.key&&(l=""+t.key);var a=void 0;for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)A.call(t,o)&&!q.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==a?a[o]:t[o])}if(1===(o=arguments.length-2))u.children=n;else if(1<o){a=Array(o);for(var c=0;c<o;c++)a[c]=arguments[c+2];u.children=a}return{$$typeof:w,type:e.type,key:l,ref:i,props:u,_owner:f}},createFactory:function(e){var t=i.bind(null,e);return t.type=e,t},isValidElement:f,version:"16.4.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:$,assign:h}},I={default:F},V=I&&F||I;e.exports=V.default?V.default:V},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=r(n(0)),l=r(n(2)),i=r(n(1)),f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("h1",null,"Game View"),u.default.createElement(l.default,null),u.default.createElement(i.default,null))}}]),t}();t.default=f}])},74:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),f=r(i),a=n(71),c=r(a),p=function(e){function t(){return o(this,t),u(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return console.log("rendering simulation"),f.default.createElement("div",null,f.default.createElement("p",null,"Game"),f.default.createElement(c.default,null))},t}(f.default.Component);t.default=p,e.exports=t.default},204:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),f=r(i),a=n(74),c=r(a),p=function(e){function t(){return o(this,t),u(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return console.log("rendering game b"),f.default.createElement("div",null,f.default.createElement("p",null,"Game B"),f.default.createElement(c.default,null))},t}(f.default.Component);t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-game-b-jsx-cd38d4877e7494be8af7.js.map