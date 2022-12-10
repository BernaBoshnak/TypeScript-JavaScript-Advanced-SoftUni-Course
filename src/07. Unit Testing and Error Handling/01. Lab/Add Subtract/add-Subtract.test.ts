// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import createCalculator from './add-Subtract'

describe('createCalculator()', () => {
  let calc

  beforeEach(function () {
    calc = createCalculator()
  })

  it('should return 0 for get', () => {
    const value = calc.get()
    expect(value).to.be.equal(0)
  })

  describe('add', () => {
    it('should return 7 after add(3); add(4);', () => {
      calc.add(3)
      calc.add(4)
      const value = calc.get()
      expect(value).to.be.equal(7)
    })

    it('should return -8 after add(-5); add(-3);', () => {
      calc.add(-5)
      calc.add(-3)
      const value = calc.get()
      expect(value).to.be.equal(-8)
    })

    it('should return 4.9 after add(1.2); add(3.7);', () => {
      calc.add(1.2)
      calc.add(3.7)
      const value = calc.get()
      expect(value).to.be.equal(4.9)
    })

    it('should return NaN for add(string)', () => {
      calc.add('hi')
      const value = calc.get()
      expect(value).to.be.NaN
    })
  })

  describe('subtract', () => {
    it('should return -11 after subtract(6); subtract(5);', () => {
      calc.subtract(6)
      calc.subtract(5)
      const value = calc.get()
      expect(value).to.be.equal(-11)
    })

    it('should return -5 after subtract(1.2); subtract(3.8);', () => {
      calc.subtract(1.2)
      calc.subtract(3.8)
      const value = calc.get()
      expect(value).to.be.equal(-5)
    })

    it('should return 12 after subtract(-8); subtract(-4);', () => {
      calc.subtract(-8)
      calc.subtract(-4)
      const value = calc.get()
      expect(value).to.be.equal(12)
    })

    it('should return NaN for subtract(string)', () => {
      calc.subtract('world')
      const value = calc.get()
      expect(value).to.be.NaN
    })
  })
})
