// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addItem() {
  const items = document.getElementById('items') as HTMLElement
  const text = document.getElementById('newItemText') as HTMLInputElement

  const liElement = document.createElement('li')
  liElement.textContent = text.value

  items.appendChild(liElement)
  text.value = ''
}

export {}
