// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import isOddOrEven from './evenOrOdd'

describe('check isOddOrEven', () => {
  it('Type is not string', () => {
    expect(isOddOrEven(1)).to.be.undefined
  })

  it('Is Odd', () => {
    expect(isOddOrEven('a')).to.equal('odd')
  })

  it('Is Even', () => {
    expect(isOddOrEven('aa')).to.equal('even')
  })
})
