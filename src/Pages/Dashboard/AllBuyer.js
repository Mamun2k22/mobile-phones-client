import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ConfirmationModal from '../ConfirmationModal';

const AllBuyer = () => {

    const [deletingBuyer, setDeletingBuyer] = useState(null);
    const [buyers, setBuyers] = useState([]);
    const closeModal = () => {
        setDeletingBuyer(null);
    };




    useEffect(() => {
        axios.get('http://localhost:5000/allseller?role=buyer')
            .then(data => {
                const buyers = data.data;
                setBuyers(buyers)
            })
    }, [])


    const handleDeleteUser = buyer => {
        fetch(`http://localhost:5000/user/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${buyer.name} deleted successfully`)
                }
            })
    };





    return (
        <div className='mt-10 w-full'>
            <h1 className='text-3xl font-semibold mb-5'>All Users</h1>
            <div className='overflow-x-auto'>
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Admin</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer?.designation}</td>
                                <td>
                                    <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBuyer &&

                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.DisplayName}. It cannot be undone.`}
                    successAction={handleDeleteUser}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}

                >

                </ConfirmationModal>}
        </div>
    )
}

export default AllBuyer