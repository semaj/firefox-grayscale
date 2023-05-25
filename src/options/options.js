function renderOptions() {
  return browser.storage.sync.get('settings').then((store) => {
    const theme = (store.settings && store.settings.theme && store.settings.theme === 'dark') ? 'dark' : 'light';
    document.getElementById('theme').checked = theme === 'dark';
  });
}

document.getElementById('theme').addEventListener('click', (e) => {
  const theme = e.target.checked ? 'dark' : 'light';
  const prefix = e.target.checked ? 'light' : 'dark';
  browser.storage.sync.set({
    settings: {
      theme
    }
  });
  document.body.className = theme;
  browser.browserAction.setIcon({
    path: `/icons/icon-${prefix}.svg`
  });
});

renderOptions();
