import React from 'react';
import styles from './github.module.css';
import Image from 'next/image';

const GitHubLink = () => {
  return (
    <div className={styles.githubContainer}>
      <h2 className={styles.title}>My GitHub</h2>
      <div className={styles.githubButton}>
        <a href="https://github.com/EnderMell" target="_blank" rel="noopener noreferrer">
          <div className={styles.imageWrapper}>
            <Image
              src="/Gihub.jpg"
              width={500}
              height={500}
              alt="Github Portfolio"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default GitHubLink;
