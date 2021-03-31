'use strict';

const video = document.querySelector('.video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const expandScreen = document.querySelector('.fa-expand');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

let wasVideoPlaying = false;
let progressIdentifier = null;

window.addEventListener('load', () => {
     timing.max = video.duration;
});

pauseBtn.addEventListener('click', () => {
    if (!video.paused) {
        video.pause();
        clearInterval(progressIdentifier);
    }
});

playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        progressIdentifier = setInterval(changeProgress, 100);
    }
});

expandScreen.addEventListener('click', () => {
    video.requestFullscreen();
});

timing.addEventListener('change',  () => {
    video.currentTime = timing.value;
    if (wasVideoPlaying) {
        video.play();
        progressIdentifier = setInterval(changeProgress, 100);
    } else {
        changeProgress();
    }
});

timing.addEventListener('mousedown', () => {
    wasVideoPlaying = !video.paused;
    if (wasVideoPlaying) {
        video.pause();
        clearInterval(progressIdentifier);
    }
});

function changeProgress() {
    currentTimeEl.innerText = video.currentTime;
    timing.value = video.currentTime;

}

video.addEventListener('ended', () => {
    clearInterval(progressIdentifier);
});

volume.addEventListener('change', () => {
    video.volume = volume.value;
});