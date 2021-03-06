import { uniqBy } from 'lodash'
import { uniqBy as MyUniqBy } from './uniqBy'

export type TUser = { id: number; name: string }

export const array: TUser[] = [
  { id: 1, name: '伊藤' },
  { id: 2, name: '佐藤' },
  { id: 3, name: '伊藤' },
]

export const MyValue = MyUniqBy(array, 'name')
export const lodashValue = uniqBy(array, 'name')
