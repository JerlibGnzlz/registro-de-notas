
    const calificaciones = document.querySelector('#calificaciones');
    const registrarAlumno = document.querySelector('#registrarAlumno');

    const ingresarCalificaciones = () => {
        calificaciones.classList.remove('hidden'); 
    };

    registrarAlumno.addEventListener("click", ingresarCalificaciones);