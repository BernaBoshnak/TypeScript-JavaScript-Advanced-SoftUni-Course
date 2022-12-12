// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solution() {
  const [gifts, send, discarded] =
    document.querySelectorAll<HTMLUListElement>('section ul')
  const input = document.querySelector<HTMLInputElement>('input')
  const btn = document.querySelector<HTMLButtonElement>('button')
  btn?.addEventListener('click', addGift)

  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content: string,
    className: string,
  ): HTMLElementTagNameMap[K] {
    const result = document.createElement(type)

    if (content) {
      result.textContent = content
    }

    if (className) {
      result.className = className
    }

    return result
  }

  function addGift() {
    if (!input) {
      return
    }

    const name = input.value
    input.value = ''

    const element = createElement('li', name, 'gift')
    const sendBtn = createElement('button', 'Send', 'sendButton')
    const discardBtn = createElement('button', 'Discard', 'discardButton')
    element.appendChild(sendBtn)
    element.appendChild(discardBtn)

    sendBtn.addEventListener('click', () => dispatchGift(send, name, element))
    discardBtn.addEventListener('click', () =>
      dispatchGift(discarded, name, element),
    )

    gifts.appendChild(element)
    sortGifts()
  }

  function dispatchGift(
    target: HTMLUListElement,
    name: string,
    gift: HTMLLIElement,
  ) {
    gift.remove()
    const element = createElement('li', name, 'gift')
    target.appendChild(element)
  }

  function sortGifts() {
    Array.from(gifts.children)
      .sort((a, b) =>
        (a?.textContent ?? '').localeCompare(b?.textContent ?? ''),
      )
      .forEach((g) => gifts.appendChild(g))
  }
}

export {}
