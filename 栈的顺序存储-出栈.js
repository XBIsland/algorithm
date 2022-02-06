const MAXSIZE = 20 // * 假如存储空间长度为20

/**
 * @method 出栈
 * @param {*} Stack 栈
 */
function pop(Stack){
  let e = null
  if (Stack.top === -1) return false // * 空栈

  e = Stack.data[Stack.top] // * 将出栈元素赋值给e
  Stack.top-- // * 栈顶指针减 1 

  return e
}