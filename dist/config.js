Object.defineProperty(exports,"__esModule",{value:true});var rem=16;
var borderWidth=2;

/**
 * Type Scale
 *  from: http://www.basscss.com/#basscss-typography
 */
var typeScale={
f1:2,// * rem
f2:1.5,// * rem
f3:1.25,// * rem
f4:1,// * rem
f5:0.875,// * rem
f6:0.75};


/**
 * Whitespace Scale
 *  extension of http://www.basscss.com whitespace scale
 */
var scale=[
0,// 0
0.5,// 1
1,// 2
2,// 3
4,// 4
8,// 5
16];


/**
 * line Heights
 *  from: https://github.com/tachyons-css/tachyons-line-height
 */
var lineHeightScale={
solid:1,
title:1.3,
copy:1.6};


/**
 * Color palette
 *  from: http://clrs.cc
 */
var clrs={
aqua:'#7fdbff',
blue:'#0074d9',
lime:'#01ff70',
navy:'#001f3f',
teal:'#39cccc',
olive:'#3d9970',
green:'#2ecc40',
red:'#ff4136',
maroon:'#85144b',
orange:'#ff851b',
purple:'#b10dc9',
yellow:'#ffdc00',
fuchsia:'#f012be',
gray:'#aaaaaa',
white:'#ffffff',
black:'#111111',
silver:'#dddddd'};exports.default=


{
rem:rem,
scale:scale,
clrs:clrs,
typeScale:typeScale,
borderWidth:borderWidth,
lineHeightScale:lineHeightScale};