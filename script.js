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

// Add couple sticker
function showCoupleSticker() {
    const sticker = document.createElement('img');
    sticker.src = 'https://media-hosting.imagekit.io/b6071286c3664733/file_00000000bdfc61f78e0e04afcb6f6519_conversation_id=680e0dd1-81d4-8011-bd1c-77a3f1c05a37&message_id=68ed9711-8c30-434a-b235-66cee576fb3c.png'; // URL of the sticker image
    sticker.alt = 'Couple Sticker';
    sticker.classList.add('couple-sticker'); // Add a class for styling if needed
    document.body.appendChild(sticker);
}

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
                                        showCoupleSticker(); // Show the couple sticker here
                                    }, 500);
                                }, 800);
                            }, 1000);
                        }, 500);
                    }, 800);
                }, 600);
            }, 700);
        }, 800);
    }, 500);
}
