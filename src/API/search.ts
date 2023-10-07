import axios from 'axios';
import { itemsArrtype } from '../App';

export const searchRequest = async (query: string) => {
  const result: itemsArrtype = await axios
    .get(
      query === ''
        ? 'https://swapi.dev/api/people/'
        : `https://swapi.dev/api/people/?search=${query}`
    )
    .then((data) =>
      data.data.results.map(
        (el: { name: string; skin_color?: string; height?: string; gender?: string }) => ({
          name: el.name,
          description: [
            `gender: ${el.gender || '--'}`,
            `heigth: ${el.height || '--'}`,
            `skin color: ${el.skin_color || '--'}`,
          ],
        })
      )
    );

  return result;
};
