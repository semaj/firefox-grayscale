function setFilter(value) {
  document.documentElement.style.filter = value;
}

function handleFilter() {
  browser.storage.sync.get().then((store) => {
    if (store.allSites) {
      if (store.exclude && store.exclude.length) {
        const founded = store.exclude.find(element => element === window.location.hostname);
        if (founded) return setFilter('');
      }
      setFilter('grayscale(1)');
      return;
    }
    if (store.pages && store.pages.length) {
      const founded = store.pages.find(element => element === window.location.hostname);
      if (founded) {
        setFilter('grayscale(1)');
        return;
      }
    }
    setFilter('');
  });
}

browser.storage.sync.onChanged.addListener(handleFilter);
handleFilter();
