document.addEventListener
("DOMContentLoaded", () => {
    const targetDate = new Date("2024-12-11T00:00:00");
    const countdownElement = document.getElementById("countdown-timer");
  
    function updateCountdown() {
      const now = new Date();
      const timeLeft = targetDate - now;
  
      if (timeLeft <= 0) {
        countdownElement.textContent = "Event Started!";
        clearInterval(interval);
        return;
      }
  
      const hours = String(
        Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
     ).padStart(2, "0");
      const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");
  
      countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
  
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  });