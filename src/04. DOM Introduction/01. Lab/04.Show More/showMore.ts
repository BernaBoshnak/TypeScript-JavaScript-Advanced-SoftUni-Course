const textInput = document.getElementById('text') as HTMLSpanElement
const moreInput = document.getElementById('more') as HTMLAnchorElement

moreInput.addEventListener('click', () => {
  textInput.style.display = 'inline'
  moreInput.style.display = 'none'
})

export {}
