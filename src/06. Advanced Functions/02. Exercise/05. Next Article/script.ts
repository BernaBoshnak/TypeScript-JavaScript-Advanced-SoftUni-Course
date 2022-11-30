type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getArticleGenerator(articles: Array<string>) {
  const output = document.getElementById('content') as Nullable<HTMLDivElement>
  if (!output) {
    return
  }
  const ourCopy = articles.slice()

  return function showNext() {
    if (ourCopy[0]) {
      const article = document.createElement('article')
      article.textContent = ourCopy.shift() || ''
      output.appendChild(article)
    }
    return showNext
  }
}

export {}
