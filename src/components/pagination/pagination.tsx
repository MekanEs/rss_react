import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import styles from './pagination.module.scss';
import cx from 'classnames';
const Pagination: FC<{ total: number; page: number }> = ({ total, page }) => {
  const pages = Math.floor(total / 9);
  const nav = useNavigate();
  const handlePage = (index: number) => {
    nav(`/page=${index + 1}`);
  };
  return (
    <div className={styles.container}>
      {Array(pages)
        .fill(0)
        .map((_el, index) => {
          return (
            <div
              className={cx(styles.pageBtn, page === index + 1 && styles.active)}
              key={uuid()}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </div>
          );
        })}
    </div>
  );
};

export default Pagination;
