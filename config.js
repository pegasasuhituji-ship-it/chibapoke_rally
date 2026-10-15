window.QUIZ_CONFIG = {
  // Apps Script をウェブアプリとしてデプロイしたURL(…/exec)
  apiUrl: "https://script.google.com/macros/s/AKfycbyZMYVSA2r-PHBUd3t902YxyxZ2tqi6MPAj7GJsV1M63PrbkjytL_IWb8FKRxoPWIeUGQ/exec",

  siteTitle: "クイズ",
  subtitle: "ぜんぶ とけるかな？",
  colors: { main: "#ff7a5c", sub: "#3b4a6b", paper: "#ffffff", base: "#fff3e0" },
  backgroundImage: "",
  titleImage: "",

  correctText: "せいかい！",   // 空文字("")にすると見出しを出さず画像だけになります
  wrongText: "ざんねん…",
  correctImages: ["img/correct1.png"],
  wrongImages: ["img/wrong1.png"]

  // ※ questions(答え・ヒント・コメント・画像)は Code.gs 側に移しました。
  //    答えをブラウザに置かないためです。
};
