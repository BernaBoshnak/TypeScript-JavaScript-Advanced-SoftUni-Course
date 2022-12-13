// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import numberOperations from './numberOperations'

describe('test', () => {
  describe('powNumber', () => {
    it('', () => {
      expect(numberOperations.powNumber(1)).to.equal(1)
    })
    it('', () => {
      expect(numberOperations.powNumber(10)).to.equal(100)
    })
    it('', () => {
      expect(numberOperations.powNumber(5)).to.equal(25)
    })
  })

  describe('numberChecker', () => {
    it('', () => {
      expect(() => numberOperations.numberChecker('a')).to.throw(
        'The input is not a number!',
      )
    })
    it('', () => {
      expect(numberOperations.numberChecker(10)).to.equal(
        'The number is lower than 100!',
      )
    })
    it('', () => {
      expect(numberOperations.numberChecker(100)).to.equal(
        'The number is greater or equal to 100!',
      )
    })
    it('', () => {
      expect(numberOperations.numberChecker(101)).to.equal(
        'The number is greater or equal to 100!',
      )
    })
  })

  describe('sumArrays', () => {
    it('', () => {
      expect(numberOperations.sumArrays([0, 1, 2], [1, 2, 3])).to.deep.equal([
        1, 3, 5,
      ])
    })
    it('', () => {
      expect(numberOperations.sumArrays([3, 6, 9], [2, 4, 6])).to.deep.equal([
        5, 10, 15,
      ])
    })
    it('', () => {
      expect(numberOperations.sumArrays([1, 5], [3, 4, 9])).to.deep.equal([
        4, 9, 9,
      ])
    })
  })
})
