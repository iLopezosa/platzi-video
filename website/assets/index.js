const video = document.querySelector('video');
const playButton = document.querySelector('#playButton');
const muteButton = document.querySelector("#muteButton");

function MediaPlayer(config) {
this.media = config.el;
}

MediaPlayer.prototype.playPause = function() {
this.media.paused ? this.media.play() : this.media.pause();
}

MediaPlayer.prototype.muteUnmute = () => {
this.media.muted = !this.media.muted;
}

const player = new MediaPlayer({ el: video });
playButton.onclick = () => player.playPause();
muteButton.onclick = () => player.muteUnmute();