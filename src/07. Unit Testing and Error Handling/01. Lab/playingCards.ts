type ValidFaces =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'
  | 'A'
type ValidCards = 'S' | 'H' | 'D' | 'C'
type UTF_CodeLiterals = {
  S: '\u2660'
  H: '\u2665'
  D: '\u2666'
  C: '\u2663'
}

function playingCards(face: ValidFaces, suit: ValidCards) {
  const UTF_CodeLiterals: UTF_CodeLiterals = {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663',
  }

  return {
    face,
    suit,
    toString() {
      return `${face}${UTF_CodeLiterals[suit]}`
    },
  }
}

const myCard2 = playingCards('10', 'H')
console.log(myCard2.toString())

export {}
