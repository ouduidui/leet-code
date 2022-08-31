/**
 * 栈模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param pushed
 * @param popped
 * @returns
 */
export function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack: number[] = []
  let poppedIndex = 0

  for (const pushNum of pushed) {
    stack.push(pushNum)
    while (stack.length && stack[stack.length - 1] === popped[poppedIndex]) {
      stack.pop()
      poppedIndex++
    }
  }

  return stack.length === 0 && poppedIndex === popped.length
}
