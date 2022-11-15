const btn = document.getElementById('formatBtn') as HTMLButtonElement
btn.addEventListener('click', formatText)

function formatText() {
  const textArea = (document.querySelector('#input') as HTMLTextAreaElement)
    .value
  const output = document.querySelector('#output') as HTMLDivElement

  const input = textArea.split('.').filter((p) => p.length > 0)

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
