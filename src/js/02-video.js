import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
console.log(Player);

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
}

player.setCurrentTime(getTime()).then().catch(function (error) {
    switch (error.name) {
        case 'RangeError': break;
        default: break;
    }
});

function getTime() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : '';
    } catch (error) {
        console.log(error.message);
    }
}