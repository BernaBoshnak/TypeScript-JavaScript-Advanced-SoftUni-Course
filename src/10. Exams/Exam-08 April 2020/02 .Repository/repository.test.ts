// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { expect } from 'chai'
import Repository from './repository'

describe('Repository test', () => {
  let properties = {}
  beforeEach(
    () =>
      (properties = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object',
      })),
  )

  describe('', () => {
    it('constructor', () => {
      expect(properties).to.be.an.instanceOf(Repository)
      expect(properties.data).to.deep.equal(new Map())
      expect(properties.nextId()).to.equal(0)
      expect(properties.count).to.equal(0)
    })
  })

  describe('', () => {
    it('add', () => {
      const entity = {
        name: 'Pesho',
        age: 22,
        birthday: new Date(1997, 4, 14),
      }

      expect(properties.add(entity)).to.equal(0)
      expect(properties.add(entity)).to.equal(1)
      expect(properties.data.get(1)).to.deep.equal(entity)
      expect(properties.count).to.equal(2)
    })

    it('add', () => {
      const entity = {
        nameSomething: 'Pesho',
        age: 22,
        birthday: new Date(1997, 4, 14),
      }
      expect(() => {
        properties.add(entity)
      }).to.throw(`Property name is missing from the entity!`)
    })

    it('add', () => {
      const entity = {
        name: 0,
        age: 22,
        birthday: new Date(1997, 4, 14),
      }
      expect(() => {
        properties.add(entity)
      }).to.throw(`Property name is not of correct type!`)
    })
  })

  describe('', () => {
    it('getId', () => {
      const entity = {
        name: 'Pesho',
        age: 20,
        birthday: new Date(1997, 4, 14),
      }

      const entity2 = {
        name: 'Pesho2',
        age: 22,
        birthday: new Date(1997, 4, 14),
      }
      properties.add(entity)
      expect(properties.add(entity2)).to.equal(1)
      expect(() => {
        properties.getId(8)
      }).to.throw(`Entity with id: 8 does not exist!`)
      expect(properties.getId(0)).to.deep.equal(entity)
    })
  })

  describe('', () => {
    it('update', () => {
      const entity = {
        name: 'Pesho',
        age: 20,
        birthday: new Date(1997, 4, 14),
      }

      const entity2 = {
        name: 'Pesho2',
        age: 22,
        birthday: new Date(1997, 4, 14),
      }

      const entity3 = {
        name: 'Pesho3',
        age: 23,
        birthday: new Date(1997, 4, 14),
      }

      const entity4 = {
        nameString: 'Pesho4',
        age: 24,
        birthday: new Date(1997, 4, 14),
      }

      const entity5 = {
        name: 0,
        age: 25,
        birthday: new Date(1997, 4, 14),
      }
      properties.add(entity)
      properties.add(entity2)

      expect(() => {
        properties.update(8, entity3)
      }).to.throw(`Entity with id: 8 does not exist!`)
      expect(() => {
        properties.update(0, entity4)
      }).to.throw(`Property name is missing from the entity!`)
      expect(() => {
        properties.update(0, entity5)
      }).to.throw(`Property name is not of correct type!`)

      properties.update(0, entity3)

      expect(properties.count).to.equal(2)
      expect(properties.getId(0)).to.deep.equal(entity3)
      expect(Array.from(properties.data.entries())).to.deep.equal([
        [
          0,
          {
            name: 'Pesho3',
            age: 23,
            birthday: new Date(1997, 4, 14),
          },
        ],
        [
          1,
          {
            name: 'Pesho2',
            age: 22,
            birthday: new Date(1997, 4, 14),
          },
        ],
      ])
    })
  })

  describe('', () => {
    it('del', () => {
      expect(() => {
        properties.del(8)
      }).to.throw(`Entity with id: 8 does not exist!`)
      const entity = {
        name: 'Pesho',
        age: 20,
        birthday: new Date(1997, 4, 14),
      }

      const entity2 = {
        name: 'Pesho2',
        age: 22,
        birthday: new Date(1997, 4, 14),
      }

      const entity3 = {
        name: 'Pesho3',
        age: 22,
        birthday: new Date(1997, 4, 14),
      }
      properties.add(entity)
      properties.add(entity2)
      properties.add(entity3)

      expect(properties.count).to.equal(3)
      properties.del(0)
      properties.del(2)

      expect(properties.count).to.equal(1)
      expect(Array.from(properties.data.entries())).to.deep.equal([
        [1, entity2],
      ])
    })
  })
})
