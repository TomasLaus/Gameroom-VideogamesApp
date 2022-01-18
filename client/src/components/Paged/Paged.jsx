import React from 'react';
import styles from './Paged.module.css';

function Paged({gamesLength, gamesPerPage, Page}) {
    
    const pageNumber = [];

    for (let i = 0; i <  Math.ceil(gamesLength/gamesPerPage); i++) {
        pageNumber.push(i + 1);
    }
    
    return (
        <div className={styles.PagedDiv}>

            <nav  className={styles.PagedNav}>
                <ul className={styles.ulPaged}>
                    {
                        pageNumber && pageNumber.map(num => (
                            <button onClick={()=> Page(num)} key={num} className={styles.buttonPaged}>
                                {num}
                            </button>
                        ))
                    }
                </ul>
            </nav>

        </div>
    )
}

export default Paged
