function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const indicator = document.getElementById("indicator");
    const strengthText = document.getElementById("strength-text");
  
    let strength = 0;
  
    // Check criteria
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;
  
    // Update UI based on strength
    let width = (strength / 5) * 100;
    indicator.style.width = width + "%";
  
    if (strength <= 2) {
      indicator.className = "indicator weak";
      strengthText.innerText = "Weak Password";
    } else if (strength <= 4) {
      indicator.className = "indicator medium";
      strengthText.innerText = "Medium Password";
    } else {
      indicator.className = "indicator strong";
      strengthText.innerText = "Strong Password";
    }
  }
  