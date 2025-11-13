// 💌 Show selected love language
function showMessage(language) {
  const message = document.getElementById('message');
  message.textContent = `You selected: ${language} ❤️`;
}

// 🌸 Background music logic
window.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');
  const bgMusic = document.getElementById('bg-music');

  // Smooth fade-in function
  function fadeInAudio(audio, duration) {
    audio.volume = 0;
    audio.play();
    let step = 0.02; // volume increase step
    let interval = setInterval(() => {
      if (audio.volume < 1) {
        audio.volume = Math.min(audio.volume + step, 1);
      } else {
        clearInterval(interval);
      }
    }, duration / 50); // adjust fade speed
  }

  // 🎵 Play background music when button clicked
  if (playButton && bgMusic) {
    playButton.addEventListener('click', () => {
      fadeInAudio(bgMusic, 2000); // 2s fade-in
      playButton.style.display = 'none';
    });
  }

  // 🎫 Ticket popup logic
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const close = document.querySelector(".close");

  // Make ticket images clickable
  const ticketImages = document.querySelectorAll(".ticket-img");
  ticketImages.forEach(img => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = img.src;
      popupImg.alt = img.alt;
    });
  });

  // Close popup when clicking close button or outside image
  if (close) {
    close.addEventListener("click", () => popup.style.display = "none");
  }

  if (popup) {
    popup.addEventListener("click", e => {
      if (e.target === popup) popup.style.display = "none";
    });
  }
});
