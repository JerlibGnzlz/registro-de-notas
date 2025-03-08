import { validarRegister } from "../../../validation/validaciones.js";

const form = document.querySelector("#registerForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("#nameInput").value.trim();
    const email = document.querySelector("#emailInput").value.trim();
    const password = document.querySelector("#passwordInput").value.trim();
    const confirmPassword = document.querySelector("#confirmPasswordInput").value.trim();

    if (!validarRegister(name, email, password, confirmPassword)) return;

    try {
        const response = await fetch("http://localhost:3001/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            const errorMsg = data.message || "Ocurrió un error inesperado.";
            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorMsg,
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: data.message || "Te registraste correctamente. Serás redirigido al login.",
        }).then(() => {
            setTimeout(() => {
                window.location.href = "../../../pages/auth/login/login.html";
            }, 3000);
        });
    } catch (error) {
        console.error("Error en el registro:", error);
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
      
      // Toggle password visibility for first password field
      document.getElementById("togglePassword1")?.addEventListener("click", () => {
        const passwordInput = document.getElementById("passwordInput");
        const eyeIcon = document.getElementById("eyeIcon1");
        const eyeOffIcon = document.getElementById("eyeOffIcon1");
        
        // Toggle the type attribute
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        
        // Toggle the icon
        eyeIcon.classList.toggle("hidden");
        eyeOffIcon.classList.toggle("hidden");
      });
      
      // Toggle password visibility for confirm password field
      document.getElementById("togglePassword2")?.addEventListener("click", () => {
        const confirmPasswordInput = document.getElementById("confirmPasswordInput");
        const eyeIcon = document.getElementById("eyeIcon2");
        const eyeOffIcon = document.getElementById("eyeOffIcon2");
        
        // Toggle the type attribute
        const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        confirmPasswordInput.setAttribute("type", type);
        
        // Toggle the icon
        eyeIcon.classList.toggle("hidden");
        eyeOffIcon.classList.toggle("hidden");
      });