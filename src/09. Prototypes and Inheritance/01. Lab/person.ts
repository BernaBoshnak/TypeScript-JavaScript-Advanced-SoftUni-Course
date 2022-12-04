interface PersonData {
  firstName: string
  lastName: string
}

class Person implements PersonData {
  firstName: PersonData['firstName']
  lastName: PersonData['lastName']

  constructor(
    firstName: PersonData['firstName'],
    lastName: PersonData['lastName'],
  ) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person('Peter', 'Ivanov')
console.log(person.fullName)
person.firstName = 'George'
console.log(person.fullName)
person.lastName = 'Peterson'
console.log(person.fullName)
person.fullName = 'Nikola Tesla'
console.log(person.firstName)
console.log(person.lastName)

export {}
