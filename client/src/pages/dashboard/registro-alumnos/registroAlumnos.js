document.addEventListener("DOMContentLoaded", async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
        Swal.fire({
            icon: "warning",
            title: "Sesión expirada",
            text: "Por favor, inicia sesión nuevamente."
        });
        window.location.href = "../../../../index.html";
        return;
    }

    try {
        const response = await fetch("http://localhost:3001/api/alumno/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            Swal.fire({ icon: "error", title: "Error", text: data.message });
            return;
        }

        console.log("Datos protegidos:", data);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }

    const logoutButton = document.querySelector("#logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            Swal.fire({
                title: "¿Estás seguro de que deseas cerrar sesión?",
                text: "Tendrás que iniciar sesión nuevamente para acceder.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, cerrar sesión",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    sessionStorage.removeItem("token");

                    Swal.fire({
                        icon: "success",
                        title: "Sesión cerrada",
                        text: "Redirigiendo a la página de inicio de sesión...",
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });

                    setTimeout(() => {
                        window.location.href = "../../../../index.html";
                    }, 2000);
                }
            });
        });
    } else {
        console.error("No se encontró el botón de cerrar sesión.");
    }
});
