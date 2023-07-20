const fs = require('fs/promises');

const leerArchivo = async() => {
    try{
        
        const datos = await fs.readFile('./datos/autos.txt','utf-8');

        if(datos.length === 0){
            return console.log("El archivo se encuentra vacio");
        }

        console.log(JSON.parse(datos));

    }catch(error){
        console.log("Error, consulte con el administrador");
        console.log(error);
    }

}

module.exports = {
    leerArchivo,
}