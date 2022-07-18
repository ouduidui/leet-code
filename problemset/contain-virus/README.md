# 隔离病毒

> 难度：困难
>
> https://leetcode.cn/problems/contain-virus/

## 题目

病毒扩散得很快，现在你的任务是尽可能地通过安装防火墙来隔离病毒。

假设世界由 `m x n` 的二维矩阵 `isInfected` 组成， `isInfected[i][j] == 0` 表示该区域未感染病毒，而  `isInfected[i][j] == 1` 表示该区域已感染病毒。可以在任意 `2` 个相邻单元之间的共享边界上安装一个防火墙（并且只有一个防火墙）。

每天晚上，病毒会从被感染区域向相邻未感染区域扩散，除非被防火墙隔离。现由于资源有限，每天你只能安装一系列防火墙来隔离其中一个被病毒感染的区域（一个区域或连续的一片区域），且该感染区域对未感染区域的威胁最大且 **保证唯一** 。

你需要努力使得最后有部分区域不被病毒感染，如果可以成功，那么返回需要使用的防火墙个数; 如果无法实现，则返回在世界被病毒全部感染时已安装的防火墙个数。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/179436140-f506a3aa-de76-43c9-9c6c-39fc91846955.png)

```
输入: isInfected = [[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]]
输出: 10
解释:一共有两块被病毒感染的区域。
在第一天，添加 5 墙隔离病毒区域的左侧。病毒传播后的状态是:
```

![image](https://user-images.githubusercontent.com/54696834/179436164-42d63edf-1e5f-4c28-ac3c-defedd250455.png)

```
第二天，在右侧添加 5 个墙来隔离病毒区域。此时病毒已经被完全控制住了。
```

![image](https://user-images.githubusercontent.com/54696834/179436175-b2ce64bb-4e44-4a08-b544-0852c1dcf00f.png)


#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/179436189-34e87a02-19fd-4f15-aa62-c7396bf06718.png)

```
输入: isInfected = [[1,1,1],[1,0,1],[1,1,1]]
输出: 4
解释: 虽然只保存了一个小区域，但却有四面墙。
注意，防火墙只建立在两个不同区域的共享边界上。
```

#### 示例 3:

```
输入: isInfected = [[1,1,1,0,0,0,0,0,0],[1,0,1,0,1,1,1,1,1],[1,1,1,0,0,0,0,0,0]]
输出: 13
解释: 在隔离右边感染区域后，隔离左边病毒区域只需要 2 个防火墙。
```

## 解题

```ts 
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(MN(M+N)) 空间复杂度 O(MN)
 * @param isInfected
 * @returns
 */
export function containVirus(isInfected: number[][]): number {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const m = isInfected.length
  const n = isInfected[0].length
  let ans = 0

  const getHash = (x: number, y: number) => (x << 16) ^ y

  while (true) {
    const neighbors: Set<number>[] = []
    const firewalls: number[] = []
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (isInfected[i][j] === 1) {
          const queue = [[i, j]]
          const neighbor = new Set<number>()
          let firewall = 0
          const idx = neighbors.length + 1
          isInfected[i][j] = -idx

          while (queue.length > 0) {
            const arr = queue.shift()!
            const [x, y] = arr
            for (const dir of dirs) {
              const nx = x + dir[0]
              const ny = y + dir[1]
              if (nx >= 0 && ny >= 0 && nx < m && ny < n) {
                if (isInfected[nx][ny] === 1) {
                  queue.push([nx, ny])
                  isInfected[nx][ny] = -idx
                }
                else if (isInfected[nx][ny] === 0) {
                  firewall++
                  neighbor.add(getHash(nx, ny))
                }
              }
            }
          }
          neighbors.push(neighbor)
          firewalls.push(firewall)
        }
      }
    }

    if (neighbors.length === 0) break

    let idx = 0
    for (let i = 1; i < neighbors.length; i++) {
      if (neighbors[i].size > neighbors[idx].size)
        idx = i
    }
    ans += firewalls[idx]
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (isInfected[i][j] < 0) {
          if (isInfected[i][j] !== -idx - 1)
            isInfected[i][j] = 1
          else
            isInfected[i][j] = 2
        }
      }
    }

    for (let i = 0; i < neighbors.length; i++) {
      if (i !== idx) {
        for (const val of neighbors[i]) {
          const x = val >> 16
          const y = val & ((1 << 16) - 1)
          isInfected[x][y] = 1
        }
      }
    }

    if (neighbors.length === 1) break
  }

  return ans
}
```