function rotateArray(array: Array<string>, rotation: number) {
  for (let i = 0; i < rotation; i++) {
    const lastElementUponRotation = array.pop()

    if (lastElementUponRotation) {
      array.unshift(lastElementUponRotation)
    }
  }
  return array.join(' ')
}

console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15))

export {}
