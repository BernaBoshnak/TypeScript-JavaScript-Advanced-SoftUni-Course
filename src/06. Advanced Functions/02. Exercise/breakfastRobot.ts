import { Entries } from 'type-fest'

type Microelements = {
  protein: number
  carbohydrate: number
  fat: number
  flavour: number
}

type Recipes = {
  apple: Microelements
  lemonade: Microelements
  burger: Microelements
  eggs: Microelements
  turkey: Microelements
}

type Commands = {
  restock: (microelement: keyof Microelements, quantity: number) => string
  prepare: (product: keyof Recipes, quantity: number) => string
  report: () => string
}

type PrepareCommandName = 'prepare'
type RestockCommandName = 'restock'

type PrepareCommand = `${PrepareCommandName} ${keyof Recipes} ${number}`
type RestockCommand = `${RestockCommandName} ${keyof Microelements} ${number}`
type ReportCommand = 'report'

function solution() {
  const microelements: Microelements = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  }

  const recipes: Recipes = {
    apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
    lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
    burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  }

  const commands: Commands = {
    restock: (microelement, quantity) => {
      microelements[microelement] += quantity
      return 'Success'
    },

    prepare: (product, quantity) => {
      const productMicroelements = recipes[product]
      const recipe = Object.entries(productMicroelements) as Entries<
        typeof productMicroelements
      >

      for (const [microelement, defaultQuantity] of recipe) {
        if (microelements[microelement] < defaultQuantity * quantity) {
          return `Error: not enough ${microelement} in stock`
        }
      }

      recipe.forEach(([microelement, defaultQuantity]) => {
        microelements[microelement] -= defaultQuantity * quantity
      })

      return 'Success'
    },

    report: () =>
      Object.entries(microelements)
        .map(([microelement, count]) => `${microelement}=${count}`)
        .join(' '),
  }

  return (input: PrepareCommand | RestockCommand | ReportCommand) => {
    const chunks = input.split(' ')
    const [command] = chunks as [keyof Commands]

    if (command === 'prepare') {
      const [, recipe, count] = chunks as [never, keyof Recipes, string]
      return commands[command](recipe, Number(count))
    }

    if (command === 'restock') {
      const [, microelement, count] = chunks as [
        never,
        keyof Microelements,
        string,
      ]
      return commands[command](microelement, Number(count))
    }

    if (command === 'report') {
      return commands[command]()
    }
  }
}

const manager = solution()
console.log(manager('prepare turkey 1'))
console.log(manager('restock protein 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock carbohydrate 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('report'))

export {}
