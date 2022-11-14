const btn = document.getElementById('btn') as HTMLButtonElement
const allTableElements = Array.from(
  document.querySelectorAll<HTMLElement>('table tr:nth-child(even)'),
)

btn.addEventListener('click', () => {
  allTableElements.forEach((el) => (el.style.backgroundColor = 'teal'))
})

export {}
