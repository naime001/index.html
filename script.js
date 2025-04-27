// Get elements
const revealText = document.querySelector('.reveal');
const secretMessage = document.getElementById('secretMessage');

// Event listener for reveal
revealText.addEventListener('click', function() {
  secretMessage.innerHTML = "💌 You're the best! This is your secret surprise for you!";
  secretMessage.style.color = '#ffcc00';
  secretMessage.style.fontSize = '1.5rem';
});
