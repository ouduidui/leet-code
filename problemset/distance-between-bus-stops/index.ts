/**
 * 一次遍历
 * @desc 时间复杂度 O(N)  空间复杂度 O(1)
 * @param distance
 * @param start
 * @param destination
 * @returns
 */
export function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number,
): number {
  if (start > destination)
    [destination, start] = [start, destination]

  let sum = 0
  let dist = 0
  for (let i = 0; i < distance.length; i++) {
    sum += distance[i]
    if (i >= start && i < destination) dist += distance[i]
  }

  return Math.min(sum - dist, dist)
}
