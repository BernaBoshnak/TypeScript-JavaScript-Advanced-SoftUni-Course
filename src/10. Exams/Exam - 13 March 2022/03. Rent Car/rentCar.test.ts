// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import rentCar from './rentCar'

describe('rent cars', function () {
  this.sharedData = {}

  describe('search', function () {
    beforeEach(function () {
      this.shop = ['Volkswagen', 'BMW', 'Audi']
    })

    it('adds the found cars to the found list', function () {
      const [model] = this.shop
      expect(rentCar.searchCar(this.shop, model)).to.equal(
        `There is 1 car of model ${model} in the catalog!`,
      )
    })

    it('shows error on wrong input', function () {
      expect(() => rentCar.searchCar('non-array', 'bmw')).to.throw(
        'Invalid input!',
      )
      expect(() => rentCar.searchCar([], 100)).to.throw('Invalid input!')
    })

    it('shows error when no such cars in the catalogue', function () {
      const model = 'Opel'
      expect(() => rentCar.searchCar(this.shop, model)).to.throw(
        'There are no such models in the catalog!',
      )
    })
  })

  describe('calculates price', function () {
    beforeEach(function () {
      this.days = 2
      this.model = 'Volkswagen'
    })

    it('calculates the cost', function () {
      const cost = 20 * this.days
      expect(rentCar.calculatePriceOfCar(this.model, this.days)).to.equal(
        `You choose ${this.model} and it will cost $${cost}!`,
      )
    })

    it('shows error on wrong input', function () {
      expect(() => rentCar.calculatePriceOfCar(0, this.days)).to.throw(
        'Invalid input!',
      )
      expect(() => rentCar.calculatePriceOfCar(this.model, '')).to.throw(
        'Invalid input!',
      )
    })

    it('shows error when no such cars in the catalogue', function () {
      expect(() => rentCar.calculatePriceOfCar('Asap', this.days)).to.throw(
        'No such model in the catalog!',
      )
    })
  })

  describe('budget', function () {
    beforeEach(function () {
      this.days = 3
    })

    it('checks budget sufficiency', function () {
      expect(rentCar.checkBudget(30, this.days, 100)).to.equal(
        `You rent a car!`,
      )
      expect(rentCar.checkBudget(30, this.days, 90)).to.equal(`You rent a car!`)
      expect(rentCar.checkBudget(30, this.days, 10)).to.equal(
        'You need a bigger budget!',
      )
    })

    it('shows error on wrong input', function () {
      expect(() => rentCar.checkBudget('1', this.days, this.budget)).to.throw(
        'Invalid input!',
      )
      expect(() =>
        rentCar.checkBudget(this.costPerDay, '1', this.budget),
      ).to.throw('Invalid input!')
      expect(() =>
        rentCar.checkBudget(this.costPerDay, this.days, '1'),
      ).to.throw('Invalid input!')
      expect(() => rentCar.checkBudget('1', '2', '3')).to.throw(
        'Invalid input!',
      )
    })
  })
})
