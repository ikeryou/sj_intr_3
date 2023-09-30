// ######################################
// ふわふわクラス
// ######################################
class MyFuWaFuWa {

  constructor(el) {
    // 毎フレームカウントされる

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

    // radに適当な数値を掛けて、それぞれの値でズレが出るようにする
    // このズレが浮遊感を作る上でポイント

    // モーション速度

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



