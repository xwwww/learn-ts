/**
 * is 判断值的类型
 */
function isString(test: any): test is string {
  return typeof test === 'string'
}

function example(foo: any) {
  if (isString(foo)) {
    console.log(foo, 'is a string')
  } else {
    console.log(foo, 'is not a string')
  }
}

example('123')
example(123)