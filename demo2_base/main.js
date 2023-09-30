// ######################################
// ふわふわクラス
// ######################################
class MyFuWaFuWa {

  constructor(el) {
    // 毎フレームカウントされる
    // ばらけさせる

    // 操作する要素
    this.el = el

    // 表示までアニメーション管理
    // 1で表示完了

    window.requestAnimationFrame(() => {
      this._update()
    })
  }

  // 毎フレーム実行される処理
  _update() {
    // sin()に角度(ラジアン)を渡すと-1から1の値を返す

    // countを角度とみなして、ラジアンに変換

    // radに適当な数値を掛けて、それぞれの値でズレが出るようにする
    // このズレが浮遊感を作る上でポイント
    // his.showVal.valが1になるほど移動量を小さくする

    // モーション速度

    window.requestAnimationFrame(() => {
      this._update()
    })
  }

  // 表示開始
  show(delay) {
  }
}



init()
function init() {
  // テキストを分解
  const txtItems = []
  const tg = document.querySelector('.js-tg')
  const txt = tg.innerHTML
  const txts = txt.split('')
  tg.innerHTML = ''

  txts.forEach((t) => {
    const el = document.createElement('span')
    el.innerHTML = t
    tg.appendChild(el)

    const fuwa = new MyFuWaFuWa(el)
    txtItems.push(fuwa)
  })

  // 表示開始
  txtItems.forEach((fuwa, i) => {
    fuwa.show(0.25 + i * 0.1) // タイミングは少しずらす
  })
}



