type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function attachGradientEvents() {
  const divEl = document.getElementById('gradient') as Nullable<HTMLDivElement>
  const output = document.getElementById('result') as Nullable<HTMLDivElement>
  divEl?.addEventListener('mousemove', onClick)

  function onClick(e: MouseEvent) {
    const offsetX = e.offsetX
    const target = e.target as HTMLElement
    const percent = Math.trunc((offsetX / target.clientWidth) * 100)

    if (output) {
      output.textContent = `${percent}%`
    }
  }
}

export {}
