export const validaciones = (nameInput, emailInput, passwordInput, confirmPasswordInput) => {


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

    if (passwordInput.value !== confirmPasswordInput.value) {
        Swal.fire({
            icon: "error",
            title: "Contraseñas no coinciden",
            text: "Las contraseñas no coinciden.",
        });
        return;
    }

    if (passwordInput.value.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Contraseña demasiado corta",
            text: "La contraseña debe tener al menos 6 caracteres.",
        });
        return;
    }

    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        Swal.fire({
            icon: "error",
            title: "Email inválido",
            text: "El email debe contener una '@' y un punto.",
        });
        return;
    }

    return true
}


