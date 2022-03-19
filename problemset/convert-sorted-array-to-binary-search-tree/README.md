# 将有序数组转换为二叉搜索树

> 难度：简单
>
> https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/

## 题目

给你一个整数数组 `nums` ，其中元素已经按 **升序** 排列，请你将其转换为一棵 **高
度平衡** 二叉搜索树。

**高度平衡** 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」
的二叉树。

### 示例

#### 示例 1：

![convert-sorted-array-to-binary-search-tree-1](https://user-images.githubusercontent.com/88995580/159103253-9392434d-98e1-41fd-9ddf-5bd4a635606e.jpg)

```
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```

![convert-sorted-array-to-binary-search-tree-2](https://user-images.githubusercontent.com/88995580/159103252-ab7b987c-9ffe-4dd1-9761-e6f1d8259ebe.jpg)

#### 示例 2：

![convert-sorted-array-to-binary-search-tree-3](https://user-images.githubusercontent.com/88995580/159103262-f13c13de-dae0-482b-ab92-edf5073e6426.jpg)

```
输入：nums = [1,3]
输出：[3,1]
解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。
```

## 解题

```typescript
/**
 * 中序遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(logN)
 * @param nums {number[]}
 * @return {TreeNode | null}
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length - 1);

  function helper(
    nums: number[],
    left: number,
    right: number
  ): TreeNode | null {
    if (left > right) {
      return null;
    }

    // 总是选择中间位置左边的数字作为根节点
    const mid = (left + right) >> 1;

    const root = new TreeNode(nums[mid]);
    root.left = helper(nums, left, mid - 1);
    root.right = helper(nums, mid + 1, right);
    return root;
  }
}
```
