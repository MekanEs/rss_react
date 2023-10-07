import React, { ChangeEvent } from 'react';
import styles from './serachBar.module.scss';
import { setSearchValuetype } from '../../App';

type SearchBarPropstype = {
  searchValue: string;
  setSearchValue: setSearchValuetype;
  search: () => void;
};

class SearchBar extends React.Component<SearchBarPropstype> {
  constructor(props: Readonly<SearchBarPropstype>) {
    super(props);
  }

  setSearchValue(e: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      searchValue: e.target.value,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <input value={this.props.searchValue} onChange={this.props.setSearchValue} type="text" />
          <button onClick={this.props.search}>Search</button>
        </div>
      </div>
    );
  }
}
export default SearchBar;
