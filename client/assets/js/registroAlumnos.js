document.addEventListener("DOMContentLoaded", async () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
        Swal.fire({
            icon: "warning",
            title: "Sesión expirada",
            text: "Por favor, inicia sesión nuevamente."
        });
        window.location.href = "../../pages/login/login.html";
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
            console.log("Botón de cerrar sesión presionado");
            sessionStorage.removeItem("token");
            window.location.href = "../../pages/login/login.html";
        });
    } else {
        console.error(error);
    }
});
