let checkboxInput;
const idaFecha = localStorage.getItem('idaFecha');
const vueltaFecha = localStorage.getItem('vueltaFecha');
const cantidadPersonas = parseInt(localStorage.getItem('cantidadPersonas'));
const destino = localStorage.getItem('destino');

document.addEventListener('DOMContentLoaded', function() {
    // Recuperar el destino del localStorage
    const destino = localStorage.getItem('destino');

    // Mostrar el destino en el elemento con el id 'ciudadElegida'
    const ciudadElegidaElement = document.getElementById('ciudadElegida');
    ciudadElegidaElement.textContent = `Hoteles en ${destino}`;

    // Obtener la lista de hoteles según el destino
    const hotelesDestino = hoteles[destino];
    
    // Declarar checkboxInput fuera del bucle
    let checkboxInput;

    // Seleccionar el contenedor de las tarjetas de hoteles
    const contenedorHoteles = document.querySelector('#hoteles');

    // Mostrar las tarjetas de hoteles
    hotelesDestino.forEach((hotel, index) => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-3');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const imgElement = document.createElement('img');
        imgElement.src = hotel.imagen;
        imgElement.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const descripcionElement = document.createElement('p');
        descripcionElement.classList.add('card-text');
        descripcionElement.textContent = hotel.descripcion;

        const precioElement = document.createElement('p');
        precioElement.classList.add('card-text');
        precioElement.textContent = `Precio: $${hotel.precio} por noche`;

        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('form-check');

        // Crear checkboxInput
        checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.classList.add('form-check-input');
        checkboxInput.setAttribute('data-id', index);

        // Agregar evento change a checkboxInput
        checkboxInput.addEventListener('change', function(event) {
            const indiceHotel = event.target.getAttribute('data-id');
            const hotelSeleccionado = hoteles[destino][indiceHotel];
            const costoHotel = hotelSeleccionado.precio * calcularDiasViaje(idaFecha, vueltaFecha) * cantidadPersonas;
            console.log('Costo del hotel:', costoHotel);
        });

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('form-check-label');
        checkboxLabel.textContent = 'Seleccionar hotel';

        checkboxDiv.appendChild(checkboxInput);
        checkboxDiv.appendChild(checkboxLabel);
        cardBody.appendChild(descripcionElement);
        cardBody.appendChild(precioElement);
        cardBody.appendChild(checkboxDiv);
        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);
        contenedorHoteles.appendChild(colDiv);
    });

    // Obtener el botón "Contratar"
    const botonContratar = document.getElementById('contratar');
    botonContratar.addEventListener('click', function(event) {
        event.preventDefault();
        let costoTotal = 0;

        // Seleccionar todos los checkboxes marcados
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        checkboxes.forEach(checkbox => {
            const indiceHotel = checkbox.getAttribute('data-id');
            const hotelSeleccionado = hoteles[destino][indiceHotel];
            const costoHotel = hotelSeleccionado.precio * calcularDiasViaje(idaFecha, vueltaFecha) * cantidadPersonas;
            costoTotal += costoHotel;
        }); 
    Swal.fire({
        title: `Estás a un click de tu viaje a ${destino}`,
        text: `El costo total es: $${costoTotal}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, contratarlo',
        cancelButtonText: 'Cambiar destino',
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Contratado!',
                `El costo total es: $${costoTotal}. Tu reserva ha sido confirmada.`,
                'success'
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Si el usuario hace clic en "Cambiar destino", redirige al index.html
            window.location.href = '../index.html';
        }
    });    
});
});

// Función para calcular el número de días de viaje
function calcularDiasViaje(ida, vuelta) {
    const unDia = 24 * 60 * 60 * 1000; 
    const fechaIda = new Date(ida);
    const fechaVuelta = new Date(vuelta);
    return Math.round(Math.abs((fechaVuelta - fechaIda) / unDia));
}



