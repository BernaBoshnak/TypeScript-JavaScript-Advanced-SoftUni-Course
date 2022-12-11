// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import mathEnforcer from './mathEnforcer'

describe('mathEnforcer', () => {
  describe('add', () => {
    it('Parameter is not number', () => {
      expect(mathEnforcer.addFive('a')).to.be.undefined
      expect(mathEnforcer.addFive(NaN)).to.be.is.NaN
    })

    it('Add properly', () => {
      expect(mathEnforcer.addFive(0)).to.equal(5)
      expect(mathEnforcer.addFive(-5)).to.equal(0)
      expect(mathEnforcer.addFive(1.2)).to.equal(6.2)
      expect(mathEnforcer.addFive(-1.2)).to.equal(3.8)
      expect(mathEnforcer.addFive(1)).to.equal(6)
    })
  })

  describe('subtractTen', () => {
    it('Parameter is not number', () => {
      expect(mathEnforcer.subtractTen('a')).to.be.undefined
      expect(mathEnforcer.subtractTen(NaN)).to.be.is.NaN
    })

    it('Subtracts properly', () => {
      expect(mathEnforcer.subtractTen(0)).to.equal(-10)
      expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
      expect(mathEnforcer.subtractTen(-1.2)).to.equal(-11.2)
      expect(mathEnforcer.subtractTen(10)).to.equal(0)
      expect(mathEnforcer.subtractTen(1)).to.equal(-9)
      expect(mathEnforcer.subtractTen(20)).to.equal(10)
    })
  })

  describe('Sum', () => {
    it('Parameter is not number', () => {
      expect(mathEnforcer.sum('1', 1)).to.be.undefined
      expect(mathEnforcer.sum(1, '1')).to.be.undefined
    })

    it('Sum properly', () => {
      expect(mathEnforcer.sum(1, 2)).to.equal(3)
      expect(mathEnforcer.sum(-5, -2)).to.equal(-7)
      expect(mathEnforcer.sum(-1.2, 2)).to.equal(0.8)
      expect(mathEnforcer.sum(10, 40)).to.equal(50)
      expect(mathEnforcer.sum(1, -2.5)).to.equal(-1.5)
    })
  })
})
