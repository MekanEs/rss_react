import { ChangeEvent, FC, useEffect, useState } from 'react';
import './main.css';
import { searchRequest } from '../../API/search';
import SearchBar from '../../components/search/searchBar';
import ResultList from '../../components/main/resultList/resultList';
import { useParams } from 'react-router-dom';
import Pagination from '../../components/pagination/pagination';

export const SEARCH_VALUE_KEY = 'serch_value';
export type setSearchValuetype = (e: ChangeEvent<HTMLInputElement>) => void;
export type item = { name: string; description: string[]; id: string; imageURL: string };
export type itemsArrtype = item[];

const Main: FC = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [itemsArr, setItemsArr] = useState<itemsArrtype>([]);
  const [total, setTotal] = useState<number | undefined>(undefined);
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem(SEARCH_VALUE_KEY) || ''
  );
  const { page } = useParams();

  const search: () => void = async () => {
    setIsPending(true);
    localStorage.setItem(SEARCH_VALUE_KEY, searchValue);
    const response = await searchRequest(searchValue, page || 'page=1');
    console.log(response);

    setItemsArr(response.items);
    setTotal(response.total);
    setIsPending(false);
  };

  useEffect(() => {
    search();
  }, [page]);

  return (
    <div className="app">
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} search={search} />
      <ResultList itemsArr={itemsArr} isPending={isPending} />
      {total ? <Pagination total={total} page={Number(page?.slice(-1)) || 1} /> : ''}
    </div>
  );
};

export default Main;
