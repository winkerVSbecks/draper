Object.defineProperty(exports,"__esModule",{value:true});exports.getConfig=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _ramda=require('ramda');var R=_interopRequireWildcard(_ramda);
var _colors=require('./colors');var _colors2=_interopRequireDefault(_colors);
var _whitespace=require('./whitespace');var _whitespace2=_interopRequireDefault(_whitespace);
var _typography=require('./typography');var _typography2=_interopRequireDefault(_typography);
var _flexbox=require('./flexbox');var _flexbox2=_interopRequireDefault(_flexbox);
var _dimensions=require('./dimensions');var _dimensions2=_interopRequireDefault(_dimensions);
var _border=require('./border');var _border2=_interopRequireDefault(_border);
var _absolute=require('./absolute');var _absolute2=_interopRequireDefault(_absolute);
var _config=require('./config');var _config2=_interopRequireDefault(_config);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

/**
 * Generate a flat map of classes
 */
function generateClasses(_ref){var clrs=_ref.clrs;var scale=_ref.scale;var typeScale=_ref.typeScale;var rem=_ref.rem;var borderWidth=_ref.borderWidth;
return _extends({},
(0,_colors2.default)(clrs),
(0,_whitespace2.default)(scale),
(0,_typography2.default)(typeScale),_flexbox2.default,

(0,_dimensions2.default)(rem),
(0,_border2.default)(rem,borderWidth),
(0,_absolute2.default)(rem));

}

/**
 * Generate StyleSheet
 */
var generateStyleSheet=R.compose(
R.assoc('fill',_reactNative.StyleSheet.absoluteFill),
_reactNative.StyleSheet.create,
generateClasses);


/**
 * Extend options for base config
 */
var extendOps={
clrs:R.merge(_config2.default.clrs),
rem:R.defaultTo(_config2.default.rem),
scale:R.defaultTo(_config2.default.scale),
typeScale:R.merge(_config2.default.typeScale),
borderWidth:R.defaultTo(_config2.default.borderWidth),
lineHeightScale:R.merge(_config2.default.lineHeightScale)};


/**
 * Converts a scale to rems
 */
function toRems(rem,type){
return R.compose(
R.objOf(type),
R.map(R.multiply(rem)),
R.prop(type));

}

/**
 * Convert the scale and typescale to rems
 */
function remScale(config){
return R.compose(
R.merge(config),
R.converge(R.merge,[
toRems(config.rem,'scale'),
toRems(config.rem,'typeScale')]))(

config);
}

/**
 * Customize base config
 */
function extendConfig(options){
return R.mapObjIndexed(function(prop,type){return(
prop(options[type]));},extendOps);
}

/**
 * Generate the config
 */
var getConfig=exports.getConfig=R.compose(
remScale,
extendConfig);


/**
 * Build the styles
 */
var build=R.compose(
R.converge(R.merge,[R.objOf('config'),generateStyleSheet]),
getConfig);exports.default=


build;