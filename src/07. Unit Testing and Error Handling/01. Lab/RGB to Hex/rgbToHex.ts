type MAXIMUM_ALLOWED_BOUNDARY = 256
type ComputeRange<
  N extends number,
  Result extends Array<unknown> = [],
> = Result['length'] extends N
  ? Result
  : ComputeRange<N, [...Result, Result['length']]>

type Range = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number]

function rgbToHexColor(red: Range, green: Range, blue: Range) {
  if (!Number.isInteger(red) || red < 0 || red > 255) {
    return undefined
  }
  if (!Number.isInteger(green) || green < 0 || green > 255) {
    return undefined
  }
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
    return undefined
  }

  return (
    '#' +
    ('0' + red.toString(16).toUpperCase()).slice(-2) +
    ('0' + green.toString(16).toUpperCase()).slice(-2) +
    ('0' + blue.toString(16).toUpperCase()).slice(-2)
  )
}

export default rgbToHexColor
