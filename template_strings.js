// Basic template;
var basic_tpl = `'Jose Angel \n Mendez Santiago' = "JamsMendez"`;
console.log(basic_tpl, '\n');

//Multiline template
var miltil_tpl = `Lorem ipsum dolor sit amet,
consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna`;
console.log(miltil_tpl, '\n');

// Interpolate variable bindings
var len = 'Javascript', value = 100;
var tpl = `${len} is completely and ${value}% amazing`;
console.log(tpl, '\n');

var obj = { len: 'Javascript', value: 100 };
var obj_tpl = `${obj.len} is completely and ${obj.value}% amazing`;
console.log(obj_tpl, '\n');
