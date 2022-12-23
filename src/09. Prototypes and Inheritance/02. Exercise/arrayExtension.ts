// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Array<T> {
  last: () => T[]
  skip: (n: number) => T[]
  take: (n: number) => T[]
  sum: () => T
  average: () => T
}

;(function solve() {
  Array.prototype.last = function () {
    return this[this.length - 1]
  }

  Array.prototype.skip = function (n) {
    const result = []
    for (let i = n; i < this.length; i++) {
      result.push(this[i])
    }

    return result
  }

  Array.prototype.take = function (n) {
    const result = []
    for (let i = 0; i < n; i++) {
      result.push(this[i])
    }
    return result
  }

  Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
      sum += this[i]
    }

    return sum
  }

  Array.prototype.average = function () {
    return this.sum() / this.length
  }
})()
