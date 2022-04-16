import { describe, expect, it } from 'vitest'
import categories from '../data/category.json'
import problems from '../data/problems.json'

describe('every topic should have category', () => {
  const idSet = new Set<string>()
  for (const category of categories) {
    for (const problem of category.problems)
      idSet.add(String(problem.id))
  }

  it.each(problems.map((p: any) => [`${p.id}`]) as string[][])('%s', (id: string) => {
    expect(idSet.has(id)).toBe(true)
  })
})
