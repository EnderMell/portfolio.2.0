import React from 'react';
import Image from 'next/image'; 
import styles from './header.module.css'; 
import profilePhoto from '../../public/image/pfp.jpg';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <div className={styles.introduction}>
            <h1>Hallo! Ik ben Michelle</h1>
            <p>
              Ik ben 19 jaar en zit in mijn laatste jaar van webdevelopment. Ik
              heb voornamelijk kennis voor frontend development en maak hiervoor
              gebruik van HTML, CSS en JavaScript. Ook vind ik het framework Next.js
              erg fijn om mee te werken.
            </p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.profile}>
            <Image
              src={profilePhoto.src}
              width={150}
              height={150}
              alt="Profile Photo"
              className={styles.profilePhoto}
            />
          </div>
        </div>

        <div className={styles.experienceSection}>
          <h2>Mijn Ervaring</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Php</li>
            <li>Next.js</li>
            <li>React</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
