// eslint-disable-next-line @typescript-eslint/no-unused-vars
function focused() {
  const inputs = Array.from(
    document.querySelectorAll<HTMLInputElement>('input[type="text"]'),
  )

  inputs.forEach((input) => {
    input.addEventListener('focus', onFocus)
    input.addEventListener('blur', onBlur)
  })

  function onFocus(e: FocusEvent) {
    const targetAndParentElement = (e.target as HTMLElement).parentElement

    if (targetAndParentElement) {
      targetAndParentElement.className = 'focus'
    }
  }

  function onBlur(e: FocusEvent) {
    const targetAndParentElement = (e.target as HTMLElement).parentElement

    if (targetAndParentElement) {
      targetAndParentElement.className = ''
    }
  }
}

export {}
