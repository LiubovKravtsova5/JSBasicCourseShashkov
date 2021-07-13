"use strict"
var a = 1;
var b = 1;
var c;
var d;

var conditions = "var a = 1, var b = 1";

alert(conditions);           // 2
d = b++; alert(d);           // 1
c = (2 + ++a); alert(c);      // 5
d = (2 + b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3