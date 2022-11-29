type Employee = string
type Salary = number
type Department = Employee
type EmployeeData = {
  name: Employee
  salary: Salary
  position: Employee
}

type DepartmentsData = Record<Department, EmployeeData[]>

class Company {
  departments: DepartmentsData

  constructor() {
    this.departments = {}
  }

  addEmployee(
    name: EmployeeData['name'],
    salary: EmployeeData['salary'],
    position: EmployeeData['position'],
    department: Department,
  ) {
    const newEmployee: EmployeeData = {
      name,
      salary: Number(salary),
      position,
    }

    if (!name || !salary || !position || !department || salary <= 0) {
      throw new Error('Invalid input!')
    }

    if (!this.departments[department]) {
      this.departments[department] = []
    }

    this.departments[department].push(newEmployee)
    return `New employee is hired. Name: ${name}. Position: ${position}`
  }
  bestDepartment() {
    type BestDepatments = Record<Department, Salary>
    const bestDepartments: BestDepatments = {}

    Object.entries(this.departments).forEach(([department, employee]) => {
      const totalSalary = employee
        .map((emp) => emp.salary)
        .reduce((acc, curr) => (acc += curr))

      bestDepartments[department] = totalSalary / employee.length
    })

    let maxSalary = 0
    let bestDepartment: keyof BestDepatments = ''

    Object.entries(bestDepartments).forEach(([department, avgSalary]) => {
      if (avgSalary > maxSalary) {
        maxSalary = avgSalary
        bestDepartment = department
      }
    })

    let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestDepartments[
      bestDepartment
    ].toFixed(2)}\n`

    this.departments[bestDepartment]
      .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
      .forEach((emp) => {
        const employee = `${emp.name} ${emp.salary} ${emp.position}\n`
        result += employee
      })

    return result.trim()
  }
}

const c = new Company()
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction')
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction')
c.addEmployee('Slavi', 500, 'dyer', 'Construction')
c.addEmployee('Stan', 2000, 'architect', 'Construction')
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing')
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing')
c.addEmployee('Gosho', 1350, 'HR', 'Human resources')
console.log(c.bestDepartment())

export {}
