var _ava=require('ava');var _ava2=_interopRequireDefault(_ava);
var _build=require('./build');var _build2=_interopRequireDefault(_build);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var config={
clrs:{
mauve:'#E0B0FF'}};


var s=(0,_build2.default)(config);

(0,_ava2.default)('should build StyleSheet',function(t){
t.deepEqual(s.mauve,{color:config.clrs.mauve});
t.deepEqual(s.bgMauve,{backgroundColor:config.clrs.mauve});
t.deepEqual(s.borderMauve,{borderColor:config.clrs.mauve});
});

(0,_ava2.default)('getConfig > should extend config with options',function(t){
t.deepEqual((0,_build.getConfig)({rem:32}).rem,32);
t.deepEqual((0,_build.getConfig)({borderWidth:6}).borderWidth,6);
t.is((0,_build.getConfig)(config).clrs.mauve,config.clrs.mauve);
t.deepEqual(
(0,_build.getConfig)({scale:[1,2,3,4]}).scale,
[16,32,48,64]);

t.deepEqual(
(0,_build.getConfig)({
typeScale:{
f2:1.5,
f3:1.25}}).

typeScale,{
f1:32,
f2:24,
f3:20,
f4:16,
f5:14,
f6:12});

t.deepEqual(
(0,_build.getConfig)({
lineHeightScale:{
solid:0.5,
title:2}}).

lineHeightScale,{
solid:0.5,
title:2,
copy:1.6});

});