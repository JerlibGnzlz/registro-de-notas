import { validaciones } from "./validaciones.js";
    const form = document.querySelector("#registerForm");
    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");
    const confirmPasswordInput = document.querySelector("#passwordConfirm");

   validaciones(form, nameInput, emailInput, passwordInput, confirmPasswordInput);

   form.addEventListener("submit", async (event) => {
    event.preventDefault();


    const valid = await validaciones(nameInput, emailInput, passwordInput, confirmPasswordInput);
    if (!valid) return; })
    
        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };

        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });
    
            const result = await response.json();
    
            if (response.ok){
                Swal.fire({
                    icon: "success",
                    title: "Registro exitoso",
                    text: "Redirigiendo...",
                }).then(() => {
                    window.location.href = "/login";
                });
            }
           else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: result.message || "Ocurrió un error en el servidor.",
                });}
        } catch (error) {
            console.error("Error en el registro:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema con la conexión al servidor.",
            });
        }
