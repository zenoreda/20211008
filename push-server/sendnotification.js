const webpush = require("web-push"); // web-pushを参照
// サーバー鍵ペア ...（1）
const vapidPublicKey = "";
const vapidPrivateKey = "";
// 通知に必要なパラメーター ...（2）
const endpoint = "";
const p256dh = "";
const auth = "";
// web-pushライブラリーに検証のための情報を設定 ...（3）
webpush.setVapidDetails(
  "http://localhost:8080",
  vapidPublicKey,
  vapidPrivateKey
);
// pushSubscription（プッシュ通知送信先情報）を作成 ...（4）
const pushSubscription = {
  endpoint: endpoint,
  keys: {
    p256dh: p256dh,
    auth: auth,
  },
};
// プッシュ通知送信 ...（5）
webpush
  .sendNotification(
    pushSubscription,
    JSON.stringify({
      notification: {
        title: "あなただけにお得なお知らせ",
        body: "年に一度の限定セールがスタート！ 今すぐWebページでチェック！",
        icon: "assets/icons/icon-192x192.png",
      },
    })
  )
  .then((e) => {
    console.log(e);
  });
