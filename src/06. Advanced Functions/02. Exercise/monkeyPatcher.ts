type Post = {
  id: string
  author: string
  content: string
  upvotes: number
  downvotes: number
}

type UpvoteCommandName = 'upvote'
type DownvoteCommandName = 'downvote'
type ScoreCommandName = 'score'

type Commands = UpvoteCommandName | DownvoteCommandName | ScoreCommandName

const solution = (() => {
  const commands = {
    upvote: (post: Post) => post.upvotes++,
    downvote: (post: Post) => post.downvotes++,
    score: (post: Post) => {
      const { upvotes, downvotes } = post
      const total = upvotes + downvotes

      const obfuscation = Math.ceil((25 / 100) * Math.max(upvotes, downvotes))
      const obfuscationUpvotes = upvotes + obfuscation
      const obfuscationDownvotes = downvotes + obfuscation
      const balance = obfuscationUpvotes - obfuscationDownvotes
      let rating = ''

      if (total < 10) {
        rating = 'new'
      } else if (upvotes > total * (66 / 100)) {
        rating = 'hot'
      } else if (balance >= 0 && (upvotes > 100 || downvotes > 100)) {
        rating = 'controversial'
      } else if (balance < 0) {
        rating = 'unpopular'
      } else {
        rating = 'new'
      }

      if (total > 50) {
        return [obfuscationUpvotes, obfuscationDownvotes, balance, rating]
      }

      return [upvotes, downvotes, balance, rating]
    },
  }

  return { call: (post: Post, command: Commands) => commands[command](post) }
})()

const post: Post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100,
}

solution.call(post, 'upvote')
solution.call(post, 'downvote')
let score = solution.call(post, 'score')
for (let i = 0; i < 50; i++) {
  solution.call(post, 'downvote')
}
score = solution.call(post, 'score')
console.log(score)

export {}
