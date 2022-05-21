/**
 * 配列オブジェクトから、指定したkeyの値の重複を取り除く。
 * const array: TUser[] = [
 * { id: 1, name: '伊藤' },
 * { id: 2, name: '佐藤' },
 * { id: 3, name: '伊藤' },
 * ]
 * uniqBy<TUser>(array, 'name')
 * [
 * {id: 1, name: '伊藤'},
 * {id: 2, name: '佐藤'}
 * ]
 * 型に存在しないkeyを使用した場合は型エラーが起きる
 * uniqBy<TUser>(array, 'hoge') //　エラー
 */

export function uniqBy<T>(array: T[], key: keyof T): T[] {
  const map = new Map()
  for (const obj of array) {
    if (map.has(obj[key])) continue
    map.set(obj[key], obj)
  }
  return [...map.values()]
}

// 過去のメモ
// export function uniqBy<T>(array: T[], key: keyof T): T[] {
//   let results: T[] = []
//   let keyValues: T[typeof key][] = []
//   for (const obj of array) {
//     if (keyValues.includes(obj[key])) continue
//     results.push(obj)
//     keyValues.push(obj[key])
//   }
//   return results
// }
