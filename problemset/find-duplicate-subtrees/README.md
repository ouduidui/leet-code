# 寻找重复的子树

> 难度：中等
>
> https://leetcode.cn/problems/find-duplicate-subtrees/

## 题目

给定一棵二叉树 `root`，返回所有重复的子树。

对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

如果两棵树具有相同的结构和相同的结点值，则它们是重复的。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/188372688-d6912827-5963-4393-8a93-eab89926507f.png)

```
输入：root = [1,2,3,4,null,2,4,null,null,4]
输出：[[2,4],[4]]
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/188372693-e59b668a-cf7a-4b43-b134-e98dd96ebdc2.png)
```
输入：root = [2,1,1]
输出：[[1]]
```

#### 示例 3：

![image](https://user-images.githubusercontent.com/54696834/188372706-78db5a6a-55fa-4b94-9a29-cee9b1fe21e2.png)

```
输入：root = [2,2,2,3,null,3,null]
输出：[[2,3],[3]]
```

## 解题

### 使用序列化进行唯一表示

```ts 
/**
 * 使用序列化进行唯一表示
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param root
 * @returns
 */
export function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const seen = new Map<string, TreeNode | null>()
  const repeat = new Set<TreeNode | null>()
  const dfs = (node: TreeNode | null) => {
    if (!node) return ''

    let sb = ''
    sb += node.val
    sb += '('
    sb += dfs(node.left)
    sb += ')('
    sb += dfs(node.right)
    sb += ')'
    if (seen.has(sb))
      repeat.add(seen.get(sb)!)
    else
      seen.set(sb, node)

    return sb
  }
  dfs(root)
  return [...repeat]
}
```

### 使用三元组进行唯一表示

```ts 
/**
 * 使用三元组进行唯一表示
 * @desc 时间复杂度 O(N²)  空间复杂度 O(N²)
 * @param root
 * @returns
 */
export function findDuplicateSubtrees2(root: TreeNode | null): Array<TreeNode | null> {
  const seen = new Map<string, [TreeNode | null, number]>()
  const repeat = new Set<TreeNode | null>()
  let idx = 0
  const dfs = (node: TreeNode | null) => {
    if (!node)
      return 0

    const tri: [number, number, number] = [node.val, dfs(node.left), dfs(node.right)]
    const hash = tri.toString()
    if (seen.has(hash)) {
      const pair = seen.get(hash)!
      repeat.add(pair[0])
      return pair[1]
    }
    else {
      seen.set(hash, [node, ++idx])
      return idx
    }
  }
  dfs(root)
  return [...repeat]
}
```