import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const data = {
    birth_year: '57BBY',
    created: '2014-12-10T16:16:29.192000Z',
    edited: '2014-12-20T21:17:50.325000Z',
    eye_color: 'blue-gray',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
    ],
    gender: 'male',
    hair_color: 'auburn, white',
    height: '182',
    homeworld: 'https://swapi.dev/api/planets/20/',
    mass: '77',
    name: 'Obi-Wan Kenobi',
    skin_color: 'fair',
    species: [],
    starships: ['https://swapi.dev/api/starships/48/', 'https://swapi.dev/api/starships/59/'],
    url: 'https://swapi.dev/api/people/10/',
    vehicles: ['https://swapi.dev/api/vehicles/38/'],
  };
  console.log(typeof data);

  return <Outlet />;
};

export default Layout;
