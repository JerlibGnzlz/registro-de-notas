export const validarRegister = (name, email, password, confirmPassword) => {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!name || !email || !password || !confirmPassword) {
        Swal.fire({
            icon: "error",
            title: "Campos obligatorios",
            text: "Todos los campos son obligatorios.",
        });
        return false;
    }

    if (!nameRegex.test(name)) {
        Swal.fire({
            icon: "error",
            title: "Nombre inválido",
            text: "El nombre debe contener solo letras, espacios y tener entre 3 y 30 caracteres.",
        });
        return false;
    }

    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Email inválido",
            text: "El email debe tener un formato válido (ejemplo: usuario@dominio.com).",
        });
        return false;
    }

    if (!passwordRegex.test(password)) {
        Swal.fire({
            icon: "error",
            title: "Contraseña insegura",
            text: "La contraseña debe tener al menos 8 caracteres incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.",
        });
        return false;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: "error",
            title: "Contraseñas no coinciden",
            text: "Las contraseñas ingresadas no coinciden.",
        });
        return false;
    }

    return true;
};

