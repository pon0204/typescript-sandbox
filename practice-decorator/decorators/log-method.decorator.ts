/**
 * メソッドデコレーターは、処理の追加や修正に使用する。
 * e.g. function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor){・・・}
 */

/**
 * @param target クラスのprototype。 stackメソッドの場合はコンストラクタ関数。
 * @param propertyKey プロパティキー。　実質メソッド名が入る。
 * @param descriptor プロパティディスクリプタ
 */

/**
 * プロパティディスクリプタ ・・・　プロパティの構成が記述されたオブジェクト、メソッドデコレーターであればメソッドの構成となる。
 * value: 値。メソッドデコレーターであればメソッド本体
 * writable: 書き込みは可能か
 * enumerable: 列挙可能プロパティであるか
 * configurable: 構成の変更や、対応オブジェクトからプロパティを削除することが可能か
 */

/**
 * ログ出力用のデコレータ-
 */

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // (1)変更前のものを退避
  const method = descriptor.value
  descriptor.value = function () {
    // (2) applyメソッドでthisをバインド
    const res = method.apply(this, arguments)
    // (3) ログを出力
    console.log(target, propertyKey, arguments, res)
    return res
  }
}

class Calc {
  @log
  add(a: number, b: number): number {
    return a + b
  }
}

console.log(new Calc().add(1, 1))

export {}
