type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function editElement() {
  const reference = document.getElementById(
    'e1',
  ) as Nullable<HTMLHeadingElement>
  const content = reference?.textContent
  const replacer = 'Document Object Model'

  if (content) {
    const [, replaceWord] = content.split(', ')
    const edited = content.replace(replaceWord, replacer)
    reference.textContent = edited
  }
}

export {}
