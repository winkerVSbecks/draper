Object.defineProperty(exports,"__esModule",{value:true});exports.borderColors=exports.bgColors=exports.textColors=exports.mapKeys=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.




capitalize=capitalize;exports.default=








































function(clrs){
return _extends({},
textColors(clrs),
bgColors(clrs),
borderColors(clrs));

};var _ramda=require('ramda');var R=_interopRequireWildcard(_ramda);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}/**
 * Capitalize the first character of a string
 */function capitalize(str){if(!R.is(String,str)){return str;}return str.charAt(0).toUpperCase()+str.slice(1);}/**
 * Map over the keys of an object
 * mapKeys(R.toUpper, { a: 1, b: 2, c: 3 }); // { A: 1, B: 2, C: 3 }
 */var mapKeys=exports.mapKeys=R.curry(function(fn,obj){return R.fromPairs(R.map(R.adjust(fn,0),R.toPairs(obj)));});/**
 * Text Colors
 * for example: black would apply `color: '#515163'`
 */var textColors=exports.textColors=R.map(R.objOf('color',R.__));/**
 * Background Colors
 * for example:
 * 	bgBlack would apply `backgroundColor: '#515163'`
 */var bgColors=exports.bgColors=R.compose(R.map(R.objOf('backgroundColor',R.__)),mapKeys(function(clr){return'bg'+capitalize(clr);}));/**
 * Border Colors
 * for example:
 * 	borderBlack would apply `borderColor: '#515163'`
 */var borderColors=exports.borderColors=R.compose(R.map(R.objOf('borderColor',R.__)),mapKeys(function(clr){return'border'+capitalize(clr);}));/**
 * Generate color classes
 */