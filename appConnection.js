chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message === 'OPEN_IN_PIPIT') {
		let video = document.getElementsByTagName('video')[0];

		// Twitch needs two pause events. The first mutes the video, and the second actually pauses
		async function pauseVideo() {
			video.pause()
			await sleep(1);
			video.pause()
		}

		let time = '';

		if (video !== undefined) {
			pauseVideo();
			if (video.currentTime >= 5) {
				time = '&time=' + String(video.currentTime);
			}
		}
		
		let url = 'pipit://weblink?url=' + encodeURIComponent(window.location.href) + time;

		let link = document.createElement('a');
		link.href = url;

		document.body.appendChild(link);
		link.click();
	};
});

async function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}