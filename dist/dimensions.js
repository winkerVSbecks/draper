Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=


























function(rem){
return _extends({},
heights(rem),
widths(rem));

};/**
 * Heights
 */var heights=function heights(rem){return{h1:{height:1*rem},h2:{height:2*rem},h3:{height:3*rem},h4:{height:4*rem},h5:{height:8*rem},h6:{height:16*rem}};};/**
 * Widths
 */var widths=function widths(rem){return{w1:{width:1*rem},w2:{width:2*rem},w3:{width:3*rem},w4:{width:4*rem},w5:{width:8*rem},w6:{width:16*rem}};};/**
 * Generate dimension classes
 */