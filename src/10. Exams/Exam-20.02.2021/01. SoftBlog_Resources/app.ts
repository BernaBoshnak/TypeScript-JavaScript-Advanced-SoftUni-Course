type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const posts = document.querySelector('main>section')
  const authorEl = document.getElementById(
    'creator',
  ) as Nullable<HTMLInputElement>
  const titleEl = document.getElementById('title') as Nullable<HTMLInputElement>
  const categoryEl = document.getElementById(
    'category',
  ) as Nullable<HTMLInputElement>
  const contentEl = document.getElementById(
    'content',
  ) as Nullable<HTMLTextAreaElement>

  if (!authorEl || !titleEl || !categoryEl || !contentEl) {
    return
  }

  const archiveOlEl = document.getElementsByTagName('ol')[0]
  const btn = document.querySelector<HTMLButtonElement>('button')

  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
  ): HTMLElementTagNameMap[K]
  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content: string,
  ): HTMLElementTagNameMap[K]
  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content: string | undefined,
    className: string,
  ): HTMLElementTagNameMap[K]

  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content?: string,
    className?: string,
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

  btn?.addEventListener('click', (ev: MouseEvent) => {
    ev.preventDefault()

    const author = authorEl.value
    const title = titleEl.value
    const category = categoryEl.value
    const content = contentEl.value

    authorEl.value = ''
    titleEl.value = ''
    categoryEl.value = ''
    contentEl.value = ''

    const article = createElement('article')
    const h1 = createElement('h1', title)
    const p1 = createElement('p')
    p1.innerHTML = `Category: <strong>${category}</strong>`
    const p2 = createElement('p')
    p2.innerHTML = `Creator: <strong>${author}</strong>`
    const p3 = createElement('p', content)
    const div = createElement('div', undefined, 'buttons')
    const deleteBtn = createElement('button', 'Delete', 'btn delete')
    const archiveBtn = createElement('button', 'Archive', 'btn archive')

    div.appendChild(deleteBtn)
    div.appendChild(archiveBtn)

    article.appendChild(h1)
    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(p3)
    article.appendChild(div)

    posts?.appendChild(article)

    archiveBtn.addEventListener('click', () => {
      const li = createElement('li')
      li.textContent = title
      archiveOlEl.appendChild(li)
      sortTitle()
      article.remove()
    })

    deleteBtn.addEventListener('click', () => {
      article.remove()
    })
  })

  function sortTitle() {
    Array.from(archiveOlEl.children)
      .sort((a, b) =>
        (a?.textContent ?? '').localeCompare(b?.textContent ?? ''),
      )
      .forEach((li) => archiveOlEl.appendChild(li))
  }
}

// export {}
