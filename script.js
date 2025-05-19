document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      message.style.color = "green";
      message.textContent = "Login berhasil! 🎉";
    } else {
      message.style.color = "red";
      message.textContent = "Login gagal. Coba lagi.";
    }
  })
  .catch(() => {
    message.style.color = "red";
    message.textContent = "Terjadi kesalahan server.";
  });
});
