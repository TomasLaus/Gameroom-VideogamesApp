import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({image, name, genres, id}) => {
    return (
        // <div className={styles.Cardcard}>
        //     <Link to={`/videogames/${id}`} style={{textDecoration: 'none', color: 'black'}}>
        //     <img src={image} alt={name} height={100} width={100} className={styles.CardImage}/>
        //     <h3 className={styles.CardName}> {name} </h3>
        //     <section  className={styles.CardSection}>
        //         <h4 className={styles.CardGenresTitle}>Genres:</h4>
        //         <span className={styles.CardSpanGenres}>{genres}</span>
        //     </section>
        //     </Link>
        // </div>
        <div className={styles.wrapper}>
            <div className={styles.card}><img alt="" src={image}/>
                <div className={styles.info}>
                    <h1>{name}</h1>
                    <h3 className={styles.cardGenreTitle}>Genres</h3>
                    <p>{genres}</p>
                    <Link to={`/videogames/${id}`} style={{textDecoration: 'none', color: 'black'}}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;