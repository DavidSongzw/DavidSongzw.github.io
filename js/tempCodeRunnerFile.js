atch(text) {
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
          tmp = tmp.fail
      }
    }
  }