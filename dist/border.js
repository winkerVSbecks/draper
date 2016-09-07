Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=

















































function(rem,borderWidth){
return _extends({},
borderRadii(rem),
borders(borderWidth));

};var _reactNative=require('react-native');/**
 * Border Radius
 *
 * 	base: rounded
 *
 * 	modifiers: 0 - 6 (match the dimensions scale)
 */var borderRadii=function borderRadii(rem){return{rounded:{borderRadius:0.25*rem},rounded1:{borderRadius:1*rem},rounded2:{borderRadius:2*rem},rounded3:{borderRadius:3*rem},rounded4:{borderRadius:4*rem},rounded5:{borderRadius:8*rem},rounded6:{borderRadius:16*rem}};};/**
 * Borders
 *
 * 	base: border
 *
 * 	size:
 * 	  0 = 0
 * 		default = config.borderWidth
 * 		hl = StyleSheet.hairlineWidth
 */var borders=function borders(borderWidth){return{border0:{borderWidth:0},borderT0:{borderTopWidth:0},borderR0:{borderRightWidth:0},borderB0:{borderBottomWidth:0},borderL0:{borderLeftWidth:0},border:{borderWidth:borderWidth},borderT:{borderTopWidth:borderWidth},borderR:{borderRightWidth:borderWidth},borderB:{borderBottomWidth:borderWidth},borderL:{borderLeftWidth:borderWidth},borderHl:{borderWidth:_reactNative.StyleSheet.hairlineWidth},borderTHl:{borderTopWidth:_reactNative.StyleSheet.hairlineWidth},borderRHl:{borderRightWidth:_reactNative.StyleSheet.hairlineWidth},borderBHl:{borderBottomWidth:_reactNative.StyleSheet.hairlineWidth},borderLHl:{borderLeftWidth:_reactNative.StyleSheet.hairlineWidth}};};/**
 * Generate border classes
 */