function getPersons() {
  interface PersonData {
    firstName: string
    lastName?: string
    age?: number
    email?: string
  }

  class Person implements PersonData {
    firstName: PersonData['firstName']
    lastName?: PersonData['lastName']
    age?: PersonData['age']
    email?: PersonData['email']

    constructor(
      firstName: PersonData['firstName'],
      lastName?: PersonData['lastName'],
      age?: PersonData['age'],
      email?: PersonData['email'],
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.email = email
    }

    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
  }

  return [
    new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
    new Person('SoftUni'),
    new Person('Stephan', 'Johnson', 25),
    new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'),
  ]
}

console.log(getPersons())

export {}
