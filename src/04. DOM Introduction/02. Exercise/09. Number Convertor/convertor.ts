type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const input = document.getElementById('input') as Nullable<HTMLInputElement>
  const selectMenu = document.getElementById(
    'selectMenuTo',
  ) as Nullable<HTMLSelectElement>
  const btn = document.getElementById('btn') as Nullable<HTMLButtonElement>
  const result = document.getElementById('result') as Nullable<HTMLInputElement>

  if (!result) {
    return
  }

  const binaryOption = document.createElement('option')
  binaryOption.textContent = 'Binary'
  binaryOption.value = 'binary'

  const hexadecimalOption = document.createElement('option')
  hexadecimalOption.textContent = 'Hexadecimal'
  hexadecimalOption.value = 'hexadecimal'

  selectMenu?.appendChild(binaryOption)
  selectMenu?.appendChild(hexadecimalOption)

  btn?.addEventListener('click', () => {
    if (selectMenu?.value == 'binary') {
      result.value = Number(input?.value).toString(2)
    } else {
      result.value = Number(input?.value).toString(16).toUpperCase()
    }
  })
}

export {}
