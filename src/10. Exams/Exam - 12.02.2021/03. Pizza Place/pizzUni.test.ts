// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import pizzUni from './pizzUni'

describe('test', () => {
  describe('makeAnOrder(obj)', () => {
    it('', () => {
      const pizza = { orderedPizza: 'pizza', orderedDrink: 'drink' }
      const pizza2 = { orderedPizza: 'pizza' }
      const pizza3 = { orderedDrink: 'drink' }
      const pizza4 = {}

      expect(() => pizzUni.makeAnOrder(pizza3)).to.throw(
        'You must order at least 1 Pizza to finish the order.',
      )
      expect(() => pizzUni.makeAnOrder(pizza4)).to.throw(
        'You must order at least 1 Pizza to finish the order.',
      )
      expect(pizzUni.makeAnOrder(pizza2)).to.equal(
        `You just ordered ${pizza2.orderedPizza}`,
      )
      expect(pizzUni.makeAnOrder(pizza)).to.equal(
        `You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`,
      )
    })
  })

  describe('getRemainingWork(statusArr)', () => {
    it('', () => {
      const statusArr = [
        { pizzaName: 'pizza', status: 'ready' },
        { pizzaName: 'pizza2', status: 'ready' },
        { pizzaName: 'pizza3', status: 'preparing' },
        { pizzaName: 'pizza4', status: 'preparing' },
      ]

      const statusArr2 = [
        { pizzaName: 'pizza3', status: 'preparing' },
        { pizzaName: 'pizza4', status: 'preparing' },
      ]

      expect(pizzUni.getRemainingWork(statusArr)).to.equal(
        `The following pizzas are still preparing: pizza3, pizza4.`,
      )
      expect(pizzUni.getRemainingWork(statusArr2)).to.equal(
        `The following pizzas are still preparing: pizza3, pizza4.`,
      )
    })
  })

  describe('orderType(totalSum, typeOfOrder)', () => {
    const orderTypeDelivery = 'Delivery'
    const orderTypeCarryOut = 'Carry Out'
    const totalSum = 100
    const totalSum2 = -100
    const totalSum3 = 0

    expect(pizzUni.orderType(totalSum, orderTypeDelivery)).to.equal(100)
    expect(pizzUni.orderType(totalSum, orderTypeCarryOut)).to.equal(90)

    expect(pizzUni.orderType(totalSum2, orderTypeDelivery)).to.equal(-100)
    expect(pizzUni.orderType(totalSum2, orderTypeCarryOut)).to.equal(-90)

    expect(pizzUni.orderType(totalSum3, orderTypeDelivery)).to.equal(0)
    expect(pizzUni.orderType(totalSum3, orderTypeCarryOut)).to.equal(0)
  })
})
