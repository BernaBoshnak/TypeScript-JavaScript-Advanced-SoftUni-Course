function increasingSubsequence(input: Array<number>) {
  return input.reduce(function (result: number[], curr: number) {
    if (curr >= result[result.length - 1] || result.length === 0) {
      result.push(curr)
    }
    return result
  }, [])
}

console.log(increasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]))

export {}
