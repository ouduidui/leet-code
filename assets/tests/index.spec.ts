import { describe, expect, it } from 'vitest'
import categories from '../data/categories.json'
import topics from '../data/topics.json'

describe('every topic should have category', () => {
  const idSet = new Set<string>()
  for (const category of categories) {
    for (const topic of category.topics)
      idSet.add(String(topic.id))
  }

  it.each(topics.map((p: any) => [`${p.id}`]) as string[][])('%s', (id: string) => {
    expect(idSet.has(id)).toBe(true)
  })
})
