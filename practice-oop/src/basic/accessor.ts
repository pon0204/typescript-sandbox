/**
 * アクセサ: privateプロパティへのアクセスを制御するメソッド
 * ゲッター: プロパティをゲットするためのアクセサー
 * セッター: プロパティをセットするためのアクセサー
 * 制御処理としてはバリデートが多い
 */

class User {
  /** 慣例的に接頭辞に「 _ 」(アンダースコア)をつける */
  private _name: string = ''
  #maxLength: number = 15

  // ゲッター
  get name(): string {
    return this._name
  }

  // セッター
  set name(name: string) {
    if (name && name.length > this.#maxLength)
      throw new Error(`nameの最大文字数: ${this.#maxLength}を超えています。`)
    this._name = name
  }
}

const taro = new User()
taro.name = 'Taro' // セッターが呼ばれる
console.log(taro.name) // ゲッターが呼ばれる。
taro.name = 'aaaaaaaaaaaaaaaaaa' // nameの最大文字数: 15を超えています。

export {}
