import { expect } from 'chai'
import dealership from './dealership'

describe('test', () => {
  describe('newCarCost', () => {
    it('returns original price when model unsuporeted', () => {
      expect(dealership.newCarCost('a', 1)).to.equal(1)
    })

    it('returns discounted price', () => {
      expect(dealership.newCarCost('Audi A6 4K', 40000)).to.equal(20000)
    })
  })

  describe('carEquipment', () => {
    it('single element, single pick', () => {
      expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a'])
    })
    it('single element, single pick', () => {
      expect(dealership.carEquipment(['a', 'b', 'c'], [2])).to.deep.equal(['c'])
    })
    it('single element, single pick', () => {
      expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal([
        'a',
        'c',
      ])
    })
  })

  describe('euroCategory', () => {
    it('category is bellow threshold', () => {
      expect(dealership.euroCategory(1)).to.equal(
        'Your euro category is low, so there is no discount from the final price!',
      )
    })
    it('category is above threshold', () => {
      expect(dealership.euroCategory(5)).to.equal(
        'We have added 5% discount to the final price: 14250.',
      )
    })
    it('category is at threshold (edge case)', () => {
      expect(dealership.euroCategory(4)).to.equal(
        'We have added 5% discount to the final price: 14250.',
      )
    })
  })
})
