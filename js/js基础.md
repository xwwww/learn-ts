##### 一、值类型和引用类型

值类型存储在栈中，引用类型存储在堆中

##### 二、常见类型

* 值类型
  + undefined
  + number
  + string
  + boolean
  + Symbol

* 引用类型
  + null // 指针指向空地址
  + Object

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

```js

```