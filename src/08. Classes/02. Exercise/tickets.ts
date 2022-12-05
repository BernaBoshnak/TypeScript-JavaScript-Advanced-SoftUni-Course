type Criteria = {
  destination: string
  status: string
  price: number
}

type Tickets =
  `${Criteria['destination']}|${Criteria['price']}|${Criteria['status']}`

function tickets(tickets: Tickets[], criteria: keyof Criteria) {
  class Ticket {
    constructor(
      public destination: Criteria['destination'],
      public price: Criteria['price'],
      public status: Criteria['status'],
    ) {}

    static getTicket(line: string) {
      const [destination, price, status] = line.split('|') as [
        Criteria['destination'],
        Criteria['price'],
        Criteria['status'],
      ]

      return new Ticket(destination, Number(price), status)
    }
  }

  const sortMapper = {
    destination: (a: Ticket, b: Ticket) =>
      a.destination.localeCompare(b.destination),
    price: (a: Ticket, b: Ticket) => a.price - b.price,
    status: (a: Ticket, b: Ticket) => a.status.localeCompare(b.status),
  }

  return tickets.map(Ticket.getTicket).sort(sortMapper[criteria])
}

console.log(
  tickets(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed',
    ],
    'destination',
  ),
)

export {}
