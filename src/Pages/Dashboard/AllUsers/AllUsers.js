
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DeleteConfirm from '../../DeleteConfirm';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    };
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Make admin successfully')
                    refetch();
                }
            })


    }
    const handleDeleteUser = (user) => {
        fetch(`http://localhost:5000/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    };

    return (
        <div>
            <h2 className="text-2xl">All users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingUser &&

                <DeleteConfirm
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingUser.DisplayName}. It cannot be undone.`}
                    successAction={handleDeleteUser}
                    successButtonName="Delete"
                    modalData={deletingUser}
                    closeModal={closeModal}

                >

                </DeleteConfirm>}


        </div >
    );
};

export default AllUsers;