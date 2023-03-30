/**
 * typeof 取某个值的type
 */
// const a: number = 3
// const b: typeof a = 4 // 相当于 const b: number = 4
type Concat<T extends [], U extends []> = [...T, ...U];

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = Concat<typeof a, typeof b>;

// 类型 c 的结果为 [1, 2, 3, 4, 5, 6]
console.log(c)
