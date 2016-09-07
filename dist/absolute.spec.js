var _ava=require('ava');var _ava2=_interopRequireDefault(_ava);
var _absolute=require('./absolute');var _absolute2=_interopRequireDefault(_absolute);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

(0,_ava2.default)('should generate absolute positioning classes',function(t){
var rem=16;
var styles=(0,_absolute2.default)(rem);

t.deepEqual(styles.abs,{position:'absolute'});
t.deepEqual(styles.top1,{top:1*rem});
t.deepEqual(styles.top2,{top:2*rem});
t.deepEqual(styles.top3,{top:3*rem});
t.deepEqual(styles.top4,{top:4*rem});
t.deepEqual(styles.z1,{zIndex:1,elevation:1});
});