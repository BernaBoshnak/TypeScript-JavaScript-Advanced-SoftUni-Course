// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import rgbToHexColor from './rgbToHex'

describe('RGBtoHEX', () => {
  it('convert black to hex', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
  })

  it('convert white to hex', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
  })

  it('convert red to hex', () => {
    expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000')
  })

  it('convert green to hex', () => {
    expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00')
  })

  it('convert blue to hex', () => {
    expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF')
  })

  it('returns undefined for string params', () => {
    expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined
  })

  it('returns undefined for negative values', () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined
  })

  it('returns undefined for negative >255', () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined
  })

  it('returns undefined for negative values', () => {
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined
  })

  it('returns undefined for negative >255', () => {
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined
  })

  it('returns undefined for negative values', () => {
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined
  })

  it('returns undefined for negative >255', () => {
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined
  })

  // test overloading
  it('convert (151, 104, 172) to hex', () => {
    expect(rgbToHexColor(151, 104, 172)).to.equal('#9768AC')
  })

  it('convert (42, 173, 170) to hex', () => {
    expect(rgbToHexColor(42, 173, 170)).to.equal('#2AADAA')
  })
})
