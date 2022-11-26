import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Category from '../../Pages/Category/Category';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login';
import Products from '../../Pages/Products';
import Profile from '../../Pages/Profile/Profile';
import SignUp from '../../Pages/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category',
                element: <Category></Category>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/Products/:name',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/Products/${params.name}`)
            },
        ]


    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [

            {

            }
        ]
    }


])
export default router;