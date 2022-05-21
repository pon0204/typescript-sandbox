import uniqBy from 'loadsh/uniqBy'

const array = [
  { id: 1, name: '伊藤' },
  { id: 2, name: '佐藤' },
  { id: 3, name: '伊藤' },
]

uniqBy(array, 'name')
