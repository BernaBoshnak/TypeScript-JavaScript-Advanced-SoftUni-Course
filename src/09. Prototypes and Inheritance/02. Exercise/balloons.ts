function createBalloons() {
  type Color = string
  type GasWeight = number
  type Length = number
  type Text = string

  class Balloon {
    constructor(public color: Color, public gasWeight: GasWeight) {
      this.color = color
      this.gasWeight = gasWeight
    }
  }

  type BalloonParamsType = ConstructorParameters<typeof Balloon>

  class PartyBalloon extends Balloon {
    private _ribbon: {
      color: Color
      length: Length
    }

    constructor(
      color: BalloonParamsType[0],
      gasWeight: BalloonParamsType[1],
      ribbonColor: Color,
      ribbonLength: Length,
    ) {
      super(color, gasWeight)
      this._ribbon = {
        color: ribbonColor,
        length: ribbonLength,
      }
    }

    get ribbon() {
      return this._ribbon
    }
  }

  type PartyBalloonParams = ConstructorParameters<typeof PartyBalloon>

  class BirthdayBalloon extends PartyBalloon {
    private _text: Text

    constructor(
      color: PartyBalloonParams[0],
      gasWeight: PartyBalloonParams[1],
      ribbonColor: PartyBalloonParams[2],
      ribbonLength: PartyBalloonParams[3],
      text: Text,
    ) {
      super(color, gasWeight, ribbonColor, ribbonLength)
      this._text = text
    }

    get text() {
      return this._text
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  }
}

const ballons = createBalloons()
const testBalloon = new ballons.Balloon('purple', 20)
console.log(testBalloon)

const party = new ballons.PartyBalloon('red', 10, 'white', 50)
console.log(party)

const birthday = new ballons.BirthdayBalloon(
  'black',
  15,
  'yellow',
  70,
  'birthday',
)
console.log(birthday.text)
console.log(birthday.ribbon)

export {}
