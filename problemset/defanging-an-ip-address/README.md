# IP地址无效化

> 难度：简单
>
> https://leetcode.cn/problems/defanging-an-ip-address/

## 题目

给你一个有效的 `IPv4` 地址 `address`，返回这个 `IP` 地址的无效化版本。

所谓无效化 `IP` 地址，其实就是用 "[.]" 代替了每个 "."。

### 示例

#### 示例 1：

```
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"
```

#### 示例 2：

```
输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"
```

## 解题

```ts 
/**
 * 正则
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param address
 * @returns
 */
export function defangIPaddr(address: string): string {
  return address.replace(/\./g, '[.]')
}
```