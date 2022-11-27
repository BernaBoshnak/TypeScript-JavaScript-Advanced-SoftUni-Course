type Command = 'add' | 'remove'
type Word = string
type Data = `${Command} ${Word}` | 'print'

function listProcessor(input: Data[]) {
  const commandProcessor = (() => {
    let wordList: Word[] = []

    return {
      add: (word: Word) => wordList.push(word),
      remove: (word: Word) => (wordList = wordList.filter((x) => x !== word)),
      print: () => console.log(wordList.join(',')),
    }
  })()

  input.forEach((line) => {
    const [command, str] = line.split(' ') as [Command | 'print', Word]
    commandProcessor[command](str)
  })
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])

export {}
