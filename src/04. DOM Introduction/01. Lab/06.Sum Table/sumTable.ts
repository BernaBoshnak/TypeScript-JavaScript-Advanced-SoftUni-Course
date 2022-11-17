type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sumTable() {
  const rows = Array.from(
    document.querySelectorAll<HTMLTableRowElement>('table tr'),
  ).slice(1, -1)
  const totalSum = document.getElementById('sum') as Nullable<HTMLTableElement>

  const result = rows.reduce(
    (sum, row) => (sum += Number(row.lastElementChild?.textContent)),
    0,
  )

  if (totalSum) {
    totalSum.textContent = result.toString()
  }
}

export {}
