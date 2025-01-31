const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController.js');

router.get('/', cursosController.consultar);
router.get('/estudiantes', cursosController.consultar_cursos_estudiantes);

router.post('/', cursosController.ingresar);
router.post('/registraEstudiante', cursosController.asociarEstudiante);


router.route("/:id")
    .get(cursosController.consultarDetalle)
    .put(cursosController.actualizar)
    .delete(cursosController.borrar);



module.exports = router;
