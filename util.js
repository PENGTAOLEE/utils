/**
 * 工具函数集
 * @author lipengtao
 */
// !(function(name, definition) {
// 	var hasDefine = typeof define === 'function',
// 		hasExports = typeof module !== 'undefined' && module.exports;
// 		if (hasDefine) {
// 			// AMD/CMD
// 			define(definition);
// 		} else if (hasExports) {
// 			// Node.js
// 			module.exports = definition();
// 		} else {
// 			this[name] = definition();
// 		}
// })('Utils',function() {
// 	var Utils = function() {};
// 	/**
// 	 * 浏览器检测
// 	 * @param 参数
// 	 * @return 返回值
// 	 */
// 	Utils.prototype.log = function() {
// 		console.log(111)
// 	}
// })

var Utils = function() {}

Utils.prototype = {
	/**
	 * 判断是否IE浏览器
	 * @param 参数
	 * @return 返回值
	 */
	isIE: function() {

	},
	/**
	 * 判断是否浮点型
	 * @param {String | Number}  val
	 * @return {Boolean}
	 */
	isFloat: function(val) {
		val = Number(val);
		if (isNaN(val)) {
			return false
		} else {
			return val !== parseInt(val)
		}
	},
	/**
	 * 是否为整数
	 * @param {Mixed} value
	 * @return {Boolean}
	 */
	isInt: function(value) {
		// isFinite() 检验参数是否无穷大
		return typeof value === 'number' && isFinite(value) && value > -9007199254740992 && value < 9007199254740992 && Math.floor(value) === value
	},
	/**
	 * 是否为数字
	 * @param {Mixed} value
	 * @return {Boolean}
	 */
	isNumber: function(value) {
		return (!isNaN(value) && typeof value === 'number')
	},
	/**
	 * 是否为NaN
	 * @param {Mixed} value
	 * @return {Boolean}
	 */
	isNaN: function(value) {
		return (typeof value === 'number' && isNaN(value))
	},
	 /**
     * 判断arr是否为数组
     * @param   {Array}     arr  
     * @return  {Boolean}
     */
    isArray: function(arr) {
        return (Object.prototype.toString.call(arr) === '[object Array]');
    },
	/**
	 * 判断一个对象是否为DOM节点
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	isDOM: function(obj) {
		return obj && obj.nodeType === 1 && typeof(obj.nodeName) == 'string';
	},
	/**
	 * 去除数组中的假值元素，比如undefined,null,0,"",NaN都是假值
	 * @param {Array} arr
	 * @return {Array}
	 */
	compact: function(arr) {
		var index = -1,
			_index = -1,
			result = [],
			len = arr ? arr.length : 0;
		while(++index < len) {
			value = arr[index]
			if(value) result[++_index] = value
		}
		return result
	},
	/**
	 * 判断是否null, undefined, ''以外的值
	 * @param {Mixed} value
	 * @return {Boolean}
	 */
	isExpect: function(value) {
		return value !== null && value !== undefined && value !== ''
	},
	/**
	 * 通过随机十六进制数生成一个伪GUID
	 * @param 无
	 * @return {String}
	 */
	uuid: function() {
		var V4 = function() {
			return (((1 + Math.random()) * 0x10000 ) | 0 ).toString(16).substring(1)
		}
		return (V4() + V4() + "-" + V4() + "-" + V4() + "-" + V4() + "-" + V4() + V4() + V4())
	},
	/**
	 * ES5 判断全等 ===
	 * @param {Mixed} x
	 * @param {Mixed} y
	 * @return {Boolean}
	 */
	exactlyEqual: function(x,y) {
		if(x === y) {
			// +0 !== -0
			return x !== 0 || 1/x === 1/y;
		} 
		// NaN
		return x === x && y === y
	},
	/**
	 * 复制对象 ，浅拷贝
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	copyObject: function(obj) {
		return JSON.parse(JSON.stringify(obj))
	},
	/**
	 * 对一个Object进行深层拷贝，会将原型上的继承属性也拷贝
	 * @param {Object} source 需要拷贝的对象
	 * @return {Object} 拷贝后的对象
	 */
	deepClone: function(source) {
		var BUILTIN_OBJECT = {
            '[object HTMLHeadElement]': 0
        };
        var objToString = Object.prototype.toString;

        if (typeof source == 'object' && source !== null) {
            var result = source;
            if (source instanceof Array) {
                result = [];
                for (var i = 0, len = source.length; i < len; i++) {
                    result[i] = clone(source[i]);
                }
            } else if (!BUILTIN_OBJECT[objToString.call(source)] && !this.isDom(source)) {
                result = {};
                for (var key in source) {
                    result[key] = this.clone(source[key]);
                }
            }

            return result;
        }

        return source;
	},
	/**
	 * 合并对象 相同属性会覆盖
	 * @param {Object} a
	 * @param {Object} b
	 * .
	 * .
	 * @retutn {Object} 
 	 */
 	merge: function() {
 		var ret = {};
 		for (var i = 0; i < arguments.length; i++) {
 			var obj = arguments[i];
 			Object.keys(obj).forEach(function(key) {
 				ret[key] = obj[key]
 			})
 		}
 		return ret;
 	},
 	/**
 	 * 将一组集合转成数组
 	 * @retutn {Array}
 	 */
 	arrayOf: function() {
 		return [].slice.call(arguments);
 	},
 	/**
 	 * 构造类继承关系(clazz继承与baseClazz), 原型链上的属性和方法  
 	 * @param {Function} clazz 源类
 	 * @param {Function} baseClazz 基类
 	 */
 	inherits: function(clazz,baseClazz) {
 		// 只是继承了原型上的方法
 		// 如果需要继承属性使用 父级.call(this,arguments)  原因是 ： 我不知道如何继承属性
 		clazz.prototype = Object.create(baseClazz.prototype);
 		clazz.constructor = clazz;
 	},
 	/**
 	 * 源文件的所有属性复制到目标对象 如果元对象的属性未定义（undefined）,则不会复制
 	 * @param {Object} destination
 	 * @param {Object} aource
 	 * @return {Object}
 	 */
 	extends: function(destination,source) {
 		destination = destination || {};
 		if (source) {
 			for(var prop in source) {
 				var value = source[prop];
 				if(value !== undefined) {
 					destination[prop] = value
 				}
 			}
 		}
 		return destination;
 	}
}

var utils = new Utils()
