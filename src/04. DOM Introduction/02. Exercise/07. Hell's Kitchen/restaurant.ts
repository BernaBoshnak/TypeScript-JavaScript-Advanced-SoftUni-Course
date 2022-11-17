type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const bestRestaurantP =
    document.querySelector<HTMLParagraphElement>('.bestRest_p')
  const workersP = document.querySelector<HTMLParagraphElement>('.workers_p')
  const btn = document.getElementById('btnSend') as Nullable<HTMLButtonElement>
  btn?.addEventListener('click', onClick)

  function onClick() {
    const textArea = document.querySelector<HTMLTextAreaElement>('.textArea')

    if (!textArea) {
      return
    }

    const arr: string[] = JSON.parse(textArea.value)

    type RestaurantName = string
    type WorkerData = {
      workerName: string
      salary: number
    }
    type RestaurantData = {
      restaurantName?: RestaurantName
      workers: WorkerData[]
      avgSalary: number
      bestSalary: number
    }
    type Restaurants = Record<RestaurantName, RestaurantData>

    const restaurants: Restaurants = {}

    arr.forEach((line) => {
      const [restaurantName, workersInput] = line.split(' - ')
      const workersArr = workersInput.split(', ')
      let workers: WorkerData[] = []

      for (const worker of workersArr) {
        const [workerName, salary] = worker.split(' ')
        const workerData: WorkerData = {
          workerName,
          salary: Number(salary),
        }

        workers.push(workerData)
      }

      if (restaurants[restaurantName]) {
        workers = workers.concat(restaurants[restaurantName].workers)
      }

      workers.sort((worker1, worker2) => worker2.salary - worker1.salary)

      const bestSalary = workers[0].salary
      const avgSalary =
        workers.reduce((sum, workers) => sum + workers.salary, 0) /
        workers.length

      const restaurantData: RestaurantData = {
        workers,
        avgSalary,
        bestSalary,
      }

      restaurants[restaurantName] = restaurantData
    })

    let bestRestaurantSalary = 0
    let bestRestaurant: RestaurantData = {} as RestaurantData

    for (const restaurantName in restaurants) {
      if (restaurants[restaurantName].avgSalary > bestRestaurantSalary) {
        const bestRestaurantData: RestaurantData = {
          restaurantName,
          workers: restaurants[restaurantName].workers,
          bestSalary: restaurants[restaurantName].bestSalary,
          avgSalary: restaurants[restaurantName].avgSalary,
        }

        bestRestaurant = bestRestaurantData

        bestRestaurantSalary = restaurants[restaurantName].avgSalary
      }
    }

    if (bestRestaurantP && workersP) {
      bestRestaurantP.textContent = `Name: ${
        bestRestaurant.restaurantName
      } Average Salary: ${bestRestaurant.avgSalary.toFixed(
        2,
      )} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

      const workersResult: string[] = []

      bestRestaurant.workers.forEach((worker) => {
        workersResult.push(
          `Name: ${worker.workerName} With Salary: ${worker.salary}`,
        )
      })

      workersP.textContent = workersResult.join(' ')
    }
  }
}

export {}
