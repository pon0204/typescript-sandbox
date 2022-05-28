import { union } from 'lodash'
import { union as MyUnion } from './union'

export const array1: number[] = [1, 2, 1]
export const array2: number[] = [3, 1]
export const array3: number[] = [7, 2]

export const MyValue = MyUnion(array1, array2, array3)
export const lodashValue = union(array1, array2, array3)
