// Get the button and audio elements
const btnEnter = document.getElementById('btnEnter');
const audioPlayer = document.getElementById('audioPlayer');

// Add event listener to play audio when button is clicked
btnEnter.addEventListener('click', () => {
    audioPlayer.play();
});