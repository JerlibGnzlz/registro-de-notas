
    const calificaciones = document.querySelector('#calificaciones');
    const registrarAlumno = document.querySelector('#registrarAlumno');

    const ingresarCalificaciones = () => {
        calificaciones.classList.remove('hidden'); // Mostrar el formulario
    };

    registrarAlumno.addEventListener("click", ingresarCalificaciones);