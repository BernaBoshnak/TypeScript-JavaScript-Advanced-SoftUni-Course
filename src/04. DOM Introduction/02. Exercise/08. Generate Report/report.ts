type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateReport() {
  type ReportName = string
  type TextContent = string
  type Reports = Record<ReportName, TextContent>

  const checkbox =
    document.querySelectorAll<HTMLInputElement>('thead>tr>th>input')
  const rows = document.querySelectorAll<HTMLTableRowElement>('tbody>tr')
  const textArea = document.getElementById(
    'output',
  ) as Nullable<HTMLTextAreaElement>

  if (!textArea) {
    return
  }

  const output: Reports[] = []

  for (let i = 0; i < rows.length; i++) {
    const row = Array.from(
      rows[i].getElementsByTagName(
        'td',
      ) as HTMLCollectionOf<HTMLTableCellElement>,
    )
    const values = row.map((el) => el.textContent)

    const reports: Reports = {}

    for (let j = 0; j < checkbox.length; j++) {
      if (checkbox[j].checked) {
        reports[checkbox[j].name] = values[j] || ''
      }
    }

    output.push(reports)
  }

  textArea.value = JSON.stringify(output, null, 2)
}

export {}
