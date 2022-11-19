type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const upperCardSpan =
    document.querySelectorAll<HTMLSpanElement>('#result>span')[0]
  const bottomCardSpan =
    document.querySelectorAll<HTMLSpanElement>('#result>span')[2]
  const history = document.getElementById('history') as Nullable<HTMLDivElement>
  const imgArr = Array.from(document.querySelectorAll<HTMLImageElement>('img'))

  let upperCard = 0
  let upperCardNode: HTMLImageElement
  let bottomCard = 0
  let bottomCardNode: HTMLImageElement

  imgArr.forEach((card) => {
    card.addEventListener('click', cards)
  })

  function cards(ev: MouseEvent) {
    if (!history) {
      return
    }

    const target = ev.target as HTMLImageElement
    target.setAttribute('src', 'images/whiteCard.jpg')

    const parentId = target.parentElement?.getAttribute('id')

    if (parentId === 'player1Div') {
      const name = target.getAttribute('name')
      upperCard = Number(name)
      upperCardNode = target
      upperCardSpan.textContent = name
    } else if (parentId === 'player2Div') {
      const name = target.getAttribute('name')
      bottomCard = Number(name)
      bottomCardNode = target
      bottomCardSpan.textContent = name
    }

    if (upperCard > bottomCard && upperCard !== 0 && bottomCard !== 0) {
      upperCardNode?.setAttribute('style', 'border: 2px solid green')
      bottomCardNode?.setAttribute('style', 'border: 2px solid red')
      history.textContent += `[${upperCard} vs ${bottomCard}] `

      upperCardSpan.innerHTML = ''
      bottomCardSpan.innerHTML = ''

      upperCard = 0
      bottomCard = 0
    } else if (upperCard < bottomCard && upperCard !== 0 && bottomCard !== 0) {
      upperCardNode?.setAttribute('style', 'border: 2px solid red')
      bottomCardNode?.setAttribute('style', 'border: 2px solid green')
      history.textContent += `[${upperCard} vs ${bottomCard}] `

      upperCardSpan.innerHTML = ''
      bottomCardSpan.innerHTML = ''

      upperCard = 0
      bottomCard = 0
    } else if (upperCard === bottomCard) {
      history.textContent += `[${upperCard} vs ${bottomCard}] `

      upperCardSpan.innerHTML = ''
      bottomCardSpan.innerHTML = ''

      upperCard = 0
      bottomCard = 0
    }
  }
}

export {}
