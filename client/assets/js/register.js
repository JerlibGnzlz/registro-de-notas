import { validaciones } from "./validaciones.js";
const form = document.querySelector("#registerForm");
console.log("📝 Formulario encontrado:", form);

const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const confirmPasswordInput = document.querySelector("#passwordConfirm");


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const valid = validaciones(nameInput, emailInput, passwordInput, confirmPasswordInput);
    if (!valid) return;

    const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    try {
        const response = await fetch("http://localhost:3001/api/auth/register", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);

        const result = await response.json();

        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Registro exitoso",
                text: "Redirigiendo...",
            }).then(() => {
                window.location.href = "../../pages/login/login.html";
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: result.message || "Ocurrió un error en el servidor.",
            });
        }
    } catch (error) {
        console.error("Error en el registro:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema con la conexión al servidor.",
        });
    }
});
