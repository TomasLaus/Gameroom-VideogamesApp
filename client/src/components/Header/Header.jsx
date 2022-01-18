import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.css'

function Header( { handleFilter, handleRating } ) {
    return (
        <>
            <nav className={styles.HeaderNav}>
                <SearchBar  handleFilter={handleFilter} handleRating={handleRating} />
                
            </nav>
        </>
    )
}

export default Header
