import { array1 } from '../union/value'
/**
 * 指定した値のみ取得する。
 * const obj = { 'a': 1, 'b': '2', 'c': 3 };
 * pick(obj, ['a', 'c']) => { 'a': 1, 'c': 3 }
 */

export function pick(obj: Record<string, any>, array: string | string[]) {
  const result: Record<string, any> = {}
  for (const pickKey of array) {
    if (!(pickKey in obj)) continue
    result[pickKey] = obj[pickKey]
  }
  return result
}
