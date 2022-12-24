type Nullable<T> = T | null
type FirstName = string
type LastName = string
type Phone = string
type Email = string

class Contact {
  private _online: boolean
  private divTitle?: HTMLDivElement

  constructor(
    private firstName: FirstName,
    private lastName: LastName,
    private phone: Phone,
    private email: Email,
  ) {
    this._online = false
  }

  get online() {
    return this._online
  }

  set online(bool) {
    this._online = bool

    if (this.divTitle) {
      this.divTitle.className = this._online ? 'title online' : 'title'
    }
  }

  createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
  ): HTMLElementTagNameMap[K]
  createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content: string,
  ): HTMLElementTagNameMap[K]

  createElement<K extends keyof HTMLElementTagNameMap>(
    type: K,
    content?: string,
  ) {
    const result = document.createElement(type)

    if (content) {
      result.innerHTML = content
    }

    return result
  }

  render(id: string) {
    const article = this.createElement('article')
    this.divTitle = this.createElement(
      'div',
      `${this.firstName} ${this.lastName}`,
    )
    const button = this.createElement('button', '&#8505;')
    const divInfo = this.createElement(
      'div',
      `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`,
    )

    this.divTitle.className = this.online ? 'title online' : 'title'
    divInfo.className = 'info'
    divInfo.style.display = 'none'

    this.divTitle.appendChild(button)
    article.appendChild(this.divTitle)
    article.appendChild(divInfo)

    const divEl = document.getElementById(id) as Nullable<HTMLDivElement>
    if (divEl) {
      divEl.appendChild(article)
    }

    button.addEventListener('click', () => {
      divInfo.style.display =
        divInfo.style.display === 'none' ? 'block' : 'none'
    })
  }
}

const contacts = [
  new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
  new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
  new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com'),
]
contacts.forEach((c) => c.render('main'))
setTimeout(() => (contacts[0].online = true), 2000)

export {}
