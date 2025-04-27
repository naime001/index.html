const hackButton = document.getElementById('hackButton');
const statusText = document.getElementById('status');
const log = document.getElementById('log');

hackButton.addEventListener('click', hackProcess);

function showConsoleMessage(message) {
    const newMessage = document.createElement('p');
    newMessage.classList.add('console-text');
    newMessage.innerHTML = message;
    log.appendChild(newMessage);
}

function revealSecret() {
    setTimeout(() => {
        showConsoleMessage("💻 System Hacked! Secret revealed...");
        setTimeout(() => {
            showConsoleMessage("Message: Love from your hacker 🥺❤️");
        }, 2000);
    }, 1500);
}

// Simulate the hacking process with faster steps
function hackProcess() {
    statusText.innerHTML = "Hacking in progress...";
    setTimeout(() => {
        showConsoleMessage("Connecting to server...");
        setTimeout(() => {
            showConsoleMessage("Verifying password...");
            setTimeout(() => {
                showConsoleMessage("Decrypting files...");
                setTimeout(() => {
                    showConsoleMessage("Bypassing firewall...");
                    setTimeout(() => {
                        showConsoleMessage("I Love You🫶🏻...");
                        setTimeout(() => {
                            showConsoleMessage("Access granted...");
                            setTimeout(() => {
                                showConsoleMessage("System ID: 192.168.1.100");
                                setTimeout(() => {
                                    showConsoleMessage("IP Address: 103.45.67.89");
                                    setTimeout(() => {
                                        revealSecret();
                                    }, 500); // 500ms delay before revealing the secret
                                }, 800); // 800ms delay for IP Address message
                            }, 1000); // 1000ms delay for Access granted message
                        }, 500); // 500ms delay before "I Love You" message
                    }, 800); // 800ms delay for bypassing firewall
                }, 600); // 600ms delay for decrypting files
            }, 700); // 700ms delay for verifying password
        }, 800); // 800ms delay for connecting to server
    }, 500); // 500ms delay before starting the hack process
}
