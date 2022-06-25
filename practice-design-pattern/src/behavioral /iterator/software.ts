/**
 * イテレータパターンは、要素のコレクションを走査するために使用される。
 * ほとんどのプログラミング言語では、forループのような反復処理の省略形が用意されているが、
 * JavaScript では Symbol.iterator プロパティを使用して、独自のイテレータを作成することができる。
 * 以下のコードでは、通常のforループで使用できるカスタムレンジ関数を作成している。
 */

function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (start < end) {
        start = start + step
        return { value: start, done: false }
      }
      return { done: true, value: end }
    },
  }
}

for (const n of range(0, 100, 5)) {
  console.log(n)
}
