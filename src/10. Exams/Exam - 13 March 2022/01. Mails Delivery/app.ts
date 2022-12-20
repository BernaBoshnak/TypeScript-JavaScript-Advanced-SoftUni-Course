type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const recipientName = document.getElementById(
    'recipientName',
  ) as Nullable<HTMLInputElement>
  const title = document.getElementById('title') as Nullable<HTMLInputElement>
  const message = document.getElementById(
    'message',
  ) as Nullable<HTMLTextAreaElement>
  const sentlist = document.querySelector<HTMLUListElement>('.sent-list')
  const deleteList = document.querySelector<HTMLUListElement>('.delete-list')

  const list = document.getElementById('list') as Nullable<HTMLUListElement>

  const addToListBtn = document.getElementById(
    'add',
  ) as Nullable<HTMLButtonElement>
  const resetBtn = document.getElementById(
    'reset',
  ) as Nullable<HTMLButtonElement>

  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
  ): HTMLElementTagNameMap[K]
  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content: string,
  ): HTMLElementTagNameMap[K]

  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content?: string,
  ): HTMLElementTagNameMap[K] {
    const result = document.createElement(type)

    if (content) {
      result.textContent = content
    }

    return result
  }

  document
    .querySelector<HTMLFormElement>('#form')
    ?.addEventListener('submit', function (ev) {
      ev.preventDefault()
    })

  function deletedMails(ev: MouseEvent) {
    const currentTarget = ev.currentTarget as HTMLButtonElement
    const parentBtnElement = currentTarget.parentElement as HTMLDivElement
    const liElement = parentBtnElement.parentElement

    if (!liElement) {
      return
    }

    deleteList?.appendChild(liElement)
    parentBtnElement.remove()
  }

  function sendMails(ev: MouseEvent) {
    const currentTarget = ev.currentTarget as HTMLButtonElement
    const parentBtnElement = currentTarget.parentElement as HTMLDivElement
    const liElementt = parentBtnElement.parentElement

    const h4Elements = liElementt?.querySelectorAll('h4')
    const h4FirstEl = h4Elements ? h4Elements[0].textContent : ''
    const h4SecondtEl = h4Elements ? h4Elements[1].textContent : ''
    const newh4 = h4FirstEl?.split(' ').splice(1)
    const SecondNewh4 = h4SecondtEl?.split(' ').splice(2)

    const liElement = createElement('li')
    const span = createElement('span', `To: ${SecondNewh4}`)
    const secondSpan = createElement('span', `Title: ${newh4}`)
    const div = createElement('div')
    div.setAttribute('class', 'btn')

    const deleteBtn = createElement('button', 'Delete')
    deleteBtn.setAttribute('type', 'submit')
    deleteBtn.setAttribute('class', 'delete')

    liElement.appendChild(span)
    liElement.appendChild(secondSpan)
    div.appendChild(deleteBtn)
    liElement.appendChild(div)

    sentlist?.appendChild(liElement)
    deleteBtn.addEventListener('click', deletedMails)
    liElementt?.remove()
  }

  function addMails() {
    if (!recipientName?.value || !title?.value || !message?.value) {
      return
    }

    const liElement = createElement('li')
    const h4First = createElement('h4', `Title: ${title.value}`)
    const h4Second = createElement(
      'h4',
      `Recipient Name: ${recipientName.value}`,
    )
    const span = createElement('span', message.value)

    const div = createElement('div')
    div.setAttribute('id', 'list-action')

    const sendBtn = createElement('button', 'Send')
    sendBtn.setAttribute('type', 'submit')
    sendBtn.setAttribute('id', 'send')

    const deleteBtn = createElement('button', 'Delete')
    deleteBtn.setAttribute('type', 'submit')
    deleteBtn.setAttribute('id', 'delete')

    liElement.appendChild(h4First)
    liElement.appendChild(h4Second)
    liElement.appendChild(span)

    div.appendChild(sendBtn)
    div.appendChild(deleteBtn)
    liElement.appendChild(div)

    list?.appendChild(liElement)

    recipientName.value = ''
    title.value = ''
    message.value = ''

    resetBtn?.addEventListener('click', (ev: MouseEvent) => {
      ev.preventDefault()

      recipientName.value = ''
      title.value = ''
      message.value = ''
    })

    sendBtn.addEventListener('click', sendMails)

    deleteBtn.addEventListener('click', (ev: MouseEvent) => {
      const currentTarget = ev.currentTarget as HTMLButtonElement
      const parentBtnElement = currentTarget.parentElement as HTMLDivElement
      const liElementt = parentBtnElement.parentElement

      const h4Elements = liElementt?.querySelectorAll('h4')
      const h4FirstEl = h4Elements ? h4Elements[0].textContent : ''
      const h4SecondtEl = h4Elements ? h4Elements[1].textContent : ''
      const newh4 = h4FirstEl?.split(' ').splice(1)
      const SecondNewh4 = h4SecondtEl?.split(' ').splice(2)

      const li = createElement('li')
      const span = createElement('span', `To: ${SecondNewh4}`)
      const secondSpan = createElement('span', `Title: ${newh4}`)

      li.appendChild(span)
      li.appendChild(secondSpan)
      deleteList?.appendChild(li)
      liElementt?.remove()
    })
  }

  addToListBtn?.addEventListener('click', addMails)
}

export {}
