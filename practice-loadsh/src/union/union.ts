/**
 * 複数の配列から重複した値を取りのぞいた配列を返す。
 * union([2], [1, 2]);
 * => [2, 1]
 */

export function union<T>(...arrays: T[][]): T[] {
  return [...new Set(arrays.flat())]
}
