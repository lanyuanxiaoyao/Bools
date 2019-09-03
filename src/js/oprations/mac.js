/* eslint-disable no-undef */
import Common from "./common";

export default {
  chrome: {
    url: callback =>
      Common.childProcess.exec(
        `osascript -e 'tell application "Google Chrome" to return URL of active tab of front window'`,
        {
          encoding: "utf8"
        },
        (error, stdout, stderr) => {
          if (!error) {
            callback(stdout);
          }
        }
      ),
    open: url => {
      Common.childProcess.exec(
        `osascript -e 'tell application "Google Chrome" to open location "${url}"'`
      );
      utools.outPlugin();
    },
    remove: tag => {
      if (tag === "img") {
        Common.childProcess.exec(
          `osascript -e 'tell application "Google Chrome" to activate
          tell application "System Events" to keystroke "l" using command down
          delay 0.1
          tell application "System Events" to keystroke "javascript:document.querySelectorAll(\\"${tag}\\").forEach(item => item.style.setProperty(\\"display\\", \\"none\\"))"
          tell application "System Events" to key code 36
          tell application "System Events" to key code 36'`
        );
      }
      utools.outPlugin();
    },
    test: () => {
      Common.childProcess.exec(
        `osascript -e 'tell application "Google Chrome" to activate
        tell application "System Events" to keystroke "l" using command down
        delay 0.1
        tell application "System Events" to keystroke "javascript:alert(\\"Hello World\\")"
        tell application "System Events" to key code 36
        tell application "System Events" to key code 36'`
      );
      utools.outPlugin();
    }
  },
  safari: {
    url: callback =>
      Common.childProcess.exec(
        `osascript -e 'tell application "Safari" to return URL in front document'`,
        {
          encoding: "utf8"
        },
        (error, stdout, stderr) => {
          if (!error) {
            callback(stdout);
          }
        }
      ),
    open: url => {
      utools.hideMainWindow();
      if (url === "extension") {
        Common.childProcess.exec(
          `osascript -e 'tell application "Safari" to activate
          tell application id "sevs"
            tell process "Safari"
              keystroke "," using command down
              tell button 9 of toolbar 1 of window 1 to click
            end tell
          end tell'`
        );
      } else {
        Common.childProcess.exec(
          `osascript -e 'tell application "Safari" to open location "${url}"'`
        );
      }
      utools.outPlugin();
    }
  },
  firefox: {
    url: callback => {
      utools.hideMainWindow();
      Common.childProcess.exec(
        `osascript -e '
  tell application "Firefox" to activate
  tell application "System Events" to keystroke "l" using command down
  tell application "System Events" to keystroke "c" using command down
  delay 0.2
  return (the clipboard as text)'`,
        {
          encoding: "utf8"
        },
        (error, stdout, stderr) => {
          if (!error) {
            utools.showMainWindow();
            callback(stdout);
          }
        }
      );
    },
    open: url => {
      Common.childProcess.exec(
        `/Applications/Firefox.app/Contents/MacOS/firefox "${url}"`
      );
      utools.outPlugin();
    }
  },
  opera: {
    url: callback =>
      Common.childProcess.exec(
        `osascript -e 'tell application "Opera" to return URL of active tab of front window'`,
        {
          encoding: "utf8"
        },
        (error, stdout, stderr) => {
          if (!error) {
            callback(stdout);
          }
        }
      ),
    open: url => {
      Common.childProcess.exec(
        `osascript -e 'tell application "Opera" to open location "${url}"'`
      );
      utools.outPlugin();
    }
  },
  yandex: {
    url: callback =>
      Common.childProcess.exec(
        `osascript -e 'tell application "Yandex" to return URL of active tab of front window'`,
        {
          encoding: "utf8"
        },
        (error, stdout, stderr) => {
          if (!error) {
            callback(stdout);
          }
        }
      ),
    open: url => {
      utools.hideMainWindow();
      Common.childProcess.exec(
        `osascript -e 'tell application "Yandex" to open location "${url}"'`
      );
      utools.outPlugin();
    }
  }
};
