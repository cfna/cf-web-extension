
const TOKEN_REFRESH_TIME =  1_800_000
const BACKGROUND_TASK_ACTIVE = false

function onTabUpdated(tabId, changeInfo) {
    console.log('onTabUpdated() invoked with tabId:' + tabId + ' and changeInfo: ' + JSON.stringify(changeInfo))
    if (!BACKGROUND_TASK_ACTIVE) {
        console.log('Background task not active, starting it')
        setInterval(refreshCookie, TOKEN_REFRESH_TIME)
        BACKGROUND_TASK_ACTIVE = true
    } else {
        console.log('Background task already running. Skipping.')
    }
}

function refreshCookie() {
    console.log('Refreshing cookie (dummy action)')
}   

browser.tabs.onUpdated.addListener(onTabUpdated)