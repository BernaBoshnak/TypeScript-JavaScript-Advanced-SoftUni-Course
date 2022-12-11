// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  //   type Modules = 'Basics' | 'Fundamentals' | 'Advanced' | 'DB' | 'Web'
  type Lis = {
    li: HTMLLIElement
    date: string
  }
  type State = {
    module: HTMLDivElement
    ul: HTMLUListElement
    lis: Lis[]
  }

  const formControls = document.querySelectorAll<HTMLInputElement>(
    '.form-control input',
  )
  const lecture = formControls[0]
  const date = formControls[1]
  const moduleName = document.querySelector<HTMLSelectElement>('select')
  const modulesOutput = document.querySelector<HTMLDivElement>('.modules')

  const state: Record<string, State> = {}

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
    attributes: string[],
  ): HTMLElementTagNameMap[K]

  function createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    text?: string,
    attributes?: string[],
  ): HTMLElementTagNameMap[K] {
    const result = document.createElement(type)

    if (text) {
      result.textContent = text
    }

    if (attributes) {
      attributes
        .map((attr) => attr.split('='))
        .forEach(([name, value]) => {
          result.setAttribute(name, value)
        })
    }

    return result
  }

  function add(ev: MouseEvent) {
    ev.preventDefault()

    if (
      !moduleName ||
      lecture.value === '' ||
      date.value === '' ||
      moduleName.value.includes('Select module...')
    ) {
      return
    }

    const lectureName = lecture.value
    const dateString = date.value

    const lectureTitle =
      lectureName +
      ' - ' +
      dateString.split('-').join('/').split('T').join(' - ')

    const delBtn = createElement('button', 'Del', ['class=red'])
    const lectureH4 = createElement('h4', lectureTitle)
    const li = createElement('li', undefined, ['class=flex'])

    li.appendChild(lectureH4)
    li.appendChild(delBtn)

    let module
    let ul: HTMLUListElement = createElement('ul')

    if (!state[moduleName.value]) {
      module = createElement('div', undefined, ['class=module'])
      const h3 = createElement(
        'h3',
        `${moduleName?.value.toUpperCase()}-MODULE`,
      )

      module.appendChild(h3)
      module.appendChild(ul)

      state[moduleName.value] = { module, ul, lis: [] }
    } else {
      module = state[moduleName.value].module
      ul = state[moduleName.value].ul
    }
    state[moduleName.value].lis.push({ li, date: date.value })

    state[moduleName.value].lis
      .sort((a, b) => {
        return a.date.localeCompare(b.date)
      })
      .forEach(({ li }) => {
        ul.appendChild(li)
      })

    modulesOutput?.appendChild(module)
  }

  function del(ev: MouseEvent) {
    const target = ev.target as HTMLButtonElement
    const li = target.parentNode as HTMLLIElement
    const ul = li.parentNode as HTMLUListElement
    const module = ul.parentNode as HTMLDivElement

    li.remove()
    if (ul.children.length === 0) {
      module.remove()
    }
  }

  document
    .getElementsByTagName('main')[0]
    .addEventListener('click', (ev: MouseEvent) => {
      const target = ev.target as HTMLElement

      if (target.tagName === 'BUTTON') {
        if (!target.classList.contains('red')) {
          add(ev)
        } else {
          del(ev)
        }
      }
    })
}

export {}
