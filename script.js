const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playButton = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullScreen = document.querySelector('.fullscreen');



// Play & Pause//

function showPlayIcon() {
    playButton.classList.replace('fa-pause', 'fa-play');
    playButton.setAttribute('title', 'Play');
}

function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.classList.replace('fa-play', 'fa-pause');
        playButton.setAttribute('title', 'Pause');
    } else {
        video.pause();
        showPlayIcon();
    }
}

video.addEventListener('ended', showPlayIcon);

// Progress Bar//



// Volume Controls//



// Change Playback Speed//



// Fullscreen//




playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);