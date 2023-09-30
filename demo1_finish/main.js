// ######################################
// ふわふわクラス
// ######################################
class MyFuWaFuWa {

  constructor(el) {
    // 毎フレームカウントされる
    this.count = 0

    // 操作する要素
    this.el = el

    window.requestAnimationFrame(() => {
      this._update()
    })
  }

  // 毎フレーム実行される処理
  _update() {
    // sin()に角度(ラジアン)を渡すと-1から1の値を返す

    // countを角度とみなして、ラジアンに変換
    const rad = this.count * Math.PI / 180

    // radに適当な数値を掛けて、それぞれの値でズレが出るようにする
    // このズレが浮遊感を作る上でポイント
    const x = Math.sin(rad * -0.8) * 20
    const y = Math.sin(rad * 1.1) * 50
    const rot = Math.sin(rad * 0.65) * 20
    gsap.set(this.el, {
      x: x,
      y: y,
      rotationZ: rot,
    })

    // モーション速度
    this.count += 2

    window.requestAnimationFrame(() => {
      this._update()
    })
  }
}



init()
function init() {
  document.querySelectorAll('.js-tg').forEach((el) => {
    new MyFuWaFuWa(el)
  })
}



