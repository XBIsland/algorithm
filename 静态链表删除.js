// * 回收下标为 k 的空闲结点
function Free_SSL(L, k) {
  L[k].cur = L[0].cur
  L[0].cur = k
}

/**
 *
 * @param {*} L 静态链表
 * @param {*} i 链表第 i 个位置
 */
function ListDelete(L, i) {
  let k = L.length - 1;
  let j = null;

  if (i < 1 || i > L.length) return false;

  for (let j = 1; j < i - 1; j++) {
    k = L[k].cur; // k 为第 i 个元素的前一个元素下标
  }

  j = L[k].cur; // j 为 第 i 个元素的下标
  L[k].cur = L[j].cur;

  Free_SSL(L, j);

  return true;
}
