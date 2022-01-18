import React, {useState} from 'react'
import CreatedOrExist from '../Filters/CreatedOrExist'
import Genres from '../Filters/Genres'
import Years from '../Filters/Years'
import './Navbar.css'

function Navbar( {handleFilter, handleRating} ) {
    const [isMobile, setIsMobile] = useState(false)
 

    return (
        <nav className="navbar">
            <ul className={isMobile ? 'nav-links-mobile' : "nav-links" }>
                
                <div className='navFilters'>


                <CreatedOrExist />
                <Genres/>
                <Years/>


                <div style={{height: '100px'}}>
                        <select onChange={(event) => handleFilter(event)} defaultValue={""}>
                            <option value="" disabled>Filter alphabetically</option>
                            <option value='a-z'>A-Z</option>
                            <option value='z-a'>Z-A</option>
                        </select>
                    </div>

                    <div style={{height: '100px'}}>
                        <select onChange={(event) => handleRating(event)} defaultValue="">
                        <option value="" disabled>Filter by rating</option>
                            <option value='asc'>Ascendant</option>
                            <option value='desc'>Descendant</option>
                        </select>   
                    </div>
            

                </div>

            </ul>
            <button className="mobile-menu-icon" 
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    )
}

export default Navbar
