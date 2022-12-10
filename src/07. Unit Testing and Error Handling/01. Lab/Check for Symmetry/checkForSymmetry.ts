function isSymmetric(arr: Array<number>) {
  if (!Array.isArray(arr)) {
    return false
  }
  const reversed = arr.slice(0).reverse()
  const equal = JSON.stringify(arr) == JSON.stringify(reversed)
  return equal
}

export default isSymmetric
