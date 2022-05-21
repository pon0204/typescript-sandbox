import { uniqBy } from 'lodash'
import { uniqBy as MyUniqBy } from './uniqBy'
import { array } from './value'

test('test uniqBy', () => {
  const MyValue = MyUniqBy(array, 'name')
  const lodashValue = uniqBy(array, 'name')
  expect(MyValue).toEqual(lodashValue)
})
