import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FilterByOrder, FilterByRating, getAllVideogames } from '../../actions/index';
import Card from '../Card/Card';
import Paged from '../Paged/Paged';
import styles from './Home.module.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';



function Home() {
    
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    console.log(videogames)    
    
 
    /**
       //!--------- PAGINADO ----------------------------------
    **/
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);
    const lasIndexGame = currentPage * gamesPerPage;
    const firstIndexGame = lasIndexGame - gamesPerPage;
    const currentGames = videogames.slice(firstIndexGame, lasIndexGame);
    console.log(currentGames)
    const Page = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0)

    };



    /**
       //!--------- FILTROS ----------------------------------
    **/
       const [, setOrderAlph] = useState("");
       function handleFilter(event) {
        dispatch(FilterByOrder(event.target.value))
        setCurrentPage(1)
        setOrderAlph("Order" + event.target.value);
    }

    const [, setRating] = useState("Rating");
    function handleRating(event) {
        dispatch(FilterByRating(event.target.value))
        setCurrentPage(1)
        setRating("Order" + event.target.value);
    }




    
    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch])
    
    



    return (
        <div >
            
            {currentGames.length > 0 ? <Header handleFilter={handleFilter} handleRating={handleRating} /> : null}


            <div className={styles.CardHomeContainer}>
            <div className={styles.CardHome}>


            {
                currentGames.length > 0 ?
            <div>

           

  
       


            <div className={styles.CardHome}>
                
                    {currentGames.map(el => 
                        
                        <Card
                        key={el.id}
                        image={el.image}
                        name={el.name}
                        genres={!el.createdInDB ? el.genres.map((el, i) => <li style={{listStyle: 'none'}} key={i}>{el}</li> ) : el.genres.map((el, i) => <li style={{listStyle: 'none'}} key={i}>{el.name}</li> )}
                        id={el.id}
                        />
                        ) }

                    <div className={styles.PagedHome}>

                        <Paged
                        className={styles.Paged}
                        gamesPerPage={ gamesPerPage }
                        gamesLength= { videogames.length }
                        Page = { Page } />

                    </div>
            </div>
                     </div> 
                        : 
                        <div className={styles.loader}>
                            <Loader/>
                        </div>
                }
                </div>
            </div>    

            
        

        </div>
    )
}

export default Home
