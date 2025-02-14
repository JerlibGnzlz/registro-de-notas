import { validarRegister } from "./validaciones.js";
const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const confirmPasswordInput = document.querySelector("#passwordConfirm");


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const valid = validarRegister(nameInput, emailInput, passwordInput, confirmPasswordInput);
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


        if (!response.ok) {
            const errorData = await response.json();
            console.error(" Error en la respuesta del servidor:", errorData);


            if (response.status === 400 && errorData.data) {
                Swal.fire({
                    icon: "error",
                    title: "Usuario ya registrado",
                    text: `El usuario con email ${errorData.data.email} ya está registrado. Por favor, inicia sesión.`,
                });
                return;
            }

            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorData.message || "Ocurrió un error inesperado.",
            });

            return
        }

        const result = await response.json();
        console.log(result);

        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: result.message || "Te registraste correctamente. Serás redirigido al login.",
        });
        setTimeout(() => {
            window.location.href = "../../pages/login/login.html";
        }, 3000);

    }
    catch (error) {
        console.error("Error en el registro:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema con la conexión al servidor.",
        });
    }
})