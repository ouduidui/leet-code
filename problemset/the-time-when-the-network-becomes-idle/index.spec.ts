import { networkBecomesIdle } from '.';

describe('网络空闲的时刻', () => {
  testCase(networkBecomesIdle);
});

function testCase(fn: (edges: number[][], patience: number[]) => number) {
  it('示例一', () => {
    const edges = [
      [0, 1],
      [1, 2]
    ];
    const patience = [0, 2, 1];
    const expected = 8;
    expect(fn(edges, patience)).toBe(expected);
  });

  it('示例一', () => {
    const edges = [
      [0, 1],
      [0, 2],
      [1, 2]
    ];
    const patience = [0, 10, 10];
    const expected = 3;
    expect(fn(edges, patience)).toBe(expected);
  });
}
