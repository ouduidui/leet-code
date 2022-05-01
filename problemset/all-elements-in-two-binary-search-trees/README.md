# 两颗二叉搜索树中的所有元素

> 难度：中等
>
> https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/

## 题目

给你 `root1` 和 `root2` 这两棵二叉搜索树。请你返回一个列表，其中包含 **两棵树** 中的所有整数并按 **升序** 排序。

### 示例

#### 示例 1：

![q2-e1](https://user-images.githubusercontent.com/54696834/166128218-4dfe62f5-b52e-48f3-84c4-100820db59ff.png)

```
输入：root1 = [2,1,4], root2 = [1,0,3]
输出：[0,1,1,2,3,4]
```

#### 示例 2：

![q2-e5-](https://user-images.githubusercontent.com/54696834/166128221-19759c30-7192-4854-ba7d-eb12855437d7.png)

```
输入：root1 = [1,null,8], root2 = [8,1]
输出：[1,1,8,8]
```

## 解题

```ts 
/**
 * 中序遍历 + 归并
 * @desc 时间复杂度 O(M+N)  空间复杂度 O(M+N)
 * @param root1
 * @param root2
 * @returns
 */
export function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const nums1: number[] = []
  const nums2: number[] = []

  inorder(root1, nums1)
  inorder(root2, nums2)

  const merged: number[] = []

  while (nums1.length && nums2.length)
    merged.push(nums1[0] <= nums2[0] ? nums1.shift()! : nums2.shift()!)

  merged.push(...nums1, ...nums2)
  return merged

  function inorder(node: TreeNode | null, nums: number[]) {
    if (!node) return
    inorder(node.left, nums)
    nums.push(node.val)
    inorder(node.right, nums)
  }
}
```