function sqrtBisection(n) {
  if (n === 0 || n === 1) return n
  let low = 0
  let high = n < 1 ? 1 : n
//   const E = Number.EPSILON // 接受的最小误差范围
  const E = 0.000001 //指定精度
  while (true) {
    let middle = (low + high) / 2
    if (Math.abs(middle * middle - n) <= e) { return math.floor(middle) } console.log(middle) if (middle * middle - n> E) {
      high = middle
    } else {
      low = middle
    }
  }
}
// function sqrtBisection(n) {
//     if (isNaN(n)) return NaN;
//     if (n === 0 || n === 1) return n;
//     var low = 0,
//         high = n,
//         pivot = (low + high) / 2,
//         lastPivot = pivot;
//     // do while 保证执行一次
//     do {
//         if (Math.pow(pivot, 2) > n) {
//             high = pivot;
//         } else if (Math.pow(pivot, 2) < n) {
//             low = pivot;
//         } else {
//             return pivot;
//         }
//         lastPivot = pivot;
//         pivot = (low + high) / 2;
//     }
//     // 2018-04-25 22:08 更新
//     // 使用Number.EPSILON表示能够接受的最小误差范围
//     while (Math.abs(pivot - lastPivot) >= Number.EPSILON)

//     return pivot;
// }
console.log('sqrtBisection', Math.sqrt(8))
console.log('sqrtBisection', sqrtBisection(8))
</=>