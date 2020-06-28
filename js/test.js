function permute(list = []) {
  const result = []
  if (list.length < 2) {
    return list
  }
  const preRes = permute(list.slice(0, list.length -  1))
  const str = list[list.length - 1]
  for (let i = 0; i < preRes.length; i++) {
    const ele = preRes[i];
    for (let j = 0; j 