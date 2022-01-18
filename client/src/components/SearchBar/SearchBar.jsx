import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogamesByName } from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import styles from './SearchBar.module.css'



function SearchBar( {handleFilter, handleRating} ) {
    const dispatch = useDispatch();
    const[name, setName] = useState('')

    function handleInputChange(event) {
        event.preventDefault();
        setName(event.target.value.toLowerCase());
        console.log(name, 'HandleChange')
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getVideogamesByName(name))
        setName('');
        console.log(name, 'HandleSubmit')
    }

 
    
    return (
      <>
        <div className={styles.sb_nav}>
            <h1 className={styles.sb_Title}>GAMEROOM</h1>
            <form id='Find'  onSubmit={(e) => handleSubmit(e)} className={styles.Find}>
            <div className={styles.sb_searchcontainer}>
              <input
                 id='form' 
                 value={name} 
                 type="text" 
                 placeholder="Search a game" 
                 onChange ={(e) => {handleInputChange(e)}}
                className={styles.inputSearch} 
              />
              <button id={styles.sb_send} type="submit"  className={styles.submitBtn} >
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fsearch-button-png-search-icon-this-icon-is-supposed-to-represent-a-magnifying-glass-it-s-a-large-png-50-px-1600.png&f=1&nofb=1" alt="img not found" width="20" height="20" />
              </button>
            </div>
          </form>
          
        {/* <img src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} width={40} height={40} alt="logo" className={styles.sb_logouser}/> */}
          
        <Link to="/create" className={styles.createVG}>
          <span className={styles.spanCreateVG} data-hover="Post your game!">➕</span>
        </Link>


        </div>
          <Navbar  handleFilter={handleFilter} handleRating={handleRating} />
      </>

    )
}

export default SearchBar