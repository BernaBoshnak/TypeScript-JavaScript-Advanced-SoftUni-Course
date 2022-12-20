type Methods = 'GET' | 'POST' | 'DELETE' | 'CONNECT'
type Versions = 'HTTP/0.9' | 'HTTP/1.0' | 'HTTP/1.1' | 'HTTP/2.0'
const specialChars = <const>['<', '>', '\\', '&', "'", '"']
type SpecialChars = typeof specialChars[number]

type ValidateObj = {
  method: Methods
  uri: string
  version: Versions
  message: number | string
}

function isMessageContainingSpecialChars(
  message: ValidateObj['message'],
): message is SpecialChars {
  const stringifiedSpecialCharacters = specialChars.map(String)

  return message
    .toString()
    .split('')
    .some((char) => stringifiedSpecialCharacters.includes(char))
}

function requestValidator(obj: ValidateObj) {
  const validMethods = obj['method']

  if (!validMethods) {
    throw new Error('Invalid request header: Invalid Method')
  }

  const uriRegex = /(\*|^[\w.]+$)/gm

  if (!(obj['uri'] && uriRegex.test(obj['uri']))) {
    throw new Error('Invalid request header: Invalid URI')
  }

  const validVersion = obj['version']

  if (!validVersion) {
    throw new Error('Invalid request header: Invalid Version')
  }

  if (!('message' in obj) || isMessageContainingSpecialChars(obj.message)) {
    throw new Error('Invalid request header: Invalid Message')
  }

  return obj
}

console.log(
  requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '',
  }),
)

export {}
