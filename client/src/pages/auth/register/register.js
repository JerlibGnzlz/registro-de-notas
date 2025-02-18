import { validarRegister } from "../../../validation/validaciones.js";

const form = document.querySelector("#registerForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("#nameInput").value.trim();
    const email = document.querySelector("#emailInput").value.trim();
    const password = document.querySelector("#passwordInput").value.trim();
    const confirmPassword = document.querySelector("#passwordConfirm").value.trim();

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
