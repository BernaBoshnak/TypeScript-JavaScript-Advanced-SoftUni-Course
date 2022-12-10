// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import StringBuilder from './stringBuilder'

describe('StringBuilder test', () => {
  describe('Tests for the Constructor', () => {
    it('Should not throw an error if the input is undefined', () => {
      const instance = new StringBuilder('')
      expect(() => instance).to.not.throw(
        TypeError,
        'Argument must be a string',
      )
      expect(instance.toString()).to.equal('')
    })

    it('Should throw an error if the input is not a string', () => {
      expect(() => new StringBuilder(1)).to.throw(
        TypeError,
        'Argument must be a string',
      )
      expect(() => new StringBuilder([])).to.throw(
        TypeError,
        'Argument must be a string',
      )
    })
  })

  describe('Tests for the append Method', () => {
    it('Should work as intended when the given input is a string', () => {
      const instance = new StringBuilder('abc')
      instance.append('dif')
      expect(instance.toString()).to.equal('abcdif')
    })

    it('Should throw an error when the given input is not a string', () => {
      const instance = new StringBuilder()
      expect(() => instance.append(123)).to.throw(
        TypeError,
        'Argument must be a string',
      )
      expect(() => instance.append()).to.throw(
        TypeError,
        'Argument must be a string',
      )
    })
  })

  describe('Tests for the prepend Method', () => {
    it('Should work as intended when the given input is a string', () => {
      const instance = new StringBuilder('abc')
      instance.prepend('dif')
      expect(instance.toString()).to.equal('difabc')
    })

    it('Should throw an error when the given input is not a string', () => {
      const instance = new StringBuilder()
      expect(() => instance.prepend(123)).to.throw(
        TypeError,
        'Argument must be a string',
      )
      expect(() => instance.prepend()).to.throw(
        TypeError,
        'Argument must be a string',
      )
    })
  })

  describe('Tests for the insertAt Method', () => {
    it('Should work as intended when the given input is a string', () => {
      const firstInstance = new StringBuilder('abc')
      firstInstance.insertAt('dif', 1)
      expect(firstInstance.toString()).to.equal('adifbc')

      const secondInstance = new StringBuilder('abc')
      secondInstance.insertAt('dif', -1)
      expect(secondInstance.toString()).to.equal('abdifc')
    })
  })

  describe('Tests for the remove Method', () => {
    it('Should work as intended when the given input is a string', () => {
      const firstInstance = new StringBuilder('abc')
      firstInstance.remove(0, 1)
      expect(firstInstance.toString()).to.equal('bc')

      const secondInstance = new StringBuilder('abc')
      secondInstance.remove(1, 4)
      expect(secondInstance.toString()).to.equal('a')

      const thirdInstance = new StringBuilder('abc')
      thirdInstance.remove(4, 1)
      expect(thirdInstance.toString()).to.equal('abc')
    })
  })

  it('toString works correctly - 2', () => {
    const expected = '\n A \n\r B\t123   '
    const obj = new StringBuilder()

    expected.split('').forEach((s) => {
      obj.append(s)
      obj.prepend(s)
    })

    obj.insertAt('test', 4)

    obj.remove(2, 4)

    expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ')
  })
})
