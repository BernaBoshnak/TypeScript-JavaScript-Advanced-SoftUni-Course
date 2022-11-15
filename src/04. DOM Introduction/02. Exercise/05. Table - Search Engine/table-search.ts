const btn = document.getElementById('searchBtn') as HTMLButtonElement
btn.addEventListener('click', onClick)
const rows = Array.from(
  document.querySelectorAll('tbody tr') as NodeListOf<HTMLElement>,
)

function onClick() {
  const input = (
    document.querySelector('#searchField') as HTMLInputElement
  ).value.toLowerCase()

  for (const row of rows) {
    if (row.textContent?.toLowerCase().includes(input)) {
      row.setAttribute('class', 'select')
    } else {
      row.removeAttribute('class')
    }
  }
}

export {}
