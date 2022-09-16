# 矩形面积 II

> 难度：困难
>
> https://leetcode.cn/problems/rectangle-area-ii/

## 题目

我们给出了一个（轴对齐的）二维矩形列表 `rectangles` 。 对于 `rectangle[i] = [x1, y1, x2, y2]`，其中（`x1，y1）`是矩形 `i` 左下角的坐标， `(xi1, yi1)` 是该矩形 **左下角** 的坐标， `(xi2, yi2)` 是该矩形 **右上角** 的坐标。

计算平面中所有 `rectangles` 所覆盖的 **总面积** 。任何被两个或多个矩形覆盖的区域应只计算 **一次** 。

返回 **总面积** 。因为答案可能太大，返回 `10^9 + 7` 的 **模** 。

### 示例

#### 示例 1：

![image](https://user-images.githubusercontent.com/54696834/190672396-fbf7f3ad-364e-47fe-a2e3-ee3af7c037fe.png)

```
输入：rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
输出：6
解释：如图所示，三个矩形覆盖了总面积为6的区域。
从(1,1)到(2,2)，绿色矩形和红色矩形重叠。
从(1,0)到(2,3)，三个矩形都重叠。
```

#### 示例 2：

```
输入：rectangles = [[0,0,1000000000,1000000000]]
输出：49
解释：答案是 1018 对 (10^9 + 7) 取模的结果， 即 49 。
```

## 解题

```ts 
/**
 * 模拟
 * @desc 时间复杂度 O(N²logN)  空间复杂度 O(N)
 * @param rectangles
 * @returns
 */
export function rectangleArea(rectangles: number[][]): number {
  const MOD = BigInt(10 ** 9 + 7)
  const xArr: number[] = []
  for (const rect of rectangles) {
    xArr.push(rect[0]) // x1
    xArr.push(rect[2]) // x2
  }
  xArr.sort((a, b) => a - b)
  let ans = 0n
  for (let i = 1; i < xArr.length; i++) {
    const xLen = xArr[i] - xArr[i - 1]
    if (xLen === 0) continue
    const yArr: [number, number][] = []
    for (const rect of rectangles) {
      if (rect[0] <= xArr[i - 1] && xArr[i] <= rect[2])
        yArr.push([rect[1], rect[3]])
    }
    yArr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    let total = 0n; let minY = -1n; let maxY = -1n // Y 轴可能不是连续的，所以需要分段处理
    for (const [y1, y2] of yArr) {
      if (y1 > maxY) { // 断层了，重新统计高度
        total += maxY - minY
        minY = BigInt(y1)
        maxY = BigInt(y2)
      }
      else if (y2 > maxY) {
        maxY = BigInt(y2)
      }
    }
    total += maxY - minY
    ans += total * BigInt(xLen) // total * xLen 可能超出 number 的范围，所以需要将数据改为 bigint 存储
    ans %= MOD
  }
  return Number(ans)
}
```