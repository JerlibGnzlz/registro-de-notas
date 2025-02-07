document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#registerForm");
    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");
    const confirmPasswordInput = document.querySelector("#passwordConfirm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto
        console.log("Evento submit detectado"); // Para comprobar si el evento funciona

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
            alert("Las contraseñas no coinciden");
            return;
        }

        if (passwordInput.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
          }

        alert("Registro exitoso");


        form.submit();
    });
});
