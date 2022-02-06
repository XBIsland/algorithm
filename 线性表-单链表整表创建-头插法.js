/**
 * @method 单链表创建头插法
 * @param {*} n 随机产生n个元素的值
 */
function createListHead (n) {
  let L = {}

  L.next = null
  for (let i = 0; i < n; i++) {
    const p = {}
    p.data = i
    p.next = L.next

    L.next = p
  }

  return L
}

const List = createListHead(10)
console.log('====================================');
console.log(JSON.stringify(List));
console.log('====================================');