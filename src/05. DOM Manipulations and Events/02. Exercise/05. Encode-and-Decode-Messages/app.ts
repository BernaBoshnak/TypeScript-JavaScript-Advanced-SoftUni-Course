type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function encodeAndDecodeMessages() {
  const textareas = document.querySelectorAll<HTMLTextAreaElement>('textarea')
  const buttons = document.querySelectorAll<HTMLButtonElement>('button')
  const mainEl = document.getElementById('main') as Nullable<HTMLElement>

  const map = {
    encode: {
      textarea: textareas[0],
      btn: buttons[0],
      func: (char: string) => String.fromCharCode(char.charCodeAt(0) + 1),
    },
    decode: {
      textarea: textareas[1],
      btn: buttons[1],
      func: (char: string) => String.fromCharCode(char.charCodeAt(0) - 1),
    },
  }

  mainEl?.addEventListener('click', (ev: MouseEvent) => {
    const target = ev.target as HTMLElement
    if (target.tagName !== 'BUTTON') {
      return
    }

    const type = target.textContent?.toLowerCase().trim().includes('encode')
      ? 'encode'
      : 'decode'

    const message = map[type].textarea.value
      .split('')
      .map(map[type].func)
      .join('')

    map.encode.textarea.value = ''
    map.decode.textarea.value = message
  })
}

export {}
