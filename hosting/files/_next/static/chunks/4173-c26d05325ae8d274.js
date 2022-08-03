"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4173],{94173:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var s=n(27378),l=n(31542),f=n(23615),p=n(2846).createFocusTrap,d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(u,e);var t,n,o,c=i(u);function u(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).tailoredFocusTrapOptions={returnFocusOnDeactivate:!1},t.returnFocusOnDeactivate=!0;var n=e.focusTrapOptions;for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&("returnFocusOnDeactivate"!==o?"onPostDeactivate"!==o?t.tailoredFocusTrapOptions[o]=n[o]:t.onPostDeactivate=n[o]:t.returnFocusOnDeactivate=!!n[o]);return t.focusTrapElements=e.containerElements||[],t.updatePreviousElement(),t}return t=u,(n=[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||("undefined"!==typeof document?document:void 0)}},{key:"getNodeForOption",value:function(e){var t=this.tailoredFocusTrapOptions[e];if(!t)return null;var n,o=t;if("string"===typeof t&&!(o=null===(n=this.getDocument())||void 0===n?void 0:n.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"===typeof t&&!(o=t()))throw new Error("`".concat(e,"` did not return a node"));return o}},{key:"getReturnFocusNode",value:function(){var e=this.getNodeForOption("setReturnFocus");return e||this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var e=this.getDocument();e&&(this.previouslyFocusedElement=e.activeElement)}},{key:"deactivateTrap",value:function(){var e=this,t=this.tailoredFocusTrapOptions,n=t.checkCanReturnFocus,o=t.preventScroll,r=void 0!==o&&o;this.focusTrap&&this.focusTrap.deactivate({returnFocus:!1});var a=function(){var t=e.getReturnFocusNode();(null===t||void 0===t?void 0:t.focus)&&e.returnFocusOnDeactivate&&t.focus({preventScroll:r}),e.onPostDeactivate&&e.onPostDeactivate.call(null)};n?n(this.getReturnFocusNode()).then(a,a):a()}},{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var e=this.focusTrapElements.map(l.findDOMNode);e.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(e,this.tailoredFocusTrapOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(e){if(this.focusTrap){e.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var t=!e.active&&this.props.active,n=e.active&&!this.props.active,o=!e.paused&&this.props.paused,r=e.paused&&!this.props.paused;if(t&&(this.updatePreviousElement(),this.focusTrap.activate()),n)return void this.deactivateTrap();o&&this.focusTrap.pause(),r&&this.focusTrap.unpause()}else e.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var e=this,t=this.props.children?s.Children.only(this.props.children):void 0;if(t){if(t.type&&t.type===s.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return s.cloneElement(t,{ref:function(n){var o=e.props.containerElements;t&&("function"===typeof t.ref?t.ref(n):t.ref&&(t.ref.current=n)),e.focusTrapElements=o||[n]}})}return null}}])&&r(t.prototype,n),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),u}(s.Component),v="undefined"===typeof Element?Function:Element;d.propTypes={active:f.bool,paused:f.bool,focusTrapOptions:f.shape({document:f.object,onActivate:f.func,onPostActivate:f.func,checkCanFocusTrap:f.func,onDeactivate:f.func,onPostDeactivate:f.func,checkCanReturnFocus:f.func,initialFocus:f.oneOfType([f.instanceOf(v),f.string,f.func,f.bool]),fallbackFocus:f.oneOfType([f.instanceOf(v),f.string,f.func]),escapeDeactivates:f.oneOfType([f.bool,f.func]),clickOutsideDeactivates:f.oneOfType([f.bool,f.func]),returnFocusOnDeactivate:f.bool,setReturnFocus:f.oneOfType([f.instanceOf(v),f.string,f.func]),allowOutsideClick:f.oneOfType([f.bool,f.func]),preventScroll:f.bool,tabbableOptions:f.shape({displayCheck:f.oneOf(["full","non-zero-area","none"]),getShadowRoot:f.oneOfType([f.bool,f.func])})}),containerElements:f.arrayOf(f.instanceOf(v)),children:f.oneOfType([f.element,f.instanceOf(v)])},d.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:p},e.exports=d},2846:function(e,t,n){n.r(t),n.d(t,{createFocusTrap:function(){return R}});var o=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],r=o.join(","),a="undefined"===typeof Element,i=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!a&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},u=function(e,t,n){var o=Array.prototype.slice.apply(e.querySelectorAll(r));return t&&i.call(e,r)&&o.unshift(e),o=o.filter(n)},s=function e(t,n,o){for(var a=[],c=Array.from(t);c.length;){var u=c.shift();if("SLOT"===u.tagName){var s=u.assignedElements(),l=e(s.length?s:u.children,!0,o);o.flatten?a.push.apply(a,l):a.push({scope:u,candidates:l})}else{i.call(u,r)&&o.filter(u)&&(n||!t.includes(u))&&a.push(u);var f=u.shadowRoot||"function"===typeof o.getShadowRoot&&o.getShadowRoot(u);if(f){var p=e(!0===f?u.children:f.children,!0,o);o.flatten?a.push.apply(a,p):a.push({scope:u,candidates:p})}else c.unshift.apply(c,u.children)}}return a},l=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},f=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},p=function(e){return"INPUT"===e.tagName},d=function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||c(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!==typeof window&&"undefined"!==typeof window.CSS&&"function"===typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},v=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},b=function(e,t){return!(t.disabled||function(e){return p(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var r=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(r,"details:not([open]) *"))return!0;if(!n||"full"===n){if("function"===typeof o){for(var a=e;e;){var u=e.parentElement,s=c(e);if(u&&!u.shadowRoot&&!0===o(u))return v(e);e=e.assignedSlot?e.assignedSlot:u||s===e.ownerDocument?u:s.host}e=a}return!e.getClientRects().length}return"non-zero-area"===n&&v(e)}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!i.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},h=function(e,t){return!(d(t)||l(t)<0||!b(e,t))},y=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scope,i=a?t.scope:t,c=l(i,a),u=a?e(t.candidates):i;0===c?a?n.push.apply(n,u):n.push(i):o.push({documentOrder:r,tabIndex:c,item:t,isScope:a,content:u})})),o.sort(f).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},m=function(e,t){var n;return n=(t=t||{}).getShadowRoot?s([e],t.includeContainer,{filter:h.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot}):u(e,t.includeContainer,h.bind(null,t)),y(n)},O=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==i.call(e,r)&&h(t,e)},g=o.concat("iframe").join(","),T=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==i.call(e,g)&&b(t,e)};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(){var e=[];return{activateTrap:function(t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)},deactivateTrap:function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}}}(),S=function(e){return setTimeout(e,0)},k=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},N=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"===typeof e?e.apply(void 0,n):e},D=function(e){return e.target.shadowRoot&&"function"===typeof e.composedPath?e.composedPath()[0]:e.target},R=function(e,t){var n,o=(null===t||void 0===t?void 0:t.document)||document,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},i=function(e,t,n){return e&&void 0!==e[t]?e[t]:r[n||t]},c=function(e){return a.containerGroups.findIndex((function(t){var n=t.container,o=t.tabbableNodes;return n.contains(e)||o.find((function(t){return t===e}))}))},l=function(e){var t=r[e];if("function"===typeof t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];t=t.apply(void 0,a)}if(!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var c=t;if("string"===typeof t&&!(c=o.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},f=function(){var e=l("initialFocus");if(!1===e)return!1;if(void 0===e)if(c(o.activeElement)>=0)e=o.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(a.containerGroups=a.containers.map((function(e){var t,n,o=m(e,r.tabbableOptions),a=(t=e,(n=(n=r.tabbableOptions)||{}).getShadowRoot?s([t],n.includeContainer,{filter:b.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):u(t,n.includeContainer,b.bind(null,n)));return{container:e,tabbableNodes:o,focusableNodes:a,firstTabbableNode:o.length>0?o[0]:null,lastTabbableNode:o.length>0?o[o.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=a.findIndex((function(t){return t===e}));if(!(n<0))return t?a.slice(n+1).find((function(e){return O(e,r.tabbableOptions)})):a.slice(0,n).reverse().find((function(e){return O(e,r.tabbableOptions)}))}}})),a.tabbableGroups=a.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),a.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function e(t){!1!==t&&t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!r.preventScroll}),a.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(t)&&t.select()):e(f()))},v=function(e){var t=l("setReturnFocus",e);return t||!1!==t&&e},h=function(e){var t=D(e);c(t)>=0||(N(r.clickOutsideDeactivates,e)?n.deactivate({returnFocus:r.returnFocusOnDeactivate&&!T(t,r.tabbableOptions)}):N(r.allowOutsideClick,e)||e.preventDefault())},y=function(e){var t=D(e),n=c(t)>=0;n||t instanceof Document?n&&(a.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),d(a.mostRecentlyFocusedNode||f()))},g=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==N(r.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=D(e);p();var n=null;if(a.tabbableGroups.length>0){var o=c(t),i=o>=0?a.containerGroups[o]:void 0;if(o<0)n=e.shiftKey?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var u=k(a.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(u<0&&(i.container===t||T(t,r.tabbableOptions)&&!O(t,r.tabbableOptions)&&!i.nextTabbableNode(t,!1))&&(u=o),u>=0){var s=0===u?a.tabbableGroups.length-1:u-1;n=a.tabbableGroups[s].lastTabbableNode}}else{var f=k(a.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(f<0&&(i.container===t||T(t,r.tabbableOptions)&&!O(t,r.tabbableOptions)&&!i.nextTabbableNode(t))&&(f=o),f>=0){var v=f===a.tabbableGroups.length-1?0:f+1;n=a.tabbableGroups[v].firstTabbableNode}}}else n=l("fallbackFocus");n&&(e.preventDefault(),d(n))}(e)},R=function(e){if(!N(r.clickOutsideDeactivates,e)){var t=D(e);c(t)>=0||N(r.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())}},P=function(){if(a.active)return F.activateTrap(n),a.delayInitialFocusTimer=r.delayInitialFocus?S((function(){d(f())})):d(f()),o.addEventListener("focusin",y,!0),o.addEventListener("mousedown",h,{capture:!0,passive:!1}),o.addEventListener("touchstart",h,{capture:!0,passive:!1}),o.addEventListener("click",R,{capture:!0,passive:!1}),o.addEventListener("keydown",g,{capture:!0,passive:!1}),n},C=function(){if(a.active)return o.removeEventListener("focusin",y,!0),o.removeEventListener("mousedown",h,!0),o.removeEventListener("touchstart",h,!0),o.removeEventListener("click",R,!0),o.removeEventListener("keydown",g,!0),n};return(n={activate:function(e){if(a.active)return this;var t=i(e,"onActivate"),n=i(e,"onPostActivate"),r=i(e,"checkCanFocusTrap");r||p(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=o.activeElement,t&&t();var c=function(){r&&p(),P(),n&&n()};return r?(r(a.containers.concat()).then(c,c),this):(c(),this)},deactivate:function(e){if(!a.active)return this;clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,C(),a.active=!1,a.paused=!1,F.deactivateTrap(n);var t=i(e,"onDeactivate"),o=i(e,"onPostDeactivate"),r=i(e,"checkCanReturnFocus");t&&t();var c=i(e,"returnFocus","returnFocusOnDeactivate"),u=function(){S((function(){c&&d(v(a.nodeFocusedBeforeActivation)),o&&o()}))};return c&&r?(r(v(a.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return a.paused||!a.active||(a.paused=!0,C()),this},unpause:function(){return a.paused&&a.active?(a.paused=!1,p(),P(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"===typeof e?o.querySelector(e):e})),a.active&&p(),this}}).updateContainerElements(e),n}}}]);