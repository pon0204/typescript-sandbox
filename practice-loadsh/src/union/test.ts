import { lodashValue, MyValue } from './value'

test('test method name', () => {
  expect(MyValue).toEqual(lodashValue)
})
