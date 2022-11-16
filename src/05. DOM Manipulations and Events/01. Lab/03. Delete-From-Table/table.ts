// eslint-disable-next-line @typescript-eslint/no-unused-vars
function deleteByEmail() {
  const email = document.querySelector<HTMLInputElement>('.email')
  const result = document.getElementById('result') as HTMLDivElement

  let deleted = false
  const rows = Array.from(
    document.querySelectorAll<HTMLTableRowElement>('tbody>tr'),
  )

  for (const row of rows) {
    const [, emailRow] = row.children
    if (emailRow?.textContent === email?.value) {
      const deleteRow = row.parentNode?.removeChild(row)
      if (deleteRow) {
        deleted = true
      }
    }
  }

  result.textContent = deleted ? 'Deleted.' : 'Not found.'
}

export {}
