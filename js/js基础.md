##### 一、值类型和引用类型

值类型存储在栈中，引用类型存储在堆中

##### 二、常见类型

* 值类型
  + undefined
  + number
  + string
  + boolean
  + Symbol
  + null // 指针指向空地址

* 引用类型
  + Object
  + function // 特殊引用类型，但不用于存储数据

##### 三、typeof 运算符
  
  * 识别所有值类型
  * 识别函数
  * 判断是否是引用类型

```js
let a; typeof a // undefined
const str = 'abc'; typeof str // string
const b = true; typeof b // boolean
const s = Symbol('s'); typeof s // symbol
```

##### 四、手写深拷贝

```js
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  
  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}
```

##### 五、变量计算-类型转换

###### 字符串拼接
```js
const a = 100 + 10 // 110
const b = 100 + '10' // '10010'
const c = true + '10' // 'true10'
```

###### == 运算符
```js
100 == '100' // true
0 == '' // true
0 == false // true
false == '' // true
null == undefined // true
```

###### if 语句和逻辑运算符

truly 变量： !!a === true 的变量
falsely 变量 !!a === false 的变量