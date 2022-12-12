type Budget = number
type Recipes = {
  recipeName: string
  productsList: string[]
}
type Product = [string, number]
type Name = string
type Dish = string
type Guests = Record<Name, Dish>

class ChristmasDinner {
  private _budget: Budget
  private dishes: Recipes[]
  private products: string[]
  private guests: Guests

  constructor(budget: Budget) {
    this._budget = budget
    this.dishes = []
    this.products = []
    this.guests = {}
  }

  get budget() {
    return this._budget
  }

  set budget(value) {
    if (value < 0) {
      throw new Error('The budget cannot be a negative number')
    }
    this._budget = value
  }

  shopping([type, price]: Product) {
    if (price > this.budget) {
      throw new Error('Not enough money to buy this product')
    }
    this.budget -= price
    this.products.push(type)

    return `You have successfully bought ${type}!`
  }

  recipes(recipe: {
    recipeName: Recipes['recipeName']
    productsList: Recipes['productsList']
  }) {
    if (recipe.productsList.some((p) => this.products.includes(p) === false)) {
      throw new Error('We do not have this product')
    }

    this.dishes.push(recipe)
    return `${recipe.recipeName} has been successfully cooked!`
  }

  inviteGuests(name: Name, dish: string) {
    if (this.dishes.some((d) => d.recipeName === dish) === false) {
      throw new Error('We do not have this dish')
    } else if (Object.prototype.hasOwnProperty.call(this.guests, name)) {
      throw new Error('This guest has already been invited')
    }

    this.guests[name] = dish
    return `You have successfully invited ${name}!`
  }

  showAttendance() {
    return Object.entries(this.guests)
      .reduce((acc: string[], [guestName, dish]) => {
        if (this.dishes) {
          const recipe = this.dishes.find((d) => d.recipeName === dish)

          if (recipe) {
            acc.push(
              `${guestName} will eat ${dish}, which consists of ${recipe.productsList.join(
                ', ',
              )}`,
            )
          }
        }
        return acc
      }, [])
      .join('\n')
  }
}

const dinner = new ChristmasDinner(300)

dinner.shopping(['Salt', 1])
dinner.shopping(['Beans', 3])
dinner.shopping(['Cabbage', 4])
dinner.shopping(['Rice', 2])
dinner.shopping(['Savory', 1])
dinner.shopping(['Peppers', 1])
dinner.shopping(['Fruits', 40])
dinner.shopping(['Honey', 10])

dinner.recipes({
  recipeName: 'Oshav',
  productsList: ['Fruits', 'Honey'],
})
dinner.recipes({
  recipeName: 'Folded cabbage leaves filled with rice',
  productsList: ['Cabbage', 'Rice', 'Salt', 'Savory'],
})
dinner.recipes({
  recipeName: 'Peppers filled with beans',
  productsList: ['Beans', 'Peppers', 'Salt'],
})

dinner.inviteGuests('Ivan', 'Oshav')
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice')
dinner.inviteGuests('Georgi', 'Peppers filled with beans')

console.log(dinner.showAttendance())

export {}
