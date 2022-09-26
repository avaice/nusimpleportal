const LOG_ENABLED = false
const SIMPLE_DAYVIEW = true
const logoSrc = 'https://portal.uprx.ce.nihon-u.ac.jp/uprx/images/univLogo.png'

const observer = new MutationObserver((mutations) => {
  // ロゴの差し替え
  const headerLogo = document.querySelector(
    '#headerForm > header > a > h1 > img'
  )
  if (headerLogo && headerLogo.src != logoSrc) {
    headerLogo.src = logoSrc
  }

  // 日表示のシンプル化
  ;[
    ...document.getElementsByClassName(
      'ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only inlineBlock'
    ),
    ...document.querySelectorAll('.lessonMemoArea'),
    document.querySelector('#portalSchedule1 > div.ourscheduleArea'),
    document.querySelector('#portalSchedule1'),
  ].forEach((dom) => {
    if (dom) dom.style.display = SIMPLE_DAYVIEW ? 'none' : 'block'
  })
})
observer.observe(document, { childList: true, subtree: true })

// ログ表示が有効な場合はコンソールにログを出力する
const printLog = (str) => {
  if (!LOG_ENABLED) return
  console.log(str)
}

printLog('nusimpleportal is running!')
