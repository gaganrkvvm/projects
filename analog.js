function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
  
    const hourRotation = 30 * hour + 0.5 * minute; // 30 degrees per hour, 0.5 degrees per minute
    const minuteRotation = 6 * minute + 0.1 * second; // 6 degrees per minute, 0.1 degrees per second
    const secondRotation = 6 * second; // 6 degrees per second
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to set the initial position of the hands
  updateClock();
  