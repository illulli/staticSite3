webpackJsonp([0xabee81500713],{190:function(module,exports){"use strict";module.exports=function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(e){return n[e]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s="./src/index.js")}({"./src/index.js":function srcIndexJs(module,exports,__webpack_require__){eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _simulation = __webpack_require__(/*! ./simulations/simulation.js */ "./src/simulations/simulation.js");\n\nconsole.log("index.js running");\n\n\nfunction createTransalator() {\n    return {\n        numtoword: converttoword,\n        getSimulation: (0, _simulation.getSimulation)()\n    };\n}\n\nvar converttoword = function converttoword(num) {\n    console.log("fun 1");\n};\n\nexports.default = createTransalator();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJpbmRleC5qcyBydW5uaW5nXCIpO1xyXG5pbXBvcnQge2dldFNpbXVsYXRpb259IGZyb20gJy4vc2ltdWxhdGlvbnMvc2ltdWxhdGlvbi5qcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVHJhbnNhbGF0b3IoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG51bXRvd29yZDogY29udmVydHRvd29yZCxcclxuICAgICAgICBnZXRTaW11bGF0aW9uOiBnZXRTaW11bGF0aW9uKClcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbnZlcnR0b3dvcmQgPSAobnVtKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZ1biAxXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVHJhbnNhbGF0b3IoKTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n')},"./src/simulations/simulation.js":function srcSimulationsSimulationJs(module,exports,__webpack_require__){eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\nexports.getSimulation = getSimulation;\nconsole.log("sim loaded");\n\nfunction getSimulation() {\n    console.log("returning sim");\n    return simulate;\n}\n\nfunction simulate() {\n    console.log("running sim");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2ltdWxhdGlvbnMvc2ltdWxhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2ltdWxhdGlvbnMvc2ltdWxhdGlvbi5qcz9jYTlmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwic2ltIGxvYWRlZFwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaW11bGF0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBzaW1cIik7XHJcbiAgICByZXR1cm4gc2ltdWxhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbXVsYXRlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInJ1bm5pbmcgc2ltXCIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7OztBQUVBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/simulations/simulation.js\n')}})},202:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function l(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var c=t(2),u=o(c),a=t(190),s=(o(a),function(n){function e(t){return r(this,e),i(this,n.call(this,t))}return l(e,n),e.prototype.render=function(){return console.log("rendering game a"),u.default.createElement("div",null,u.default.createElement("p",null,"Game A"))},e}(u.default.Component));e.default=s,n.exports=e.default}});
//# sourceMappingURL=component---src-pages-game-a-jsx-3075d6849f731d1ff6a8.js.map