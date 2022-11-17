// eslint-disable-next-line @typescript-eslint/no-unused-vars
function toggle() {
  const divExtra = document.querySelector<HTMLDivElement>('#extra')
  const button = document.querySelector<HTMLSpanElement>('.button')

  if (divExtra && button) {
    divExtra.style.display =
      divExtra.style.display !== 'block' ? 'block' : 'none'
    button.textContent = button.textContent === 'More' ? 'Less' : 'More'
  }
}

export {}
