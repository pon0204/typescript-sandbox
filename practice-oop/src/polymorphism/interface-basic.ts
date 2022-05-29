interface Hot {
  getHotMsg(): string
}

interface Ice {
  getIceMsg(): string
}

abstract class Drink {
  abstract name: string
  abstract comment(): void
}

/** コーヒーはホットとアイス */
class Coffee extends Drink implements Hot, Ice {
  name = 'コーヒー'
  comment(): void {
    console.log(`これは${this.name}です`)
  }
  getHotMsg(): string {
    return `温かい「ホット${this.name}」です`
  }
  getIceMsg(): string {
    return `冷たい「アイス${this.name}」です`
  }
}

const coffee = new Coffee()
coffee.name = 'コーヒー'
console.log(coffee.getHotMsg())
console.log(coffee.getIceMsg())

/** ヨーグルトはiceのみ */
// class Yogurt extends  Drink implements Ice{
//   ...
// }

/** スープはHotのみ */
// class Soup extends Drink implements Hot{
//   ...
// }

export {}
