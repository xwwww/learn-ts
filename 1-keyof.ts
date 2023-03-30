/**
 * keyof, 取 interface 的键
 */
interface Point {
  x: number,
  y: number
}

type keys = keyof Point

function getPoint(p: Point, name: string): keys {
  return p[name]
}
console.log(getPoint({ x: 1, y: 2 }, 'x'))

// 获取对象的属性
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}