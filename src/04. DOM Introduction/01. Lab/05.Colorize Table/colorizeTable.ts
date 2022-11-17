// eslint-disable-next-line @typescript-eslint/no-unused-vars
function colorize() {
  const allTableElements = Array.from(
    document.querySelectorAll<HTMLTableRowElement>('table tr:nth-child(even)'),
  )

  allTableElements.forEach((el) => (el.style.backgroundColor = 'teal'))
}

export {}
