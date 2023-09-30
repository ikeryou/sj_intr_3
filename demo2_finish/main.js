// ######################################
// ふわふわクラス
// ######################################
class MyFuWaFuWa {

  constructor(el) {
    // 毎フレームカウントされる
    // ばらけさせる
    this.count = random(0, 1000)

    // 操作する要素
    this.el = el

    // 表示までアニメーション管理
    // 1で表示完了
    this.showVal = {val: 0}

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
    // his.showVal.valが1になるほど移動量を小さくする
    const x = Math.sin(rad * -0.8) * 50 * (1 - this.showVal.val)
    const y = Math.sin(rad * 1.1) * 70 * (1 - this.showVal.val)
    const rot = Math.sin(rad * 0.65) * 50 * (1 - this.showVal.val)
    gsap.set(this.el, {
      x: x,
      y: y + map(this.showVal.val, -300, 0, 0, 1), // 少し上から入ってくるように
      rotationZ: rot,
      opacity: map(this.showVal.val, 0, 1, 0, 0.2)
    })

    // モーション速度
    this.count += 1.5

    window.requestAnimationFrame(() => {
      this._update()
    })
  }

  // 表示開始
  show(delay) {
    gsap.to(this.showVal, {
      val: 1, // this.showVal.valを0~1に変化させる
      duration: 2.5,
      delay: delay,
      ease: Power2.easeOut,
    })
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



