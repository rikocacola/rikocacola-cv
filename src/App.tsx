import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PortfolioLayout } from '~/layouts/PortfolioLayout';
import { NotFound } from '~/routes/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioLayout />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}