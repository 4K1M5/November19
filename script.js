const startDate = new Date('2023-11-17T17:40:00');
const twoYearMilestone = new Date('2025-11-19T00:00:00');
let celebrationShown = false;

function updateCountdown() {
    const now = new Date(); 
  
    let slidingDate = new Date(startDate);
    // Calculate time units
    let years = 0;
    while (true) {
      slidingDate.setFullYear(slidingDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate());
      console.log("slidingDate:", slidingDate);
      if (slidingDate < now) {
        years += 1;
      } else {
        slidingDate.setFullYear(slidingDate.getFullYear() - 1, startDate.getMonth(), startDate.getDate());
        break;
      }
    }
    let months = 0;
    while(true) {
      slidingDate.setMonth(slidingDate.getMonth() + 1);
      if (slidingDate < now) {
        months += 1;
      } else {
        slidingDate.setMonth(slidingDate.getMonth() - 1);
        break;
      }
    }

    let days = 0;
    while(true) {
      slidingDate.setDate(slidingDate.getDate() + 1);
      if (slidingDate < now) {
        days += 1;
      } else {
        slidingDate.setDate(slidingDate.getDate() - 1);
        break;
      }
    }

    let hours = 0;

    while(true) {
      slidingDate.setHours(slidingDate.getHours() + 1);
      if (slidingDate < now) {
        hours += 1;
      } else {
        slidingDate.setHours(slidingDate.getHours() - 1);
        break;
      }
    }

    let minutes = 0;
    while(true) {
      slidingDate.setMinutes(slidingDate.getMinutes() + 1);
      if (slidingDate < now) {
        minutes += 1;
      } else {
        slidingDate.setMinutes(slidingDate.getMinutes() - 1);
        break;
      }
    }

    let seconds = 0;
    while(true) {
      slidingDate.setSeconds(slidingDate.getSeconds() + 1);
      if (slidingDate < now) {
        seconds += 1;
      } else {
        slidingDate.setSeconds(slidingDate.getSeconds() - 1);
        break;
      }
    }
    
    // Update display
    document.querySelectorAll('[countdown="years"]').forEach(el => el.textContent = years);
    document.querySelectorAll('[countdown="months"]').forEach(el => el.textContent = months);
    document.querySelectorAll('[countdown="days"]').forEach(el => el.textContent = days);
    document.querySelectorAll('[countdown="hours"]').forEach(el => el.textContent = hours);
    document.querySelectorAll('[countdown="minutes"]').forEach(el => el.textContent = minutes);
    document.querySelectorAll('[countdown="seconds"]').forEach(el => el.textContent = seconds);

    // Check if we've hit the 2-year milestone
    if (years >= 2 && !celebrationShown) {
        showCelebration();
        celebrationShown = true;
    }
}

function showCelebration() {
    document.getElementById('celebration').classList.add('active');
    createFloatingHearts('floating-hearts-2', 100);
    createConfetti();
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe'];
    const celebration = document.getElementById('celebration');
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            celebration.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}

function createFloatingHearts(containerId, timeout) {
    const heartsContainer = document.getElementById(containerId);
    const hearts = ['💕', '💖', '💝', '💗', '💓', '💞'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 7000);
    }, timeout);
}

// Initialize
updateCountdown();
setInterval(updateCountdown, 1000);
createFloatingHearts('floating-hearts', 2000);
