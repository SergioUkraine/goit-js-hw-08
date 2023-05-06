const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const throttle = require('lodash.throttle');

const onPlay = function(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);
    console.log(event.seconds);
    console.log(localStorage.getItem("videoplayer-current-time"));
};

const throttledOnPlay = throttle(onPlay, 1000);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.on('timeupdate', throttledOnPlay);