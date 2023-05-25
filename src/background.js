function getThemedPrefix() {
  return browser.storage.sync.get('settings').then((store) => {
    if (store.settings && store.settings.theme && store.settings.theme === 'dark') {
      return 'light';
    }
    return 'dark';
  });
}

function init() {
  getThemedPrefix().then((prefix) => {
    browser.browserAction.setIcon({
      path: `/icons/icon-${prefix}.svg`
    });
  });
}

// installation or updating the extension
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install' || details.reason === 'update') {
    browser.storage.sync.get('settings').then((store) => {
      if (store.settings === undefined) {
        browser.storage.sync.set({
          settings: {
            theme: 'light'
          }
        });
      }
    });
  }
});

init();
