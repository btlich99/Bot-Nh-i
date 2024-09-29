const { readFileSync } = require("fs");
const login = require("facebook-chat-api");
loginPath = { appState: JSON.parse(readFileSync(__dirname + "/log.js" + "utf-8")); }
login(loginPath, (err, data)) => {
if (err) return console.error(err);
  console.log(err);
  api.listenMqtt((err, message) => {
    if (err) return console.error(err)
    console.log(err);
    api.sendMessage(message.body, message.threadID, message.messageID);
  })
})
