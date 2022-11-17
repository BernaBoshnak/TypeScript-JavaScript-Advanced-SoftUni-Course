type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function extractText() {
  const liElements = Array.from(document.querySelectorAll<HTMLLIElement>('li'))
  const elementText = liElements.map((el) => el.textContent)
  const textArea = document.getElementById(
    'result',
  ) as Nullable<HTMLTextAreaElement>

  if (!textArea) {
    return
  }

  textArea.value = elementText.join('\n')
}

export {}
