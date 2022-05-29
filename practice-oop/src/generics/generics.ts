class GenericClass<T, R> {
  code: T
  flag: R
  constructor(code: T, flag: R) {
    this.code = code
    this.flag = flag
  }
}

const genericNum = new GenericClass<number | string, boolean>(100, true)
genericNum.code = 100
genericNum.code = 'hoge' // union型なのでエラー起きない。
genericNum.flag = true

class _GenericClass<T> {
  private _value: T
  constructor(value: T) {
    this._value = value
  }

  get value(): T {
    return this._value
  }

  set value(value: T) {
    this._value = value
  }
}

const _genericNum = new _GenericClass<number>(1)
console.log(_genericNum.value)
// genericNum.value = 'hoge' // エラー
