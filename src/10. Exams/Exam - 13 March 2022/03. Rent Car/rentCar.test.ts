// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import rentCar from './rentCar'

describe('test', () => {
  describe('searchCar', () => {
    it('', () => {
      const shop = ['Volkswagen', 'BMW', 'Audi']

      expect(() => rentCar.searchCar(shop)).to.equal(
        `There is ${findModel.length} car of model ${model} in the catalog!`,
      )
    })
  })
})
