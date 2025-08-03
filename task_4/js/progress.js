// filepath: c:\Users\User\Desktop\task_4\js\progress.js
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const totalLessons = 10; // Example total lessons
  let completedLessons = 0;

  function updateProgress() {
    const progressPercentage = (completedLessons / totalLessons) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Progress: ${completedLessons} / ${totalLessons}`;
  }

  function markLessonComplete() {
    if (completedLessons < totalLessons) {
      completedLessons++;
      updateProgress();
    }
  }

  // Example event listener for marking a lesson as complete
  document.querySelectorAll(".lesson-complete").forEach(button => {
    button.addEventListener("click", markLessonComplete);
  });

  updateProgress();
});