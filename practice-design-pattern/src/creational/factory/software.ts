/**
 * ファクトリーとは、オブジェクトやオブジェクトのセットを作成するメソッドや関数のこと。
 * 作成ロジックをクライアントに公開することなく、オブジェクトを作成することができる
 */

class IOSButton {}
class AndroidButton {}

// Without Factory
const os = 'ios'
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()
const button2 = os === 'ios' ? new IOSButton() : new AndroidButton()

class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === 'ios') {
      return new IOSButton()
    } else {
      return new AndroidButton()
    }
  }
}

// With Factory
const factory = new ButtonFactory()
const btn1 = factory.createButton(os)
const btn2 = factory.createButton(os)
