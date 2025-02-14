import { validarLogin } from "./validaciones.js";

const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const loginForm = document.querySelector("#loginForm");

// Función para mostrar alertas de error
const mostrarError = (titulo, mensaje) => {
    Swal.fire({
        icon: "error",
        title: titulo,
        text: mensaje,
    });
};

// Función para mostrar alertas de éxito
const mostrarExito = (titulo, mensaje) => {
    Swal.fire({
        icon: "success",
        title: titulo,
        text: mensaje,
    });
};

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validación en cliente
    if (!validarLogin(emailInput, passwordInput)) {
        mostrarError("Validación fallida", "Por favor, verifica los campos ingresados.");
        return;
    }

    const userLogin = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
    };

    try {
        Swal.fire({
            title: "Iniciando sesión...",
            text: "Por favor, espera un momento.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            body: JSON.stringify(userLogin),
            headers: {
                "Content-Type": "application/json",
            },
        });

        Swal.close();

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: "Error desconocido del servidor" }));
            console.error("Error en la respuesta del servidor:", errorData);


            if (response.status === 400) {
                mostrarError("Cuenta no registrada", errorData.message || "No existe una cuenta asociada a este correo.");
                return;
            }

            mostrarError("Error inesperado", errorData.message || "Ocurrió un error desconocido.");
            return;
        }

        const result = await response.json();
        console.log("Resultado del servidor:", result);

        mostrarExito("Inicio de sesión exitoso", result.message || "Redirigiendo al dashboard...");
        setTimeout(() => {
            window.location.href = "../../pages/dashboard/dashboard.html";
        }, 3000);
    } catch (error) {
        Swal.close();

        console.error("Error en el inicio de sesión:", error);
        mostrarError(
            "Error de conexión",
            "No se pudo conectar con el servidor. Verifica tu red o contacta al administrador."
        );
    }
});
