const ks = require("node-key-sender");
const binds = require("./binds.js");
const keyNames = binds.myFunc();
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text = "auto typer 1.0v";
const max = 100;
const run = async () => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      await sleep(100);
      ks.sendKey("space");
    } else if(text[i] in keyNames){
      await sleep(100);
      ks.sendKey(keyNames[text[i]]);
    } else {
      await sleep(100);
      ks.sendKey(text[i]);
    }
  }
  await sleep(100);
  ks.sendKey("enter");
};

const start = async () => {
  await sleep(3000);
  for (let i = 1; i <= max; i++) {
    const randInt = Math.floor(Math.random() * 4000) + 1;
    run();
    await sleep(15000 + randInt);
  }
};
start();
