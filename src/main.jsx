import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './components/ErrorPage.jsx';
import Details from './pages/Details/Details.jsx';
import Home from './pages/Home/Home.jsx';
import { FavoriteProvider } from './context/FavoriteContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'details/:id',
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoriteProvider>
    <RouterProvider router={router} />
  </FavoriteProvider>
);
