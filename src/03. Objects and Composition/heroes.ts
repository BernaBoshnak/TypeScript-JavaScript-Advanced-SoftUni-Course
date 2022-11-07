interface State {
  name: string
  health: number
  mana?: number
  stamina?: number
}

function solve() {
  const canFight = (state: State) => ({
    fight: () => {
      console.log(`${state.name} slashes at the foe!`)
      if (state.stamina) {
        state.stamina--
      }
    },
  })

  const canCast = (state: State) => ({
    cast: (spell: string) => {
      console.log(`${state.name} cast ${spell}`)
      if (state.mana) {
        state.mana--
      }
    },
  })

  const fighter = (name: string) => {
    const state: State = {
      name,
      health: 100,
      stamina: 100,
    }
    return Object.assign(state, canFight(state))
  }

  const mage = (name: string) => {
    const state: State = {
      name,
      health: 100,
      mana: 100,
    }
    return Object.assign(state, canCast(state))
  }

  return { mage: mage, fighter: fighter }
}

const create = solve()

const scorcher = create.mage('Scorcher')
scorcher.cast('fireball')
scorcher.cast('thunder')
scorcher.cast('light')

const scorcher2 = create.fighter('Scorcher 2')
scorcher2.fight()

console.log(scorcher2.stamina)
console.log(scorcher.mana)

export {}
