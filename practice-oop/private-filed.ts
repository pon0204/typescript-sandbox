/**
 * private修飾子: ソフトプライバシー
 * プライベートフィールド: ハードプライバシー(クラス外からのアクセスを完全に遮断する)
 */

/** プライベートフィールド */
class Parent {
  #name = 'Parent'

  pFormatText(): string {
    return `name: ${this.#name}`
  }
}

class Child extends Parent {
  #name = 'Child'

  cFormatText(): string {
    return `name: ${this.#name}`
  }
}

const p = new Parent()
const c = new Child()

console.log(p.pFormatText()) // name: Parent
console.log(c.pFormatText()) // name: Parent // プライベートフィールドのため、オーバーライドされない。
console.log(c.cFormatText()) // name: Child

/** private修飾子の場合はプロパティ名が被るとエラーになる */
/**
 * class Parent {
 *  private name = 'Parent';
 * ...
 * }
 * class Child extends Parent{
 *  private name = 'Child'; // エラー発生!!
 * }
 *
 */

/** 通常のオーバーライド */
// class Parent {
//   name = 'Parent'

//   pFormatText(): string {
//     return `name: ${this.name}`
//   }
// }

// class Child extends Parent {
//   name = 'Child' // nameプロパティがオーバーライド

//   cFormatText(): string {
//     return `name: ${this.name}`
//   }
// }
// const p = new Parent()
// const c = new Child()

// console.log(p.pFormatText()) // name: Parent
// console.log(c.pFormatText()) // name: Child // nameプロパティがオーバーライドされている
// console.log(c.cFormatText()) // name: Child
