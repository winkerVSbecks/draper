var _ava=require('ava');var _ava2=_interopRequireDefault(_ava);
var _dimensions=require('./dimensions');var _dimensions2=_interopRequireDefault(_dimensions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

(0,_ava2.default)('should generate width and height classes',function(t){
var rem=16;
var styles=(0,_dimensions2.default)(rem);

t.deepEqual(styles.h1,{height:1*rem});
t.deepEqual(styles.h4,{height:4*rem});
t.deepEqual(styles.w3,{width:3*rem});
t.deepEqual(styles.w5,{width:8*rem});
});