import { validarLogin } from "./validaciones.js";

const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");

document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const valid = validarLogin(emailInput, passwordInput);
    if (!valid) return;

    const userLogin = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    try {
        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            body: JSON.stringify(userLogin),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error en la respuesta del servidor:", errorData);

            if (response.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Credenciales inválidas",
                    text: errorData.message || "El email o la contraseña son incorrectos.",
                });
                return;
            }

            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorData.message || "Ocurrió un error inesperado.",
            });
            return;
        }

        const result = await response.json();
        console.log(result);

        Swal.fire({
            icon: "success",
            title: "Inicio de sesión exitoso",
            text: result.message || "Redirigiendo al dashboard...",
        });
        setTimeout(() => {
            window.location.href = "../../pages/dashboard/dashboard.html";
        }, 3000);
    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo conectar con el servidor.",
        });
    }
});
