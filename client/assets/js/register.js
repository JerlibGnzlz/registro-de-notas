const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const confirmPasswordInput = document.querySelector("#passwordConfirm");
const registerButton = document.querySelector("#registerButton");

const validarDatos = () => {
    if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "" || confirmPasswordInput.value === "") {
        alert("Todos los campos son obligatorios");
    }
    return true;
};