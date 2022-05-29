/**
 * Typescriptは「構造関係」で互換性を判断する。
 * Otherには、Parentと同じくnameプロパティがあるのでご完成があるとみなされる。
 */

class Parent {
  name = 'Parent'
}

class Child extends Parent {
  code = 'Child'
}

class Other {
  name = 'Other' // Parentと同じくnameプロパティがある
  flag = true
}

function genericsFn<T extends Parent>(arg: T) {
  console.log(arg)
}

genericsFn(new Parent())
genericsFn(new Child())
genericsFn(new Other()) // 継承されいないが、nameプロパティを持っているのでエラー起きない。

export {}
