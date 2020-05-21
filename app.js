/*
COMO SE QUEDARÍA PARA GUARDAR LA TABLA EN UN ARCHIVO

const fs = require('fs');


let base = 6;
let data = '';

for (let i = 0; i <= 10; i++) {
    data += (`${base} * ${i} = ${base * i}\n`);
}


//PARA GUARDAR LA TABLA EN UN ARCHIVO

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base } ha sido creado`);
});


AHORA PASAMOS TODA LA LÓGICA A MULTIPLICAR.JS
Y AQUI SOLO VA A RECIBIRLO
*/


const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('No reconocido');
}





//let base = 7;

//SI QUEREMOS COGER ESTA BASE DESDE CONSOLA   SEGUN LO QUE ESCRIBAMOS SERÍA ASÍ

let argv2 = process.argv;
console.log('Limite', argv.limite);
/*
let parametro = argv[2];
let base = parametro.split('=')[1]

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));*/