class StringBuilder {
  private _stringArray: string[]

  constructor(word: string) {
    if (word !== undefined) {
      StringBuilder._vrfyParam(word)
      this._stringArray = Array.from(word)
    } else {
      this._stringArray = []
    }
  }

  append(word: string) {
    StringBuilder._vrfyParam(word)
    for (let i = 0; i < word.length; i++) {
      this._stringArray.push(word[i])
    }
  }

  prepend(word: string) {
    StringBuilder._vrfyParam(word)
    for (let i = word.length - 1; i >= 0; i--) {
      this._stringArray.unshift(word[i])
    }
  }

  insertAt(string: string, startIndex: number) {
    StringBuilder._vrfyParam(string)
    this._stringArray.splice(startIndex, 0, ...string)
  }

  remove(startIndex: number, length: number) {
    this._stringArray.splice(startIndex, length)
  }

  static _vrfyParam(param: string) {
    if (typeof param !== 'string')
      throw new TypeError('Argument must be a string')
  }

  toString() {
    return this._stringArray.join('')
  }
}

const str = new StringBuilder('hello')
str.append(', there')
str.prepend('User, ')
str.insertAt('woop', 5)
console.log(str.toString())
str.remove(6, 3)
console.log(str.toString())

export default StringBuilder
