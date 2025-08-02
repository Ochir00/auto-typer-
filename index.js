const ks = require("node-key-sender");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text = "wh";
const run = async () => {
  for (let i = 0; i < text.length; i++) {
    await sleep(100);
    ks.sendKey(text[i]);
  }
  await sleep(100);
  ks.sendKey("enter");
};
const start = async () => {
    await sleep(3000);
    while (true){
        const randInt = Math.floor(Math.random() * 2000) + 1;
        run()
        await sleep(15000 + randInt);
    }
}
start()