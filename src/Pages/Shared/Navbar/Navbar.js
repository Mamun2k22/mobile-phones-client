import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import background from '../../../assest/background.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(res => {
                toast.success('Successfully Logout')
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    const menuItems = <React.Fragment>

        <li className='rounded-md mr-3 text-white'><Link to={'/'}>Home</Link></li>
        <li className='rounded-md mr-3 text-white'><Link to={'/category'}>Category</Link></li>

        <li className='rounded-md mr-3 text-white'><Link to={'/blogs'}>Blog</Link></li>


        {
            user?.uid ?
                <>
                    <div className='flex gap-3'>
                        <li className='text-white'><Link to={'/dashboard'}>Dashboard</Link></li>
                        <li className='text-white'><Link to={'/profile'}>Profile</Link></li>
                        <li><button className='rounded-md text-white ' onClick={handleLogout}>Sign Out</button></li>
                    </div>
                </>
                :

                <>
                    <li className='text-white'><Link to={'/login'}>Login</Link></li>
                    <li className='text-white'><Link to={'/signup'}>SignUp</Link></li>

                </>


        }



    </React.Fragment>

    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'cover'
        }}
            className=''>
            <div className="navbar flex justify-between w-11/12 mx-auto py-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex justify-between ">


                            {menuItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="normal-case text-xl rounded-lg p-3 bg-blue-900 text-white " >Resale Phones</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>

    );
};

export default Navbar;