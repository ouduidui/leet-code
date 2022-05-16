import { expect, it } from 'vitest'
import { Bank } from '.'

it('简易银行系统', () => {
  const bank = new Bank([10, 100, 20, 50, 30])
  expect(bank.withdraw(3, 10)).toBe(true)
  expect(bank.transfer(5, 1, 20)).toBe(true)
  expect(bank.deposit(5, 20)).toBe(true)
  expect(bank.transfer(3, 4, 15)).toBe(false)
  expect(bank.withdraw(10, 50)).toBe(false)
})
