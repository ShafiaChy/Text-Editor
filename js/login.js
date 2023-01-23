//Login
document.getElementById("btn-submit").addEventListener("click", function (e) {
  e.preventDefault();
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "my@editor.com" && password === "secret") {
    window.location.href = "index.html";
  } else {
    alert("Wrong password!");
  }
});
