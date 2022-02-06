/**
 * @method KMP算法
 * @param S 主串
 * @param T 字串
 * @param next T 串通过 getNext 函数得出的数组
 */
const search = (S = "", T = "", next) => {
  let i = 0; // 主串下标
  let j = 0; // 字串下标

  while (i < S.length && j < T.length) {
    if (j === -1 || S[i] === T[j]) {
      // j 为-1 或 匹配成功时，下标后移
      i++;
      j++;
    } else {
      // 失配，j 进行回溯
      j = next[j];
    }
  }

  if (j === T.length) {
    // 相等说明全部字符完成匹配，i - j 算出开始匹配的 S 下标
    return i - j;
  } else {
    return -1;
  }
};

/**
 * @method 获取next数组
 * @param T 字串
 */
const getNext = (T = "") => {
  let next = [-1];
  // next[0] = -1;

  let i = 0; // * T串前缀下标
  let j = -1; // * T串后缀下标

  while (i < T.length) {
    // * 匹配时，next 写入当前 j 值，前后缀下标 +1
    if (j === -1 || T[i] === T[j]) {
      i++;
      j++;
      next[i] = j;
    } else {
      // * 失配时，j 根据 next 数组进行回溯
      j = next[j];
    }
    console.log("i", i);
  }

  return next;
};
const S = "ABCABCAABCABCD";
const T = "ABCABCD";

const next = getNext(T);
const index = search(S, T, next);

