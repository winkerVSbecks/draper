Object.defineProperty(exports,"__esModule",{value:true});exports.fontStyles=exports.weights=exports.fontSizes=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=






































function(typeScale){
return _extends({},
fontSizes(typeScale),
weights,
fontStyles);

};var _ramda=require('ramda');var R=_interopRequireWildcard(_ramda);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}/**
 * Font Sizes
 */var fontSizes=exports.fontSizes=R.map(function(size){return{fontSize:size};});/**
 * Font Weights
 */var weights=exports.weights={normal:{fontWeight:'normal'},bold:{fontWeight:'bold'},fw1:{fontWeight:'100'},fw2:{fontWeight:'200'},fw3:{fontWeight:'300'},fw4:{fontWeight:'400'},fw5:{fontWeight:'500'},fw6:{fontWeight:'600'},fw7:{fontWeight:'700'},fw8:{fontWeight:'800'},fw9:{fontWeight:'900'}};/**
 * Font Styles
 */var fontStyles=exports.fontStyles={italic:{fontStyle:'italic'},left:{textAlign:'left'},center:{textAlign:'center'},right:{textAlign:'right'},justify:{textAlign:'justify'},textAlignVertical:{textAlignVertical:'center'}};/**
 * Generate type classes
 */