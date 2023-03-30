/**
 * Readonly 将所有属性定义为只读
 */
type Coord = Readonly<Record<'x' | 'y', number>>

// 等同于
// type Coord = {
//   readonly x: number;
//   readonly y: number;
// }

// 如果进行了修改会报错
const c: Coord = { x: 1, y: 2 }
c.x = 2; // Cannot assign to 'x' because it is a read-only property.