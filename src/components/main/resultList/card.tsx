import { FC } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './resultList.module.scss';
import { item } from '../../../pages/main/mainPage';
type cardPropstype = {
  setShowInfo: (val: boolean) => void;
  el: item;
  setSelected: (val: item) => void;
};
const Card: FC<cardPropstype> = ({ setShowInfo, el, setSelected }) => {
  return (
    <li
      onClick={(e) => {
        console.log('open');
        e.stopPropagation();
        setSelected(el);
        setShowInfo(true);
      }}
      key={uuid()}
    >
      <div>{el.name}</div>
      <div className={styles.imageContainer}>
        <img
          className={styles.resImage}
          src={`https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/main/static/assets/img/people/${el.id}.jpg?raw=true`}
          alt=""
        />
      </div>
    </li>
  );
};

export default Card;
