import axios from 'axios';
import { itemsArrtype } from '../pages/main/mainPage';
type responeResultstype = {
  birth_year?: string;
  eye_color?: string;
  films?: string[];
  gender: string;
  hair_color: string;
  height?: string;
  homeworld?: string;
  mass?: string;
  name: string;
  skin_color: string;
  species?: never[];
  starships?: string[];
  url: string;
  vehicles?: string[];
};
export type responsetype = {
  total: number;
  items: responeResultstype[];
};

export const searchRequest = async (
  query: string,
  page: string
): Promise<{
  items: itemsArrtype;
  total: number | undefined;
}> => {
  try {
    const result: { items: itemsArrtype; total: number } = await axios
      .get(
        query === ''
          ? `https://swapi.dev/api/people/?${page}`
          : `https://swapi.dev/api/people/?search=${query}&&?${page}`
      )
      .then((data) => {
        const resObj = { items: [], total: 0 };
        resObj.items = data.data.results.map((el: responeResultstype) => ({
          name: el.name,
          id: el.url.split('/')[5],
          description: [
            `gender: ${el.gender || '--'}`,
            `heigth: ${el.height || '--'}`,
            `skin color: ${el.skin_color || '--'}`,
          ],
        }));
        resObj.total = data.data.count;
        return resObj;
      });

    return result;
  } catch (e) {
    return { items: [], total: 0 };
  }
};
