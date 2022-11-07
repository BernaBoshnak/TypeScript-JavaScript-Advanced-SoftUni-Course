function calorieObject(input: Array<string>) {
  type FootName = string
  type Calories = number
  type CalorieObj = Record<FootName, Calories>

  const calorieObj: CalorieObj = {}

  for (let i = 0; i < input.length; i += 2) {
    calorieObj[input[i]] = Number(input[i + 1])
  }

  return calorieObj
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))

export {}
