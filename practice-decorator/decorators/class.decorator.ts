/**
 * クラスデコレーターは、コンストラクタの上書きに使用する。
 * Typescriptにおいてデコレーターは関数形式で作成する。
 * e.g. function classDecorator(constructor: Function){・・・}
 * 引数としてコンストラクター関数を受け取る。
 */

/**
 * newMsgプロパティとoverMsgプロパティの初期化をするクラスデコレーター
 * @param {new(...args: any[])} インスタンス生成時におけるコンストラクター関数を表す。
 *
 */
function msgDeco<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newMsg = 'new message' // 新しくnewMsgのプロパティが追加される
    overMsg = 'deco message' // 値が上書きされる。
  }
}

@msgDeco
class MyClass {
  myMsg: string
  overMsg: string

  constructor(myMsg: string, overMsg: string) {
    this.myMsg = myMsg
    this.overMsg = overMsg
  }
}

console.log(new MyClass('my message', 'over message'))

// { myMsg: 'my message',
//   overMsg: 'deco message',
//   newMsg: 'new message' }
