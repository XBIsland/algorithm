/**
 * @method 进栈
 * @param {*} Stack 栈
 * @param {*} e 插入的元素
 */
function push(Stack, e) {
  let s = {}; // * 新建元素
  s.data = e;
  s.next = Stack.top;
  Stack.top = s;
  Stack.count++;

  return true
}
