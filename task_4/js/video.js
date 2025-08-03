document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.querySelector("video");
  
  if (videoElement) {
    const playButton = document.createElement("button");
    playButton.textContent = "Play";
    playButton.classList.add("bg-[var(--deep-teal)]", "text-white", "px-4", "py-2", "rounded");
    
    playButton.addEventListener("click", () => {
      if (videoElement.paused) {
        videoElement.play();
        playButton.textContent = "Pause";
      } else {
        videoElement.pause();
        playButton.textContent = "Play";
      }
    });

    videoElement.parentNode.insertBefore(playButton, videoElement);
  }
});