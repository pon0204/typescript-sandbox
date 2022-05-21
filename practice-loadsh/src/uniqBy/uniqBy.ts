/**
 * 配列オブジェクトから、指定したkeyの値の重複を取り除く。※ 値の上書きはされない。
 * const array: TUser[] = [
 * { id: 1, name: '伊藤' },
 * { id: 2, name: '佐藤' },
 * { id: 3, name: '伊藤' },
 * ]
 * uniqBy<TUser>(array, 'name')
 * [
 * {id: 1, name: '伊藤'}, id: 1の伊藤は、id:3の伊藤に上書きされない。
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

// 重複した値を上書きしていく場合は以下の実装。 id: 1の伊藤は、id:3の伊藤に上書きされる。
// export function uniqBy<T>(array: T[], key: keyof T): T[] {
//   return [...new Map(array.map((obj) => [obj[key], obj])).values()]
// }
/**
 * [
 * {id: 3, name: '伊藤'}, id: 1の伊藤は、id: 3の伊藤に上書きされる。
 * {id: 2, name: '佐藤'}
 * ]
 */

// pushベースの実装
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
