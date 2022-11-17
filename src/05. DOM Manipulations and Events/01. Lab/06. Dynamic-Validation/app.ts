type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function validate() {
  const email = document.getElementById('email') as Nullable<HTMLInputElement>

  if (!email) {
    return
  }

  email.addEventListener('change', onChange)

  function onChange(e: Event) {
    const target = e.target as HTMLInputElement
    const email = target.value

    if (/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
      target.className = ''
    } else {
      target.className = 'error'
    }
  }
}

export {}
