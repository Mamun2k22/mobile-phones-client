import React, { useContext } from 'react';
import { Navigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)


    const handleLogout = () => {
        logOut()
            .then(() => {
                // Navigate('/')
            })
            .catch(error => console.log(error))
    }
    const error = useRouteError();
    return (
        <div>
            <p className='text-red-500'>Something is wrong</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p className='text-3xl'> <button className='btn btn-primary rounded-md text-white' onClick={handleLogout}>Sign Out</button></p>
        </div>
    );
};

export default DisplayError;