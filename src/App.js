import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Shipping from './components/Shipping/Shipping';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: productsAndCartLoader,
        },
        {
          path: '/shop',
          element: <Shop></Shop>,
          loader: productsAndCartLoader,
        },
        {
          path: '/orders',
          element: <Orders></Orders>,
          loader: productsAndCartLoader,
        },
        {
          path: '/inventory',
          element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
        },
        {
          path: '/shipping',
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <SignIn></SignIn>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;