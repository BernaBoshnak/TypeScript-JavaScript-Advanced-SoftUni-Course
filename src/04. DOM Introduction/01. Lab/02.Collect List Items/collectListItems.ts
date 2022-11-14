const btn = document.getElementById('btn') as HTMLButtonElement

if (btn) {
  btn.addEventListener('click', () => {
    const liElements = [
      ...document.getElementsByTagName('li'),
    ] as HTMLLIElement[]
    const elementText = liElements.map((el) => el.textContent)
    const textArea = document.getElementById('result') as HTMLTextAreaElement
    textArea.value = elementText.join('\n')
  })
}

export {}
