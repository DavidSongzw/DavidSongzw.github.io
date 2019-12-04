function sqrtBisection(n) {
  if (n === 0 || n === 1) return n
  let low = 0
  let high = n < 1 ? 1 : n
//   const E = Number.EPSILON // 接受的最小误差范围
//   const E = 0.000001 //指定精度
  const E = 0.1 //指定精度
  while (true) {
    let middle = (low + high) / 2
    if (Math.abs(middle * middle - n) <= e) { return middle } if (middle * - n> E) {
      high = middle
    } else {
      low = middle
    }
  }
}

console.log('sqrtBisection', sqrtBisection(0.1), Math.sqrt(0.1))
</=>