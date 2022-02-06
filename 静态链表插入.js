let List = [
  { data: null, cur: 7 },
  { data: "甲", cur: 2 },
  { data: "乙", cur: 3 },
  { data: "丁", cur: 4 },
  { data: "戊", cur: 5 },
  { data: "己", cur: 6 },
  { data: "庚", cur: 0 },
  { data: null, cur: 8 },
  { data: null, cur: 9 },
  { data: null, cur: 10 },
  { data: null, cur: 1 },
];

/**
 *
 * @param {*} L
 * @returns 返回当前分配的空闲结点下标
 */
function Malloc_SSL(L) {
  let i = L[0].cur;
  if (L[0].cur) {
    L[0].cur = L[i].cur; // * 将第一个元素的cur 赋值为下一个备用结点的下标
  }

  return i;
}

/**
 * 
 * @param {*} L 静态链表
 * @param {*} i 链表第 i 个位置
 * @param {*} e 插入的数据
 * @returns 
 */
function ListInsert(L, i, e) {
  let k = L.length - 1;
  if (i < 1 || i > k + 1) return false;

  const j = Malloc_SSL(L); // * 查找出当前空闲的下标

  if (j) {
    L[j].data = e; // * 空闲结点赋值

    for (let l = 1; l < i - 1; l++) {
      k = L[k].cur // ? 找到第 i 个元素的前一个位置下标
    }
    L[j].cur = L[k].cur // * i 之前的结点 cur 赋值给新元素的 cur
    L[k].cur = j // * i 之前结点的 cur 赋值为新结点的 index

    return true
  }
  return false
}

ListInsert(List, 3, "丙");
