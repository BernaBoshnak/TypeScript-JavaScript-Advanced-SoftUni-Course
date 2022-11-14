const btn = document.getElementById('btn') as HTMLButtonElement

if (btn) {
  btn.addEventListener('click', () => {
    const replacer = 'Document Object Model'
    const reference = document.getElementById('title') as HTMLHeadingElement
    const content = reference.textContent
    if (content) {
      const [, replaceWord] = content.split(', ')
      const edited = content.replace(replaceWord, replacer)
      reference.textContent = edited
    }
  })
}

export {}
