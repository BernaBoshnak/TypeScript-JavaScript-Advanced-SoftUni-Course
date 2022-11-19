type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function create(words: string[]) {
  const content = document.getElementById('content') as Nullable<HTMLDivElement>

  if (!content) {
    return
  }

  for (let i = 0; i < words.length; i++) {
    const div = document.createElement('div')
    const paragraph = document.createElement('p')
    paragraph.textContent = words[i]
    paragraph.style.display = 'none'
    div.appendChild(paragraph)

    div.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLDivElement
      const p = target.children[0] as HTMLParagraphElement
      const isVisible = p.style.display === 'block'
      p.style.display = isVisible ? 'none' : 'block'
    })

    content.appendChild(div)
  }
}

export {}
