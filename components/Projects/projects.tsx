
import React from 'react';
import Image from 'next/image';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Mijn Projecten</h1>
      <div className={styles.grid}>
        <div className={styles.projectItem}>
          <a href="https://github.com/fugni/hovenier-opdracht-glu" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/hoveniers.png"
              width={400} 
              height={300} 
              alt="Project 1" 
              className={styles.projectImage}
            />
          </a>
          <h3>Hoveniers Website<br></br> 1e Jaar</h3>
        </div>
        <div className={styles.projectItem}>
          <a href="https://github.com/EnderMell/eigenProject2" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/Pink.png" 
              width={400} 
              height={300} 
              alt="Project 2" 
              className={styles.projectImage}
            />
          </a>
          <h3>Eigen Project<br></br>2e Jaar</h3>
        </div>
        <div className={styles.projectItem}>
          <a href="https://www.onkpoker.nl/kennisbank/poker-termen" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/Project Poker Termen .png"
              width={400} 
              height={300} 
              alt="Project 3" 
              className={styles.projectImage}
            />
          </a>
          <h3>Poker Termen<br></br>Stage 3e Jaar</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
