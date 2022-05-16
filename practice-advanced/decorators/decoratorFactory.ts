/** デコレーターファクトリー。 ラップすることでデコレーターに引数を持たせることが出来る。 */
function decoratorFactory(value: string) {
  return function methodDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // この中で渡したvalueを使用できる
  }
}

function wrapLog(code: string) {
  // @logデコレーターを返す。
  return function log(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value
    descriptor.value = function () {
      const res = method.apply(this, arguments)
      // @wrapLogに渡されたcodeも出力
      console.log(code, target, propertyKey, arguments, res) // 0001 Calc {} add { [Iterator]  0: 1, 1: -2 } -1
      return res
    }
  }
}

class Calc {
  // デコレーターに引数を渡す。
  @wrapLog('0001')
  add(a: number, b: number): number {
    return a + b
  }
}

console.log(new Calc().add(1, -2)) // -1
