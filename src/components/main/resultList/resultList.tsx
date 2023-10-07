import React from 'react';
import styles from './resultList.module.scss';
import { itemsArrtype } from '../../../App';
import { v4 as uuid } from 'uuid';
import Loader from '../../loader/loader';

type ResultListPropstype = { itemsArr: itemsArrtype; isPending: boolean };

class ResultList extends React.Component<ResultListPropstype> {
  constructor(props: ResultListPropstype) {
    super(props);
  }

  render() {
    return this.props.isPending ? (
      <Loader />
    ) : (
      <div className={styles.container}>
        <ul className={styles.list}>
          {this.props.itemsArr.map((el) => {
            return (
              <li key={uuid()}>
                <div>{el.name}</div>
                <div>
                  <h3>description:</h3>

                  {el.description.map((el) => (
                    <div key={uuid()}>{el}</div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ResultList;
