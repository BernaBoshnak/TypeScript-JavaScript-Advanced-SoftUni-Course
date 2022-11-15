const btn = document.getElementById('btn') as HTMLButtonElement
const input = document.getElementById('input') as HTMLInputElement
const selectMenu = document.getElementById('selectMenuTo') as HTMLSelectElement
const result = document.getElementById('result') as HTMLInputElement

const binaryOption = document.createElement('option') as HTMLOptionElement
binaryOption.textContent = 'Binary'
binaryOption.value = 'binary'

const hexadecimalOption = document.createElement('option') as HTMLOptionElement
hexadecimalOption.textContent = 'Hexadecimal'
hexadecimalOption.value = 'hexadecimal'

selectMenu.appendChild(binaryOption)
selectMenu.appendChild(hexadecimalOption)

btn.addEventListener('click', () => {
  if (selectMenu.value == 'binary') {
    result.value = Number(input.value).toString(2)
  } else {
    result.value = Number(input.value).toString(16).toUpperCase()
  }
})

export {}
