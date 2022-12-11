function lookupChar(input: string, index: number) {
  if (typeof input !== 'string' || !Number.isInteger(index)) {
    return undefined
  }

  if (input.length <= index || index < 0) {
    return 'Incorrect index'
  }

  return input.charAt(index)
}

export default lookupChar
