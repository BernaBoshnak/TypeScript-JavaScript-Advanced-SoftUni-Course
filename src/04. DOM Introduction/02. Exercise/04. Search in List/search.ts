const btn = document.getElementById('btn') as HTMLButtonElement
btn.addEventListener('click', search)

function search() {
  const listItems = Array.from(
    document.querySelectorAll('#towns li') as NodeListOf<HTMLElement>,
  )
  const input = (document.getElementById('searchText') as HTMLInputElement)
    .value
  const result = document.getElementById('result') as HTMLDivElement

  let sum = 0
  for (const li of listItems) {
    if (
      li.textContent?.toLowerCase().includes(input.toLowerCase()) &&
      input !== ''
    ) {
      li.style.fontWeight = 'bold'
      li.style.textDecoration = 'underline'
      sum++
    } else {
      li.style.fontWeight = ''
      li.style.textDecoration = ''
    }
  }
  result.textContent = `${sum} matches found`
}

export {}
