import React from 'react'

import styles from './details.module.css'
import Image from 'next/image'
import pngimg from './pngimg.png'

const Details = () => {
    return (
        <div className={styles.about_container}>
            <div className={styles.about_image}>
                <Image
                    src={pngimg}
                    // layout='responsive'
                    width={200}
                    height={250}
                    alt="Picture of the author"
                />
                {/* <img src={pngimg} alt="" /> */}
            </div>
            <div className={styles.about_information}>
                <h1 className={styles.about_info_hello}>Hi There</h1>
                <p className={styles.about_info_paras}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa similique </p>   
                <p className={styles.about_info_paras}>commodi veniam eligendi ipsam quia asperiores saepe iusto inventore id fugit maxime itaque totam eveniet amet, delectus dolores placeat in?</p>
                <div className={styles.informations}>
                    <div className={styles.informations_divs}>
                        <p className={styles.info_titels}>aboutme</p>
                        <p>meinformation</p>
                    </div>
                    <div className={styles.informations_divs}>
                        <p className={styles.info_titels}>aboutme</p>
                        <p>meinformation</p>
                    </div>
                    <div className={styles.informations_divs}>
                        <p className={styles.info_titels}>aboutme</p>
                        <p>meinformation</p>
                    </div>
                    <div className={styles.informations_divs}>
                        <p className={styles.info_titels}>aboutme</p>
                        <p>meinformation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details