class ACNode {
  constructor(data) {
    this.data = data
    this.children = new Map()
    // 标志是否结束
    this.isEndingChar = false
    // 字符串长度
    this.length = 0
    // 失败next数组
    this.fail = null
  }
}

class ACTree {
  constructor(data) {
    this.root = new ACNode('/')
  }

  insert(text) {
    //   根节点
    let node = this.root
    // 遍历
    for (let char of text) {
      // 如果子节点没存过，设置子节点
      if (!node.children.get(char)) {
        node.children.set(char, new ACNode(char))
      }
      //   取出下一个子节点，接着构建
      node = node.children.get(char)
    }
    // 结束标志，长度标志
    node.isEndingChar = true
    node.length = text.length
  }

  buildFailurePointer() {
    // 1. 对树进行遍历
    let root = this.root
    const queue = []
    // 放入栈中等待遍历
    queue.push(root)

    while (queue.length) {
      let node = queue.shift()
      for (const nodeChild of node.children.values()) {
        //   空节点跳过
        if (!nodeChild) {
          continue
        }
        // 根据当前节点的失败指针 求其子节点的失败指针
        if (node === root) {
          nodeChild.fail = root
        } else {
          let nodeFail = node.fail
          while (nodeFail) {
            // 当前节点的子节点 与 当前节点对应失败节点的子节点， 如果相等， 那么当前节点子节点的失败节点 是 当前节点对应失败节点的子节点
            const nodeFailChild = nodeFail.children.get(nodeChild.data)
            if (nodeFailChild) {
              nodeChild.fail = nodeFailChild
              //   找到就终端
              break
            }
            // 找不到就接着找
            nodeFail = nodeFail.fail
            if (!nodeFail) {
              // 如果失败节点不存在了 那就指向root
              nodeChild.fail = root
            }
          }
        }
        // 放入栈中等待遍历
        queue.push(nodeChild)
      }
    }
  }

  match(text) {
    let node = this.root
    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      //   寻找匹配的节点
      while (node != this.root && !node.children.get(char)) {
        node = node.fail
      }
      //   取出子节点
      node = node.children.get(char)
      //   如果子节点 不存在 那要重根节点开始找
      if (!node) {
        node = this.root
      }
      let tmp = node
      while (tmp != this.root) {
        if (tmp.isEndingChar) {
          console.log(
            `Start from ${i - node.length + 1}, length: ${node.length}`
          )
        }
        tmp = tmp.fail
      }
    }
  }

}

function match(text, patterns) {
  let automata = new ACTree()
  for (let pattern of patterns) {
    automata.insert(pattern)
  }

  automata.buildFailurePointer()
  automata.match(text)
}

let patterns = ['at', 'art', 'oars', 'soar']
let text = 'soarsoars'
match(text, patterns)

let patterns2 = ['Fxtec Pro1', '谷歌Pixel']
let text2 =
  '一家总部位于伦敦的公司Fxtex在MWC上就推出了一款名为Fxtec Pro1的手机，该机最大的亮点就是采用了侧滑式全键盘设计。DxOMark年度总榜发布 华为P20 Pro/谷歌Pixel 3争冠'
match(text2, patterns2)
