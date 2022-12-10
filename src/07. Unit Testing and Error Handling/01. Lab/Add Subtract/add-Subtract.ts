function createCalculator() {
  let value = 0

  return {
    add: function (num: number | string) {
      value += Number(num)
    },
    subtract: function (num: number | string) {
      value -= Number(num)
    },
    get: function () {
      return value
    },
  }
}

export default createCalculator
