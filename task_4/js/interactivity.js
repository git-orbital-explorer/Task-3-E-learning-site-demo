document.addEventListener("DOMContentLoaded", () => {
  const courseCards = document.querySelectorAll('.course-card');

  courseCards.forEach(card => {
    card.addEventListener('click', () => {
      const courseTitle = card.querySelector('h3').innerText;
      alert(`You clicked on the course: ${courseTitle}`);
    });
  });

  const progressButtons = document.querySelectorAll('.track-progress');

  progressButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const courseTitle = button.closest('.course-card').querySelector('h3').innerText;
      alert(`Tracking progress for: ${courseTitle}`);
    });
  });
});