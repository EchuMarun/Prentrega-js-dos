document.addEventListener('DOMContentLoaded', function() {
    // Recuperar el destino del localStorage
    const destino = localStorage.getItem('destino');

    // Mostrar el destino en el elemento con el id 'ciudadElegida'
    const ciudadElegidaElement = document.getElementById('ciudadElegida');
    ciudadElegidaElement.textContent = `Hoteles en ${destino}`;

});

document.addEventListener('DOMContentLoaded', function() {
    // Recuperar los datos del localStorage
    const destino = localStorage.getItem('destino');
    const idaFecha = localStorage.getItem('idaFecha');
    const vueltaFecha = localStorage.getItem('vueltaFecha');
    const cantidadPersonas = localStorage.getItem('cantidadPersonas');

    // Seleccionar el contenedor donde se mostrarán los datos
    const infoContainer = document.getElementById('info-container');

    // Crear divs para mostrar los datos
    const destinoDiv = document.createElement('div');
    destinoDiv.textContent = `Destino: ${destino}`;

    const idaFechaDiv = document.createElement('div');
    idaFechaDiv.textContent = `Fecha de ida: ${idaFecha}`;

    const vueltaFechaDiv = document.createElement('div');
    vueltaFechaDiv.textContent = `Fecha de vuelta: ${vueltaFecha}`;

    const cantidadPersonasDiv = document.createElement('div');
    cantidadPersonasDiv.textContent = `Cantidad de personas: ${cantidadPersonas}`;

    // Agregar los divs al contenedor
    infoContainer.appendChild(destinoDiv);
    infoContainer.appendChild(idaFechaDiv);
    infoContainer.appendChild(vueltaFechaDiv);
    infoContainer.appendChild(cantidadPersonasDiv);
});

document.addEventListener('DOMContentLoaded', function() {
    // Recuperar el destino del localStorage
    const destino = localStorage.getItem('destino');

    // Mostrar el destino en el elemento con el id 'ciudadElegida'
    const ciudadElegidaElement = document.getElementById('ciudadElegida');
    ciudadElegidaElement.textContent = `Hoteles en ${destino}`;

    // Obtener la lista de hoteles según el destino
    const hotelesDestino = hoteles[destino];

    // Seleccionar el contenedor de las tarjetas de hoteles
    const contenedorHoteles = document.querySelector('#hoteles');

    // Mostrar las tarjetas de hoteles
    hotelesDestino.forEach(hotel => {
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

        cardBody.appendChild(descripcionElement);
        cardBody.appendChild(precioElement);

        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(cardBody);

        colDiv.appendChild(cardDiv);
        contenedorHoteles.appendChild(colDiv);
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // ... tu código existente ...

    // Seleccionar las tarjetas de hoteles
    const tarjetasHoteles = document.querySelectorAll('.card');

    // Asignar un evento de clic a los botones "Seleccionar" en las tarjetas de hoteles
    tarjetasHoteles.forEach((tarjeta, index) => {
        const seleccionarButton = tarjeta.querySelector('.seleccionar-button');
        seleccionarButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Detiene la propagación del evento para evitar que se ejecute el clic en la tarjeta

            // Guardar el índice del hotel seleccionado en el localStorage
            localStorage.setItem('hotelSeleccionado', index);
            alert('Hotel seleccionado.');
        });
    });

    // Obtener el botón "Contratar"
    const botonContratar = document.getElementById('contratar');

    // Asignar un evento de clic al botón "Contratar" para calcular el total
    botonContratar.addEventListener('click', function() {
        // Obtener los datos del localStorage
        const indiceHotelSeleccionado = localStorage.getItem('hotelSeleccionado');
        const destino = localStorage.getItem('destino');
        const idaFecha = localStorage.getItem('idaFecha');
        const vueltaFecha = localStorage.getItem('vueltaFecha');
        const cantidadPersonas = localStorage.getItem('cantidadPersonas');

        // Obtener el hotel seleccionado del array de hoteles usando el índice guardado
        const hotelSeleccionado = hoteles[destino][indiceHotelSeleccionado];

        // Calcular el total multiplicando el precio del hotel por el número de días de viaje
        const diasViaje = calcularDiasViaje(idaFecha, vueltaFecha);
        const total = hotelSeleccionado.precio * diasViaje * cantidadPersonas;

        // Mostrar un alert con el total calculado
        alert(`El total es: $${total}`);
    });
});

// Función para calcular el número de días de viaje
function calcularDiasViaje(ida, vuelta) {
    const unDia = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día
    const fechaIda = new Date(ida);
    const fechaVuelta = new Date(vuelta);
    return Math.round(Math.abs((fechaVuelta - fechaIda) / unDia));
}
