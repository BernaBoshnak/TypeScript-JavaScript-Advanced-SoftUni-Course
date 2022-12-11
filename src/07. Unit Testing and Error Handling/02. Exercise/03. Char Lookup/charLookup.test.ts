// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import lookupChar from './charLookup'

describe('charLookup', () => {
  it('', () => {
    expect(lookupChar(1, '1')).to.be.undefined
    expect(lookupChar('abc', 1.2)).to.be.undefined
    expect(lookupChar('abc', 'a')).to.be.undefined
  })

  it('', () => {
    expect(lookupChar('abc', -1)).to.equal('Incorrect index')
    expect(lookupChar('abc', 4)).to.equal('Incorrect index')
  })

  it('', () => {
    expect(lookupChar('abc', 0)).to.equal('a')
    expect(lookupChar('abc', 1)).to.equal('b')
  })
})
