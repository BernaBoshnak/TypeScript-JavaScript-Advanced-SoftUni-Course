type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function attachEventsListeners() {
  const days = document.getElementById('days') as Nullable<HTMLInputElement>
  const hours = document.getElementById('hours') as Nullable<HTMLInputElement>
  const minutes = document.getElementById(
    'minutes',
  ) as Nullable<HTMLInputElement>
  const seconds = document.getElementById(
    'seconds',
  ) as Nullable<HTMLInputElement>

  const daysBtn = document.getElementById(
    'daysBtn',
  ) as Nullable<HTMLInputElement>
  const hoursBtn = document.getElementById(
    'hoursBtn',
  ) as Nullable<HTMLInputElement>
  const minutesBtn = document.getElementById(
    'minutesBtn',
  ) as Nullable<HTMLInputElement>
  const secondsBtn = document.getElementById(
    'secondsBtn',
  ) as Nullable<HTMLInputElement>

  if (days && hours && minutes && seconds) {
    daysBtn?.addEventListener('click', () => {
      convert(+days.value * 86400)
    })
    hoursBtn?.addEventListener('click', () => {
      convert(+hours.value * 3600)
    })
    minutesBtn?.addEventListener('click', () => {
      convert(+minutes.value * 60)
    })
    secondsBtn?.addEventListener('click', () => {
      convert(+seconds.value)
    })
  }

  function convert(sec: number) {
    const day = sec / (24 * 60 * 60)
    const hour = sec / (60 * 60)
    const minute = sec / 60

    if (days && hours && minutes && seconds) {
      days.value = day.toString()
      hours.value = hour.toString()
      minutes.value = minute.toString()
      seconds.value = sec.toString()
    }
  }
}

export {}
