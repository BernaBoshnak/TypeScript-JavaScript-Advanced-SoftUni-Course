type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function extract() {
  const text = document.getElementById(
    'content',
  ) as Nullable<HTMLParagraphElement>
  const textContent = text?.textContent
  const regex = /\((.+?)\)/g
  const result: string[] = []

  if (textContent) {
    let matches = regex.exec(textContent)

    while (matches) {
      result.push(matches[1])
      matches = regex.exec(textContent)
    }
  }

  console.log(result.join('; '))
}

export {}
