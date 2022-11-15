const btn = document.getElementById('btn') as HTMLButtonElement

btn.addEventListener('click', () => {
  const text = (document.getElementById('content') as HTMLParagraphElement)
    .textContent
  const regex = /\((.+?)\)/g
  const result: string[] = []

  if (text) {
    let matches = regex.exec(text)

    while (matches !== null) {
      result.push(matches[1])
      matches = regex.exec(text)
    }
  }

  console.log(result.join('; '))
})

export {}
