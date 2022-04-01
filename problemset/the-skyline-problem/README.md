# 天际线问题

> 难度：困难
>
> https://leetcode-cn.com/problems/the-skyline-problem/

## 题目

城市的 **天际线** 是从远处观看该城市中所有建筑物形成的轮廓的外部轮廓。给你所有建筑物的位置和高度，请返回 *由这些建筑物形成的* **天际线** 。

每个建筑物的几何信息由数组 `buildings` 表示，其中三元组 `buildings[i] = [lefti, righti, heighti]` 表示：

- `lefti` 是第 `i` 座建筑物左边缘的 `x` 坐标。
- `righti` 是第 `i` 座建筑物右边缘的 `x` 坐标。
- `heighti` 是第 `i` 座建筑物的高度。

你可以假设所有的建筑都是完美的长方形，在高度为 `0` 的绝对平坦的表面上。

天际线 应该表示为由 “关键点” 组成的列表，格式 `[[x1,y1],[x2,y2],...]` ，并按 `x 坐标` 进行 **排序** 。**关键点是水平线段的左端点**。列表中最后一个点是最右侧建筑物的终点，`y` 坐标始终为 `0` ，仅用于标记天际线的终点。此外，任何两个相邻建筑物之间的地面都应被视为天际线轮廓的一部分。

注意：输出天际线中不得有连续的相同高度的水平线。例如 `[...[2 3], [4 5], [7 5], [11 5], [12 7]...]` 是不正确的答案；三条高度为 5 的线应该在最终输出中合并为一个：`[...[2 3], [4 5], [12 7], ...]`


### 示例

#### 示例 1：

![the-skyline-problem](https://user-images.githubusercontent.com/54696834/161179919-0e2bcac2-f90d-430b-9906-e2a175ceabe6.jpg)

```
输入：buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
输出：[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
解释：
图 A 显示输入的所有建筑物的位置和高度，
图 B 显示由这些建筑物形成的天际线。图 B 中的红点表示输出列表中的关键点。
```

#### 示例 2：

```
输入：buildings = [[0,2,3],[2,5,3]]
输出：[[0,3],[5,0]]
```

## 解题

```ts
import { PriorityQueue } from '~/utils/priorityQueue'

/**
 * 扫描线 + 优先队列
 * @desc 时间复杂度 O(NlogN)  空间复杂度 O(N)
 * @param buildings
 * @returns
 */
export function getSkyline(buildings: number[][]): number[][] {
  // 初始化优先队列，以建筑物高度从高到低进行优先级排序
  const queue = new PriorityQueue<number[]>((a, b) => b[1] < a[1])

  // 边界数组
  // 将所有建筑的左右坐标扁平化到一个数组里面，并进行从小到大排序
  const boundaries: number[] = buildings.reduce((acc, cur) => {
    acc.push(cur[0], cur[1])
    return acc
  }, []).sort((a, b) => a - b)

  const result: number[][] = []
  const len = buildings.length
  let idx = 0

  // 遍历所有边界
  for (const boundary of boundaries) {
    // 将左边界在当前边界的左边的所有建筑入队
    while (idx < len && buildings[idx][0] <= boundary) {
      queue.offer([/* 右边界 */buildings[idx][1], /* 高度 */ buildings[idx][2]])
      idx++
    }

    // 弹出右边界在在当前边界的左边或重叠的建筑物
    while (!queue.isEmpty() && queue.peek()![0] <= boundary)
      queue.poll()

    // 找到当前边际的最高点
    const max = queue.isEmpty() ? 0 : queue.peek()![1]
    // 去重操作
    if (result.length === 0 || max !== result[result.length - 1][1])
      result.push([boundary, max])
  }

  return result
}
```