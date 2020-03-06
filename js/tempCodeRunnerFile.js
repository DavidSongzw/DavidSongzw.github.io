























// /**
//  * kmp 算法
//  * @param {*} main 主串
//  * @param {*} pattern 模式串
//  */
// function kmp(main, pattern) {
//   // 长度
//   const mLength = main.length
//   const pLength = pattern.length
//   // 获取next数组
//   const next = getNext(pattern, pLength)
//   // 模式串下标
//   let j = 0
//   for (let i = 0; i < mLength; i++) {
//     // 一直找到 main[i]和 pattern[j] 坏字符
//     while (j > 0 && main[i] != pattern[j]) {
//       j = next[j - 1] + 1 // 滑动到最大可滑动的下标
//     }
//     // 匹配的字符 向后移动
//     if (main[i] == pattern[j]) {
//       ++j
//     }
//     // 找到匹配模式串的了
//     if (j === pLength) {
//       return i - pLength + 1 // 得出当前主串中匹配的第一个下标
//     }
//   }
//   return -1
// }
