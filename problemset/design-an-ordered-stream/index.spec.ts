import { expect, it } from 'vitest'
import { OrderedStream } from '.'

it('涉及有序流', () => {
  const os = new OrderedStream(5)
  expect(os.insert(3, 'ccccc')).toStrictEqual([]) // 插入 (3, "ccccc")，返回 []
  expect(os.insert(1, 'aaaaa')).toStrictEqual(['aaaaa']) // 插入 (1, "aaaaa")，返回 ["aaaaa"]
  expect(os.insert(2, 'bbbbb')).toStrictEqual(['bbbbb', 'ccccc']) // 插入 (2, "bbbbb")，返回 ["bbbbb", "ccccc"]
  expect(os.insert(5, 'eeeee')).toStrictEqual([]) // 插入 (5, "eeeee")，返回 []
  expect(os.insert(4, 'ddddd')).toStrictEqual(['ddddd', 'eeeee']) // 插入 (4, "ddddd")，返回 ["ddddd", "eeeee"]
})
