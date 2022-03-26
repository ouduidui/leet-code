# 游戏中弱角色的数量

> 难度：中等
>
> https://leetcode-cn.com/problems/the-number-of-weak-characters-in-the-game/

## 题目

你正在参加一个多角色游戏，每个角色都有两个主要属性：**攻击** 和 **防御** 。给你
一个二维整数数组 `properties` ，其中 `properties[i] = [attacki, defensei]` 表示
游戏中第 `i` 个角色的属性。

如果存在一个其他角色的攻击和防御等级 **都严格高于** 该角色的攻击和防御等级，则认
为该角色为 **弱角色** 。更正式地，如果认为角色 `i` **弱于** 存在的另一个角色 `j`
，那么 `attack(j) > attack(i)` 且 `defense(j) > defense(i)` 。

返回 **弱角色** 的数量。

### 示例

#### 示例 1：

```
输入：properties = [[5,5],[6,3],[3,6]]
输出：0
解释：不存在攻击和防御都严格高于其他角色的角色。
```

#### 示例 2：

```
输入：properties = [[2,2],[3,3]]
输出：1
解释：第一个角色是弱角色，因为第二个角色的攻击和防御严格大于该角色。
```

#### 示例 3：

```
输入：properties = [[1,5],[10,4],[4,3]]
输出：1
解释：第三个角色是弱角色，因为第二个角色的攻击和防御严格大于该角色。
```

## 解题

### 暴力解法

```typescript
/**
 * 暴力解法
 * @desc 时间复杂度 O(N^2)   空间复杂度 O(1)
 * @param properties {number[][]}
 * @return {number}
 */
export function numberOfWeakCharacters(properties: number[][]): number {
  if (properties.length < 2) return 0;

  const len = properties.length;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (
        i !== j &&
        properties[i][0] < properties[j][0] &&
        properties[i][1] < properties[j][1]
      ) {
        ans++;
        break;
      }
    }
  }

  return ans;
}
```

### 排序

```typescript
/**
 * 排序
 * @desc 时间复杂度 O(NlogN)   空间复杂度 O(logN)
 * @param properties {number[][]}
 * @return {number}
 */
export function numberOfWeakCharacters2(properties: number[][]): number {
  if (properties.length < 2) return 0;

  // 排序： 按照攻击力降序排列，如果攻击力相等，则按照防御力升序排列
  properties.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0];
  });

  let maxDef = 0; // 最大防御力
  let ans = 0;
  for (const p of properties) {
    // 如果防御力小于最大防御力，则代表为弱选手
    // 因为攻击力相等的时候防御力倒序排列，因此不会出现 p[1] < maxDef 同时 p[0] 与 maxDef对于的角色攻击力一致的情况
    if (p[1] < maxDef) {
      ans++;
    } else {
      maxDef = p[1];
    }
  }

  return ans;
}
```
