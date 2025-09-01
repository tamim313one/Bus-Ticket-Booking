// Elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const formTitle = document.getElementById("form-title");

// Redirect function for navbar buttons
function goToAuth(mode) {
  window.location.href = `auth.html?mode=${mode}`;
}

// Check if "mode" parameter is passed (login or signup)
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get("mode");

if (mode === "signup") {
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  formTitle.innerText = "Sign Up";
}

// Toggle manually inside auth page
document.getElementById("show-signup").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  formTitle.innerText = "Sign Up";
});

document.getElementById("show-login").addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.innerText = "Login";
});

// Handle Signup
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = signupForm.querySelector("input[type='text']").value;
  const email = signupForm.querySelector("input[type='email']").value;
  const password = signupForm.querySelector("input[type='password']").value;

  // Save user in localStorage (demo only, not secure!)
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful! You can now login.");

  // Reset and switch to login
  signupForm.reset();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.innerText = "Login";
});

// Handle Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.querySelector("input[type='email']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert(`Welcome back, ${storedUser.name}!`);
    // Redirect to booking page (or dashboard)
    window.location.href = "booking.html";
  } else {
    alert("Invalid email or password.");
  }
});