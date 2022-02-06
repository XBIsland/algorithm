const MAXSIZE = 20 // * 假如存储空间长度为20

/**
 * @method 栈的插入
 * @param {*} Stack 栈
 * @param {*} e 插入的元素
 */
function push(Stack, e){
  if (Stack.top === MAXSIZE - 1) return false // * 栈满

  Stack.top++ // * 栈顶指针加 1 
  Stack.data[Stack.top] = e // * 将插入元素赋值给栈顶空间

  return true
}