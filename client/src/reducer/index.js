import {GET_VIDEOGAMES,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAME_DETAIL,
  POST_VIDEOGAME,
  GET_GENRES,
  DB_OR_API,
  FILTER_ALPH,
  FILTER_RATING,
  FILTER_BY_GENRE,
  FILTER_BY_YEAR,
} from '../actions/constants';

const initialState = {
  videogames: [],
  allVideogames: [],
  videogameDetail: [],
  genres: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES: 
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,
                videogameDetail: []
            }; 
            case GET_VIDEOGAMES_BY_NAME: 
            return {
                ...state,
                videogames: action.payload
            };
            case GET_VIDEOGAME_DETAIL:
                return {
                    ...state,
                    videogameDetail: action.payload,
                    allVideogames: [],
                    videogames: []
                };
            case POST_VIDEOGAME:
                console.log(action.payload, 'reducer')
                return {
                    ...state,
                    allVideogames: action.payload,
                }
            case GET_GENRES:
                return {
                    ...state,
                    genres: action.payload,
                }


                //***   FILTROS    ***//
            case DB_OR_API:
                const allVideogames = state.allVideogames;
                const originFilteredGames =
            action.payload === 'created'
              ? allVideogames.filter((game) => game.createdInDB) 
              : allVideogames.filter((game) => typeof game.id === 'number');
    
                return {
                    ...state,
                    videogames: action.payload === 'All' ? state.allVideogames : originFilteredGames,
                }; 

            case FILTER_ALPH:
                const todos = state.allVideogames;
                let sortedGames =
                  action.payload === "a-z"
                    ? todos.sort(function (a, b) {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                          return 1;
                        }
                        if (b.name.toLowerCase() > a.name.toLowerCase()) {
                          return -1;
                        }
                        return 0;
                      })
                    : todos.sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                          return 1;
                        }
                        if (b.name.toLowerCase() < a.name.toLowerCase()) {
                          return -1;
                        }
                        return 0;
                      });
                return {
                    ...state,
                    videogames: action.payload === 'all' ? state.allVideogames : sortedGames,
                };


            
            case FILTER_RATING: 
                let orderRating;
                if (action.payload === "asc") {
                    console.log(action.payload)
                    orderRating = state.allVideogames.sort(function (a, b) {
                        if (a.rating > b.rating) {
                            return 1;
                        }
                        if (a.rating < b.rating) {
                            return -1;
                        }
                        return 0;
                    });
                }
                if (action.payload === "desc") {
                    console.log(action.payload)
                    orderRating = state.allVideogames.sort(function (a, b) {
                        if (a.rating > b.rating) {
                        return -1;
                    }
                    if (a.rating < b.rating) {
                        return 1;
                    }
                    return 0;
                });
            }
            return { 
                ...state, 
                videogames: action.payload === 'DEFAULT' ? state.allVideogames : orderRating,
            };
            
        case FILTER_BY_GENRE:
            const allGames = state.allVideogames
            const filterDb = allGames.filter(game => game.genres.find(t => t.name === action.payload ? game : null))
            console.log(filterDb)
            const filterApi = allGames.filter(el => el.genres.includes(action.payload)) 

            const filterVideogames = action.payload === 'todos' ? allGames : filterApi.concat(filterDb)
            return {
                ...state,
                videogames: filterVideogames
            }

        case FILTER_BY_YEAR:
            const allJuegos = state.allVideogames
            const filterGames =allJuegos.filter(el => el.released.includes(action.payload)) 
            console.log(filterGames)
            const gamesFiltered = action.payload === 'All' ? allJuegos : filterGames
            return {
                ...state,
                videogames: gamesFiltered
            }

        default: 
          return state;
    }
};

export default rootReducer;