(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1395:function(module,exports,__webpack_require__){__webpack_require__(1396),__webpack_require__(2325),__webpack_require__(2321),__webpack_require__(2322),__webpack_require__(2220),__webpack_require__(2224),__webpack_require__(2256),__webpack_require__(2323),__webpack_require__(2324),module.exports=__webpack_require__(2320)},1463:function(module,exports){},2220:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(46),_storybook_addons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(259),_storybook_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_storybook_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(916),marked__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(872),__webpack_require__(594)),marked__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),PANEL_ID="".concat("axa-ch/readme","/panel"),MyPanel=function MyPanel(){var value=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_2__.k)("readme",null);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"markdown-body",style:{margin:"15px"},dangerouslySetInnerHTML:{__html:function mdToHTML(value){return value||(value="No README found."),marked__WEBPACK_IMPORTED_MODULE_5___default()(value)}(value)}})};_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.c.register("axa-ch/readme",(function(){_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.c.add(PANEL_ID,{type:_storybook_addons__WEBPACK_IMPORTED_MODULE_1__.b.PANEL,title:"Readme",paramKey:"readme",render:function render(_ref){var active=_ref.active,key=_ref.key;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_3__.a,{active:active,key:key},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MyPanel,null))}})}))},2224:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(2225),__webpack_require__(1306),__webpack_require__(2255);var _storybook_addons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(46),_storybook_addons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(259),_storybook_api__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),_storybook_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(916),react__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(872),__webpack_require__(0)),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),PANEL_ID="".concat("axa-ch/usage","/panel"),formatComponentNameReact=function formatComponentNameReact(componentName){return componentName&&componentName.replace(/\s/g,"")},MyPanel=function MyPanel(){var _storiesHash$storyId,param=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_5__.k)("usage",{}),_useStorybookState=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_5__.m)(),storyId=_useStorybookState.storyId,componentName=null===(_storiesHash$storyId=_useStorybookState.storiesHash[storyId])||void 0===_storiesHash$storyId?void 0:_storiesHash$storyId.name,PURE_HTML_TAG=function formatComponentNameHtml(componentName){return componentName&&formatComponentNameReact(componentName).replace(/[A-Z]/g,(function(match){return"-".concat(match.toLowerCase())})).replace(/^-/,"")}(componentName),REACT_TAG=formatComponentNameReact(componentName),innerHTML=param.innerHTML,propsPureHTML=param.propsPureHTML,propsReact=param.propsReact,usageReact=param.usageReact;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"markdown-body",style:{margin:"15px"}},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2",{id:"usage"},componentName),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong",null,"Important:")," If this component needs to run in Internet Explorer 11,"," ",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a",{href:"https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/05-utils/polyfill"},"you need to use our polyfill"),"."),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre",null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code",{className:"language-bash"},"npm install @axa-ch/",PURE_HTML_TAG)),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre",null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code",{className:"language-js"},"import '@axa-ch/",PURE_HTML_TAG,"';",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"...",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"<axa-",PURE_HTML_TAG,propsPureHTML&&" ".concat(propsPureHTML),">",innerHTML,"</axa-",PURE_HTML_TAG,">")),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3",{id:"react"},"React"),usageReact||react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",null,"Create a React-ified ",PURE_HTML_TAG," with the createElement function from your React version and then use it like this:"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre",null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code",{className:"language-js"},"import ","{ createElement }"," from 'react';",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"import createAXA",REACT_TAG,"React from '@axa-ch/",PURE_HTML_TAG,"/lib/index.react';",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"const AXA",REACT_TAG,"React = createAXA",REACT_TAG,"React(createElement);",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"export default AXA",REACT_TAG,"React;")),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre",null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code",{className:"language-js"},"<AXA",REACT_TAG,"React",propsReact&&" ".concat(propsReact),">",innerHTML&&react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"  ".concat(innerHTML),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null)),"</AXA",REACT_TAG,"React>"))),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3",{id:"pure-html-pages"},"Pure HTML pages"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",null,"Import the ",PURE_HTML_TAG,"-defining script and use it like this:"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("pre",null,react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("code",{className:"language-html"},"<!DOCTYPE html>",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),'<html lang="en">',react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"  ","<head>",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"    ",'<meta charset="UTF-8" />',react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"    ",'<meta name="viewport" content="width=device-width, initial-scale=1.0" />',react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"    ",'<meta http-equiv="X-UA-Compatible" content="ie=edge" />',react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"    ","<title>Your awesome title</title>",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"  ","</head>",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"  ","<body>",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"    ","<axa-",PURE_HTML_TAG,propsPureHTML&&" ".concat(propsPureHTML),">",innerHTML,"</axa-",PURE_HTML_TAG,">",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"    ",'<script src="node_modules/@axa-ch/',PURE_HTML_TAG,'/dist/index.js"><\/script>',react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"  ","</body>",react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br",null),"</html>")))};_storybook_addons__WEBPACK_IMPORTED_MODULE_3__.c.register("axa-ch/usage",(function(){_storybook_addons__WEBPACK_IMPORTED_MODULE_3__.c.add(PANEL_ID,{type:_storybook_addons__WEBPACK_IMPORTED_MODULE_4__.b.PANEL,title:"Usage",paramKey:"usage",render:function render(_ref){var active=_ref.active,key=_ref.key;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_6__.a,{active:active,key:key},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MyPanel,null))}})}))},2256:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(46),_storybook_addons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(259),_storybook_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_storybook_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(916),marked__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(872),__webpack_require__(594)),marked__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),PANEL_ID="".concat("axa-ch/changelog","/panel"),MyPanel=function MyPanel(){var value=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_2__.k)("changelog",null);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"markdown-body",style:{margin:"15px"},dangerouslySetInnerHTML:{__html:function mdToHTML(value){return value||(value="No CHANGELOG found."),marked__WEBPACK_IMPORTED_MODULE_5___default()(value)}(value)}})};_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.c.register("axa-ch/changelog",(function(){_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.c.add(PANEL_ID,{type:_storybook_addons__WEBPACK_IMPORTED_MODULE_1__.b.PANEL,title:"Changelog",paramKey:"changelog",render:function render(_ref){var active=_ref.active,key=_ref.key;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_3__.a,{active:active,key:key},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MyPanel,null))}})}))},2320:function(module,exports,__webpack_require__){"use strict";__webpack_require__(45).addons.setConfig({refs:{}})},2325:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(46),create=__webpack_require__(1356),logo_axa=__webpack_require__.p+"static/media/logo-axa.ce06b802.svg",UI_STORE="@storybook/ui/store",manipulateUISettings=function manipulateUISettings(storage){if(storage.getItem(UI_STORE)){var uiStore=JSON.parse(storage.getItem(UI_STORE));uiStore.layout||(uiStore.layout={}),uiStore.layout.showPanel=!1,storage.setItem(UI_STORE,JSON.stringify(uiStore))}else storage.setItem(UI_STORE,'{"layout":{"showPanel":false}}')};manipulateUISettings(localStorage),manipulateUISettings(sessionStorage),esm.c.setConfig({theme:Object(create.create)({base:"light",brandTitle:"AXA Living Styleguide",brandUrl:"https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop",brandImage:logo_axa})})}},[[1395,2,3]]]);