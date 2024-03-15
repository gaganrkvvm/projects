document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generate-btn");
    const generatedImage = document.getElementById("generated-image");
  
    generateBtn.addEventListener("click", function() {
      // Replace this URL with your AI image generation API endpoint
      const apiUrl = "https://api.deepai.org/api/text2img";
  
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add your API key here if required
          "Api-Key": "YOUR_API_KEY"
        },
        body: JSON.stringify({
          text: "A beautiful landscape"
        })
      })
      .then(response => response.json())
      .then(data => {
        // Update the generated image
        generatedImage.src = data.output_url;
      })
      .catch(error => {
        console.error("Error:", error);
      });
    });
  });
  