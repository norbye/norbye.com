import React from 'react';
import styles from './BusinessCard.module.css';

export function BusinessCard() {
  return (
    <div className={styles.businessCard}>
      <div className={styles.stretcher}></div>
      <div className={styles.front}>
        <div className={styles.picture}>
          <img src={'/assets/mmsbilde.jpg'} alt={'Jonatan Norbye'} />
          <b>JONATAN NORBYE</b>
          <span>INNEHAVER & UTVIKLER</span>
        </div>
        <div className={styles.details}>
          <div className={styles.icons}>
            <span>I1</span>
            <span>I2</span>
            <span>I3</span>
            <div className={styles.triangleBottom}></div>
          </div>
          <div className={styles.contactInfo}>
            <span>
              <a href="tel:004746782712">467 82 712</a>
            </span>
            <span>
              <a href="mailto:jonatan@norbye.com">jonatan@norbye.com</a>
            </span>
            <span>norbye.com</span>
          </div>
        </div>
      </div>
      <div className={styles.back}>
        <img src={'/assets/logo.png'} alt="Norbye Programmering" />
      </div>
    </div>
  );
}
