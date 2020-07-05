/**
 * 实现模糊二分查找算法（比如大于等于给定值的第一个元素）
 * @param {Array<number>} array
 * @param {Number} num
 */
function binarySearch(array, num) {
  let left = 0
  let right = array.length - 1
  while (right >= left) {
    let middle = Math.floor((left + right) / 2)
    if (array[middle] >= num) {
      if (middle === 0 || array[middle - 1] < num) {
        return middle
      } else {
        right = middle - 1
      }
    } else {
      left = middle + 1
    }
  }
  return -1
}

console.log(binarySearch([5], 4))
</number>