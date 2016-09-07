var _ava=require('ava');var _ava2=_interopRequireDefault(_ava);
var _ramda=require('ramda');var R=_interopRequireWildcard(_ramda);
var _config=require('./config');var _config2=_interopRequireDefault(_config);
var _colors=require('./colors');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}







(0,_ava2.default)('capitalize > should capitalize the first character of a string',
function(t){
t.is((0,_colors.capitalize)('green'),'Green');
t.is((0,_colors.capitalize)('Blue'),'Blue');
t.is((0,_colors.capitalize)(0),0);
});

(0,_ava2.default)('mapKeys > should map over the keys of an object',
function(t){
var result=(0,_colors.mapKeys)(R.toUpper,{a:1,b:2,c:3});
t.deepEqual(result,{A:1,B:2,C:3});
});

(0,_ava2.default)('textColors > should generate text color classes',
function(t){
var styles=(0,_colors.textColors)(_config2.default.clrs);
t.truthy(styles.red);
t.truthy(styles.green);
t.deepEqual(styles.blue,{color:_config2.default.clrs.blue});
});

(0,_ava2.default)('bgColors > should generate background color classes',
function(t){
var styles=(0,_colors.bgColors)(_config2.default.clrs);
t.truthy(styles.bgRed);
t.truthy(styles.bgGreen);
t.deepEqual(styles.bgBlue,{backgroundColor:_config2.default.clrs.blue});
});

(0,_ava2.default)('borderColors > should generate border color classes',
function(t){
var styles=(0,_colors.borderColors)(_config2.default.clrs);
t.truthy(styles.borderRed);
t.truthy(styles.borderGreen);
t.deepEqual(styles.borderBlue,{borderColor:_config2.default.clrs.blue});
});