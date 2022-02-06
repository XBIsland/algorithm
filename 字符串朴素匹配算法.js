
/**
 * @method 字符串朴素匹配算法
 * @param S 主串
 * @param T 子串
 */
const findIndex = (S, T) => {
  const sLength = S.length
  const tLength = T.length

  let sIndex = 0
  let tIndex = 0

  while (sIndex < sLength && tIndex < tLength) {
    if (S[sIndex] === T[tIndex]) { // 值相等继续
      ++sIndex
      ++tIndex
    } else {
      sIndex = sIndex - tIndex + 1 // 主串Index退回上次匹配首尾的下一位
      tIndex = 0 // 字串退回首位
    }

  }
  
  if (tIndex === tLength) { // 匹配成功
    return sIndex - tLength
  } else {
    return 0
  }
}