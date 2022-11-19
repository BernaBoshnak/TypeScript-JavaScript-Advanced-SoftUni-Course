type Nullable<T> = T | null
type Info = {
  km: 1000
  m: 1
  cm: 0.01
  mm: 0.001
  mi: 1609.34
  yrd: 0.9144
  ft: 0.3048
  in: 0.0254
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function attachEventsListeners() {
  const inputDistance = document.getElementById(
    'inputDistance',
  ) as Nullable<HTMLInputElement>
  const outputDistance = document.getElementById(
    'outputDistance',
  ) as Nullable<HTMLInputElement>

  const inputUnits = document.getElementById(
    'inputUnits',
  ) as Nullable<HTMLSelectElement>
  const outputUnits = document.getElementById(
    'outputUnits',
  ) as Nullable<HTMLSelectElement>
  const button = document.getElementById(
    'convert',
  ) as Nullable<HTMLInputElement>
  button?.addEventListener('click', convert)

  const information: Info = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  }

  function convert() {
    const checkInputValue = inputDistance?.value.trim()

    const inputValue = Number(checkInputValue)
    if (isNaN(inputValue)) {
      return
    }

    const convertFrom =
      inputUnits?.value != undefined
        ? information[inputUnits?.value as keyof typeof information]
        : ''
    const convertTo =
      outputUnits?.value != undefined
        ? information[outputUnits?.value as keyof typeof information]
        : ''

    if (!convertFrom || !convertTo) {
      return
    }

    const result = (inputValue * convertFrom) / convertTo
    if (outputDistance) {
      outputDistance.value = result.toString()
    }
  }
}

export {}
