//REQUERIMOS MODULOS DE TERCEROS
var express = require('express');
//instanciamos el objeto enturador que trae express para pasarselo en el index.js para que lo use.
var router = express.Router();

//REQUERIMOS MODULOS PROPIOS

//RUTAS
router.route('/')
	.get(function(req, res){
		console.log('cliente servido desde ruta / tipo get() !');//TODO: no aparece en consola.
		//res.sendFile('public/index.html');
	});

//exportamos el enrutador
module.exports.router = router;
