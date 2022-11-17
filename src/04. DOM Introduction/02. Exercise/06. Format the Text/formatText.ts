// eslint-disable-next-line @typescript-eslint/no-unused-vars
function formatText() {
  const textArea = document.querySelector<HTMLTextAreaElement>('#input')

  if (!textArea) {
    return
  }

  const output = document.querySelector<HTMLDivElement>('#output')

  if (!output) {
    return
  }

  const input = textArea.value.split('.').filter((p) => p.length > 0)

  for (let i = 0; i < input.length; i += 3) {
    const arr: string[] = []

    for (let j = 0; j < 3; j++) {
      if (input[i + j]) {
        arr.push(input[i + j])
      }
    }

    const paragraph = arr.join('. ') + '.'
    output.innerHTML += `<p>${paragraph}</p>`
  }
}

export {}
