
const argumentosEntrada = process.argv.slice(2);
const opcion = argumentosEntrada[0];
const marca = argumentosEntrada[1];
const asientos = argumentosEntrada[2];

const { leerArchivo } = require('./helpers/leerArchivo');
const { escribirDatos } = require('./helpers/escribirDatos');
const { eliminarPropiedad } = require('./helpers/eliminarPropiedad');
const { verificaParametrosEntrada } = require('./helpers/verificarParametrosEntrada');

let objetoDatos = {};


const validarOpcionesEntrada = () => {
    switch(opcion){
        case 'leer':
            leerArchivo();
            break;
        case 'agregar':
            escribirDatos(objetoDatos,marca,asientos);
            break;
        case 'eliminar':
            eliminarPropiedad(objetoDatos,marca);
            break;
        default:
            //Codigo para informar al usuario
            verificaParametrosEntrada(argumentosEntrada);
    }
}

module.exports = {    
    validarOpcionesEntrada,
}
