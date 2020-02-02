const colors = require('colors');
const argv = require('./config/yargs').argv
const porHacer = require('./TODO/por-hacer')
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        listado.forEach(element => {
            console.log('=====Por Hacer===='.green);
            console.log(element.descripcion);
            console.log('Estado:', element.completado);
            console.log('=================='.green);
        });
        break;
    case 'actualizar':
        let act = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(act);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion)

    default:
        break;
}