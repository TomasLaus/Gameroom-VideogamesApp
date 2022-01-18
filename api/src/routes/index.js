const { Router } = require('express');
const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const getVideo = require('./videogamesRoute')

const getGenre = require('./genreRoutes')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', getVideo);
router.use('/genres', getGenre);

module.exports = router;