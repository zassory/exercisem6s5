const fs = require('fs/promises');

const escribirDatos = async(objetoDatos,marca,asientos) => {
    
    console.log('Pasa por el escribir');
    try{
        const datos = await fs.readFile('./datos/autos.txt');
        if(datos.length !== 0){
            objetoDatos = JSON.parse(datos);
        }
        
                
        const nuevoObjeto = { ...objetoDatos, 
            [marca] : {
                "modelo": `${marca}`, 
                "asientos" : `${asientos}`
            }            
         }//Esto es lo que recibe por linea de comando

        console.log(nuevoObjeto);

        await fs.writeFile('./datos/autos.txt',JSON.stringify(nuevoObjeto,null,2));

        console.log("Auto agregado correctamente");

    }catch(error){
        console.log(error);
    }
}


module.exports = {
    escribirDatos,
}