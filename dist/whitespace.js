Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();exports.default=



























































function(scale){
return _extends({},
marginAndPaddingStyles(scale),{
mtIOS:mtIOS});

};var _reactNative=require('react-native');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var shorthands=[['m','margin'],['p','padding']];var directions=[['',''],// all
['h','Horizontal'],['v','Vertical'],['t','Top'],['r','Right'],['b','Bottom'],['l','Left']];/**
 * Whitespace Styles
 *
 * 	Padding
 * 		base: p
 * 		modifiers: h, v, t, r, b, l
 * 		scale: 0, 1, 2, 3, 4, 5, 6
 *
 * 	Margin
 * 		base: m
 * 		modifiers: h, v, t, r, b, l
 * 		scale: 0, 1, 2, 3, 4, 5, 6
 *
 * 	Example:
 * 		mb1 = marginBottom: 0.5 * rem
 *   	ph1 = paddingHorizontal: 4 * rem
 */function marginAndPaddingStyles(scale){var styles={};shorthands.forEach(function(_ref){var _ref2=_slicedToArray(_ref,2);var propShorthand=_ref2[0];var prop=_ref2[1];directions.forEach(function(_ref3){var _ref4=_slicedToArray(_ref3,2);var directionShorthand=_ref4[0];var direction=_ref4[1];scale.forEach(function(unit,idx){styles[''+propShorthand+directionShorthand+idx]=_defineProperty({},''+prop+direction,unit);});});});return styles;}/**
 * Margin to account for status bar on iOS
 */var mtIOS={marginTop:_reactNative.Platform.OS==='ios'?20:0};/**
 * Generate whitespace classes
 */