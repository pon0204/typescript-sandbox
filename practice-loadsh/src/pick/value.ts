import { pick } from 'lodash'
import { pick as MyPick } from './pick'

export const obj = { a: 1, b: 2, c: 3 }
export const array = ['a', 'c']

export const MyValue = MyPick(obj, array)
export const lodashValue = pick(obj, array)
