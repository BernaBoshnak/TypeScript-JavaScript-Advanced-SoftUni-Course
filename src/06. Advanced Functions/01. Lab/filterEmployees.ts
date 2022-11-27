type Criteria = string | 'all'
interface Employee {
  id: string
  first_name: string
  last_name: string
  email: string
  gender: string
}

function filterEmployees(data: string, criteria: Criteria) {
  const employees: Employee[] = JSON.parse(data)
  let filteredEmployees: Employee[] = []

  if (criteria !== 'all') {
    const [propName, propValue] = criteria.split('-') as [
      keyof Employee,
      string,
    ]

    filteredEmployees = employees.filter(
      (employee) => employee[propName] === propValue,
    )
  }

  console.log(
    filteredEmployees
      .map(
        (employee, i) =>
          `${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`,
      )
      .join('\n'),
  )
}

const jsonData = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`

filterEmployees(jsonData, 'last_name-Johnson')

export {}
