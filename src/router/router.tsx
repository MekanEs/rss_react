import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from '../pages/main/mainPage';
import Layout from '../components/layout/layot';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/:page" element={<Main />} />
    </Route>
  )
);
