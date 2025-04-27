// Elements
const revealButton = document.getElementById('revealButton');
const secretMessage = document.getElementById('secret-message');
const statusText = document.getElementById('status-text');
const consoleOutput = document.getElementById('console-output');
const consoleBox = document.getElementById('console');
const hackMessage = document.getElementById('hack-message');

// Function to simulate hacking process with random logs
function hackProcess() {
  statusText.innerHTML = "Hacking in progress...";
  setTimeout(() => {
    showConsoleMessage("Connecting to server...");
    setTimeout(() => {
      showConsoleMessage("Verifying password...");
      setTimeout(() => {
        showConsoleMessage("Decrypting files...");
        setTimeout(() => {
          showConsoleMessage("Access granted...");
          setTimeout(() => {
            revealSecret();
          }, 1000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, 1000);
}

// Function to show console messages
function showConsoleMessage(message) {
  consoleOutput.innerText += "\n" + message;
  consoleBox.style.display = 'block';
  consoleOutput.scrollTop = consoleOutput.scrollHeight; // Auto scroll
}

// Reveal secret message
function revealSecret() {
  secretMessage.style.display = 'block';
  hackMessage.innerHTML = "Message: You're the one who holds the secret now...";
  revealButton.innerHTML = "Complete";
  revealButton.style.backgroundColor = "#00ff00";
  revealButton.style.cursor = 'not-allowed';
  consoleBox.style.display = 'none'; // Hide console after completion
}

// Event Listeners
revealButton.addEventListener('click', function() {
  hackProcess();
  revealButton.style.display = 'none'; // Hide button after start
});
