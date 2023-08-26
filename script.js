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

  const accessToken = Math.random().toString(36).substring(7);

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("access-token", accessToken);

  window.location.href = "/profile";
});

logoutBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/signup";
});

if (localStorage.getItem("access-token")) {
  window.location.href = "/profile";
}

window.addEventListener("popstate", () => {
  if (!localStorage.getItem("access-token")) {
    window.location.href = "/signup";
  }
});
