import React from 'react';
import styles from './PageHeader.module.css'; // Make sure to create a CSS file for styling
import Image from 'next/image';
import pngimg from './pngimg.png'

const PageHeader = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.content}>
      
      <div className={styles.social_icons}>
        {/* icons */}
      </div>
        <h1>I am Musaddiq Babar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, velit nisi id officiis nulla autem </p>
        <div className={styles.buttons}>
          <button className={styles.buttons1}>Button</button>
          <button className={styles.buttons2}>b</button>
        </div>
      </div>

      <div className={styles.header_image}>
        <Image
          src={pngimg}
          // layout='responsive'
          width={200}
          height={250}
          alt="Picture of the author"
        />
        {/* <img src={pngimg} alt="" /> */}
      </div>
    </div>
  );
};

export default PageHeader;
