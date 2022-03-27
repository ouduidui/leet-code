# 课程表 II

> 难度：中等
>
> https://leetcode-cn.com/problems/course-schedule-ii/

## 题目


现在你总共有 `numCourses` 门课需要选，记为 `0` 到 `numCourses - 1` 。给你一个数组 `prerequisites` ，其中 `prerequisites[i] = [ai, bi]` ，表示在选修课程 `ai` 前 **必须** 先选修 `bi` 。

- 例如，想要学习课程 `0` ，你需要先完成课程 `1 `，我们用一个匹配来表示：`[0,1]` 。

返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 **任意一种** 就可以了。如果不可能完成所有课程，返回 **一个空数组** 。

 
### 示例

#### 示例 1：

```
输入：numCourses = 2, prerequisites = [[1,0]]
输出：[0,1]
解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
```

#### 示例 2：

```
输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
输出：[0,2,1,3]
解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
```

#### 示例 3：

```
输入：numCourses = 1, prerequisites = []
输出：[0]
```

## 解题

### 广度优先搜索

```typescript
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param numCourses
 * @param prerequisites
 * @returns
 */
export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (prerequisites.length === 0)
    return new Array<number>(numCourses).fill(0).map((_, i) => i)

  const map = new Array(numCourses).fill(0).map(() => [] as number[])
  const mapCount = new Array(numCourses).fill(0)
  for (const v of prerequisites) {
    map[v[1]].push(v[0])
    mapCount[v[0]]++
  }

  const result: number[] = []
  const queue: number[] = []

  for (let i = 0; i < numCourses; i++)
    if (mapCount[i] === 0) queue.unshift(i)

  while (queue.length) {
    const course = queue.pop()!
    result.push(course)

    for (const i of map[course]) {
      mapCount[i]--
      if (mapCount[i] === 0) queue.unshift(i)
    }
  }

  return result.length === numCourses ? result : []
}
```

### 深度优先搜索

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param numCourses
 * @param prerequisites
 * @returns
 */
export function findOrder2(numCourses: number, prerequisites: number[][]): number[] {
  if (prerequisites.length === 0)
    return new Array<number>(numCourses).fill(0).map((_, i) => i)

  const map = new Array(numCourses).fill(0).map(() => [] as number[])
  for (const v of prerequisites)
    map[v[1]].push(v[0])

  const visited = new Array<0 | 1 | 2>(numCourses).fill(0)
  let isValid = true
  const result: number[] = []

  for (let i = 0; i < numCourses && isValid; i++)
    dfs(i)

  return result.length === numCourses && isValid ? result : []

  function dfs(course: number) {
    if (visited[course] === 0) {
      visited[course] = 1
      for (const c of map[course])
        dfs(c)
      visited[course] = 2
      result.unshift (course)
    }
    else if (visited[course] === 1) {
      isValid = false
    }
  }
}
```