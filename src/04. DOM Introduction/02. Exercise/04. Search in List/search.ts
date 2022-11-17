type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function search() {
  const listItems = Array.from(
    document.querySelectorAll<HTMLLIElement>('#towns li'),
  )
  const input = document.getElementById(
    'searchText',
  ) as Nullable<HTMLInputElement>

  if (!input) {
    return
  }
  const result = document.getElementById('result') as Nullable<HTMLDivElement>

  let sum = 0
  for (const li of listItems) {
    if (
      li.textContent?.toLowerCase().includes(input.value.toLowerCase()) &&
      input.value !== ''
    ) {
      li.style.fontWeight = 'bold'
      li.style.textDecoration = 'underline'
      sum++
    } else {
      li.style.fontWeight = ''
      li.style.textDecoration = ''
    }
  }

  if (result) {
    result.textContent = `${sum} matches found`
  }
}

export {}
