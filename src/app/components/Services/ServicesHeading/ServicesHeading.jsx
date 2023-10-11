import React from 'react'
import styles from './servicesheading.module.css'
const ServicesHeading = () => {
    return (
        <div className={styles.services_header}>
            <a className={styles.link} href="">Services</a>
            <h3 className={styles.heading}>My Services</h3>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. reiciendis eius praesentium, harum, illum ?</p>
            <div className={styles.line}></div>
        </div>
    )
}

export default ServicesHeading