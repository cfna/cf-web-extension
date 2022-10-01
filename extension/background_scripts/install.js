function onExtensionInstalled() {
    console.log('Extension was installed!')
    setInterval(() => {
        refreshCookie()
    }, 6000);
}

browser.runtime.onInstalled.addListener(onExtensionInstalled)