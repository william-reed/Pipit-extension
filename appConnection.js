const video = document.getElementsByTagName('video')[0];

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message === 'OPEN_IN_PIPIT') {
		let currentTime = video.currentTime;
		let url = 'pipit://weblink?url=' + encodeURIComponent(window.location.href)
			+ (currentTime >= 5 ? '&time=' + String(currentTime) : '');

		let link = document.createElement('a');
		link.href = url;

		document.body.appendChild(link);
		link.click();
	};
});