type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function showText() {
  const text = document.getElementById('text') as Nullable<HTMLSpanElement>
  const more = document.getElementById('more') as Nullable<HTMLAnchorElement>

  if (text && more) {
    text.style.display = 'inline'
    more.style.display = 'none'
  }
}

export {}
