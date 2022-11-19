type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function notify() {
  const notification = document.getElementById(
    'notification',
  ) as Nullable<HTMLDivElement>

  if (!notification) {
    return
  }

  const btn = document.querySelector<HTMLButtonElement>('.btn')
  const message = 'Something happened!'

  btn?.addEventListener('click', () => {
    notification.textContent = message
    notification.style.display = 'block'

    setTimeout(() => {
      notification.style.display = 'none'
    }, 2000)
  })
}

export {}
