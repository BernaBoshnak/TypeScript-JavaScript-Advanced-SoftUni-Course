type TargetFlover = string

function pieceOfPie(
  pieFlavors: Array<string>,
  startFlavor: TargetFlover,
  endFlavor: TargetFlover,
) {
  const start = pieFlavors.indexOf(startFlavor)
  const end = pieFlavors.indexOf(endFlavor)
  const result = pieFlavors.slice(start, end + 1)

  return result
}

console.log(
  pieceOfPie(
    [
      'Apple Crisp',
      'Mississippi Mud Pie',
      'Pot Pie',
      'Steak and Cheese Pie',
      'Butter Chicken Pie',
      'Smoked Fish Pie',
    ],
    'Pot Pie',
    'Smoked Fish Pie',
  ),
)

export {}
