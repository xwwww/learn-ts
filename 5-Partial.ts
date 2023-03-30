/**
 * Partial 将类型定义的所有属性修改为可选
 */ 
type Coord = Partial<Record<'x' | 'y', number>>

// 等同于
// type Coord = {
//   x?: number;
//   y?: number;
// }
const pointX: Coord = {
  x: 1
}
console.log(pointX)