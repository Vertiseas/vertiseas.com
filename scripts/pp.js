document.addEventListener('DOMContentLoaded', () => {
    const btnEnter = document.getElementById('btnEnter');
    let clickCount = 0; // Initialize a counter for button clicks

    // Add event listener to play audio when button is clicked
    btnEnter.addEventListener('click', () => {
        clickCount++; // Increment the click count

        // Check if the button has been clicked 10 times
        if (clickCount === 10) {
            alert("Bro.. there is no game yet.. chill");
        }

        // Create a new audio element for each click
        const audioPlayer = new Audio('media/baby-laughing-meme.wav');

        // Add error handling if needed
        audioPlayer.addEventListener('error', (e) => {
            console.error('Error loading audio:', e);
        });

        // Play the audio
        audioPlayer.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    });
});
