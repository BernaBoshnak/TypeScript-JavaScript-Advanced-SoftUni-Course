interface NewCustomer {
  firstName: string
  lastName: string
  personalId: number
}
interface Customer extends NewCustomer {
  totalMoney: number
  transactionInfo: Array<string>
}
type Amount = number

class Bank {
  private _bankName: string
  private allCustomers: Customer[]

  constructor(bankName: string) {
    this._bankName = bankName
    this.allCustomers = []
  }

  NewCustomer(NewCustomer: NewCustomer) {
    this.allCustomers.find((c) => {
      if (c.personalId === NewCustomer.personalId) {
        throw new Error(
          `${NewCustomer.firstName} ${NewCustomer.lastName} is already our customer!`,
        )
      }
    })
    this.allCustomers.push({
      ...NewCustomer,
      totalMoney: 0,
      transactionInfo: [],
    })

    return NewCustomer
  }

  depositMoney(personalId: NewCustomer['personalId'], amount: Amount) {
    const person = this.allCustomers.find((c) => {
      return c.personalId === personalId
    })

    if (!person) {
      throw new Error('We have no customer with this ID!')
    }

    person.totalMoney += amount

    const message = `${person.transactionInfo.length + 1}. ${
      person.firstName
    } ${person.lastName} made deposit of ${amount}$!`
    person.transactionInfo.push(message)
    return `${person.totalMoney}$`
  }

  withdrawMoney(personalId: NewCustomer['personalId'], amount: Amount) {
    const person = this.allCustomers.find((c) => {
      return c.personalId === personalId
    })

    if (!person) {
      throw new Error('We have no NewCustomer with this ID!')
    }

    if (person.totalMoney < amount) {
      throw new Error(
        `${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`,
      )
    }

    person.totalMoney -= amount
    const message = `${person.transactionInfo.length + 1}. ${
      person.firstName
    } ${person.lastName} withdrew ${amount}$!`
    person.transactionInfo.push(message)

    return `${person.totalMoney}$`
  }

  customerInfo(personalId: NewCustomer['personalId']) {
    const person = this.allCustomers.find((c) => {
      return c.personalId === personalId
    })

    if (!person) {
      throw new Error('We have no NewCustomer with this ID!')
    }

    let result = ''
    result += `Bank name: ${this._bankName}\n`
    result += `NewCustomer name: ${person.firstName} ${person.lastName}\n`
    result += `NewCustomer ID: ${person.personalId}\n`
    result += `Total Money: ${person.totalMoney}$\n`
    result += `Transactions:\n`

    Array.from(person.transactionInfo)
      .reverse()
      .forEach((info) => (result += `${info}\n`))

    return result
  }
}

const bank = new Bank('SoftUni Bank')

console.log(
  bank.NewCustomer({
    firstName: 'Svetlin',
    lastName: 'Nakov',
    personalId: 6233267,
  }),
)
console.log(
  bank.NewCustomer({
    firstName: 'Mihaela',
    lastName: 'Mileva',
    personalId: 4151596,
  }),
)

bank.depositMoney(6233267, 250)
console.log(bank.depositMoney(6233267, 250))
bank.depositMoney(4151596, 555)
console.log(bank.withdrawMoney(6233267, 125))
console.log(bank.customerInfo(6233267))

export {}
