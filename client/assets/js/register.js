import { validaciones } from "./validaciones.js";
    const form = document.querySelector("#registerForm");
    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");
    const passwordInput = document.querySelector("#passwordInput");
    const confirmPasswordInput = document.querySelector("#passwordConfirm");

   validaciones(form, nameInput, emailInput, passwordInput, confirmPasswordInput);
