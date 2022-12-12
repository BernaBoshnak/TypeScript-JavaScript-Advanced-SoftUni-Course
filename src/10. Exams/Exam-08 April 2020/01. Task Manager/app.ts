type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const task = document.getElementById('task') as Nullable<HTMLInputElement>
  const description = document.getElementById(
    'description',
  ) as Nullable<HTMLTextAreaElement>
  const date = document.getElementById('date') as Nullable<HTMLInputElement>
  const addBtn = document.getElementById('add') as Nullable<HTMLButtonElement>

  if (!task || !description || !date) {
    return
  }

  const open = document.getElementsByTagName('section')[1]
  const inProgress = document.getElementsByTagName('section')[2]
  const complete = document.getElementsByTagName('section')[3]

  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
  ): HTMLElementTagNameMap[K]
  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    text: string,
  ): HTMLElementTagNameMap[K]
  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    text: string | undefined,
    className: string,
  ): HTMLElementTagNameMap[K]

  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    text?: string,
    className?: string,
  ): HTMLElementTagNameMap[K] {
    const result = document.createElement(type)

    if (text) {
      result.textContent = text
    }

    if (className) {
      result.className = className
    }

    return result
  }

  addBtn?.addEventListener('click', (ev: MouseEvent) => {
    ev.preventDefault()

    if (task.value === '' || description.value === '' || date.value === '') {
      return
    }

    const article = createElement('article')
    const h3 = createElement('h3', task.value)
    const pDescription = createElement('p', 'Description: ' + description.value)
    const pDate = createElement('p', 'Due Date: ' + date.value)
    const div = createElement('div', undefined, 'flex')
    const startBtn = createElement('button', 'Start', 'green')
    const deleteBtn = createElement('button', 'Delete', 'red')

    div.appendChild(startBtn)
    div.appendChild(deleteBtn)

    article.appendChild(h3)
    article.appendChild(pDescription)
    article.appendChild(pDate)
    article.appendChild(div)

    open.children[1].appendChild(article)

    task.value = ''
    description.value = ''
    date.value = ''

    deleteBtn.addEventListener('click', () => {
      article.remove()
    })

    startBtn.addEventListener('click', () => {
      inProgress.children[1].appendChild(article)

      const finishBtn = createElement('button', 'Finish', 'orange')
      startBtn.remove()
      div.appendChild(finishBtn)

      finishBtn.addEventListener('click', () => {
        complete.children[1].appendChild(article)
        div.remove()
      })
    })
  })
}

export {}
