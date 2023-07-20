const fs = require("fs/promises");

const eliminarPropiedad = async (objetoDatos,marca) => {

    try{

        const datos = await fs.readFile('./datos/autos.txt','utf-8');

        if(datos.length !== 0){
            objetoDatos = JSON.parse(datos);
        }

        if(objetoDatos.hasOwnProperty(marca)){
            delete objetoDatos[marca];
        }else{
            throw new Error("Esta propiedad no existe");
        }

        await fs.writeFile('./datos/autos.txt',JSON.stringify(objetoDatos,null,2));

        console.log("El auto ha sido eliminado satisfactoriamente");

    }catch(error){
        console.log('Error',error);
        console.log(error);
    }

}


module.exports = {
    eliminarPropiedad,
}