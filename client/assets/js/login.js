import { validaciones } from "./validaciones.js";

const email = document.querySelector("#emailInput");
const password = document.querySelector("#passwordInput");

document.querySelector("#registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    if (email.value.trim() === "" || password.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Campos obligatorios",
            text: "Todos los campos son obligatorios.",
        });
        return;
    }

    if (password.value.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Contraseña demasiado corta",
            text: "La contraseña debe tener al menos 6 caracteres.",
        });
        return;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        Swal.fire({
            icon: "error",
            title: "Email inválido",
            text: "El email debe contener una '@' y un punto.",
        });
        return;
    }

    const newUser = {
        email: email.value,
        password: password.value,
    };
    try {
        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response)

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error en la respuesta del servidor:", errorData);

            Swal.fire({
                icon: "error",
                title: "Error al iniciar sesión",
                text: errorData.message || "Ocurrió un error en el servidor.",
            });
            return;
        }
        const result = await response.json();
        console.log(result);


        Swal.fire({
            icon: "success",
            title: "Ingreso exitoso",
            text: "Redirigiendo...",
        }).then(() => {
            window.location.href = "../../pages/dashboard/dashboard.html";
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
