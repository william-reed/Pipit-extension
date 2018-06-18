chrome.browserAction.onClicked.addListener(function(tab) {
    alert("hi");
    // TODO: check to make sure user is running macOS
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        // TOOD: probably should only allow for certain websites
        var url = tabs[0].url;

        // TODO: send currently open URL to pipit://

        var url = "pipit://weblink?url=" + encodeURIComponent(url)
        var code = "var link = document.createElement('a');" +
        "link.href='" + url + "';" +
        "document.body.appendChild(link);" +
        "link.click();";
        chrome.tabs.executeScript(tabs[0].id, { code: code })
    });

});