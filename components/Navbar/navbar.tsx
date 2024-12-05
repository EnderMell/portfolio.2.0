import React from 'react';
import styles from './compoments.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <h1>Michelle Tuinbeek</h1>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
