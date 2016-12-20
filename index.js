/**
 * 应用场景
 */
// var arr = [1,2,3,4,,null,5,false,'',6,,7]
// console.log(utils.compact(arr))
// console.log(utils.exactlyEqual(NaN,NaN))
// console.log(utils.isInt(50.01))
// console.log(utils.isNumber('1111'))
// console.log(isNaN(Number('aisjdoais')))
// console.log(utils.isNaN(Number('aisjdoais')))
// var obj = {
// 	a: 1,
// 	b: 2,
// 	c: [
// 		{
// 			c1: 3
// 		},{
// 			c2: 4
// 		}
// 	]
// }
// console.log(obj)
// obj1 = utils.copyObject(obj)
// obj2 = obj1
// console.log(obj1 === obj2)

// var obj1 = {
// 	a: 1,
// 	b: 2,
// 	c: [
// 		{
// 			c1: 1
// 		},{
// 			c2: 2
// 		}
// 	]
// }
// var obj2 = {
// 	a: 1,
// 	b: 3,
// 	c: [
// 		{
// 			c1: 44
// 		}
// 	]
// }
// obj1.forEach(function(item,index){
// 	console.log(item)
// })
// var arr = utils.arrayOf(obj1)
// arr.forEach(function(item,index){
// 	console.log(item)
// })
// console.log(utils.isArray({}))
// 

// function Ha() {
// 	this.a = 1;
// 	this.b = 2;
// }
// Ha.prototype.say = function() {
// 	console.log("这是爸爸说的")
// }
// var f = new Ha()
// console.log(f)


// var Son = function() {
// 	// Ha.call(this,arguments)
// 	this.c = 111
// }
// utils.inherits(Son,Ha)
// // Son.prototype = Object.create(Ha.prototype);
// // Son.constructor = Son;
// var son = new Son()
// // son.prototype = new Ha()
// // son.constructor = Ha
// console.log(son)
// var a = {a:1}
// var b = {b:22,c:[1,2,3]}
// console.log(utils.extends(a,b))