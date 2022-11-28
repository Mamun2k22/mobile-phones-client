import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    const [catagoryName, setCatagoryName] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCatagoryName(data))
    }, [])


    return (
        <div className='mt-16 w-11/12 mx-auto'>
            <h1 className='text-center text-4xl font-bold mb-10'>Brand Category</h1>

            <div className='grid lg:grid-cols-3 gap-8'>
                {
                    catagoryName.map(catagory =>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={catagory.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Brand Name: {catagory.name}</h2>
                                <div className="card-actions">
                                    <Link to={`/category/Products/${catagory.name}`}><button className="btn btn-primary">See All Phones Of This Brand</button></Link>

                                </div>
                            </div>
                        </div>



                    )
                }
            </div>
        </div>
    )
}

export default Category

