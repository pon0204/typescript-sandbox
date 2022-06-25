/**
 * ビルダーパターンは、複雑なオブジェクトを段階的に構築することができる創造的なデザインパターン。
 * JavaScriptでは、これをメソッドチェイニングで実現する。
 */

class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true
    return this
  }
  addMustard() {
    this.mustard = true
    return this
  }
  addKraut() {
    this.kraut = true
    return this
  }
}

const myLunch = new HotDog('gluten free').addKetchup()
