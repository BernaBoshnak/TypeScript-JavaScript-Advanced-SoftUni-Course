type ProjectName = string
type CreateCommand = 'create'
type InheritCommand = 'inherit'
type SetCommand = 'set'
type PrintCommand = 'print'
type Commands = CreateCommand | SetCommand | PrintCommand
type Create = `${CreateCommand} ${ProjectName}`
type CreateAndInherit = `${Create} ${InheritCommand} ${ProjectName}`
type SetProp = `${SetCommand} ${ProjectName} ${ProjectName} ${ProjectName}`
type Print = `${PrintCommand} ${ProjectName}`
type CarData = Record<ProjectName, ProjectName>
type Data = Create | CreateAndInherit | SetProp | Print

function solve(input: Data[]) {
  const data: Record<ProjectName, CarData> = {}

  const commands = (() => {
    // TS Function overloads
    function create(name: ProjectName): void
    function create(
      name: ProjectName,
      inherit: boolean,
      parentName: ProjectName,
    ): void
    // JS implementation
    function create(
      name: ProjectName,
      inherit?: boolean,
      parentName?: ProjectName,
    ): void {
      if (inherit && parentName) {
        data[name] = Object.create(data[parentName])
      } else {
        data[name] = {}
      }
    }

    const set = (name: ProjectName, key: ProjectName, value: ProjectName) => {
      return (data[name][key] = value)
    }

    const print = (name: ProjectName) => {
      const result: string[] = []

      for (const key in data[name]) {
        result.push(`${key}:${data[name][key]}`)
      }

      console.log(result.join(', '))
    }

    return { create, set, print }
  })()

  input.forEach((line) => {
    const [command, name, description, value] = line.split(' ') as [
      Commands,
      ProjectName,
      string | undefined,
      ProjectName | undefined,
    ]

    if (command === 'create') {
      if (description === 'inherit' && value) {
        commands[command](name, true, value)
      } else {
        commands[command](name)
      }
    }

    if (command === 'set' && description && value) {
      commands[command](name, description, value)
    }

    if (command === 'print') {
      commands[command](name)
    }
  })
}

solve([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
])

export {}
