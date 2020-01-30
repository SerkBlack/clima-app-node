const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${dirección}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);