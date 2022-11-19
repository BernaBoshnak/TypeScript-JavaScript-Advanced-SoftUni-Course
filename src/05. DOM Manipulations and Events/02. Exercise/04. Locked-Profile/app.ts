type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function lockedProfile() {
  const main = document.getElementById('main') as Nullable<HTMLButtonElement>
  main?.addEventListener('click', (ev: MouseEvent) => {
    const target = ev.target as HTMLButtonElement
    if (target.tagName === 'BUTTON') {
      const profile = target.parentNode

      if (!profile) {
        return
      }

      const lockEl = profile.querySelector<HTMLInputElement>(
        'input[type="radio"]:checked',
      )
      const isLocked = lockEl?.value === 'lock'

      if (isLocked) {
        return
      }

      const divEl = profile.querySelector<HTMLDivElement>('div')
      if (divEl) {
        const isVisible = divEl.style.display === 'block'
        divEl.style.display = isVisible ? 'none' : 'block'

        target.textContent = !isVisible ? 'Hide it' : 'Show more'
      }
    }
  })
}

export {}
