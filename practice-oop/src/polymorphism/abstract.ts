abstract class Drink {
  /** 抽象プロパティ */
  abstract name: string
  /** 抽象メソッド */
  abstract comment(): void
}

// インスタンスの生成はできない
// const drink = new Drink() // エラー

class Coffee extends Drink {
  name = 'コーヒー'
  comment(): void {
    console.log(`これは${this.name}です`)
  }
}

const coffee = new Coffee()
coffee.name = '珈琲'
coffee.comment() // これはコーヒーです

export {}
