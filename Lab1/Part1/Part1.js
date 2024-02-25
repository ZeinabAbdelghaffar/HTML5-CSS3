var video = document.getElementById("videoPlayer");
var volumeRange = document.getElementById("volumeRange");
var speedRange = document.getElementById("speedRange");
var timeRange = document.getElementById("timeRange");
var playPauseBtn = document.getElementById("playPauseBtn");
var stopBtn = document.getElementById("stopBtn");
var rewindBtn = document.getElementById("rewindBtn");
var goToBeginningBtn = document.getElementById("goToBeginningBtn");
var goToEndBtn = document.getElementById("goToEndBtn");
var fastForwardBtn = document.getElementById("fastForwardBtn");
var muteUnmuteBtn = document.getElementById("muteUnmuteBtn");
var currentVideo = "BigBuckBunny.mp4";
video.addEventListener("timeupdate", function() {
    timeRange.value = video.currentTime;
});
playPauseBtn.addEventListener("click", function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
stopBtn.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;
});
rewindBtn.addEventListener("click", function() {
    video.currentTime -= 10;
