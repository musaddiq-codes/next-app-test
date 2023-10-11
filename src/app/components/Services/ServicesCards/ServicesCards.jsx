import React from 'react'

import styles from './ServicesCards.module.css'
const ServicesCards = ({ icon, title, description }) => {

    return (
        <div className={styles.card}>
            
            <div className={styles.icon}>{icon}icon</div>
            <h4 >{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default ServicesCards