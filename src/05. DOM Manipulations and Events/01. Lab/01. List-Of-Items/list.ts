type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addItem() {
  const items = document.getElementById('items') as Nullable<HTMLElement>
  const input = document.getElementById(
    'newItemText',
  ) as Nullable<HTMLInputElement>

  if (!input) {
    return
  }

  const liElement = document.createElement('li')
  liElement.textContent = input.value

  items?.appendChild(liElement)
  input.value = ''
}

export {}
