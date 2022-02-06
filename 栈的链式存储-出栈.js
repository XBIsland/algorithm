/**
 * @method 出栈
 * @param {*} Stack 栈
 */
function push(Stack) {
  if (Stack.top === null) return 'ERROR'

  let e = Stack.top.data
  let p = Stack.top

  Stack.top = Stack.top.next // * 栈顶下移
  p = null // * 释放原栈顶
  Stack.count --

  return e;
}
