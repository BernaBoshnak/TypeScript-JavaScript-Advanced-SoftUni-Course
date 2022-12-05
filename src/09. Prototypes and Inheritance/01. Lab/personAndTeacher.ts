function personAndTeacher() {
  type Name = string
  type Email = string

  class Person {
    private _email: Email

    constructor(protected name: Name, email: Email) {
      this.name = name
      this._email = email
    }

    get email() {
      return `Person: ${this.name} (${this._email})`
    }
  }

  type PersonParamsType = ConstructorParameters<typeof Person>

  class Teacher extends Person {
    private _subject: string

    constructor(
      name: PersonParamsType[0],
      email: PersonParamsType[1],
      subject: string,
    ) {
      super(name, email)
      this._subject = subject
    }

    get subject() {
      return `Teacher: ${this.name} (${this.email}), teaches ${this._subject}`
    }
  }

  return {
    Person,
    Teacher,
  }
}

const classes = personAndTeacher()
const test = new classes.Person('Pesho', 'pesho@pesho.com')
console.log(test)
const teacher = new classes.Teacher('Peter', 'peter_92@gmail.com', 'PHP')
console.log(teacher)

export {}
