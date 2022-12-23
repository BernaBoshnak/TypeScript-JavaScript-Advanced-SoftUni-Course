// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface String {
  ensureStart: (word: string) => string
  ensureEnd: (word: string) => string
  isEmpty: () => boolean
  truncate: (n: number) => string
  format: (word: string, ...params: string[]) => string
}

;(function stringExtension() {
  String.prototype.ensureStart = function (word) {
    if (!this.toString().startsWith(word)) {
      return word + this.toString()
    }

    return this.toString()
  }

  String.prototype.ensureEnd = function (word) {
    if (!this.toString().endsWith(word)) {
      return this.toString() + word
    }
    return this.toString()
  }

  String.prototype.isEmpty = function () {
    return this.toString().localeCompare('') === 0
  }

  String.prototype.truncate = function (n) {
    if (n <= 3) {
      return '.'.repeat(n)
    }

    if (this.toString().length <= n) {
      return this.toString()
    } else {
      const lastIndex = this.toString()
        .substring(0, n - 2)
        .lastIndexOf(' ')

      if (lastIndex !== -1) {
        return this.toString().substring(0, lastIndex) + '...'
      } else {
        return this.toString().substring(0, n - 3) + '...'
      }
    }
  }

  String.prototype.format = function (str, ...params) {
    for (let i = 0; i < params.length; i++) {
      let index = str.indexOf('{' + i + '}')

      while (index !== -1) {
        str = str.replace('{' + i + '}', params[i])
        index = str.indexOf('{' + i + '}')
      }
    }

    return str
  }
})()

let str = 'my string'
str = str.ensureStart('my')
str = str.ensureStart('hello ')
str = str.truncate(16)
str = str.truncate(14)
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)

console.log(str.format('The {0} {1} fox', 'quick', 'brown'))
console.log(str.format('jumps {0} {1}', 'dog'))
