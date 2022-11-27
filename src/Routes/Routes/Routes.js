import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog';
import Category from '../../Pages/Category/Category';
import AllBuyer from '../../Pages/Dashboard/AllBuyer';
import AllSeller from '../../Pages/Dashboard/AllSeller';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import MyOrder from '../../Pages/Dashboard/Dashboard/MyOrder';
import AddProduct from '../../Pages/Dashboard/MyProducts/AddProduct';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login';
import Profile from '../../Pages/Profile/Profile';
import SignUp from '../../Pages/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute/PrivateRoute';
import Products from '../../Pages/Products'
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts'
import Error from '../../Pages/Error';
// import AdminRoutes from '../AdminRoutes/AdminRoutes';
// import PrivateRoute from '../PrivateRoute/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
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
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },

        ]
    }


])
export default router;