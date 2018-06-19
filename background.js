chrome.browserAction.onClicked.addListener(function(tab) {

    if (!window.navigator.platform.toLowerCase().includes('mac')) {
        alert('This extension only supports PiP on macOS.');
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'OPEN_IN_PIPIT');
    });

});