export default {
  childProcess: window.child_process(),
  os: window.os(),
  version: () => {
    var version = this.os.type();
    if (version === "Darwin") {
      return "mac";
    } else if (version === "Windows_NT") {
      return "windwos";
    }
    return "";
  },
  sleep: ms => new Promise(resolve => setTimeout(resolve, ms))
};
