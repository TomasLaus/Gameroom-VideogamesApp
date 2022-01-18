const express = require('express');
const router = express.Router();
const {getGenres} = require('../controllers/genre');



router.use(express.json());

////////////////////////////////////////////////////////////
//* Traigo los Genres desde la Api y los almaceno en la Base de Datos
///////////////////////////////////////////////////////////

router.get('/', getGenres);



module.exports = router;