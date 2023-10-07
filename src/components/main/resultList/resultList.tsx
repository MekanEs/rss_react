import { FC, useEffect, useState } from 'react';
import styles from './resultList.module.scss';
import Loader from '../../loader/loader';
import { item, itemsArrtype } from '../../../pages/main/mainPage';
import Detailed from './detailed/detailed';
import Card from './card';
import { v4 as uuid } from 'uuid';

type ResultListPropstype = { itemsArr: itemsArrtype; isPending: boolean };

const ResultList: FC<ResultListPropstype> = ({ itemsArr, isPending }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [selected, setSelected] = useState<item>(itemsArr[0]);
  useEffect(() => {
    setShowInfo(false);
  }, [itemsArr]);
  return isPending ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      {itemsArr.length === 0 ? (
        <div>nothing found</div>
      ) : (
        <>
          <ul
            onClick={(e) => {
              e.stopPropagation();

              setShowInfo(false);
            }}
            className={styles.list}
          >
            {itemsArr.map((el) => {
              return (
                <Card key={uuid()} el={el} setSelected={setSelected} setShowInfo={setShowInfo} />
              );
            })}
          </ul>
          <Detailed el={selected} setShowInfo={setShowInfo} showInfo={showInfo} />
        </>
      )}
    </div>
  );
};

export default ResultList;
