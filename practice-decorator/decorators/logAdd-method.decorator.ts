function addLog(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.value
  descriptor.value = function () {
    const res = method.apply(this, arguments)
    let decoRes = res
    // 0未満ならば0にする。
    if (typeof res === 'number') {
      decoRes = res > 0 ? res : 0
    }
    console.log(target, propertyKey, arguments, res, decoRes) // Calc {} 'add' { [Iterator]  0: 1, 1: -2 } -1 0
    return decoRes
  }
}

class Calc {
  @addLog
  add(a: number, b: number): number {
    {
      return a + b
    }
  }
}

console.log(new Calc().add(1, -2)) // 0
