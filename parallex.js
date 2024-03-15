document.addEventListener("DOMContentLoaded", function() {
    const layers = document.querySelectorAll(".parallax-layer");
  
    document.addEventListener("mousemove", function(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      layers.forEach(layer => {
        const speed = layer.getAttribute("data-speed");
  
        const xOffset = mouseX * speed / 100;
        const yOffset = mouseY * speed / 100;
  
        layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });
  });
  