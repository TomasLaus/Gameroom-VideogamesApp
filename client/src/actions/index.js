import axios from 'axios';
import {
     GET_VIDEOGAMES,
     GET_VIDEOGAMES_BY_NAME,
     GET_VIDEOGAME_DETAIL,
     POST_VIDEOGAME,
     GET_GENRES,
     DB_OR_API,
     FILTER_ALPH,
     FILTER_RATING,
     FILTER_BY_GENRE,
     FILTER_BY_YEAR,
} from './constants';

export const getAllVideogames =()=> {

    return async function(dispatch) {
        try {
            await fetch("http://localhost:3001/videogames")
            .then(response => response.json())
            .then(data => {dispatch({
                type: GET_VIDEOGAMES,
                payload: data
            })
        })
        }catch (error) {
            console.error(error);
        };
    };
};

export function getVideogamesByName (name) {
    //console.log(name, 'ACTION')
    return function (dispatch) {
        fetch(`http://localhost:3001/videogames?name=${name}`)
        .then(res => res.json())
        .then(data => {dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: data})})
        .catch((err) => {
            console.log(err)
        })
    }

}



export const getVideogameDetail = payload => {

    return async function (dispatch) {
        try {
            await fetch(`http://localhost:3001/videogames/${payload}`)
                .then(response => response.json())
                .then(data => { dispatch({
                    type: GET_VIDEOGAME_DETAIL,
                    payload: data
                })
            })
        }
        catch (err) {
            console.log(err);
        };
    };
};

export function postVideogame(videogame) {
    return async function (dispatch) {
        try {
            const newVideoGame = await axios.post(`http://localhost:3001/videogames`, videogame);
            dispatch({
                type: POST_VIDEOGAME,
                payload: newVideoGame.data 
            });
        } 
        catch (error) {
            console.log(error)
        }
    }
}

export function getGenres () {
    return function (dispatch) {
        fetch(`http://localhost:3001/genres/`)
        .then(res => res.json())
        .then (data => {dispatch({type: GET_GENRES, payload: data})})
        .catch((err) => {
            console.log(err)
        })
    }
}


//////////********* FILTROS *************/////////////////////////////////////

export function dbOrApi (payload) {
    console.log(payload)
    return async function (dispatch) {
        try {
            dispatch ({
                type: DB_OR_API,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }
    }
};

export function FilterByOrder(payload) {
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_ALPH,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }    
    }
}

export function FilterByRating(payload) {
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_RATING,
                payload,
            });
        }
        catch (error) {
            console.log(error)
        }    
    }
}

export function filterByGenre (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_GENRE,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}


export function filterByYear (payload) {
    
    return async function (dispatch) {
        try {
            dispatch ({
                type: FILTER_BY_YEAR,
                payload
            });
        }
        catch (error) {
            console.log(error)
        }    
      
    }
}
