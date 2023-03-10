'use strict'
const tipodeServicioModels = require ('../models/tipodeServicio.model');
module.exports = {
    fnGetTipodeServicio: fnGetTipodeServicio,
    setTipodeServicio:setTipodeServicio
}

function fnGetTipodeServicio(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        tipodeServicioModels.fnGetTipodeServicio()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, usuario:result.result}: reject({ok:false, error:'Error al consultar el tipo de servicio'}))
        })
    })
}
function setTipodeServicio(datos){
    return new Promise(function (resolve) {
        tipodeServicioModels.existNomTipoServicio(datos)
            .then(function (result) {
                console.log("👀",result.result[1])
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}