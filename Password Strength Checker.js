const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");
const container = document.querySelector('.container');
const toggleBtn = document.getElementById("toggleBtn");

// Password visibility toggle
toggleBtn.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    pass.type = "password";
    toggleBtn.textContent = "Show";
  }
});

// Password strength logic
pass.addEventListener('input', () => {
  const passwordValue = pass.value;

  if (passwordValue.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (passwordValue.length < 4) {
    str.textContent = "Weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
    container.style.backgroundColor = "#ffe5e0";
  } else if (passwordValue.length >= 4 && passwordValue.length < 8) {
    str.textContent = "Medium";
    pass.style.borderColor = "orange";
    msg.style.color = "orange";
    container.style.backgroundColor = "#fff7e0";
  } else {
    str.textContent = "Strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
    container.style.backgroundColor = "#e0ffe5";
  }
});