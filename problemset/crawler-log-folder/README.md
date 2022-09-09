# 文件夹操作日志搜集器

> 难度：简单
>
> https://leetcode.cn/problems/crawler-log-folder/

## 题目

每当用户执行变更文件夹操作时，`LeetCode` 文件系统都会保存一条日志记录。

下面给出对变更操作的说明：

- `"../"` ：移动到当前文件夹的父文件夹。如果已经在主文件夹下，则 继续停留在当前文件夹 。
- `"./"` ：继续停留在当前文件夹。
- `"x/"` ：移动到名为 `x` 的子文件夹中。题目数据 保证总是存在文件夹 `x` 。

给你一个字符串列表 `logs` ，其中 `logs[i]` 是用户在 `ith` 步执行的操作。

文件系统启动时位于主文件夹，然后执行 `logs` 中的操作。

执行完所有变更文件夹操作后，请你找出 **返回主文件夹所需的最小步数** 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/189265713-a7a070bf-d7f5-4d96-8cd6-1a2f8c429681.png)

```
输入：logs = ["d1/","d2/","../","d21/","./"]
输出：2
解释：执行 "../" 操作变更文件夹 2 次，即可回到主文件夹
```

#### 示例 2：

![image](https://user-images.githubusercontent.com/54696834/189265732-a8bf17f3-25a7-4aec-9b89-1d64f69c3b8c.png)

```
输入：logs = ["d1/","d2/","./","d3/","../","d31/"]
输出：3
```

#### 示例 3：

```
输入：logs = ["d1/","../","../","../"]
输出：0
```

## 解题

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param logs
 * @returns
 */
export function minOperations(logs: string[]): number {
  let depth = 0
  for (const log of logs) {
    if (log === './') {
      continue
    }
    else if (log === '../') {
      if (depth > 0) depth--
    }
    else {
      depth++
    }
  }
  return depth
}
```