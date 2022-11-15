const btn = document.querySelector('.btn') as HTMLButtonElement
btn.addEventListener('click', report)

function report() {
  type ReportName = string
  type TextContent = string
  type Reports = Record<ReportName, TextContent>

  const checkbox = document.querySelectorAll(
    'thead>tr>th>input',
  ) as NodeListOf<HTMLInputElement>
  const rows = document.querySelectorAll('tbody>tr') as NodeListOf<HTMLElement>
  const generate = document.getElementById('output') as HTMLTextAreaElement

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

  generate.value = JSON.stringify(output, null, 2)
}

export {}
