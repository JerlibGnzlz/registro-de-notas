const materias = document.querySelector('#materias');
const materiaSelect = document.querySelector('#materiaSelect');
const notaSelect = document.querySelector('#nota');
const registrarBtn = document.querySelector('button'); 

registrarBtn.addEventListener('click', () => {

    const materia = materiaSelect.value;
    const nota = notaSelect.value;

    if (materia === "" || nota === "") {
        alert("Por favor, selecciona una materia y una nota.");
        return;
    }

    const nuevaMateria = document.createElement('li');
    nuevaMateria.textContent = `${materia}`;
    nuevaMateria.classList.add('p-2', 'bg-stone-200', 'rounded-lg', 'my-1', 'mx-2', 'flex', 'justify-between');


    materias.appendChild(nuevaMateria);


    materiaSelect.value = "";
    notaSelect.value = "";
});


