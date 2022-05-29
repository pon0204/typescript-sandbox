class User {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const taro = new User('Taro')
// taro.name = 'TARO'  // エラー

export {}
