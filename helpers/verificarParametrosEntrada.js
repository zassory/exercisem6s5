
const verificaParametrosEntrada = (argumentosEntrada) => {
    if(argumentosEntrada.length === 0){
        console.log("Por favor ingrese las siguientes opciones");
        console.log("Opcion 1: leer");
        console.log("Opcion 2: agregar propiedad y valor");
        console.log("Opcion 3: eliminar propiedad");
        return process.exit();
    }
}

module.exports = {
    verificaParametrosEntrada,
}