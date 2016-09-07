Object.defineProperty(exports,"__esModule",{value:true});exports.default=


absolute;/**
 * Generate absolute position classes
 */function absolute(rem){return{abs:{position:'absolute'},
top0:{top:0},
right0:{right:0},
bottom0:{bottom:0},
left0:{left:0},

top1:{top:1*rem},
right1:{right:1*rem},
bottom1:{bottom:1*rem},
left1:{left:1*rem},

top2:{top:2*rem},
right2:{right:2*rem},
bottom2:{bottom:2*rem},
left2:{left:2*rem},

top3:{top:3*rem},
right3:{right:3*rem},
bottom3:{bottom:3*rem},
left3:{left:3*rem},

top4:{top:4*rem},
right4:{right:4*rem},
bottom4:{bottom:4*rem},
left4:{left:4*rem},

z1:{zIndex:1,elevation:1},
z2:{zIndex:2,elevation:2},
z3:{zIndex:4,elevation:4},
z4:{zIndex:8,elevation:8}};

}