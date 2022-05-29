class Parent {
  name = 'Parent'
}

class Child extends Parent {
  code = 'Child'
}

class Other {
  name = 'Object' // Parentと同じくnameプロパティがある
  flag = true
}

/** TはParentもしくは、Parentと互換性がある型とみなす場合 */
class GenericClass<T extends Parent> {
  value: T
  constructor(value: T) {
    this.value = value
  }
}

const genericParent = new GenericClass<Parent>(new Parent())

const genericChild = new GenericClass<Child>(new Child())
const genericOther = new GenericClass<Other>(new Other())

genericParent.value = new Other() // Other {name: 'Object', flag: true}
// genericChild.value = new Parent() // エラー Childに同じプロパティがないため、割当できない

export {}
