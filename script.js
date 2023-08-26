const localStorage = window.localStorage;

const signupForm = document.getElementById("signup");
const signupBtn = document.getElementById("signup-btn");
const profileDiv = document.getElementById("profile");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameOutput = document.getElementById("username");
const accessTokenOutput = document.getElementById("access-token");
const logoutBtn = document.getElementById("logout-btn");

signupBtn.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (!username || !password) {
    alert("Please enter a username and password.");
    return;
  }

  // Generate a random access token
  const accessToken = Math.random().toString(36).substring(7);

  // Store the user state in local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("access-token", accessToken);

  // Redirect to the profile page
  window.location.href = "/profile";
});

logoutBtn.addEventListener("click", () => {
  // Clear the user state from local storage
  localStorage.clear();

  // Redirect to the signup page
  window.location.href = "/signup";
});

// Check if the user is logged in
if (localStorage.getItem("access-token")) {
  // The user is logged in, so redirect to the profile page
  window.location.href = "/profile";
}

// Redirect to the signup page if the user tries to access the profile page without an access token
window.addEventListener("popstate", () => {
  if (!localStorage.getItem("access-token")) {
    window.location.href = "/signup";
  }
});
