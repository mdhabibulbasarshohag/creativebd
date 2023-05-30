import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistic from './components/Statistic/Statistic';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        {
          path: '/topics',
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Topics></Topics>
        },
        {
          path: '/topics/:topicsId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistic',
          loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Statistic></Statistic>
        },
        { path: '/blog', element: <Blog></Blog> },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
