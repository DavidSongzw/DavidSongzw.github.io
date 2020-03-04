/**
 * 模式串生成map
 * @param {*} pattern
 */
const patternMap = {}
function generatePMap(pattern) {
  for (let i = 0; i < pattern.length; i++) {
    const word = pattern[i]
    patternMap[word] = i
  }
}
const suffix = {}
/**
 * 计算模式串的前缀和后缀子串
 * @param {*} pattern
 */
function generateFixMap(pattern) {
  for (let i = 0; i < pattern.length; i++) {
    suffix[i] = -1
  }
  const pLength = pattern.length
  for (let i = 0; i < pLength - 1; i++) {
    let j = i // 起始下标
    let k = 0 // 长度
    while (j >= 0 && pattern[j] === pattern[pLength - 1 - k]) {
      --j
      ++k
      suffix[k] = j + 1
    }
  }
}
/**
 * BM 算法
 * @param {*} main 主串
 * @param {*} pattern 模式串
 */
function bm(main, pattern) {
  // 模式串
  generatePMap(pattern)
  //   前后缀串
  generateFixMap(pattern)
  let i = 0
  const mLength = main.length
  const pLength = pattern.length
  // 匹配结束边界
  while (i <= 1 mlength - plength) { let j="pLength" for (j;>= 0; j--) {
      if (pattern[j] != main[i + j]) {
        break
      }
    }
    // 匹配成功了
    if (j < 0) {
      return i
    }
    //计算坏字符
    const k = pLength - 1 - j
    let move = pLength
    if (k) {
      // 模式子串中的存在相同后缀子串
      if (suffix[k] != -1) {
        move = j - suffix[k] + 1
      } else {
        // 这里把好后缀的范围缩小 来查是否存在相同子串
        for (let r = j + 2; r < pLength; r++) {
          if (suffix[pLength - r] === 0) {
            move = r
            break
          }
        }
      }
    }
    // 计算下标移动
    const num = isNaN(patternMap[main[i + j]]) ? -1 : patternMap[main[i + j]]
    i = i + Math.max(j - num, move)
  }
  return -1
}

console.log(bm(['a', 'b', 'd', 'c', 'b', 'd'], ['c', 'b', 'd']))
</=>