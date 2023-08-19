import './styles/app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
