const child_process = require("child_process");
const os = require("os");
const { clipboard } = require("electron");

window.child_process = () => child_process;
window.os = () => os;
window.writeTextToClipboard = text => {
  clipboard.writeText(text);
  utools.showNotification("复制成功: " + text, null, true);
};
