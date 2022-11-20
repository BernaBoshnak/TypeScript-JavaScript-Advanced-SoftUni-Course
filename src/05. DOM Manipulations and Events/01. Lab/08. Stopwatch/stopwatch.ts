type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function stopwatch() {
  const timer = document.getElementById('time') as Nullable<HTMLDivElement>

  if (!timer) {
    return
  }

  const startBtn = document.getElementById(
    'startBtn',
  ) as Nullable<HTMLButtonElement>
  const stopBtn = document.getElementById(
    'stopBtn',
  ) as Nullable<HTMLButtonElement>
  let interval: number

  startBtn?.addEventListener('click', (e: MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLButtonElement
    stopBtn?.removeAttribute('disabled')
    currentTarget.setAttribute('disabled', 'true')

    interval = window.setInterval(() => {
      const currentTime = timer.textContent
      if (currentTime) {
        const timeArray = currentTime.split(':')
        let minutes = Number(timeArray[0])
        let seconds = Number(timeArray[1])

        seconds++
        if (seconds > 59) {
          minutes++
          seconds = 0
        }

        timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`
      }
    }, 1000)
  })

  stopBtn?.addEventListener('click', (e: MouseEvent) => {
    clearInterval(interval)
    const currentTarget = e.currentTarget as HTMLButtonElement

    currentTarget.setAttribute('disabled', 'true')
    startBtn?.removeAttribute('disabled')
  })
}

export {}
