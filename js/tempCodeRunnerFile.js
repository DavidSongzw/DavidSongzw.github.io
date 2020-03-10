unction find(index, cWeight, items, num, weight) {
//   // cWeight==w表示装满了;
//   // index==num表示已经考察完所有的物品
//   if (cWeight == weight || index == num) {
//     // 更新最大重量
//     if (cWeight > maxW) maxW = cWeight
//     return
//   }
//   // 不装进去
//   find(index + 1, cWeight, items, num, weight)
//   // 装进去 但是判断下是不是超过了
//   if (cWeight + items[index] 