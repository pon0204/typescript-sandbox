/**
 * Proxyパターンは、他のオブジェクトの代用品やプレースホルダーを提供し、それへのアクセスを制御することができる。
 * 例えば、VueJSはProxyを使用して、オブジェクトのデータを傍受し、変更。
 */

const original = { name: 'jeff' }

const reactive = new Proxy(original, {
  get(target: Record<string, any>, key: string) {
    console.log('Tracking: ', key)
    return target[key]
  },
  set(target: Record<string, any>, key: string, value: any) {
    console.log('updating UI...')
    return Reflect.set(target, key, value)
  },
})

reactive.name // 'Tracking: name'

reactive.name = 'bob' // 'updating UI...'
