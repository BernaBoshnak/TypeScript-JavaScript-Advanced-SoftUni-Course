function sortedList() {
  const list: number[] = []

  return {
    add(element: number) {
      list.push(element)
      list.sort((a, b) => a - b)
    },

    remove(index: number) {
      if (index < list.length && index >= 0) {
        list.splice(index, 1)
      }
    },

    get(index: number) {
      if (index < list.length && index >= 0) {
        return list[index]
      }
    },

    get size() {
      return list.length
    },
  }
}

const list = sortedList()

list.add(5)
list.add(6)
list.add(7)
console.log(list.get(1))
list.remove(1)
console.log(list.get(1))

export {}
