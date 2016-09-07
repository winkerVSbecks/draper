var _ava=require('ava');var _ava2=_interopRequireDefault(_ava);
var _config=require('./config');var _config2=_interopRequireDefault(_config);
var _typography=require('./typography');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

(0,_ava2.default)('should have weights classes',function(t){
t.truthy(_typography.weights.normal);
t.truthy(_typography.weights.bold);
t.truthy(_typography.weights.fw1);
t.truthy(_typography.weights.fw2);
t.truthy(_typography.weights.fw3);
t.truthy(_typography.weights.fw4);
t.truthy(_typography.weights.fw5);
t.truthy(_typography.weights.fw6);
t.truthy(_typography.weights.fw7);
t.truthy(_typography.weights.fw8);
t.truthy(_typography.weights.fw9);
});

(0,_ava2.default)('should have font style classes',function(t){
t.truthy(_typography.fontStyles.italic);
t.truthy(_typography.fontStyles.left);
t.truthy(_typography.fontStyles.center);
t.truthy(_typography.fontStyles.right);
t.truthy(_typography.fontStyles.justify);
t.truthy(_typography.fontStyles.textAlignVertical);
});

(0,_ava2.default)('should generate font size classes',function(t){
var styles=(0,_typography.fontSizes)(_config2.default.typeScale);
t.deepEqual(styles.f1,{fontSize:_config2.default.typeScale.f1});
t.deepEqual(styles.f2,{fontSize:_config2.default.typeScale.f2});
t.deepEqual(styles.f3,{fontSize:_config2.default.typeScale.f3});
t.deepEqual(styles.f4,{fontSize:_config2.default.typeScale.f4});
t.deepEqual(styles.f5,{fontSize:_config2.default.typeScale.f5});
t.deepEqual(styles.f6,{fontSize:_config2.default.typeScale.f6});
});