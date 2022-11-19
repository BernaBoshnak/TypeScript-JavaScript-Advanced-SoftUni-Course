// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const textareas = document.querySelectorAll<HTMLTextAreaElement>('textarea')
  const buttons = document.querySelectorAll<HTMLButtonElement>('button')
  const body = document.querySelector<HTMLTableElement>('tbody')

  if (!body) {
    return
  }

  buttons[0].addEventListener('click', () => {
    const arr = JSON.parse(textareas[0].value)

    for (const el of arr) {
      const row = document.createElement('tr')

      const cellImage = document.createElement('td')
      const image = document.createElement('img')
      image.setAttribute('src', el.img)
      cellImage.appendChild(image)

      const cellName = document.createElement('td')
      const pName = document.createElement('p')
      pName.textContent = el.name
      cellName.appendChild(pName)

      const cellPrice = document.createElement('td')
      const pPrice = document.createElement('p')
      pPrice.textContent = el.price
      cellPrice.appendChild(pPrice)

      const cellDecor = document.createElement('td')
      const pDecor = document.createElement('p')
      pDecor.textContent = el.decFactor
      cellDecor.appendChild(pDecor)

      const cellCheck = document.createElement('td')
      const input = document.createElement('input')
      input.setAttribute('type', 'checkbox')
      cellCheck.appendChild(input)

      row.appendChild(cellImage)
      row.appendChild(cellName)
      row.appendChild(cellPrice)
      row.appendChild(cellDecor)
      row.appendChild(cellCheck)

      body.appendChild(row)
    }
  })

  buttons[1].addEventListener('click', () => {
    type FurnitureData = {
      bought: string[]
      totalPrice: number
      decFactorSum: number
    }

    const checkedElements = Array.from(
      body.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked'),
    )
    const furniture = checkedElements.map(
      (input) => input.parentNode?.parentNode,
    )

    const furnitureData: FurnitureData = {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0,
    }

    if (furniture) {
      for (const row of furniture) {
        const cells = row?.children
        if (cells) {
          const name = cells[1].children[0].textContent
          if (name) {
            furnitureData.bought.push(name)

            const price = Number(cells[2].children[0].textContent)
            furnitureData.totalPrice += price

            const decFactor = Number(cells[3].children[0].textContent)
            furnitureData.decFactorSum += decFactor
          }
        }
      }

      textareas[1].value = `Bought furniture: ${furnitureData.bought.join(
        ', ',
      )}\nTotal price: ${furnitureData.totalPrice.toFixed(
        2,
      )}\nAverage decoration factor: ${
        furnitureData.decFactorSum / furniture.length
      }`
    }
  })
}

export {}
