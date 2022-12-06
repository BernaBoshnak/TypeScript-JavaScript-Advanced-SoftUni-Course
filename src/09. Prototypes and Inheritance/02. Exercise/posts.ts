function solution() {
  type Title = string
  type Content = string
  type Likes = number
  type Dislikes = number
  type Views = number

  class Post {
    constructor(private title: Title, private content: Content) {}

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`
    }
  }

  type PostParamsType = ConstructorParameters<typeof Post>

  class SocialMediaPost extends Post {
    private comments: string[]

    constructor(
      title: PostParamsType[0],
      content: PostParamsType[1],
      private likes: Likes,
      private dislikes: Dislikes,
    ) {
      super(title, content)
      this.comments = []
    }

    addComment(comment: string) {
      return this.comments.push(comment)
    }

    toString() {
      const result =
        super.toString() + `\nRating: ${this.likes - this.dislikes}`
      const comments =
        this.comments.length > 0
          ? `Comments:\n${this.comments
              .map((comment) => ` * ${comment}`)
              .join('\n')}`
          : ''
      return [result, comments].join('\n').trim()
    }
  }

  class BlogPost extends Post {
    constructor(
      title: PostParamsType[0],
      content: PostParamsType[1],
      private views: Views,
    ) {
      super(title, content)
    }

    view() {
      this.views++
      return this
    }

    toString() {
      return super.toString() + `\nViews: ${this.views}`
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost,
  }
}

const classes = solution()

const post = new classes.Post('Post', 'Content')
console.log(post.toString())

const scm = new classes.SocialMediaPost('TestTitle', 'TestContent', 25, 30)
scm.addComment('Good post')
scm.addComment('Very good post')
scm.addComment('Wow!')
console.log(scm.toString())

export {}
