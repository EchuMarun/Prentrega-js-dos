alert('Bienvenidos a la calculadora de egresados');

let costosDestino = {
    'BARILOCHE': [50000, 20000, 10000, 20000],
    'MENDOZA': [40000, 20000, 8000, 20000],
    'VILLACARLOSPAZ': [20000, 20000, 5000, 6000]
};

let looper = false;
let viaje;

const calcularPorViaje = () => {
    do {
        viaje = prompt("A qué lugar deseas viajar de egresado, Bariloche, Mendoza o Villa Carlos Paz?").toUpperCase();
        if (costosDestino.hasOwnProperty(viaje)) {
            looper = false;
        } else {
            alert('Reingrese el lugar de destino por favor');
            looper = true;
        }
    } while (looper);
};

calcularPorViaje();

let cantidadPersonas = parseInt(prompt('Ingrese la cantidad de personas:'));

let persona = {
    cantidad: cantidadPersonas
};

if (cantidadPersonas !== 1) {
    let destinoSeleccionado = costosDestino[viaje];
    let traslado = destinoSeleccionado[0] * cantidadPersonas;
    let boliches = destinoSeleccionado[1] * cantidadPersonas;
    let hotel = destinoSeleccionado[2];
    let excursiones = destinoSeleccionado[3] * cantidadPersonas;
    let gastoDiario = (traslado + boliches + hotel + excursiones);

    alert("El viaje elegido fue: " + viaje + ".\n La cantidad de personas es: " + persona.cantidad + ".\n El valor del pasaje costaría: $" + traslado + "\n El gasto diario en boliches sería: $" + boliches + "\n El costo del hotel por día es de: $" + hotel + "\n Valor de Excursiones por cada día sería: $" + excursiones + "\n El total del dinero que necesitas es: $" + gastoDiario);



} else {
    alert("No se ha ingresado una cantidad válida de personas.");
}

const preguntarContratarServicio = (respuesta) => {
    if (respuesta === 1) {
        alert("Servicio contratado con éxito.");
    } else if (respuesta === 2) {
        alert("¡Muchas gracias! Vuelva pronto.");
    } else {
        alert("Opción no válida. Muchas gracias y vuelva prontos.");
    }
};


let contratarServicio = parseInt(prompt("¿Desea contratar el servicio?\n1 - Sí\n2 - No"));
preguntarContratarServicio(contratarServicio);