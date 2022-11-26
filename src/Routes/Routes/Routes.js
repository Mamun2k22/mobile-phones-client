import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog';
import Category from '../../Pages/Category/Category';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login';
import Products from '../../Pages/Products';
import Profile from '../../Pages/Profile/Profile';
import SignUp from '../../Pages/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute/PrivateRoute';
// import AdminRoutes from '../AdminRoutes/AdminRoutes';
// import PrivateRoute from '../PrivateRoute/PrivateRoute/PrivateRoute';

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
                path: '/blogs',
                element: <Blog></Blog>
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }


])
export default router;