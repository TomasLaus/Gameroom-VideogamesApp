const axios = require('axios');
const { Genre } = require('../db')
const {API_KEY} = process.env
const urlGenre = `https://api.rawg.io/api/genres?key=${API_KEY}` 


const getGenres = async (req, res, next) => {
    try {
        let genresApi = await axios.get(urlGenre)
        genresApi = genresApi.data.results
        let genres= genresApi.map(g => {
            return {
                id: g.id,
                name: g.name,
            }

        })
        genres.forEach((g) =>{
            Genre.findOrCreate({
                where: {
                    name: g.name,
                }
            })
        })
        res.json(genres)
    } catch (error) {
        next(error);
        
    };
};

module.exports = {
    getGenres,
}