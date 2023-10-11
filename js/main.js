const fechaActual = new Date().toISOString().split('T')[0];
localStorage.setItem('fechaActual', fechaActual);
const destinoSelect = document.getElementById('destino');

document.addEventListener('DOMContentLoaded', function() {
    const fechaActualGuardada = localStorage.getItem('fechaActual');
    const idaInput = document.getElementById('ida');
    const vueltaInput = document.getElementById('vuelta');
    if (fechaActualGuardada) {
        idaInput.setAttribute('min', fechaActualGuardada);
        vueltaInput.setAttribute('min', fechaActualGuardada);
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const destinoSelect = document.getElementById('destino');

    // Agregar opciones al select con costos
    provinciasArgentinas.forEach(function(provincia) {
        const option = document.createElement('option');
        option.textContent = `${provincia.provincia}`;
        option.value = provincia.provincia; // Establece el valor como el nombre de la provincia
        destinoSelect.appendChild(option);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const idaInput = document.getElementById('ida');
    const vueltaInput = document.getElementById('vuelta');
    const destinoSelect = document.getElementById('destino');
    const cantidadPersonasSelect = document.getElementById('cantidad_personas');
    const buscarButton = document.getElementById('buscar');

    buscarButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Validar si los campos están completos
        if (!destinoSelect.value || !idaInput.value || !vueltaInput.value || !cantidadPersonasSelect.value) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa tu viaje para continuar',
            });
            return;
        }

        // Obtener los datos del formulario
        const destino = destinoSelect.value;
        const idaFecha = idaInput.value;
        const vueltaFecha = vueltaInput.value;
        const cantidadPersonas = cantidadPersonasSelect.value;

        // Guardar los datos en localStorage
        localStorage.setItem('destino', destino);
        localStorage.setItem('idaFecha', idaFecha);
        localStorage.setItem('vueltaFecha', vueltaFecha);
        localStorage.setItem('cantidadPersonas', cantidadPersonas);

        // Redirigir a la página de hoteles
        window.location.href = '/pages/hoteles.html';
    });
});
