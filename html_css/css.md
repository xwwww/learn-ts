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

##### 二、手写 clearfix
