const LOG_ENABLED = false;
const SIMPLE_DAYVIEW = true;
const logoSrc = "https://portal.uprx.ce.nihon-u.ac.jp/uprx/images/univLogo.png";

const observer = new MutationObserver((mutations) => {
  // ロゴの差し替え
  const headerLogo = document.querySelector(
    "#headerForm > header > a > h1 > img"
  );
  if (headerLogo && headerLogo.src != logoSrc) {
    headerLogo.src = logoSrc;
  }

  // 日表示のシンプル化
  [
    ...document.getElementsByClassName(
      "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only inlineBlock"
    ),
    ...document.querySelectorAll(".lessonMemoArea"),
    document.querySelector("#portalSchedule1 > div.ourscheduleArea"),
    document.querySelector("#portalSchedule1"),
  ].forEach((dom) => {

    if (dom) dom.style.display = SIMPLE_DAYVIEW ? 'none' : 'block'
  })

  //小テスト答え隠し機能
  const answerTableElement = document.getElementById("funcForm:j_idt594")
  const hasCreatedAnswerButton = !!(document.getElementById("nuscript_ansButton"))
  if (answerTableElement && !hasCreatedAnswerButton) {
    const answerButton = document.createElement("button");
    answerButton.id = "nuscript_ansButton"
    answerButton.innerText = "答えの確認"
    answerButton.className = "ui-button ui-widget ui-state-default ui-corner-all"
    answerButton.style.padding = "4px 14px"
    answerButton.onclick = (e) => {
      e.preventDefault()
      answerButton.style.display = "none"
      answerTableElement.style.opacity = ""
    }
    document.getElementById("funcForm:j_idt481").appendChild(answerButton)
    answerTableElement.style.opacity = "0"
  }

})
observer.observe(document, { childList: true, subtree: true })






// ログ表示が有効な場合はコンソールにログを出力する
const printLog = (str) => {
  if (!LOG_ENABLED) return;
  console.log(str);
};

printLog("nusimpleportal is running!");

// ログインフォーム時はユーザ名にフォーカス（Enterのみでログインできるように）
const body_element = document.getElementById("infoForm");
const login_input_userId = document.getElementById("loginForm:userId");
if (body_element) {
  console.log(body_element);
  login_input_userId.focus();
}
