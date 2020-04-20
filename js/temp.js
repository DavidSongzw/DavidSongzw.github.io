class Edge {
  constructor (startId, endId, weight) {
    this.startId = startId // 起始顶点 编号
    this.endId = endId // 结束顶点 编号
    this.weight = weight // 权重
  }
}

class Vertex {
  constructor (id, dist) {
    this.id = id // 顶点id
    this.dist = dist // 起始点到当前顶点距离
  }
}

class Graph {
  constructor () {
    this.adj = new Map()
  }
  /**
   * 添加边
   * @param {*} start 开始顶点
   * @param {*} end 结束顶点
   * @param {*} weight 权重
   */
  addEdge (start, end, weight) {
    if (this.adj.has(start)) {
      this.adj.set(start, [
        ...this.adj.get(start),
        new Edge(start, end, weight)
      ])
    } else {
      this.adj.set(start, [new Edge(start, end, weight)])
    }
  }
}
