type Factory = Record<string, number | boolean>

function objectFactory(input: string) {
  const propList: Factory[] = JSON.parse(input)

  const result = propList.reduce(
    (acc: Factory, x: Factory) => ({ ...acc, ...x }),
    {},
  )

  console.log(result)
}

objectFactory(
  `[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`,
)

export {}
