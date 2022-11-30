class Hex {
  private value: number

  constructor(value: number) {
    this.value = value
  }

  valueOf() {
    return this.value
  }

  toString() {
    return '0x' + this.value.toString(16).toUpperCase()
  }

  plus(number: number) {
    return new Hex(this.value + number)
  }

  minus(number: number) {
    return new Hex(this.value - number)
  }

  parse(string: string) {
    return parseInt(string, 16)
  }
}

const FF = new Hex(255)
console.log(FF.toString())
FF.valueOf() + 1 == 256
const a = new Hex(10)
const b = new Hex(5)
console.log(a.plus(b.valueOf()).toString())
console.log(a.plus(b.valueOf()).toString() === '0xF')
console.log(a.parse('0xF'))

export {}
