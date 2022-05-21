import { uniq } from 'lodash'
import { uniq as MyUniq } from './uniq'

export const array: number[] = [1, 2, 1]

export const MyValue = MyUniq<number>(array)
export const lodashValue = uniq<number>(array)
