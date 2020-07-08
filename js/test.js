/**
 * 节点
 */
class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}
/**
 * 双向链表
 */
class LinkedList {
  constructor() {
    const head = new Node()
    const tail = new Node()
    head.next = tail
    tail.prev = head
    this.head = head
    this.tail = tail
  }
  movetoHead(value) {
    const node = this.findNode(value)
    //   删除当前位置节点
    const nodeNext = node.next
    nodeNext.prev = node.prev
    node.prev.next = nodeNext
    //   放到头
    this.addToHead(node.value)
  }
  addToHead(value) {
    const node = new Node(value)
    const nextNode = this.head.next
    node.next = nextNode
    node.prev = this.head
    nextNode.prev = node
    this.head.next = node
  }
  popTail() {
    const node = this.tail.prev
    const nodePrev = node.prev
    nodePrev.next = this.tail
    this.tail.prev = nodePrev
    return node.value
  }
  findNode(value) {
    let node = this.head
    while (node.next) {
      if (node.value === value) {
        return node
      }
      node = node.next
    }
    return -1
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.size = 0
  this.capacity = capacity
  this.map = new Map()
  this.linkedList = new LinkedList()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    this.linkedList.movetoHead(key)
    return this.map.get(key)
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.linkedList.movetoHead(key)
    this.map.set(key, value)
  } else {
    if (this.size >= this.capacity) {
      // 删掉尾部
      const tailKey = this.linkedList.popTail()
      this.map.delete(tailKey)
      // 插入新的头部
      this.linkedList.addToHead(key)
      this.map.set(key, value)
    } else {
      // 插入新的头部
      this.linkedList.addToHead(key)
      this.map.set(key, value)
      this.size++
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.hashTable = {}
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key) {
    let node = this.hashTable[key]
    if (node == null) return -1
    this.moveToHead(node)
    return node.value
  }

  put(key, value) {
    let node = this.hashTable[key]
    if (node == null) {
      let newNode = new ListNode(key, value)
      this.hashTable[key] = newNode
      this.addToHead(newNode)
      this.count++
      if (this.count > this.capacity) {
        this.removeLRUItem()
      }
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }
  
  removeFromList(node) {
    let tempForPrev = node.prev
    let tempForNext = node.next
    tempForPrev.next = tempForNext
    tempForNext.prev = tempForPrev
  }

  addToHead(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  removeLRUItem() {
    let tail = this.popTail()
    delete this.hashTable[tail.key]
    this.count--
  }

  popTail() {
    let tailItem = this.dummyTail.prev
    this.removeFromList(tailItem)
    return tailItem
  }
}

var cache = new LRUCache(2 /* 缓存容量 */)

cache.put(1, 1)
console.log('cache', cache)

cache.put(2, 2)
console.log('cache', cache)
 // 返回  1
console.log('返回  1', cache.get(1))
console.log('cache', cache)

cache.put(3, 3) // 该操作会使得关键字 2 作废
console.log('cache', cache)

console.log('返回  -1', cache.get(2))
console.log('cache', cache)

cache.put(4, 4) // 该操作会使得关键字 1 作废
console.log('cache', cache)

cache.get(1) // 返回 -1 (未找到)
console.log('cache', cache)

cache.get(3) // 返回  3
console.log('cache', cache)

cache.get(4) // 返回  4
