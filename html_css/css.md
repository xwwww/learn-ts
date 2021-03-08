#### 布局

##### 一、盒模型宽度计算

```css
<style>
  #div {
    width: 100px;
    padding: 10px;
    border: 1px solid #fff;
    margin: 10px;
  }
</style>
```
* offsetWidth = (内容宽度 + 内边距 + 边框)，无外边距
> div 宽度 122px
* box-sizing: border-box, 则宽度为 100px，宽度包含边框和内边距

##### 二、margin 纵向重叠问题

* 相邻元素的 margin-top 和 margin-bottom 会发生重叠
* 空白内容的 p 标签会重叠

```html
<style>
  p {
    font-size: 16px;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>
<p>AAA</p>
<p></p>
<p></p>
<p></p>
<p>BBB</p>
```
> AAA 和 BBB 之前的距离是 15px


##### 三、margin 负值问题
 
* margin-top 和 margin-left 负值，元素向上、左移动
* margin-right 负值，右侧元素向左移动，元素自身不受影响
* margin-bottom 负值，下侧元素向上移动，元素自身不受影响

#### BFC 的理解和应用

##### 一、什么是 BFC

* Block format contenxt, 块级格式上下文
* 一块独立渲染区域，内部元素的渲染不会边界意外的元素
* 形成 BFC 的常见条件
  > + float 不是 none
  > + position 是 absolute 或者 fixed 
  > + overflow 不是 visible
  > + display 是 flex、 inline-block 等
* BFC 的常见应用
> 清除浮动


#### float 布局

##### 一、实现圣杯布局和双飞翼布局

* 目的
  > + 三栏布局，中间一栏最先加载和渲染（内容最重要）
  > + 两个内容股东，中间内容随宽度自适应
  > + 一般用于 PC 网页
* 技术总结
  > + 使用 float 布局
  > + 两侧使用 margin 负值，以便和中间内容横向重叠
  > + 防止中间内容被两侧覆盖，一个使用 padding，一个使用 margin

```html
<!-- 圣杯布局 -->
```

```html
<!-- 双飞翼布局 -->
```
##### 二、手写 clearfix

```css
/* 手写 clearfix */
.clearfix:after {
  content: '';
  display: table;
  clear: both;
}
.clearfix {
  *zoom: 1; /* 兼容 IE 低版本*/
}
```

#### flex 布局

##### 一、flex 实现三点的色子

* flex 常用语法
  + flex-direction
  + justify-content
  + align-items
  + flex-wrap
  + align-self

```css
/* flex 画三个点的色子 */
.box {
  display: flex;
  justify-content: space-between;
}

.item {
  /* 点样式 */
}

.item:nth-child(2) {
  align-self: center;
}

.item:nth-child(2) {
  align-self: flex-end;
}
```

#### 定位

##### 一、absolute 和 relative 分别依据什么定位？

* relative 依据自身定位
* absolute 依据最近一层的定位元素定位
* 定位元素：absolute、relative、fixed、body 元素

##### 二、居中的实现方式

###### 水平居中

* inline元素
  > text-align: center 
* block 元素
  > margin: auto
* absolute 元素
  > left: 50% + margin-left 负值

###### 垂直居中

* inline 元素
  > line-height的值等于height 的值
* absolute 元素
  > top: 50% + margin-top 负值
* absolute 元素
  > transform(-50%, -50%)
* absolute 元素
  > top, left, bottom, right = 0; margin: auto

#### 图文样式

##### 一、line-height 如何继承

``` html
<!-- p 标签的行高是多少  -->
<style>
body {
  font-size: 20px;
  line-height: 200%;
}
p {
  font-size: 16px;
}
</style>
<body>
  <p>AAA</p>
</body>
```
> p 标签的行号是 40px

* 写具体数值，则继承该值
* 写比例，则继承该比例
* 写百分比，则继承计算出来的值（百分比 * body-fontSize)

#### 响应式

#####  一、rem 是什么

* rem 是一个长度单位
  + px，绝对长度单位，常用
  + em，相对长度单位，相对于父元素，不常用
  + rem，相对长度单位，相对于根元素，常用于响应式

##### 二、响应式布局的常见方案

* media-query, 根据不同屏幕宽度设置根元素font-size
* rem, 基于根元素的相对单位

##### 三、vw/vh

* rem 的弊端
  + 具有阶梯型
* 网页视口尺寸, e.g.
  + window.screen.height // 屏幕高度
  + window.innerHeight // 网页视口高度
  + document.body.clientHeight // body 高度
* vh 网页视口高度的 1%
* vw 网页视口宽度的 1%
* vmax 取两者最大值； vmin 取两者最小值
