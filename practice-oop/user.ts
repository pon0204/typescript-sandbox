class User {
  name: string
  constructor(name: string) {
    this.name = name
  }

  formatText(): string {
    return `name: ${this.name}`
  }
}

const taro = new User('taro')
console.log(taro.formatText())
console.log(taro.name)
