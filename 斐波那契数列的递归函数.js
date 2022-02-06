/**
 * @method 斐波那契数列的递归函数
 * @param {number} i
 */
function Fbi(i) {
  if (i < 2) {
    return i === 0 ? 0 : 1;
  }

  return Fbi(i - 1) + Fbi(i - 2);
}
