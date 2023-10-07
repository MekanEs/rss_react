import React, { ChangeEvent } from 'react';
import './App.css';
import ResultList from './components/main/resultList/resultList';
import SearchBar from './components/search/searchBar';
import { searchRequest } from './API/search';

export const SEARCH_VALUE_KEY = 'serch_value';
export type setSearchValuetype = (e: ChangeEvent<HTMLInputElement>) => void;
export type itemsArrtype = { name: string; description: string[] }[];
type appStatetype = { searchValue: string; itemsArr: itemsArrtype; isPending: boolean };

class App extends React.Component<object, appStatetype> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem(SEARCH_VALUE_KEY) || '',
      itemsArr: [],
      isPending: false,
    };

    this.setSearchValue = this.setSearchValue.bind(this);
    this.setIsPending = this.setIsPending.bind(this);
    this.setItems = this.setItems.bind(this);
    this.search = this.search.bind(this);
  }

  setIsPending: (value: boolean) => void = (value) => {
    this.setState({ ...this.state, isPending: value, searchValue: this.state.searchValue.trim() });
  };

  setSearchValue: setSearchValuetype = (e) => {
    this.setState({ ...this.state, searchValue: e.target.value });
  };

  setItems = (arr: itemsArrtype) => {
    this.setState({
      ...this.state,
      itemsArr: arr,
      isPending: false,
    });
  };

  search: () => void = async () => {
    this.setIsPending(true);
    localStorage.setItem(SEARCH_VALUE_KEY, this.state.searchValue);
    const response = await searchRequest(this.state.searchValue);
    this.setItems(response);
  };

  componentDidMount(): void {
    this.search();
  }

  render() {
    return (
      <div className="app">
        <SearchBar
          setSearchValue={this.setSearchValue}
          searchValue={this.state.searchValue}
          search={this.search}
        />
        <ResultList itemsArr={this.state.itemsArr} isPending={this.state.isPending} />
      </div>
    );
  }
}

export default App;
