/**
 * 1. JavaScript 中的数组和其他语言的数组不太一样
 * 2. 原生就支持动态扩容
 * 3. 使用 ArrayBuffer 模拟其他语言数组 实现数组的动态扩容
 * 4. Uint8Array 来做 DataView
 */
const preArraySize = 4
class DynamicArray {
  constructor (size = preArraySize) {
    //   存储的数量
    this._size = 0
    // 最后一个的下标
    this._lastIndex = 0
    // 默认长度为4
    this._array = new Uint8Array(size)
  }
  /**
   * 添加
   * @param {*} item
   */
  add (item) {
    this.set(this._lastIndex + 1, item)
  }
  /**
   * 根据下标删除
   * @param {*} index
   */
  remove (index) {
    if (this.rangeCheck(index)) {
      console.log('下标越界')
      return undefined
    }
    this._array[index] = 0
    this._size--
    return index
  }
  /**
   * 根据下标设置值
   * @param {*} index
   * @param {*} item
   */
  set (index, item) {
    this._lastIndex = Math.max(index, this._lastIndex)
    if (this.rangeCheck(index)) {
      const size = index + 1
      console.log('set 下标越界')
      this._array = this.copyBuffer(size)
      this._array[index] = item
    } else {
      this._array[index] = item
    }
    this._size++
  }
  /**
   * 根据下标取值
   * @param {*} index
   */
  get (index) {
    if (this.rangeCheck(index)) {
    //   console.log('get 下标越界')
      return undefined
    }
    return this._array[index]
  }
  /**
   * @param {*} index
   * 下标越界检查
   */
  rangeCheck (index) {
    return index > this._array.length - 1 || index < 0
  }
  /**
   * 复制
   * @param {*} size 
   */
  copyBuffer (size) {
    const buffer = new Uint8Array(size)
    buffer.set(this._array)
    return buffer
  }
  /**
   * 当前存储的数据个数
   */
  get size () {
    return this._size
  }
}
const arr = new DynamicArray(10)
for (let i = 0; i < 20; i++) {
  arr.set(i, i)
}
arr.add(22)
arr.add(33)
arr.add(44)
arr.remove(3)
for (let i = 0; i < 25; i++) {
  console.log(arr.get(i))
}

console.log(arr);