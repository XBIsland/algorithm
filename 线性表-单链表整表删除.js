/**
 * @method 单链表整表删除
 * @param {LinkList} L 顺序线性表 单链表
 */
function clearList(L) {
  let p = null;
  let q = null;

  p = L.next; // * 指向第一个结点
  while (p) {
    q = p.next;

    free(p); // * 释放p free函数可用 p = null 模拟释放
    p = q;
  }

  L.next = null; // * 头结点指针域为空

  return true;
}
