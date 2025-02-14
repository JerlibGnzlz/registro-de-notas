export const validarRegister = (nameInput, emailInput, passwordInput, confirmPasswordInput) => {

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;


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
    if (!nameRegex.test(nameInput.value)) {
        Swal.fire({
            icon: "error",
            title: "Nombre inválido",
            text: "El nombre debe contener solo letras, espacios y tener entre 3 y 50 caracteres.",
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

    if (!emailRegex.test(emailInput.value)) {
        Swal.fire({
            icon: "error",
            title: "Email inválido",
            text: "El email debe tener un formato válido (ejemplo: usuario@dominio.com).",
        });
        return;
    }


    if (passwordInput.value.length < 8) {
        Swal.fire({
            icon: "error",
            title: "Contraseña demasiado corta",
            text: "La contraseña debe tener al menos 8 caracteres.",
        });
        return;
    }

    if (!passwordRegex.test(passwordInput.value)) {
        Swal.fire({
            icon: "error",
            title: "Contraseña insegura",
            text: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.",
        });
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        Swal.fire({
            icon: "error",
            title: "Contraseñas no coinciden",
            text: "Las contraseñas ingresadas no coinciden.",
        });
        return;
    }

    return true
}


export const validarLogin = (emailInput, passwordInput) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar campos vacíos
    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Campos obligatorios",
            text: "El email y la contraseña son obligatorios.",
        });
        return false;
    }

    // Validar formato del email
    if (!emailRegex.test(emailInput.value)) {
        Swal.fire({
            icon: "error",
            title: "Email inválido",
            text: "El email debe tener un formato válido (ejemplo: usuario@dominio.com).",
        });
        return false;
    }

    // Validar longitud de la contraseña
    if (passwordInput.value.length < 8) {
        Swal.fire({
            icon: "error",
            title: "Contraseña demasiado corta",
            text: "La contraseña debe tener al menos 8 caracteres.",
        });
        return false;
    }

    // Si todo es válido
    return true;
};