// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import isSymmetric from './checkForSymmetry'

describe('isSymmetric', () => {
  it('returns true for valid symmetric input', () => {
    expect(isSymmetric([1, 1])).to.be.true
  })

  it('returns false for valid non-symmetric input', () => {
    expect(isSymmetric([1, 2])).to.be.false
  })

  it('returns false for invalid argument', () => {
    expect(isSymmetric('a')).to.be.false
  })

  it('returns false for type-coerced elements', () => {
    expect(isSymmetric(['1', 1])).to.be.false
  })

  //test overloading
  it('returns true for valid symmetric odd-element arr', () => {
    expect(isSymmetric([1, 1, 1])).to.be.true
  })

  it('returns true for valid symmetric string arr', () => {
    expect(isSymmetric(['a', 'a'])).to.be.true
  })

  it('returns false for valid non-symmetric string arr', () => {
    expect(isSymmetric(['a', 'b'])).to.be.false
  })
})
