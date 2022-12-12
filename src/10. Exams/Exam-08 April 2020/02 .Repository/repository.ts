type Id = number
type Data = {
  [x: string]: string | number | Date
}

class Repository {
  private data: Map<number, Data>
  private nextId: () => Id

  constructor(private props: Data) {
    this.data = new Map()

    let id = 0
    this.nextId = function () {
      return id++
    }
  }

  get count() {
    return this.data.size
  }

  add(entity: Data) {
    this._validate(entity)
    const id = this.nextId()
    this.data.set(id, entity)
    return id
  }

  getId(id: Id) {
    if (!this.data.has(id)) {
      throw new Error(`Entity with id: ${id} does not exist!`)
    }

    return this.data.get(id)
  }

  update(id: Id, newEntity: Data) {
    if (!this.data.has(id)) {
      throw new Error(`Entity with id: ${id} does not exist!`)
    }

    this._validate(newEntity)
    this.data.set(id, newEntity)
  }

  del(id: Id) {
    if (!this.data.has(id)) {
      throw new Error(`Entity with id: ${id} does not exist!`)
    }

    this.data.delete(id)
  }

  _validate(entity: Data) {
    for (const propName in this.props) {
      if (!Object.prototype.hasOwnProperty.call(entity, propName)) {
        throw new Error(`Property ${propName} is missing from the entity!`)
      }
    }

    for (const propName in entity) {
      const val = entity[propName]

      if (typeof val !== this.props[propName]) {
        throw new TypeError(`Property ${propName} is not of correct type!`)
      }
    }
  }
}

const properties = {
  name: 'string',
  age: 'number',
  birthday: 'object',
}

const repository = new Repository(properties)

let entity = {
  name: 'Pesho',
  age: 22,
  birthday: new Date(1998, 0, 7),
}

repository.add(entity)
repository.add(entity)
console.log(repository.getId(0))
console.log(repository.getId(1))
entity = {
  name: 'Gosho',
  age: 22,
  birthday: new Date(1998, 0, 7),
}
repository.update(1, entity)
console.log(repository.getId(1))
repository.del(0)
console.log(repository.count)

export default Repository
