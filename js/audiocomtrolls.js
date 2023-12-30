// Add your JavaScript code here
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');
const back10Button = document.getElementById('back10');
const forward10Button = document.getElementById('forward10');
const progress = document.querySelector('.progress');
const timeline = document.getElementById('timeline');
const audioTime = document.getElementById('audioTime');
const speedButtons = document.querySelectorAll('.speed-buttons button');

// Function to update the play/pause button icon
function updatePlayPauseButton() {
  if (audio.paused) {
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayPauseButton();
});

backwardButton.addEventListener('click', () => {
  audio.currentTime -= 5; // Go back 5 seconds
});

forwardButton.addEventListener('click', () => {
  audio.currentTime += 5; // Go forward 5 seconds
});

back10Button.addEventListener('click', () => {
  audio.currentTime -= 10; // Go back 10 seconds
});

forward10Button.addEventListener('click', () => {
  audio.currentTime += 10; // Go forward 10 seconds
});

timeline.addEventListener('click', (event) => {
  const timelineWidth = timeline.offsetWidth;
  const clickPosition = event.offsetX;
  const seekTime = (clickPosition / timelineWidth) * audio.duration;
  audio.currentTime = seekTime;
});

speedButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const speed = parseFloat(button.textContent);
    audio.playbackRate = speed;
  });
});

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressWidth = (currentTime / duration) * 100;
  progress.style.width = `${progressWidth}%`;

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration % 60);

  audioTime.textContent = `${formatTime(currentMinutes)}:${formatTime(currentSeconds)} / ${formatTime(durationMinutes)}:${formatTime(durationSeconds)}`;
});

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById('backward').innerHTML = '<i class="fas fa-step-backward"></i>';
document.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i>';
document.getElementById('forward').innerHTML = '<i class="fas fa-step-forward"></i>';

// Auto-play the audio when the page loads
audio.play();
// Update play/pause button initially
updatePlayPauseButton();
