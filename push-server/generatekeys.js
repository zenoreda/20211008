const webpush = require("web-push"); // web-pushを参照 ...（1）
// サーバーの鍵ペアを生成（一度だけ実行） ...（2）
const vapidKeys = webpush.generateVAPIDKeys();
console.log("publicKey:", vapidKeys.publicKey);
console.log("privateKey:", vapidKeys.privateKey);
