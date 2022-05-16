/**
 * 戻り値が「〇未満ならば0にする」
 */

function decoAdd(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.value
  descriptor.value = function () {
    const res = method.apply(this, arguments) // 関数を実行する。戻り値をresに格納
    // (1) デコレーターの戻り値
    let decoRes = res
    // (2) 0未満ならば0にする
    if (typeof res === 'number') {
      decoRes = res > 0 ? res : 0
    }
    return decoRes
  }
}

class Calc {
  @decoAdd
  add(a: number, b: number): number {
    return a + b
  }
}

console.log(new Calc().add(1, 1)) // 2
console.log(new Calc().add(1, -2)) // 0
