import { uniq } from 'lodash'
import { uniq as MyUniq } from './uniq'

export const array: number[] = [1, 2, 1]

export const MyValue = MyUniq<number>(array)
export const lodashValue = uniq<number>(array)

// export const array: (string | number)[] = [1, '伊藤', 1]
// export const MyValue = MyUniq<string | number>(array)
// export const lodashValue = uniq<string | number>(array)
