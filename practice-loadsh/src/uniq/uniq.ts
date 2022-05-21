/**
 * 配列から重複した値を取り除く。
 * uniq([2, 1, 2]);
 * => [2, 1]
 */

export function uniq<T>(array: T[]): T[] {
  let results: T[] = []
  for (const value of array) {
    if (results.includes(value)) continue
    results.push(value)
  }
  return results
}
