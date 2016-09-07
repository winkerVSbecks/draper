var _ava=require('ava');var _ava2=_interopRequireDefault(_ava);
var _border=require('./border');var _border2=_interopRequireDefault(_border);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var rem=16;
var bw=2;
var styles=(0,_border2.default)(rem,bw);

(0,_ava2.default)('should generate rounded border classes',function(t){
t.truthy(styles.rounded);
t.truthy(styles.rounded.borderRadius);
t.truthy(styles.rounded6.borderRadius);
});

(0,_ava2.default)('should generate zero border classes',function(t){
t.deepEqual(styles.border0,{borderWidth:0});
t.deepEqual(styles.borderB0,{borderBottomWidth:0});
t.deepEqual(styles.border0,{borderWidth:0});
});

(0,_ava2.default)('should generate border width classes',function(t){
t.deepEqual(styles.border,{borderWidth:bw});
t.deepEqual(styles.borderR,{borderRightWidth:bw});
});

(0,_ava2.default)('should generate border hairline width classes',function(t){
t.deepEqual(styles.borderHl,{
borderWidth:_reactNative.StyleSheet.hairlineWidth});

t.deepEqual(styles.borderLHl,{
borderLeftWidth:_reactNative.StyleSheet.hairlineWidth});

});