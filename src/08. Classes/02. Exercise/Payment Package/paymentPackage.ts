type Name = string
type Value = number
type Vat = number
type Active = boolean

class PaymentPackage {
  private _name: Name
  private _value: Value
  private _VAT: Vat
  private _active: Active

  constructor(name: Name, value: Value) {
    this._name = name
    this._value = value
    this._VAT = 20
    this._active = true
  }

  get name() {
    return this._name
  }

  set name(newValue) {
    if (typeof newValue !== 'string') {
      throw new Error('Name must be a non-empty string')
    }
    if (newValue.length === 0) {
      throw new Error('Name must be a non-empty string')
    }
    this._name = newValue
  }

  get value() {
    return this._value
  }

  set value(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('Value must be a non-negative number')
    }
    if (newValue < 0) {
      throw new Error('Value must be a non-negative number')
    }
    this._value = newValue
  }

  get VAT() {
    return this._VAT
  }

  set VAT(newValue) {
    if (typeof newValue !== 'number') {
      throw new Error('VAT must be a non-negative number')
    }
    if (newValue < 0) {
      throw new Error('VAT must be a non-negative number')
    }
    this._VAT = newValue
  }

  get active() {
    return this._active
  }

  set active(newValue) {
    if (typeof newValue !== 'boolean') {
      throw new Error('Active status must be a boolean')
    }
    this._active = newValue
  }

  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
      `- Value (excl. VAT): ${this.value}`,
      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`,
    ]
    return output.join('\n')
  }
}

export default PaymentPackage
