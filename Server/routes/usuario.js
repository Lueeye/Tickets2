'use strict'
const express = require('express');
const router = express.Router();
const usuarioCtrl = require ('../controllers/usuario.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/get',fnGetUsuario);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetUsuario(req,res){
    usuarioCtrl.fnGetUsuario()
    .then(function (result){
        res.json(result);
    })
}


module.exports = router;