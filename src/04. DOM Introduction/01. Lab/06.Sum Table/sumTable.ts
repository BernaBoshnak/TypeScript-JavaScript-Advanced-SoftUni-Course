const btn = document.getElementById('btn') as HTMLButtonElement
const rows = Array.from(
  document.querySelectorAll<HTMLElement>('table tr'),
).slice(1, -1)
const tableData = document.getElementById('sum') as HTMLTableElement

btn.addEventListener('click', () => {
  const result = rows.reduce(
    (sum, row) => (sum += Number(row.lastElementChild?.textContent)),
    0,
  )

  tableData.textContent = result.toString()
})

export {}
