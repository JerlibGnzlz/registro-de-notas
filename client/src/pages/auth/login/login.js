const form = document.querySelector("#loginForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#emailInput").value.trim();
  const password = document.querySelector("#passwordInput").value.trim();

  // Validar campos
  if (!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Campos vacíos",
      text: "Todos los campos son obligatorios.",
    });
    return;
  }

  try {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.message || "Credenciales incorrectas.";
      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: errorMsg,
      });
      return;
    }

    sessionStorage.setItem("token", data.token);

    Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: data.message || "Redirigiendo al dashboard...",
    }).then(() => {
      setTimeout(() => {
        window.location.href =
          "../../../pages/dashboard/registro-alumnos/registroAlumnos.html";
      }, 2000);
    });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Hubo un problema con la conexión al servidor.",
    });
  }
});

// Toggle menú móvil
document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.getElementById("mobile-menu")?.classList.toggle("hidden");
});

// Toggle password visibility
document.getElementById("togglePassword")?.addEventListener("click", () => {
  const passwordInput = document.getElementById("passwordInput");
  const eyeIcon = document.getElementById("eyeIcon");
  const eyeOffIcon = document.getElementById("eyeOffIcon");

  // Toggle the type attribute
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Toggle the icon
  eyeIcon.classList.toggle("hidden");
  eyeOffIcon.classList.toggle("hidden");
});
