const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca completada una tarea'
}
const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Crea un elemento', {
        descripcion
    })
    .command('borrar', 'Borra un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};