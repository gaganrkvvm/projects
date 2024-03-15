document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to Our Website";
    const speed = 100; // Speed of typing in milliseconds
  
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.querySelector(".opening-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    setTimeout(typeWriter, 1000); // Delay before starting typing
  });
  