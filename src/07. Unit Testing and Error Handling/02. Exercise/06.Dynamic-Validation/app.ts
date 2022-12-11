type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function validate() {
  const input = document.getElementById('email') as Nullable<HTMLInputElement>

  if (!input) {
    return
  }

  const pattern = /^[a-z]+@[a-z]+.[a-z]+$/g

  input.addEventListener('change', () => {
    if (!pattern.test(input.value)) {
      input.classList.add('error')
    } else {
      input.removeAttribute('class')
    }
  })
}

export {}
