import { describe, expect, it } from 'vitest'
import { maxConsecutiveAnswers } from '.'

describe('考试的最大困扰度', () => {
  testCase(maxConsecutiveAnswers)
})

function testCase(fn: (answerKey: string, k: number) => number) {
  it.each([
    ['TTFF', 2, 4],
    ['TFFT', 1, 3],
    ['TTFTTFTT', 1, 5],
  ])('示例%#', (answerKey, k, expected) => {
    expect(fn(answerKey, k)).toBe(expected)
  })
}
