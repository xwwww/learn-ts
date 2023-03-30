/**
 * Record 以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。
 */
type Coord = Record<'x' | 'y', number>;

// 等同于
// type Coord = {
//   x: number;
//   y: number;
// }
const coord: Coord = {
  x: 1,
  y: 2
}

console.log(coord)