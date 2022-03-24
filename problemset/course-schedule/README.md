# 课程表

> 难度：中等
>
> https://leetcode-cn.com/problems/course-schedule/

## 题目

你这个学期必须选修 `numCourses` 门课程，记为  `0`  到  `numCourses - 1` 。

在选修某些课程之前需要一些先修课程。 先修课程按数组  `prerequisites` 给出，其中
 `prerequisites[i] = [ai, bi]` ，表示如果要学习课程  `ai `则 **必须** 先学习课程
  `bi` 。

- 例如，先修课程对  `[0, 1]` 表示：想要学习课程 `0` ，你需要先完成课程 `1 `。

请你判断是否可能完成所有课程的学习？如果可以，返回 `true` ；否则，返回 `false`
。

### 示例

#### 示例 1：

```
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
```

#### 示例 2：

```
输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
```

## 解题

### 深度优先搜索

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(M+NaN)  空间复杂度 O(M+N)
 * @param numCourses
 * @param prerequisites
 * @returns
 */
export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const edges: number[][] = new Array(numCourses)
    .fill([])
    .map(() => [] as number[]);
  // 初始化每节课的映射关系
  // 即完成info[1]课程后，才可以学习info[0]课程
  for (const info of prerequisites) edges[info[1]].push(info[0]);

  // 0 -> 未搜索
  // 1 -> 搜索中
  // 2 -> 已完成
  const visited: (0 | 1 | 2)[] = new Array(numCourses).fill(0);
  let valid = true;

  // 遍历所有课程
  for (let i = 0; i < numCourses && valid; i++) {
    // 如果该课程还没开始搜索，则开始递归搜索
    if (visited[i] === 0) dfs(i);
  }

  return valid;

  /**
   * 递归搜索
   * @param i
   * @returns
   */
  function dfs(i: number) {
    // 将该课程状态设置为搜索中
    visited[i] = 1;
    // 遍历该门课程修完后才能学习的所有课程
    for (const v of edges[i]) {
      // 如果课程还未开始搜索，则开始递归搜索
      if (visited[v] === 0) {
        dfs(v);
        if (!valid) return;
      }
      // 如果该课程属于搜索中，则代表陷入循环，证明不可能完成所有课程
      else if (visited[v] === 1) {
        valid = false;
        return;
      }
    }
    // 搜索完成后，修改课程状态
    visited[i] = 2;
  }
}
```

### 广度优先搜索

```typescript
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(M+NaN)  空间复杂度 O(M+N)
 * @param numCourses
 * @param prerequisites
 * @returns
 */
export function canFinish2(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  // 记录每个课程的父节点树
  const indeg: number[] = new Array(numCourses).fill(0);
  const edges: number[][] = new Array(numCourses)
    .fill([])
    .map(() => [] as number[]);
  // 初始化每节课的映射关系
  // 即完成info[1]课程后，才可以学习info[0]课程
  for (const info of prerequisites) {
    edges[info[1]].push(info[0]);
    indeg[info[0]]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    // 如果indeg[i] === 0，则代表这门课无需修完其他课程才可学习
    if (indeg[i] === 0) queue.unshift(i);
  }

  let visited = 0;
  while (queue.length) {
    // 记录已修的课程数
    visited++;
    const i = queue.pop()!;
    // 遍历修完该课程才可修的课程
    for (const v of edges[i]) {
      // 更新数据
      indeg[v]--;
      // 如果该课程已经满足可修的状态，则入队
      if (indeg[v] === 0) queue.unshift(v);
    }
  }

  // 判断修完的课程是否跟课程总数匹配
  return visited === numCourses;
}
```
