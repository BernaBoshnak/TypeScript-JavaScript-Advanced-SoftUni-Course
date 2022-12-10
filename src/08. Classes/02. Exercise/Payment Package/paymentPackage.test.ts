// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import PaymentPackage from './paymentPackage'

describe('PaymentPackage test', () => {
  it('constructor', () => {
    const instance = new PaymentPackage('Name', 100)
    expect(instance).to.have.property('_name', 'Name')
    expect(instance).to.have.property('_value', 100)
    expect(instance).to.have.property('_VAT', 20)
    expect(instance).to.have.property('_active', true)
  })

  it('name', () => {
    const instance = new PaymentPackage('Name', 100)
    expect(instance.name).to.equal('Name')

    instance.name = 'John'
    expect(instance.name).to.equal('John')
    expect(() => {
      instance.name = 2
    }).to.throw('Name must be a non-empty string')
    expect(() => {
      instance.name = ''
    }).to.throw('Name must be a non-empty string')
  })

  it('value', () => {
    const instance = new PaymentPackage('Name', 100)
    expect(instance.value).to.equal(100)

    instance.value = 20

    expect(instance.value).to.equal(20)
    expect(() => {
      instance.value = '-2'
    }).to.throw('Value must be a non-negative number')
    expect(() => {
      instance.value = -2
    }).to.throw('Value must be a non-negative number')
    expect(() => {
      instance.value = 0
    }).to.not.throw()
  })

  it('VAT', () => {
    const instance = new PaymentPackage('Name', 100)
    expect(instance.VAT).to.equal(20)

    instance.VAT = 40

    expect(instance.VAT).to.equal(40)
    expect(() => {
      instance.VAT = '2'
    }).to.throw('VAT must be a non-negative number')
    expect(() => {
      instance.VAT = -2
    }).to.throw('VAT must be a non-negative number')
    expect(() => {
      instance.VAT = 'string'
    }).to.throw('VAT must be a non-negative number')
    expect(() => {
      instance.VAT = undefined
    }).to.throw('VAT must be a non-negative number')
    expect(() => {
      instance.VAT = 0
    }).to.not.throw()
  })

  it('active', () => {
    const instance = new PaymentPackage('Name', 100)
    expect(instance.active).to.be.true

    instance.active = false

    expect(instance.active).to.be.false
    expect(() => {
      instance.active = 0
    }).to.throw('Active status must be a boolean')
  })

  it('toString', () => {
    function getString(name, value, VAT = 20, active = true) {
      return [
        `Package: ${name}` + (active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${value}`,
        `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`,
      ].join('\n')
    }

    const instance = new PaymentPackage('Name', 100)
    expect(instance.toString()).to.equal(getString('Name', 100))
    instance.active = false
    expect(instance.toString()).to.equal(getString('Name', 100, 20, false))
    instance.VAT = 200
    expect(instance.toString()).to.equal(getString('Name', 100, 200, false))
    instance.name = 'Merry'
    expect(instance.toString()).to.equal(getString('Merry', 100, 200, false))
    instance.value = 2
    expect(instance.toString()).to.equal(getString('Merry', 2, 200, false))
  })
})
