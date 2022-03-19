# 推多米诺

> 难度：中等
>
> https://leetcode-cn.com/problems/push-dominoes/

## 题目

`n` 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨
牌向左或向右推。

每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多
米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌
仍然保持不变。

就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的
多米诺骨牌施加额外的力。

给你一个字符串 `dominoes` 表示这一行多米诺骨牌的初始状态，其中：

- `dominoes[i] = 'L'`，表示第 `i` 张多米诺骨牌被推向左侧，
- `dominoes[i] = 'R'`，表示第 `i` 张多米诺骨牌被推向右侧，
- d`ominoes[i] = '.'`，表示没有推动第 `i` 张多米诺骨牌。

返回表示最终状态的字符串。

### 示例

#### 示例 1：

```
输入：dominoes = "RR.L"
输出："RR.L"
解释：第一张多米诺骨牌没有给第二张施加额外的力。
```

#### 示例 2：

![push-dominoes](https://user-images.githubusercontent.com/54696834/159101991-abda0e01-ff59-4a21-9253-54bcd92eada9.png)

```
输入：dominoes = ".L.R...LR..L.."
输出："LL.RR.LLRRLL.."
```

## 解题

### 广度优先搜索

```typescript
/**
 * 广度优先搜索
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param dominoes
 */
export function pushDominoes(dominoes: string): string {
  const len = dominoes.length;
  const queue: number[] = [];
  // 记录推倒的时间
  const time = new Array(len).fill(-1);
  // 存储每一块的受力
  const force: ('L' | 'R')[][] = new Array(len).fill([]).map(() => []);

  for (let i = 0; i < len; i++) {
    // 获取第一次倾倒方向
    const f = dominoes[i] as 'L' | 'R' | '.';
    // 如果不倾倒则跳过不处理
    if (f !== '.') {
      // 将下标入队
      queue.unshift(i);
      time[i] = 0;
      // 存储该块倾倒方向（受力）
      force[i].push(f);
    }
  }

  // 初始化结果值，默认不倾倒
  const result = new Array(len).fill('.');

  while (queue.length) {
    const i = queue.pop()!;
    // 如果该块有多个受力，那一定是左右受力，因此保持不动
    if (force[i].length === 1) {
      const f = force[i][0];
      result[i] = f;
      // 获取因该块倾倒印象到的那一块下标
      const ni = f === 'L' ? i - 1 : i + 1;
      if (ni >= 0 && ni < len) {
        const t = time[i];
        // 如果该块初始没有推倒动作
        if (time[ni] === -1) {
          // 入队
          queue.unshift(ni);
          time[ni] = t + 1;
          force[ni].push(f);
        }
        // 如果该块下一秒才有推倒动作
        else if (time[ni] === t + 1) {
          force[ni].push(f);
        }
      }
    }
  }

  return result.join('');
}
```

### 模拟

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(N)  空间复杂度 O(N)
 * @param dominoes
 */
export function pushDominoes2(dominoes: string): string {
  const s = [...dominoes];
  const len = s.length;
  let i = 0;

  // 初始化左边骨牌状态
  let leftDomino: 'L' | 'R' = 'L';

  while (i < len) {
    let j = i;

    // 跳过没有推动的骨牌
    while (j < len && s[j] === '.') {
      j++;
    }

    // 获取当前骨牌动作
    const rightDomino = j < len ? (s[j] as 'L' | 'R') : 'R';
    // 如果当前骨牌跟上一块骨牌动作一致
    if (leftDomino === rightDomino) {
      while (i < j) {
        s[i++] = rightDomino;
      }
    }
    // 如果是左边骨牌向右倒，且右边骨牌向左倒的情况
    else if (leftDomino === 'R' && rightDomino === 'L') {
      let k = j - 1;
      while (i < k) {
        s[i++] = 'R';
        s[k--] = 'L';
      }
    }
    // 更新leftDomino
    leftDomino = rightDomino;
    // 将i定位到未处理的那一块
    i = j + 1;
  }

  return s.join('');
}
```
