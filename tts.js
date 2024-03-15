document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("text-input");
    const convertBtn = document.getElementById("convert-btn");
    const stopBtn = document.getElementById("stop-btn");
  
    let speechSynthesis = window.speechSynthesis;
    let speechUtterance = new SpeechSynthesisUtterance();
  
    convertBtn.addEventListener("click", function() {
      if (!speechSynthesis) {
        alert("Speech synthesis is not supported by your browser. Please use a different browser.");
        return;
      }
  
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
  
      speechUtterance.text = textInput.value;
      speechSynthesis.speak(speechUtterance);
    });
  
    stopBtn.addEventListener("click", function() {
      if (speechSynthesis && speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
    });
  });
  