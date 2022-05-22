import { union } from 'lodash'
// import { uniq as MyUniq } from './method'

export const array: number[] = [1, 2, 1]

export const MyValue = 'something method'
export const lodashValue = union(array, [3, 1], [7])
