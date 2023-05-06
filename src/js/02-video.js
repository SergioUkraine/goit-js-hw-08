const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const throttle = require('lodash.throttle');

const onPlay = function(e) {
    localStorage.setItem("videoplayer-current-time", e.seconds);
    console.log(localStorage.getItem("videoplayer-current-time"));
};

const throttledOnPlay = throttle(onPlay, 1000);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

player.on('timeupdate', throttledOnPlay);