function heroicInventory(input: Array<string>) {
  type HeroesData = {
    name: string
    level: number
    items: string[]
  }
  const heroes: HeroesData[] = []

  for (const line of input) {
    const [name, level, items] = line.split(' / ')
    const heroesData: HeroesData = {
      name,
      level: Number(level),
      items: items ? items.split(', ') : [],
    }

    heroes.push(heroesData)
  }
  console.log(JSON.stringify(heroes))
}

heroicInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
])

export {}
