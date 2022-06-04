# 重新安排行程

> 难度：困难
>
> https://leetcode.cn/problems/reconstruct-itinerary/

## 题目

给你一份航线列表 `tickets` ，其中 `tickets[i] = [fromi, toi]` 表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。

所有这些机票都属于一个从 `JFK`（肯尼迪国际机场）出发的先生，所以该行程必须从 `JFK` 开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。

- 例如，行程 `["JFK", "LGA"]` 与 `["JFK", "LGB"]` 相比就更小，排序更靠前。

假定所有机票至少存在一种合理的行程。且所有的机票 **必须都用一次** 且 **只能用一次**。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/171974505-9dea371f-58fe-43fc-bb15-3dfbafcd0203.png)

```
输入：tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
输出：["JFK","MUC","LHR","SFO","SJC"]
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/171974509-81ff38c7-0174-4e9d-8f19-44bc5ca72d3f.png)

```
输入：tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
输出：["JFK","ATL","JFK","SFO","ATL","SFO"]
解释：另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"] ，但是它字典排序更大更靠后。
```

## 解题

### 回溯

```ts 
/**
 * 回溯
 * @desc 时间复杂度 O(M+NlogN)  空间复杂度 O(M+NlogN)
 * @param tickets
 * @returns
 */
export function findItinerary(tickets: string[][]): string[] {
  const res = ['JFK']
  const map = new Map<string, string[]>()

  // 建立映射
  for (const [from, to] of tickets) {
    const tos = map.get(from) || []
    tos.push(to)
    map.set(from, tos)
  }

  // 按照字母排序
  for (const cities of map.values())
    cities.sort()

  // 回溯
  backTrack('JFK', 0)
  return res

  /**
   * 回溯
   * @param city 当前访问的城市
   * @param used 已用掉的机票数
   * @returns
   */
  function backTrack(city: string, used: number) {
    // 用光了所有机票，路径找到了
    if (tickets.length === used) return true

    // 获取下一站能去的城市list
    const nextCities = map.get(city)
    // 还没用光机票，就没有下一站了，返回false
    if (!nextCities || nextCities.length === 0)
      return false

    // 设置出各种选项（递归分支）
    for (let i = 0; i < nextCities.length; i++) {
      const next = nextCities[i]
      nextCities.splice(i, 1)
      res.push(next)
      if (backTrack(next, used + 1)) { return true }
      else {
        nextCities.splice(i, 0, next)
        res.pop()
      }
    }
  }
}
```

### 欧拉路径

```ts 
/**
 * 欧拉路径
 * @desc 时间复杂度 O(M+NlogN)  空间复杂度 O(M+NlogN)
 * @param tickets
 * @returns
 */
export function findItinerary2(tickets: string[][]): string[] {
  const res: string[] = []
  const map = new Map<string, string[]>()

  // 建立映射
  for (const [from, to] of tickets) {
    const tos = map.get(from) || []
    tos.push(to)
    map.set(from, tos)
  }

  // 按照字母排序
  for (const cities of map.values())
    cities.sort()

  // 回溯
  backTrack('JFK')
  return res

  /**
   * @param city 当前访问的城市
   * @returns
   */
  function backTrack(city: string) {
    const nextCities = map.get(city)
    // eslint-disable-next-line no-unmodified-loop-condition
    while (nextCities && nextCities.length) {
      const next = nextCities.shift()!
      backTrack(next)
    }
    // 当前城市没有下一站，就把他加到res里，递归开始向上返回，选过的城市一个个推入res
    res.unshift(city)
  }
}
```