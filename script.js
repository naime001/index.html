// Elements
const revealButton = document.getElementById('revealButton');
const secretMessage = document.getElementById('secret-message');
const statusText = document.getElementById('status-text');

// Function to simulate hacking process
function hackProcess() {
  statusText.innerHTML = "Hacking in progress...";
  setTimeout(() => {
    statusText.innerHTML = "Decryption complete.";
    revealButton.innerHTML = "Reveal Secret Message";
    revealButton.style.backgroundColor = "#00ff00";
  }, 3000);
}

// Reveal secret after hack
function revealSecret() {
  secretMessage.style.display = 'block';
  document.body.style.backgroundColor = '#1a1a1a';
  secretMessage.style.fontSize = '2rem';
  revealButton.style.display = 'none';
}

// Event Listeners
revealButton.addEventListener('click', function() {
  hackProcess();
  setTimeout(revealSecret, 4000); // Delay before revealing
});
