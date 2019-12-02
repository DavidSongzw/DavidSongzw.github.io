
function getK(list, k, m, n) {
  const p = partition(list, m, n)
  if (p + 1 === k) {
    return list[p]
  } else if (p + 1 > k) {
    return getK(list, k, m, p - 1)
  } else {
    return getK(list, k, p + 1, n)
  }
}

function partition(list, m, n) {
  let i = m
  let pivot = list[n]
  for (let j = m; j < n; j++) {
    if (list[j] >= pivot) {
      if (j != i) {
        ;[list[j],  list[i]] = [list[i],  list[j]]
      }
      i++
    }
  }
  ;[list[n],  list[i]] = [list[i],  list[n]]
  return i
}
const list = [1, 2, 3, 3, 4, 5, 6]
console.log('k', getK(list, 7, 0, 6), list)

