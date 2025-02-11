export const validaciones = (nameInput, emailInput, passwordInput, confirmPasswordInput) => {


    // Validar que los campos no estén vacíos
    if (nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        passwordInput.value.trim() === "" ||
        confirmPasswordInput.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Campos obligatorios",
            text: "Todos los campos son obligatorios.",
        });
        return;
    }

    // Validar que las contraseñas coincidan
    if (passwordInput.value !== confirmPasswordInput.value) {
        Swal.fire({
            icon: "error",
            title: "Contraseñas no coinciden",
            text: "Las contraseñas no coinciden.",
        });
        return;
    }

    // Validar longitud de la contraseña
    if (passwordInput.value.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Contraseña demasiado corta",
            text: "La contraseña debe tener al menos 6 caracteres.",
        });
        return;
    }

    // Validar formato del correo
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        Swal.fire({
            icon: "error",
            title: "Email inválido",
            text: "El email debe contener una '@' y un punto.",
        });
        return;
    }

    // Mensaje de éxito y envío del formulario
    Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Redirigiendo...",
    })
    return true
}


