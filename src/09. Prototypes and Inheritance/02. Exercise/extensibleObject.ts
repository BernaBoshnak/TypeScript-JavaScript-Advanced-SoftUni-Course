interface ExtensionTemplate {
  extensionMethod: () => void
  extensionProperty: string
}

interface ExtensibleObject {
  extend: (template: ExtensionTemplate) => void
  [key: string]: unknown
}

function extensibleObject(): ExtensibleObject {
  const instance: ExtensibleObject = {
    extend: function (template: ExtensionTemplate) {
      Object.entries(template).forEach(([key, value]) => {
        if (typeof value === 'function') {
          Object.getPrototypeOf(instance)[key] = value
        } else {
          instance[key] = value
        }
      })
    },
  }

  return instance
}

const myObj = extensibleObject()

const template: ExtensionTemplate = {
  extensionMethod: () => undefined,
  extensionProperty: 'someString',
}
myObj.extend(template)
console.log(myObj)
