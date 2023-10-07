import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { FC } from 'react';

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
