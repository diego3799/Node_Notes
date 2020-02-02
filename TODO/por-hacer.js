const fs = require('fs');

let listadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}
const cragarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {}
}
const crear = (descripcion) => {
    cragarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer)
    guardarDB();
    return porHacer;
}
const getListado = () => {
    cragarDB()
    return listadoPorHacer
}
const actualizar = (descripcion, completado) => {
    cragarDB()
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false
}
const borrar = (descripcion) => {
    cragarDB()
    let nuevoListado = listadoPorHacer.filter((tarea) => {
        return tarea.descripcion !== descripcion
    })
    listadoPorHacer = nuevoListado;
    guardarDB()
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}