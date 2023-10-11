import React from 'react'

import styles from './about.module.css'
import Details from './Details/Details'
const About = () => {
    return (
        <div className={styles.about_header}>
            <h3>About Me</h3>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. reiciendis eius praesentium, harum, illum ?</p>
            <Details/>
        </div>
    )
}

export default About