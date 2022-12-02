// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const formElements =
    document.querySelector<HTMLDivElement>('#container')?.children

  if (!formElements) {
    return
  }

  const inputs = Array.from(formElements).slice(0, formElements.length - 1)
  const onScreenBtn = Array.from(formElements).slice(
    formElements.length - 1,
  )[0] as HTMLButtonElement
  const movieUl = document.querySelector<HTMLUListElement>('#movies>ul')
  const archiveUl = document.querySelector<HTMLUListElement>('#archive>ul')
  const archiveBtn =
    document.querySelector<HTMLButtonElement>('#archive>button')

  function clear() {
    if (archiveUl) {
      archiveUl.innerHTML = ''
    }
  }

  function archive(ev: MouseEvent) {
    const target = ev.target as HTMLButtonElement
    const div = target.parentNode as HTMLDivElement
    const li = div.parentNode as HTMLLIElement
    const input = div.children[1] as HTMLInputElement

    if (!Number(input.value) || input.value === '') {
      return
    }

    const span = document.createElement('span')
    const name = li.children[0] as HTMLSpanElement
    span.textContent = name.textContent

    const strong = document.createElement('strong')

    const price = div.children[0].textContent
    const totalPrice = Number(price) * Number(input.value)
    strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', (ev: MouseEvent) => {
      const target = ev.target as HTMLButtonElement
      const parentNode = target.parentNode as HTMLLIElement
      parentNode.remove()
    })

    const resultLi = document.createElement('li')
    resultLi.appendChild(span)
    resultLi.appendChild(strong)
    resultLi.appendChild(deleteBtn)

    archiveUl?.appendChild(resultLi)
    li.remove()
  }

  function onClick(ev: MouseEvent) {
    ev.preventDefault()

    const name = (inputs[0] as HTMLInputElement).value
    const hall = (inputs[1] as HTMLInputElement).value
    const ticketPrice = (inputs[2] as HTMLInputElement).value

    if (!name || !hall || !ticketPrice) {
      return
    }

    const nameClear = inputs[0] as HTMLInputElement
    const hallClear = inputs[1] as HTMLInputElement
    const ticketPriceClear = inputs[2] as HTMLInputElement

    nameClear.value = ''
    hallClear.value = ''
    ticketPriceClear.value = ''

    const li = document.createElement('li')

    const span = document.createElement('span')
    span.textContent = name
    li.appendChild(span)

    const strong = document.createElement('strong')
    strong.textContent = `Hall: ${hall}`
    li.appendChild(strong)

    const div = document.createElement('div')

    const innerStrong = document.createElement('strong')
    innerStrong.textContent = Number(ticketPrice).toFixed(2)

    const input = document.createElement('input')
    input.setAttribute('placeholder', 'Tickets Sold')

    const archiveButton = document.createElement('button')
    archiveButton.textContent = 'Archive'
    archiveButton.addEventListener('click', archive)

    div.appendChild(innerStrong)
    div.appendChild(input)
    div.appendChild(archiveButton)
    li.appendChild(div)

    movieUl?.appendChild(li)
  }

  archiveBtn?.addEventListener('click', clear)
  onScreenBtn.addEventListener('click', onClick)
}

export {}
