import React, { FC } from 'react';
import styles from './serachBar.module.scss';

type searchBarPropstype = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  search: () => void;
};

const SearchBar: FC<searchBarPropstype> = ({ setSearchValue, searchValue, search }) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" />
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
};
export default SearchBar;
