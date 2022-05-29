/**
 * プロパティの宣言や初期化をコンストラクタ引数で行うことが出来る。
 * ※ 修飾子は必須となる。
 */

class User {
  // constructor(public name: string) {}
  constructor(public name: string = 'Name') {} // 初期値設定
}

const a = new User()
const b = new User('Taro')
console.log(a.name) // Name
console.log(b.name) // Taro

export {}
