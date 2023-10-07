import { FC } from 'react';
import styles from './detailed.module.scss';
import cx from 'classnames';
import { item } from '../../../../pages/main/mainPage';
import { v4 as uuid } from 'uuid';

type detailedPropstype = { showInfo: boolean; setShowInfo: (val: boolean) => void; el: item };

const Detailed: FC<detailedPropstype> = ({ showInfo, setShowInfo, el }) => {
  return (
    <div className={cx(styles.container, showInfo ? styles.visible : styles.hidden)}>
      <div className={styles.headContainer}>
        <p>{el?.name}</p>{' '}
        <button className={styles.closeBtn} onClick={() => setShowInfo(false)}>
          X
        </button>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.resImage} src={el?.imageURL} alt="" />
      </div>
      <div className={styles.description}>
        <h4>Description:</h4>
        {el?.description.map((el) => <div key={uuid()}>{el}</div>)}
      </div>
    </div>
  );
};

export default Detailed;
