type UserName = string
type Repliece = {
  id: string
  username: UserName
  content: string
}
type CommentsData = {
  id: number
  username: Repliece['username']
  content: Repliece['content']
  replies: Array<Repliece>
}

class Story {
  private _comments: CommentsData[]
  private _likes: string[]

  constructor(private title: string, private creator: string) {
    this._comments = []
    this._likes = []
  }

  get likes() {
    if (this._likes.length <= 0) {
      return `${this.title} has 0 likes`
    }

    if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`
    } else {
      return `${this._likes[0]} and ${
        this._likes.length - 1
      } others like this story!`
    }
  }

  like(username: UserName) {
    const user = this._likes.find((u) => u === username)

    if (user) {
      throw new Error(`You can't like the same story twice!`)
    }

    if (username === this.creator) {
      throw new Error(`You can't like your own story!`)
    } else {
      this._likes.push(username)
      return `${username} liked ${this.title}!`
    }
  }

  dislike(username: UserName) {
    const user = this._likes.find((u) => u === username)

    if (!user) {
      throw new Error(`You can't dislike this story!`)
    } else {
      const index = this._likes.indexOf(username)
      this._likes.splice(index, 1)
      return `${username} disliked ${this.title}`
    }
  }

  comment(
    username: UserName,
    content: CommentsData['content'],
    id: CommentsData['id'] | undefined,
  ) {
    const comment = this._comments.find((c) => c.id === id)

    if (!comment || !id) {
      this._comments.push({
        id: this._comments.length + 1,
        username,
        content,
        replies: [],
      })

      return `${username} commented on ${this.title}`
    } else {
      const replyId = `${id}.${comment.replies.length + 1}`
      comment.replies.push({ id: replyId, username, content })

      return `You replied successfully`
    }
  }

  toString(sortingType: UserName) {
    interface Sorting {
      [x: string]: (
        a: CommentsData | Repliece,
        b: CommentsData | Repliece,
      ) => number
    }

    const sorting: Sorting = {
      asc: (a, b) => Number(a.id) - Number(b.id),
      desc: (a, b) => Number(b.id) - Number(a.id),
      username: (a, b) => a.username.localeCompare(b.username),
    }

    const result = [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this._likes.length}`,
      `Comments:`,
    ]

    this._comments.sort(sorting[sortingType]).forEach((comment) => {
      result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)

      comment.replies.sort(sorting[sortingType]).forEach((reply) => {
        result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
      })
    })

    return result.join('\n')
  }
}

const art = new Story('My Story', 'Anny')

art.like('John')
console.log(art.likes)

art.dislike('John')
console.log(art.likes)

art.comment('Sammy', 'Some Content', undefined)
console.log(art.comment('Ammy', 'New Content', undefined))

art.comment('Zane', 'Reply', 1)
art.comment('Jessy', 'Nice :)', undefined)
console.log(art.comment('SAmmy', 'Reply@', 1))

console.log()
console.log(art.toString('username'))
console.log()
art.like('Zane')
console.log(art.toString('desc'))

export {}
