import React from 'react'
import styles from './Loader.module.css'

function Loader() {
    return (
        <div className={styles.lds_ripple}><div></div><div></div></div>
    )
}

export default Loader
