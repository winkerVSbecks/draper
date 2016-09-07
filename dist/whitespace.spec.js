var _ava=require('ava');var _ava2=_interopRequireDefault(_ava);
var _whitespace=require('./whitespace');var _whitespace2=_interopRequireDefault(_whitespace);
var _config=require('./config');var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var styles=(0,_whitespace2.default)(_config2.default.scale);

(0,_ava2.default)('should have ios margin top class',function(t){
t.deepEqual(styles.mtIOS,{marginTop:20});
});

(0,_ava2.default)('should have whitespace classes',function(t){
t.truthy(styles.mb1);
t.truthy(styles.mt4);
t.truthy(styles.ml3);
t.deepEqual(styles.m2,{margin:_config2.default.scale[2]});
t.truthy(styles.pb4);
t.truthy(styles.pl3);
t.truthy(styles.pr2);
t.truthy(styles.p1,{padding:_config2.default.scale[1]});
});