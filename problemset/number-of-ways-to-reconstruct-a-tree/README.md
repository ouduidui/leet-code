# 重构一棵树的方案数

> 难度：困难
>
> https://leetcode-cn.com/problems/number-of-ways-to-reconstruct-a-tree/

## 题目

给你一个数组 `pairs` ，其中 `pairs[i] = [xi, yi]` ，并且满足：

- `pairs` 中没有重复元素
- `xi < yi`

令 `ways` 为满足下面条件的有根树的方案数：

- 树所包含的所有节点值都在 `pairs` 中。
- 一个数对 `[xi, yi]` 出现在 `pairs` 中 当且仅当 `xi` 是 `yi` 的祖先或者 `yi` 是
  `xi` 的祖先。
- 注意：构造出来的树不一定是二叉树。

两棵树被视为不同的方案当存在至少一个节点在两棵树中有不同的父节点。

请你返回：

- 如果 ways == 0 ，返回 0 。
- 如果 ways == 1 ，返回 1 。
- 如果 ways > 1 ，返回 2 。

一棵 **有根树** 指的是只有一个根节点的树，所有边都是从根往外的方向。

我们称从根到一个节点路径上的任意一个节点（除去节点本身）都是该节点的 **祖先** 。
根节点没有祖先。

### 示例

#### 示例 1：

