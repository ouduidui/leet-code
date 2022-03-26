export class Bank {
  balance: number[]

  constructor(balance: number[]) {
    this.balance = [...balance]
  }

  transfer(account1: number, account2: number, money: number): boolean {
    const len = this.balance.length
    if (account1 > len || account2 > len || money > this.balance[account1 - 1])
      return false

    this.balance[account1 - 1] -= money
    this.balance[account2 - 1] += money
    return true
  }

  deposit(account: number, money: number): boolean {
    if (account > this.balance.length) return false

    this.balance[account - 1] += money
    return true
  }

  withdraw(account: number, money: number): boolean {
    const len = this.balance.length
    if (account > len || this.balance[account - 1] < money)
      return false

    this.balance[account - 1] -= money
    return true
  }
}
