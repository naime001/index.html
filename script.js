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
    sticker.src = 'https://example.com/couple-sticker.png'; // Replace this with the URL of the sticker image
    sticker.alt = 'Couple Sticker';
    sticker.classList.add('https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22file_00000000bdfc61f78e0e04afcb6f6519_conversation_id%3D680e0dd1-81d4-8011-bd1c-77a3f1c05a37%26message_id%3D68ed9711-8c30-434a-b235-66cee576fb3c.png%22%2C%22type%22%3A%22image%2Fpng%22%2C%22signedurl_expire%22%3A%222028-04-26T13%3A06%3A15.004Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2Fb6071286c3664733%2Ffile_00000000bdfc61f78e0e04afcb6f6519_conversation_id%3D680e0dd1-81d4-8011-bd1c-77a3f1c05a37%26message_id%3D68ed9711-8c30-434a-b235-66cee576fb3c.png%3FExpires%3D1840367175%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DwqULgFt5OOHpEd-wHbD2L8ePZ2cfP4cFN1yjDjoYOSB5F1Qs5hHkMHRo-AXNnQu~Rvq6lpzR~R2Q3~-RAx0vIZhQ5-190M9KRdBa6eMS5g5CVCAEQnaqlP74~JNJUKast~Uj~67WtlkKfJa8orL82mwcenZ1pizX4uktA1bGM-WqGipefO9vazlQxTMxblQLZ9c9FwfqffI9KIVl4IRFkOpOtSjnoR3ria8E5ij0DW3H1xIMOcD7U4AqFhuEjyBrVw8HFjwFOrvM0i~XzIZ7D~v6wMr~FQdBEH4SO7E~MwT7Gc2uEwMu9UlFkaQoXvtTD2lRqgMRd1hJXNgRNDsWjg__%22%7D'); // Add a class for styling
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
