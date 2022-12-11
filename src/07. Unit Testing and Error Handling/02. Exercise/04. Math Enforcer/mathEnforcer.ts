const mathEnforcer = {
  addFive: function (num: number) {
    if (typeof num !== 'number') {
      return undefined
    }

    return num + 5
  },
  subtractTen: function (num: number) {
    if (typeof num !== 'number') {
      return undefined
    }

    return num - 10
  },
  sum: function (firstNum: number, secondNum: number) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
      return undefined
    }

    return firstNum + secondNum
  },
}

export default mathEnforcer
