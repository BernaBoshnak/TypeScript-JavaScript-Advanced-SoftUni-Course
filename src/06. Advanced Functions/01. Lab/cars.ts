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

  const commands = (() => ({
    create: (
      name: ProjectName,
      inherit: ProjectName,
      parentName: ProjectName,
    ) => (data[name] = inherit ? Object.create(data[parentName]) : {}),
    set: (name: ProjectName, key: ProjectName, value: ProjectName) =>
      (data[name][key] = value),
    print: (name: ProjectName) => {
      const result: string[] = []

      for (const key in data[name]) {
        result.push(`${key}:${data[name][key]}`)
      }
      console.log(result.join(', '))
    },
  }))()

  input.forEach((line) => {
    const [command, name, key, value] = line.split(' ') as [
      Commands,
      ProjectName,
      ProjectName,
      ProjectName,
    ]

    commands[command](name, key, value)
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