![number-of-ways-to-reconstruct-a-tree-1](https://user-images.githubusercontent.com/54696834/159102000-6b8436c1-df18-4c65-babd-d94866d071a4.png)

```
输入：pairs = [[1,2],[2,3]]
输出：1
解释：如上图所示，有且只有一个符合规定的有根树。
```

#### 示例 2：

![number-of-ways-to-reconstruct-a-tree-2](https://user-images.githubusercontent.com/54696834/159101969-7afde945-cf03-4ff9-a1e4-79d7e4efa589.png)

```
输入：pairs = [[1,2],[2,3],[1,3]]
输出：2
解释：有多个符合规定的有根树，其中三个如上图所示。
```

#### 示例 3：

```
输入：pairs = [[1,2],[2,3],[2,4],[1,5]]
输出：0
解释：没有符合规定的有根树。
```

## 解题

### 直接模拟

本题抽象思维难度较大，需要仔细考虑树的结构。题目给定的数对 `pairs[i] = [xi, yi]`
，且满足`xi`是`yi`的祖先或者`yi`是`xi`的祖先；树中包含的所有节点值都在`pairs`中
，即`pairs` 包含树中所有可能构成祖先的数对。

设树中的节点为`n`，`pair`中包含节点`x`的数对的数目为`degree[x]`，节点`x`的祖先和
后代的节点集合为`adj[x]`。

下面来研究`degree`的性质。

- 根节点为树中其余所有节点的祖先，根节点与其他所有节点都能构成数对。设根节点
  为`root`，由于`pairs`包含树中所有可能构成祖先的数对，因
  此`degree[root] = n - 1` 。如下图所示，根节点 1 为其余节点的祖先，蓝色节点组成
  了`adj[1]`

![number-of-ways-to-reconstruct-a-tree-3](https://user-images.githubusercontent.com/54696834/159101973-a6c0bf91-9a6c-4bd9-9553-06cf67815a1b.png)

- 对于`pairs`中的数对`[xi, yi]`，如果`xi`为`yi`的祖先，则一定满
  足`degree[xi] ≥ degree[yi]`。如果节点`yj`为节点`yi`的后代节点，则节点`yj`一定
  也是节点`xi` 的后代节点；如果节点`yj`为节点`yi`的祖先节点，则节点`yj`要么是节
  点`xi`的祖先节点，要么是节点`xi`的后代节点，所以一定满
  足`degree[xi] ≥ degree[yi]`。此外，如果`xi`为`yi` 的祖先，则一定满
  足`adj[yi] ∈ adj[xi]`。如下图所示，含有节点 2 的树对数目一定大于含有节点 3 的
  树对数目。

![number-of-ways-to-reconstruct-a-tree-4](https://user-images.githubusercontent.com/54696834/159101963-d6c4976e-47b8-4142-a058-f22c7d127cf5.png)

- 对于`pairs`中的数对`[xi, yi]`，如果`xi`为`yi`的祖先，且满
  足`degree[xi] = degree[yi]`和`adj[xi]=adj[yi]`，则`xi`到`yi` 途径的所有节点均
  只有一个孩子节点。此时`xi`到`yi`之间的节点包含的数对关系是一样的。`xi`到`yi`之
  间的节点是可以进行互相交换而不影响树的结构，则此时构成树的方案数一定不是唯一的
  。如下图所示，节点 6、7、9 满足上述要求：

![number-of-ways-to-reconstruct-a-tree-5](https://user-images.githubusercontent.com/54696834/159101967-d1bdbed8-6814-4dfb-8414-c821f9a27d71.png)

综上所述，对于`pairs`中的数对`[xi, yi]`：

- 若`degree[xi] > degree[yi]`，则`xi`为`yi`的祖先节点；
- 若`degree[xi] < degree[yi]`，则`yi`为`xi`的祖先节点；
- 若`degree[xi] = degree[yi]`，则存在多种构造方法，`yi`为`xi`的祖先节点
  或`xi`为`yi`的祖先节点

通过以上分析结论，我们可以尝试进行重新建树，并检测建成的树是否合法。

- 首先我们需要找到根节点`root`，通过上述结论，我们找到满
  足`degree[root] = n - 1`的节点，如果不存在根节点，则认为其不能构成合法的树，返
  回 0
- 我们需要利用上诉的结论检测构建的树是否合法，遍历每个节点`node i`，找
  到`node i`的祖先`parent i`，检测集合`adj[node i]`是否为`adj[parent i]` 的子集
  。可以利用`degree[node i] ≤ degree[parent i]`找到所有属于`node i`的祖先节点，
  然后依次检测是否满足`adj[node i] ∈ adj[parent i]` ，如果不满足要求的话，则认为
  构建的树是非法的，返回 0
- 实际检测过程中不必检测节点`node i`的所有祖先节点，只需要检测及诶单`node i`的父
  节点是否满足子集包含的要求即可。根据上述推论找到节点`x`满足`degree[x]` 最小
  且`degree[x] ≥ degree[node i]`，则此时找到的节点为节点`node i`的父亲节点，此时
  只需要检测父亲节点是否满足上诉要求即可。
- 设`node i`的父节点为`parent`，若满足`degree[node i] = degree[parent]`，则树的
  构造方式可以有很多，返回 2

```typescript
/**
 * 直接模拟
 * @desc 时间复杂度 O(m + n^2)  空间复杂度 O(m)
 * @param pairs
 */
export function checkWays(pairs: number[][]): number {
  const adj = new Map<number, Set<number>>();
  for (const p of pairs) {
    if (!adj.has(p[0])) adj.set(p[0], new Set<number>());
    if (!adj.has(p[1])) adj.set(p[1], new Set<number>());
    adj.get(p[0])!.add(p[1]);
    adj.get(p[1])!.add(p[0]);
  }

  // 检测是否有根节点
  let root = -1;
  const entries = new Set<[number, Set<number>]>();
  for (const entry of adj.entries()) {
    entries.add(entry);
  }
  for (const [node, neg] of entries) {
    // 满足 degree[root] = n - 1
    if (neg.size === adj.size - 1) {
      root = node;
    }
  }

  if (root === -1) return 0;

  let res = 1;

  for (const [node, neg] of entries) {
    // 如果当前节点为根节点
    if (root === node) continue;

    const currDegree = neg.size;
    let parentNode = -1;
    let parentDegree = Number.MAX_VALUE;
    // 根据degree的大小找到当前节点的父节点
    for (const neighbour of neg) {
      if (
        adj.has(neighbour) &&
        adj.get(neighbour)!.size < parentDegree &&
        adj.get(neighbour)!.size >= currDegree
      ) {
        parentNode = neighbour;
        parentDegree = adj.get(neighbour)!.size;
      }
    }

    if (parentNode === -1) return 0;

    // 检测父节点的集合是否包含所有的孩子节点
    for (const neighbour of neg) {
      if (neighbour === parentNode) continue;
      if (!adj.get(parentNode)!.has(neighbour)) return 0;
    }

    if (parentDegree === currDegree) res = 2;
  }

  return res;
}
```
