'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetTipodeServicio: fnGetTipodeServicio,
    setTipodeServicio:setTipodeServicio,
    existNomTipoServicio:existNomTipoServicio
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetTipodeServicio(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM tipo_servicio`
    )
}
function setTipodeServicio(datos) {
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM tipo_servicio(@descripcion)`
    ,datos)
}
function existNomTipoServicio(datos) {
    console.log("Funcion existNomtipoActivos",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `INSERT INTO tipo_servicio(@intervencion_programada,@intervencion_urgente,@mantenimiento,@modalidad) VALUES 
    (intervencion_programada,intervencion_urgente,mantenimiento,modalidad)`
    ,datos)
}