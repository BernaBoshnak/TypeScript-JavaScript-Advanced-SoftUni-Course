type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const input = document.querySelector<HTMLInputElement>('#searchField')

  if (!input) {
    return
  }

  const rows = Array.from(
    document.querySelectorAll<HTMLTableRowElement>('tbody tr'),
  )
  const btn = document.getElementById(
    'searchBtn',
  ) as Nullable<HTMLButtonElement>
  btn?.addEventListener('click', onClick)

  function onClick() {
    for (const row of rows) {
      if (
        input &&
        row.textContent?.toLowerCase().includes(input.value.toLowerCase())
      ) {
        row.setAttribute('class', 'select')
      } else {
        row.removeAttribute('class')
      }
    }
  }
}

export {}
