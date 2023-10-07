import React from 'react';
import styles from './loader.module.scss';
const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
