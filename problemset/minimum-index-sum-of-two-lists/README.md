# 两个列表的最小索引总和

> 难度：简单
>
> https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/

## 题目

假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表
，每个餐厅的名字用字符串表示。

你需要帮助他们用**最少的索引**和找出他们**共同喜爱的餐厅** 。 如果答案不止一个，
则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。

### 示例

#### 示例 1:

```
输入: list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
输出: ["Shogun"]
解释: 他们唯一共同喜爱的餐厅是“Shogun”。
```

#### 示例 2:

```
输入:list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["KFC", "Shogun", "Burger King"]
输出: ["Shogun"]
解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
```

## 解题

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(N + M) 空间复杂度 O(M)
 * @param list1
 * @param list2
 */
export function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map<string, number>();

  let i = 0;
  while (i < list1.length) {
    map.set(list1[i], i);
    i++;
  }

  const result: string[] = [];

  i = 0;
  let minSum = Number.MAX_SAFE_INTEGER;
  while (i < list2.length) {
    const item = list2[i];
    if (map.has(item)) {
      const sum = map.get(item)! + i;
      if (sum < minSum) {
        minSum = sum;
        result.length = 0;
      }
      if (sum === minSum) result.push(item);
    }
    i++;
  }
  return result;
}
```
