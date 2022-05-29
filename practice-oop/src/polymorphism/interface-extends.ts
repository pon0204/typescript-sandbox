interface Hot {
  getHotMsg(): string
}

interface Ice {
  getIceMsg(): string
}

interface HotIce extends Hot, Ice {
  getHotIceMsg(): string
}

class Tea implements HotIce {
  name = '紅茶'

  getHotIceMsg(): string {
    return `${this.name}はホットもアイスもあります`
  }
  getHotMsg(): string {
    return `温かい「ホット${this.name}」です`
  }

  getIceMsg(): string {
    return `冷たい「アイス${this.name}」です`
  }
}

const tea = new Tea()

// 紅茶はホットもアイスもあります
console.log(tea.getHotIceMsg()) // 紅茶はホットもアイスもあります。

export {}
