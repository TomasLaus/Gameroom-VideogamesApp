const axios = require('axios');
const {Videogame, Genre} = require('../db');

const {API_KEY} = process.env

const GAMES = `https://api.rawg.io/api/games?key=${API_KEY}`

//////////////////////////////////////////////////////////
//* Traigo los videos games desde la API
//////////////////////////////////////////////////////////

const apiInfo = async () => {
   let videoApi = [];
   const allGames = [GAMES];
   for(let i= 0; i < 5; i++) {
       const gamesPerPag = await axios.get(`${allGames[i]}`)
       //console.log(gamesPerPag)
       allGames.push(gamesPerPag.data.next)
       const dataGame = gamesPerPag.data.results.map((e) =>
       
        {
            return {
                id: e.id,
                name: e.name,
                description: e.description, 
                image: e.background_image,
                released: e.released,
                rating: e.rating,
                platforms: e.platforms.map(p => p.platform.name),
                genres: e.genres.map(g => g.name),
                ratings: e.ratings,
                
            }
    
        }
       )
       //console.log(dataGame)
       
       videoApi = videoApi.concat(dataGame);
    }
    //console.log(videoApi)
    return videoApi;
}

//////////////////////////////////////////////////////////
//* Traigo los videos games desde la BASE DE DATOS
//////////////////////////////////////////////////////////
 const dbInfo = async () => {
    return await Videogame.findAll({ 
        include:{
            model: Genre,
            attributes: ['name'],
            through:{
                attributes: []
            }
        }
    })
        
}

//////////////////////////////////////////////////////////
//* Concateno la Base de Datos con la API
//////////////////////////////////////////////////////////
const getAllVideoGames = async () => {
    let videoApi = await apiInfo();
    let videoDB = await dbInfo();
    let totalInfo = videoDB.concat(videoApi);
    return totalInfo;
}

//////////////////////////////////////////////////////////
//* Traigo todos los Videos Games ya sea por nombre o solo por si mismo
//////////////////////////////////////////////////////////

const getAll = async (req, res, next) => {
    const {name} = req.query;
    try {
        if(name) {
            const videoDB = await Videogame.findAll({
                where: {
                    name: name,
                },
                include: {
                    model: Genre,
                }
            })
            if( videoDB.length !== 0) {
                let respDB = videoDB.map (v => {
                    return {
                        id: v.id,
                        name: v.name,
                        description: v.description,
                        image: v.image,
                        released: v.released,
                        rating: v.rating,
                        platforms: v.platforms,
                        genres: v.genres.map (v => v.name),

                    }
                })
                res.status(200).send(respDB)
            } else {
                
             const videoApi= (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results;
 
 
             let respApi = videoApi.map( r => {
                 return {
                     id: r.id,
                     name: r.name,
                     description: r.description,
                     image: r.background_image,
                     released: r.released,
                     rating: r.rating,
                     platforms: r.platforms.map(p => p.platform.name),
                     genres: r.genres.map(g => g.name),
                 }
             })
               
             
             //console.log(respApi)
             res.status(200).json(respApi)
            }
         } else {
             try {
                 const allGames = await getAllVideoGames();
                 res.json(allGames)
             } catch (error) {
                 console.log(error)
                 next(error);
                 
             }
         }
     } catch (error) {
         console.log(error);
         res.status(404).send({msg:"Videogame not found"})
        
     }
 }

 /////////////////////////////////////////////////////////
//* Realizo el POST para almacenar los videos juegos creados
//////////////////////////////////////////////////////////

const postVideoGame = async (req, res, next) => {
    try {
        const {name, id, description, image, released, rating, platforms, genres} = req.body;
        const newVideoGame = await Videogame.create({
            name, 
            id, 
            description,
            image,
            released,
            rating,
            platforms,
        })

    let genreDb = await Genre.findAll({ where: {name: genres } }); //name de tabla genre
    newVideoGame.addGenre(genreDb);
    res.status(200).send(newVideoGame);
    
    } 
    catch (error) {
        next(error);
    }
}

//////////////////////////////////////////////////////////////////////
//* Traigo los videos games por su id para ver su detalle
///////////////////////////////////////////////////////////////////////

const getById = async (req, res, next) => {
    const {id} = req.params;
    let gamesId = id;
    if (id.length > 6) {
        try {
            const respDB = await Videogame.findByPk(id, {include: Genre})
            gamesId= {
                id: respDB.id,
                name: respDB.name,
                description: respDB.description,
                image: respDB.image,
                released: respDB.released,
                rating: respDB.rating,
                platforms: respDB.platforms,
                genres: respDB.genres.map(g => g.name),
            }
            res.json(gamesId)
            
        } catch (error) {
            next(error);
            
        }
    } else {
        try {
            
            const screenshotApi = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?&key=${API_KEY}`);
            const trailerApi = await axios.get(`https://api.rawg.io/api/games/${id}/movies?&key=${API_KEY}`);
            const respApi = await axios.get(`https://api.rawg.io/api/games/${id}?&key=${API_KEY}`, );
            //console.log(respApi, 'devolverá?')
            gamesID= {
                id: respApi.data.id,
                name: respApi.data.name,
                description: respApi.data.description.replace( /(<([^>]+)>)/ig, ''),
                image: respApi.data.background_image,
                released: respApi.data.released,
                rating: respApi.data.rating,
                platforms: respApi.data.platforms.map(p => p.platform.name),
                genres: respApi.data.genres.map(g => g.name),
                ratings: respApi.data.ratings,
                screenshotApi: screenshotApi.data ? screenshotApi.data.results : null,
                trailerApi: trailerApi.data.results[0],
            }
            res.status(200).send(gamesID)
            
        } catch (error) {
            res.status(404).send({msg:'ID Game not found'})
        }
    }
}


 module.exports = {
    getAll,
    postVideoGame,
    getById
 }