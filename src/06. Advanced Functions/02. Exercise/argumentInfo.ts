function argumentInfo(...arg: [string, number, () => void]) {
  const argTypes: Record<string, number> = {}

  for (const argument of arg) {
    console.log(`${typeof argument}: ${argument}`)

    if (!argTypes[typeof argument]) {
      argTypes[typeof argument] = 0
    }

    argTypes[typeof argument]++
  }

  Object.keys(argTypes)
    .sort((a, b) => argTypes[b] - argTypes[a])
    .forEach((type) => console.log(`${type} = ${argTypes[type]}`))
}

argumentInfo('cat', 42, function () {
  console.log('Hello world!')
})

export {}
