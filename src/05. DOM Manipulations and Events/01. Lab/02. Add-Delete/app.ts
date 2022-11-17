type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addItem() {
  const input = document.getElementById(
    'newItemText',
  ) as Nullable<HTMLInputElement>

  if (!input) {
    return
  }

  const liElement = createElementWithContent('li', input.value)
  const items = document.getElementById('items') as Nullable<HTMLUListElement>
  const deleteBtn = createElementWithContent('a', '[Delete]')
  deleteBtn.href = '#'

  deleteBtn.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement
    target.parentElement?.remove()
  })

  liElement.appendChild(deleteBtn)
  items?.appendChild(liElement)
  input.value = ''

  function createElementWithContent<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content: string,
  ) {
    const element = document.createElement(type)
    element.textContent = content

    return element
  }
}

export {}
