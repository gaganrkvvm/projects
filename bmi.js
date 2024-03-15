function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");
  
    const height = parseFloat(heightInput.value) / 100; // Convert height to meters
    const weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultDiv.innerText = "Please enter valid height and weight values.";
      return;
    }
  
    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);
  
    resultDiv.innerText = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  }
  