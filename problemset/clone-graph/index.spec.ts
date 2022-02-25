import { Node, createGraph } from '../../utils/graph';
import { cloneGraph, cloneGraph2 } from './index';

describe('克隆图', () => {
  describe('深度优先搜索', () => {
    testCase(cloneGraph);
  });
  describe('广度优先遍历', () => {
    testCase(cloneGraph2);
  });
});

function testCase(fn: (node: Node | null) => Node | null) {
  it('示例一', () => {
    const adjList = createGraph([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3]
    ]);

    const result = fn(adjList);
    expect(result).not.toBe(adjList);
    expect(result).toStrictEqual(adjList);
  });

  it('示例二', () => {
    const adjList = createGraph([[]]);

    const result = fn(adjList);
    expect(result).not.toBe(adjList);
    expect(result).toStrictEqual(adjList);
  });

  it('示例三', () => {
    const adjList = createGraph([]);

    const result = fn(adjList);
    expect(result).toStrictEqual(adjList);
  });

  it('示例四', () => {
    const adjList = createGraph([[2], [1]]);

    const result = fn(adjList);
    expect(result).not.toBe(adjList);
    expect(result).toStrictEqual(adjList);
  });
}
