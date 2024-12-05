
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <h2>Neem contact met me op
            <br/>Email:
          </h2>
            m.n.tuinbeek05@gmail.com
          
        </div>
        <p className={styles.footerText}>© 2024 Michelle Tuinbeek</p>
      </div>
    </footer>
  );
};

export default Footer;
