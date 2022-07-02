# 最低加油次数

> 难度：困难
>
> https://leetcode.cn/problems/minimum-number-of-refueling-stops/

## 题目

汽车从起点出发驶向目的地，该目的地位于出发位置东面 `target` 英里处。

沿途有加油站，每个 `station[i]` 代表一个加油站，它位于出发位置东面 `station[i][0]` 英里处，并且有 `station[i][1]` 升汽油。

假设汽车油箱的容量是无限的，其中最初有 `startFuel` 升燃料。它每行驶 `1` 英里就会用掉 `1` 升汽油。

当汽车到达加油站时，它可能停下来加油，将所有汽油从加油站转移到汽车中。

为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 `-1` 。

注意：如果汽车到达加油站时剩余燃料为 `0`，它仍然可以在那里加油。如果汽车到达目的地时剩余燃料为 `0`，仍然认为它已经到达目的地。

### 示例

#### 示例 1：

```
输入：target = 1, startFuel = 1, stations = []
输出：0
解释：我们可以在不加油的情况下到达目的地。
```

#### 示例 2：

```
输入：target = 100, startFuel = 1, stations = [[10,100]]
输出：-1
解释：我们无法抵达目的地，甚至无法到达第一个加油站。
```

#### 示例 3：

```
输入：target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
输出：2
解释：
我们出发时有 10 升燃料。
我们开车来到距起点 10 英里处的加油站，消耗 10 升燃料。将汽油从 0 升加到 60 升。
然后，我们从 10 英里处的加油站开到 60 英里处的加油站（消耗 50 升燃料），
并将汽油从 10 升加到 50 升。然后我们开车抵达目的地。
我们沿途在1两个加油站停靠，所以返回 2 。
```

## 解题

### 动态规划

```ts
/**
 * 动态规划
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N)
 * @param target
 * @param startFuel
 * @param stations
 * @returns
 */
export function minRefuelStops(
  target: number,
  startFuel: number,
  stations: number[][],
): number {
  const len = stations.length
  const dp = new Array(len + 1).fill(0)
  dp[0] = startFuel

  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (dp[j] >= stations[i][0])
        dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1])
    }
  }

  for (let i = 0; i <= len; i++) {
    if (dp[i] >= target)
      return i
  }

  return -1
}
```

### 贪心算法

```ts
/**
 * 贪心算法
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param target
 * @param startFuel
 * @param stations
 * @returns
 */
export function minRefuelStops2(
  target: number,
  startFuel: number,
  stations: number[][],
): number {
  const pq = new PriorityQueue<number>((a, b) => b - a >= 0)
  let ans = 0
  let prev = 0
  let fuel = startFuel
  const len = stations.length

  for (let i = 0; i <= len; i++) {
    const curr = i < len ? stations[i][0] : target
    fuel -= curr - prev
    while (fuel < 0 && !pq.isEmpty()) {
      fuel += pq.poll()!
      ans++
    }

    if (fuel < 0) return -1

    if (i < len) {
      pq.offer(stations[i][1])
      prev = curr
    }
  }
  return ans
}
```