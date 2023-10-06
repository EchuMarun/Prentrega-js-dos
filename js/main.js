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
    const buscarButton = document.getElementById('buscar');

    buscarButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Obtener el destino seleccionado y las fechas de ida y vuelta
        const destino = destinoSelect.value; // Obtener el nombre de la provincia
        const idaFecha = new Date(idaInput.value);
        const vueltaFecha = new Date(vueltaInput.value);

        // Obtener el costo base según el destino seleccionado desde provinciasArgentinas
        const provinciaSeleccionada = provinciasArgentinas.find(provincia => provincia.provincia === destino);
        const costoBase = provinciaSeleccionada ? provinciaSeleccionada.costo : 0;

        // Calcular el número de días de viaje
        const diasDeViaje = Math.abs((vueltaFecha - idaFecha) / (24 * 60 * 60 * 1000));
        const costoTotal = costoBase * (1 + 0.05 * diasDeViaje);

        // Mostrar el resultado en un modal de SweetAlert
        Swal.fire({
            title: `El costo total del viaje a ${destino} por ${diasDeViaje} días es: $${costoTotal.toFixed(2)}`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Contratar',
            denyButtonText: 'Cancelar viaje',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Contratado', '', 'success');
            } else if (result.isDenied) {
                Swal.fire('Viaje cancelado', '', 'info');
            }
        });
    });
});









