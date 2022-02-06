/**
 * @method 单链表创建尾插法
 * @param {*} n 随机产生n个元素的值
 */
 function createListHead (n) {
  let L = {}

  L.next = null
  
  let r = L // * r 指向链表尾部结点

  for (let i = 0; i < n; i++) {
    const p = {}
    p.data = i
    r.next = p
    r = p
  }

  r.next = null

  return L
}

const List = createListHead(10)
console.log('====================================');
console.log(List);
console.log('====================================');