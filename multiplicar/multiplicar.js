const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor no es un numero`);
            return;
        }
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }


        //PARA GUARDAR LA TABLA EN UN ARCHIVO

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}