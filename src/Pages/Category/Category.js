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
        <div>
            <h1 className='text-center'>Brand Catagory</h1>

            <div className='grid lg:grid-cols-3 mx-auto lg:ml-20 sm:ml-32 gap-5'>
                {
                    catagoryName.map(catagory =>

                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                            <h1>Brand Name: {catagory.name}</h1>

                            <h4>If You want to see all Products of this Brand. </h4>
                            <Link to={`/category/Products/${catagory.name}`}>  <button className="btn btn-primary">See All Product Of This Brand</button></Link>

                        </div>


                    )
                }
            </div>
        </div>
    )
}

export default Category

