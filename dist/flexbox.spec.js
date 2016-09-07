var _ava=require('ava');var _ava2=_interopRequireDefault(_ava);
var _flexbox=require('./flexbox');var _flexbox2=_interopRequireDefault(_flexbox);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

(0,_ava2.default)('should have flexbox classes',function(t){
t.truthy(_flexbox2.default.relative);
t.deepEqual(_flexbox2.default.flx1,{flex:1});
t.deepEqual(_flexbox2.default.flx2,{flex:2});
t.deepEqual(_flexbox2.default.flx3,{flex:3});
t.truthy(_flexbox2.default.flxCol);
t.truthy(_flexbox2.default.flxRow);
t.truthy(_flexbox2.default.flxWrap);
t.truthy(_flexbox2.default.flxNoWrap);
t.truthy(_flexbox2.default.itemsStart);
t.truthy(_flexbox2.default.itemsCenter);
t.truthy(_flexbox2.default.itemsEnd);
t.truthy(_flexbox2.default.itemsStretch);
t.truthy(_flexbox2.default.selfStart);
t.truthy(_flexbox2.default.selfCenter);
t.truthy(_flexbox2.default.selfEnd);
t.truthy(_flexbox2.default.selfStretch);
t.truthy(_flexbox2.default.jcStart);
t.truthy(_flexbox2.default.jcEnd);
t.truthy(_flexbox2.default.jcCenter);
t.truthy(_flexbox2.default.jcBetween);
t.truthy(_flexbox2.default.jcAround);
});