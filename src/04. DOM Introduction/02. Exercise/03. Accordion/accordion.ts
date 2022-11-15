const btn = document.getElementById('btn') as HTMLSpanElement
btn.addEventListener('click', toggle)

function toggle() {
  const button = document.querySelector('#btn') as HTMLSpanElement
  const divExtra = document.querySelector('#extra') as HTMLDivElement

  divExtra.style.display = divExtra.style.display !== 'block' ? 'block' : 'none'
  button.textContent = button.textContent === 'More' ? 'Less' : 'More'
}

export {}
