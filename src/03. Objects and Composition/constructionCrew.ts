interface Worker {
  weight: number
  experience: number
  levelOfHydrated: number
  dizziness: boolean
}

function constructionCrew(worker: Worker) {
  const kgPerYearExperience = 0.1

  if (worker.dizziness) {
    worker.levelOfHydrated +=
      worker.weight * kgPerYearExperience * worker.experience
    worker.dizziness = false
  }

  return worker
}

console.log(
  constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  }),
)

export {}
