/**
 * 静的メンバー: インスタンスではなく、クラスそのものが使う
 */

class MyCount {
  static count = 0
  static countUp() {
    this.count++
  }

  // countDown() {
  // this.count-- // エラー
  // }
}

console.log(MyCount.count) // 0
MyCount.countUp()
MyCount.countUp()
console.log(MyCount.count) // 2

/** インスタンスからは呼び出せないのでエラーが起きる */
// const myCount = new MyCount()
// console.log(myCount.count) // エラー
// myCount.count // エラー
