# 统计匹配检索规则的物品数量

> 难度：简单
>
> https://leetcode.cn/problems/count-items-matching-a-rule/

## 题目

给你一个数组 `items` ，其中 `items[i] = [typei, colori, namei]` ，描述第 `i` 件物品的类型、颜色以及名称。

`另给你一条由两个字符串 ruleKey` 和 `ruleValue` 表示的检索规则。

如果第 `i` 件物品能满足下述条件之一，则认为该物品与给定的检索规则 **匹配** ：

- `ruleKey == "type"` 且 `ruleValue == typei` 。
- `ruleKey == "color"` 且 `ruleValue == colori` 。
- `ruleKey == "name"` 且 `ruleValue == namei` 。

统计并返回 **匹配检索规则的物品数量** 。

### 示例

#### 示例 1：

```
输入：items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
输出：1
解释：只有一件物品匹配检索规则，这件物品是 ["computer","silver","lenovo"] 。
```

#### 示例 2：
```
输入：items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
输出：2
解释：只有两件物品匹配检索规则，这两件物品分别是 ["phone","blue","pixel"] 和 ["phone","gold","iphone"] 。注意，["computer","silver","phone"] 未匹配检索规则。
```

## 解题

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param items
 * @param ruleKey
 * @param ruleValue
 * @returns
 */
export function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const rulekeyMap = new Map([['type', 0], ['color', 1], ['name', 2]])
  const ruleKeyIndex = rulekeyMap.get(ruleKey)!
  return items.filter(item => item[ruleKeyIndex] === ruleValue).length
}
```