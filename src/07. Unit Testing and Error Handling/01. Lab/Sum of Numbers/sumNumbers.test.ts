import { expect } from 'chai'
import sum from './sumNumbers'

describe('Sum numbers', () => {
  it('sums single number', () => {
    expect(sum([1])).to.equal(1)
  })

  it('sums multiples numbers', () => {
    expect(sum([1, 2])).to.equal(3)
  })
})
