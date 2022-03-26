import { Node, createGraph } from '~/utils/graph';
import { cloneGraph, cloneGraph2 } from '.';
import { describe, it, expect } from 'vitest';

describe('克隆图', () => {
  describe('深度优先搜索', () => {
    testCase(cloneGraph);
  });
  describe('广度优先遍历', () => {
    testCase(cloneGraph2);
  });
});

function testCase(fn: (node: Node | null) => Node | null) {
  it.each([
    [
      [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3]
      ]
    ],
    [[[]]],
    [[]],
    [[[2], [1]]]
  ])('示例%#', (arr) => {
    const adjList = createGraph(arr);
    const result = fn(adjList);
    result !== null && expect(result).not.toBe(adjList);
    expect(result).toStrictEqual(adjList);
  });
}
