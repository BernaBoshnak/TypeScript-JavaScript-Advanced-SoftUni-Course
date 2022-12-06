function solution() {
  type Name = string
  type Age = number
  type TasksKeys = 'Junior' | 'Senior' | 'Manager'
  type Tasks = Record<TasksKeys, string[]>

  const TASKS: Tasks = {
    Junior: [' is working on a simple task.'],
    Senior: [
      ' is working on a complicated task.',
      ' is taking time off work.',
      ' is supervising junior workers.',
    ],
    Manager: [' scheduled a meeting.', ' is preparing a quarterly report.'],
  }

  class Employee {
    salary: number
    private _index: number

    constructor(
      protected name: Name,
      protected age: Age,
      private tasks: Tasks[keyof Tasks],
    ) {
      this.salary = 0
      this._index = 0
    }

    work() {
      if (this._index === this.tasks.length) {
        this._index = 0
      }

      console.log(this.name + this.tasks[this._index])
      this._index++
    }

    collectSalary() {
      console.log(`${this.name} received ${this.salary} this month.`)
    }
  }

  type EmployeeParamsType = ConstructorParameters<typeof Employee>

  class Junior extends Employee {
    constructor(name: EmployeeParamsType[0], age: EmployeeParamsType[1]) {
      super(name, age, TASKS['Junior'])
    }
  }

  class Senior extends Employee {
    constructor(name: EmployeeParamsType[0], age: EmployeeParamsType[1]) {
      super(name, age, TASKS['Senior'])
    }
  }

  class Manager extends Employee {
    dividend: number

    constructor(name: EmployeeParamsType[0], age: EmployeeParamsType[1]) {
      super(name, age, TASKS['Manager'])
      this.dividend = 0
    }

    collectSalary() {
      console.log(
        `${this.name} received ${this.salary + this.dividend} this month.`,
      )
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager,
  }
}

const classes = solution()

const junior = new classes.Junior('Ivan', 25)
junior.work()
junior.work()
junior.salary = 5811
junior.collectSalary()

const senior = new classes.Senior('Alex', 31)
senior.work()
senior.work()
senior.work()
senior.work()
senior.salary = 12050
senior.collectSalary()

const manager = new classes.Manager('Tom', 55)
manager.salary = 15000
manager.collectSalary()
manager.dividend = 2500
manager.collectSalary()

export {}