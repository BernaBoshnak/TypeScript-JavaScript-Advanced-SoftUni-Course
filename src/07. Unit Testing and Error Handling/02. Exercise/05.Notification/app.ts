type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function notify(message: string) {
  const notification = document.getElementById(
    'notification',
  ) as Nullable<HTMLDivElement>

  if (!notification) {
    return
  }

  notification.textContent = message
  notification.style.display = 'block'

  notification.addEventListener('click', (ev: MouseEvent) => {
    const target = ev.target as HTMLDivElement
    target.style.display = 'none'
  })
}

export {}
