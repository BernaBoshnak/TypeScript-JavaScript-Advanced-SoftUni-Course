type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function validate() {
  const userName = document.getElementById(
    'username',
  ) as Nullable<HTMLInputElement>
  const email = document.getElementById('email') as Nullable<HTMLInputElement>
  const password = document.getElementById(
    'password',
  ) as Nullable<HTMLInputElement>
  const confirmPassword = document.getElementById(
    'confirm-password',
  ) as Nullable<HTMLInputElement>
  const checkbox = document.getElementById(
    'company',
  ) as Nullable<HTMLInputElement>
  const submitBtn = document.getElementById(
    'submit',
  ) as Nullable<HTMLButtonElement>

  if (
    !userName ||
    !email ||
    !password ||
    !confirmPassword ||
    !checkbox ||
    !submitBtn
  ) {
    return
  }

  const usernamePattern = /^[A-Z-a-z-0-9]{3,20}$/g
  const passwordAndConfirmPasswordPattern = /^[\w]{5,15}$/
  const emailPattern = /.*@.*\..*/g

  checkbox.addEventListener('change', () => {
    const companyInfo = document.getElementById(
      'companyInfo',
    ) as Nullable<HTMLFieldSetElement>

    if (!companyInfo) {
      return
    }

    if (checkbox.checked) {
      companyInfo.style.display = 'block'
    } else {
      companyInfo.style.display = 'none'
    }
  })

  submitBtn.addEventListener('click', (ev: MouseEvent) => {
    ev.preventDefault()

    const validOut: boolean[] = []

    if (usernamePattern.exec(userName.value) === null) {
      userName.style.borderColor = 'red'
      validOut.push(false)
    } else {
      userName.style.borderColor = ''
      validOut.push(true)
    }

    if (emailPattern.exec(email.value) === null) {
      email.style.borderColor = 'red'
      validOut.push(false)
    } else {
      email.style.borderColor = ''
      validOut.push(true)
    }

    if (
      password.value === confirmPassword.value &&
      passwordAndConfirmPasswordPattern.exec(password.value) !== null &&
      passwordAndConfirmPasswordPattern.exec(confirmPassword.value) !== null
    ) {
      password.style.borderColor = ''
      confirmPassword.style.borderColor = ''
      validOut.push(true)
    } else {
      password.style.borderColor = 'red'
      confirmPassword.style.borderColor = 'red'
      validOut.push(false)
    }

    if (checkbox.checked) {
      const companyNumber = document.getElementById(
        'companyNumber',
      ) as Nullable<HTMLInputElement>

      if (!companyNumber) {
        return
      }

      if (
        Number(companyNumber.value) < 1000 ||
        Number(companyNumber.value) > 9999
      ) {
        companyNumber.style.borderColor = 'red'
        validOut.push(false)
      } else {
        companyNumber.style.borderColor = ''
        validOut.push(true)
      }
    }

    const isValid = document.getElementById('valid') as Nullable<HTMLDivElement>

    if (!isValid) {
      return
    }

    if (!validOut.includes(false)) {
      isValid.style.display = 'block'
    } else {
      isValid.style.display = 'none'
    }
  })
}

export {}
